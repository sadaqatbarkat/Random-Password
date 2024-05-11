var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var symbols = "!@#$%&*()_<>/"
var numbers = "1234567890"

var password1 = ""
var password2 = ""
var password3 = ""














function abc() {

	
	var upSet = document.getElementById("uppercase")
	if (upSet.checked) {


		for (var i = 0; i <= document.getElementById("range").value; i++) {

			randomValues = Math.floor(Math.random() * letters.length)
			password1 += letters[randomValues]





		}
		console.log(letters)

		var value = document.getElementById("range").value

		document.getElementById("counting").innerText = value
		document.getElementById("input").value = password1
	}


	var upSet = document.getElementById("uppercase");
	if (upSet.checked) {


		for (var i = 1; i <= document.getElementById("range").value; i++) {

			randomValues = Math.floor(Math.random() * upper.length)
			password1 += upper[randomValues]





		}

		var value = document.getElementById("range").value

		document.getElementById("counting").innerText = value
		document.getElementById("input").value = password1


	}

	var lowSet = document.getElementById("lowercase")
	if (lowSet.checked) {


		for (var i = 1; i <= document.getElementById("range").value; i++) {

			randomValues = Math.floor(Math.random() * lowerCase.length)
			password2 += lowerCase[randomValues]





		}

		var value = document.getElementById("range").value

		document.getElementById("counting").innerText = value
		document.getElementById("input").value = password2


	}


	var numSet = document.getElementById("numbers")
	if (numSet.checked) {


		for (var i = 1; i <= document.getElementById("range").value; i++) {

			randomValues = Math.floor(Math.random() * numbers.length)
			password3 += numbers[randomValues]





	 	}

		var value = document.getElementById("range").value

		document.getElementById("counting").innerText = value
		document.getElementById("input").value = password3
	}


	var symbolsSet = document.getElementById("symbols")




	if (symbolsSet.checked) {


		for (var i = 1; i <= document.getElementById("range").value; i++) {

			randomValues = Math.floor(Math.random() * symbols.length)
			password3 += symbols[randomValues]





		}





	}

	var value = document.getElementById("range").value

	document.getElementById("counting").innerText = value
	document.getElementById("input").value = password3
























}













