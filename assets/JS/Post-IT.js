class CPostIT{
    largeur;
    longeur;
    couleur;
    x;
    y;
    id;
    isDrawing;
    monInterval;

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
    //fonctions
    affPostIT(){
        let PostIT = document.getElementById(this.id);
        if(PostIT === null){
            PostIT = document.createElement('div');
            PostIT.id = this.id;
            document.body.appendChild(PostIT);
            //this.movePostIT();
            //this.redimPostIT();
        }
        
        PostIT.setAttribute('class','postIT2');
        PostIT.style.width =(this.largeur)+"px";
        PostIT.style.minWidth= "100px"
        PostIT.style.minHeight= "50px"
        PostIT.style.height =(this.longeur)+"px";
        PostIT.style.left =(this.x)+"px";
        PostIT.style.top =(this.y)+"px";
        PostIT.style.position ="fixed";
        PostIT.style.backgroundColor =(this.couleur);
        PostIT.style.color =(this.couleur2);
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
            e.stopPropagation()
            if(move == true){
                this.movePostIT();
            }
        })
        menu.appendChild(boutDeplace);
        let boutRedim = document.createElement('i');
        boutRedim.classList.add('fas');
        boutRedim.classList.add('fa-compress');
        boutRedim.addEventListener('click', (e) => {
            resize = true;
            this.initMouseX = mouseX;
            this.initmouseY = mouseY;
            this.initlargeur = this.largeur;
            this.initlongeur = this.longeur;
            e.stopPropagation()
            if(resize == true){
                this.redimPostIT();
            }
        })
        menu.appendChild(boutRedim);
        let boutEdit = document.createElement('i');
        boutEdit.classList.add('far');
        boutEdit.classList.add('fa-edit');
        boutEdit.addEventListener('click', (e) => {
            edit = true;
            e.stopPropagation()
            if(edit == true){
                this.textePostIT();
            }
        })
        menu.appendChild(boutEdit);
    }

    movePostIT(){
        /*document.getElementById(this.id).addEventListener('mousedown', e => {
            this.isDrawing = true;
            this.monInterval = setInterval(()=>{
                if(this.isDrawing == true){
                this.x = mouseX-50;
                this.y = mouseY-50;
                this.affPostIT();
            }},10);
            });
            document.getElementById(this.id).addEventListener('mouseup', e => {
            this.isDrawing = false;
            document.removeEventListener("mousedown", e)
            clearInterval(this.monInterval);
            });*/
            if(move == true){
                this.x = mouseX-50;
                this.y = mouseY-50;
                this.affPostIT();
                }
                }
    redimPostIT(){
        /*document.getElementById(this.id).addEventListener('mousedown', e => {
            this.isDrawing = true;
            let initMouseX = mouseX;
            let initmouseY = mouseY;
            let initlargeur = 0;
            let initlongeur = 0;
            initlargeur = this.largeur;
            initlongeur = this.longeur;
            this.monInterval = setInterval(()=>{
                if(this.isDrawing == true){
                this.largeur = initlargeur + mouseX - initMouseX;
                this.longeur = initlongeur + mouseY - initmouseY;
                this.affPostIT();
            }},10);
            });
            document.body.addEventListener('mouseup', e => {
            this.isDrawing = false;
            clearInterval(this.monInterval);
            });*/
            
            if(resize == true){
                this.largeur = this.initlargeur + mouseX - this.initMouseX-10;
                this.longeur = this.initlongeur + mouseY - this.initmouseY-10;
                this.affPostIT();
            }
    }


textePostIT(texte){
        this.texte = texte
        this.affPostIT();
    }
}