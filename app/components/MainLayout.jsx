'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Github, Linkedin, Mail, Terminal, Code2, X, ChevronDown
} from 'lucide-react';
import TerminalOverlay from './TerminalOverlay';

export default function MainLayout({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalOpen, setTerminalOpen] = useState(false);
  const canvasRef = useRef(null);
  const pathname = usePathname();
  
  // Define active section based on current path
  const getActiveSection = () => {
    if (pathname === '/') return 'home';
    if (pathname.includes('/experience')) return 'experience';
    if (pathname.includes('/projects')) return 'projects';
    if (pathname.includes('/skills')) return 'skills';
    if (pathname.includes('/blog')) return 'blog';
    if (pathname.includes('/achievements')) return 'achievements';
    if (pathname.includes('/contact')) return 'contact';
    return '';
  };

  const activeSection = getActiveSection();

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'experience', path: '/experience' },
    { name: 'projects', path: '/projects' },
    { name: 'skills', path: '/skills' },
    { name: 'blog', path: '/blog' },
    { name: 'achievements', path: '/achievements' },
    { name: 'contact', path: '/contact' },
  ];

  return (
    <div className="relative min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Matrix Rain Background */}
      <canvas ref={canvasRef} className="fixed inset-0 opacity-20 pointer-events-none" />
      
      {/* Scan Line Effect */}
      <div className="scan-line" />
      
      {/* Floating Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `perspective(500px) rotateX(60deg) translateZ(-100px) translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/80 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 glitch-text">
            <Terminal className="w-6 h-6 animate-pulse" />
            <Link href="/" className="text-xl font-bold">aayush.dev</Link>
          </div>
          <div className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.path}
                className={`uppercase text-sm tracking-wider hover:text-green-300 transition-colors relative group ${
                  activeSection === link.name ? 'text-green-300' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-400 transition-all duration-300 ${
                  activeSection === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <button
              onClick={() => setTerminalOpen(!terminalOpen)}
              className="p-2 hover:bg-green-500/20 rounded transition-colors"
              title="Open Terminal (Interactive)"
            >
              <Code2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Terminal Overlay - To be implemented separately */}
      {terminalOpen && (
        <TerminalOverlay onClose={() => setTerminalOpen(false)} />
      )}

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-green-500/30 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-green-400/60 mb-2">
            © 2026 Aayush Agarwal. Built with React + Next.js + Tailwind CSS
          </p>
          <p className="text-green-400/40 text-sm">
            {'>'} System online. Status: Operational. Uptime: 99.9%
          </p>
          <div className="flex justify-center gap-4 mt-4 text-green-400/60 text-sm">
            <button onClick={() => setTerminalOpen(true)} className="hover:text-green-400 transition-colors">
              Open Terminal
            </button>
            <span>•</span>
            <a href="https://linkedin.com/in/aayush1936" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://github.com/aayush1936" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        
        * {
          font-family: 'JetBrains Mono', monospace;
        }

        .scan-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, #00ff00, transparent);
          animation: scan 8s linear infinite;
          pointer-events: none;
          z-index: 100;
        }

        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }

        .glitch-text {
          position: relative;
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%, 90%, 100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 2px);
          }
          94% {
            transform: translate(2px, -2px);
          }
          96% {
            transform: translate(-2px, -2px);
          }
          98% {
            transform: translate(2px, 2px);
          }
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000;
        }

        ::-webkit-scrollbar-thumb {
          background: #00ff00;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #00cc00;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}