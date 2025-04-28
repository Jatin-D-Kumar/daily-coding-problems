
function findDuplicateEmails(emails) {
    const uniqueEmails = new Set();
    const duplicateEmails = new Set();

    for (const email of emails) {
        // Split email into local and domain parts
        let [local, domain] = email.split('@');
        
        // Process the local part: remove dots and ignore characters after '+'
        local = local.split('.').join('').split('+')[0];
        
        // Rebuild the email address
        const processedEmail = `${local}@${domain}`;
        
        // Check for duplicates
        if (uniqueEmails.has(processedEmail)) {
            duplicateEmails.add(processedEmail);
        } else {
            uniqueEmails.add(processedEmail);
        }
    }

    return Array.from(duplicateEmails);
}

// Example usage:
const emailList = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob@leetcode.com",
    "testemail@leetcode.com",
    "test.email@leetcode.com",
    "testemail+alex@leetcode.com"
];

const duplicates = findDuplicateEmails(emailList);
console.log(duplicates);
