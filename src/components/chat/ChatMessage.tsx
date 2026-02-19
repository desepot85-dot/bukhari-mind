import ReactMarkdown from "react-markdown";
import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ChatMessage as ChatMessageType } from "@/hooks/use-ai-chat";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-3 py-4", isUser ? "flex-row-reverse" : "flex-row")}>
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          isUser
            ? "bg-primary text-primary-foreground"
            : "gradient-primary text-primary-foreground shadow-elegant"
        )}
      >
        {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
      </div>

      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-sm"
            : "bg-card border border-border rounded-tl-sm shadow-sm"
        )}
      >
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
