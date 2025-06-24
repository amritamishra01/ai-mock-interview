// // import {
// //   GoogleGenerativeAI,
// //   HarmCategory,
// //   HarmBlockThreshold,
// // } from "@google/generative-ai";

// // const apiKey = import.meta.env.VITE_GEMINI_API_KEY!;
// // const genAI = new GoogleGenerativeAI(apiKey);

// // const model = genAI.getGenerativeModel({
// //   model: "gemini-2.0-flash-exp",
// // });

// // const generationConfig = {
// //   temperature: 1,
// //   topP: 0.95,
// //   topK: 40,
// //   maxOutputTokens: 8192,
// //   responseMimeType: "text/plain",
// // };

// // const safetySettings = [
// //   {
// //     category: HarmCategory.HARM_CATEGORY_HARASSMENT,
// //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //   },
// //   {
// //     category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
// //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //   },
// //   {
// //     category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
// //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //   },
// //   {
// //     category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
// //     threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
// //   },
// // ];

// // export const chatSession = model.startChat({
// //   generationConfig,
// //   safetySettings,
// // });

// import {
//   GoogleGenAI,
// } from '@google/genai';


// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey:import.meta.env.VITE_GEMINI_API_KEY!,
//   });
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     responseMimeType: 'text/plain',
//   };
//   const model = 'gemini-2.5-flash';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `You are an AI interviewer. Ask 3 technical questions for a mock interview for a Java backend developer with 2 years of experience. Wait for the user's answer after each question.
// `,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Adopting a Role**

// I'm focusing on embodying the role of an AI interviewer. This means I'm concentrating on adopting a professional, encouraging, and slightly formal tone. I'm aiming to guide the conversation naturally, much like a human interviewer.


// **Refining Question Focus**

// I'm now focusing on core Java and ensuring the questions are suitable for someone with two years of experience. This means the questions can't be too easy nor too advanced. I'm brainstorming questions that test practical knowledge of core Java concepts, while also hinting at a framework like Spring, and some system design awareness. I'll need to make sure I phrase the questions appropriately.


// **Crafting Interview Questions**

// I'm now refining the questions to target a two-year Java developer's knowledge. I'm focusing on core Java concepts, weaving in Spring-related topics, and subtly testing system design awareness. I'm aiming for questions that elicit insightful answers and facilitate a smooth conversation.


// **Prioritizing Question Selection**

// I've outlined question categories and now need to select three questions that effectively assess a 2-year Java developer.  I'll focus on a mix of core Java, Spring/Frameworks, and system design, ensuring the questions are well-phrased to encourage in-depth responses.


// **Developing Interview Questions**

// I've refined the questions to accurately gauge a 2-year Java developer's expertise. I'm focusing on incorporating real-world scenarios and deeper concepts for impactful responses. I'm aiming to craft questions that not only test technical knowledge but also reveal problem-solving capabilities.


// **Developing Interview Questions (Continued)**

// I've refined the third question. I'm focusing on making it a realistic scenario involving transactions, addressing common pitfalls. The goal is to assess their understanding of transactional behavior and data consistency. This also allows me to judge their ability to recognize and address potential concurrency issues.


// **Developing Prompt Structure**

// I'm now organizing the flow of the AI Interview. I'll begin with a welcoming introduction, setting the stage for a Java developer interview and confirming the target role and experience level. The conversation will transition seamlessly into each of the three questions, followed by a non-judgmental acknowledgment after each answer.


// **Developing Final Interview Prompt**

// I've combined my planned questions and built a welcome message. I'm focusing on making the structure clear. I'll ask Q1, wait, A1, thank, ask Q2, wait, A2, thank, ask Q3, wait, A3, thank, and finally a closing message. This will allow for the most effective evaluation of a candidate's Java knowledge.


// `,
//         },
//         {
//           text: `Of course. Hello, and welcome to this mock interview.

// I see you have around 2 years of experience as a Java Backend Developer. Today, I'll ask you three technical questions to gauge your understanding of core concepts and common frameworks. We'll go one by one.

// Let's start.

// **Question 1:**
// Imagine you are building a multi-threaded application where multiple threads need to read from and write to a shared map. What potential issues could arise if you use a standard \`java.util.HashMap\` for this task? How would \`java.util.concurrent.ConcurrentHashMap\` help solve these issues, and what is a key difference in its internal locking mechanism compared to a \`Hashtable\` or a synchronized \`HashMap\`?

