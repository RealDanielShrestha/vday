
document.addEventListener("DOMContentLoaded", function() {
    const buttonNo = document.getElementById('No');
    let count = 0;
    
    // buttonNo.addEventListener('click', function(){
    // alert('Button clicked!');


    const clickText = document.querySelector('.click-text'); // Selecting "You're right..." text
    clickText.style.visibility = "hidden";

    buttonNo.addEventListener('click', function(){
        if (count === 0) {
            clickText.style.visibility = "visible";
            clickText.style.opacity = "1";
            clickText.style.transform = "translateY(0)"; // Move to normal position
        }
        else if (count === 1) {
            clickText.textContent = "Wait.. are you sure?";
        }

        else if (count === 2) {
            clickText.textContent = "Maybe I should've asked in person :(";
        }

        else if (count === 3) {
            clickText.textContent = "Hey..";
        }

        else if (count === 4) {
            clickText.textContent = "Wait a second..";
        }

        else if (count === 5) {
            alert("(Accept me now?)");
        }
        else if (count > 5) {
            alert("(Click Yes!)");
        }
        clickText.style.fontSize = "1.5rem";
        clickText.style.fontWeight = "bold";
        clickText.style.fontFamily = "'Arial', sans-serif";
        //clickText.style.color = "rgb(237, 150, 164)";
        buttonYes.style.transform = `scale(${1 + count * 0.5})`;
        
        count++;
    })
    const buttonYes = document.getElementById('Yes');
    buttonYes.addEventListener('click', function(){
        if(count<5){
        alert('Hey... wait a second.. let me get you flowers first');
        }
        else if(count>=5){
            clickText.textContent = "YAYAYAYAYAYAYA"

            const newMessage = document.createElement('p');
            newMessage.textContent = "(Come outside!!)";

            const newImg = document.createElement('img');  // The new message
            newImg.src="Flowers-PNG-2.png";
            newImg.style.height="25rem";
            newImg.style.width="50rem";

            const newGIF = document.createElement("img");  // Use img instead of video for GIF
            newGIF.src = "cats.gif";
            newGIF.style.height = "auto"; // Adjust the height or width as per your preference
            newGIF.style.width = "20rem"; // You can tweak the size here

            newMessage.style.fontSize = "1.5rem";
            newMessage.style.fontWeight = "bold";
            newMessage.style.fontFamily = "'Arial', sans-serif";
            newMessage.style.marginTop = "10px";  // Adds space between the messages
            
            // Append the new message to the clickText container
            clickText.appendChild(newMessage);
            const clickTextDiv = document.querySelector('.click-text');
            clickTextDiv.appendChild(newImg);
            clickTextDiv.appendChild(newGIF);
            
        }

        clickText.style.fontSize = "1.5rem";
        clickText.style.fontWeight = "bold";
        clickText.style.fontFamily = "'Arial', sans-serif";});

    
})

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('play');
    const music = document.getElementById('music');

    playButton.addEventListener('click', function() {
        if (music.paused) {
            // If the music is paused, play it and change the button to the active (pause) image
            music.play();
            playButton.src = 'active-play.png';  // Image for playing state
        } else {
            // If the music is playing, pause it and change the button to the normal play image
            music.pause();
            playButton.src = 'play-button.png';  // Image for paused state
        }
    });
});

alert("Start the music please!")