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
      <div className="flex justify-end items-center gap-2">
        {comment.likes >= 0 ? (
          <IconLike className="cursor-pointer hover:text-blue-500 transition-colors duration-150" />
        ) : (
          <IconDislike className="cursor-pointer hover:text-blue-500 transition-colors duration-150" />
        )}
        {comment.likes}
      </div>
    </div>
  );
}
