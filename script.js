
function calculateAge(){
	const today = new Date();
	const birthDateInput = document.getElementById("birthdate").value;
	const birthDateParts = birthDateInput.split("-");
	const birthDay = birthDateParts[0];
	const birthMonth = birthDateParts[1] - 1;
	const birthYear = birthDateParts[2];
	const birthDate = new Date(birthYear,birthMonth,birthDay);
	
	console.log(birthDateInput);
	console.log(birthDateParts);
	console.log(birthDay);
	console.log(birthMonth);
	console.log(birthYear);
	
	const isValidDate = (date) => {
		return(
			Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
		);
		
	};
	
	if(!isValidDate(birthDate)){
		alert("Formato de fecha no valido: Por favor, ingrese un formato valido DD-MM-AAAA");
		return;
	}
	
const ageInMilliSeconds = today - birthDate;
const ageInSeconds = Math.floor(ageInMilliSeconds/1000);
const ageInMinutes = Math.floor(ageInSeconds/60);
const ageInHours = Math.floor(ageInMinutes/60);
const ageInDays = Math.floor(ageInHours/24);
const ageInWeeks = Math.floor(ageInDays/7);
const ageInMonths = Math.floor(ageInDays/30.436875);
const ageInYears = Math.floor(ageInDays/365.25);

const resultadoContenedor = document.getElementById("resultadoContenedor");
const result = document.getElementById("resultado");

result.innerHTML = `
    <div id="resultado-item">
		<h3>Edad: </h3>
		<p>${ageInYears} Años ${ageInMonths % 12} Meses ${ageInDays % 30} Dias </p>
	</div>
    <div id="resultado-item">
		<h3>Meses que han pasado: </h3>
		<p>${ageInMonths} Meses</p>
	</div>	
	<div id="resultado-item">
		<h3>Semanas que han pasado: </h3>
		<p>${ageInWeeks} Semanas</p>
	</div>
	<div id="resultado-item">
		<h3>Dias que han pasado: </h3>
		<p>${ageInDays} Dias</p>
	</div>
	<div id="resultado-item">
		<h3>Horas que han pasado: </h3>
		<p>${ageInHours} Horas</p>
	</div>
	<div id="resultado-item">
		<h3>Minutos que han pasado: </h3>
		<p>${ageInMinutes} Minutos</p>
	</div>
	<div id="resultado-item">
		<h3>Segundos que han pasado: </h3>
		<p>${ageInSeconds} Segundos</p>
	</div>
	

`;

resultadoContenedor.style.display = "block"; 
	
}


const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
	event.preventDefault();
	calculateAge();
});