$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
});


var btn_nav=document.getElementById('btn-nav');






	
btn_nav.onclick=function(){
	 if (document.getElementById("nav").style.display === 'none')

        document.getElementById("nav").style.display = "block";

       else 

        document.getElementById("nav").style.display = "none";

}



