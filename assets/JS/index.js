testPostIT = []
let compteur = 0;
function NewPostIT(couleur){
    compteur += 1;
    testPostIT.push(new CPostIT (40,40,couleur,1,1,"test2","PostIT"+compteur))
    let taille = testPostIT.length;
    for(i = 0; i < taille; i++) {
        testPostIT[i].affPostIT();
    }
}