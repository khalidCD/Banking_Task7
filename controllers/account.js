const pool = require('../config/db');

exports.getAccountsByCustomerId = async (req, res) => {
  const { customer_id } = req.params;

  try {
    const result = await pool.query(
      'SELECT a.*, c.name FROM accounts a JOIN customers c ON a.customer_id = c.customer_id WHERE a.customer_id = $1',
      [customer_id]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};