// Please take your time to answer.`,
//         },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();





// import { GoogleGenAI } from '@google/genai';

// // Initialize the GenAI client
// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// // Safety settings for content filtering
// const safetySettings = [
//   {
//     category: 'HARM_CATEGORY_DEROGATORY',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_VIOLENCE',
//     threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_SEXUAL',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_HARASSMENT',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_HATE_SPEECH',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
// ];

// // Generation configuration
// const generationConfig = {
//   thinkingConfig: {
//     thinkingBudget: -1,
//   },
//   responseMimeType: 'text/plain',
// };

// // Main function to run chat
// async function main() {
//   const model = ai.getGenerativeModel({
//     model: 'gemini-2.5-flash',
//     generationConfig,
//     safetySettings,
//   });

//   const chatSession = model.startChat({
//     generationConfig,
//     safetySettings,
//   });

//   const result = await chatSession.sendMessageStream([
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `You are an AI interviewer. Ask 3 technical questions for a mock interview for a Java backend developer with 2 years of experience. Wait for the user's answer after each question.`,
//         },
//       ],
//     },
//   ]);

//   for await (const chunk of result.stream) {
//     process.stdout.write(chunk.text || '');
//   }
// }

// main().catch((err) => {
//   console.error('Error running Gemini chat:', err);
// });


// import { GoogleGenAI } from '@google/genai';

// // Load environment variable
// const apiKey = process.env.GEMINI_API_KEY;

// if (!apiKey) {
//   throw new Error('GEMINI_API_KEY is not defined in environment variables.');
// }

// // Initialize GoogleGenAI client
// const ai = new GoogleGenAI({ apiKey });

// // Safety settings
// const safetySettings = [
//   {
//     category: 'HARM_CATEGORY_DEROGATORY',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_VIOLENCE',
//     threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_SEXUAL',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_HARASSMENT',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
// ];

// // Generation config
// const generationConfig = {
//   responseMimeType: 'text/plain',
//   temperature: 0.7,
// };

// // MAIN
// async function main() {
//   const model = ai.getGenerativeModel({
//     model: 'gemini-1.5-flash', // or 'gemini-2.5-flash' if fully supported in your version
//     generationConfig,
//     safetySettings,
//   });

//   const chatSession = model.startChat({
//     generationConfig,
//     safetySettings,
//   });

//   const result = await chatSession.sendMessageStream(
//     `You are an AI interviewer. Ask 3 technical questions for a mock interview for a Java backend developer with 2 years of experience. Wait for the user's answer after each question.`
//   );

//   for await (const chunk of result.stream) {
//     process.stdout.write(chunk.text || '');
//   }
// }

// main().catch((err) => console.error('ERROR:', err));



// geminiClient.ts
// import { GoogleGenAI } from '@google/genai';

// // Load environment variable
// const apiKey = process.env.GEMINI_API_KEY;

// if (!apiKey) {
//   throw new Error('GEMINI_API_KEY is not defined in environment variables.');
// }

// // Initialize GoogleGenAI client
// const ai = new GoogleGenAI({ apiKey });

// // Safety settings
// const safetySettings = [
//   {
//     category: 'HARM_CATEGORY_DEROGATORY',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_VIOLENCE',
//     threshold: 'BLOCK_MEDIUM_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_SEXUAL',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
//   {
//     category: 'HARM_CATEGORY_HARASSMENT',
//     threshold: 'BLOCK_LOW_AND_ABOVE',
//   },
// ];

// // Generation config
// const generationConfig = {
//   responseMimeType: 'text/plain',
//   temperature: 0.7,
// };

// // Load model
// const model = ai.getGenerativeModel({
//   model: 'gemini-1.5-flash',
//   generationConfig,
//   safetySettings,
// });

// // Export reusable chat session
// const chatSession = model.startChat({
//   generationConfig,
//   safetySettings,
// });

// export default chatSession;



















// gemini.config.ts

// import { GoogleGenAI } from '@google/genai';

// // Load API Key
// const apiKey = process.env.GEMINI_API_KEY;

// if (!apiKey) {
//   throw new Error('GEMINI_API_KEY is not defined in environment variables.');
// }

// // Initialize Gemini
// const ai = new GoogleGenAI({ apiKey });

