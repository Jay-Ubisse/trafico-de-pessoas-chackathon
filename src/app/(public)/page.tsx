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
  const { messages, sendMessage } = useChat();

  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />

      {/*MODAL DA IA */}
      {/**   <DenunciarDialog /> */}
      <div className="fixed bottom-12 right-12">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Denunciar</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px] h-[400px] flex flex-col overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Denuncie aqui</DialogTitle>
              <DialogDescription>
                Conta-nos o que aconteceu e nós iremos dar assistência.
              </DialogDescription>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto pr-2">
              {messages.map((message) => (
                <div key={message.id} className="whitespace-pre-wrap mb-2">
                  <p className="font-semibold">
                    {message.role === "user" ? "Você:" : "Grupo 4 Chatbot:"}
                  </p>
                  {message.parts.map((part, i) =>
                    part.type === "text" ? (
                      <div key={`${message.id}-${i}`}>{part.text}</div>
                    ) : null
                  )}
                </div>
              ))}
            </div>

            <DialogFooter className="w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage({ text: input });
                  setInput("");
                }}
                className="flex gap-2"
              >
                <Input
                  className="w-80"
                  placeholder="Como podemos ajudar?"
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value)}
                />
                <Button type="submit">
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
