//QUERYS    

function queryLogin(userLogin) {
    return query = `SELECT * FROM users WHERE userName = '${userLogin.userName}' and password = '${userLogin.password}'`;
}

module.exports = {
    queryLogin
}