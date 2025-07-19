
import React from 'react';
import { CodeState, FileType } from '../types';
import { HtmlIcon } from './icons/HtmlIcon';
import { CssIcon } from './icons/CssIcon';
import { JsIcon } from './icons/JsIcon';

interface CodeEditorProps {
  code: CodeState;
  setCode: React.Dispatch<React.SetStateAction<CodeState>>;
  activeFile: FileType;
  setActiveFile: (file: FileType) => void;
}

const codeKeyMap: { [key in FileType]: keyof CodeState } = {
  [FileType.HTML]: 'html',
  [FileType.CSS]: 'css',
  [FileType.JS]: 'js',
};

const fileTypeToIcon: { [key in FileType]: React.ReactNode } = {
  [FileType.HTML]: <HtmlIcon />,
  [FileType.CSS]: <CssIcon />,
  [FileType.JS]: <JsIcon />,
};

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode, activeFile, setActiveFile }) => {
  const currentCodeKey = codeKeyMap[activeFile];

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(prevCode => ({
      ...prevCode,
      [currentCodeKey]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-lg">
      <div className="flex-shrink-0 bg-gray-900/70 rounded-t-lg">
        <div className="flex border-b border-gray-700">
          {(Object.keys(FileType) as Array<keyof typeof FileType>).map((key) => {
            const fileType = FileType[key];
            const isActive = activeFile === fileType;
            return (
              <button
                key={fileType}
                onClick={() => setActiveFile(fileType)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-indigo-500 text-indigo-400 bg-gray-800'
                    : 'border-transparent text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                }`}
              >
                {fileTypeToIcon[fileType]}
                {fileType}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-grow relative">
        <textarea
          value={code[currentCodeKey]}
          onChange={handleCodeChange}
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="w-full h-full p-4 bg-transparent text-gray-300 font-mono resize-none outline-none leading-relaxed text-sm"
          placeholder={`Enter ${activeFile} code here...`}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
