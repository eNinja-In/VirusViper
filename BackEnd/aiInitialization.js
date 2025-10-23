import { getLlama, LlamaChatSession } from "node-llama-cpp";
import path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let aiSession = null;

export async function initializeAImodel() {
  console.log("Initializing AI model...");
  try {
    // Use CPU backend to minimize memory requirements
    // const llama = await getLlama({ backend: "cpu", });
    const llama = await getLlama();

    const modelPath = path.join(
      __dirname,
      "virox",
      "Virox-7B-Instruct-v0.2.Q5_K_M.gguf" //make sure to copy or insert a gguf file in ./virox directory
    );
    console.log(`Loading model from: ${modelPath}`);

    // const model = await llama.loadModel({ modelPath, useGpu: false,});
    const model = await llama.loadModel({ modelPath });

    // const context = await model.createContext({ maxContextLength: 64, logitsAll: false, embedding: false, });
    const context = await model.createContext();

    aiSession = new LlamaChatSession({
      contextSequence: context.getSequence(),
    });

    console.log("AI model initialized and session created successfully.".green);
  } catch (error) {
    console.error(`Error initializing AI model: ${error.message}`.red);
  }
}

export { aiSession };
