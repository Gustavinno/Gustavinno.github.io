function ocultarDocumentales() {
    //1. Hacer desaparecer todas las películas
    document.querySelectorAll(".documentales").forEach((documentales) => {
        documentales.style.display = "None";
    });
}

document.querySelector("#boton-dinosaurios").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".dinosaurios").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});
document.querySelector("#boton-desiertos").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".desiertos").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});
document.querySelector("#boton-oceanos").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".oceanos").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});

document.querySelector("#boton-montañas").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".montañas").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});
document.querySelector("#boton-deslaves").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".deslaves").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});
document.querySelector("#boton-minas").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".minas").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});
document.querySelector("#boton-ballenas").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".ballenas").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});
document.querySelector("#boton-volcanes").addEventListener("click", () => {
    //1. Hacer desaparecer todas las películas
    ocultarDocumentales();
    //2. Mostrar la seleccionada
    document.querySelectorAll(".volcanes").forEach((documentales) => {
        documentales.style.display = "Block";
    });
});

document.querySelector("#boton-todos").addEventListener("click", () => {
        document.querySelectorAll(".documentales").forEach((documentales) => {
            documentales.style.display = "Block";
        });
    });

document.querySelector("#genero").addEventListener("change", () => {
    let generoDocumental = document.querySelector("#genero").value;
    ocultarDocumentales();
    document.querySelectorAll("."+generoDocumental).forEach((documentales) => {
        documentales.style.display = "Block";
    });
});