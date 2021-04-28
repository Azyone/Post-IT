testPostIT = []
let resize = false;
let move = false;
let edit = false;
let compteur = 0;
let mouseX = 0;
let mouseY = 0;
let largeur = 40;
let longeur = 40;
document.body.addEventListener('click', () => {
    resize = false;
    move = false;
    edit = false;
})
function PosMouse(id){
    document.body.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if(move == true){
            let taille = testPostIT.length;
            for(i = 0; i < taille; i++) {
            testPostIT[i].movePostIT();
            }

        }
        else if(resize == true){
            let taille = testPostIT.length;
            for(i = 0; i < taille; i++) {
            testPostIT[i].redimPostIT();
            }
        }
        
        
        });
    /*let numPostIT = -1;
    for(i = 0; i < taille; i++) {
        testPostIT[i].movePostIT();
    }*/
}
function NewPostIT(couleur){
    compteur += 1;
    testPostIT.push(new CPostIT (largeur,longeur,couleur,1,1,"test2",compteur))
    let taille = testPostIT.length;
    for(i = 0; i < taille; i++) {
        testPostIT[i].affPostIT();
    }
}
function recupId()
{
    if(this.id)
        alert(this.id);

    return false;
}
PosMouse();