
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
            duplicateEmails.add(processedE