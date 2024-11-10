import { Company } from "../models";
import { Request, Response, NextFunction } from "express";
import { TCompany } from "../types";
import { catchAsync, AppError } from "../utils";

// get all companies
const getAllCompanies = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const companies: TCompany[] = await Company.find();
    if (!companies) {
      return next(new AppError("No companies found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "All companies",
      data: companies,
    });
  }
);

// get single company
const getCompany = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const company: TCompany | null = await Company.findById(req.params.id);
    if (!company) {
      return next(new AppError("No company found", 404));
    }
    res
      .status(200)
      .json({ company, success: true, message: "Company found 🔥" });
  }
);

// add company
const createCompany = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, industry, location, description, jobs, website }: TCompany =
      req.body;

    const company = await Company.create({
      name,
      industry,
      location,
      description,
      jobs,
      website,
    });

    if (!company) {
      return next(new AppError("Company not created", 400));
    }

    res.status(201).json({
      status: "success",
      message: "Company created successfully",
      data: company,
    });
  }
);

// update company
const updateCompany = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const company: TCompany | null = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!company) {
      return next(new AppError("No company found", 404));
    }
    res.status(200).json({
      status: "success",
      message: "Company updated successfully",
      data: company,
    });
  }
);
