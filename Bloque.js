export class Bloques{

    listBlocks = [
        {title : 'Mamíferos',
         text : 'Animales vertebrados. Se diferencian por tener pelos en en la superficie del cuerpo. En muchas de las especies de mamíferos las hembras tienen mamas, por donde sale la leche que se genera en sus glándulas, pero también hay otras especies que no tienen mamas.',
         selected : false
        },
        {title : 'Aves',
         text : 'Son también vertebrados y que se mantienen sobre las extremidades posteriores, estando las anteriores modificadas como las, que para volar aunque no todas pueden hacerlo. Su cuerpo está recubierto de plumas. Para reproducirse se dedican a poner huevos.',
         selected : false
        },
        {title : 'Peces',
         text : 'Animales vertebrados, pero acuáticos, estando recubiertos de escamas y cuentan con aletas, las cuáles les permiten vivir en el agua. Lo mismo podemos decir de las bránquias, con las que ellos captan el oxígeno disuelto en agua.',
         selected : false
        },
        {title : 'Reptiles',
         text : 'Otros animales vertebrados. Existen 7000 especies diferentes que se clasifican en cuatro grupos: lagartos y serpientes, cocodrilos, tortugas y tuátaras.',
         selected : false
        },
        {title : 'Anfibios',
         text : 'Otros vertebrados con respiración de carácter branquial en la fase larvaria y que llega a la pulmonar cuando son adultos Se diferencia del resto de vertebrados por la transformación que va sufriendo cuando se desarrollan.',
         selected : false
        }
    ];

    containerBloqs = document.getElementById('container_blocks')

    constructor(){

    }

    init(){
        this.listBlocks.forEach((bloq)=>{
            this.addBloq(this.generateHtmlBloq(bloq))
        })
    }

    generateHtmlBloq(bloq){
        const parentBloq = document.createElement('div')
        let classParent = 'parent_bloque close_acc'
        parentBloq.setAttribute('class',classParent)
        
        const titleBloq = document.createElement('h4')
        titleBloq.setAttribute('class','title_bloque')
        titleBloq.textContent = bloq.title
        const textBloq = document.createElement('p')
        textBloq.setAttribute('class','text_bloque')
        textBloq.textContent = bloq.text

        parentBloq.appendChild(titleBloq);
        parentBloq.appendChild(textBloq);
    
        return parentBloq
    }


    addBloq(bloqNode){
        this.containerBloqs.appendChild(bloqNode)
    }

  

}