
function reformatPhoneNumber(phone) {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    let result = '';
    let i = 0;

    while (i < digits.length) {
        const remainingDigits = digits.length - i;

        // If there are 4 digits left, we need to spli