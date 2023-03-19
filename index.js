const justFood = (number) => {
	return `Catering od Just Food pro ${number} lidi za ${number * 100} korun`
}

const yourMama = (number) => {
	return `Catering od Your Mama pro ${number} lidi za ${number * 150} korun`
}


const flavourHaven = (number) => {
	return `Catering od Flavour Haven pro ${number} lidi za ${number * 300} korun`
}

const createEvent = (nazev, number, catering) => {
	return `${nazev} s ${catering(number)}`
}
	
document.body.innerHTML += createEvent (
	'Svatba',
	80,
	yourMama
)

