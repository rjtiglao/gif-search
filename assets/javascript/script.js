// API VALIDATIONS
let searchQuery = "Simpsons";
let key = "wNn70PU5687UBNk6pNoCSTZg4wtcdzg1";
let queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchQuery}&limit=10&offset=0&rating=G&lang=en`



// let buildQuery= function(){





// }
fetch(queryUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let createImg = document.createElement(`img`);
    console.log(myJson["data"][0]["images"]["fixed_height_small"]["url"]);
    // createImg.setAttribute(`value`,`${myJson["data"][0]["title"]}`);
    createImg.src = `${myJson["data"][0]["images"]["fixed_height_small"]["url"]}`;
    document.getElementById("gifContainer").appendChild(createImg);
 
  });



// VARIABLES/ARRAYS
// cartoons topics
let topics = ["Simpsons", "Akira", "Code Gease"];
let count = 0;

// Your app should take the topics in this array and create buttons in your HTML.


//FUNCTIONS

//Display image
document.getElementById("submit").onclick = function(){
let createImg = document.createElement(`img`);
createButtons.setAttribute(`value`,`${myJson["data"][0]}`);
document.getElementById("buttonContainer").appendChild(createButtons);
document.getElementById(`button${count}${topics[i]}`).innerHTML = `${topics[i]}`;   
count++ 
}


// Creates a button for each topic
window.onload = function(){
    for(i=0;i<topics.length;i++){

        let createButtons = document.createElement(`button`);
        createButtons.id = `button${count}${topics[i]}`;
        createButtons.className = `topic-button`;
        createButtons.setAttribute(`value`,`${topics[i]}`);
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
    createButtons.setAttribute(`value`,`${userInput}`);
    document.getElementById("buttonContainer").appendChild(createButtons);
    document.getElementById(`button${count}${userInput}`).innerHTML = `${userInput}`;  
    count++  
};





// Try using a loop that appends a button for each string in the array.
// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page that takes a value from a user input box and adds it to your topics array. Then make a function call that takes each topic in the array and remakes the buttons on the page.

// Deploy your assignment to Github Pages.




// $(".gif").on("click", function() {
//     // STEP ONE: study the html above.
//     // Look at all the data attributes.
//     // Run the file in the browser. Look at the images.

//     // After we complete steps 1 and 2 we'll be able to pause gifs from giphy.

//     // STEP TWO: make a variable named state and then store the image's data-state into it.
//     // Use the .attr() method for this.

//     // // ============== FILL IN CODE HERE FOR STEP TWO =========================
//     let state = $(this).attr('data-state');
    

//     // =============================================

//     // STEP THREE: Check if the variable state is equal to 'still',
//     // then update the src attribute of this image to it's data-animate value,
//     // and update the data-state attribute to 'animate'.
  
//     if(state==="still"){
//       $(this).attr("data-state",'animate');
//       $(this).attr("src",$(this).attr('data-animate'));

//     }else{
//       let still = $(this).attr
//     }

//     // If state is equal to 'animate', then update the src attribute of this
//     // image to it's data-still value and update the data-state attribute to 'still'
//     // ============== FILL IN CODE HERE FOR STEP THREE =========================

//     // CODE GOES HERE

//     // ==============================================

//     // STEP FOUR: open the file in the browser and click on the images.
//     // Then click again to pause.
//   });