const pool = require("../../config/database");

module.exports = {
  getUsers: (callBack) => {
    pool.query(
      `SELECT id, firstname, lastname, gender, email FROM users`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  addUser: (data, callBack) => {
    pool.query(
      `INSERT INTO users (firstname, lastname, gender, email, password) VALUES (?, ?, ?, ?, ?)`,
      [data.firstname, data.lastname, data.gender, data.email, data.password],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  userGetById: (id, callBack) => {
    pool.query(
      `SELECT id, firstname, lastname, gender, email FROM users WHERE id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  userUpdate: (data, callBack) => {
    pool.query(
      `UPDATE users SET firstname=?, lastname=?, gender=?, email=?, password=? WHERE id = ?`,
      [
        data.firstname,
        data.lastname,
        data.gender,
        data.email,
        data.password,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  userDelete: (id, callback) => {
    pool.query(`DELETE FROM users WHERE id=?`, [id], (err, result) => {
      if (err) {
        console.error(`Error executing SQL query: ${err}`);
        return callback(err);
      }
      if (result.affectedRows === 0) {
        // No rows were affected, meaning the resource with the given id was not found.
        // console.warn(`No rows affected. Resource with id=${id} not found.`);
        return callback(null, null);
      }
      // Rows were affected, indicating successful deletion.
      // console.log(`Resource with id=${id} successfully deleted.`);
      return callback(null, result);
    });
  },
};
