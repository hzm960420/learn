function clientopen() {
  document.getElementsByClassName('tequan')[0].style.display = 'block';
}

function clientclose() {
  document.getElementsByClassName('tequan')[0].style.display = 'none';
}

function boxopen() {
  document.getElementsByClassName('select_box')[0].style.display = 'block';
}

function boxclose() {
  document.getElementsByClassName('select_box')[0].style.display = 'none';
}

function box2open() {
  document.getElementsByClassName('select_box2')[0].style.display = 'block';
}

function box2close() {
  document.getElementsByClassName('select_box2')[0].style.display = 'none';
}

function openbutton() {
  document.getElementsByClassName('left')[0].style.display = 'block';
  document.getElementsByClassName('rightdiv')[0].style.display = 'block';
}

function closebutton() {
  document.getElementsByClassName('left')[0].style.display = 'none';
  document.getElementsByClassName('rightdiv')[0].style.display = 'none';
}

function ulleft() {
  var circularDiv = document.querySelector(".ul");
  var newLeft = parseInt(circularDiv.style.left) + 1218;
  circularDiv.style.left = newLeft + "px";
  // document.getElementsByClassName("ul")[0].style.left = "-" + 1218 + "px";
}

function ulright() {
  var circularDiv = document.querySelector(".ul");
  var newRight = parseInt(circularDiv.style.left) + 1218;
  circularDiv.style.left = newRight + "px";
}