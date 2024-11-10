import { Job } from "../models";
import { Request, Response, NextFunction } from "express";
import { TJob } from "../types";
import { catchAsync, AppError } from "../utils";

// get all jobs
const getAllJobs = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const jobs: TJob[] = await Job.find().populate("company");
    if (!jobs) {
      return next(new AppError("No jobs found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "All jobs",
      data: jobs,
    });
  }
);

// get single job
const getJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const job: TJob | null = await Job.findById(req.params.id);
    if (!job) {
      return next(new AppError("No job found", 404));
    }
    res.status(200).json({ job, success: true, message: "Job found 🔥" });
  }
);

// add job
const createJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      title,
      description,
      company,
      experienceLevel,
      location,
      postedBy,
      salaryRange,
      tags,
      expiredAt,
      status,
    }: TJob = req.body;

    const job = await Job.create({
      title,
      description,
      company,
      experienceLevel,
      location,
      postedBy,
      salaryRange,
      tags,
      expiredAt,
      status,
    });

    if (!job) {
      return next(new AppError("Job not created", 400));
    }

    res.status(201).json({
      status: "success",
      message: "Job created successfully",
      data: job,
    });
  }
);

// update job
const updateJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const job: TJob | null = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!job) {
      return next(new AppError("Job not found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Job updated successfully",
      data: job,
    });
  }
);

// delete job
const deleteJob = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const job: TJob | null = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return next(new AppError("Job not found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Job deleted successfully",
    });
  }
);

export { getAllJobs, getJob, createJob, updateJob, deleteJob };
