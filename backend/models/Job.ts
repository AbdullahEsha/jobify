import mongoose from "mongoose";
import { TJob } from "../types";

const { Schema, model } = mongoose;

const jobSchema = new Schema<TJob>(
  {
    title: {
      type: String,
      required: [true, "Please add a job title"],
      trim: true,
      maxlength: [100, "Job title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please add a job description"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    salaryRange: {
      min: {
        type: Number,
        required: [true, "Please specify the minimum salary"],
      },
      max: {
        type: Number,
        required: [true, "Please specify the maximum salary"],
      },
    },
    location: {
      type: String,
      required: [true, "Please specify the job location"],
    },
    experienceLevel: {
      type: String,
      enum: ["Entry", "Mid", "Senior"],
      required: [true, "Please specify the experience level"],
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [String],
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
    expiredAt: {
      type: Date,
      required: [true, "Please specify the expiry date"],
    },
  },
  {
    timestamps: true,
  }
);

export const Job = model("Job", jobSchema);
