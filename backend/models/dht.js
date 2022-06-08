import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Dht = db.define('sensor',{
    ph:{
        type: DataTypes.NUMBER
    },
    suhuair:{
        type: DataTypes.NUMBER
    },
    waktu:{
        type: DataTypes.NUMBER
    },
    testing:{
        type: DataTypes.STRING
    }

},{
    freezeTableName: true
});

export default Dht;