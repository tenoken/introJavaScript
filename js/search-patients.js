//Importa dados de pacientes para a tabela
	var addButton = document.querySelector("#buscar-pacientes");

	addButton.addEventListener("click",function (){

		var xhr = new XMLHttpRequest();

		xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	xhr.addEventListener("load", function(){

		var errorAjax = document.querySelector("#error-ajax");
			
			if (xhr.status == 200){
				
				errorAjax.classList.add("invisible");
				var response = xhr.responseText;
				var patients = JSON.parse(response);
				////foreach
				patients.forEach(function(patient){

					function makeTd(data,classs) {
					var td = document.createElement("td");
					td.classList.add(classs);
					td.textContent = data;

					return td;
					}
				 	function makeTr(patient) {
						var patientTr = document.createElement("tr");
						patientTr.classList.add("paciente");

						patientTr.appendChild(makeTd(patient.nome, "info-nome"));
						patientTr.appendChild(makeTd(patient.peso, "info-peso"));
						patientTr.appendChild(makeTd(patient.altura, "info-altura"));
						patientTr.appendChild(makeTd(patient.gordura, "info-gordura"));
						patientTr.appendChild(makeTd(patient.imc, "info-imc"));

						return patientTr;
					}
				 	var patientTr = makeTr(patient);
					var table = document.querySelector("#tabela-pacientes");
					table.appendChild(patientTr);
					//addPatientInTable(patient);
				});
			} else {
				 errorAjax.classList.remove("invisible");
			}
		});
		xhr.send();
	});	

