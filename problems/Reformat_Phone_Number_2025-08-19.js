
function reformatPhoneNumber(phone) {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    let result = '';
    l