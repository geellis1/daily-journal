// fetch("http://localhost:3000/journalEntries") // Fetch from the API
//     .then(journalEntries => journalEntries.json())  // Parse as JSON
//     .then(parsedJournalEntries => {
//         renderJournalEntries(parsedJournalEntries)
//         });


    
const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/journalEntries")
            .then(response => response.json())
    }
}