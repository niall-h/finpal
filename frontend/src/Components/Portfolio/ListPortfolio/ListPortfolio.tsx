import React, { SyntheticEvent } from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio overflow-auto">
      <h2 className="mb-3 mt-7 text-xl font-semibold text-center md:text-2xl">
        My Portfolio
      </h2>
      <div className="relative flex flex-col items-center">
        <>
          {portfolioValues.length > 0 ? (
            portfolioValues.map((value: PortfolioGet) => (
              <CardPortfolio
                portfolioValue={value}
                onPortfolioDelete={onPortfolioDelete}
              />
            ))
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              Your portfolio is empty.
            </h3>
          )}
        </>
      </div>
    </section>
  );
};

export default ListPortfolio;
