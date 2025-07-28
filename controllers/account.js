const pool = require("../config/db");
const { getUserAccounts } = require("../models/accdb");

module.exports = {
  getAccountsByCustomerId: async (req, res) => {
    const { customer_id } = req.params;
    console.log(req.params)

    try {
      const result = await getUserAccounts(customer_id);

      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: "Database error" });
    }
  },
};
