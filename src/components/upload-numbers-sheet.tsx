"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sendMessages } from "@/services/messages";
import { MessageProps } from "@/types/messages";

export function UploadNumbersSheet() {
  const [jsonData, setJsonData] = useState<MessageProps[]>([]);
  const [fileName, setFileName] = useState<string>("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });

      // Lê a primeira folha do Excel
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Converte a folha para JSON
      const json = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
      setJsonData(json as MessageProps[]);
    };
    reader.readAsBinaryString(file);
  };

  async function handleSubmit() {
    toast.loading("A enviar mensagens....");
    const response = await sendMessages({ data: jsonData });

    if (response?.status === 201) {
      toast.dismiss();
      toast.success(response.data.message);
    } else {
      toast.dismiss();
      toast.error(response.data.message);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default">Enviar mensagens</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carregar Fincheiro Excel</SheetTitle>
          <SheetDescription>
            Carreguie o ficheiro excel com a informação
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="border p-2 rounded mb-4"
          />

          {fileName && (
            <p className="mb-4">
              Ficheiro carregado: <strong>{fileName}</strong>
            </p>
          )}
        </div>

        <SheetFooter>
          <Button onClick={handleSubmit}>Enviar</Button>
          <SheetClose asChild>
            <Button variant="outline">Fechar</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
