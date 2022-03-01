/*-------- Animation du titre ------*/
$(document).ready(function () { $("#h1").slideDown(1500); })


/*------ NavBar ------*/

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$('#myTopnav a').click(function () {
  if ($("#pull").is(":visible")) {
    $("#pull").click("collapse");
  }
});

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById("myTopnav").style.background = "#2196f3";
  }
  else {
    document.getElementById("myTopnav").style.background = "#333";
  }
}

/*------Animation du Carousel------*/

var slideIndex = 1;
showSlides(slideIndex);

// Flèches gauche droite
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/*------ control des bouton sous le carousel ------*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* Animation 3D */

const scene = new THREE.Scene(window.innerWidth)
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight)

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
const material = new THREE.MeshBasicMaterial({ color: 0x2196f3, wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

scene.add(cylinder)
camera.position.z = 20

renderer.setClearColor(0xffffff, 0);
renderer.setSize(500, 300)
document.getElementById("threeD").appendChild(renderer.domElement)

function animate() {
  cylinder.rotation.x += 0.01
  cylinder.rotation.y += 0.01
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()


// alerte de connexion + popup de connexion

function openForm() {
  document.getElementById("popupForm").style.display = "block";
  alert("Merci de laisser votre Mail ainsi qu'une demande ou une remarque.")
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}