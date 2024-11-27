const posts = [
    { id: 1, title: "Primer Post", author: "Usuario1", content: "Contenido del primer post" },
    { id: 2, title: "Segundo Post", author: "Usuario2", content: "Contenido del segundo post" }
];
function loadPosts() {
    const postsTable = document.getElementById("postsTable");
    postsTable.innerHTML = ""; 

    posts.forEach(post => {
        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = post.title;
        row.appendChild(titleCell);

        const authorCell = document.createElement("td");
        authorCell.textContent = post.author;
        row.appendChild(authorCell);

        const actionsCell = document.createElement("td");
        const viewButton = document.createElement("a");
        viewButton.textContent = "Ver";
        viewButton.href = `post-details.html?id=${post.id}`; // Pasar ID como parámetro
        actionsCell.appendChild(viewButton);
        row.appendChild(actionsCell);

        postsTable.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", loadPosts);
