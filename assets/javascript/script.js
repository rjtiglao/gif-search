// // function buildQueryURL() {
// //     // queryURL is the url we'll use to query the API
// //     var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
  
// //     // Begin building an object to contain our API call's query parameters
// //     // Set the API key
// //     var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M" };
  
// //     // Grab text the user typed into the search input, add to the queryParams object
// //     queryParams.q = $("#search-term")
// //       .val()
// //       .trim();

// //     // Logging the URL so we have access to it for troubleshooting
// //     console.log("---------------\nURL: " + queryURL + "\n---------------");
// //     console.log(queryURL + $.param(queryParams));
// //     return queryURL + $.param(queryParams);
// //   }

// VARIABLES/ARRAYS
// cartoons topics
let topics = ["Simpsons", "Akira", "Code Gease"];


// Your app should take the topics in this array and create buttons in your HTML.


//FUNCTIONS

// Creates a button for each topic
window.onload = function(){
    for(i=0;i<topics.length;i++){
        let createButtons = document.createElement(`button`);
        createButtons.id = `button${i}${topics[i]}`;
        createButtons.className = `topic-button`;
        createButtons.setAttribute(`value`,`${topics[i]}`);
        document.getElementById("buttonContainer").appendChild(createButtons);
        document.getElementById(`button${i}${topics[i]}`).innerHTML = `${topics[i]}`;    
    }
};


// On submit code
document.getElementById("submit").onclick = function(){
    let userInput = document.getElementById("search-term").value;
    

    

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