//Nav-Responsiveness button 
let navlinks=document.getElementsByClassName("links");
function showmenu(){
   navlinks.style.right="0px";
}
function hidemenu(){
   navlinks.style.right="-200px";
}
//---------//
//Marque//
$(function() {
   $('marquee').mouseover(function() {
       $(this).attr('scrollamount',0);
   }).mouseout(function() {
        $(this).attr('scrollamount',5);
   });
})
//--------//
