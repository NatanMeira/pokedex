module.exports = {
  "type": "mysql",
  "host": process.env.MYSQL_HOST,
  "port": 3306,
  "username": process.env.MYSQL_USER ,
  "password": process.env.MYSQL_PASSWORD ,
  "database": process.env.MYSQL_DATABASE,
  "synchronize": false,
  "logging": false,
  "entities": [
    "src/app/models/**/*.ts"
  ],
  "migrations": [
    "src/database/migrations/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/app/models",
    "migrationsDir": "src/database/migrations"
  }
}
