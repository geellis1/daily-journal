
const journalEntries = [
    {
        entryDate: "08/13/2019",
        conceptsTitle: "html",
        longForm: "Today we learned the very basics of html",
        mood: "pumped",
    },
    {
        entryDate: "",
        conceptsTitle: "",
        longForm: "",
        mood: "",
    }
];

console.log(journalEntries);


const makeJournalEntryComponent = (item) => {
    return `<div>
    <title>${item.conceptsTitle}</title>
    <p>${item.entryDate}</p>
    <p>${item.longForm}</p>
    <p>${item.mood}</p>
</div>`   
}

const entryInfo = document.querySelector("#container")

for (let i = 0; i < journalEntries.length; i++) {
    entryInfo.innerHTML += makeJournalEntryComponent(journalEntries[i])
    };
