
function corregirAnd(operator1,operator2,result) {
	alert("se ejecuto la funcion");
  var rtaOperacion=0;
  var operando1=0;
  var operando2=0;
  var operandos1=document.getElementById(operator1).value;
  var operandos2=document.getElementById(operator2).value; 
  var rtaAlumnos =document.getElementById(result); 
   operando1=parseInt(operandos1,2);
   operando2=parseInt(operandos2,2);
   rtaAlumno=parseInt(rtaAlumnos.value,2);
   rtaOperacion=operando1 & operando2;
   if(rtaAlumno == rtaOperacion){
     alert('bien');
    rtaAlumnos.classList.add('is-valid');
  }else{
    alert(mal);
    rtaAlumnos.classList.add('is-invalid');
  }
}

function corregirAllAnd(){
  corregirAnd('operator1','operator2','result1');
  corregirAnd('operator3','operator4','result2');
  corregirAnd('operator5','operator6','result3');
  corregirAnd('operator7', 'operator8','result4');
}
function corregirOr(operator1,operator2,result,msjOk,msjError) {
	alert("se ejecuto la funcion");
  var rtaOperacion=0;
  var operando1=0;
  var operando2=0;
  var operandos1=document.getElementById(operator1).value;
  var operandos2=document.getElementById(operator2).value; 
  var rtaAlumnos =document.getElementById(result).value; 
   operando1=parseInt(operandos1,2);
   operando2=parseInt(operandos2,2);
   rtaAlumno=parseInt(rtaAlumnos,2);
   alert("op1 "+operando1+", op2 "+operando2+" = "+rtaAlumnos);
   rtaOperacion=operando1 | operando2;
   alert(rtaAlumno+" = "+rtaOperacion);
  mostrarMensaje(rtaAlumno,rtaOperacion,msjOk,msjError);
}

function corregirAllOr(){
  corregirOr('operator1','operator2','result1','msjOk1','msjError1');
  corregirOr('operator3','operator4','result2','msjOk2','msjError2');
  corregirOr('operator5','operator6','result3','msjOk3','msjError3');
  corregirOr('operator7', 'operator8','result4','msjOk4','msjError4');
}