const formulario = document.getElementById("postForm");
const postTitle = document.getElementById("postTitle");
const postAuthor = document.getElementById("postAuthor");
const postContent = document.getElementById("postContent");
obtenerUsuarios();
formulario.addEventListener("submit", createPost)

function createPost(event) {
    event.preventDefault();

    let title = postTitle.value;
    let author = postAuthor.value;
    let content = postContent.value;

    if (title.length && author.length && content.length) {
        const newPost = {
            title : title,
            content : content,
            authorId : author

        }
        const peticion = new XMLHttpRequest();
        peticion.open("POST", "http://localhost:3000/articles");
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.send(JSON.stringify(newPost));
    }


}

function obtenerUsuarios(){
    const peticion=new XMLHttpRequest();
    peticion.open('GET','http://localhost:3000/users');
    peticion.send();
    peticion.addEventListener('load', function() {
        if (peticion.status===200) {
            let usuarios=JSON.parse(peticion.responseText);  // Convertirmos los datos JSON a un objeto
            usuarios.forEach(usuario => {
                const option=document.createElement("option")
                option.value=usuario.id;
                option.textContent=usuario.name;
                postAuthor.appendChild(option);
               
            });
        
        } else {
            muestraError();
        }
    })

    
}