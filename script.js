 // Button click sound
 const img1 = document.querySelector(".img1")
 const img2 = document.querySelector(".img2")
 document.getElementById('celebrate-btn').addEventListener('click', () => {
   const audio = new Audio('audio_35ea7b7438.mp3');
   const audio2 = new Audio('audio_d16633390c.mp3');
   audio.play();
   audio2.play();
   img1.style.display = "block"
     img2.style.display = "block"


   alert("Cheers to your success!");
 });