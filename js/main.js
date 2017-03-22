function translate(){

	var title=document.getElementById("form-signin-heading");
	var email=document.getElementById("inputEmail");
	var password=document.getElementById("inputPassword");
	var remember=document.getElementsByTagName("span")[0];
	var button=document.getElementsByClassName("btn")[0];

	title.innerHTML = "Iniciar sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recuérdame";
	button.innerHTML = "Iniciar sesión";

}

translate();

function mostrar(){
	var titulo=document.getElementById("")
	var correo = document.getElementById("inputEmail").value;
	var contraseña = document.getElementById("inputPassword").value;

	titulo.innerHTML="Datos de formulario";
	correo.innerHTML="El correo electrónico es "

}

