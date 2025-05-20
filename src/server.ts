import express from 'express';

const app = express();

const PORT: number = 3000;

app.get("/", (req: any, res:any)=>{
  console.log("Vou disponibilizar os dados para  todo mundo!");
});

app.post("/post", (req: any, res:any)=>{
    console.log("Vou enviar alguns dados para o todo mundo!");
});
app.put("/put", (req: any, res:any)=>{
    console.log("Vou editar o que o post fez todo mundo!");
});
app.delete("/delete", (req: any, res:any)=>{
    console.log("Vou Apagar todo mundo!");
});

app.listen(PORT, () => {
  console.log(`servidor na porta: ${PORT} !`);
});