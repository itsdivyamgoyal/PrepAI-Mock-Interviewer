import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  apiVersion: "v1",
});

export const chatSession = {
  async sendMessage(prompt: string) {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return {
      response: {
        text: () => response.text,
      },
    };
  },
};