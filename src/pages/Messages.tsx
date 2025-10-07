import { Search, Send, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Messages() {
  const conversations = [
    {
      name: "Sarah Chen",
      lastMessage: "Thanks for the intro! Let's schedule a call.",
      time: "2m ago",
      unread: 2,
      online: true,
    },
    {
      name: "D2C Founders Group",
      lastMessage: "Alex: Great insights on customer acquisition",
      time: "15m ago",
      unread: 5,
      online: false,
      isGroup: true,
    },
    {
      name: "Dr. Alex Kumar",
      lastMessage: "Here's the resource I mentioned",
      time: "1h ago",
      unread: 0,
      online: true,
    },
    {
      name: "Maria Rodriguez",
      lastMessage: "Your pitch deck looks solid!",
      time: "2h ago",
      unread: 0,
      online: false,
    },
    {
      name: "Women Founders Group",
      lastMessage: "Priya: Anyone going to the summit?",
      time: "3h ago",
      unread: 8,
      online: false,
      isGroup: true,
    },
  ];

  const currentMessages = [
    {
      sender: "Sarah Chen",
      message: "Hi John! I reviewed your product. Really impressive work!",
      time: "10:30 AM",
      isOwn: false,
    },
    {
      sender: "You",
      message: "Thanks Sarah! I'd love to get your feedback on the go-to-market strategy.",
      time: "10:32 AM",
      isOwn: true,
    },
    {
      sender: "Sarah Chen",
      message: "Absolutely! I think focusing on the SMB segment first makes sense. Happy to share some insights from my experience.",
      time: "10:35 AM",
      isOwn: false,
    },
    {
      sender: "You",
      message: "That would be amazing. Are you available for a quick call this week?",
      time: "10:37 AM",
      isOwn: true,
    },
    {
      sender: "Sarah Chen",
      message: "Thanks for the intro! Let's schedule a call.",
      time: "10:40 AM",
      isOwn: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="mt-2 text-muted-foreground">Connect with founders, mentors, and community members</p>
      </div>

      {/* Messaging Interface */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Conversations List */}
        <Card className="shadow-soft">
          <CardContent className="p-0">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-10 border-border" />
              </div>
            </div>

            <ScrollArea className="h-[600px]">
              <div className="divide-y divide-border">
                {conversations.map((conv, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 hover:bg-muted/50 cursor-pointer transition-colors"
                  >
                    <div className="relative">
                      <Avatar className="h-12 w-12 bg-gradient-to-br from-primary to-secondary">
                        <AvatarFallback className="text-primary-foreground font-semibold">
                          {conv.isGroup ? (
                            <Users className="h-6 w-6" />
                          ) : (
                            conv.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                          )}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground truncate">{conv.name}</h4>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    </div>

                    {conv.unread > 0 && (
                      <Badge className="bg-primary text-primary-foreground">{conv.unread}</Badge>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Active Conversation */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardContent className="p-0">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-gradient-to-br from-primary to-secondary">
                  <AvatarFallback className="text-primary-foreground font-semibold">SC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">Sarah Chen</h3>
                  <p className="text-xs text-muted-foreground">Active now</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="h-[500px] p-4">
              <div className="space-y-4">
                {currentMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                        msg.isOwn
                          ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.isOwn ? "text-primary-foreground/80" : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  className="flex-1 border-border"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
