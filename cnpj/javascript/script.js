var posicao = new Array(12);
var posicao2 = new Array(13);
var novoDigito = 0;
var novoDigito2 = 0;

$(document).ready(function(){
	actions();
	$('.validou').hide();
	$('.naoValidou').hide();
});

function actions(){
	$('#conferir').click(function(){
		digitarCodigo();
		buscarPosicao();
		buscarPosicao2();
		printMensagem();
	});
}

function digitarCodigo(){
	var cod = $('.numerosDigitados').val();
}

function buscarPosicao(){
	var conta = 0;
	posicao = $('.numerosDigitados').val();
	conta = conta + (posicao[0]*5); 
	conta = conta + (posicao[1]*4);
	conta = conta + (posicao[2]*3);
	conta = conta + (posicao[3]*2);
	conta = conta + (posicao[4]*9);
	conta = conta + (posicao[5]*8);
	conta = conta + (posicao[6]*7);
	conta = conta + (posicao[7]*6);
	conta = conta + (posicao[8]*5);
	conta = conta + (posicao[9]*4);
	conta = conta + (posicao[10]*3);
	conta = conta + (posicao[11]*2);
	conta = conta%11;

	if(conta<2){
		novoDigito = 0;
	}else{
		novoDigito = 11 - conta;
	}

	console.log(posicao[12]);
}

function buscarPosicao2(){
	var conta2 = 0;
	posicao2 = $('.numerosDigitados').val();
	conta2 = conta2 + (posicao2[0]*6); 
	conta2 = conta2 + (posicao2[1]*5);
	conta2 = conta2 + (posicao2[2]*4);
	conta2 = conta2 + (posicao2[3]*3);
	conta2 = conta2 + (posicao2[4]*2);
	conta2 = conta2 + (posicao2[5]*9);
	conta2 = conta2 + (posicao2[6]*8);
	conta2 = conta2 + (posicao2[7]*7);
	conta2 = conta2 + (posicao2[8]*6);
	conta2 = conta2 + (posicao2[9]*5);
	conta2 = conta2 + (posicao2[10]*4);
	conta2 = conta2 + (posicao2[11]*3);
	conta2 = conta2 + (posicao2[12]*2);
	conta2 = conta2%11;

	if(conta2<2){
		novoDigito2 = 0
	}else{
		novoDigito2 = 11 - conta2;
	}

	console.log(posicao2[13]);
}

function printMensagem(){
	if(posicao[12]==novoDigito){
		if(posicao2[13]==novoDigito2){
			$('.validou').show();
			$('.naoValidou').hide();
		}
	}
	else{
		$('.naoValidou').show();
		$('.validou').hide();
	}
}