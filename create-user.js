const form =document.getElementById("userForm");
const nombre=document.getElementById("username");
const correo=document.getElementById("email");
const password=document.getElementById("password");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let name = nombre.value;
    let email = correo.value;
        const newUser = {
           name: name,
           email: email
        }
        
        const peticion = new XMLHttpRequest();
        peticion.open("POST", "http://localhost:3000/users");
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.send(JSON.stringify(newUser));
    
})


  





