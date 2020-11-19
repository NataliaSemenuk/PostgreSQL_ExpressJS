const db = require("../db");

class GoodsItemController {
  async createGoodsItem(req, res) {
    const { name, price, category_id, manufacturer_id } = req.body;
    const newGoodsItem = await db.query(`INSERT INTO goods (name, price, category_id, manufacturer_id) values ($1, $2, $3, $4) RETURNING * `, [name, price, category_id, manufacturer_id]);
    res.json(newGoodsItem.rows[0]);
  }
  async getGoodsItems(req, res) {
    const category_id = req.query.category_id;
    const manufacturer_id = req.query.manufacturer_id;
    let goodsItems;
    if (category_id) {
      goodsItems = await db.query('SELECT * FROM goods WHERE category_id = $1', [category_id]);
    } else if (manufacturer_id) {
      goodsItems = await db.query('SELECT * FROM goods WHERE manufacturer_id = $1', [manufacturer_id]);
    } else {
      goodsItems = await db.query('SELECT * FROM goods');
    }

    res.json(goodsItems.rows);
  }
  async getGoodsItem(req, res) {
    const id = req.params.id;
    const goodsItem = await db.query('SELECT * FROM goods WHERE id = $1', [id]);
    res.json(goodsItem.rows[0]);
  }
  async updateGoodsItem(req, res) {
    const { id, name, price, category_id, manufacturer_id } = req.body;
    const goodsItem = await db.query(`UPDATE goods SET name = $1, price = $3, category_id = $4, manufacturer_id = $5 WHERE id = $2 RETURNING * `, [name, id, price, category_id, manufacturer_id]);
    res.json(goodsItem.rows[0]);
  }
  async deleteGoodsItem(req, res) {
    const id = req.params.id;
    const goodsItem = await db.query('DELETE FROM goods WHERE id = $1', [id]);
    res.json(goodsItem.rows);
  }
}

module.exports = new GoodsItemController();