module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Products;
};