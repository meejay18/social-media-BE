import { Request, Response } from "express";
import commentModel from "../model/commentModel";

export const userComment = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const commentId = await commentModel.findById(userID);

    return res.status(201).json({
      message: "user found ",
      data: commentId,
    });
  } catch (Error) {
    return res.status(404).json({
      message: "User not found",
    });
  }
};

export const commentmessage = async (req: Request, res: Response) => {
  try {
    const { message, userId } = req.body;

    const comment = await commentModel.findById(userId);
    comment?.save();

    return res.status(201).json({
      message: "Comment created Successfully",
      data: message,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Couldnt create message",
    });
  }
};
