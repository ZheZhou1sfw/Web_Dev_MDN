var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  let picPath = 'images/pic' + i + ".jpg";
  newImage.setAttribute('src', picPath);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    var newPath = e.target.getAttribute('src');
    displayCurrent(newPath);
  }
}

/* Adding an onclick handler to each thumbnail image */
function displayCurrent(picPath) {
  displayedImage.setAttribute('src', picPath);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(e) {
  let curClass = e.target.getAttribute('class');
  if (curClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = "Lighten!";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = "Darken!";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
}
