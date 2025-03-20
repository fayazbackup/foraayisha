window.onload = function() {
  document.getElementById('question').style.display = 'block';
};

function showMessage(choice) {
  if (choice === 'no-read') {
    window.location.href = "index5.html"; // Redirect for no-read choice
  } else if (choice === 'read') {
    window.location.href = "index2.html"; // Redirect for read choice
  }
}
