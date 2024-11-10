import dotenv from "dotenv";

//env
dotenv.config();

// port env
const PORT = process.env.PORT;
const SOCKET_PORT = process.env.SOCKET_PORT;

// mongo db env
const MONGO_DB_URL = process.env.MONGO_DB_URL;

// node env
const NODE_ENV = process.env.NODE_ENV;

// JWT env
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

// export all env variables
export {
  MONGO_DB_URL,
  PORT,
  SOCKET_PORT,
  NODE_ENV,
  JWT_SECRET,
  JWT_EXPIRES_IN,
};
