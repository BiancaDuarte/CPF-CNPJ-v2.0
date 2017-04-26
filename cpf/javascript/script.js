var posicao = []
var posicao2 = []
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
	conta = conta + (posicao[0]*10); 
	conta = conta + (posicao[1]*9);
	conta = conta + (posicao[2]*8);
	conta = conta + (posicao[3]*7);
	conta = conta + (posicao[4]*6);
	conta = conta + (posicao[5]*5);
	conta = conta + (posicao[6]*4);
	conta = conta + (posicao[7]*3);
	conta = conta + (posicao[8]*2);
	conta = conta%11;

	if(conta<2){
		novoDigito = 0;
	}else{
		novoDigito = 11 - conta;
	}

	console.log(novoDigito);
}

function buscarPosicao2(){
	var conta2 = 0;
	posicao2 = $('.numerosDigitados').val();
	conta2 = conta2 + (posicao2[0]*11); 
	conta2 = conta2 + (posicao2[1]*10);
	conta2 = conta2 + (posicao2[2]*9);
	conta2 = conta2 + (posicao2[3]*8);
	conta2 = conta2 + (posicao2[4]*7);
	conta2 = conta2 + (posicao2[5]*6);
	conta2 = conta2 + (posicao2[6]*5);
	conta2 = conta2 + (posicao2[7]*4);
	conta2 = conta2 + (posicao2[8]*3);
	conta2 = conta2 + (posicao2[9]*2);
	conta2 = conta2%11;

	if(conta2<2){
		novoDigito2 = 0
	}else{
		novoDigito2 = 11 - conta2;
	}

	console.log(novoDigito2);
}

function printMensagem(){
	if(posicao[9]==novoDigito){
		if(posicao2[10]==novoDigito2){
			$('.validou').show();
			$('.naoValidou').hide();
		}
		else{
			$('.naoValidou').show();
			$('.validou').hide();
		}
	}
	else{
		$('.naoValidou').show();
		$('.validou').hide();
	}
}