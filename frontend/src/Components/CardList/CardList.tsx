import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";
import { GiNightSleep } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import Spinner from "../Spinner/Spinner";

interface Props {
  loading: boolean;
  searchResult: CompanySearch[] | null;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({
  loading,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div className="flex-1 flex flex-col w-full h-full overflow-auto">
      {loading ? (
        <div className="m-auto text-slate-500">
          <Spinner />
        </div>
      ) : !searchResult ? (
        <div className="m-auto font-semibold md:text-md text-slate-500">
          <IoIosSearch className="text-5xl mb-7 text-center w-full" />
          Type in the search bar above to get started.
        </div>
      ) : searchResult.length > 0 ? (
        searchResult.map((result: CompanySearch) => (
          <Card
            id={result.symbol}
            key={uuidv4()}
            searchResult={result}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <div className="m-auto font-semibold md:text-md text-slate-500">
          <GiNightSleep className="text-5xl mb-7 text-center w-full" />
          We searched far and wide but could not find anything. Please try
          something else.
        </div>
      )}
    </div>
  );
};

export default CardList;
