const Router = require('express');

const router = new Router();
const goodsItemController = require('../controllers/goods_item_controller');

router.post('/goods-item', goodsItemController.createGoodsItem);
router.delete('/goods-item/:id', goodsItemController.deleteGoodsItem);
router.get('/goods-item/:id', goodsItemController.getGoodsItem);
router.get('/goods-item', goodsItemController.getGoodsItems);
router.put('/goods-item', goodsItemController.updateGoodsItem);

module.exports = router;