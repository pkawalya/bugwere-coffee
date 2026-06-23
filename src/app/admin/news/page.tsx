"use client";

import { useEffect, useState, useCallback } from "react";
import { Plus, Pencil, Trash2, Search, Image as ImageIcon, Star } from "lucide-react";
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

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  featured: number;
  content: string;
  active: number;
}

const emptyArticle: Omit<NewsArticle, "id"> = {
  title: "",
  excerpt: "",
  image: "",
  category: "",
  date: new Date().toISOString().split("T")[0],
  featured: 0,
  content: "",
  active: 1,
};

const categories = ["Program Update", "Expansion", "Milestone", "Community", "Agriculture", "Partnership", "General"];

export default function NewsPage() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<NewsArticle | null>(null);
  const [form, setForm] = useState(emptyArticle);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/news${search ? `?search=${encodeURIComponent(search)}` : ""}`);
      if (res.ok) setItems(await res.json());
    } catch {
      toast.error("Failed to load news");
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyArticle);
    setDialogOpen(true);
  };

  const openEdit = (item: NewsArticle) => {
    setEditing(item);
    setForm({
      title: item.title || "",
      excerpt: item.excerpt || "",
      image: item.image || "",
      category: item.category || "",
      date: item.date || "",
      featured: item.featured ?? 0,
      content: item.content || "",
      active: item.active ?? 1,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const url = editing ? `/api/admin/news/${editing.id}` : "/api/admin/news";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast.success(editing ? "Article updated" : "Article created");
        setDialogOpen(false);
        fetchItems();
      } else {
        toast.error("Failed to save article");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/news/${id}`, { method: "DELETE" });
      if (res.ok) { toast.success("Article deleted"); fetchItems(); }
      else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteId(null);
  };

  const filtered = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase()) ||
    i.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">News Articles</h2>
          <p className="text-sm text-gray-500">Manage news and announcements</p>
        </div>
        <Button onClick={openCreate} className="bg-[#c94449] hover:bg-[#a8363a] text-white">
          <Plus className="h-4 w-4 mr-2" /> Add Article
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input placeholder="Search articles..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
      </div>

      <Card>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden lg:table-cell">Date</TableHead>
                <TableHead className="w-20 text-center">Featured</TableHead>
                <TableHead className="w-20 text-center">Status</TableHead>
                <TableHead className="w-24 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">Loading...</TableCell></TableRow>
              ) : filtered.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-gray-400">No articles found</TableCell></TableRow>
              ) : (
                filtered.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {item.image ? (
                        <div className="h-10 w-14 rounded bg-gray-100 overflow-hidden">
                          <img src={item.image} alt="" className="h-full w-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                        </div>
                      ) : (
                        <div className="h-10 w-14 rounded bg-gray-100 flex items-center justify-center"><ImageIcon className="h-4 w-4 text-gray-300" /></div>
                      )}
                    </TableCell>
                    <TableCell className="font-medium max-w-[250px] truncate">{item.title}</TableCell>
                    <TableCell className="hidden md:table-cell"><Badge variant="outline" className="text-xs">{item.category}</Badge></TableCell>
                    <TableCell className="hidden lg:table-cell text-sm text-gray-500">{item.date}</TableCell>
                    <TableCell className="text-center">
                      {item.featured ? <Star className="h-4 w-4 text-amber-400 mx-auto fill-amber-400" /> : <span className="text-gray-300">—</span>}
                    </TableCell>
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
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editing ? "Edit Article" : "Add Article"}</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Excerpt</Label>
              <textarea className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[60px]" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Image URL</Label>
              <Input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Category</Label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                  <option value="">Select category</option>
                  {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="November 29, 2025" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Content</Label>
              <textarea className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[150px]" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Switch checked={form.featured === 1} onCheckedChange={(v) => setForm({ ...form, featured: v ? 1 : 0 })} />
                <Label>Featured</Label>
              </div>
              <div className="flex items-center gap-3">
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
          <DialogHeader><DialogTitle>Delete Article</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">Are you sure you want to delete this article?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
