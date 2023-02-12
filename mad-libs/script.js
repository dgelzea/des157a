(function(){

    'use strict';
    console.log('Reading JS');

    const form = document.querySelector("#form");
    const madlib = document.querySelector("#madlib");

    form.addEventListener("submit", function(event){
        
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const food = document.querySelector("#food").value;
        const place = document.querySelector("#place").value;
        const color = document.querySelector("#color").value;
        const adjective = document.querySelector("#adjective").value;
        const thing = document.querySelector("#adjective").value;

        let myText;

        if(name == ''){
            myText = "Please provide a name"
            document.querySelector('#name').focus();
        }
        else if(food == ''){
            myText = "Please provide a food"
            document.querySelector('#food').focus();
        }
        else if(place == ''){
            myText = "Please provide a place"
            document.querySelector('#place').focus();
        }
        else if(color == ''){
            myText = "Please provide a color"
            document.querySelector('#color').focus();
        }
        else if(adjective == ''){
            myText = "Please provide an adjective"
            document.querySelector('#adjective').focus();
        }
        else if(thing == ''){
            myText = "Please provide a thing"
            document.querySelector('#thing').focus();
        }
        else {
    
        document.getElementById("one").innerHTML = `Oh hi again <span style="color:#8abfe6; font-weight: bold;">${name}</span>! It's me Geo! I see you're awake now. Are you feeling ok now?`;

        document.getElementById("two").innerHTML = `You fell asleep after eating <span style="color:#8abfe6; font-weight: bold;">${food}</span> and I left you a bit to look more clues`;

        document.getElementById("three").innerHTML = `But now you're awake we continue to travel to <span style="color:#8abfe6; font-weight: bold;">${place}</span> where the treasure is`;

        document.getElementById("four").innerHTML = `I think we're getting close I can see the <span style="color:#8abfe6; font-weight: bold;">${color}</span> light based from the clues I found`;

        document.getElementById("five").innerHTML = `WOAH! We found it! We found the <span style="color:#8abfe6; font-weight: bold;">${adjective}</span> treasure chest! Yay!`;

        document.getElementById("six").innerHTML = `I-I must apologize for wasting our time, the inside of the treasure chest not what they say it was it just some <span style="color:#8abfe6; font-weight: bold;">${thing}</span>.`;
        }

    });




    //   

    //     const food = document.querySelector("#name").value;

    //     document.getElementById("two").innerHTML = `Oh hi again ${name}! I see you're awake now. Are you feeling ok now?`;
    // // });


    document.getElementById('overlay').className = "showing";

    //     
    // });

    // document.querySelector(".rest").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     document.getElementById("#madlib").className = "hidden";
    // });

}());