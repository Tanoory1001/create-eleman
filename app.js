let mytextbox = document.querySelector("#mytextbox");
let btn = document.querySelector("#btn");
let my_list = document.querySelector("#my_list");

btn.addEventListener('click' , function () {
    let entered_data = mytextbox.value ;
if
(entered_data.trim() == "")
{alert("Please Enter Data");}

else
{
    let new_elem = document.createElement("li") ;
    new_elem.innerHTML = mytextbox.value.toLowerCase() ; 
    my_list.appendChild(new_elem) ;
}
});
