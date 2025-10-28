"use client";

import { getAllVulnerable } from "@/services/vulnerable";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export function AllVulnerableTable() {
  const { data, isPending, error } = useQuery({
    queryKey: ["all-vulnerable"],
    queryFn: () => getAllVulnerable(),
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