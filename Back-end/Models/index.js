import { dbConfig } from "../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import { createArticleModel } from './ArticleModel.js';
import { createUserModel } from './UserModel.js ';
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("connected to the database");
    })
    .catch(error => {
        console.error("error connecting: " + error);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Articles = createArticleModel(sequelize, DataTypes);
db.Users = createUserModel(sequelize, DataTypes);


db.sequelize.sync({ force: false })
    .then(() => {
        console.log("Database synchronization done!");
    });

export { db};