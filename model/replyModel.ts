import { Schema, Document, Types, model } from "mongoose";

interface iReply {
  message: string;
  createdAt: Date;
  userId: {};
  commentId: {};
}

interface iReplyData extends iReply, Document {}

const replyModel = new Schema<iReplyData>(
  {
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
    },
    userId: {
      type: Types.ObjectId,
      ref: "users",
    },
    commentId: {
      type: Types.ObjectId,
      ref: "comments",
    },
  },
  { timestamps: true }
);

export default model<iReplyData>("replies", replyModel);
