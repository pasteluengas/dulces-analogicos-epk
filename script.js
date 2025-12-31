let currentTrack = 0;
let trackTitle = ["0", "Comas Yuar", "Momento Psicodélico", "SegFault en 0x0", "en tu nombre (santo)", "Ojitos Moraditos", "2N3904 -- Desayuno Balancead", "Kafka (escribiría sobre ti)", "manos en las latas","Zapateria Zapateria Zapateria", "Si este pais tuviera trenes yo ya me habria ido de aqui (cancion de dos acordes con chorus para que los alternos aplaundan y lloren en morado my bloody valentine vibbes)", "Art College Girl"];
let trackLyrics = ["0", 
"Intro del album, tocando un riff fallido",
"todas las sustancias en mi cuerpo\n me inhiben del momento psicodelico\n todas las montañas del terreno blando\n son un truco estetico\n \n \n sentir un cuerpo en mi cara\n es el momento psicodelico\n la brolamfetamina es el medio\n pero tu eres mi identico. psicodelico\n \n \n todas las sustancias en mi cuerpo\n me inhiben del momento psicodelico\n todas las montañas del terreno blando\n son un truco estetico\n sentir un cuerpo en mi cara\n es el momento psicodelico\n la brolamfetamina es el medio\n pero tu eres mi identico. psicodelico",
"la bala, que tengo en la mente\nme doleria menos si estuviera en mi cabeza\nen mi cabeza alergica a todo lo que implica\nsaber que significan los dobles asteriscos\nen tus cartas\n\nya-ya-ya lei todos tus libros\ncre-cre-creo que son muy lindos\naunque no tengan palabras\nsolo letras pegadas\n\nno entiendo lo que veo\nes mi problema\npero creo que te entiendo\nes mi problema\n\nvamos a algun lugar que no exista\ny segmentame de culpa\nexplicame que pasa (no)\nno pasa nada\n\nno existe tierra prometida\nprometi enterrate\njunto a mi cabeza maldita\nque encontre en mi cuello\n\nhours, give hours, give hours\nand i'll give your flowers\ngive hours, give hours\nand i'll give your flowers\ngive hours, give hours\nand i'll give your flowers\ngive hours, give hours\nand i'll give your flowers\n\n",
"Quien me iba a decir?\nQuien me iba a avisar?\nQuien se iba a despedir?\n(En tu nombre)\n\nEn qué momento iba a acabar?\nEl pozo chueco sin final\nCuantos huesos me romperá\n(En tu nombre)\n\nNo hay frenos en este avión\nNo olvidar el cinturón\nPara amortiguar el calor\n(De tu nombre)\n\nColgado en la pared\nJunto al poster de Weezer\nDedicándome a rezar\n(En tu nombre) Santo\n\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\n\nQuien me iba a decir?\nQuien me iba a avisar?\nQuien se iba a despedir?\n(En tu nombre)\n\nEn qué momento iba a acabar?\nEl pozo chueco sin final\nCuantos huesos me romperá\n(En tu nombre)\n\nNo hay destino en este avión\nNo olvidar el cinturón\nPara amortiguar el calor\n(De tu nombre)\n\nColgado en la pared\nJunto al poster de Weezer\nDedicándome a rezar\n(En tu nombre) Santo\n\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza\nHaz un hueco en mi cabeza\nY conviertelo en tu pieza",
"Wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa\n\n4:3 el video musical que grabaste\ncon filtro granulado y un tono feo y morado\nse ve tan moderno aunque intentes lo contrario\nme duelen los ojos y oidos al escucharlo\n\nWa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa\n\nAcordes abiertos, con chorus en estereo\nhablando de los tristes enamorados\ntal vez si haces un cover de Deftones\npodrias coger, con ella jaja\n\nWa wa wa wa wa wa wa wa wa wa wa wa wa wa wa wa",
"Dios no me dio\nun transistor\n2N390\n\nDios no me dio\nuna radio\ncon una buena antena\n\nDios no me dio\nel diccionario\nde la cabeza ajena\n\nDios no me dio\nun desayuno\nbalanceado\n\nDios no me dio\nuna arquitectura\nconcreta\n\nDios no me dio\nel tamaño del\ncateto opuesto\n\nDios no me dio\nimplementacion\ndirecta\n\nDios no me dio\nun desayuno\nbalanceado\n\nNo entiendo el amor\ny cuando lo entiendo me doy la vuelta\nNo entiendo el amor\ny cuando lo entiendo me voy corriendo\n\nNo entiendo el amor\ny cuando lo entiendo me doy la vuelta\nNo entiendo el amor\ny cuando lo entiendo me voy corriendo",
"Con una mano te acaricio\nY con la otra tengo un matillo\nPara romper esas cajas\nQue se rompen en caso de emergencia\n\nHe pensado en que he pensado\nQue no se que piensas de mi\nNo ha habido un solo dia\nEn que yo este seguro de\n\nMe tropiezo al hablar\nPero he de decir\nQue si Kafka estuviera vivo\nEscribiria sobre ti\n\nIntente diluir mi ego\nMi consciencia no me dejo\nNo puedo apagar la mente\nNi besar sin pensar\n\nMe tropiezo al actuar\nPero he de decir\nQue si Kafka esruviera vivo\nEscribiria sobre mi\n\nMe tropiezo al hablar\nPero he de decir\nQue si Kafka estuviera vivo\nEscribiria sobre ti\n\nSi Kafka estuviera vivo\nEscribiria sobre ti\nKafka esta muerto\nY yo escribo sobre ti",
"desinfecta un puñal con alcohol\npara matar palomas y pajaros silvestres\na veces me lo entierro por error\nentierralo donde ya hayan cicatrices\n\nsiempre que estas a mi lado\ntenemos latas, en las manos\nsiempre que estas a mi lado\ntenemos latas, en las manos\n\n(sonidos cerveceros)\n\nsiempre que estas a mi lado\ntenemos latas, en las manos\n(su cuerpo es radioactivo\ny aunque me hace sentir bien\nno me hace bien)\nsiempre que estas a mi lado\ntenemos latas, en las manos\n(uno, dos, tres, cuatro, cinco\nseis, siete, porciento)\nsiempre que estas a mi lado\ntenemos latas, en las manos\n(su cuerpo es radioactivo\ny aunque me hace sentir bien\nno me hace bien)\nsiempre que estas a mi lado\ntenemos latas, en las manos\n(uno, dos, tres, cuatro, cinco\nseis, siete, porciento)",
"Podrías dejar de calzarme\nPodrias de dejar de ser\nY ponerte a estar\n\nSoy alguien de caminar\nEl peor que vas a encontrar\nPero, hey! soy quien lustra tus zapatos\nY soy quien mejor los limpia\n\nDebí lustrar tus pies tambien\nPara que caminen siempre detrás de mí\n\nSabes pelear descalza\nPero aún no lo sabes\nNo suelo dormir ni fumar\n\nTe quiero aquí en tierra\nEn una malla negativa\nalgún día no estarás\nY tus botas se mantendran limpias\n\nDebí limpiar tus pies tambien\nPara que caminen siempre detrás de mí",
"[Instrumental shoegaezero lokito]",
"I don't know\nWhy im here?\nWho are you?\nblurry vision\nblurry hair\nblurry thoughts\nblurry brain\n\npretentious\naround us\nwe won't fall\nI won't cry\ndo you mean?\ndo you want?\nwhat I mean\nWhat I want\n\nI can't open\nThe door\nIf you don't\nGive me a key\n\nI can't see\nThrough the key\nHole even\nIf I tried\n\nI can't open\nThe door\nIf you don't\nGive me a key\n\nI won't see\nThrough the key\nHole even\nIf I die\n\nHow do you dare\nTo be there?\nArt college girl\nGot me in a swirl\n\nHow can I manage this?\nHow can I manage this?\n\nHow do you dare\nTo be still there?\nArt college girl\nYou're so away\n\nI can't remember your hair\nI think you change it everyday\n\nI live scared\nI love scared\nI talk scared\nI control\nEvery brain-cell\nTo find myself okay\n\nI have no\nremedies\nFor my\nMental fears\nIn a trip\nFor two years\nI cant go back easily\n\nYou're the kind\nOf girl\nWho makes me feel\nI'm still a kid\n\nYou're the kind\nOf woman\nWho makes me feel\nI'm not a man\n\nYou're the kind\nOf girl\nWho makes me feel\nI'm still a kid\n\nYou're the kind\nOf woman\nWho makes me feel\nI'm not a man\n\nHow do you dare\nTo be there?\nArt college girl\nGot me in a swirl\n\nHow can I manage this?\nHow can I manage this?\n\nHow do you dare\nTo be still there?\nArt college girl\nYou're so away\n\nI can't remember your hair\nI think you change it everyday\n\nWhat you've been through\nThe weight of my thoughts\nI don't mean to hurt\nI don't want you to feel it\n\nI want to thank you\nI want to hug you\nI admit that\nI strongly want youuu\n\nHow do you dare\nTo be there?\nArt college girl\nGot me in a swirl\n\nHow can I manage this?\nHow can I manage this?\n\nHow do you dare\nTo be still there?\nArt college girl\nYou're so away\n\nI can't remember your hair\nI think you change it everyday"
];
let HTMLTitle = document.getElementById("track-title");
let HTMLLyrics = document.getElementById("track-lyrics");
let HTMLAudio = document.getElementById("track-audio");

function showTrack(track) {
	for (let i = 1; i <= 11; i++) {
		document.getElementById("track-" + String(i)).style.backgroundColor = "#000000";
	}
	document.getElementById("track-" + String(track)).style.backgroundColor = "#123653";}

function initPlayer() {
	updatePlayer(1);
}

function updatePlayer(track) {
	currentTrack = track;
	HTMLTitle.innerHTML = String(currentTrack) + ". "  +  trackTitle[currentTrack];
	HTMLAudio.src = "tracks/" + String(currentTrack)  + ".mp3";
	HTMLLyrics.innerHTML = trackLyrics[currentTrack];
	HTMLLyrics.scrollTop = 0;
	showTrack(track);
}

initPlayer();

for (let i = 1; i <= 11; i++) {
	document.getElementById("track-" + String(i)).addEventListener("click", function() {
		updatePlayer(i);
		HTMLAudio.play();
	});
}

HTMLAudio.addEventListener("ended", function() {
	updatePlayer(currentTrack + 1);
	HTMLAudio.play();
});
