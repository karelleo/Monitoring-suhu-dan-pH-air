import { Sequelize } from "sequelize";

const db = new Sequelize('monitoringdaya', 'root', '', {
    host: "localhost",
    dialect: "mysql",
});

export default db;