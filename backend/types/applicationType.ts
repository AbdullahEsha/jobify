import mongoose from "mongoose";

export type TApplication = {
  _id?: string;
  job: mongoose.Types.ObjectId;
  applicant: mongoose.Types.ObjectId;
  resumeLink: string;
  status?: "pending" | "reviewed" | "accepted" | "rejected";
  updatedAt?: Date;
  createdAt?: Date;
};
