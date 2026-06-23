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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  hero_image: string;
  key_facts: string;
  highlights: string;
  journey_steps: string;
  cta_title: string;
  cta_subtitle: string;
  accent_color: string;
  sort_order: number;
  active: number;
}

const emptyProgram: Omit<Program, "id"> = {
  slug: "",
  title: "",
  subtitle: "",
  description: "",
  hero_image: "",
  key_facts: "[]",
  highlights: "[]",
  journey_steps: "[]",
  cta_title: "",
  cta_subtitle: "",
  accent_color: "#c94449",
  sort_order: 0,
  active: 1,
};

export default function ProgramsPage() {
  const [items, setItems] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Program | null>(null);
  const [form, setForm] = useState(emptyProgram);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [jsonError, setJsonError] = useState<Record<string, string>>({});

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/programs${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setItems(await res.json());
    } catch {
      toast.error("Failed to load programs");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyProgram);
    setJsonError({});
    setDialogOpen(true);
  };

  const openEdit = (item: Program) => {
    setEditing(item);
    setForm({
      slug: item.slug || "",
      title: item.title || "",
      subtitle: item.subtitle || "",
      description: item.description || "",
      hero_image: item.hero_image || "",
      key_facts: typeof item.key_facts === "string" ? item.key_facts : JSON.stringify(item.key_facts || []),
      highlights: typeof item.highlights === "string" ? item.highlights : JSON.stringify(item.highlights || []),
      journey_steps: typeof item.journey_steps === "string" ? item.journey_steps : JSON.stringify(item.journey_steps || []),
      cta_title: item.cta_title || "",
      cta_subtitle: item.cta_subtitle || "",
      accent_color: item.accent_color || "#c94449",
      sort_order: item.sort_order || 0,
      active: item.active ?? 1,
    });
    setJsonError({});
    setDialogOpen(true);
  };

  const validateJson = (field: string, value: string) => {
    try {
      JSON.parse(value);
      setJsonError((prev) => ({ ...prev, [field]: "" }));
    } catch {
      setJsonError((prev) => ({ ...prev, [field]: "Invalid JSON" }));
    }
  };

  const handleSave = async () => {
    // Validate JSON fields
    const errors: Record<string, string> = {};
    for (const field of ["key_facts", "highlights", "journey_steps"]) {
      try {
        JSON.parse(form[field as keyof typeof form] as string);
      } catch {
        errors[field] = "Invalid JSON";
      }
    }
    if (Object.keys(errors).length > 0) {
      setJsonError(errors);
      toast.error("Please fix JSON fields");
      return;
    }

    setSaving(true);
    try {
      const url = editing ? `/api/admin/programs/${editing.id}` : "/api/admin/programs";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success(editing ? "Program updated" : "Program created");
        setDialogOpen(false);
        fetchItems();
      } else {
        toast.error("Failed to save program");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/programs/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Program deleted");
        fetchItems();
      } else {
        toast.error("Failed to delete");
      }
    } catch {
      toast.error("Network error");
    }
    setDeleteId(null);
  };

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()) ||
    i.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Programs</h2>
          <p className="text-sm text-gray-500">Manage agricultural programs</p>
        </div>
        <Button onClick={openCreate} className="bg-[#c94449] hover:bg-[#a8363a] text-white">
          <Plus className="h-4 w-4 mr-2" /> Add Program
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search programs..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Slug</TableHead>
                <TableHead className="hidden lg:table-cell">Accent</TableHead>
                <TableHead className="w-20 text-center">Order</TableHead>
                <TableHead className="w-20 text-center">Status</TableHead>
                <TableHead className="w-24 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">No programs found</TableCell></TableRow>
              ) : (
                filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.hero_image ? (
                        <div className="h-10 w-14 rounded bg-gray-100 overflow-hidden">
                          <img src={item.hero_image} alt="" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                        </div>
                      ) : (
                        <div className="h-10 w-14 rounded bg-gray-100 flex items-center justify-center"><ImageIcon className="h-4 w-4 text-gray-300" /></div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium max-w-[200px] truncate">{item.title}</TableCell>
                    <TableCell className="hidden md:table-cell text-sm text-gray-500">{item.slug}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border" style={{ backgroundColor: item.accent_color }} />
                        <span className="text-xs text-gray-500">{item.accent_color}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{item.sort_order}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={item.active ? "default" : "secondary"} className={item.active ? "bg-green-100 text-green-700" : ""}>{item.active ? "Active" : "Inactive"}</Badge>
                    </TableCell>
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Program" : "Add Program"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} placeholder="coffee" />
              </div>
              <div className="space-y-2">
                <Label>Accent Color</Label>
                <div className="flex gap-2">
                  <Input type="color" value={form.accent_color} onChange={(e) => setForm({ ...form, accent_color: e.target.value })} className="w-12 h-9 p-1" />
                  <Input value={form.accent_color} onChange={(e) => setForm({ ...form, accent_color: e.target.value })} className="flex-1" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Sustainable Coffee Production" />
            </div>
            <div className="space-y-2">
              <Label>Subtitle</Label>
              <Input value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <textarea className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[80px]" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Hero Image URL</Label>
              <Input value={form.hero_image} onChange={(e) => setForm({ ...form, hero_image: e.target.value })} placeholder="/images/coffee-farmer-hd.jpeg" />
            </div>
            <div className="space-y-2">
              <Label>Key Facts (JSON)</Label>
              <textarea className={`w-full rounded-md border ${jsonError.key_facts ? "border-red-400" : "border-input"} bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]`} value={form.key_facts} onChange={(e) => { setForm({ ...form, key_facts: e.target.value }); validateJson("key_facts", e.target.value); }} />
              {jsonError.key_facts && <p className="text-xs text-red-500">{jsonError.key_facts}</p>}
            </div>
            <div className="space-y-2">
              <Label>Highlights (JSON)</Label>
              <textarea className={`w-full rounded-md border ${jsonError.highlights ? "border-red-400" : "border-input"} bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]`} value={form.highlights} onChange={(e) => { setForm({ ...form, highlights: e.target.value }); validateJson("highlights", e.target.value); }} />
              {jsonError.highlights && <p className="text-xs text-red-500">{jsonError.highlights}</p>}
            </div>
            <div className="space-y-2">
              <Label>Journey Steps (JSON)</Label>
              <textarea className={`w-full rounded-md border ${jsonError.journey_steps ? "border-red-400" : "border-input"} bg-background px-3 py-2 text-sm font-mono ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[80px]`} value={form.journey_steps} onChange={(e) => { setForm({ ...form, journey_steps: e.target.value }); validateJson("journey_steps", e.target.value); }} />
              {jsonError.journey_steps && <p className="text-xs text-red-500">{jsonError.journey_steps}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>CTA Title</Label>
                <Input value={form.cta_title} onChange={(e) => setForm({ ...form, cta_title: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>CTA Subtitle</Label>
                <Input value={form.cta_subtitle} onChange={(e) => setForm({ ...form, cta_subtitle: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Sort Order</Label>
                <Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="space-y-2 flex items-center gap-3 pt-6">
                <Switch checked={form.active === 1} onCheckedChange={(v) => setForm({ ...form, active: v ? 1 : 0 })} />
                <Label>Active</Label>
              </div>
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
          <DialogHeader><DialogTitle>Delete Program</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this program? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
