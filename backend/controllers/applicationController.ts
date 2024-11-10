import { Application } from "../models";
import { Request, Response, NextFunction } from "express";
import { TApplication } from "../types";
import { catchAsync, AppError } from "../utils";

// get all applications
const getAllApplications = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const applications: TApplication[] = await Application.find().populate(
      "job"
    );
    if (!applications) {
      return next(new AppError("No applications found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "All applications",
      data: applications,
    });
  }
);

// get single application
const getApplication = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const application: TApplication | null = await Application.findById(
      req.params.id
    );
    if (!application) {
      return next(new AppError("No application found", 404));
    }
    res
      .status(200)
      .json({ application, success: true, message: "Application found 🔥" });
  }
);

// add application
const createApplication = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { applicant, job, status, resumeLink }: TApplication = req.body;

    const application = await Application.create({
      applicant,
      job,
      status,
      resumeLink,
    });

    if (!application) {
      return next(new AppError("Application not created", 400));
    }

    res.status(201).json({
      status: "success",
      message: "Application created successfully",
      data: application,
    });
  }
);

// update application
const updateApplication = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const application: TApplication | null =
      await Application.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    if (!application) {
      return next(new AppError("No application found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Application updated successfully",
      data: application,
    });
  }
);

// delete application
const deleteApplication = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const deletedApplication: TApplication | null =
      await Application.findByIdAndDelete(req.params.id);

    if (!deletedApplication) {
      return next(new AppError("Application not found", 404));
    }

    res.status(200).json({
      message: "Application deleted",
      application: deletedApplication,
      success: true,
    });
  }
);

export {
  getAllApplications,
  getApplication,
  createApplication,
  updateApplication,
  deleteApplication,
};
