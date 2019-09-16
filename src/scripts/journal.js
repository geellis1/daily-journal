import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

/*this a fetch call that is going to display prior entries to the dom before inputting further 
entries*/ 

API.getJournalEntries().then(renderJournalEntries)

// Event listener for the 'create new journal entry' button
document.querySelector(".submit").addEventListener("click", () => {

/*Needs to get values of the inputs/dropdowns and then they are stored in variables defined
below to use later */
    const journalDate = document.querySelector("#journalDate").value;
    const conceptsCovered = document.querySelector("#concepts").value;
    const entryNotes = document.querySelector("#entryID").value;
    const journalMood = document.querySelector("#mood").value;
    
    if (journalDate === "" || conceptsCovered === "" || entryNotes === "" || journalMood === "") {
        alert("All fields are required");
    }
    if (conceptsCovered.includes("@", "#", "$", "%") || entryNotes.includes("@", "#", "$", "%")) {
        alert("You cannot use this character");
    }
   
console.log(journalDate);

/* Factory Function and the key name below has to match the key name in entries.json file 
and the value has to match what is defined in factory function below */
const newJournalEntry = (journalDate, conceptsCovered, entryNotes, journalMood) => {
    const newJournalEntry = {
        entryDate: journalDate,
        conceptsTitle: conceptsCovered,
        entryNotes: entryNotes,
        mood: journalMood
}
        return newJournalEntry
    }


//this object is the actual object that is formed from the values of the input fields//

const newJournalEntryObj = newJournalEntry(journalDate, conceptsCovered, entryNotes, journalMood)

/* THE [API] Is referencing the object that contains the "POST" fetch call [.postJournalEntry]
from data.js [newJournalEntryObj] is the variable that contains the information that was
passed through the factory function [newJournalEntry]*/

API.postNewJournalEntry(newJournalEntryObj)
.then(() => {API.getJournalEntries ()
.then(res => renderJournalEntries(res))})  

})



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




