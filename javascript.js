https://desarrolloweb.com/articulos/1767.php

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento){
	evento.preventDefault();

	var dniNumero = document.getElementById('dniNum').value;
	if( /^[0-9]{7}$/.test(dniNumero) == false ){
		alert('Numero de DNI no valido');
		return;
	}
	
	var dniLetra = document.getElementById('dniLetra').value;
	if( /^[a-zA-Z]{1}$/.test(dniLetra) == false ){
		alert('Letra de DNI no valido');
		return;
	} 
	
	var codigoPostal = document.getElementById('codpostal').value;
	if( /^[0-9]{5}$/.test(codigoPostal) == false){
		alert('Codigo postal no valido');
		return;
	}
	
	var telefono = document.getElementById('telefono').value;
	if( /^[0-9]{9}$/.test(telefono) == false){
		alert('Telefono no valido');
		return;
	}
	
	var movil = document.getElementById('movil').value;
	if( /^[0-9]{9}$/.test(movil) == false){
		alert('Movil no valido');
		return;
	}
	
	var correo = document.getElementById('correo').value;
	if( /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(correo) == false ){
		alert('E-Mail no valido');
		return;
	}
	
	var condiciones = document.getElementById('cboxCondiciones').checked;
	if(condiciones !== true){
		alert('No se han aceptado las condiciones');
		return;
	}
	
	this.submit();
}

