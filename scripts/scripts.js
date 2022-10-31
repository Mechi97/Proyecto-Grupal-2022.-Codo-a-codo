//Wheater API
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true
window.addEventListener("load", function (event) {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true')
    .then((response) => response.json())
    .then((data) => {console.log(data); window.document.getElementById('temperatura').innerHTML = data.current_weather.temperature +' Cº'});
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function validate(e){
    if( document.myForm.nombre.value == "" ) {
        alert( "Por favor, ingrese su nombre" );
        document.myForm.nombre.focus() ;
        return false;
    }
    if( document.myForm.apellido.value == "" ) {
        alert( "Por favor, ingrese su apellido" );
        document.myForm.apellido.focus() ;
        return false;
    }
    if ( document.myForm.dni.value == "" || isNaN( document.myForm.dni.value )){  
        alert( "Por favor, ingrese su dni" );
        document.myForm.dni.focus() ;
        return false;
    }
    if ((document.myForm.dni.value.length < 7 || document.myForm.dni.value.length > 8)){
        alert( "Por favor, ingrese un dni válido" );
        document.myForm.dni.focus() ;
        return false;
    }
    if( document.myForm.email.value == "" || (!validateEmail(document.myForm.email.value)) ) {
        alert( "Por favor, ingrese su email" );
        document.myForm.email.focus() ;
        return false;
    }
    if( document.myForm.mascota.value == "" ) {
        alert( "Por favor, ingrese el nombre de su mascota" );
        return false;
    }
    alert( "Gracias por comunicarse con nosotros!" );
    return( true );
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}