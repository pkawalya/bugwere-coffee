"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ModelPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  sort_order: number;
  active: number;
}

const emptyPillar: Omit<ModelPillar, "id"> = {
  icon: "",
  title: "",
  description: "",
  href: "",
  sort_order: 0,
  active: 1,
};

const iconOptions = ["Sprout", "Microscope", "ShoppingBag", "CheckCircle2", "PiggyBank", "Shield", "Heart", "Sun", "Zap", "Star", "Globe", "Users"];

export default function ModelPillarsPage() {
  const [items, setItems] = useState<ModelPillar[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ModelPillar | null>(null);
  const [form, setForm] = useState(emptyPillar);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/model-pillars${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setItems(await res.json());
    } catch { toast.error("Failed to load pillars"); }
    finally { setLoading(false); }
  }, [search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const openCreate = () => { setEditing(null); setForm(emptyPillar); setDialogOpen(true); };

  const openEdit = (item: ModelPillar) => {
    setEditing(item);
    setForm({ icon: item.icon || "", title: item.title || "", description: item.description || "", href: item.href || "", sort_order: item.sort_order || 0, active: item.active ?? 1 });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editing ? `/api/admin/model-pillars/${editing.id}` : "/api/admin/model-pillars";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { toast.success(editing ? "Pillar updated" : "Pillar created"); setDialogOpen(false); fetchItems(); }
      else toast.error("Failed to save");
    } catch { toast.error("Network error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/model-pillars/${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchItems(); } else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteId(null);
  };

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()) ||
    i.href.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Model Pillars</h2>
          <p className="text-sm text-gray-500">Manage the business model pillars</p>
        </div>
        <Button onClick={openCreate} className="bg-[#c94449] hover:bg-[#a8363a] text-white"><Plus className="h-4 w-4 mr-2" /> Add Pillar</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search pillars..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden md:table-cell">Icon</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden lg:table-cell">Description</TableHead>
                <TableHead className="hidden md:table-cell">Link</TableHead>
                <TableHead className="w-20 text-center">Order</TableHead>
                <TableHead className="w-20 text-center">Status</TableHead>
                <TableHead className="w-24 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">No model pillars found</TableCell></TableRow>
              ) : (
                filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="hidden md:table-cell"><Badge variant="outline" className="text-xs">{item.icon}</Badge></TableCell>
                    <TableCell className="font-medium">{item.title}</TableCell>
                    <TableCell className="hidden lg:table-cell text-sm text-gray-500 max-w-[200px] truncate">{item.description}</TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-[#c94449]">{item.href}</TableCell>
                    <TableCell className="text-center">{item.sort_order}</TableCell>
                    <TableCell className="text-center"><Badge variant={item.active ? "default" : "secondary"} className={item.active ? "bg-green-100 text-green-700" : ""}>{item.active ? "Active" : "Inactive"}</Badge></TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" onClick={() => openEdit(item)}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" onClick={() => setDeleteId(item.id)} className="text-red-500 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit Model Pillar" : "Add Model Pillar"}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Icon</Label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
                <option value="">Select icon</option>
                {iconOptions.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div className="space-y-2"><Label>Title</Label><Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Seedling Distribution" /></div>
            <div className="space-y-2"><Label>Description</Label><textarea className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[80px]" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></div>
            <div className="space-y-2"><Label>Link (href)</Label><Input value={form.href} onChange={(e) => setForm({ ...form, href: e.target.value })} placeholder="/model/seedlings" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Sort Order</Label><Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} /></div>
              <div className="flex items-center gap-3 pt-6"><Switch checked={form.active === 1} onCheckedChange={(v) => setForm({ ...form, active: v ? 1 : 0 })} /><Label>Active</Label></div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving} className="bg-[#c94449] hover:bg-[#a8363a] text-white">{saving ? "Saving..." : "Save"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete Model Pillar</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this pillar?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
