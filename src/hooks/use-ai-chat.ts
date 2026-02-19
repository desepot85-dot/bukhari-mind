import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function useAiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const apiMessages = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const { data, error } = await supabase.functions.invoke("ai-chat", {
        body: { messages: apiMessages },
      });

      if (error) throw error;

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("AI Chat error:", error);
      const errorMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "Désolé, une erreur est survenue. Veuillez réessayer.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  return { messages, isLoading, sendMessage, clearChat };
}
