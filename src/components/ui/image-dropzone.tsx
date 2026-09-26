import React, { useState, useRef } from "react";
import { UploadCloud, Image as ImageIcon, X, Link as LinkIcon, Check, RefreshCw } from "lucide-react";

interface ImageDropzoneProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  placeholder?: string;
  compact?: boolean;
  className?: string;
}

export const ImageDropzone: React.FC<ImageDropzoneProps> = ({
  value,
  onChange,
  label = "Photo / Image",
  placeholder = "Drag & drop photo here, or click to browse",
  compact = false,
  className = "",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlText, setUrlText] = useState(value || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith("image/")) {
      alert("Please upload a valid image file (PNG, JPG, WEBP, GIF, SVG).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        onChange(result);
        setUrlText(result);
      }
    };
    reader.readAsDataURL(file);
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

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleApplyUrl = () => {
    onChange(urlText);
    setShowUrlInput(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange("");
    setUrlText("");
  };

  if (compact) {
    return (
      <div className={`space-y-1.5 ${className}`}>
        {label && <label className="text-xs font-bold text-slate-600 block">{label}</label>}

        {value ? (
          <div className="relative group rounded-xl border border-slate-200 overflow-hidden bg-slate-50 flex items-center p-2 gap-3">
            <img
              src={value}
              alt="Preview"
              className="size-10 rounded-lg object-cover border border-slate-200 shrink-0 bg-white"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=200";
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-slate-700 truncate">{value.startsWith("data:") ? "Uploaded Image (Base64)" : value}</p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-[10px] font-bold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
              >
                <RefreshCw className="size-2.5" /> Change Photo
              </button>
            </div>
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition shrink-0"
              title="Remove photo"
            >
              <X className="size-4" />
            </button>
          </div>
        ) : (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer rounded-xl border-2 border-dashed p-3 text-center transition-all flex items-center justify-center gap-2 ${
              isDragging
                ? "border-blue-500 bg-blue-50/80 text-blue-600 scale-[0.99]"
                : "border-slate-200 hover:border-blue-400 bg-slate-50/50 hover:bg-slate-50 text-slate-500"
            }`}
          >
            <UploadCloud className="size-4 text-blue-500 shrink-0" />
            <span className="text-xs font-semibold">Drag & drop photo or <span className="text-blue-600 underline">browse</span></span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        {label && <label className="text-xs font-bold text-slate-600 block">{label}</label>}
        <button
          type="button"
          onClick={() => {
            setShowUrlInput(!showUrlInput);
            setUrlText(value || "");
          }}
          className="text-[11px] font-extrabold text-blue-600 hover:text-blue-700 flex items-center gap-1 hover:underline cursor-pointer"
        >
          <LinkIcon className="size-3" />
          {showUrlInput ? "Hide URL Input" : "Paste Image Link"}
        </button>
      </div>

      {showUrlInput && (
        <div className="flex items-center gap-2 p-2 bg-blue-50/70 border border-blue-200 rounded-xl animate-in fade-in slide-in-from-top-1">
          <input
            type="text"
            value={urlText}
            onChange={(e) => setUrlText(e.target.value)}
            placeholder="Paste image URL (e.g. /hero-slide-1.png or https://...)"
            className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500 font-medium"
          />
          <button
            type="button"
            onClick={handleApplyUrl}
            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg flex items-center gap-1 transition shrink-0"
          >
            <Check className="size-3.5" /> Apply
          </button>
        </div>
      )}

      {/* Main Drag and Drop Container */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group rounded-2xl border-2 border-dashed p-4 text-center cursor-pointer transition-all duration-200 ${
          isDragging
            ? "border-blue-500 bg-blue-50/90 ring-4 ring-blue-500/10 scale-[0.99]"
            : value
            ? "border-slate-200 bg-slate-50/70 hover:border-blue-400"
            : "border-slate-300 hover:border-blue-500 bg-slate-50/50 hover:bg-blue-50/30"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {value ? (
          <div className="relative flex flex-col items-center justify-center space-y-2 py-1">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xs max-h-48 w-full max-w-sm bg-white flex items-center justify-center">
              <img
                src={value}
                alt="Uploaded preview"
                className="max-h-44 w-auto object-contain rounded-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400";
                }}
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 backdrop-blur-[1px]">
                <span className="px-3 py-1.5 bg-white text-slate-800 text-xs font-extrabold rounded-lg shadow-md flex items-center gap-1.5">
                  <RefreshCw className="size-3.5 text-blue-600" /> Click or Drop to Replace
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between w-full max-w-sm px-1 pt-1">
              <span className="text-[11px] font-semibold text-slate-500 truncate max-w-[200px]">
                {value.startsWith("data:") ? "Uploaded Photo (Base64)" : value}
              </span>
              <button
                type="button"
                onClick={handleClear}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <X className="size-3.5" /> Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-4 space-y-2 text-slate-500">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
              {isDragging ? <UploadCloud className="size-6 text-blue-600 animate-bounce" /> : <ImageIcon className="size-6 text-blue-600" />}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                {isDragging ? "Drop photo here now" : placeholder}
              </p>
              <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                Supports PNG, JPG, WEBP, GIF, SVG up to 10MB
              </p>
            </div>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-extrabold text-blue-600 shadow-2xs group-hover:border-blue-400 group-hover:bg-blue-50">
                <UploadCloud className="size-3.5" /> Browse Files
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
