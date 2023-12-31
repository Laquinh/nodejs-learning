const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer SET ?', [data], (err, customer) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    console.log("edit");
    const {id} = req.params;
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            if (err) {
                res.json(err);
            }
            console.log(customer[0]);
            res.render('customer_edit', {
                data: customer[0]
            });
        });
    });
};

controller.update = (req, res) => {
    console.log("update");
    const {id} = req.params;
    const newCustomer = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE customer SET ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;