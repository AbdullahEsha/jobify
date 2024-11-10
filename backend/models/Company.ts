import mongoose from "mongoose";
import { TCompany } from "../types";

const { Schema, model } = mongoose;

const companySchema = new Schema<TCompany>(
  {
    name: {
      type: String,
      required: [true, "Please add a company name"],
      trim: true,
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    location: {
      type: String,
      required: [true, "Please add a location"],
      trim: true,
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    industry: {
      type: String,
      required: [true, "Please specify the industry"],
      trim: true,
    },
    website: {
      type: String,
      validate: {
        validator: function (url: string) {
          return /^(https?:\/\/)?([\w\-])+\.{1}([a-z]{2,63})([\/\w\-]*)*\/?$/.test(
            url
          );
        },
        message: "Please enter a valid URL",
      },
    },
    jobs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Company = model("Company", companySchema);
