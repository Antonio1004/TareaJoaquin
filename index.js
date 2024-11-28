// URLs de la API
const artUrl = "http://localhost:3000/articles";
const userUrl = "http://localhost:3000/users";

// Función para obtener artículos
function fetchArticles() {
    return fetch(artUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los artículos");
            }
            return response.json(); // Devuelve un array de artículos
        })
        .catch(error => {
            console.error(error);
            return [];
        });
}

// Función para obtener usuarios
function fetchUsers() {
    return fetch(userUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al obtener los usuarios");
            }
            return response.json(); // Devuelve un array de usuarios
        })
        .catch(error => {
            console.error(error);
            return [];
        });
}

// Función para mostrar la lista combinada en la tabla
function displayUsers(libros, users) {
    const userList = document.getElementById("postsTable");
    userList.innerHTML = ""; // Limpia la tabla

    libros.forEach(libro => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdUser = document.createElement("td");

        tdName.textContent = libro.title;

        // Busca el autor correspondiente al artículo
        const author = users.find(user => user.id == libro.authorId);
        tdUser.textContent = author ? author.name : "Desconocido";

        tr.appendChild(tdName);
        tr.appendChild(tdUser);
        userList.appendChild(tr);
    });
}

// Llamada principal para cargar los datos
fetchArticles()
    .then(libros => {
        return fetchUsers().then(users => {
            displayUsers(libros, users); // Muestra los datos combinados
        });
    })
    .catch(error => {
        console.error("Error al cargar los datos:", error);
    });
