import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import CardList from "../../Components/CardList/CardList";
import Navbar from "../../Components/Navbar/Navbar";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setServerError("");
    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();

    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;

    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();

    const updatedPortfolio = portfolioValues.filter(
      (value) => value !== e.target[0].value
    );
    setPortfolioValues(updatedPortfolio);
  };

  return (
    <div className="App">
      <Search
        search={search}
        onChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
};

export default SearchPage;
