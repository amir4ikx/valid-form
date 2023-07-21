let doc = document
let name = doc.querySelector(".name")
let surname = doc.querySelector(".surname")
let email = doc.querySelector(".email")
let textarea = doc.querySelector(".textarea")
let btn = doc.querySelector(".btn")

btn.onclick = (e) => {
    e.preventDefault()
    if (name.value === "") {
        confirm("Введите имя")
    }
    if (email.value === "") {
        confirm("Введите email")
    }


    if (name.value === "") {
        name.classList.add("red")
    }else{
        name.classList.remove("red")
    }
    if (email.value === ""){
        email.classList.add("red")
    }else{
        email.classList.remove("red")
    }

    if (name.value !== "" && email.value !== "") {
        name.value = ""
        email.value = ""
    }
}