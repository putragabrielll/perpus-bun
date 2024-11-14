const db = require('../lib/db.lib');

exports.getAllBooks = async () => {
  const sql = `SELECT * FROM books`;
  const { rows } = await db.query(sql);
  return rows;
}