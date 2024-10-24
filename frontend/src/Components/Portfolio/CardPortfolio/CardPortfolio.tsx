import React, { SyntheticEvent } from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-3 w-full my-2 rounded-lg border-2 bg-slate-200">
      <div>
        <Link
          to={`/company/${portfolioValue.symbol}/company-profile`}
          className="text-md font-bold hover:underline"
        >
          <div className="text-black">{portfolioValue.symbol}</div>
          <div className="text-slate-500">{portfolioValue.companyName}</div>
        </Link>
      </div>
      <DeletePortfolio
        portfolioValue={portfolioValue.symbol}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;
