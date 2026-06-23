"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, Trash2, Eye, Mail, Users, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  read: number;
  created_at: string;
}

interface JoinSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  created_at: string;
}

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState("contact");
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [joins, setJoins] = useState<JoinSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteType, setDeleteType] = useState<"contact" | "join">("contact");
  const [viewItem, setViewItem] = useState<ContactSubmission | null>(null);

  const fetchContacts = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/submissions${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setContacts(await res.json());
    } catch { toast.error("Failed to load submissions"); }
  }, [search]);

  const fetchJoins = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/submissions?type=join${search ? `&search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setJoins(await res.json());
    } catch { toast.error("Failed to load submissions"); }
  }, [search]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      await Promise.all([fetchContacts(), fetchJoins()]);
      if (!cancelled) setLoading(false);
    };
    load();
    return () => { cancelled = true; };
  }, [fetchContacts, fetchJoins]);

  const markAsRead = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/submissions/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: 1 }),
      });
      if (res.ok) { toast.success("Marked as read"); fetchContacts(); }
      else toast.error("Failed to update");
    } catch { toast.error("Network error"); }
  };

  const handleDelete = async (id: string, type: "contact" | "join") => {
    try {
      const res = await fetch(`/api/admin/submissions/${id}?type=${type}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchContacts(); fetchJoins(); }
      else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteId(null);
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Submissions</h2>
        <p className="text-sm text-gray-500">View and manage form submissions</p>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search submissions..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="contact" className="gap-2">
            <Mail className="h-4 w-4" /> Contact
            {contacts.filter((c) => !c.read).length > 0 && (
              <Badge className="bg-[#c94449] text-white text-[10px] px-1.5 py-0 ml-1">
                {contacts.filter((c) => !c.read).length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="join" className="gap-2">
            <Users className="h-4 w-4" /> Join
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 ml-1">
              {joins.length}
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="contact">
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden lg:table-cell">Subject</TableHead>
                    <TableHead className="w-24 text-center">Status</TableHead>
                    <TableHead className="hidden md:table-cell w-36">Date</TableHead>
                    <TableHead className="w-28 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
                  ) : contacts.length === 0 ? (
                    <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-400">No contact submissions</TableCell></TableRow>
                  ) : (
                    contacts.map((item) => (
                      <TableRow key={item.id} className={item.read ? "" : "bg-blue-50/50"}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-gray-500">{item.email}</TableCell>
                        <TableCell className="hidden lg:table-cell text-sm text-gray-500 max-w-[200px] truncate">{item.subject}</TableCell>
                        <TableCell className="text-center">
                          {item.read ? (
                            <Badge variant="secondary" className="bg-gray-100 text-gray-500"><CheckCircle2 className="h-3 w-3 mr-1" />Read</Badge>
                          ) : (
                            <Badge className="bg-blue-100 text-blue-700"><Eye className="h-3 w-3 mr-1" />New</Badge>
                          )}
                        </TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-gray-400">
                          <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{item.created_at}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            {!item.read && (
                              <Button variant="ghost" size="icon" onClick={() => markAsRead(item.id)} title="Mark as read">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                              </Button>
                            )}
                            <Button variant="ghost" size="icon" onClick={() => setViewItem(item)} title="View">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" onClick={() => { setDeleteId(item.id); setDeleteType("contact"); }} className="text-red-500 hover:text-red-700" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="join">
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden md:table-cell">Phone</TableHead>
                    <TableHead className="hidden lg:table-cell">Interest</TableHead>
                    <TableHead className="hidden md:table-cell w-36">Date</TableHead>
                    <TableHead className="w-20 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
                  ) : joins.length === 0 ? (
                    <TableRow><TableCell colSpan={6} className="text-center py-8 text-gray-400">No join submissions</TableCell></TableRow>
                  ) : (
                    joins.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-gray-500">{item.email}</TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-gray-500">{item.phone || "—"}</TableCell>
                        <TableCell className="hidden lg:table-cell text-sm text-gray-500">{item.interest || "—"}</TableCell>
                        <TableCell className="hidden md:table-cell text-sm text-gray-400">
                          <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{item.created_at}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon" onClick={() => { setDeleteId(item.id); setDeleteType("join"); }} className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* View Contact Detail */}
      <Dialog open={!!viewItem} onOpenChange={() => setViewItem(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Contact Submission</DialogTitle></DialogHeader>
          {viewItem && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-xs text-gray-500">Name</p><p className="text-sm font-medium">{viewItem.name}</p></div>
                <div><p className="text-xs text-gray-500">Email</p><p className="text-sm font-medium">{viewItem.email}</p></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><p className="text-xs text-gray-500">Phone</p><p className="text-sm">{viewItem.phone || "—"}</p></div>
                <div><p className="text-xs text-gray-500">Subject</p><p className="text-sm">{viewItem.subject || "—"}</p></div>
              </div>
              <div>
                <p className="text-xs text-gray-500">Message</p>
                <div className="mt-1 p-3 bg-gray-50 rounded-lg text-sm whitespace-pre-wrap">{viewItem.message}</div>
              </div>
              <div><p className="text-xs text-gray-500">Submitted</p><p className="text-sm">{viewItem.created_at}</p></div>
            </div>
          )}
          <DialogFooter>
            {viewItem && !viewItem.read && (
              <Button onClick={() => { markAsRead(viewItem.id); setViewItem(null); }} className="bg-[#c94449] hover:bg-[#a8363a] text-white">
                Mark as Read
              </Button>
            )}
            <Button variant="outline" onClick={() => setViewItem(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete Submission</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this submission?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId, deleteType)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
