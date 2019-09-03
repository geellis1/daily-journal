const entryInfo = document.querySelector("#container")

for (let i = 0; i < journalEntries.length; i++) {
    entryInfo.innerHTML += makeJournalEntryComponent(journalEntries[i])
    };
