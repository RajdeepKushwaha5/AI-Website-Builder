# AI Web Builder

This is a modern, AI-powered web development environment that allows you to generate and preview websites in real-time. Simply describe the website you want to build, and the AI will generate the HTML, CSS, and JavaScript code for you. You can then edit the code and see your changes instantly.


Check it out here : https://vercel.com/moron3753-gmailcoms-projects/ai-website-builder


## ✨ Features

- **🤖 AI-Powered Code Generation**: Utilizes the Google Gemini API to turn natural language prompts into functional web code.
- **↔️ Split-Screen Interface**: A clean, two-panel layout with a code editor on the left and a live preview on the right.
- **📝 Multi-File Editor**: Easily switch between `HTML`, `CSS`, and `JavaScript` files using a tabbed interface.
- **⚡ Real-Time Live Preview**: The preview pane renders your code instantly as you type, providing immediate feedback.
- **🎨 Modern UI/UX**: A sleek, dark-themed, and responsive design built with Tailwind CSS.
- **📥 Export Functionality**: Download your complete project as a single, self-contained `index.html` file.

## 🚀 How to Use

1.  **Describe Your Vision**: In the input field at the top, type a description of the website or component you want to create.
    -   *Example: "A pomodoro timer with a circular progress bar and start/stop buttons."*
    -   *Example: "A simple portfolio page with a profile picture, a short bio, and links to social media."*
2.  **Generate Code**: Click the **Generate** button. The AI will process your request and populate the editor with the corresponding HTML, CSS, and JavaScript code.
3.  **View & Edit**: The generated website will appear in the **Live Preview** panel. You can modify the code in the HTML, CSS, or JS tabs to fine-tune the result.
4.  **See Instant Changes**: Any edits you make in the code editor are reflected in the live preview in real-time.
5.  **Download Your Work**: Once you're happy with your creation, click the **Download** button to save it as a standalone `index.html` file.

## 🛠️ Technical Stack

-   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
-   **AI Model**: Google Gemini (`gemini-2.5-flash`) via the [`@google/genai`](https://www.npmjs.com/package/@google/genai) SDK.
-   **Bundling/Environment**: The app is set up to run in a modern browser environment using ES modules and an `importmap`.

## 🔑 API Key Setup

This application requires a Google Gemini API key to function. The key is expected to be available in the execution environment as `process.env.API_KEY`. The application code reads this variable directly.

**Note**: You do not need to set this up manually in this specific web-based environment, as it is pre-configured.
