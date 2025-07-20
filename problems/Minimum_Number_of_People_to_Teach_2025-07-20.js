
function minPeopleToTeach(lang, knowledge) {
    let knownLanguages = new Set();
    
    // Gather all known languages from the people
    for (const langs of knowledge) {
        for (const l of langs) {
            knownLang