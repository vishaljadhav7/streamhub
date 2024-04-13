import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_AI_KEY } from "../utils/constants";

const useGeminiAI = async (geminiSearchQuery) => {
    const genAI = new GoogleGenerativeAI(GEMINI_AI_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const result = await model.generateContent(geminiSearchQuery);
    const response = await result.response;
    const text = response.text();
    return text ;
}

export default useGeminiAI ;