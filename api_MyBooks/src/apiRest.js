const app = require("./app");

app.listen(app.get("port"), function()
{
    console.log("Servidor en puerto " + app.get("port"))
})