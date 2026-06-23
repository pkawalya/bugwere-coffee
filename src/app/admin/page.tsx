"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FolderOpen,
  Newspaper,
  MessageSquareQuote,
  Users,
  Shield,
  Image,
  BarChart3,
  BookOpen,
  Columns3,
  Inbox,
  Mail,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DashboardData {
  counts: Record<string, number>;
  recentContacts: Array<{
    id: string;
    name: string;
    email: string;
    subject: string;
    created_at: string;
    read: number;
  }>;
  recentJoins: Array<{
    id: string;
    name: string;
    email: string;
    interest: string;
    created_at: string;
  }>;
}

const statCards = [
  { key: "heroSlides", label: "Hero Slides", icon: Image, href: "/admin/hero-slides", color: "bg-purple-50 text-purple-600" },
  { key: "programs", label: "Programs", icon: FolderOpen, href: "/admin/programs", color: "bg-amber-50 text-amber-600" },
  { key: "news", label: "News Articles", icon: Newspaper, href: "/admin/news", color: "bg-blue-50 text-blue-600" },
  { key: "testimonials", label: "Testimonials", icon: MessageSquareQuote, href: "/admin/testimonials", color: "bg-pink-50 text-pink-600" },
  { key: "team", label: "Team Members", icon: Users, href: "/admin/team", color: "bg-green-50 text-green-600" },
  { key: "board", label: "Board Members", icon: Shield, href: "/admin/board", color: "bg-indigo-50 text-indigo-600" },
  { key: "impactStats", label: "Impact Stats", icon: BarChart3, href: "/admin/impact-stats", color: "bg-teal-50 text-teal-600" },
  { key: "impactStories", label: "Impact Stories", icon: BookOpen, href: "/admin/impact-stories", color: "bg-orange-50 text-orange-600" },
  { key: "modelPillars", label: "Model Pillars", icon: Columns3, href: "/admin/model-pillars", color: "bg-cyan-50 text-cyan-600" },
  { key: "contactSubmissions", label: "Contact Submissions", icon: Inbox, href: "/admin/submissions", color: "bg-red-50 text-red-600" },
  { key: "joinSubmissions", label: "Join Submissions", icon: TrendingUp, href: "/admin/submissions", color: "bg-emerald-50 text-emerald-600" },
  { key: "subscribers", label: "Subscribers", icon: Mail, href: "/admin/subscribers", color: "bg-violet-50 text-violet-600" },
];

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then((res) => (res.ok ? res.json() : null))
      .then((d) => setData(d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-20 bg-gray-100 rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">
          Failed to load dashboard data.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          const count = data.counts[card.key] ?? 0;
          return (
            <Link key={card.key} href={card.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${card.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{count}</p>
                      <p className="text-xs text-gray-500">{card.label}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Recent Submissions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Contact Submissions */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Recent Contact Submissions</CardTitle>
              <Link href="/admin/submissions" className="text-xs text-[#c94449] hover:underline">
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {data.recentContacts.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">No submissions yet</p>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {data.recentContacts.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#193b2a] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {c.name?.charAt(0)?.toUpperCase() || "?"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-900 truncate">{c.name}</p>
                        {c.read === 0 && (
                          <Badge className="bg-[#c94449] text-white text-[10px] px-1.5 py-0">New</Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{c.email}</p>
                      {c.subject && <p className="text-xs text-gray-600 mt-0.5 truncate">{c.subject}</p>}
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <p className="text-[10px] text-gray-400">{c.created_at}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Join Submissions */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Recent Join Submissions</CardTitle>
              <Link href="/admin/submissions" className="text-xs text-[#c94449] hover:underline">
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            {data.recentJoins.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">No submissions yet</p>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
                {data.recentJoins.map((j) => (
                  <div
                    key={j.id}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#c94449] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {j.name?.charAt(0)?.toUpperCase() || "?"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{j.name}</p>
                      <p className="text-xs text-gray-500 truncate">{j.email}</p>
                      {j.interest && <p className="text-xs text-gray-600 mt-0.5 truncate">{j.interest}</p>}
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <p className="text-[10px] text-gray-400">{j.created_at}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
