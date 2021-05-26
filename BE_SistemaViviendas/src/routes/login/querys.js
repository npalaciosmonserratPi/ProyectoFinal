function queryLogin(userName, password) {
    return query = `SELECT * FROM Usuario WHERE userName=? and password=?`, [userName,password];
}

module.exports = {
    queryLogin
}