const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
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
    })

    return Posts
}