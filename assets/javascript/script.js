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

//Prepends all the gifs on window
let func = function(e){

    let searchQuery = e.getAttribute(`value`);
    let key = "wNn70PU5687UBNk6pNoCSTZg4wtcdzg1";
    let queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchQuery}&limit=10&offset=0&rating=G&lang=en`

    fetch(queryUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        
        for(i=0;i<10; i++){
            let createImg = document.createElement(`img`);
            console.log(myJson["data"][i]["images"]["fixed_height_still"]["url"]);
            createButtons.setAttribute(`onclick`,`play(this)`);
            createImg.setAttribute(`data-still`,`${myJson["data"][i]["images"]["fixed_height_still"]["url"]}`);
            createImg.setAttribute(`data-start`,`${myJson["data"][i]["images"]["fixed_height"]["url"]}`);
            createImg.setAttribute(`still`,`yes`);
            createImg.src = `${myJson["data"][i]["images"]["fixed_height_still"]["url"]}`;
            document.getElementById("gifContainer").prepend(createImg);
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
        document.getElementById("buttonContainer").appendChild(createButtons);
        document.getElementById(`button${count}${topics[i]}`).innerHTML = `${topics[i]}`;   
        count++ 
    }
};


// On submit create a new button
document.getElementById("submit").onclick = function(){
    let userInput = document.getElementById(`search-term`).value.trim();
    let createButtons = document.createElement(`button`);
    createButtons.id = `button${count}${userInput}`;
    createButtons.className = `topic-button`;
    createButtons.setAttribute(`onclick`,`func(this)`);
    createButtons.setAttribute(`value`,`${userInput}`);
    document.getElementById("buttonContainer").appendChild(createButtons);
    document.getElementById(`button${count}${userInput}`).innerHTML = `${userInput}`;  
    count++  
};