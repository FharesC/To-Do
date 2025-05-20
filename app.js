let boton = document.querySelector("#btn");
let ul = document.querySelector("ul");
let enter = document.querySelector("#tarea");
let a = "jajaj";
let tareas = [];
let filtro = document.querySelector("#filter");
let allLI = document.querySelectorAll("li");
let buscador = document.querySelector("#Buscador");
let tareasyFiltros = tareas

//Este es el botón que dice enviar, donde al igual que con el Enter, se va a colocar el contenido
boton.addEventListener("click", (event) => {
  if (String(enter.value.trim()) == "") {
  } else {
    agregar();
  }
});

// acá solo es el evento donde esta el array, que avisa del texto y si está completado o no (false, true)

let agregar = (event) => {
  let nuevaTarea = {
    texto: enter.value,
    isComplete: false,
    key: parseInt(Math.random()*10000)    
  };
  console.log(nuevaTarea.key);
  
  tareas.push(nuevaTarea);

  crearElementosyRenderizar(nuevaTarea);
};

//para avisar que el evento que se va a inspeccionar va a ser en event.target.value que es donde se da el value
filtro.addEventListener("change", (event) => {
  console.log(event.target.value);
  filtroTareas(event.target.value);
});

//constante donde están todos los elementos que se van a agregar
const crearElementosyRenderizar = (tarea) => {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let input = document.createElement("input");
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  input.value = tarea.texto;
  if (tarea.isComplete == true) {
    input.classList.add("lineamedia");
  }
  enter.value = "";
  input.setAttribute("readonly", true);
  div.classList.add("form-control");
  btn1.className = "bi bi-check-all text-light fs-3 fondo2";
  btn2.className = "bi bi-trash text-light fs-3 fondo2";
  input.classList.add("white");
  div.className = "PR";
  li.appendChild(div);
  div.appendChild(input);
  div.appendChild(btn1);
  div.appendChild(btn2);
  ul.appendChild(li);

  //este es el botón que va a servir para borrar
  btn2.addEventListener("click", (event) => {
    ul.removeChild(li);
    tareasyFiltros = tareasyFiltros.filter((item) =>item.key !=tarea.key);
    
    console.log(tareas);
  });

  //Este es para dar click en el check y que se coloque la línea media cuando ya está completo
  btn1.addEventListener("click", (event) => {
    input.classList = "lineamedia";
    tareasyFiltros = tareasyFiltros.map((item) => {
      if (item.key == tarea.key) {
        item.isComplete = true;
      }
      return item;
    });
    console.log(tareas);
  });
};


//Buscador
let palabra = "";
buscador.addEventListener("keyup", (event) => {
  palabra = event.target.value;
  if (palabra == "") {
    filtro.value = 0
  }
  tareasyFiltros = tareas.filter(item => item.texto.toLowerCase().includes(palabra))
  
  ul.innerHTML = "";
  tareasyFiltros.forEach((item) => {
    crearElementosyRenderizar(item);
  });
});



//Acá donde se filtra si ya está completado o si todavía no
const filtroTareas = (value) => {
  let filtro = [];
  if (value == "pendientes") {
    filtro = tareasyFiltros.filter((item) => item.isComplete == false);
  } else if (value == "completados") {
    filtro = tareasyFiltros.filter((item) => item.isComplete == true);
  } else {
    filtro = tareasyFiltros;
  }
  ul.innerHTML = "";

  filtro.forEach((item) => {
    crearElementosyRenderizar(item);
  });
};

//Este es para que cuando le de enter, se coloque el contenido, y si está vacío que no pase nada
enter.addEventListener("keydown", (evento) => {
  if (evento.key == "Enter") {
    if (String(enter.value.trim()) == "") {
    } else {
      agregar();
    }
  }
});
