import { Response, Request } from "express";

export const createReply = async (req: Request, res: Response) => {
  try {
    const { message, userId, commentId } = req.body;
  } catch (error) {}
};
