function queryLogin(userName, password) {
    return `SELECT * FROM USUARIO WHERE nombre='${userName}' and pass='${password}'`;
}

module.exports = {
    queryLogin
}