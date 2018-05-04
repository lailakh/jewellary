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



 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    document.getElementById('moar').onclick = function() {
      var section = document.createElement('section');
      section.className = 'section--purple wow fadeInDown';
      this.parentNode.insertBefore(section, this);
    };



