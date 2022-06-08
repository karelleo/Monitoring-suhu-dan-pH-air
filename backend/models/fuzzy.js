import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Dht from "./dht.js";

const { DataTypes } = Sequelize;

const DhtFuzzy = db.define('dhtfuzzy', {
    dht_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Dht,
            key: 'id'
        }
    },
    suhubawah: {
        type: DataTypes.FLOAT,
    },
    suhunormal: {
        type: DataTypes.FLOAT,
    },
    suhuatas: {
        type: DataTypes.FLOAT,
    },
    asam: {
        type: DataTypes.FLOAT,
    },
    netral: {
        type: DataTypes.FLOAT,
    },
    basa: {
        type: DataTypes.FLOAT,
    },
}, {
    freezeTableName: true
});

DhtFuzzy.belongsTo(Dht, {
    foreignKey: 'dht_id',
    targetKey: 'id'
});

Dht.hasOne(DhtFuzzy, {
    foreignKey: 'dht_id',
    targetKey: 'id'
});

export default DhtFuzzy;