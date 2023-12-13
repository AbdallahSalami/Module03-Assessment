export const createArticleModel = (sequelize, DataTypes) => {
    const Article = sequelize.define("Article", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        authorName: {
            type: DataTypes.STRING,
            allowNull: false,
      
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,

        },

    }, {
        timestamps: false
    });
    return Article;
};
