import myObject from "./entriesDOM.js"
import API from "./data.js"
import renderJournalEntries from "./entriesDOM.js"

API.getJournalEntries().then(renderJournalEntries)




/* because the import is bringing in functions you have to call
the two functions on the file that you are importing them into for example
below

myObject.newFunction()
myObject.oldFunction()

*/

