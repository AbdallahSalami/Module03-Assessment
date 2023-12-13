// dbConfig.js
export const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "testTwo",
    PORT:"3308",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,     
        acquire: 30000,
        idle: 10000
    }
};