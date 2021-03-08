
const signOut = (req, res) => {
    res.clearCookie("jwtToken").redirect('/');
}

module.exports = {
    signOut
}