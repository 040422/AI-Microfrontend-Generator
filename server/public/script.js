async function generate() {
  const prompt = document.getElementById("promptInput").value;

  const res = await fetch("/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();

  if (data.result) {
    document.getElementById("resultOutput").innerText = data.result;
  } else {
    document.getElementById("resultOutput").innerText =
      "❌ Error: " + data.error;
  }
}
