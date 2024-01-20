import { registerAs } from "@nestjs/config";

export default registerAs('config', () => ({
    mongo: {
        dbName: process.env.MONGO_DB_NAME,
        user: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD,    
    }
}));