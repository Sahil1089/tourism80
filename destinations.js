
function displaydestinationElement(){
    let placecontainer=document.querySelector(".placecontainer");


   
    if(!placecontainer){
        return
    }
    let innerHTML="";
    
    destination.forEach(element => {
        innerHTML += `  
                  <div id = "card" onclick="fullview(${element.id})" class="card" style="width: 14rem; backdrop-filter: blur(5px);">
                  <a href="fullview.html" style="text-decoration: none;">
                    <img src="${element.image}" id="img" class="card-img-top" alt="..."></a>
                    <div id="text">
                      <h5 style="font-size: 1.8rem; margin-top: 8px; text-transform: capitalize;">${element.name}</h5>
                      <h6>${element.loc}
                    </h6></div>
                      <div id="control">
    
                        <button id="wish" onclick="addTowish(${element.id})" >add to wishlist </button>
                        <i style="color:black" class="fa-regular fa-heart"></i>
    
                      </div>
                    </div>
                  </div>
                `
        
    });
    
    placecontainer.innerHTML= innerHTML;
    }

    displaydestinationElement()