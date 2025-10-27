"use client";

import DenunciarDialog from "@/components/ui/DenunciarDialog";
import HeroSection from "./heroSection/page";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <DenunciarDialog />
    </div>
  );
}

// "use client";

// import DenunciarDialog from "@/components/ui/DenunciarDialog";
// import HeroSection from "./heroSection/page";

// export default function Home() {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center overflow-x-hidden">
//       {/* Em breve: Hero Section */}
//       <HeroSection />

//       {/* Componente de denúncia */}
//       <DenunciarDialog />
//     </div>
//   );
// }

// "use client";

// import { useChat } from "@ai-sdk/react";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { SendHorizonal } from "lucide-react";

// export default function Home() {
//   const [input, setInput] = useState("");
//   const { messages, sendMessage } = useChat();

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center">
//       <h1>Landing page</h1>
//       <div className="fixed bottom-12 right-12">
//         <Dialog>
//           <form>
//             <DialogTrigger asChild>
//               <Button variant="outline">Denunciar</Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] h-[400px] flex flex-col overflow-y-auto">
//               <DialogHeader>
//                 <DialogTitle>Denuncie aqui</DialogTitle>
//                 <DialogDescription>
//                   Conta-nos o que aconteceu e nos iremos dar assistencia
//                 </DialogDescription>
//               </DialogHeader>
//               <div className="flex-1">
//                 {messages.map((message) => (
//                   <div key={message.id} className="whitespace-pre-wrap">
//                     {message.role === "user" ? (
//                       <p className="font-semibold">Voce: </p>
//                     ) : (
//                       <p className="font-semibold">Grupo 4 Chatbot: </p>
//                     )}
//                     {message.parts.map((part, i) => {
//                       switch (part.type) {
//                         case "text":
//                           return (
//                             <div key={`${message.id}-${i}`}>{part.text}</div>
//                           );
//                       }
//                     })}
//                   </div>
//                 ))}
//               </div>
//               <DialogFooter className="w-full">
//                 <form
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     sendMessage({ text: input });
//                     setInput("");
//                   }}
//                   className="flex gap-2"
//                 >
//                   <Input
//                     className="w-80"
//                     placeholder="Como podemos ajudar?"
//                     onChange={(e) => setInput(e.currentTarget.value)}
//                   />
//                   <Button type="submit">
//                     <SendHorizonal className="size-4" />
//                   </Button>
//                 </form>
//               </DialogFooter>
//             </DialogContent>
//           </form>
//         </Dialog>
//       </div>
//     </div>
//   );
// }
