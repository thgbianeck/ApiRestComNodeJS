const app = require("./src/config/server");
const port = process.env.PORT;

app.listen(port, () => console.log("Api rodando na porta " + port));
