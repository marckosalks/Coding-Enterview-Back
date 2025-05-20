import  express  from "express";

const app = express();
const port = 3938; 


//incluindo middleware

app.use((req, res, next)=>{
  console.log("Will before any route!");
  next();
});

//defini minha rota principal
app.get("/", function(rec, res, next){
  console.log("route / called");
  res.send("Salve tropinha, Marcktigger na area!!!");
});

//rodando meu servidor
app.listen(3938, ()=>{ 
  console.log("Rodando meu servidor: na porta " + port); 
});

