"use client";

import { type LucideIcon } from "lucide-react";

import {} from "@/components/ui/collapsible";
import { SidebarGroup, SidebarMenu } from "@/components/ui/sidebar";
import Link from "next/link";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <ul className="text-base flex flex-col gap-4 pl-4 mt-5">
          {items.map((item) => (
            <div className="flex items-center" key={item.title}>
              {item.icon && <item.icon />}
              <Link
                href={item.url}
                className="rounded-md hover:bg-gray-200 px-2 py-1"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </ul>
      </SidebarMenu>
    </SidebarGroup>
  );
}
