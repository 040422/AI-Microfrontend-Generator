document.getElementById("generateBtn").addEventListener("click", async () => {
  const prompt = document.getElementById("promptInput").value.trim();
  const outputArea = document.getElementById("outputArea");

  if (!prompt) {
    outputArea.textContent = "⚠️ Please enter a prompt.";
    return;
  }

  outputArea.textContent = "⏳ Generating code...";

  try {
    const res = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (data.result) {
      outputArea.textContent = data.result;
    } else {
      outputArea.textContent = "❌ No response from AI.";
    }
  } catch (err) {
    console.error(err);
    outputArea.textContent = "❌ Error connecting to the server.";
  }
});

// Copy to clipboard
document.getElementById("copyBtn").addEventListener("click", () => {
  const code = document.getElementById("outputArea").textContent;

  navigator.clipboard.writeText(code)
    .then(() => alert("✅ Code copied to clipboard!"))
    .catch((err) => console.error("Clipboard error:", err));
});
