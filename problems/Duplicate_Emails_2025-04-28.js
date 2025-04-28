
function findDuplicateEmails(emails) {
    const uniqueEmails = new Set();
    const duplicateEmails = new Set();

    for (const email of emails) {
        // Split email into local and domain parts
       