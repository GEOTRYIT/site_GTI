var modal = document.getElementById('imageModal');
var img = document.getElementById('modalImage');
var closeBtn = document.querySelector('.close');
var button = document.getElementById('showImageButton');

function closeModal() { modal.style.display = "none"; };

button.addEventListener('click', function () {img.src = "pictures/Popugai.jpg"; modal.style.display = "block"; });
closeBtn.onclick = function () { closeModal(); };
window.onclick = function(event) { if (event.target == modal) { closeModal(); } }

