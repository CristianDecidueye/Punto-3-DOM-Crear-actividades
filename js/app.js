function agregarTarea() {
    const tareaInput = document.getElementById("agregarInput");
    const tareaTexto = tareaInput.value.trim();

    if (tareaTexto !== "") {
      let listaTareas = document.getElementById("lista");

      // Crear elementos HTML
      let nuevaTarea = document.createElement("li");
      let textoTarea = document.createTextNode(tareaTexto);
      let botonEliminar = document.createElement("button");

      // Configurar el botón de eliminar
      botonEliminar.innerHTML = "Eliminar";
      botonEliminar.onclick = function() {
        eliminarTarea(nuevaTarea);
      };

      // Agregar elementos al DOM
      nuevaTarea.appendChild(textoTarea);
      nuevaTarea.appendChild(botonEliminar);
      listaTareas.appendChild(nuevaTarea);

      // Limpiar el campo de entrada
      tareaInput.value = "";
    }
  }

  function eliminarTarea(tarea) {
    let listaTareas = document.getElementById("lista");
    listaTareas.removeChild(tarea);
  }