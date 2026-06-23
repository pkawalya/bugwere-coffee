"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, Trash2, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Subscriber {
  id: string;
  name: string;
  email: string;
  topics: string[] | string;
  active: number;
  created_at: string;
}

export default function SubscribersPage() {
  const [items, setItems] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/subscribers${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setItems(await res.json());
    } catch { toast.error("Failed to load subscribers"); }
    finally { setLoading(false); }
  }, [search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/subscribers/${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchItems(); } else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteId(null);
  };

  const getTopics = (topics: string[] | string): string[] => {
    if (Array.isArray(topics)) return topics;
    try { return JSON.parse(topics); } catch { return []; }
  };

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Subscribers</h2>
        <p className="text-sm text-gray-500">Manage newsletter subscribers</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search subscribers..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="hidden md:table-cell">Topics</TableHead>
                <TableHead className="w-20 text-center">Status</TableHead>
                <TableHead className="hidden md:table-cell w-36">Subscribed</TableHead>
                <TableHead className="w-20 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-400">No subscribers found</TableCell></TableRow>
              ) : (
                filtered.map((item) => {
                  const topics = getTopics(item.topics);
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="text-sm text-gray-500">
                        <div className="flex items-center gap-1"><Mail className="h-3 w-3" />{item.email}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {topics.length > 0 ? topics.map((t, i) => (
                            <Badge key={i} variant="outline" className="text-[10px]">{t}</Badge>
                          )) : <span className="text-xs text-gray-400">—</span>}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={item.active ? "default" : "secondary"} className={item.active ? "bg-green-100 text-green-700" : ""}>
                          {item.active ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-sm text-gray-400">
                        <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{item.created_at}</div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon" onClick={() => setDeleteId(item.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete Subscriber</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this subscriber?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
