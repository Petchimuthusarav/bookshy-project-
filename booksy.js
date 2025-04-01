var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")
var show = document.querySelector(".add-button")
show.addEventListener("click", function () {
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
}
)
//popup
var addbook = document.getElementById("Add-book")
var cancelpopup = document.getElementById("Cancel-popup")
cancelpopup.addEventListener("click", function (Event) {
    Event.preventDefault()
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"

})
//container
var container= document.querySelector(".container")
var BTinput=document.getElementById("BT-input")
var BAinput=document.getElementById("BA-input")
var TAinput=document.getElementById("TA-input")
addbook.addEventListener("click", function (Event) {
    var div= document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${BTinput.value}</h2> <h4>${BAinput.value}</h4> <p>${TAinput.value}</p> <button onclick="del(event)">Delete</button>`
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
    Event.preventDefault()
})
function del(event){

    event.target.parentElement.remove()
}

