//Essa função filtra os pacientes
	var filter = document.querySelector("#search-field");

	filter.addEventListener("input", function() {

		var patients = document.querySelectorAll(".paciente");
		if (this.value.length > 0) {
			for (var i = 0; i < patients.length; i++) {
				var patient = patients[i];
				var tdName = patient.querySelector(".info-nome");
	            var name = tdName.textContent;
	            var expression = new RegExp(this.value, "i");
	            console.log(name);

				if (expression.test(name)) {
                	patient.classList.remove("invisible");
	            } else {
	                patient.classList.add("invisible");
	            }
			}

		} else {

			for (var i = 0; i < patients.length; i++) {
				var patient = patients[i];
				patient.classList.remove("invisible");
			}
		}
	});
