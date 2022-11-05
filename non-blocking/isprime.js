process.on("message", (message) => {
	var jsonResponse = isPrime(message.number);
	process.send(jsonResponse);
	process.exit();
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
