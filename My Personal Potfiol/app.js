
var e = document.querySelector(".btn-s");
var f = document.querySelector(".message");
var j = document.querySelector(".shd")
var k = document.querySelector(".dhd")
var l = document.querySelector(".ded")


e.addEventListener("click" ,function(){
    f.style.display = "block"
})

j.addEventListener("click",function(){
    j.style.boxShadow = "1px 1px 10px  rgb(223, 159, 75)"
    k.style.boxShadow = "1px 1px 10px  rgb(223, 159, 75)"
    l.style.boxShadow = "1px 1px 10px  rgb(223, 159, 75)"
})
