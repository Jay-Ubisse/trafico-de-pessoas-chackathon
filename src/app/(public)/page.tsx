"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

import HeroSection from "@/components/hero-section";

export default function Home() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />

      <div className="fixed bottom-12 right-12">
        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium shadow-lg"
            >
              Denunciar
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px] h-[450px] flex flex-col overflow-hidden">
            <DialogHeader>
              <DialogTitle>Denuncie aqui</DialogTitle>
              <DialogDescription>
                Mande-nos a sua denúncia, incluindo os dados da vítima (nome,
                residência, género, idade, entre outros dados que achar
                relevante.)
              </DialogDescription>
            </DialogHeader>

            {/* Área das mensagens */}
            <div className="flex-1 overflow-y-auto pr-2 py-2 space-y-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="whitespace-pre-wrap flex gap-2"
                >
                  {message.role === "user" ? (
                    <p className="font-semibold">Você:</p>
                  ) : (
                    <p className="font-semibold">Safenet:</p>
                  )}
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <div key={`${message.id}-${i}`}>
                            <p className="text-sm">{part.text}</p>
                          </div>
                        );
                    }
                  })}
                </div>
              ))}

              {status === "submitted" && (
                <div className="flex gap-2">
                  <p className="font-semibold">Safenet:</p>
                  <p className="text-sm italic text-muted-foreground">
                    <TypingDots />
                  </p>
                </div>
              )}
            </div>

            {/* Campo de input e botão de envio */}
            <DialogFooter className="w-full mt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!input.trim()) return;
                  sendMessage({ text: input });
                  setInput("");
                }}
                className="flex w-full gap-2"
              >
                <Input
                  placeholder="Envie-nos a sua denúncia?"
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value)}
                />
                <Button type="submit" className="flex items-center gap-2">
                  <SendHorizonal className="size-4" />
                </Button>
              </form>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="flex space-x-1">
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
    </span>
  );
}
