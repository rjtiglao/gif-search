// // API VALIDATIONS
// let searchQuery = "Simpsons";
// let key = "wNn70PU5687UBNk6pNoCSTZg4wtcdzg1";
// let queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchQuery}&limit=10&offset=0&rating=G&lang=en`

// VARIABLES/ARRAYS
// cartoons topics
let topics = ["Simpsons", "Akira", "Code Gease"];
let count = 0;

//FUNCTIONS

//pause and play on click
let play = function(e){
    let still = e.getAttribute(`still`);
    let startUrl = e.getAttribute(`data-start`);
    let pauseUrl = e.getAttribute(`data-still`);
   if(still==="yes"){
    e.setAttribute(`still`,"no");
    e.setAttribute(`src`, startUrl);
    
   }
   else if (still==="no"){
       e.setAttribute(`still`,"yes");
       e.setAttribute(`src`, pauseUrl);
   }
}

//Prepends all the gifs on window
let func = function(e){

    let searchQuery = e.getAttribute(`value`);
    let rate = e.getAttribute(`rating`);

    let key = "wNn70PU5687UBNk6pNoCSTZg4wtcdzg1";
    let queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchQuery}&limit=10&offset=0&rating=${rate}&lang=en`
    console.log(queryUrl);
    fetch(queryUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        
        for(i=0;i<10; i++){
            let createImg = document.createElement(`img`);
            let createRate = document.createElement(`p`);
            console.log(myJson["data"][i]["images"]["fixed_height_still"]["url"]);
            createImg.setAttribute(`onclick`,`play(this)`);
            createImg.setAttribute(`data-still`,`${myJson["data"][i]["images"]["fixed_height_still"]["url"]}`);
            createImg.setAttribute(`data-start`,`${myJson["data"][i]["images"]["fixed_height"]["url"]}`);
            createImg.setAttribute(`still`,`yes`);
            createImg.src = `${myJson["data"][i]["images"]["fixed_height_still"]["url"]}`;
            createRate.innerHTML = `Rating: ${myJson["data"][i]["rating"]}`; 
            document.getElementById("gifContainer").prepend(createImg);
            document.getElementById("gifContainer").prepend(createRate);
        }
    });
}

// Creates a button for each topic
window.onload = function(){
    for(i=0;i<topics.length;i++){

        let createButtons = document.createElement(`button`);
        createButtons.id = `button${count}${topics[i]}`;
        createButtons.className = `topic-button`;
        createButtons.setAttribute(`value`,`${topics[i]}`);
        createButtons.setAttribute(`onclick`,`func(this)`);
        createButtons.setAttribute(`rating`,"G");
        document.getElementById("buttonContainer").appendChild(createButtons);
        document.getElementById(`button${count}${topics[i]}`).innerHTML = `${topics[i]}`;   
        count++ 
    }
};

//recreate buttons for each topic
let remove = function(){
    let child = document.getElementById(`buttonContainer`).lastElementChild;  

    while (child) { 
        document.getElementById(`buttonContainer`).removeChild(child); 
        child = document.getElementById(`buttonContainer`).lastElementChild; 
    } 
   console.log("Removed all child elements")
}

let recreateBtn = function(r,u){
    remove();
    topics.push(u);
    for(i=0;i<topics.length;i++){
        let createButtons = document.createElement(`button`);
        createButtons.id = `button${count}${topics[i]}`;
        createButtons.className = `topic-button`;
        createButtons.setAttribute(`value`,`${topics[i]}`);
        createButtons.setAttribute(`onclick`,`func(this)`);
        createButtons.setAttribute(`rating`,r);
        document.getElementById("buttonContainer").appendChild(createButtons);
        document.getElementById(`button${count}${topics[i]}`).innerHTML = `${topics[i]}`;   
        count++ 
    }

    console.log("Finished adding all child elements")
};

// On submit recreate buttons
document.getElementById("submit").onclick = function(){
    let userInput = document.getElementById(`search-term`).value.trim();
    let rating = document.getElementById(`rate-select`).value.trim();
    recreateBtn(rating,userInput);
};