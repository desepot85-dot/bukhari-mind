import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAiChat } from "@/hooks/use-ai-chat";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import WelcomeScreen from "@/components/chat/WelcomeScreen";

const Chat = () => {
  const { messages, isLoading, sendMessage, clearChat } = useAiChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border bg-background/80 backdrop-blur-sm px-4 py-3">
        <div className="flex items-center gap-3">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-xl">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
              <Bot className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-foreground">Assistant Al-Bukhari</h1>
              <p className="text-xs text-muted-foreground">Propulsé par l'IA</p>
            </div>
          </div>
        </div>

        {messages.length > 0 && (
          <Button variant="ghost" size="icon" onClick={clearChat} className="rounded-xl text-muted-foreground hover:text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-hidden">
        {messages.length === 0 ? (
          <ScrollArea className="h-full">
            <WelcomeScreen onSuggestionClick={sendMessage} />
          </ScrollArea>
        ) : (
          <div ref={scrollRef} className="h-full overflow-y-auto">
            <div className="mx-auto max-w-3xl px-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex gap-3 py-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-elegant">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-card border border-border px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
};

export default Chat;
