$( document ).ready(function() {
   
      $("#x-out").click(function() {
      $("#promo-bg").css('display', 'none');        
      $("#promo-modal").css('display', 'none');
       $("#main-container").fadeTo( 500, 0, function() {
          $("#single-links").css("display", "flex");          
          $("#contact-btn").css("display", "block");
                $("#social-section").css("display", "inline");

          $("#main-container").css( "background", "#21605F");
          $("#single-links").css("opacity", "1");
          console.log("fadeout");
      });

        $("#main-container").fadeTo(500, 1, function(){    
          $("#main-container" ).css("opacity", "1");
          console.log("fadein");   
       });
      });
    
      $("#forever-anchor").mouseenter(function() {
        
        $("#main-container").css("background", "url(/refs2/assets/forever-full.jpg) no-repeat center center fixed" );
        $("#main-container").css("-webkit-background-size", "cover");
        $("#main-container").css("-moz-background-size", "cover");
        $("#main-container").css("-o-background-size", "cover");
        $("#main-container").css("background-size", "cover");
        $("#main-container").fadeTo(0, 1, function(){    
          $("#pain-anchor" ).css("opacity", "0");
          $("#spotlight-anchor" ).css("opacity", "0");
       });        
        console.log("FOREVER ANCHOR");
      });

      $("#forever-anchor").mouseout(function() {
        $("#main-container").css("background", "#21605F");
        $("#pain-anchor").css("display", "flex");
        $("#spotlight-anchor").css("display", "flex");

        $("#main-container").fadeTo(0, 1, function(){    
          $("#pain-anchor" ).css("opacity", "1");
          $("#spotlight-anchor" ).css("opacity", "1");
       });         
      });      

      $("#pain-anchor").mouseover(function() {
        $("#main-container").css("background", "url(/refs2/assets/pain-goes-away-full.jpg) no-repeat center center fixed");
        $("#main-container").css("-webkit-background-size", "cover");
        $("#main-container").css("-moz-background-size", "cover");
        $("#main-container").css("-o-background-size", "cover");
        $("#main-container").css("background-size", "cover");
        $("#main-container").fadeTo(0, 1, function(){    
          $("#forever-anchor" ).css("opacity", "0");
          $("#spotlight-anchor" ).css("opacity", "0");
       });           
       
        console.log("PAIN ANCHOR");
      });

      $("#pain-anchor").mouseout(function() {
        $("#main-container").css("background", "#21605F");
        
        $("#main-container").fadeTo(0, 1, function(){    
          $("#forever-anchor" ).css("opacity", "1");
          $("#spotlight-anchor" ).css("opacity", "1");
       });  
      });           
    
      $("#spotlight-anchor").mouseover(function() {
        $("#main-container").css("background", "url(/refs2/assets/spotlight-full.jpg) no-repeat center center fixed");
        $("#main-container").css("-webkit-background-size", "cover");
        $("#main-container").css("-moz-background-size", "cover");
        $("#main-container").css("-o-background-size", "cover");
        $("#main-container").css("background-size", "cover");
        
        $("#main-container").fadeTo(0, 1, function(){    
          $("#forever-anchor" ).css("opacity", "0");
          $("#pain-anchor" ).css("opacity", "0");
       }); 
      
        console.log("SPOTLIGHT ANCHOR");
      });

      $("#spotlight-anchor").mouseout(function() {
        $("#main-container").css("background", "#21605F");
        
        $("#main-container").fadeTo(0, 1, function(){    
          $("#forever-anchor" ).css("opacity", "1");
          $("#pain-anchor" ).css("opacity", "1");
       });            
      });

            $("#forever-anchor").click(function() {
        $( "#forever-modal" ).fadeIn( 1000, function() {
        $('#forever-modal').css("display", "inline");
          });
      });    
    
      $("#pain-anchor").click(function() {
        $( "#pain-modal" ).fadeIn( 1000, function() {
        $('#pain-modal').css("display", "inline");
          });
      });
    
      $("#spotlight-anchor").click(function() {
        $( "#spotlight-modal" ).fadeIn( 1000, function() {
        $('#spotlight-modal').css("display", "inline");
          });
      });  
       
        $("#contact-btn").click(function () {
          $("#single-links").hide("fast");
          $("#contact-btn").hide("slow");
          $("#singles-btn").show("slow");
          $("#contact-page").show("slow");

        });

        $("#singles-btn").click(function () {
          $("#contact-page").hide("fast");
          $("#singles-btn").hide("slow");
          $("#singles-links").show("slow");
          $("#contact-btn").show("slow");
          $("#single-links").css('display', 'flex');
        });              
  
});