// // Safety settings (using string literals because of TS limitations in v1.5.1)
// const safetySettings = [
//   {
//     category: 'HARM_CATEGORY_DEROGATORY' as any,
//     threshold: 'BLOCK_LOW_AND_ABOVE' as any,
//   },
//   {
//     category: 'HARM_CATEGORY_VIOLENCE' as any,
//     threshold: 'BLOCK_MEDIUM_AND_ABOVE' as any,
//   },
//   {
//     category: 'HARM_CATEGORY_SEXUAL' as any,
//     threshold: 'BLOCK_LOW_AND_ABOVE' as any,
//   },
//   {
//     category: 'HARM_CATEGORY_HARASSMENT' as any,
//     threshold: 'BLOCK_LOW_AND_ABOVE' as any,
//   },
// ];

// // Config object
// const generationConfig = {
//   responseMimeType: 'text/plain',
//   temperature: 0.7,
//   safetySettings,
// };

// // ✅ This behaves like a "chat session" (but stateless)
// async function chatSession(contents: any[]) {
//   const model = 'gemini-2.5-flash';

//   const response = await ai.models.generateContentStream({
//     model,
//     config: {
//       thinkingConfig: {
//         thinkingBudget: -1,
//       },
//       ...generationConfig,
//     },
//     contents,
//   });

//   return response;
// }

// export default chatSession;

// chatSession.ts
// import { GoogleGenAI } from '@google/genai';
// const { GoogleGenAI } = await import('@google/genai');


// // const apiKey = process.env.GEMINI_API_KEY;
// const apiKey = import.meta.env.VITE_GEMINI_API_KEY;



// if (!apiKey) throw new Error('GEMINI_API_KEY not set');

// const ai = new GoogleGenAI({ apiKey });

// const model = 'gemini-2.5-flash';



// const generationConfig = {
//   responseMimeType: 'text/plain',
//   temperature: 0.7,
//   safetySettings: [
//     {
//       category: 'HARM_CATEGORY_HATE_SPEECH' as any,
//       threshold: 'BLOCK_LOW_AND_ABOVE' as any,
//     },
//     {
//       category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT' as any,
//       threshold: 'BLOCK_LOW_AND_ABOVE' as any,
//     },
//     {
//       category: 'HARM_CATEGORY_DANGEROUS_CONTENT' as any,
//       threshold: 'BLOCK_MEDIUM_AND_ABOVE' as any,
//     },
//     {
//       category: 'HARM_CATEGORY_HARASSMENT' as any,
//       threshold: 'BLOCK_LOW_AND_ABOVE' as any,
//     },
//   ],
// };




// class ChatSession {
//   history: any[] = [];

//   async sendMessage(text: string) {
//     this.history.push({
//       role: 'user',
//       parts: [{ text }],
//     });

//     const response = await ai.models.generateContentStream({
//       model,
//       config: {
//         thinkingConfig: {
//           thinkingBudget: -1,
//         },
//         ...generationConfig,
//       },
//       contents: this.history,
//     });

//     return response;
//   }
// }

// export default new ChatSession();



let ai: any = null;

const model = 'gemini-2.5-flash';

const generationConfig = {
  responseMimeType: 'text/plain',
  temperature: 0.7,
  safetySettings: [
    {
      category: 'HARM_CATEGORY_HATE_SPEECH' as any,
      threshold: 'BLOCK_LOW_AND_ABOVE' as any,
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT' as any,
      threshold: 'BLOCK_LOW_AND_ABOVE' as any,
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT' as any,
      threshold: 'BLOCK_MEDIUM_AND_ABOVE' as any,
    },
    {
      category: 'HARM_CATEGORY_HARASSMENT' as any,
      threshold: 'BLOCK_LOW_AND_ABOVE' as any,
    },
  ],
};

class ChatSession {
  history: any[] = [];

  // 🛠 Load GoogleGenAI dynamically (no top-level await)
  private async getAI() {
    if (!ai) {
      const { GoogleGenAI } = await import('@google/genai');
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error('GEMINI_API_KEY not set');
      }

      ai = new GoogleGenAI({ apiKey });
    }

    return ai;
  }

  // 🧠 Main interaction function
  async sendMessage(text: string) {
    const aiClient = await this.getAI();

    this.history.push({
      role: 'user',
      parts: [{ text }],
    });

    const response = await aiClient.models.generateContentStream({
      model,
      config: {
        thinkingConfig: {
          thinkingBudget: -1,
        },
        ...generationConfig,
      },
      contents: this.history,
    });

    return response;
  }
}

export default new ChatSession();
