import { toast } from "react-toastify";
import { commentGetAPI, commentPostAPI } from "../../Services/CommentService";
import StockCommentForm, {
  CommentFormInputs,
} from "./StockCommentForm/StockCommentForm";
import { useEffect, useState } from "react";
import { CommentGet } from "../../Models/Comment";
import Spinner from "../Spinner/Spinner";
import StockCommentList from "./StockCommentList/StockCommentList";

interface Props {
  stockSymbol: string;
}

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (e: CommentFormInputs) => {
    commentPostAPI(e.title, e.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success("Comment created successfully!");
          getComments();
        }
      })
      .catch((e) => {
        toast.warning(e);
      });
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol).then((res) => {
      setLoading(false);
      setComments(res?.data!);
    });
  };

  return (
    <div className="flex flex-col">
      <p className="ml-3 mb-2 text-md">Comments:</p>
      <div className="h-64 overflow-auto">
        {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      </div>
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
