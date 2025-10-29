"use client";

import * as React from "react";
import { Info, LayoutDashboard, Mail } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { IconInnerShadowTop } from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Visão Geral",
      url: "/dashboard/overview",
      icon: LayoutDashboard,
    },
    {
      title: "Denúncias",
      url: "/dashboard/complaints",
      icon: Info,
    },
    {
      title: "Mensagens",
      url: "/dashboard/messages",
      icon: Mail,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-4!"
            >
              <Link href="#">
                <IconInnerShadowTop className="size-9! text-[#2563EB]" />
                <span className="text-xl font-semibold text-[#2563EB]">
                  B4F Lab
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="ml-5 flex flex-row gap-2 items-center">
        <UserButton />
        <h2>
          {user?.firstName} {user?.lastName}
        </h2>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
