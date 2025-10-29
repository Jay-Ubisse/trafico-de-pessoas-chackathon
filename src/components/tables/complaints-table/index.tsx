"use client";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getAllComplaints } from "@/services/complaints";

export function AllComplaintsTable() {
  const { data, isPending, error } = useQuery({
    queryKey: ["all-complainst"],
    queryFn: () => getAllComplaints(),
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
        <p>Ocorreu um erro ao carregar denúncias</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div>
        <p>Nenhuma denúncia encontrada</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
