const formulario= document.getElementById('fomulario');
const inputs = document.querySelectorAll('#formulario input');


const validarFormulario= ((e) => {
 switch(e.target.name) {
    case "nombre":
        
    break;
    
    case "apellido":
        
    break;
    case "dni":
        
    break;
    case "mail":
        
    break;
    case "mascota":
        
    break;
    case "seguro":
        
    break;
    case "vacunas":
        
    break;
    
 }
})


inputs.forEach((input)=> {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})
formulario.addEventListener('submit', (e)=> {
    
})