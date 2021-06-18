$(".temperature-button").click(function() {
   let temperature = Number($(".temperature-input").val());
    if (temperature <= 50 ) { 
        $(".output").text("Wear a winter Jacket"); 
    } 
    else if (temperature <= 70){ 
        $(".output").text("Wear a light Jacket");  
    } 
    else if (temperature <= 80){
        $(".output").text("Wear a t-shirt"); 
    } 
    else{ 
        $(".output").text("Wear shorts"); 
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
  
    



   
});