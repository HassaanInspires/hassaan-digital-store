import React from "react";

interface FlatProductCoverProps {
  title?: string;
  badge?: string;
  category?: string;
}

export function FlatProductCover({ title, badge, category }: FlatProductCoverProps) {
  const cat = (category || "").toLowerCase();
  
  const isEbook = cat === "ebook" || cat === "e-book" || cat === "book";
  const isUiKit = cat === "uikit" || cat === "ui-kit" || cat === "ui";
  const isInfra = cat === "infrastructure" || cat === "infra" || cat === "cloud";

  if (isEbook) {
    return (
      <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center p-6 overflow-hidden group border-b border-zinc-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="relative w-40 h-56 bg-zinc-950 border border-zinc-800 shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex flex-col justify-between p-5 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-zinc-800" />
          <div className="pl-3">
            <span className="font-mono text-[8px] font-bold tracking-widest text-zinc-500 uppercase">
              {badge || "Reference"}
            </span>
          </div>
          <div className="pl-3">
            <h4 className="font-sans text-sm font-bold text-white tracking-tight leading-snug mb-1">
              {title || "Systems Architecture"}
            </h4>
            <div className="w-4 h-0.5 bg-zinc-700 mt-3" />
          </div>
        </div>
      </div>
    );
  }

  if (isUiKit) {
    return (
      <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center p-6 overflow-hidden group border-b border-zinc-100">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #f4f4f5 1px, transparent 1px), linear-gradient(to bottom, #f4f4f5 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="relative w-full max-w-[220px] aspect-[4/3] bg-white border border-zinc-200 shadow-md p-4 flex flex-col justify-between transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          <div className="flex justify-between items-start">
            <div className="w-12 h-1.5 bg-zinc-200 rounded-sm" />
            <div className="w-3 h-3 rounded-full border border-zinc-200 flex items-center justify-center">
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-zinc-50 border border-zinc-100 rounded-sm flex items-center justify-center">
               <span className="font-mono text-[8px] text-zinc-400">&lt;UI /&gt;</span>
            </div>
            <div className="w-3/4 h-1.5 bg-zinc-200 rounded-sm" />
          </div>
          <div>
            <h4 className="font-sans text-[11px] font-bold text-zinc-950 tracking-tight line-clamp-1">
              {title || "UI Asset"}
            </h4>
          </div>
        </div>
      </div>
    );
  }

  if (isInfra) {
    return (
      <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center p-6 overflow-hidden group border-b border-zinc-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="relative w-full max-w-[220px] aspect-video bg-zinc-950 border border-zinc-800 shadow-xl p-4 flex flex-col transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
          <div className="flex items-center gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-zinc-700" />
            <div className="w-2 h-2 rounded-full bg-zinc-700" />
            <div className="w-2 h-2 rounded-full bg-zinc-700" />
          </div>
          <div className="font-mono text-[9px] text-zinc-400 space-y-1">
            <p className="text-emerald-500">&gt; init deployment</p>
            <p>resolving core...</p>
            <p>status: <span className="text-white font-bold">online</span></p>
          </div>
          <div className="mt-auto pt-2 border-t border-zinc-800">
            <h4 className="font-sans text-[11px] font-bold text-white tracking-tight line-clamp-1">
              {title || "Infrastructure"}
            </h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[4/3] bg-white flex items-center justify-center p-6 overflow-hidden group border-b border-zinc-100">
      <div className="relative w-full max-w-[180px] aspect-square bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-center p-4 transform group-hover:scale-[1.02] transition-transform duration-500 ease-out">
        <div className="w-8 h-8 border-2 border-zinc-950 rounded-full mb-3 flex items-center justify-center">
          <div className="w-2 h-2 bg-zinc-950 rounded-full" />
        </div>
        <h4 className="font-sans text-[11px] font-bold text-zinc-950 tracking-tight text-center line-clamp-2">
          {title || "Digital Asset"}
        </h4>
      </div>
    </div>
  );
}
