import StockCommentForm from "./StockCommentForm/StockCommentForm";

interface Props {
  stockSymbol: string;
}

const StockComment = ({ stockSymbol }: Props) => {
  return <StockCommentForm />;
};

export default StockComment;
