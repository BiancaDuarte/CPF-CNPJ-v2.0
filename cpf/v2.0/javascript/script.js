var posicao = []
var posicao2 = []
var novoDigito = 0;
var novoDigito2 = 0;

$(document).ready(function(){
	actions();
});

function actions(){
	$('#conferir').click(function(){
		buscarPosicao2();
	});
}

function buscarPosicao(){
	var conta = 0;
	var multiplicador = 10;
	posicao = $('.numerosDigitados').val();
	for(var i = 0; i<posicao.length-2; i++){
		conta = conta + (posicao[i]*multiplicador);
		multiplicador--;
	}
	conta = conta%11;

	if(conta<2){
		novoDigito = 0;
	}else{
		novoDigito = 11 - conta;
	}

	buscarPosicao2();
}

function buscarPosicao2(){
	var conta2 = 0;
	var multiplicador = 11;
	posicao2 = $('.numerosDigitados').val();
	
	for(var i = 0; i<posicao2.length-1; i++){
		conta2 = conta2 + (posicao2[i]*multiplicador);
		multiplicador--;
	}
	conta2 = conta2%11;

	if(conta2<2){
		novoDigito2 = 0
	}else{
		novoDigito2 = 11 - conta2;
	}

	printMensagem();
}

function printMensagem(){
	var flag = true;
	var msg = 'CPF é ';
	
	if(posicao[9]!=novoDigito){
		flag=false;
	}

	if(posicao2[10]!=novoDigito2){
		flag=false;
	}
	console.log(flag);
	if(flag){
		$('#msg').html(msg+'válido');
	}else{
		$('#msg').html(msg+'inválido');
	}
}