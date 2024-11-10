import mongoose from "mongoose";
import { TUser } from "../types";
import { isEmail } from "validator";

const { Schema, model } = mongoose;

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      select: false,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "superadmin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// email should contain @ and .
// also check if email already exists in db before saving it. if it does, throw error.
userSchema.path("email").validate(async (email: string) => {
  if (!email.includes("@") || !email.includes(".")) {
    return "Email should contain '@' and '.'";
  } else if (await User.exists({ email })) {
    return "Email already exists";
  }
});

export const User = model<TUser>("User", userSchema);
