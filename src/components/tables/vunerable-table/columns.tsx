"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { VulnerablePeopleProps } from "@/types/vulnerable-people";

export const columns: ColumnDef<VulnerablePeopleProps>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome do Vulnerável
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "number",
    header: "Número",
  },
  {
    accessorKey: "gender",
    header: "Género",
  },
  {
    accessorKey: "location",
    header: "Local",
  },
  {
    accessorKey: "sentAt",
    header: "Data de envio",
    cell: ({ row }) => format(row.original.sentAt!, "dd/MM/yyyy"),
  },
  {
    id: "Acções",
    cell: ({ row }) => {
      const message = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acções</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(message.id!)}
            >
              Copiar ID da vulnerabilidade
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="#">Ver detalhes</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
