var form = document.getElementById('FormularioPortf');
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("FormularioPortf")),
    }).then(
        response => response.json()
    ).then(
        function abrirAlerta(){
        swal({
                title: "Tudo certo !",
                text: "Sua mensagem foi enviada com sucesso!",
                icon: "success",
        });
    });
  });
