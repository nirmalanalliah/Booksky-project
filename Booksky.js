// select popupbox popupoverlay button
 let popupbox=document.querySelector(".popup-box");
let popupoverlay=document.querySelector(".popup-overlay");
let addpopupbutton=document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}
)
// select cancel button
let cancelpopup=document.getElementById("cancel-popup");

//stop defalt click of cancel button
    cancelpopup.addEventListener("click",function(event){
    event.preventDefault();

    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container,add-book,book-title-input,book-author-input,book-description-input
 let container=document.querySelector(".container");
  let addbook=document.getElementById("add-book");
 let booktitleinput=document.getElementById("book-title-input");
 let bookauthorinput=document.getElementById("book-author-input");
let bookdescriptioninput=document.getElementById("book-description-input");

 addbook.addEventListener("click",function(event){
    event.preventDefault()

    let div=document.createElement("div")//empty element

    div.setAttribute("class","book-container")//set attibute
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}
    </p>
    <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
   })



   function deletebook(event)
    {
          event.target.parentElement.remove();
    }