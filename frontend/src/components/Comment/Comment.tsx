import { Comment } from "../../types/comment";

type Props = {
  comment: Comment;
};
export default function Comment({ comment }: Props) {
  return <div className="border-2 border-gray-500"></div>;
}
