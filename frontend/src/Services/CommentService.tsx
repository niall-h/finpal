import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { CommentGet, CommentPost } from "../Models/Comment";

const api = "http://localhost:5128/api/comment/";

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(`${api}${symbol}`, {
      title: title,
      content: content,
    });

    return data;
  } catch (e) {
    handleError(e);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(
      `${api}?Symbol=${symbol}&IsDescending=true`
    );
    return data;
  } catch (e) {
    handleError(e);
  }
};
