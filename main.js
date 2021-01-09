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

    function Modal(options){
        this.element = document.querySelector(options.element);
        this.elementClose = this.element.querySelector('.modal__close');
        this.elementCancel = this.element.querySelector('.btn_cancel');
        this.elementSave = this.element.querySelector('.btn_save');

        this.registerEvens(options)

    }

    Modal.prototype.open = function(){
        this.element.style.display='block'
    }

    Modal.prototype.close = function(){
        this.element.style.display='none'
    }

    Modal.prototype.registerEvens = function(options){
        this.elementClose.onclick = () =>{
            this.close()
        }
        this.elementCancel.onclick = () =>{
            this.close()
        }
        
        this.elementSave.onclick = () =>{
             options.cbSave()
        }    
    }

    openBtn.onclick = function(e){
        e.preventDefault()
        modalWindow.open()
    }


    const modalWindow = new Modal({
        element:'.jss_modal',
        cbSave : function(){
            document.querySelector('.message').textContent = `Gracias ${document.querySelector('.js_name').value} por ayudar a los animalitos :)`
        }
    })

}

main();


