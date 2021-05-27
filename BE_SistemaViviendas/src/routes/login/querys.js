function queryLogin(userName, password) {
    return `SELECT * FROM Usuario WHERE nombre='${userName}' and pass='${password}'`;
}

module.exports = {
    queryLogin
}