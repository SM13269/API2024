import { createPool } from "mysql2/promise";
import{DB_USER,BD_PASSWORD,BD_DATABASE,BD_PORT, BD_HOST} from './config.js'
export const conmysql=createPool({
    host:BD_HOST,
    database:BD_DATABASE,
    user:DB_USER,
    password:BD_PASSWORD,
    port:BD_PORT,
})
