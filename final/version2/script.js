(function(){

     'use strict';
     console.log('Reading JS');

     // function smoothScroll(event) {
     //      event.preventDefault();
  
     //      const targetID = event.target.getAttribute('href');
     //      const targetAnchor = document.querySelector(targetID);
  
     //      const pageTop = Math.floor(targetAnchor.getBoundingClientRect().top) - 80;
     //      window.scrollBy({top: pageTop, left: 0, behavior: 'smooth'});
          
     // }
  

     //back to home
     const back =  document.getElementById("back");

     back.addEventListener("click", function(event){
          event.preventDefault();
          location.reload();
     });

     //album each section
     const spring = document.getElementById("spring-album");
     const summer = document.getElementById("summer-album");
     const fall = document.getElementById("fall-album");
     const winter = document.getElementById("winter-album");

     spring.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("spring").style.display = "block";

     });
     
     summer.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("summer").style.display = "block";

     });

     fall.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("fall").style.display = "block";

     });
     
     winter.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("winter").style.display = "block";

     });
 
     //stories section
     const food = document.getElementById("food-story");
     const art = document.getElementById("art-story");

     food.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("story1").style.display = "block";

     });

     art.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("story2").style.display = "block";

     });

     //fall
     const foodImg = [
         'food/food1.jpg',
         'food/food2.jpg',
         'food/food3.jpg',
         'food/food4.jpg',
         'food/food5.jpg',
         'food/food6.jpg',
         'food/food7.jpg',
         'food/food8.jpg',
     ];
 
     //slide show of art
     const artImg = [
         'art/art1.jpg',
         'art/art2.jpg',
         'art/art3.jpg',
         'art/art4.jpg',
         'art/art5.jpg',
         'art/art6.jpg',
     ];
     
     //slideshow function
     let currentImage = 0;
     const nextPhoto = document.querySelectorAll('.next'); 
     const prevPhoto = document.querySelectorAll('.previous'); 

     const slideFood = document.getElementById('food');
     const slideArt = document.getElementById('art');
 
     nextPhoto.forEach(nextPhoto => {
          nextPhoto.addEventListener('click', function(event) {
               event.preventDefault();
               currentImage++;
 
               if (currentImage > foodImg.length-1) {
                    currentImage = 0;
               } 
               slideFood.src = `images/${foodImg[currentImage]}`;
 
               if (currentImage > artImg.length-1) {
                    currentImage = 0;
               } 
               slideArt.src = `images/${artImg[currentImage]}`;
          });
     });
             
     prevPhoto.forEach(prevPhoto => {
          prevPhoto.addEventListener('click', function(event) {
               event.preventDefault();
               currentImage--;
 
               if (currentImage < 0) {
                    currentImage = foodImg.length -1;
               }
               slideFood.src = `images/${foodImg[currentImage]}`;
                     
               if (currentImage < 0) {
                    currentImage = artImg.length -1;
               }
               slideArt.src = `images/${artImg[currentImage]}`;
          });
     });

     //stories section
     const memos = document.getElementById('memos');
     const extras = document.getElementById('extras');

     memos.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("entry1").style.display = "block";

     });

     extras.addEventListener("click", function(event){

          window.scrollTo(0, 580);
          document.getElementById("home").style.display = "none";
          document.getElementById("back").style.display = "block";
          document.getElementById("entry2").style.display = "block";

     });

}());