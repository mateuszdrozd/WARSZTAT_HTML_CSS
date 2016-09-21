
document.addEventListener("DOMContentLoaded", function () {
 var drop = document.getElementById("drop");
drop.addEventListener("mouseover", function () {
    var dropdown = document.getElementById("dropdown");
   
    dropdown.classList.remove("invisible_menu")
});
drop.addEventListener("mouseout", function () {
    var dropdown = document.getElementById("dropdown");
   
    dropdown.classList.add("invisible_menu")
});
    
  var label = document.querySelectorAll(".label");
   
       label[0].addEventListener("mouseover", function () {
           label[0].classList.add("disappear");
           label[0].classList.add("invisible_label");
       })
       label[0].addEventListener("mouseout", function () {
           label[0].classList.remove("disappear");
           label[0].classList.remove("invisible_label");
       })
   label[1].addEventListener("mouseover", function () {
           label[1].classList.add("disappear");
           label[1].classList.add("invisible_label");
       })
       label[1].addEventListener("mouseout", function () {
           label[1].classList.remove("disappear");
           label[1].classList.remove("invisible_label");
       });
    var right = document.getElementById("rightarrow");
    var left = document.getElementById("leftarrow");
    var picture = document.getElementById("picture");
    var list = picture.getElementsByTagName("li");
    var index = 0;
   
    list[index].classList = ["visible"];
    list[index].classList.add("show");
    right.addEventListener("click", function () {
       
        if (list[index].classList.contains("visible")) {
            list[index].classList.remove("visible");
            index = index + 1;
            if (index === list.length) {
                index = 0;
            }
            
            list[index].classList.add("visible");
            console.log(index);
        }
    })
    
    left.addEventListener("click", function () {
       
        if (list[index].classList.contains("visible")) {
            list[index].classList.remove("visible");
            index = index - 1;
            if (index < 0) {
                index = (list.length-1);
            }
            
             list[index].classList.add("visible");
             console.log(index);
        }
    })
    
    var list_arrow = document.querySelectorAll(".list_arrow");
    var list_panel = document.querySelectorAll(".list_panel");
    
    list_arrow[0].addEventListener("click", function () {
        list_panel[1].classList.remove("visible");
        list_panel[2].classList.remove("visible");
        list_panel[0].classList.toggle("visible");
        })
    list_arrow[1].addEventListener("click", function () {
        list_panel[0].classList.remove("visible");
        list_panel[2].classList.remove("visible");
        list_panel[1].classList.toggle("visible");
        })
    list_arrow[2].addEventListener("click", function () {
        list_panel[0].classList.remove("visible");
        list_panel[1].classList.remove("visible");
        list_panel[2].classList.toggle("visible");
        })
    
    var model = document.querySelector(".model");
   
    var model_choice = model.getElementsByTagName("li");
    chairPrice = 0;
    transportPrice = 0;
        for (var j=0; j<model_choice.length; j++) {
         
            model_choice[j].addEventListener("click", function () {
                for (var i=0; i<list_panel.length; i++) {
                list_panel[i].classList.remove("visible");
                }
                
               var model_inner = this.innerText;
                
               var price = this.dataset.price;
                
               var Title = document.querySelector(".Title");
               Title.innerText=model_inner;
                                    
                var title = document.querySelector(".title");
                title.innerText=price;
                
                var total = document.getElementById("total");
                chairPrice = title.innerText;
                total.innerText = parseInt(chairPrice)+parseInt(transportPrice);
                 
            })
        }
    
    var colors = document.querySelector(".colors");
   
        var colors_choice = colors.getElementsByTagName("li");
        
        for (var j=0; j<colors_choice.length; j++) {
          
            colors_choice[j].addEventListener("click", function () {
                for (var i=0; i<list_panel.length; i++) {
                list_panel[i].classList.remove("visible");
                }
                
               var colors_inner = this.innerText;
               
               var Color = document.querySelector(".Color");
                Color.innerText = colors_inner;
                
                var color = document.querySelector(".color");
                color.innerText = "0";
            })
        }
    
    var patterns = document.querySelector(".patterns");
   
        var patterns_choice = patterns.getElementsByTagName("li");
        
        for (var j=0; j<patterns_choice.length; j++) {
          
            patterns_choice[j].addEventListener("click", function () {
                for (var i=0; i<list_panel.length; i++) {
                list_panel[i].classList.remove("visible");
                }
                
               var patterns_inner = this.innerText;
               
               var Pattern = document.querySelector(".Pattern");
               Pattern.innerText = patterns_inner;
                
              var pattern=document.querySelector(".pattern");
              pattern.innerText = "0";
            })
        }
    
    var transport = document.getElementById("transport");
    transport.addEventListener("change", function () {
        if (transport.checked) {
           var Transport = document.querySelector(".Transport");
           Transport.innerText = "Transport";
           var transport_cost = document.querySelector(".transport");
           transport_cost.innerText = transport.dataset.price;
           transportPrice = transport.dataset.price;
            
         } 
        
        else {
           var Transport = document.querySelector(".Transport");
           Transport.innerText = " ";
           var transport_cost=document.querySelector(".transport");
           transport_cost.innerText = " ";
           transportPrice = 0;
        }
        
        total.innerText = parseInt(chairPrice)+parseInt(transportPrice);
    }) 

 })


