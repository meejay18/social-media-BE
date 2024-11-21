import { Request, Response } from "express";
import commentModel from "../model/commentModel";

// export const userComment = async (req: Request, res: Response) => {
//   try {
//     const { userID } = req.params;
//     const commentId = await commentModel.findById(userID);

//     return res.status(201).json({
//       message: "user found ",
//       data: commentId,
//     });
//   } catch (Error) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }
// };

export const createComment = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  const { message } = req.body;

  try {
    const comment = await commentModel.findById(commentId);

    if (!comment) {
      return res.status(500).json({
        message: "Message content is required",
      });
    }

    if (comment) {
      comment.message.push(message);
    } else {
      return res.status(500).json({
        message: "Comment not found",
      });
    }
    await comment?.save();

    return res.status(201).json({
      message: "Comment created Successfully",
      data: message,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Couldnt create comment",
    });
  }
};
