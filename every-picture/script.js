(function(){

    'use strict';
    console.log('Reading JS');

    const spring = document.querySelector("#spring .button");
    const summer = document.querySelector("#summer .button");
    const fall = document.querySelector("#fall .button");
    const winter = document.querySelector("#winter .button");
    
    const close =  document.querySelectorAll(".close");

    //close everything
    close.forEach(close => {
        close.addEventListener("click", function(event){
            location.reload();
        });
    });

    //spring section 
    spring.addEventListener("click", function(event){
        
        event.preventDefault();
        const back1 = document.querySelector("#back1");
        const album = document.querySelector("#spring-des button");

        //switch all to description
        document.getElementById("content").style.display = "none";
        document.querySelector("header").style.display = "none";  
        document.querySelector("footer").style.display = "none";

        document.getElementById("spring-des").style.display = "block";

        //back to description
        back1.addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("spring-des").style.cssText = `display: block; animation: fadeIn .5s;`
            document.getElementById("spring-album").style.display = "none";
        });

        //switch from description to album
        album.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("content").style.display = "none";       
            document.getElementById("spring-des").style.display = "none";
            document.getElementById("spring-album").style.display = "block";
        });

    });

    //summer section
    summer.addEventListener("click", function(event){
        
        event.preventDefault();
        const back2 = document.querySelector("#back2");
        const album = document.querySelector("#summer-des button");

        //switch all to description
        document.getElementById("content").style.display = "none"; 
        document.querySelector("header").style.display = "none";  
        document.querySelector("footer").style.display = "none"; 
        
        document.getElementById("summer-des").style.display = "block";

        //back to description
        back2.addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("summer-des").style.cssText = `display: block; animation: fadeIn .5s;`
            document.getElementById("summer-album").style.display = "none";
        });

        //switch from description to album
        album.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("content").style.display = "none";       
            document.getElementById("summer-des").style.display = "none";
            document.getElementById("summer-album").style.display = "block";
        });
    });
    
    //fall section
    fall.addEventListener("click", function(event){
        
        event.preventDefault();
        const back3 = document.querySelector("#back3");
        const album = document.querySelector("#fall-des button");

        //switch content to spring description
        document.getElementById("content").style.display = "none";   
        document.querySelector("header").style.display = "none";  
        document.querySelector("footer").style.display = "none";
        
        document.getElementById("fall-des").style.display = "block";

        //back to description
        back3.addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("fall-des").style.cssText = `display: block; animation: fadeIn .5s;`
            document.getElementById("fall-album").style.display = "none";
        });

        //switch from description to album
        album.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("content").style.display = "none";       
            document.getElementById("fall-des").style.display = "none";
            document.getElementById("fall-album").style.display = "block";
        });

    });

    //winter section
    winter.addEventListener("click", function(event){
        
        event.preventDefault();
        const back4 = document.querySelector("#back4");
        const album = document.querySelector("#winter-des button");

        //switch content to spring description
        document.getElementById("content").style.display = "none";   
        document.querySelector("header").style.display = "none";  
        document.querySelector("footer").style.display = "none";
              
        document.getElementById("winter-des").style.display = "block";

        //back to description
        back4.addEventListener("click", function(event){
            event.preventDefault();
            document.getElementById("winter-des").style.cssText = `display: block; animation: fadeIn .5s;`
            document.getElementById("winter-album").style.display = "none";
        });

        //switch from description to album
        album.addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("content").style.display = "none";       
            document.getElementById("winter-des").style.display = "none";
            document.getElementById("winter-album").style.display = "block";
        });

    });


    //album slideshow in general

    //spring
    const SpringImg = [
        'spring/spring1.jpg', 
        'spring/spring2.jpg', 
        'spring/spring3.jpg', 
        'spring/spring4.jpg', 
        'spring/spring5.jpg', 
        'spring/spring6.jpg', 
        'spring/spring7.jpg',
        'spring/spring8.jpg', 
        'spring/spring9.jpg', 
        'spring/spring10.jpg', 
        'spring/spring11.jpg', 
        'spring/spring12.jpg',
    ];

    //summer
    const SummerImg = [
        'summer/summer1.jpg', 
        'summer/summer2.jpg', 
        'summer/summer3.jpg', 
        'summer/summer4.jpg', 
        'summer/summer5.jpg', 
        'summer/summer6.jpg', 
        'summer/summer7.jpg',
        'summer/summer8.jpg', 
        'summer/summer9.jpg', 
        'summer/summer10.jpg', 
        'summer/summer11.jpg', 
        'summer/summer12.jpg',
    ];

    //fall
    const FallImg = [
        'fall/fall1.jpg', 
        'fall/fall2.jpg', 
        'fall/fall3.jpg', 
        'fall/fall4.jpg', 
        'fall/fall5.jpg', 
        'fall/fall6.jpg', 
        'fall/fall7.jpg', 
        'fall/fall8.jpg', 
        'fall/fall9.jpg', 
        'fall/fall10.jpg', 
        'fall/fall11.jpg', 
        'fall/fall12.jpg',
    ];

    //winter
    const WinterImg = [
        'winter/winter1.jpg', 
        'winter/winter2.jpg', 
        'winter/winter3.jpg', 
        'winter/winter4.jpg', 
        'winter/winter5.jpg', 
        'winter/winter6.jpg', 
        'winter/winter7.jpg', 
        'winter/winter8.jpg', 
        'winter/winter9.jpg', 
        'winter/winter10.jpg', 
        'winter/winter11.jpg', 
        'winter/winter12.jpg',
    ];
    
    //slideshow function
        let currentImage = 0;
        const nextPhoto = document.querySelectorAll('.next'); 
        const prevPhoto = document.querySelectorAll('.previous'); 

        const slide1 = document.getElementById('spring-images');
        const slide2 = document.getElementById('summer-images');
        const slide3 = document.getElementById('fall-images');
        const slide4 = document.getElementById('winter-images');

        nextPhoto.forEach(nextPhoto => {
            nextPhoto.addEventListener('click', function(event) {
                event.preventDefault();
                currentImage++;

                if (currentImage > SpringImg.length-1) {
                    currentImage = 0;
                } 
                slide1.src = `images/${SpringImg[currentImage]}`;

                if (currentImage > SummerImg.length-1) {
                        currentImage = 0;
                } 
                slide2.src = `images/${SummerImg[currentImage]}`;
                
                if (currentImage > FallImg.length-1) {
                    currentImage = 0;
                } 
                slide3.src = `images/${FallImg[currentImage]}`;

                if (currentImage > WinterImg.length-1) {
                    currentImage = 0;
                } 
                slide4.src = `images/${WinterImg[currentImage]}`;
            });
        });
            
        prevPhoto.forEach(prevPhoto => {
            prevPhoto.addEventListener('click', function(event) {
                event.preventDefault();
                currentImage--;

                if (currentImage < 0) {
                    currentImage = SpringImg.length -1;
                }
                slide1.src = `images/${SpringImg[currentImage]}`;
                    
                if (currentImage < 0) {
                    currentImage = SummerImg.length -1;
                }
                slide2.src = `images/${SummerImg[currentImage]}`;
                    
                if (currentImage < 0) {
                    currentImage = FallImg.length -1;
                }
                slide3.src = `images/${FallImg[currentImage]}`;

                if (currentImage < 0) {
                    currentImage = WinterImg.length -1;
                }
                slide4.src = `images/${WinterImg[currentImage]}`;
            });
        });

}());