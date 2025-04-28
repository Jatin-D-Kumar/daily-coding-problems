
function findDuplicateEmails(emails) {
    const uniqueEmails = new Set();
    const duplicateEmails = new Set();

    for (const email of emails) {
        // Split email into local and domain parts
        let [local, domain] = email.split('@');
        
        // Process the local part: remove dots and ignore characters after '+'
        local = local.split('.').join('').split('+')[0];
        
        // Re