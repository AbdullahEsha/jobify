import mongoose from "mongoose";
import { TDBConn } from "../types";
import { MONGO_DB_URL } from "../envSetup";

//db connection
export const dbConnect = async (): Promise<TDBConn> => {
  try {
    const conn = await mongoose.connect(MONGO_DB_URL as string);
    console.log("MongoDB connection successful: ", conn.connection.host);
    return { isConn: true, conn: conn.connection.host };
  } catch (error) {
    // Catch any potential errors
    const err = error as any;
    console.log("MongoDB connection error: ", err.message);
    return { isConn: false, conn: err.message };
  }
};
