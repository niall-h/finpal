import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative flex-1 overflow-auto">
      <div className="relative w-full">
        <div className="px-4 md:px-6 mx-auto w-full">
          <div className="w-full">
            <div className="flex flex-wrap w-full">{children}</div>
            <div className="flex flex-wrap w-full">
              <Outlet context={ticker} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
