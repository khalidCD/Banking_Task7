const custdb = require("../models/custdb");
// recieve the data from script and sned it to do for searching
module.exports = {
  login: async (req, res) => {
    try {
      const { customer_id, password } = req.body;
      const customer = await custdb.validateCustomer(customer_id, password);

      if (!customer) {
        return res.status(401).json({
          success: false,
          message: "Invalid Customer ID or Password",
        });
      }

      res.json({
        success: true,
        customer_id: customer.customer_id,
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Server error" });
    }
  },
};
