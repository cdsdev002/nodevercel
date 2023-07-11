"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// ️️️✅ Best Practice: Keep a singleton DB connection pool in a process
let dbConnection;
function getDbConnection() {
    if (!dbConnection) {
        dbConnection = new sequelize_1.Sequelize({
            host: 'ns33.1baht.net',
            database: 'cnxdevs_dev_ci',
            username: 'cnxdevs_dev_ci',
            password: '#7O5rd80r',
            port: 2433,
            timezone: 'Asia/Bangkok',
            dialect: 'mssql',
            logging: true
        });
        //   dbConnection = new Sequelize(
        //     'shop2',
        //     configurationProvider.getValue('DB.userName'),
        //     configurationProvider.getValue('DB.password'),
        //     {
        //       port: 5432,
        //       dialect: 'postgres',
        //       benchmark: true,
        //       logging: (sql: string, duration?: number) => {
        //         logger.info(
        //           `Sequelize operation was just executed in ${duration} ms with sql: ${sql}`
        //         );
        //       },
        //       logQueryParameters: true,
        //       pool: {
        //         max: 10,
        //         min: 0,
        //         acquire: 30000,
        //         idle: 10000,
        //       },
        //     }
        //   );
    }
    return dbConnection;
}
exports.default = getDbConnection;
