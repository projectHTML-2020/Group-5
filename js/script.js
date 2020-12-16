var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function myClick() {
  alert("Successfully Invited! This page was created by: \n   •Meressel Manongtong \n   •Jastin Rose Cruz \n   •Bryce Angel Ganotice \n   •Vince Daniel De Leon \n   •Carlos Daniel De Leon");
}