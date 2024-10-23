import React, { SyntheticEvent } from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link
        className="w-full hover:bg-slate-200"
        to={`/company/${searchResult.symbol}/company-profile`}
      >
        <div className="flex font-bold text-center text-black md:text-left text-lg">
          {searchResult.name}{" "}
          <i className="ml-2 text-slate-400">{searchResult.symbol}</i>
        </div>
        <div className="text-black text-sm">
          Currency: {searchResult.currency}
        </div>
        <div className="font-bold text-black text-sm">
          {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </div>
      </Link>

      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

export default Card;
