import { PROJECTS } from "./projects.js";

document.addEventListener('DOMContentLoaded',()=>{

  
    const elements = document.querySelector("#typing-animation")
    const words = "Olá, Seja muito Bem vindo(a) ao meu portfólio, meu nome é Denis Ferreira, e essa página é um Overview da minha tragetória como Software Enginner."
    const downButton = document.getElementById('downimg')
    const upButton = document.getElementById('upimg')
    const homepage = document.getElementById('homepage')
    const biocontainer = document.getElementById('biocontainer')
    const footer = document.getElementsByClassName("footer page")[0]
    const GetDate = new Date();
    const Year_Formated = GetDate.toLocaleDateString('pt-BR', { year: 'numeric' })
    footer.children[0].textContent = `© ${Year_Formated} Denis Ferreira. Todos os direitos reservados`


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
    
        },50)
    
    
     } 
    
    
     setTimeout(()=>{
     showtext(elements,words)
    },1000)
   

    downButton.addEventListener('click',(e)=>{
        e.preventDefault()

        biocontainer.scrollIntoView({behavior:'smooth'});
        
      
    })

    upButton.addEventListener('click',(e)=>{
        e.preventDefault()

       homepage.scrollIntoView({behavior:'smooth'});
        
      
    })


})


const gotoproject = document.querySelectorAll('.gotoprojects')
const project1 = document.getElementById('project1')
const gotoabout = document.querySelectorAll('.gotoabout')
const gotocontact = document.querySelectorAll('.gotocontact')
const contact_me = document.getElementById('contact-me')
const respemenu = document.querySelector('.respmenuopen')
const menucheck = document.getElementById('respmenu-hamburger')
const linkdinicon = document.querySelectorAll('.contactlinkdin')
const githubcontact = document.querySelectorAll('.contactgithub')


function openrespmenu(){
   
if(menucheck.checked)
    return respemenu.style.height = '200px'          
        return  respemenu.style.height = '0px'

  
}


menucheck.addEventListener('click',()=>{
   openrespmenu()
})


linkdinicon.forEach(element=>{
    element.addEventListener('click',()=>{

    window.location.href = 'http://www.linkedin.com/in/denis-ferreira-19b9b8231'

})

})


githubcontact.forEach(element=>{

    element.addEventListener('click',()=>{

    window.location.href = 'https://github.com/denisfl1'   
})

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


const carousels = document.querySelectorAll('.carousel')
const EventListCarousel = document.querySelectorAll('.carousel.EventList')
const E_CommerceBooks = document.querySelectorAll('.carousel.E-CommerceBooks')
const Medical_Scheduling_System = document.querySelectorAll('.carousel.Medical_Scheduling_System')
const School_Grades_System = document.querySelectorAll('.carousel.School_Grades_System')
const prevBtns = document.querySelectorAll('.prevBtn');
const nextBtns = document.querySelectorAll('.nextBtn');
const prevBtnsBlack = document.querySelectorAll('.prevBtn.Black');
const nextBtnsBlack = document.querySelectorAll('.nextBtn.Black');
const pages = document.querySelectorAll('.page');
const LOADING  = document.getElementsByClassName('LOADING')[0];
const Description = document.querySelectorAll('.projectdescription');
let expand = false
let loadingCount = 0;



Description.forEach((e,index)=>{


e.children[0].children[0].innerHTML = PROJECTS[index].title

const text = PROJECTS[index].description

const hasH3 = /<h3[\s>]/i.test(text)


  const h3 = document.createElement("h3")
  const div = document.createElement("div")



    if(hasH3){
         div.innerHTML = PROJECTS[index].description
          e.insertBefore(div, e.children[2])
    }else{
        
    h3.innerHTML = PROJECTS[index].description
    e.insertBefore(h3, e.children[2])
    }



})

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




LOADING.addEventListener('mouseover',()=>{

    const loading = setInterval(()=>{
        loadingCount +=1
        
        if(loadingCount == 5){
            clearInterval(loading)
            LOADING.children[0].style.opacity = 0
            LOADING.children[0].style.display = 'none'   
            LOADING.children[1].style.display = 'block'
        
        }
            
        
    },800)


})


LOADING.addEventListener('touchstart',()=>{

    const loading = setInterval(()=>{
        loadingCount +=1  
        
        if(loadingCount == 5){
            clearInterval(loading)
            LOADING.children[0].style.opacity = 0
            LOADING.children[0].style.display = 'none'   
            LOADING.children[1].style.display = 'block'
        
        }
            
        
    },800)


})



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
    for(let i=1;i<21;i++){
        
        string += `<div class="slide"><img src="./projectsimgs/EventList/Captura de Tela (${i}).png" alt= Slide ${i}></div>`
    }
    
    carousel.innerHTML = string

})

