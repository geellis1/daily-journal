
import makeJournalEntryComponent from "./entryComponent.js"

const entryInfo = document.querySelector(".entryLog")

function renderJournalEntries (journalEntryArray)  {
    for (let i = 0; i < journalEntryArray.length; i++) {
        entryInfo.innerHTML += makeJournalEntryComponent(journalEntryArray[i])
    }
}

export default renderJournalEntries

/* this is an example of an object that contains multiple functions if you would 
need to export multiple functions, then you would put them in an object like below

const myObject ={
    newFunction: () => {
        console.log("yay")
    },
    oldFunction: () => {
        console.log("boo")
    },
    renderJournalEntries2: (journalEntryArray) => {
        for (let i = 0; i < journalEntryArray.length; i++) {
            entryInfo.innerHTML += makeJournalEntryComponent(journalEntryArray[i])
        }
    }
}
*/


