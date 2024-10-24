import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";
import { CiViewList } from "react-icons/ci";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio" className="h-full w-full">
      <h2 className="w-full mb-10 mt-7 text-xl font-semibold text-center md:text-2xl">
        My Portfolio
      </h2>
      <div className="block mx-6 flex-1 h-5/6 m-auto items-center">
        <div className="w-full h-full flex flex-col overflow-auto border rounded-md p-6 bg-white">
          {portfolioValues.length > 0 ? (
            portfolioValues.map((value: PortfolioGet) => (
              <CardPortfolio
                portfolioValue={value}
                onPortfolioDelete={onPortfolioDelete}
              />
            ))
          ) : (
            <div className="p-10 m-auto text-md font-semibold text-center md:text-md text-slate-500">
              <CiViewList className="text-5xl mb-7 text-center w-full" />
              Your portfolio is currently empty. Use the search bar on the left
              to search and add your favorite stocks.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ListPortfolio;
