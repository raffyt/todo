 const inputBox = document.getElementById("input-box");
 const listContainer = document.getElementById("list-container");

            // Creamos funcion para añadir las tareas

 function addTask(){
    if(inputBox.value === ''){
        alert("debes escribir una tarea!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

             // creamos la X para borrar las tareas con un span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; // borro el texto luego de agregar la tarea.
    saveData(); // guardo los datos luego de agregar una tarea
 }

 

            //Marcamos como lista o borramos la tarea de acuerdo donde hagamos Click

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if ( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

 }, false);
            // Creamos una funcion para guardar los datos en el navegador
 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

            //creamos una funcion para mostrar los datos guardados siempre que refrescamos la pagina

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
            //llamamos la funcion
 showTask();
