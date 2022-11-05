var app = require("express")();

app.get("/isprime", (req, res) => {
	console.log("hit");
	res.setHeader("Access-Control-Allow-Origin", "*");
	var jsonResponse = isPrime(req.query.number);
	res.send(jsonResponse);
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

var isPrime = (number) => {
	var prime = true;
	for (let i = 3; i < number; i++) {
		if (number % i === 0) {
			prime = false;
			break;
		}
	}
	return { number: number, isPrime: prime };
};
