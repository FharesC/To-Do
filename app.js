
let boton = document.querySelector("#btn")
let ul = document.querySelector("ul")
let enter = document.querySelector("#tarea")
let a = "jajaj"
let tareas = []

let agregar = (event)=>{
    let nuevaTarea = {
        texto: enter.value,
        isComplete: false
    }
    let li = document.createElement("li")
    let div = document.createElement("div")
    let input = document.createElement("input")
    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")
    input.value= nuevaTarea.texto
    enter.value=""
    input.setAttribute("readonly", true)
    div.classList.add("form-control")
    btn1.className ="bi bi-check-all text-light fs-3 fondo2"
    btn2.className= "bi bi-trash text-light fs-3 fondo2"
    input.className="white"
    div.className="PR"
    li.appendChild(div)
    div.appendChild(input)
    div.appendChild(btn1) 
    div.appendChild(btn2)
    ul.appendChild(li)
    tareas.push(nuevaTarea)
    console.log(nuevaTarea);
    console.log(tareas);
    btn2.addEventListener ("click", (event) =>{
        ul.removeChild(li)
        tareas=tareas.filter(item => item.texto != event.target.previousElementSibling.previousElementSibling.value)
        console.log(tareas);
        
    })

btn1.addEventListener ("click", (event) =>{

    input.classList="lineamedia"
    tareas=tareas.map(item =>{
        if(item.texto == event.target.previousElementSibling.value) {
            item.isComplete = true
        }
        return item
    })
    console.log(tareas);

})}


boton.addEventListener("click", (event) =>{
    if (String(enter.value.trim()) == "") {
        
    }else{
        agregar()
    }
})

enter.addEventListener("keydown" ,(evento) =>{
    if (evento.key == "Enter") {
        if (String(enter.value.trim())=="") {
            
        }else{
            agregar()
        }
    }
} )
