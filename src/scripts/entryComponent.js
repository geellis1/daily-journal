const makeJournalEntryComponent = (item) => {
    return `<div>
    <title>${item.conceptsTitle}</title>
    <p>${item.entryDate}</p>
    <p>${item.longForm}</p>
    <p>${item.mood}</p>
</div>`   
}