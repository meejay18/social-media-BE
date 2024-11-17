import { Schema, Types, Document, model } from "mongoose";

interface iComment {
  message: string;
  userId: {};
  replies: Array<{}>;
  createdAt: Date;
}

interface iCommentData extends iComment, Document {}

const commentModel = new Schema<iCommentData>(
  {
    message: {
      type: String,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
    },
    replies: [
      {
        type: Types.ObjectId,
        ref: "replies",
        default: [],
      },
    ],
    createdAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default model<iCommentData>("comments", commentModel);
