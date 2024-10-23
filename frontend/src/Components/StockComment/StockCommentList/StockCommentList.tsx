import { CommentGet } from "../../../Models/Comment";
import StockCommentListItem from "./StockCommentListItem/StockCommentListItem";

interface Props {
  comments: CommentGet[];
}

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments
        ? comments.map((comment: CommentGet) => (
            <StockCommentListItem comment={comment} />
          ))
        : null}
    </>
  );
};

export default StockCommentList;
