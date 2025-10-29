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
import { VulnerablePersonProps } from "@/types/vulnerable-people";
import {
  vulnerabilityLevelStyles,
  vulnerabilityScoreStyles,
} from "@/lib/helper-fuctions";

export const columns: ColumnDef<VulnerablePersonProps>[] = [
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
    accessorKey: "ageGroup",
    header: "Faixa etária",
  },
  {
    accessorKey: "location",
    header: "Local",
  },
  {
    accessorKey: "organTraffickingScore",
    header: "Tráfico de órgãos",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.organTraffickingScore
        )}`}
      >
        {row.original.organTraffickingScore.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "sexualExploitationScore",
    header: "Exploração sexual",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.sexualExploitationScore
        )}`}
      >
        {row.original.sexualExploitationScore.toFixed(2)}
      </span>
    ),
  },

  {
    accessorKey: "domesticServitudeScore",
    header: "Serviço doméstico",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.sexualExploitationScore
        )}`}
      >
        {row.original.sexualExploitationScore.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "drugsCoercionScore",
    header: "Drogas/Coerção",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.drugsCoercionScore
        )}`}
      >
        {row.original.drugsCoercionScore.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "forcedLaborScore",
    header: "Trabalho forçado",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.forcedLaborScore
        )}`}
      >
        {row.original.forcedLaborScore.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "fraudDeceptionScore",
    header: "Fraude/Engano",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.fraudDeceptionScore
        )}`}
      >
        {row.original.fraudDeceptionScore.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "childTraffickingScore",
    header: "Tráfico de crianças",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityScoreStyles(
          row.original.childTraffickingScore
        )}`}
      >
        {row.original.childTraffickingScore.toFixed(2)}
      </span>
    ),
  },
  {
    accessorKey: "vulnerabilityType",
    header: "Maior vulnerabilidade",
  },
  {
    accessorKey: "vulnerabilityLevel",
    header: "Nível total de Vulnerabilidade",
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 rounded-md text-white font-medium ${vulnerabilityLevelStyles(
          row.original.vulnerabilityLevel
        )}`}
      >
        {row.original.vulnerabilityLevel}
      </span>
    ),
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
