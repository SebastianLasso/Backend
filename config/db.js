import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurantdb',
  password: 'sebastian',
  port: 5432,
});

export default pool;