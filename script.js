let row=document.querySelector(".row");
let API_URL="https://restcountries.com/v3.1/all";
fetch(API_URL)
.then((response)=>response.json())
.then(data=>{
let countries=["Germany","United States of America","Brazil","Iceland","Afghanistan","Aland islands","Albania","Algeria"];
   for(let index=0;index<countries.length;index++){
    if(data[index].name==countries[index]){
    row.innerHTML+=`<div class="col-3">
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${data[index].flag.png}" alt="Card image cap" style="height:12rem;">
    <div class="card-body">
      <h5 class="card-title">${data[index].name.common}</h5>
      <p><b>Population:</b>${data[index].population}</p>
      <p><b>Region:</b>${data[index].region}</p>
      <p><b>Capital:</b>${data[index].capital}</p>
    </div>
   </div>
  </div>`
    }
   }
})
 let body=document.querySelector("body");
let button=document.querySelector("button");
let card=document.querySelector(".card");
button.textContent="Dark Mode";
header.append(button);
button.addEventListener("click",function(){
var element=Document.header;
element.classList.toggle("button");
});

 