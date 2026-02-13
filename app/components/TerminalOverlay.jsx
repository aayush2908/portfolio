'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { terminalCommands, handleTerminalCommand as processCommand } from '../utils/terminal';

export default function TerminalOverlay({ onClose }) {
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [terminalInput, setTerminalInput] = useState('');
  const terminalInputRef = useRef(null);

  // Focus the input when terminal opens
  useEffect(() => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [terminalHistory]);

  const handleTerminalCommand = (cmd) => {
    // Process the command using the imported handler
    const result = processCommand(cmd, terminalHistory);
    
    if (result.clear) {
      setTerminalHistory([]);
    } else {
      setTerminalHistory(result.history);
      if (result.action) {
        setTimeout(result.action, 500);
      }
    }
    
    setTerminalInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-5xl bg-gray-900 border-2 border-green-500 rounded-lg overflow-hidden shadow-2xl shadow-green-500/50">
        <div className="bg-green-500/20 px-4 py-2 flex justify-between items-center border-b border-green-500">
          <div className="flex items-center gap-4">
            <span className="text-green-300 font-bold">aayush@portfolio:~$</span>
            <span className="text-green-400/60 text-sm">Interactive Terminal - Type 'help' for commands</span>
          </div>
          <button 
            onClick={onClose} 
            className="hover:text-red-500 transition-colors"
            title="Close Terminal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 h-[500px] overflow-y-auto font-mono text-sm">
          <div className="mb-4 text-green-300">
            Welcome to Aayush's Interactive Terminal v3.0
            <br />Type 'help' to see available commands.
          </div>
          
          {terminalHistory.map((item, i) => (
            <div key={i} className="mb-4">
              <div className="flex gap-2 text-green-400">
                <span className="text-green-500">$</span>
                <span>{item.input}</span>
              </div>
              {item.output && (
                <pre className="mt-2 text-green-300/90 whitespace-pre-wrap pl-4">
                  {item.output}
                </pre>
              )}
            </div>
          ))}
          
          <div className="flex gap-2 items-center">
            <span className="text-green-500">$</span>
            <input
              ref={terminalInputRef}
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleTerminalCommand(terminalInput);
                }
              }}
              className="flex-1 bg-transparent outline-none text-green-400 caret-green-400"
              placeholder="Type a command..."
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}