const db = require("../db");

class ManufacturerController {
  async createManufacturer(req, res) {
    const { name, country } = req.body;
    const newManufacturer = await db.query(`INSERT INTO manufacturers (name, country) values ($1, $2) RETURNING * `, [name, country]);
    res.json(newManufacturer.rows[0]);
  }
  async getManufacturers(req, res) {
    const manufacturers = await db.query('SELECT * FROM manufacturers');
    res.json(manufacturers.rows);
  }
  async getOneManufacturer(req, res) {
    const id = req.params.id;
    const manufacturer = await db.query('SELECT * FROM manufacturers WHERE id = $1', [id]);
    res.json(manufacturer.rows[0]);
  }
  async updateManufacturer(req, res) {
    const { id, name, country } = req.body;
    const manufacturer = await db.query(`UPDATE manufacturers SET name = $1, country = $3 WHERE id = $2 RETURNING * `, [name, id, country]);
    res.json(manufacturer.rows[0]);
  }
  async deleteManufacturer(req, res) {
    const id = req.params.id;
    const manufacturer = await db.query('DELETE FROM manufacturers WHERE id = $1', [id]);
    res.json(manufacturer.rows);
  }
}

module.exports = new ManufacturerController();