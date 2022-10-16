const new_account_email = function(link){
    const subject =
    'Your NSK Account Credentials'

    const text = 
    'You are receiving this because you or someone else requested an account at NSK Web Portal.\n\n' +
    'Please set up your password using this link:\n\n' +
    link + '\n\n' +
    'If you did not request this, please ignore this email.\n'

    return {text, subject}
}

module.exports = {
    new_account_email,
}