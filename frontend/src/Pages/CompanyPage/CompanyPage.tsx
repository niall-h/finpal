import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/Dashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();
  const [serverError, setServerError] = useState<string | null>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);

      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result.data)) {
        setCompany(result.data[0]);
      }
    };
    getProfileInit();
  }, []);

  return (
    <>
      {serverError ? (
        <div className="w-full text-center">{serverError}</div>
      ) : company ? (
        <div className="w-full container relative flex ct-docs-disable-sidebar-content">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subtitle={company.companyName} />
            <Tile title="Price" subtitle={`$${company.price.toString()}`} />
            <Tile title="Sector" subtitle={company.sector} />
            <Tile
              title="DCF"
              subtitle={`$${company.dcf.toFixed(2).toString()}`}
            />
            <TenKFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium text-gray-500 p-3 mt-4 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <div className="w-full text-center">Loading</div>
      )}
    </>
  );
};

export default CompanyPage;
