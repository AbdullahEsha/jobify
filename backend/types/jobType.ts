import mongoose from "mongoose";

export type TJob = {
  _id?: string;
  title: string;
  description: string;
  salaryRange: {
    min: number;
    max: number;
  };
  location: string;
  experienceLevel: "Entry" | "Mid" | "Senior";
  company: mongoose.Types.ObjectId;
  postedBy: mongoose.Types.ObjectId;
  tags?: string[];
  status?: "open" | "closed";
  expiredAt?: Date;
  updatedAt?: Date;
  createdAt?: Date;
};
