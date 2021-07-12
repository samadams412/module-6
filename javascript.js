//grow button
document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
})
//blue button
document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";
})
//fade button
document.getElementById("button3").addEventListener("click", function(){

    document.getElementById("box").style.opacity = .25;
})
//reset button
document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = 1;
})
//bonus button
document.getElementById("button5").addEventListener("mouseover", function(){

    document.getElementById("box").style.width = "250px";
    document.getElementById("box").style.backgroundColor = "blue";
    document.getElementById("box").style.opacity = .25;
})
document.getElementById("button5").addEventListener("mouseleave", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = 1;
})