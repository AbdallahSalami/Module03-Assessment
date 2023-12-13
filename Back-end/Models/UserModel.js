import bcrypt from "bcrypt"
export const createUserModel = (sequelize, DataTypes) => {
    const User = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    } ,
    {
    timestamps: false
    });
    User.comparePassword = async function (pass,passdb) {
        return await bcrypt.compare(pass,passdb)      };
    return User;
};
