
import React from 'react';
import { SpinnerIcon } from './icons/SpinnerIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface HeaderProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  onExport: () => void;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ prompt, setPrompt, onGenerate, onExport, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onGenerate();
    }
  };

  return (
    <header className="p-4 bg-gray-900/50 backdrop-blur-sm border-b border-gray-700/50">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <h1 className="text-xl font-bold text-indigo-400 whitespace-nowrap">
          AI Web Builder
        </h1>
        <div className="w-full flex-grow flex items-center bg-gray-800 rounded-lg shadow-inner focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g., A pomodoro timer with a circular progress bar"
            className="w-full bg-transparent p-3 pl-4 outline-none placeholder-gray-500"
            disabled={isLoading}
          />
        </div>
        <div className="flex items-center gap-2">
            <button
              onClick={onGenerate}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg w-32 h-12"
            >
              {isLoading ? <SpinnerIcon /> : 'Generate'}
            </button>
            <button
              onClick={onExport}
              className="flex items-center justify-center bg-gray-600 hover:bg-gray-500 text-white font-bold p-3 rounded-lg transition-all shadow-md hover:shadow-lg h-12"
              title="Download as HTML file"
            >
              <DownloadIcon />
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
