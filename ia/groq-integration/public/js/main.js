const inputMessage = document.getElementById("inputMessage");
const btnSend = document.getElementById("btnSend");
const chatArea = document.getElementById("chatArea");

inputMessage.focus();

function addMessage(message, sender) {
  const divMessage = document.createElement("div");
  divMessage.classList.add("message", sender);
  divMessage.innerHTML = marked.parse(message);

  chatArea.appendChild(divMessage);
  chatArea.scrollTop = chatArea.scrollHeight;
}

async function sendMessage() {
  const message = inputMessage.value.trim();
  inputMessage.value = "";
  inputMessage.focus();

  if (!message) return;

  addMessage(message, "user");

  try {
    const response = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (response.ok) {
      addMessage(data.response, "bot");
    } else {
      addMessage(data.error, "bot");
    }
  } catch (error) {
    addMessage(error.message, "bot");
  }
}

btnSend.addEventListener("click", sendMessage);
inputMessage.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});