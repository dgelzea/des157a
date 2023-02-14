(function(){

    'use strict';
    console.log('Reading JS');

    const form = document.querySelector("#form");

    form.addEventListener("submit", function(event){
        
        event.preventDefault();

        // inputs
        const name = document.querySelector("#name").value;
        const food = document.querySelector("#food").value;
        const place = document.querySelector("#place").value;
        const color = document.querySelector("#color").value;
        const adjective = document.querySelector("#adjective").value;
        const thing = document.querySelector("#thing").value;

        //error if user does not provide each input in the form

        if(name == ''){
            document.querySelector('#name').focus();
            document.getElementById("error").innerHTML = `<span style="color:#8abfe6; font-weight: bold;">please provide a name</span>`;
        }
        else if(food == ''){
            document.querySelector('#food').focus();
            document.getElementById("error").innerHTML = `<span style="color:#8abfe6; font-weight: bold;">please provide a food</span>`;
        }
        else if(place == ''){
            document.querySelector('#place').focus();
            document.getElementById("error").innerHTML = `<span style="color:#8abfe6; font-weight: bold;">please provide a place</span>`;
        }
        else if(color == ''){
            document.querySelector('#color').focus();
            document.getElementById("error").innerHTML = `<span style="color:#8abfe6; font-weight: bold;">please provide a color</span>`;
        }
        else if(adjective == ''){
            document.querySelector('#adjective').focus();
            document.getElementById("error").innerHTML = `<span style="color:#8abfe6; font-weight: bold;">please provide an adjective</span>`;
        }
        else if(thing == ''){
            document.querySelector('#thing').focus();
            document.getElementById("error").innerHTML = `<span style="color:#8abfe6; font-weight: bold;">please provide a thing</span>`;
        }
        else {  
        
        //loads on top
        window.scrollTo(0, 330);
            
        //hide all content
        document.getElementById("content").style.display = "none";

        //show whole story         
        document.getElementById("overlay").style.display = "block";

        //print inside panels if user complete entire form

        document.getElementById("one").innerHTML = `Oh hi again <span style="color:#8abfe6; font-weight: bold;">${name}</span>! <br> It's me Geo! I see you're awake now. Are you feeling ok now?`;

        document.getElementById("two").innerHTML = `You fell asleep after eating <span style="color:#8abfe6; font-weight: bold;">${food}</span> and I left you for a bit to look more clues`;

        document.getElementById("three").innerHTML = `And now you're awake we can continue to travel to <span style="color:#8abfe6; font-weight: bold;">${place}</span> where the treasure is`;

        document.getElementById("four").innerHTML = `I think we're getting close I can see the <span style="color:#8abfe6; font-weight: bold;">${color}</span> light based from the clues I found`;

        document.getElementById("five").innerHTML = `WOAH! We found it! We found the <span style="color:#8abfe6; font-weight: bold;">${adjective}</span> treasure chest! Yay!`;

        document.getElementById("six").innerHTML = `I-I must apologize for wasting our time, the inside of the treasure chest is not what they say it was. It wasjust some <span style="color:#8abfe6; font-weight: bold;">${thing}</span>.`;
        }

    });

    //restarts the whole thing

    const restart = document.querySelector('.restart');

    const back = () => {
        window.scrollTo(0, 100);
        location.reload();
    }

    restart.addEventListener('click', back);

}());