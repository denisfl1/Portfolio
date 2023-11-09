const respemenu = document.querySelector('.respmenuopen')
const menucheck = document.getElementById('respmenu-hamburger')

function openrespmenu(){
   
if(menucheck.checked){
    respemenu.style.height = '200px'          
        
}else{
    respemenu.style.height = '0px'
}
  
}


const elements = document.querySelector("#typing-animation")
  
const words = "Olá, Seja muito Bem vindo(a) ao meu portfólio, meu nome é Denis Ferreira, e essa página é um Overview da minha tragetória como Desenvolvedor Full Stack."

function showtext(elements,text) {
    const contact = document.getElementsByClassName("contact")[0]
    
    const char = words.split("").reverse();

    const typer = setInterval(()=>{               

        if(!char.length){
        contact.style.opacity = 1
        return clearInterval(typer) 
        
        }
                 
        const next = char.pop()

        elements.innerHTML += next                 

    },62)


 } 


 setTimeout(()=>{
 showtext(elements,words)
},1000)

const linkdinicon = document.querySelectorAll('.contactlinkdin')
const githubcontact = document.querySelectorAll('.contactgithub')
linkdinicon.forEach(element=>{
    element.addEventListener('click',()=>{

    window.location.href = 'http://www.linkedin.com/in/denis-ferreira-19b9b8231'

})

})


githubcontact.forEach(element=>{

    element.addEventListener('click',()=>{

    window.location.href = 'https://github.com/denisfl1?tab=repositories'   
})

})





document.addEventListener('DOMContentLoaded',()=>{

    const downButton = document.getElementById('downimg')
    const upButton = document.getElementById('upimg')
    const homepage = document.getElementById('homepage')
    const biocontainer = document.getElementById('biocontainer')
    const gotoproject = document.querySelectorAll('.gotoprojects')
    const project1 = document.getElementById('project1')
    const gotoabout = document.querySelectorAll('.gotoabout')
    const gotocontact = document.querySelectorAll('.gotocontact')
    const contact_me = document.getElementById('contact-me')
   

    downButton.addEventListener('click',(e)=>{
        e.preventDefault()

        biocontainer.scrollIntoView({behavior:'smooth'});
        
      
    })

    upButton.addEventListener('click',(e)=>{
        e.preventDefault()

       homepage.scrollIntoView({behavior:'smooth'});
        
      
    })

    gotoproject.forEach(element =>{

    element.addEventListener('click',(e)=>{
        e.preventDefault()
    menucheck.checked = false
    respemenu.style.height = '0'    
    project1.scrollIntoView({behavior:'smooth'})
   

    })

    })

    gotoabout.forEach(element =>{

    element.addEventListener('click',(e)=>{
        e.preventDefault()
    menucheck.checked = false
    respemenu.style.height = '0'    
    biocontainer.scrollIntoView({behavior:'smooth'})

    })

    })

    gotocontact.forEach(element =>{

    element.addEventListener('click',(e)=>{
        e.preventDefault()
        menucheck.checked = false
        respemenu.style.height = '0' 
        contact_me.scrollIntoView({behavior:'smooth'})
    })
    

    })


    const pages = document.querySelectorAll('.page');

    pages.forEach((page, index) => {

    page.addEventListener('wheel', (event) => {
        event.preventDefault()
        const delta = event.deltaY
        
    
        if (delta > 0 && index < pages.length - 1) {
        pages[index +1].scrollIntoView({ behavior: 'smooth' });
       
        } else if (delta < 0 && index > 0) {
        pages[index -1].scrollIntoView({ behavior: 'smooth' });
      
        }
    })      
   
    })


})

const carousels = document.querySelectorAll('.carousel');
const EventListCarousel = document.querySelectorAll('.carousel.EventList')
const E_CommerceBooks = document.querySelectorAll('.carousel.E-CommerceBooks')
const prevBtns = document.querySelectorAll('.prevBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const prevBtnsBlack = document.querySelectorAll('.prevBtn.Black');
const nextBtnsBlack = document.querySelectorAll('.nextBtn.Black');


carousels.forEach((carousel, index) => {
let currentIndex = 0

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`
}

prevBtns[index].addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0)
    updateCarousel();
});

nextBtns[index].addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, carousel.children.length - 1)
    updateCarousel()
})



})

EventListCarousel.forEach((carousel)=>{

    let string = "";
    for(i=1;i<21;i++){
        
        string += `<div class="slide"><img src="./projectsimgs/EventList/Captura de Tela (${i}).png" alt= Slide ${i}></div>`
    }
    
    carousel.innerHTML = string

})

E_CommerceBooks.forEach((carousel)=>{
    
    let string = "";
    for(i=1;i<24;i++){
        string +=  `<div class="slide"><img src="./projectsimgs/EcommerceBooks/Captura de Tela (${i}).png" alt= Slide ${i}></div>`
    }
    carousel.innerHTML = string
})




let expand = false
const SlideDiv = document.querySelectorAll('.slide')
const SlideResp = document.querySelectorAll('.queries')
const OpenSlideResp = document.querySelectorAll('.openResponsive')
const CloseSlide = document.querySelectorAll('.shrink')
const CarouselsRes = document.querySelectorAll('.carousel-cont')
const CarouselsResMobile = document.querySelectorAll('.carousel1-cont')
const ExpandSlideIcon = document.querySelectorAll('.expand')


CarouselsRes.forEach((element,index)=>{

    element.addEventListener('mouseover',()=>{
           
        ExpandSlideIcon[index].style.opacity = '1'
      
    })
    
    element.addEventListener('mouseout',()=>{
    
        ExpandSlideIcon[index].style.opacity = '0'
    
    
    })
    

})


SlideResp.forEach((element,index)=>{
     
    element.addEventListener('click',(e)=>{

        if(e.target.className == 'queries'){
            expand = false
            element.style.display = 'none'

        }

    })
})


CloseSlide.forEach((element,index)=>{
  
   element.addEventListener('click',()=>{
   expand = false
   SlideResp[index].style.display = 'none'

    })
 
})

ExpandSlideIcon.forEach((element,index)=>{

    element.addEventListener('click',()=>{
     
        if(!expand){
            expand = true
                  
            SlideResp[index].style.display = 'flex'
         
           }else{
            SlideResp[index].style.display = 'none'
           }
         
    })

 
})


CarouselsResMobile.forEach((e)=>{

    const LengthOfSlide = e.children[0].children.length
    const SlideElement = e.children[0].children

    for(i=0;i<LengthOfSlide;i++){

       SlideElement[i].className = "slide1"
    }

    
})



OpenSlideResp.forEach((element,index)=>{

    element.addEventListener('click',()=>{
                    
      if(!expand){
      expand = true
        SlideResp[index].style.display = expand && 'flex'                       
      }


})
     

})

function Btns_SlideResp_src_Window_Width() {
 
    const WindowWidth = window.innerWidth

    CarouselsResMobile.forEach((e,index)=>{

        if (WindowWidth > 950) {
      
            prevBtnsBlack[index].src = './icons/chevron-left.png';
            nextBtnsBlack[index].src = './icons/chevron-right.png';
        } else {
            prevBtnsBlack[index].src = './icons/previousTransparent.png';
            nextBtnsBlack[index].src = './icons/nextTranparent.png';
        }

    })

  
}

window.addEventListener('resize', Btns_SlideResp_src_Window_Width)

Btns_SlideResp_src_Window_Width()