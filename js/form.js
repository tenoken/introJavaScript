var addButton = document.querySelector("#adicionar-paciente");
addButton.addEventListener("click",function(){
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	var patient = getPacienteFromForm(form);

	//var patientTr = makeTr(patient);

	var error = validPatient(patient);

	if(error.length > 0) {
		showErrorMessage(error);
		return;
	}

	//var table = document.querySelector("#tabela-pacientes");

	//table.appendChild(patientTr);

	addPatientInTable(patient);

	form.reset();
	var messageError = document.querySelector("#errorMessage");
	messageError.innerHTML = "";

function addPatientInTable(patient) {
	// body...
	var patientTr = makeTr(patient);
	var table = document.querySelector("#tabela-pacientes");
	table.appendChild(patientTr);
}

function getPacienteFromForm(form){
	var patient = {
	name : form.nome.value,
	weight : form.peso.value,
	height : form.altura.value,
	fatl : form.gordura.value,
	imc : imccal(form.peso.value,form.altura.value)
	}
	return patient;
}

function makeTd(data,classs) {
	var td = document.createElement("td");
	td.classList.add(classs);
	td.textContent = data;

	return td;
}

function makeTr(patient) {
	var patientTr = document.createElement("tr");
	patientTr.classList.add("paciente");

	patientTr.appendChild(makeTd(patient.name, "info-nome"));
	patientTr.appendChild(makeTd(patient.weight, "info-peso"));
	patientTr.appendChild(makeTd(patient.height, "info-altura"));
	patientTr.appendChild(makeTd(patient.fatl, "info-gordura"));
	patientTr.appendChild(makeTd(patient.imc, "info-imc"));

	return patientTr;
}

function validPatient(patient){
	var error = [];
	if (patient.name.length == 0) {
        error.push("O nome não pode ser em branco");
    }

    if (patient.fatl.length == 0) {
        error.push("A gordura não pode ser em branco");
    }

    if (patient.weight.length == 0) {
        error.push("O peso não pode ser em branco");
    }

    if (patient.height.length == 0) {
        error.push("A altura não pode ser em branco");
    }

    if (!validWeight2(patient.fatl)) {
        error.push("Peso é inválido");
    }

    if (!validHeight2(patient.height)) {
        error.push("Altura é inválida");
    }

    return error;
}

function showErrorMessage(error) {
	var ul = document.querySelector("#errorMessage");
	ul.innerHTML = "";

	error.forEach(function(error) {
		var li = document.createElement("li");
		li.textContent = error;
		ul.appendChild(li);
	})
}

})



