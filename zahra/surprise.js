const startButton =
    document.getElementById("startButton");

const openingScene =
    document.getElementById("openingScene");

const mainScene =
    document.getElementById("mainScene");

const finalButton =
    document.getElementById("finalButton");

const finalScene =
    document.getElementById("finalScene");

const music =
    document.getElementById("birthdayMusic");
    

const confettiContainer =
    document.getElementById("confetti-container");

const readyOverlay=
    document.getElementById("readyOverlay");

const readyButton=
   document.getElementById("readyButton")
function createConfetti() {

    for (let i = 0; i < 300; i++) {

        const piece =
            document.createElement("div");


        piece.classList.add("confetti");


        const colors = [
            "gold",
            "cream",
            "red",
            "black"
        ];


        const randomColor =
            colors[
                Math.floor(
                    Math.random()* colors.length
                )
            ];


        piece.classList.add(randomColor);


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            Math.random() * 14+ 14 + "s";


        piece.style.animationDelay =
            Math.random() *  4 + "s";


        confettiContainer.appendChild(piece);

    }

}


function createBalloons(containerId, amount) {

    const container =
        document.getElementById(containerId);


    for (let i = 0; i < amount; i++) {

        const balloon =
            document.createElement("div");


        balloon.classList.add("balloon");


        const types = [
            "gold-balloon",
            "white-balloon",
            "black-balloon"
        ];


        const randomType =
            types[
                Math.floor(
                    Math.random() * types.length
                )
            ];


        balloon.classList.add(randomType);


        balloon.style.left =
            Math.random()*  100 + "%";


        balloon.style.animationDuration =
            Math.random() * 18 + 18 + "s";


        balloon.style.animationDelay =
            Math.random() * 6 + "s";


        container.appendChild(balloon);

    }

}


createConfetti();


createBalloons(
    "opening-balloons",
    25
);

readyButton.addEventListener("click",
        function(){ 
            if(music){
                music.play();
            }
            readyOverlay.style.display="none";
        }
    );
startButton.addEventListener(
    "click",
    function () {


        if (music) {

        music.play();

        }
    


        openingScene.classList.add(
            "hidden"
        );


        mainScene.classList.remove(
            "hidden"
        );


        createBalloons(
            "floating-balloons",
            25
        );


        

    }
);


finalButton.addEventListener(
    "click",
    function () {


        mainScene.classList.add(
            "hidden"
        );


        finalScene.classList.remove(
            "hidden"
        );

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            readyButton.click();

        }

    }
);