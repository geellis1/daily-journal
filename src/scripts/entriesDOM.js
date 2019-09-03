const entryInfo = document.querySelector(".entryLog")

function renderJournalEntries (journalEntryArray)  {
    for (let i = 0; i < journalEntryArray.length; i++) {
        entryInfo.innerHTML += makeJournalEntryComponent(journalEntryArray[i])
    }
}

