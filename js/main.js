function getApi(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false );
    request.send();
    return request.responseText;

}


function converte(){
    var data = getApi("https://economia.awesomeapi.com.br/last/USD");
    var dolar = JSON.parse(data);
    var valorDolar = dolar.USDBRL.high;
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var date = new Date();
    var dia = String(date.getDate()).padStart(2, '0');
    var mes = String(date.getMonth() + 1).padStart(2, '0');
    var ano = date.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;
    var valorEmDolarNumerico = valorEmRealNumerico * valorDolar;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoCotacaoAtual = document.getElementById("cotacao");
    var ValorConvertido = "O Resultado em real é R$" + valorEmDolarNumerico.toFixed(2) + " No Dia "  + dataAtual;

    if (valorEmDolarNumerico > 0 ){
        elementoValorConvertido.innerHTML = ValorConvertido;
        elementoCotacaoAtual.innerHTML = "Cotação Atual R$: " + valorDolar;
    } else {
        elementoValorConvertido.innerHTML = "Insira o Valor Para Conversao";
    };

}
