import React, { SyntheticEvent } from "react";
import { CiCircleRemove } from "react-icons/ci";

interface Props {
  portfolioValue: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const DeletePortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} readOnly={true} />
        <button type="submit" className="">
          <CiCircleRemove className="text-4xl text-red-600 hover:text-red-800" />
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
