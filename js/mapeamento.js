function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

document.querySelector("#sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#mim");

    console.log("go to up");
});

document.querySelector("#projetos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#hub");

    console.log("go to up");
});

document.querySelector("#contatos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#formulario");

    console.log("go to up");
});

/*Footer*/
document.querySelector("#Sobre").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#Mim");

    console.log("go to up");
});

document.querySelector("#Projetos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#Hub");

    console.log("go to up");
});

document.querySelector("#Contatos").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo("#Formulario");

    console.log("go to up");
});

document.querySelector(".BalaoScroll").addEventListener("click", function (event) {
    event.preventDefault();

    scrollTo(".container-primaria");

    console.log("go to up");
});
