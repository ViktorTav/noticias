const routes = require("./routes/routes");
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use("/", routes);
app.disable('x-powered-by');

app.listen(port, function(){

    console.log(`Servidor ouvindo na porta ${port}`);

})