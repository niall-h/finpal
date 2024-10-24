import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import CardList from "../../Components/CardList/CardList";
import Navbar from "../../Components/Navbar/Navbar";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { PortfolioGet } from "../../Models/Portfolio";
import {
  portfolioAddAPI,
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<CompanySearch[] | null>(
    null
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res.data);
        }
      })
      .catch((e) => toast.warning("Count not get portfolio values!"));
  };

  const handleSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    setServerError("");

    if (search === "") {
      setSearchResult(null);
      setLoading(false);
      return;
    }

    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }

    setLoading(false);
  };

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();

    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not create portfolio item");
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();

    portfolioDeleteAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 200) {
          toast.success("Stock deleted from portfolio");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not delete portfolio item");
      });
  };

  return (
    <div className="App flex h-[calc(100vh-110px)] pb-5">
      <div className="basis-2/3 flex flex-col border-2 rounded-xl">
        <Search
          search={search}
          onChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <CardList
          loading={loading}
          searchResult={searchResult}
          onPortfolioCreate={onPortfolioCreate}
        />
      </div>
      <div className="basis-1/3 flex flex-col bg-gray-100 rounded-xl ml-5">
        <ListPortfolio
          portfolioValues={portfolioValues!}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>

      {serverError && <div>Unable to connect to API</div>}
    </div>
  );
};

export default SearchPage;
