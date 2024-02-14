//Fonction pour afficher la description 

document.addEventListener("DOMContentLoaded", function(){

var texteCliquable = document.getElementsByClassName("texte-cliquable");

function testDescription(){
	if(this.classList.contains('texte-cliquable-active')){
		this.classList.remove('texte-cliquable-active');
	}
	else{
		this.classList.add('texte-cliquable-active');
	}
}

for(var i=0; i<texteCliquable.length; i++) {
	texteCliquable[i].addEventListener('click', testDescription);
}

});