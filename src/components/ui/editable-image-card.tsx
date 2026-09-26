import React, { useState, useRef } from "react";
import { Pencil, UploadCloud, X, Image as ImageIcon, Link as LinkIcon, Check, RefreshCw } from "lucide-react";

interface EditableImageCardProps {
  image: string;
  onImageChange: (newImage: string) => void;
  title?: string;
  subtitle?: string;
  badgeLeft?: string;
  badgeRightText?: string;
  className?: string;
  aspectRatio?: string; // e.g. "h-48 sm:h-56"
  children?: React.ReactNode;
}

export const EditableImageCard: React.FC<EditableImageCardProps> = ({
  image,
  onImageChange,
  title,
  subtitle,
  badgeLeft,
  badgeRightText = "Edit",
  className = "",
  aspectRatio = "h-48 sm:h-56",
  children,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [urlInput, setUrlInput] = useState(image || "");
  const [activeTab, setActiveTab] = useState<"file" | "url">("file");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG, JPG, WEBP, GIF, SVG).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onImageChange(result);
        setShowModal(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDirectClickEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Directly trigger file input for quickest 1-click edit, but offer modal too if needed
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      onImageChange(urlInput.trim());
      setShowModal(false);
    }
  };

  return (
    <div className={`bg-white rounded-[28px] p-3 sm:p-3.5 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between ${className}`}>
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
        className="hidden"
      />

      {/* Main Image Frame (Exact Screenshot Styling) */}
      <div className={`relative w-full ${aspectRatio} rounded-[22px] overflow-hidden bg-slate-900 border border-slate-200/60 shrink-0`}>
        {/* Image */}
        <img
          src={image}
          alt={title || "Image Card"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600";
          }}
        />

        {/* TOP-LEFT BADGE (E.g. Distance / Slide # / Tag) */}
        {badgeLeft && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-extrabold px-3 py-1.5 rounded-full border border-white/60 shadow-md">
              {badgeLeft}
            </span>
          </div>
        )}

        {/* TOP-RIGHT EDIT BUTTON (Exact Match to User Screenshot) */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          <button
            type="button"
            onClick={handleDirectClickEdit}
            onContextMenu={(e) => {
              e.preventDefault();
              setShowModal(true);
            }}
            title="Click to change photo (Right-click for URL mode)"
            className="bg-white/95 hover:bg-white text-slate-900 hover:text-blue-600 backdrop-blur-md text-xs font-black px-3.5 py-1.5 rounded-full border border-white/80 shadow-lg flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer group/btn"
          >
            <Pencil className="size-3.5 text-blue-600 group-hover/btn:rotate-12 transition-transform" />
            <span>{badgeRightText}</span>
          </button>
        </div>

        {/* BOTTOM DARK GRADIENT OVERLAY WITH TITLE */}
        {(title || subtitle) && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-3.5 sm:p-4 pt-10 flex flex-col justify-end pointer-events-none">
            {title && (
              <span className="text-white font-black text-sm sm:text-base leading-snug drop-shadow-md truncate">
                {title}
              </span>
            )}
            {subtitle && (
              <span className="text-slate-300 font-bold text-xs leading-snug drop-shadow-xs truncate mt-0.5">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Content Children (if any additional controls/fields needed below image) */}
      {children && <div className="pt-3">{children}</div>}

      {/* FULL SCREEN DRAG & DROP / URL POPUP MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-slate-200 relative space-y-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="size-5" />
            </button>

            <div>
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <RefreshCw className="size-5 text-blue-600" /> Change Photo / Image
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Upload a new photo from your device or enter an image URL.</p>
            </div>

            {/* Modal Tabs */}
            <div className="flex rounded-xl bg-slate-100 p-1 font-bold text-xs">
              <button
                type="button"
                onClick={() => setActiveTab("file")}
                className={`flex-1 py-2 rounded-lg transition ${
                  activeTab === "file" ? "bg-white text-blue-600 shadow-xs font-black" : "text-slate-600"
                }`}
              >
                Upload File (Drag & Drop)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("url")}
                className={`flex-1 py-2 rounded-lg transition ${
                  activeTab === "url" ? "bg-white text-blue-600 shadow-xs font-black" : "text-slate-600"
                }`}
              >
                Paste Image Link / URL
              </button>
            </div>

            {activeTab === "file" ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition ${
                  isDragging ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-blue-500 bg-slate-50"
                }`}
              >
                <div className="size-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <UploadCloud className="size-6" />
                </div>
                <p className="text-xs font-bold text-slate-800">Drag & drop photo here, or click to browse</p>
                <p className="text-[11px] text-slate-400 mt-1">Supports PNG, JPG, WEBP, GIF, SVG</p>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Image URL / Path</label>
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Paste URL (e.g. /hero-slide-1.png or https://...)"
                  className="w-full rounded-xl bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-medium"
                />
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md transition flex items-center justify-center gap-1.5"
                >
                  <Check className="size-4" /> Apply Image
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
