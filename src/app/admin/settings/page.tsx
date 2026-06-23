"use client";

import { useEffect, useState, useCallback } from "react";
import { Save, Plus, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface SiteSetting {
  key: string;
  value: string;
  updated_at: string;
}

export default function SettingsPage() {
  const [items, setItems] = useState<SiteSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const [deleteKey, setDeleteKey] = useState<string | null>(null);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/site-settings");
      if (res.ok) setItems(await res.json());
    } catch { toast.error("Failed to load settings"); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchItems(); }, [fetchItems]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const settings = items.map((item) => ({ key: item.key, value: item.value }));
      const res = await fetch("/api/admin/site-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) { toast.success("Settings saved"); fetchItems(); }
      else toast.error("Failed to save settings");
    } catch { toast.error("Network error"); }
    finally { setSaving(false); }
  };

  const handleAdd = async () => {
    if (!newKey.trim()) { toast.error("Key is required"); return; }
    try {
      const res = await fetch("/api/admin/site-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: newKey.trim(), value: newValue }),
      });
      if (res.ok) { toast.success("Setting added"); setAddDialogOpen(false); setNewKey(""); setNewValue(""); fetchItems(); }
      else toast.error("Failed to add setting");
    } catch { toast.error("Network error"); }
  };

  const handleDelete = async (key: string) => {
    try {
      const res = await fetch(`/api/admin/site-settings/${encodeURIComponent(key)}`, { method: "DELETE" });
      if (res.ok) { toast.success("Setting deleted"); fetchItems(); }
      else toast.error("Failed to delete");
    } catch { toast.error("Network error"); }
    setDeleteKey(null);
  };

  const updateValue = (key: string, value: string) => {
    setItems((prev) => prev.map((item) => item.key === key ? { ...item, value } : item));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Site Settings</h2>
          <p className="text-sm text-gray-500">Manage global site configuration</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setAddDialogOpen(true)} variant="outline" className="gap-2">
            <Plus className="h-4 w-4" /> Add Setting
          </Button>
          <Button onClick={handleSave} disabled={saving} className="bg-[#c94449] hover:bg-[#a8363a] text-white gap-2">
            <Save className="h-4 w-4" /> {saving ? "Saving..." : "Save All"}
          </Button>
        </div>
      </div>

      {loading ? (
        <Card>
          <CardContent className="p-8 text-center text-gray-400">Loading settings...</CardContent>
        </Card>
      ) : items.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Settings className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No settings configured yet</p>
            <Button onClick={() => setAddDialogOpen(true)} variant="outline" className="mt-3">Add your first setting</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <Card key={item.key}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <Label className="text-xs text-gray-500 font-mono">{item.key}</Label>
                    <Input
                      value={item.value}
                      onChange={(e) => updateValue(item.key, e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDeleteKey(item.key)}
                    className="text-red-400 hover:text-red-600 mt-5"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add Setting Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Add Setting</DialogTitle></DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Key</Label>
              <Input value={newKey} onChange={(e) => setNewKey(e.target.value)} placeholder="e.g., site_name" />
            </div>
            <div className="space-y-2">
              <Label>Value</Label>
              <Input value={newValue} onChange={(e) => setNewValue(e.target.value)} placeholder="e.g., Bugwere Coffee Company" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAdd} className="bg-[#c94449] hover:bg-[#a8363a] text-white">Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={!!deleteKey} onOpenChange={() => setDeleteKey(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Delete Setting</DialogTitle></DialogHeader>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete the setting <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">{deleteKey}</code>?
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteKey(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteKey && handleDelete(deleteKey)}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
