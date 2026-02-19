import { useState, useEffect, useCallback, useRef } from "react";
import { fetchVerseOfDay } from "@/lib/daily-content";
import { getMessageOfDay } from "@/lib/daily-content";

const STORAGE_KEY = "bukhari-mind-reminders-enabled";
const LAST_SENT_KEY = "bukhari-mind-reminder-last-sent";
const REMINDER_HOUR = 8;
const REMINDER_MINUTE = 0;

export type NotificationPermissionState = "default" | "granted" | "denied";

export function useNotifications() {
  const [permission, setPermission] = useState<NotificationPermissionState>("default");
  const [remindersEnabled, setRemindersEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!("Notification" in window)) return;
    setPermission(Notification.permission as NotificationPermissionState);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      setRemindersEnabled(stored === "true");
    } catch {
      setRemindersEnabled(false);
    }
  }, []);

  const checkAndSendReminder = useCallback(async () => {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    if (localStorage.getItem(STORAGE_KEY) !== "true") return;

    const now = new Date();
    const today = now.toISOString().slice(0, 10);
    const lastSent = localStorage.getItem(LAST_SENT_KEY);
    if (lastSent === today) return;

    if (now.getHours() !== REMINDER_HOUR || now.getMinutes() !== REMINDER_MINUTE) return;

    try {
      const verse = await fetchVerseOfDay(now);
      const message = getMessageOfDay(now);
      const parts = [
        "Ton Hadith du jour est prêt sur Bukhari-Mind.",
        verse?.textFr ? `Verset : « ${verse.textFr.slice(0, 60)}${verse.textFr.length > 60 ? "…" : ""} »` : null,
        `Conseil : ${message.slice(0, 80)}${message.length > 80 ? "…" : ""}`,
      ].filter(Boolean);
      const body = parts.join(" ");

      const reg = await navigator.serviceWorker.getRegistration();
      if (reg && reg.active) {
        reg.active.postMessage({
          type: "SHOW_DAILY_REMINDER",
          url: "/",
          body: body || undefined,
        });
        localStorage.setItem(LAST_SENT_KEY, today);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!remindersEnabled || permission !== "granted") {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    checkAndSendReminder();
    intervalRef.current = setInterval(checkAndSendReminder, 60 * 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [remindersEnabled, permission, checkAndSendReminder]);

  const enableReminders = useCallback(async (): Promise<boolean> => {
    setError(null);
    if (!("Notification" in window)) {
      setError("Les notifications ne sont pas supportées par ce navigateur.");
      return false;
    }
    setIsLoading(true);
    try {
      if (Notification.permission === "denied") {
        setPermission("denied");
        setError("Les notifications ont été bloquées. Autorisez-les dans les paramètres du navigateur.");
        setIsLoading(false);
        return false;
      }
      if (Notification.permission === "granted") {
        setPermission("granted");
        const reg = await navigator.serviceWorker.register("/sw-notifications.js", { scope: "/" });
        await reg.update();
        localStorage.setItem(STORAGE_KEY, "true");
        setRemindersEnabled(true);
        setIsLoading(false);
        return true;
      }
      const result = await Notification.requestPermission();
      setPermission(result as NotificationPermissionState);
      if (result === "denied") {
        setError("Permission refusée.");
        setIsLoading(false);
        return false;
      }
      if (result === "granted") {
        const reg = await navigator.serviceWorker.register("/sw-notifications.js", { scope: "/" });
        await reg.update();
        localStorage.setItem(STORAGE_KEY, "true");
        setRemindersEnabled(true);
        setIsLoading(false);
        return true;
      }
      return false;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur lors de l'activation.");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const disableReminders = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setRemindersEnabled(false);
  }, []);

  return {
    permission,
    remindersEnabled,
    isLoading,
    error,
    enableReminders,
    disableReminders,
    supported: "Notification" in window && "serviceWorker" in navigator,
  };
}
