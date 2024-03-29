const pool = require('./database')

exports.todosDB = async(req, res) => {
    try {
        const user_Email = req.params.userEmail

        const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [user_Email])
        res.json(todos.rows)
    } catch (error) {
        console.log(error)
    }
}

