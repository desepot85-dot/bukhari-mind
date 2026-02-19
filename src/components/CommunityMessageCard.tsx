import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

interface CommunityMessageCardProps {
  message: string;
}

export default function CommunityMessageCard({ message }: CommunityMessageCardProps) {
  return (
    <Card className="p-6 bg-card/80 backdrop-blur-sm border-accent/20">
      <div className="flex gap-3">
        <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <MessageCircle className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-1">
            Message à la Communauté
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </Card>
  );
}
