import React from "react";

interface StudioProductRenderProps {
  type: "ebook" | "uikit" | "infrastructure";
  title?: string;
  badge?: string;
}

export function StudioProductRender({
  type,
  title,
  badge,
}: StudioProductRenderProps) {
  // 1. Studio Hardcover Book (Anchor E-Book)
  if (type === "ebook") {
    return (
      <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#FBFBFD] border border-zinc-100 flex items-center justify-center p-6 select-none overflow-hidden group">
        {/* Studio Softbox Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,1)_0%,rgba(235,239,245,0.7)_85%)]" />

        {/* Diffuse studio floor contact shadow */}
        <div className="absolute bottom-5 w-52 h-9 rounded-full bg-zinc-950/20 blur-xl transform scale-y-75 translate-y-3" />

        {/* 3D Physical Hardcover Volume */}
        <div className="relative w-44 h-56 rounded-r-xl rounded-l-sm bg-zinc-950 text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.45)] border-l-[5px] border-zinc-700 p-4 flex flex-col justify-between transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
          {/* Specular spine sheen */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-r from-white/40 to-transparent" />
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-zinc-300 to-transparent opacity-80" />

          {/* Top Foil Stamp */}
          <div className="space-y-1">
            <span className="font-sans text-[8px] font-bold tracking-widest text-zinc-400 uppercase">
              {badge || "Reference Edition"}
            </span>
            <div className="w-6 h-0.5 bg-zinc-400 rounded-full" />
          </div>

          {/* Minimalist Abstract Studio Glyph */}
          <div className="my-auto py-2 flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-inner">
              <div className="w-8 h-8 rounded-lg border-2 border-zinc-300 rotate-45 flex items-center justify-center shadow-sm">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* Crisp Typography */}
          <div className="space-y-1 border-t border-zinc-800 pt-2.5">
            <p className="font-sans text-xs font-bold text-white tracking-tight leading-tight line-clamp-2">
              Autonomous Systems Architecture
            </p>
            <p className="font-sans text-[8px] font-medium text-zinc-400 uppercase tracking-wider">
              M. Hassaan Khan · 2026
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Floating Frosted Optical Glass Cubes (UI Kit Engine) with Heavy Shadows & Specular Glare
  if (type === "uikit") {
    return (
      <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#FBFBFD] border border-zinc-100 flex items-center justify-center p-6 select-none overflow-hidden group">
        {/* Studio Softbox Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,1)_0%,rgba(235,240,246,0.65)_85%)]" />

        {/* Ambient Floor Shadow Bloom */}
        <div className="absolute bottom-5 w-52 h-10 rounded-full bg-zinc-950/25 blur-xl transform scale-y-75 translate-y-3" />

        {/* 3D Floating Optical Glass Cube Studio Render */}
        <div className="relative w-48 h-48 flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
          <svg
            className="w-40 h-40 drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
            viewBox="0 0 120 120"
            fill="none"
          >
            {/* 1. Deep Floor Occlusion Shadow */}
            <ellipse cx="60" cy="110" rx="38" ry="7" fill="#09090b" opacity="0.45" />
            <ellipse cx="60" cy="112" rx="50" ry="12" fill="#64748b" opacity="0.3" />

            {/* 2. Top Frosted Glass Facet */}
            <polygon
              points="60,15 104,40 60,65 16,40"
              fill="url(#cubeTopGlassEnhanced)"
              stroke="#ffffff"
              strokeWidth="1.8"
            />

            {/* 3. Left Glass Facet with Refraction */}
            <polygon
              points="16,40 60,65 60,105 16,80"
              fill="url(#cubeLeftGlassEnhanced)"
              stroke="#e2e8f0"
              strokeWidth="1.4"
            />

            {/* 4. Right Glass Facet */}
            <polygon
              points="60,65 104,40 104,80 60,105"
              fill="url(#cubeRightGlassEnhanced)"
              stroke="#cbd5e1"
              strokeWidth="1.4"
            />

            {/* 5. Internal Precision Core (Dark Titanium Monolith viewed through glass) */}
            <polygon points="60,42 80,54 60,66 40,54" fill="#09090b" opacity="0.95" />
            <polygon points="40,54 60,66 60,86 40,74" fill="#020617" opacity="0.95" />
            <polygon points="60,66 80,54 80,74 60,86" fill="#18181b" opacity="0.9" />
            <circle cx="60" cy="64" r="3" fill="#3b82f6" />
            <circle cx="60" cy="64" r="5" stroke="#60a5fa" strokeWidth="0.8" opacity="0.8" />

            {/* 6. Studio Glare & Diagonal Specular Reflection across Top Surface */}
            <polygon
              points="40,27 82,32 50,59 28,45"
              fill="url(#studioGlassGlare)"
              opacity="0.85"
            />

            {/* 7. Razor-Sharp Chamfer Specular Edge Bevels */}
            <line x1="60" y1="15" x2="60" y2="65" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.95" />
            <line x1="16" y1="40" x2="60" y2="65" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.9" />
            <line x1="60" y1="65" x2="104" y2="40" stroke="#f8fafc" strokeWidth="1.8" strokeOpacity="0.8" />

            {/* 8. Starburst Corner Glint */}
            <circle cx="60" cy="15" r="2.5" fill="#ffffff" />
            <line x1="56" y1="15" x2="64" y2="15" stroke="#ffffff" strokeWidth="1" />
            <line x1="60" y1="11" x2="60" y2="19" stroke="#ffffff" strokeWidth="1" />

            <defs>
              <linearGradient id="cubeTopGlassEnhanced" x1="16" y1="15" x2="104" y2="65" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="0.4" stopColor="#f8fafc" stopOpacity="0.85" />
                <stop offset="0.8" stopColor="#e2e8f0" stopOpacity="0.8" />
                <stop offset="1" stopColor="#cbd5e1" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="cubeLeftGlassEnhanced" x1="16" y1="40" x2="60" y2="105" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f1f5f9" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#cbd5e1" stopOpacity="0.85" />
                <stop offset="1" stopColor="#94a3b8" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="cubeRightGlassEnhanced" x1="60" y1="40" x2="104" y2="105" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f8fafc" stopOpacity="0.9" />
                <stop offset="0.5" stopColor="#e2e8f0" stopOpacity="0.85" />
                <stop offset="1" stopColor="#cbd5e1" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="studioGlassGlare" x1="28" y1="27" x2="82" y2="59" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="1" stopColor="#ffffff" stopOpacity="0.0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    );
  }

  // 3. Machined Aerospace-Grade Aluminum Monolith (Cloud Infrastructure) with Deep Shadow & Brushed Grain
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#FBFBFD] border border-zinc-100 flex items-center justify-center p-6 select-none overflow-hidden group">
      {/* Studio Softbox Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,1)_0%,rgba(235,240,246,0.65)_85%)]" />

      {/* Ambient Floor Shadow Bloom */}
      <div className="absolute bottom-5 w-52 h-10 rounded-full bg-zinc-950/25 blur-xl transform scale-y-75 translate-y-3" />

      {/* Machined Monolith Render */}
      <div className="relative w-48 h-48 flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
        <svg
          className="w-40 h-40 drop-shadow-[0_30px_50px_rgba(0,0,0,0.28)]"
          viewBox="0 0 120 120"
          fill="none"
        >
          {/* 1. Deep Floor Occlusion Shadow */}
          <ellipse cx="60" cy="108" rx="42" ry="7" fill="#09090b" opacity="0.5" />
          <ellipse cx="60" cy="112" rx="54" ry="13" fill="#475569" opacity="0.3" />

          {/* 2. Top Machined Face with Anisotropic Grain */}
          <polygon
            points="60,18 106,41 60,64 14,41"
            fill="url(#machinedTopEnhanced)"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* 3. Left Vertical Face (Brushed Aerospace 7075-T6 Finish) */}
          <polygon
            points="14,41 60,64 60,103 14,80"
            fill="url(#machinedLeftEnhanced)"
            stroke="#94a3b8"
            strokeWidth="1.2"
          />

          {/* 4. Right Vertical Face (Shadowed Milled Wall) */}
          <polygon
            points="60,64 106,41 106,80 60,103"
            fill="url(#machinedRightEnhanced)"
            stroke="#475569"
            strokeWidth="1.2"
          />

          {/* 5. Diagonal Studio Specular Glare Streak across Top Face */}
          <polygon
            points="38,26 80,31 48,58 26,46"
            fill="url(#aluminumSpecularStreak)"
            opacity="0.8"
          />

          {/* 6. Razor-Sharp Specular Chamfer Rim */}
          <line x1="60" y1="18" x2="60" y2="64" stroke="#ffffff" strokeWidth="2.5" strokeOpacity="0.95" />
          <line x1="14" y1="41" x2="60" y2="64" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.9" />
          <line x1="60" y1="64" x2="106" y2="41" stroke="#f1f5f9" strokeWidth="1.8" strokeOpacity="0.85" />

          {/* 7. Active Emerald Precision Laser LED with Luminous Halo */}
          <circle cx="60" cy="52" r="5" fill="#10b981" opacity="0.3" />
          <circle cx="60" cy="52" r="3" fill="#10b981" />
          <circle cx="60" cy="52" r="1.5" fill="#ecfdf5" />

          {/* 8. Laser-Etched Micro-Calibration Markings */}
          <line x1="38" y1="42" x2="82" y2="64" stroke="#475569" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="24" y1="58" x2="52" y2="72" stroke="#64748b" strokeWidth="0.7" strokeDasharray="3 2" />

          <defs>
            <linearGradient id="machinedTopEnhanced" x1="14" y1="18" x2="106" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.3" stopColor="#e2e8f0" />
              <stop offset="0.7" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="machinedLeftEnhanced" x1="14" y1="41" x2="60" y2="103" gradientUnits="userSpaceOnUse">
              <stop stopColor="#94a3b8" />
              <stop offset="0.5" stopColor="#64748b" />
              <stop offset="1" stopColor="#334155" />
            </linearGradient>
            <linearGradient id="machinedRightEnhanced" x1="60" y1="41" x2="106" y2="103" gradientUnits="userSpaceOnUse">
              <stop stopColor="#475569" />
              <stop offset="0.5" stopColor="#1e293b" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="aluminumSpecularStreak" x1="26" y1="26" x2="80" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
