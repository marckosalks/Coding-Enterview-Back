import {app} from './app'

//ou uma porta ou a outra 
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});