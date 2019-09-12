import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

API.getJournalEntries().then(renderJournalEntries)


// Event listener for the 'create new journal entry' button
document.querySelector(".submit").addEventListener("click", () => {

    // 1. needs to get values of the inputs/dropdowns
// they're stored in variables to use later
    const journalDate = document.querySelector("#journalDate").value;
    const conceptsCovered = document.querySelector("#concepts").value;
    const entryNotes = document.querySelector("#entryID").value;
    // const journalMood = document.querySelector("#mood").value;
    
  if (journalDate === "" || conceptsCovered === "" || entryNotes === "" || journalMood === "")
      alert("All fields are required");
}

)

console.log(journalDate);

//     // IT'S LATER
//     // 2. needs to build an entry object
//     const newEntryObj = createNewEntry(name, type, flavor, glaze, toppings)
//     console.log("my new donut pls", newDonutObj)

//     // 3. maybe clear inputs?
//     document.querySelector("#name-input").value = "";

//     // 4. clear donut-container before adding new donut
//     document.querySelector("#donutResults").innerHTML = "";

//     // 5. I need to save donut to the json
//     API.createDonut(newDonutObj).then(() => {


//         // 6. get all the donuts again
//         API.getDonuts().then((allDonuts) => {
//             allDonuts.forEach(donut => {
//                 // 7. needs to send donut to DOM
//                 addDonutToDOM(donut)
//             })
//         })

//     })
// })











/* because the import is bringing in functions you have to call
the two functions on the file that you are importing them into for example
below

myObject.newFunction()
myObject.oldFunction()

*/

