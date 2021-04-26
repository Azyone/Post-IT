class CPostIT{
    largeur;
    longeur;
    couleur;
    x;
    y;
    id;

    constructor(largeur, longeur, couleur, x, y, texte, id){
        this.largeur = 100;
        this.longeur = 100;
        this.couleur = couleur;
        this.x = 500;
        this.y = 500;
        this.texte = "";
        this.id = id;


    }
    //fonctions
    affPostIT(){
        let PostIT = document.getElementById(this.id);
        if(PostIT === null){
            PostIT = document.createElement('div');
            PostIT.id = this.id;
            document.body.appendChild(PostIT);
        }
        
        PostIT.setAttribute('class','PostIT');
        PostIT.style.width =(this.largeur)+"px";
        PostIT.style.height =(this.longeur)+"px";
        PostIT.style.left =(this.x)+"px";
        PostIT.style.top =(this.y)+"px";
        PostIT.style.position ="fixed";
        PostIT.style.backgroundColor =(this.couleur);
        PostIT.innerHTML =(this.texte);
        
    }

    movePostIT(x, y){
        this.x = x;
        this.y = y;
    }

    colorPostIT(couleur){
        this.couleur = couleur;
    }

    redimPostIT(largeur, longeur){
        this.largeur = largeur;
        this.longeur = longeur;
    }

    textePostIT(texte){
        this.texte = texte;
    }
}