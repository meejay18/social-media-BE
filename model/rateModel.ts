import model from "express";
import { Schema, Document } from "mongoose";

interface iRate {
  userId: {};
  commentId: {};
  value: number;
}

interface iRateData extends iRate, Document {}

export const rateModel = new Schema<iRateData>(
  {
    userId: {
      type: {},
      required: true,
    },
    commentId: {
      type: {},
      required: true,
    },
    value: {
      type: Number,
    },
  },
  { timestamps: true }
);
