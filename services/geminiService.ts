
import { GoogleGenAI, Type } from "@google/genai";
import { CodeState } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    html: {
      type: Type.STRING,
      description: "The HTML body content. Do not include <html>, <head>, or <body> tags. Can use Tailwind classes.",
    },
    css: {
      type: Type.STRING,
      description: "All necessary CSS styles. Do not wrap in <style> tags.",
    },
    js: {
      type: Type.STRING,
      description: "All necessary JavaScript logic. Do not wrap in <script> tags.",
    },
  },
  required: ['html', 'css', 'js'],
};

export async function generateWebsiteCode(prompt: string): Promise<CodeState> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `User prompt: "${prompt}"`,
      config: {
        systemInstruction: `You are an expert web developer AI. Your task is to generate the complete HTML, CSS, and JavaScript code for a web application based on the user's prompt.
You MUST follow these rules:
1. Respond ONLY with a valid JSON object matching the provided schema. Do not include any explanatory text, markdown formatting (like \`\`\`json), or any other characters before or after the JSON object.
2. The 'html' value should contain only the body content.
3. The 'css' value should contain all the necessary CSS styles.
4. The 'js' value should contain all the necessary JavaScript logic.
5. Create modern, clean, and functional code. If the prompt is simple, create a visually appealing result.
`,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonString = response.text.trim();
    const parsedJson = JSON.parse(jsonString);

    if (
      typeof parsedJson.html === 'string' &&
      typeof parsedJson.css === 'string' &&
      typeof parsedJson.js === 'string'
    ) {
      return parsedJson;
    } else {
      throw new Error("API response did not match the expected format.");
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API Error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the AI.");
  }
}
