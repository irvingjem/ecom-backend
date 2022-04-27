// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category ex: One SHoe belongs to Sports  1: 1
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});
// Categories have many Products ex: Sports Category has Shoes, rackets, shorts  1: M
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag) M: M
Product.belongsToMany(Tag, {
        through: ProductTag,
        foreignKey: 'product_id'
    })
    //Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
})

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};