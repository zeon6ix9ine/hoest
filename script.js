document.getElementById("parent").innerHTML=("DAMN BOI");
document.getElementById("parent").style.cssText=("background-color: purple; color:black; text-align:center");
document.getElementsByClassName("exercise")[0].innerHTML=("im a class selector")

document.getElementById("parent1").style.cssText=("background-color:blue; color:pink");

document.getElementsByClassName("exercise")[2].innerHTML=("SIUUUUUUUU")

document.getElementsByTagName("h1")[1].style.cssText=("background-color:pink; color:black");

document.querySelector("#hi").style.cssText=("text-align:center; text-transform:uppercase");
document.querySelector(".hey").style.cssText=("text-align:center; text-transform:uppercase");

const change= document.querySelectorAll ("h3");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I AM ANKIT KHATIWADA");


}

function myFunction(){
    document.open()
    document.write("<h1>HELLO</h1>");
    document.close();
}