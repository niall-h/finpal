import { useEffect, useState } from "react";
import { CompanyTenK } from "../../company";
import { getTenK } from "../../api";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import Spinner from "../Spinner/Spinner";

interface Props {
  ticker: string;
}

const TenKFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyTenK[]>();
  const [serverError, setServerError] = useState<string | null>();

  useEffect(() => {
    const getTenKData = async () => {
      const result = await getTenK(ticker!);

      if (typeof result === "string") {
        setServerError(result);
      } else if (Array.isArray(result?.data)) {
        setCompanyData(result.data);
      }
    };

    getTenKData();
  }, []);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TenKFinder;
