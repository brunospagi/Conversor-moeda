function converte(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);


    var valorEmDolarNumerico = valorEmRealNumerico * 5 ;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var ValorConvertido = "O Resultado em real é R$" + valorEmDolarNumerico;

    if (valorEmDolarNumerico > 0 ){
        elementoValorConvertido.innerHTML = ValorConvertido;
    } else {
        elementoValorConvertido.innerHTML = "Insira o Valor Para Conversao";
    };
    
};