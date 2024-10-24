import moment from "moment";
import { CommentGet } from "../../../../Models/Comment";

interface Props {
  comment: CommentGet;
}

const StockCommentListItem = ({ comment }: Props) => {
  const date = new Date(comment.createdOn);
  console.log(date);

  return (
    <div className="relative grid grid-cols-1 gap-4 p-3 w-full border-t bg-white">
      <div className="relative flex gap-4">
        <div className="flex flex-col w-full">
          <p className="text-gray-500 text-sm">
            @{comment.createdBy}, {moment(date).fromNow()}:
          </p>
          <div className="flex flex-row justify-between">
            <p className="relative text-md whitespace-nowrap truncate overflow-hidden">
              {comment.title}
            </p>
          </div>
        </div>
      </div>
      <p className="-mt-4 text-sm font-normal">{comment.content}</p>
    </div>
  );
};

export default StockCommentListItem;
