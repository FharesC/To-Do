
let boton = document.querySelector("#btn")
let ul = document.querySelector("ul")
let enter = document.querySelector("#tarea")

let a = "jajaj"

const agregar = (event)=>{
    
    let li = document.createElement("li")
    let div = document.createElement("div")
    let input = document.createElement("input")
    let tarea = document.querySelector("#tarea").value
    let btn1 = document.createElement("button")
    let btn2 = document.createElement("button")
    input.value= tarea
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

console.log(ul);


btn2.addEventListener ("click", () =>{
        ul.removeChild(li)
})

btn1.addEventListener ("click", () =>{

    input.classList="lineamedia"

})}


boton.addEventListener("click", () =>{
    if (String(enter.value.trim()) == "") {
        alert(a)
    }else{
        agregar()
    }
})

enter.addEventListener("keydown" ,(evento) =>{
    if (evento.key == "Enter") {
        if (String(enter.value.trim())=="") {
            alert(a)
        }else{
            agregar()
        }

    }
    
} )
