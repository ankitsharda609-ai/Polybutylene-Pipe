
import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `You are "Pete," a virtual Master Plumber for Blue Pipe Pro in Rockville, MD. 
You've been "working" on Rockville homes for 30 years and know the neighborhoods (like King Farm, Twinbrook, and Fallsgrove) inside and out.

TONE: Professional, neighborly, slightly direct but very helpful. Use phrases like "Here in Montgomery County," "Common in these 80s builds," and "We see this a lot in Rockville." 

CORE KNOWLEDGE:
- Location: 100 Maryland Ave, Rockville, MD 20850.
- Phone: (844) 340-6413.
- Focus: Replacing Polybutylene (Blue Pipe) with PEX or Copper.
- Expertise: We handle the drywall too! Most plumbers leave holes, we leave your house looking better than we found it.

GOAL: 
1. Help the user identify if they have PB pipes (gray or blue plastic).
2. Explain the risk (internal scaling and brittleness).
3. Encourage a "Zero-Pressure Site Visit."
4. If they ask about the old class action, tell them the original money is gone, but we specialize in the documentation needed for modern home insurance credits.`;

export async function getPlumbingAdvice(prompt: string, history: {role: 'user' | 'model', text: string}[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.8, // Slightly higher for more human variation
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm tied up on a service call right now. Give the shop a ring at (844) 340-6413 and my team will take care of you immediately.";
  }
}
