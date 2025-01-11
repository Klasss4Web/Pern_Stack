// const Pool = require("pg").Pool;
import Pool from 'pg';
const PoolInst = Pool.Pool;

const pool = new PoolInst({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// module.exports = pool;
export default pool;
