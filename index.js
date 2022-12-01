import Express from "express";

const app = Express();

const PORT = 3000;

app.use("/", (request, response) => {
  response.send(`Olá Colab, bem vindos ao localhost na porta ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
