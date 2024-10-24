import React from "react";
import { testIncomeStatementData } from "./testData";

interface Props {
  config: any;
  data: any;
}

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any) => (
    <tr key={company.cik}>
      {config.map((val: any) => (
        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
          {val.render(company)}
        </td>
      ))}
    </tr>
  ));

  const renderedHeaders = config.map((config: any) => (
    <th
      className="px-4 text-left text-xs font-medium text-gray-500 uppercase"
      key={config.label}
    >
      {config.label}
    </th>
  ));

  return (
    <div className="bg-white border w-full overflow-auto rounded-lg p-4 sm:p-6 xl:p-4">
      <table className="divide-y divide-solid">
        <thead>{renderedHeaders}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
