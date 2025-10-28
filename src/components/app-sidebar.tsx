"use client";

import * as React from "react";
import { Info, LayoutDashboard, Mail } from "lucide-react";
import { useUser } from "@clerk/nextjs";

import { NavMain } from "@/components/nav-main";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
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
