import {Bloques} from './Bloque.js';

function main(){
    //*Reto 1
    function dropdownButton(options){
        const {
            elem
        } = options;
        const element = document.querySelector(elem);
        this.addEvent(element)
        this.hideEvent(element,elem)
    }

    dropdownButton.prototype.addEvent = function (element){
        element.onclick = function(e) {
            e.preventDefault()
            element.nextSibling.nextSibling.classList.toggle("show")
        }
    }

    dropdownButton.prototype.hideEvent = function (element,elem){
        window.onclick = function(e){
            if(!e.target.matches(elem)){
                if(element.nextSibling.nextSibling.classList.contains('show')){
                    element.nextSibling.nextSibling.classList.remove('show')
                }
            }
        }
    }


    //Se crean los objetos con la plantilla definida en donde el 
    //dato que se pasa es el 'elem'
    const buttonDDown = new dropdownButton({
        elem: '.js_btn-dropdown'
    })


    //*Reto 2
    const bloques = new Bloques();
    bloques.init();


    const listBloqs = document.getElementsByClassName('parent_bloque');
    const listTitles = document.querySelectorAll('.title_bloque');

    listTitles.forEach(title =>{
        title.addEventListener('click',showBloq,false)
    })

    function showBloq(){
        
        var itemClass = this.parentNode.className;
        
        for (let i = 0; i < listBloqs.length; i++) {
            listBloqs[i].className = 'parent_bloque close_acc';
        }
        if (itemClass == 'parent_bloque close_acc') {
            this.parentNode.className = 'parent_bloque open_acc';
        }
    }

    //*Reto 3

    const openBtn = document.querySelector('.btn_openModal')
    const modal = document.querySelector('.js_modal')
    const xSpan = document.querySelector('.btn_closeModal')
    const closeBtn =document.querySelector('.btn_close')
    const saveBtn =document.querySelector('.btn_save')
    const labelName = document.querySelector('.js_name')
    const saveMesage = document.querySelector('.message')


    openBtn.onclick = function(e){
        e.preventDefault()
        modal.style.display='block'
    }

    xSpan.onclick = function(e){
        e.preventDefault()
        modal.style.display='none'
    }

    saveBtn.onclick = function(e){
        e.preventDefault()
        saveMesage.textContent = `Gracias ${labelName.value} por ayudar a los animalitos :)`        
    }

    closeBtn.onclick = function(e){
        e.preventDefault()
        modal.style.display='none'
    }


}

main();


