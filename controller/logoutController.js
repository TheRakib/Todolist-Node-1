
const signOut = (req, res) => {
    console.log('ät skit');
    res.clearCookie("jwtToken").redirect('/');
}

module.exports = {
    signOut
}