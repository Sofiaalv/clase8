
function comprobar(){
    
    let fname = document.getElementById("fname");
    let lname = document.getElementById("mail");
    let country = document.getElementById("country");
    let subject = document.getElementById("subject");

    if (fname.value == "" && mail.value == "" && country.value == bsas && subject.value == "" ){
        
        let parrafo = document.createElement("p");
        parrafo.innerHTML = "Gracias por contactarnos! En breve te responderemos.";

        parrafo.style.backgroundColor = "#c79393";
        parrafo.style.color = "white";
        parrafo.style.textAlign = "center";
        parrafo.style.fontSize = "25px"

        console.log (parrafo);
        let saludo = document.getElementById("saludo");
        saludo.appendChild(parrafo);
    } 
    else{
        console.log = "Datos incompletos"
    }

    console.log(fname);
    console.log(mail);
    console.log(country);
    console.log(subject);

    
}




