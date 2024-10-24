import { CommentGet } from "../../../Models/Comment";
import StockCommentListItem from "./StockCommentListItem/StockCommentListItem";

interface Props {
  comments: CommentGet[];
}

const StockCommentList = ({ comments }: Props) => {
  return (
    <div className="h-full overflow-auto flex flex-col-reverse">
      {comments
        ? comments.map((comment: CommentGet) => (
            <StockCommentListItem comment={comment} />
          ))
        : null}
    </div>
  );
};

export default StockCommentList;
