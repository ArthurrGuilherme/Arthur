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