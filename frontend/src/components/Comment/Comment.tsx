import { Comment } from "../../types/comment";
import IconDislike from "../Icons/IconDislike";
import IconLike from "../Icons/IconLike";

type Props = {
  comment: Comment;
};
export default function Comment({ comment }: Props) {
  return (
    <div className="border-2 border-gray-500 p-1 rounded-md">
      {comment.content}
      <div className="flex justify-end items-center">
        {comment.likes < 0 ? <IconLike /> : <IconDislike />}
        {comment.likes}
      </div>
    </div>
  );
}
