document.querySelector(".title");
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var patients = document.querySelectorAll(".paciente");


for (var i = 0; i < patients.length; i++) {
	var patient = patients[i];
	var tdweight = patient.querySelector(".info-peso");
	var tdheight = patient.querySelector(".info-altura");
	var tdimc = patient.querySelector(".info-imc");
	var weight = tdweight.textContent;
	var height = tdheight.textContent;

	var validWeight = validWeight2(weight);
	var validHeight = validHeight2(height);

	if (!validHeight) {
		console.log("Altura inválida!");
		tdheight = "Altura inválida!";
		validHeight = false;
		patient.classList.add('paciente-invalido');
	}

	if (!validWeight) {
		console.log("Peso inválido!");
		tdheight = "Peso inválido!";
		validHeight = false;
		patient.classList.add('paciente-invalido');
	}

	if (validHeight && validWeight == true) {
		var imc = imccal(weight,height);
		tdimc.textContent = imc;
	} 

}

function imccal(weight,height) {
	var imc = 0;
	var imc = weight / ( height * height);
	return imc.toFixed(2);
}

function validWeight2(weight) {
	if (weight > 0 && weight <=1000){
		return true;
	} else {
		return false;
	}
}

function validHeight2(height) {
	if (height > 0 && height <= 3.00){
		return true;
	} else {
		return false;
	}
}
