
import React, { useMemo } from 'react';
import { CodeState } from '../types';

interface LivePreviewProps {
  code: CodeState;
}

const LivePreview: React.FC<LivePreviewProps> = ({ code }) => {
  const srcDoc = useMemo(() => {
    return `
      <html>
        <head>
          <style>${code.css}</style>
        </head>
        <body>
          ${code.html}
          <script>${code.js}</script>
        </body>
      </html>
    `;
  }, [code.html, code.css, code.js]);

  return (
    <div className="flex flex-col h-full">
        <div className="flex-shrink-0 bg-gray-900/70 rounded-t-lg px-4 py-3 border-b border-gray-700">
            <h2 className="text-sm font-medium text-gray-300">Live Preview</h2>
        </div>
        <div className="flex-grow bg-white rounded-b-lg overflow-hidden">
            <iframe
                srcDoc={srcDoc}
                title="Live Preview"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                className="border-0"
            />
        </div>
    </div>
  );
};

export default LivePreview;
