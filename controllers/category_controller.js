const db = require("../db");

class CategoryController {
  async createCategory(req, res) {
    const { name } = req.body;
    const newCategory = await db.query(`INSERT INTO categories (name) values ($1) RETURNING * `, [name]);
    res.json(newCategory.rows[0]);
  }
  async getCategories(req, res) {
    const categories = await db.query('SELECT * FROM categories');
    res.json(categories.rows);
  }
  async getOneCategory(req, res) {
    const id = req.params.id;
    const category = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
    res.json(category.rows[0]);
  }
  async updateCategory(req, res) {
    const { id, name } = req.body;
    const category = await db.query(`UPDATE categories SET name = $1 WHERE id = $2 RETURNING * `, [name, id]);
    res.json(category.rows[0]);
  }
  async deleteCategory(req, res) {
    const id = req.params.id;
    const category = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    res.json(category.rows);
  }
}

module.exports = new CategoryController();