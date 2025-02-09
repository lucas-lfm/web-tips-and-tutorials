import express from "express";
import Groq from "groq-sdk";
import 'dotenv/config';

const app = express();
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

function getGroqChatCompletion(message) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "Não responda nada fora do contexto de ciência da computação e programação.",
      },
      {
        role: "user",
        content: message,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem não fornecida!" });
  }

  try {
    const responseGroq = await getGroqChatCompletion(message);

    console.log("Resposta da API Groq:", responseGroq.choices[0]?.message.content);

    res.json({ response: responseGroq.choices[0]?.message?.content || "" });
  } catch (error) {
    console.error("Erro ao chamar a API da Groq:", error.message);
    return res.status(500).json({ error: "Erro ao consultar a API da Groq." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});