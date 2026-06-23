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

interface ImpactStat {
  id: string;
  label: string;
  value: string;
  suffix: string;
  icon: string;
  sort_order: number;
  active: number;
}

const emptyStat: Omit<ImpactStat, "id"> = {
  label: "",
  value: "",
  suffix: "",
  icon: "",
  sort_order: 0,
  active: 1,
};

const iconOptions = ["Coffee", "Sprout", "Wheat", "Heart", "Users", "TrendingUp", "Shield", "Globe", "Zap", "Sun", "Star", "Award"];

export default function ImpactStatsPage() {
  const [items, setItems] = useState<ImpactStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<ImpactStat | null>(null);
  const [form, setForm] = useState(emptyStat);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/impact-stats${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setItems(await res.json());
    } catch { toast.error("Failed to load stats"); }
    finally { setLoading(false); }
  }, [search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const openCreate = () => { setEditing(null); setForm(emptyStat); setDialogOpen(true); };

  const openEdit = (item: ImpactStat) => {
    setEditing(item);
    setForm({ label: item.label || "", value: item.value || "", suffix: item.suffix || "", icon: item.icon || "", sort_order: item.sort_order || 0, active: item.active ?? 1 });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editing ? `/api/admin/impact-stats/${editing.id}` : "/api/admin/impact-stats";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { toast.success(editing ? "Stat updated" : "Stat created"); setDialogOpen(false); fetchItems(); }
      else toast.error("Failed to save");
    } catch { toast.error("Network error"); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/impact-stats/${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Deleted"); fetchItems(); } else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteId(null);
  };

  const filtered = items.filter((i) =>
    i.label.toLowerCase().includes(search.toLowerCase()) ||
    i.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Impact Stats</h2>
          <p className="text-sm text-gray-500">Manage impact statistics displayed on the site</p>
        </div>
        <Button onClick={openCreate} className="bg-[#c94449] hover:bg-[#a8363a] text-white"><Plus className="h-4 w-4 mr-2" /> Add Stat</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search stats..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Label</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="hidden md:table-cell">Suffix</TableHead>
                <TableHead className="hidden md:table-cell">Icon</TableHead>
                <TableHead className="w-20 text-center">Order</TableHead>
                <TableHead className="w-20 text-center">Status</TableHead>
                <TableHead className="w-24 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">No impact stats found</TableCell></TableRow>
              ) : (
                filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.label}</TableCell>
                    <TableCell><span className="font-bold text-[#c94449]">{item.value}</span></TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-gray-500">{item.suffix}</TableCell>
                    <TableCell className="hidden md:table-cell"><Badge variant="outline" className="text-xs">{item.icon}</Badge></TableCell>
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
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{editing ? "Edit Impact Stat" : "Add Impact Stat"}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2"><Label>Label</Label><Input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} placeholder="Coffee Homes" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2"><Label>Value</Label><Input value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} placeholder="5000" /></div>
              <div className="space-y-2"><Label>Suffix</Label><Input value={form.suffix} onChange={(e) => setForm({ ...form, suffix: e.target.value })} placeholder="+" /></div>
            </div>
            <div className="space-y-2">
              <Label>Icon</Label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })}>
                <option value="">Select icon</option>
                {iconOptions.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
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
          <DialogHeader><DialogTitle>Delete Impact Stat</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this stat?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
