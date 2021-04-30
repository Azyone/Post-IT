testPostIT = []
let resize = false;
let move = false;
let edit = false;
let id = -1;
let mouseX = 0;
let mouseY = 0;
let largeur = 40;
let longeur = 40;
let texte = " ";

let tabCookie =JSON.parse(readCookie("savePostIT"))

for(let i in tabCookie){
    console.log(tabCookie[i])

    id = testPostIT.length;
    testPostIT.push(new CPostIT (largeur,longeur,tabCookie[i].couleur,tabCookie[i].couleur2,1,1,"test2",id))
    testPostIT[id].majPostIT(tabCookie[i].x, tabCookie[i].y, tabCookie[i].largeur, tabCookie[i].longeur, tabCookie[i].texte );
    testPostIT[id].affPostIT();
}
document.body.addEventListener('click', () => {
    resize = false;
    move = false;
    edit = false;
})
    /**
     * Foncton permetant de savoir l'emplacement du curseur de la sourie
    */
function PosMouse(){
    document.body.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if(move == true){
            testPostIT[id].movePostIT();
        }
        else if(resize == true){
            testPostIT[id].redimPostIT();
        }
        else if (edit == true){
            testPostIT[id].redimPostIT();
        }});
}
    /**
     * Foncton permetant de savoir l'emplacement du curseur de la sourie
     * @param {string} couleur couleur primaire du post-it
     * @param {string} couleur2 couleur secondaire du post-it
    */
function NewPostIT(couleur, couleur2){
    id = testPostIT.length;
    testPostIT.push(new CPostIT (largeur,longeur,couleur,couleur2,1,1,"test2",id))
    testPostIT[id].affPostIT();
}

document.body.addEventListener('keydown', touche)

    /**
     * Foncton permetant de savoir l'emplacement du curseur de la sourie
     * @param {string} e évènement déclencher lors de l'appuie d'un touche
    */
function touche(e) {
    if (edit == true){
    console.log (e)
    
        if(e.key == " "){
            testPostIT[id].textePostIT(testPostIT[id].texte + "&nbsp;")
            testPostIT[id].affPostIT();
        }
        else if(e.key == "Shift"){

        }
        else if(e.key == "Enter"){
            testPostIT[id].textePostIT(testPostIT[id].texte + "<br>")
            testPostIT[id].affPostIT();
        }
        else if(e.key == "Backspace"){
            testPostIT[id].textePostIT(testPostIT[id].texte.substr(0, testPostIT[id].texte.length - 1))
            testPostIT[id].affPostIT();
        }
        else{
        testPostIT[id].textePostIT(testPostIT[id].texte + e.key)
        testPostIT[id].affPostIT();
        }
    }

}
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/; SameSite=None; Secure";
    
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
PosMouse();
monTimer = setInterval(createCookie("Save",testPostIT,30),1000);
setInterval(() => {
    createCookie('savePostIT',JSON.stringify(testPostIT),28)
},1000);

