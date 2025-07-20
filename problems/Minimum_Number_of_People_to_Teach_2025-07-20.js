
function minPeopleToTeach(lang, knowledge) {
    let knownLanguages = new Set();
    
    // Gather all known languages from the people
    for (const langs of knowledge) {
        for (const l of langs) {
            knownLanguages.add(l);
        }
    }
    
    let peopleToTeach = 0;

    // Determine which people need to be taught
    for (const langs of knowledge) {
        let needsTeaching = false;
        for (const desiredLang of lang) {
            if (!knownLanguages.has(desiredLang)) {
                needsTeaching = true;
                break;
            }
        }
        if (needsTeaching) {
            peopleToTeach++;
        }
    }

    return peopleToTeach;
}

// Example usage:
const languagesToLearn = ['English', 'Spanish', 'French'];
const peopleKnowledge = [
 