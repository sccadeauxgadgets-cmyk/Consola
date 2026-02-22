import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getConsolaContent() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Analyse le site https://www.consolamenuiserie.fr/ et extrais les informations clés : histoire (depuis quand ?), services principaux (bois, alu, pvc, monuments historiques), certifications (RGE, Qualibat), et valeurs de l'entreprise.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          history: {
            type: Type.OBJECT,
            properties: {
              founded: { type: Type.STRING },
              description: { type: Type.STRING },
            },
            required: ["founded", "description"],
          },
          services: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                items: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                },
              },
              required: ["title", "description", "items"],
            },
          },
          certifications: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          values: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          contact: {
            type: Type.OBJECT,
            properties: {
              address: { type: Type.STRING },
              phone: { type: Type.STRING },
              email: { type: Type.STRING },
            },
            required: ["address", "phone", "email"],
          },
        },
        required: ["history", "services", "certifications", "values", "contact"],
      },
    },
  });

  return JSON.parse(response.text);
}
