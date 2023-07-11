module.exports = {
  username: 'cnxdevs_dev_ci',
  password: '#7O5rd80r',
  dbName: 'cnxdevs_dev_ci',
  host: 'ns33.1baht.net',
  port: 2433,
  logging: false,
  dialect: 'mssql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};