const pool = require("../config/db");

module.exports = {
   getUserAccounts:async(customer_id) =>{
    const result = await pool.query(
      "SELECT a.*, c.name FROM accounts a JOIN customers c ON a.customer_id = c.customer_id WHERE a.customer_id = $1",
      [customer_id]
    );
    return result;
  },
};
