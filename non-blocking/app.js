var app = require("express")();
var { fork } = require("child_process");

app.get("/isprime", (req, res) => {
	var childProcess = fork("./isprime.js");
	childProcess.send({ number: parseInt(req.query.number) });
	childProcess.on("message", (message) => res.send(message));
});

app.listen(3000, () => {
	console.log("App listening on port 3000");
});
