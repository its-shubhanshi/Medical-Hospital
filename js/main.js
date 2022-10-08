$(function(){
     $(".tabs ul li a").click(function(e){
      e.preventDefault();
      $(".tabs ul li a").removeClass("active");
      $(this).addClass("active");
      var index=$(this).parent().index();
      $(`.content`).fadeOut(0);
      $('.content:eq('+index+')').fadeIn();
     })

     $(".accordian a").click(function (e){
          e.preventDefault();
          if($(this).next("p").is(":hidden")){
              $(".accordian a").removeClass("active");
              $(this).addClass("active");
              $(".accordian p").slideUp();
              $(this).next("p").slideDown();
          }
      });
      
})


/* count down*/
let valueDisplay=document.querySelectorAll(".num");
let interval=5000;
valueDisplay.forEach((valueDisplay)=>{
     let startvalue=0;
     let endvalue=parseInt(valueDisplay.getAttribute("data-val"));
     let duration=Math.floor(interval/endvalue)
     let counter=setInterval(function(){
          startvalue += 1;
          valueDisplay.textContent=startvalue;
          if(startvalue==endvalue){
               clearInterval(counter)
          }
     }, duration)
})


/* mobile toogle*/
$(function(){
     $(".mob").click(function(){
         $(this).toggleClass("active");
         $(".wrap-1 .flex").slideToggle();
     })
 
     
 })