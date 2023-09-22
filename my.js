 
 




 function calculator(){
  document.addEventListener("DOMContentLoaded",function () {
   
    var body=document.querySelector("#bod");
    var btn1=document.querySelector("#btn");

    btn1.addEventListener("click",function(){
       if( body.style.backgroundColor==""){
        body.style.backgroundColor="grey"
       }
       else{
        body.style.backgroundColor=""
       }
       
    })
})
 document.addEventListener("DOMContentLoaded",function(){
   
    var cal=document.querySelector("#calculator");
    var inp=document.querySelector("#ip");
    var ip0=document.querySelector("#_0");
    var ip1=document.querySelector("#_1");
    var ip2=document.querySelector("#_2");
    var ip3=document.querySelector("#_3");
    var ip4=document.querySelector("#_4");
    var ip5=document.querySelector("#_5");
    var ip6=document.querySelector("#_6");
    var ip7=document.querySelector("#_7");
    var ip8=document.querySelector("#_8");
    var ip9=document.querySelector("#_9");
    var _pl=document.querySelector("#_pl");
    var _mi=document.querySelector("#_mi");
    var _div=document.querySelector("#_div");
    var _mul=document.querySelector("#_mul");
    var eva=document.querySelector("#eval");
    var cl=document.querySelector("#_c");
    var rem=document.querySelector("#_rema");
    
    console.log(rem);
    ip1.addEventListener("click",function(){
      inp.value +=ip1.textContent;
      })
      cl.addEventListener("click",function(){
         inp.value =" "
         })
        
        
      ip0.addEventListener("click",function(){
         inp.value +=ip0.textContent;
         })
      ip2.addEventListener("click",function(){
         inp.value +=ip2.textContent;
         })
         ip3.addEventListener("click",function(){
             inp.value +=ip3.textContent;
             })
             ip4.addEventListener("click",function(){
                 inp.value +=ip4.textContent;
                 })
                 ip5.addEventListener("click",function(){
                     inp.value +=ip5.textContent;
                     })
    
                     ip6.addEventListener("click",function(){
                         inp.value +=ip6.textContent;
                         })
    
                         ip7.addEventListener("click",function(){
                             inp.value +=ip7.textContent;
                             })
    
                             ip8.addEventListener("click",function(){
                                 inp.value +=ip8.textContent;
                                 })
    
                                 ip9.addEventListener("click",function(){
                                     inp.value +=ip9.textContent;
                                     })
                                     _pl.addEventListener("click",function(){
                                         inp.value +=_pl.textContent;
                                         })
                                         _mi.addEventListener("click",function(){
                                             inp.value +=_mi.textContent;
                                             })
                                             _div.addEventListener("click",function(){
                                                 inp.value +=_div.textContent;
                                                 })
                                                _mul.addEventListener("click",function(){
                                                     inp.value +=_mul.textContent;
                                                     })
                                                     rem.addEventListener("click",function(){
                                                         inp.value +=rem.textContent;
                                                     })
    
    
   
                                                    eva.addEventListener("click",function(){
                                                        inp.value =eval(inp.value);
                                                        })
                                                                           
   
                                })
                            }
calculator();
 