E_CommerceBooks.forEach((carousel)=>{
    
    let string = "";
    for(let i=1;i<24;i++){
        string +=  `<div class="slide"><img src="./projectsimgs/EcommerceBooks/Captura de Tela (${i}).png" alt= Slide ${i}></div>`
    }
    carousel.innerHTML = string
})

Medical_Scheduling_System.forEach((carousel)=>{

    let string = "";
    for(let i=1;i<40;i++){
        string +=  `<div class="slide"><img src="./projectsimgs/Medical__scheduling_system/Captura de Tela (${i}).png" alt= Slide ${i}></div>`
    }
    carousel.innerHTML = string


})

School_Grades_System.forEach((carousel)=>{
    let string = ""
    for(let i=1;i<18;i++){
        string +=  `<div class="slide"><img src="./projectsimgs/School_Grades_System/${i}.png" alt= Slide ${i}></div>`
    }
    carousel.innerHTML = string
    
})


const Slide_Div = document.querySelectorAll('.slide')
const Slide_website_container = document.querySelectorAll('.slide_website_container')
const SlideResp = document.querySelectorAll('.queries')
const OpenSlideResp = document.querySelectorAll('.openResponsive')
const CloseSlide = document.querySelectorAll('.shrink')
const CarouselsRes = document.querySelectorAll('.carousel-cont')
const CarouselsResMobile = document.querySelectorAll('.carousel1-cont')
const ExpandSlideIcon = document.querySelectorAll('.expand')
const containerform = document.getElementsByClassName('containerform')[0]


CarouselsRes.forEach((element,index)=>{

    element.addEventListener('mouseover',()=>{
           
        ExpandSlideIcon[index].style.opacity = '1'
      
    })
    
    element.addEventListener('mouseout',()=>{
    
        ExpandSlideIcon[index].style.opacity = '0'
    
    
    })
    

})




 Slide_website_container.forEach((element,index)=>{

     const div_slide =  `<div class="slide_link" ></div>`
     const div_website = `<div class= "website_link"></div>`
     const img_slide  = `<img src="./icons/slide.png"></img>`
     const img_website = `<img src="./icons//internet.png">`
     const h1_slide = `<h1>SLIDE</h1>`
     const h1_website = `<h1>WEBSITE (DESKTOP)</h1>`


    element.innerHTML = div_slide + div_website
    element.children[0].innerHTML = img_slide + h1_slide 
    element.children[1].innerHTML = img_website  + h1_website   
   

    element.children[0].addEventListener('click',()=>{
       
        
        Slide_website_container[index].style.display = 'none'
        CarouselsResMobile[index].style.display = 'flex'
    

    })




 })


 const Website_link = document.querySelectorAll('.website_link')
 const Slide_link = document.querySelectorAll('.slide_link')
 const links = [ ]

const EcommerceBooks_Link = 'https://ecommercebooks.vercel.app/'

links.length = 5

links.splice(1,0,EcommerceBooks_Link) 

Website_link.forEach((element,index)=>{


element.addEventListener('click',()=>{


    if(links[index] == undefined){

         alert("O Site ainda não foi disponibilizado!")
  
    }else{
         window.location.href = links[index]
    }



})


})



SlideResp.forEach((element,index)=>{

   

    element.addEventListener('click',(e)=>{
        
        if(e.target.className == 'queries'){
            expand = false
            element.style.display = 'none'
            Slide_website_container[index].style.display = 'flex'
            CarouselsResMobile[index].style.display = 'none'
        }

    })
})




CloseSlide.forEach((element,index)=>{


  
   element.addEventListener('click',()=>{
   expand = false
   SlideResp[index].style.display = 'none'
   Slide_website_container[index].style.display = 'flex'
   CarouselsResMobile[index].style.display = 'none'


    })
 
})

ExpandSlideIcon.forEach((element,index)=>{

    element.addEventListener('click',()=>{
         
        if(!expand){
            expand = true
                  
            SlideResp[index].style.display = 'flex'
            Slide_website_container[index].style.display = 'none'
            CarouselsResMobile[index].style.display = 'flex'

    
           }
         
    })

 
})


CarouselsResMobile.forEach((e)=>{

    const LengthOfSlide = e.children[0].children.length
    const SlideElement = e.children[0].children

    for(let i=0;i<LengthOfSlide;i++){

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

containerform.children[0].children[8].addEventListener('click',(e)=>{

    const childrenInput  = containerform.children[0]
    let verify = false
    for (let i = 0; i < childrenInput.length; i++) {
        const child = childrenInput[i]
     
        if (child.tagName.toLowerCase() === 'input' || child.tagName.toLowerCase() === 'textarea') {
          
            if (!child.value.trim() && !child.required){
                verify = true   
            }
        
        }

        if(child.tagName.toLowerCase() === 'button' && verify){

            e.preventDefault()
        } 

    }

})

window.addEventListener('resize', Btns_SlideResp_src_Window_Width)

Btns_SlideResp_src_Window_Width()

