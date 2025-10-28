"use client";

import { getAllMessages } from "@/services/messages";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export function AllMessagesTable() {
  const { data, isPending, error } = useQuery({
    queryKey: ["all-messages"],
    queryFn: () => getAllMessages(),
    refetchInterval: 5000,
  });

  if (isPending) {
    return (
      <div className="h-[400px] flex items-center justify-center w-full">
        <Loader2 className="animate-spin text-primary size-6" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Ocorreu um erro ao carregar mensagens</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <p>Nenhuma mensagem encontrada</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
