import mongoose from "mongoose";
import { TApplication } from "../types";

const { Schema, model } = mongoose;

const applicationSchema = new Schema<TApplication>(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    resumeLink: {
      type: String,
      required: [true, "Please add a link to the resume"],
      validate: {
        validator: function (url: string) {
          return /^(https?:\/\/)?([\w\-])+\.{1}([a-z]{2,63})([\/\w\-]*)*\/?$/.test(
            url
          );
        },
        message: "Please enter a valid URL",
      },
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Application = model("Application", applicationSchema);
