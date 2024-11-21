import { Response, Request } from "express";
import replyModel from "../model/replyModel";
import save from "mongoose";

export const createReply = async (req: Request, res: Response) => {
  const { message, userId, commentId } = req.body;
  try {
    const reply = await replyModel.findByIdAndUpdate(
      message,
      userId,
      commentId
    );
    // await reply?.save();

    return res.status(201).json({
      message: "reply created successfully",
      data: reply,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error creating reply",
    });
  }
};
