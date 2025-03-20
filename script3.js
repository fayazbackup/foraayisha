window.onload = function() {
  // Show the question (button) section immediately
  document.getElementById('question').style.display = 'block';

  // Find the video element inside the video container
  var video = document.querySelector('.video-container video');
  if (video) {
    // Add a click event listener to toggle play/pause
    video.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
};

function showMessage(choice) {
  if (choice === 'no-read') {
    alert("It's okay. I just wanted to be honest about how I feel. Take care ❤️");
  } else if (choice === 'read') {
    window.location.href = "index4.html"; // Redirect to the next page
  }
}
