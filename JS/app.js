$(document).ready(function(){
   $(window).scroll(function(){
    if($(window).scrollTop()>=100){
        $(".nv").css({"backgroundColor":"rgb(17, 29, 52,0.7)"})

        $(".arrow").fadeIn(500)

        $(".arrow").click(function(){
            $(window).scrollTop(0)
        })
    }else{
        $(".nv").css({"backgroundColor":"transparent"})
        $(".arrow").fadeOut(500)
    }
   }) 



   $(".calltoaction").click(function(){
    $(window).scrollTop(0)
   })





})
