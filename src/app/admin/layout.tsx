"use client";

import { useEffect, useState, startTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Image,
  FolderOpen,
  Newspaper,
  MessageSquareQuote,
  Users,
  Shield,
  BarChart3,
  BookOpen,
  Columns3,
  Inbox,
  Mail,
  Settings,
  LogOut,
  Menu,
  X,
  Coffee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Toaster } from "sonner";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/hero-slides", label: "Hero Slides", icon: Image },
  { href: "/admin/programs", label: "Programs", icon: FolderOpen },
  { href: "/admin/news", label: "News", icon: Newspaper },
  { href: "/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { href: "/admin/team", label: "Team Members", icon: Users },
  { href: "/admin/board", label: "Board Members", icon: Shield },
  { href: "/admin/impact-stats", label: "Impact Stats", icon: BarChart3 },
  { href: "/admin/impact-stories", label: "Impact Stories", icon: BookOpen },
  { href: "/admin/model-pillars", label: "Model Pillars", icon: Columns3 },
  { href: "/admin/submissions", label: "Submissions", icon: Inbox },
  { href: "/admin/subscribers", label: "Subscribers", icon: Mail },
  { href: "/admin/settings", label: "Site Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      startTransition(() => { setLoading(false); });
      return;
    }
    let cancelled = false;
    const verify = async () => {
      try {
        const res = await fetch("/api/admin/dashboard");
        if (!cancelled) {
          if (!res.ok) {
            router.push("/admin/login");
          } else {
            startTransition(() => {
              setAuthenticated(true);
              setLoading(false);
            });
          }
        }
      } catch {
        if (!cancelled) {
          router.push("/admin/login");
          startTransition(() => { setLoading(false); });
        }
      }
    };
    verify();
    return () => { cancelled = true; };
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return (
      <>
        {children}
        <Toaster position="top-right" richColors />
      </>
    );
  }

  if (loading || !authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <Coffee className="h-12 w-12 text-[#c94449] animate-pulse" />
          <p className="text-gray-500 text-sm">Loading admin panel...</p>
        </div>
      </div>
    );
  }

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#193b2a] text-white transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
            <Link href="/admin" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
              <Coffee className="h-7 w-7 text-[#c94449]" />
              <div>
                <p className="font-bold text-sm leading-tight">Bugwere Coffee</p>
                <p className="text-[10px] text-white/60 leading-tight">Admin Panel</p>
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 py-4">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/admin"
                    ? pathname === "/admin"
                    : pathname.startsWith(item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#c94449] text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <Button
              variant="ghost"
              className="w-full justify-start text-white/70 hover:text-white hover:bg-white/10"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-semibold text-gray-900 hidden sm:block">
              {navItems.find((i) =>
                i.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(i.href)
              )?.label || "Admin"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-xs hidden sm:flex">
              Admin
            </Badge>
            <div className="h-8 w-8 rounded-full bg-[#193b2a] text-white flex items-center justify-center text-xs font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>

      <Toaster position="top-right" richColors />
    </div>
  );
}
