const makeJournalEntryComponent = (entryObj) => {
    let newJournalObj = `
    <article>
    <title>${entryObj.conceptsTitle}</title>
    <p>${entryObj.entryDate}</p>
    <p>${entryObj.longForm}</p>
    <p>${entryObj.mood}</p>
</article>
`;
return newJournalObj;   
};

