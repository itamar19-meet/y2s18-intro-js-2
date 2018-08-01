// YOUR TASK: Add more pictures!
var pictures = ['imgs/dog.jpg',"imgs/bb.jpeg","imgs/images.jpeg","imgs/images.jpg","imgs/jj.jpeg" ];
var currentIndex = 0;
var currentimg = document.getElementsByTagName("img")[0]
document.getElementById("im").addEventListener("click", function() {
	currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  currentimg.src = pictures[currentIndex]
});


// function showNextPicture() {
//   currentIndex++; // increment current picture
//   // if currentIndex is too large, start from the beginning again
//   if (currentIndex >= pictures.length) {
//     currentIndex = 0;
//   }

//   // YOUR TASK: Finish this function!
// }