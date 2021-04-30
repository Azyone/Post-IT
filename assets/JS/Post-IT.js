/**
*@author Aymeric Fischer
*@version 1.0
*@class classe de post-it
*/

class CPostIT{
    largeur;
    longeur;
    couleur;
    x;
    y;
    id;
    isDrawing;
    monInterval;

    /**
     * Constructeur de post-it
     * @param {number} largeur largeur du post-it
     * @param {number} longeur largeur du post-it
     * @param {string} couleur couleur primaire du post-it
     * @param {string} couleur2 couleur secondaire du post-it
     * @param {number} x coordonnée x du post-it
     * @param {number} y coordonnée y du post-it
     * @param {string} texte texte contenu dans le post-it
     * @param {number} id id du post-it
     */
    constructor(largeur, longeur, couleur, couleur2, x, y, texte, id){
        this.largeur = 100;
        this.longeur = 100;
        this.couleur = couleur;
        this.couleur2 = couleur2;
        this.x = 500;
        this.y = 500;
        this.texte = "";
        this.id = id;
        this.isDrawing = false;
        this.monInterval = 0;


    }
    /**
     * Foncton permetant d'afficher un post-it sur le navigateur
     */
    affPostIT(){
        let PostIT = document.getElementById(this.id);
        if(PostIT === null){
            PostIT = document.createElement('div');
            PostIT.id = this.id;
            document.body.appendChild(PostIT);
        }
        PostIT.setAttribute('class','postIT2');
        PostIT.style.width =(this.largeur)+"px";
        PostIT.style.minWidth= "100px"
        PostIT.style.minHeight= "50px"
        PostIT.style.height =(this.longeur)+"px";
        PostIT.style.left =(this.x)+"px";
        PostIT.style.top =(this.y)+"px";
        PostIT.style.position ="fixed";
        PostIT.style.wordWrap ="break-word";
        PostIT.style.overflow ="hidden";
        PostIT.style.backgroundColor =(this.couleur);
        PostIT.style.color =(this.couleur2);
        PostIT.style.fontFamily ="p2";
        PostIT.innerHTML =this.texte;
        let menu = document.createElement('div');
        menu.style.height='20px';
        menu.style.position='absolute';
        menu.style.width='100px';
        menu.style.bottom='0px';
        menu.style.right='0px';
        menu.style.display='flex';
        menu.style.justifyContent='space-around';
        menu.style.alignItems='center';
        menu.classList.add('menu-postIT');
        PostIT.appendChild(menu);
        let boutDeplace = document.createElement('i');
        boutDeplace.classList.add('fas');
        boutDeplace.classList.add('fa-arrows-alt');
        boutDeplace.style.margin='5px';
        boutDeplace.addEventListener('click', (e) => {
            move = true;
            id = this.id;
            e.stopPropagation()
        })
        menu.appendChild(boutDeplace);
        let boutRedim = document.createElement('i');
        boutRedim.classList.add('fas');
        boutRedim.classList.add('fa-compress');
        boutRedim.addEventListener('click', (e) => {
            resize = true;
            id = this.id;
            this.initMouseX = mouseX;
            this.initmouseY = mouseY;
            this.initlargeur = this.largeur;
            this.initlongeur = this.longeur;
            e.stopPropagation()
        })
        menu.appendChild(boutRedim);
        let boutEdit = document.createElement('i');
        boutEdit.classList.add('far');
        boutEdit.classList.add('fa-edit');
        boutEdit.addEventListener('click', (e) => {
            edit = true;
            id = this.id;
            e.stopPropagation()
        })
        menu.appendChild(boutEdit);
    }

    /**
     * Foncton permetant de déplacer 1 post-it
    */
    movePostIT(){
            if(move == true){
                this.x = mouseX-50;
                this.y = mouseY-50;
                this.affPostIT();
                }
                }
    
    /**
     * Foncton permetant de redimensionner 1 post-it
    */
    redimPostIT(){
            if(resize == true){
                this.largeur = this.initlargeur + mouseX - this.initMouseX-10;
                this.longeur = this.initlongeur + mouseY - this.initmouseY-10;
                this.affPostIT();
            }
    }
        /**
     * Foncton permetant d'afficher un post-it sur le navigateur
     * @param {string} texte texte contenu dans le post-it
     */
textePostIT(texte){
        this.texte = texte
        //this.affPostIT();
    }
majPostIT(x, y, largeur, longeur, texte){
    this.x = x;
    this.y = y;
    this.longeur = longeur;
    this.largeur = largeur;
    this.texte = texte;

}
}