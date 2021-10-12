/*Guardar en Local Storage los datos de contacto enviados de cada usuario*/
// const allForm = document.getElementById("formOne").elements;
// console.log(allForm) 
// const formName = allForm.elements['fname'];
// console.log(formName)

let processFormData = () =>
{
    let formName = document.getElementById('fname').value;
    let formEmail = document.getElementById('femail').value;
    let formMessage = document.getElementById('fmessage').value;
    localStorage.setItem('Nombre', formName);
    localStorage.setItem('Correo', formEmail);
    localStorage.setItem('Mensaje', formMessage);
}

/*Creo la lista donde se mostrartan los usuarios vía DOM*/
let dataTitle = document.createElement("h2");            
    dataTitle.innerText = "Listado de usuarios";              
    document.body.appendChild(dataTitle);   

let dataUl = document.createElement("ul");
    document.body.appendChild(dataUl)

let dataLi = document.createElement("li");
    dataUl.appendChild(dataLi);

/*Mostrar los datos de los contactos guardados en el DOM*/
/*getItem() fetches the value stored in localStorage which is a string value. To solve this you have to use an array, stringify it and then store it.*/ 


/*Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave*/



/*2. Avanzado - Local Storage
Crea botón para borrar todos los contactos guardados en Local Storage */
let deleteClear = () => { 
    localStorage.clear()
}  
let deleteAll = document.createElement("button"); 
    deleteAll.innerText = "Borrar a todos";              
    document.body.appendChild(deleteAll);   
    deleteAll.addEventListener("click", deleteClear);


/*Crea botón para borrar un contacto en concreto de Local Storage.*/ 
let deleteItem = () => { 
    localStorage.removeItem("")
}  

let deleteOne = document.createElement("button");            
    deleteOne.innerText = "Borrar usuario";              
    document.body.appendChild(deleteOne);   
    deleteAll.addEventListener("click", deleteOne);



    // localStorage.setItem('Users', JSON.stringify(formName)
    // let formHistory = JSON.parse(localStorage.getItem('Nombre')) || [];
    // formHistory.push(dropd);
    // localStorage.setItem("Nombre", JSON.stringify(formHistory));