$(document).ready(()=>{
    console.log("ready");
    $(".ham-div").on("click",()=>{
        $(".mobile-nav").slideToggle()
    })

    // scroll up btn show
    $(window).on("scroll",()=>{
        if(this.pageYOffset>400){
            $(".scroll-up-btn").css("display","flex")
        } else{
            $(".scroll-up-btn").css("display","none")
        }
    })

    $(".scroll-up-btn").on("click",()=>{
        console.log("clicked")
        $("html, body").animate({
            scrollTop: 0
        },2000)
    })

    // var h = ()
    $(".mdc-btn").on("click",function(){
        $("html, body").animate({
            scrollTop: $(document).height()
        },2000)
    })
})

const nav = document.querySelector("nav")

window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        nav.classList.add("fixed-nav")
    } else{
        nav.classList.remove("fixed-nav")
    }
})