const express = require("express");
const { spawn } = require("child_process");

const app = express();
const port = 3000;

app.get("/api/search-address", async (req, res) => {
  const cep = req.query.cep;
  const address = await searchAddress(cep);
  res.json({ address });
});

async function searchAddress(cep) {
  const pythonProcess = spawn("python3", ["../backend/crawler.py", cep]);
  let address = "";
  pythonProcess.stdout.on("data", (data) => {
    address += data.toString();
  });
  pythonProcess.stderr.on("data", (data) => {
    console.error("Erro no crawler:", data.toString());
    throw new Error("Erro ao buscar endereço.");
  });
  await new Promise((resolve) => pythonProcess.on("close", resolve));
  return address.trim();
}

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
