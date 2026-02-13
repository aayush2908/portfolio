'use client';

import React from 'react';
import { X, FileText, Eye } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, content, type, url }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in overflow-hidden">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl shadow-green-500/30">
        <div className="bg-green-500/20 px-4 py-3 flex justify-between items-center border-b border-green-500">
          <h3 className="text-green-300 font-bold">{title}</h3>
          <button 
            onClick={onClose} 
            className="hover:text-red-500 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-60px)]">
          {type === 'image' && (
            <div className="flex flex-col items-center">
              <img 
                src={content} 
                alt={title} 
                className="max-w-full max-h-[70vh] object-contain mb-4"
              />
              <a 
                href={content}
                download
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>Download</span>
              </a>
            </div>
          )}
          
          {type === 'pdf' && (
            <div className="flex flex-col items-center h-[70vh]">
              <iframe 
                src={`${content}#toolbar=0`} 
                className="w-full h-full border-0 mb-4"
                title={title}
              />
              <a 
                href={content}
                download
                className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span>Download</span>
              </a>
            </div>
          )}
          
          {type === 'resume' && (
            <div className="flex flex-col items-center h-[70vh]">
              <iframe 
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`}
                className="w-full h-full border-0 mb-4"
                title={title}
              />
              <div className="flex gap-4">
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500 rounded hover:bg-green-500/30 transition-colors"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Original</span>
                </a>
                <a 
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}