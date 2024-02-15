const pool = require("../../config/database");

module.exports = {
  register: (data, callBack) => {
    pool.query(
      `INSERT INTO users(firstname, lastname, gender, email, password) values (?,?,?,?,?)`,
      [data.firstname, data.lastname, data.gender, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
