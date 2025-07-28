const pool = require('../config/db');

module.exports = {
    async validateCustomer(customer_id, password) {
        const result = await pool.query(
            'SELECT customer_id FROM customers WHERE customer_id = $1 AND password = $2', //the req from controller  ,like user req is recieve here and check db for valid custid and apss
            [customer_id, password]
        );
        return result.rows[0];
    }
};

