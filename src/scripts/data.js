fetch() // Fetch from the API
    .then(journalEntries => journalEntries.json())  // Parse as JSON
    .then(parsedJournalEntries => {
        console.table(parsedJournalEntries)
        // What should happen when we finally have the array?
    })

    
    const API = {
        getJournalEntries () {
            return fetch("http://localhost:3000/entries")
                .then(response => response.json())
        }
    }