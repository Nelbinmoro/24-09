var head=document.getElementById("head1");
console.log(head);
head.style.color="red";
head.textContent="HHHIIHIHIHIHIHIHIHIIHH";
head.innerHTML="<h6>changed into h6</h6>";
var c=document.getElementsByClassName("list");
for(let i=0;i<c.length;i++)
  {
  c[i].style.backgroundColor="yellow";
  }

var t=document.getElementsByTagName('li')
t[1].style.color="red";

//using query selector
let val=document.querySelector("input");
val.value="Name"

//QUERY SELECTOR USING ID
var save=document.querySelector("#save");
save.style.backgroundColor="grey"
