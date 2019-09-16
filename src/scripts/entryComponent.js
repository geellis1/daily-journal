const makeJournalEntryComponent = (entryObj) => {
    let newJournalObj = `
    <article>
    <p>${entryObj.conceptsTitle}</p>
    <p>${entryObj.entryDate}</p>
    <p>${entryObj.entryNotes}</p>
    <p>${entryObj.mood}</p>
</article>
`;
return newJournalObj;   
};


export default makeJournalEntryComponent



