const express = require('express');
const categoryRouter = require('./routes/category_routes');
const manufacturerRouter = require('./routes/manufacturer_routes');
const goodsItem = require('./routes/goods_item_routes');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', categoryRouter);
app.use('/api', manufacturerRouter);
app.use('/api', goodsItem);

app.listen(PORT, () => console.log(`server started on port ${PORT}...`));
