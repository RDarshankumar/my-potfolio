var a = document.querySelector(".Stranger")
var b = document.querySelector(".Connect")
var c = 0


b.addEventListener("click",function(){
      if(c == 0){
        a.innerHTML = "Connected"
        a.style.color = "green"
        b.innerHTML = "Cancel"
        b.style.backgroundColor = "grey"
        b.style.color = "white"
        b.style.border = "1px solid grey"
        b.style.padding = "10px"

        console.log("clicked")
        c = 1
      }else{
        a.innerHTML = "Stranger"
        a.style.color = "grey"
        console.log("again click")
        b.style.backgroundColor = "blue"
        b.style.color = "white"
        b.style.border = "1px solid blue"
        b.innerHTML = "Connect"
        c = 0
      }
})
