import express from 'express';

const app = express();

const PORT: number = 3000;
const arrDadosJSON = [
  {"name": "Cachorro caramelo", 
   "idade": 20,
   "Companhia": "AVSPP"
  },
]

app.get("/", (req: any, res:any)=>{
  // res.send("Calma ai calabreso!");

  res.send(arrDadosJSON);

});

app.listen(PORT, () => {
  console.log(`Tlg né rapaziada tive que rodar esse servidor na porta: ${PORT} !`);
});