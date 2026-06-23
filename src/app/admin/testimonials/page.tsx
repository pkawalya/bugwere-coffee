"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, Search, Image as ImageIcon } from "lucide-react";
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

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  sort_order: number;
  active: number;
}

const emptyItem: Omit<Testimonial, "id"> = {
  quote: "",
  name: "",
  role: "",
  image: "",
  sort_order: 0,
  active: 1,
};

export default function TestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState(emptyItem);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/testimonials${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setItems(await res.json());
    } catch { toast.error("Failed to load testimonials"); }
    finally { setLoading(false); }
  }, [search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const openCreate = () => { setEditing(null); setForm(emptyItem); setDialogOpen(true); };

  const openEdit = (item: Testimonial) => {
    setEditing(item);
    setForm({ quote: item.quote || "", name: item.name || "", role: item.role || "", image: item.image || "", sort_order: item.sort_order || 0, active: item.active ?? 1 });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editing ? `/api/admin/testimonials/${editing.id}` : "/api/admin/testimonials";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { toast.success(editing ? "Testimonial updated" : "Testimonial created"); setDialogOpen(false); fetchItems(); }
      else toast.error("Failed to save");
    } catch { toast.error("Network error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchItems(); } else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteId(null);
  };

  const filtered = items.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.quote.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Testimonials</h2>
          <p className="text-sm text-gray-500">Manage farmer testimonials</p>
        </div>
        <Button onClick={openCreate} className="bg-[#c94449] hover:bg-[#a8363a] text-white"><Plus className="h-4 w-4 mr-2" /> Add Testimonial</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search testimonials..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Photo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Role</TableHead>
                <TableHead className="hidden lg:table-cell">Quote</TableHead>
                <TableHead className="w-20 text-center">Order</TableHead>
                <TableHead className="w-20 text-center">Status</TableHead>
                <TableHead className="w-24 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">No testimonials found</TableCell></TableRow>
              ) : (
                filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.image ? (
                        <div className="h-8 w-8 rounded-full bg-gray-100 overflow-hidden">
                          <img src={item.image} alt="" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                        </div>
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"><ImageIcon className="h-3 w-3 text-gray-300" /></div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-gray-500">{item.role}</TableCell>
                    <TableCell className="hidden lg:table-cell text-sm text-gray-500 max-w-[250px] truncate">{item.quote}</TableCell>
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
          <DialogHeader><DialogTitle>{editing ? "Edit Testimonial" : "Add Testimonial"}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Quote</Label><textarea className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]" value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Name</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
              <div className="space-y-2"><Label>Role</Label><Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} /></div>
            </div>
            <div className="space-y-2"><Label>Image URL</Label><Input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} /></div>
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
          <DialogHeader><DialogTitle>Delete Testimonial</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this testimonial?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
