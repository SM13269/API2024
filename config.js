import { config } from "dotenv";
config()

export const BD_HOST=process.env.BD_HOST || localhost
export const BD_DATABASE=process.env.BD_DATABASE|| db_curso20242
export const DB_USER=process.env.DB_USER|| root
export const BD_PASSWORD=process.env.BD_PASSWORD|| ''
export const BD_PORT=process.env.BD_PORT|| 3306
export const PORT=process.env.PORT|| 3000
export const JWT_SECRET = process.env.JWT_SECRET || '192021'