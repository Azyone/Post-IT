class PostIT{
    largeur;
    longeur;
    couleur;
    x;
    y;

    constructor(largeur, longeur, couleur, x, y){
        this.largeur = largeur;
        this.longeur = longeur;
        this.couleur = couleur;
        this.x = x;
        this.y = y;


    }
    //fonctions
    affPostIT(){
        let PostIT = document.createElement('div');
        PostIT.setAttribute('class','PostIT');
        PostIT.style.width =(this.largeur);
        PostIT.style.height =(this.longeur);
        PostIT.style.backgroundColor =(this.couleur);
        conteneur.appendChild(PostIT)
    }
}