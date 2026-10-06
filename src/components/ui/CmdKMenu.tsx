"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

// Minimal global search palette using cmdk
export function CmdKMenu({ products }: { products: any[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950/40 backdrop-blur-sm flex items-start justify-center pt-[15vh]">
      <Command
        className="w-full max-w-xl bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white overflow-hidden"
        loop
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="flex items-center border-b border-zinc-100 px-4">
          <Search className="w-5 h-5 text-zinc-400" />
          <Command.Input
            autoFocus
            placeholder="Search blueprints, kits, and tools..."
            className="flex-1 px-4 py-4 bg-transparent outline-none text-zinc-950 font-medium placeholder:text-zinc-400"
          />
          <button
            onClick={() => setOpen(false)}
            className="text-xs font-bold text-zinc-400 hover:text-zinc-600 bg-zinc-100 px-2 py-1 rounded-md"
          >
            ESC
          </button>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-zinc-500">
            No results found.
          </Command.Empty>

          <Command.Group heading="Products" className="text-xs font-bold text-zinc-400 px-2 py-2">
            {products.map((p) => (
              <Command.Item
                key={p.id}
                onSelect={() => {
                  setOpen(false);
                  router.push(`/products/${p.slug}`);
                }}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer hover:bg-zinc-100/80 aria-selected:bg-zinc-100/80 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-black text-zinc-600">
                    {p.title.charAt(0)}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-zinc-900">{p.title}</span>
                  <span className="text-xs text-zinc-500 line-clamp-1">{p.subtitle}</span>
                </div>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
