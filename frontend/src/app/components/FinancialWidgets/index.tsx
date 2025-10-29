"use client";

import { AgFinancialCharts } from "ag-charts-react";
import { AgFinancialChartOptions } from "ag-charts-enterprise";
import { useGetFinancialDataQuery } from "@/app/services/RtkQueryService";
import { Loader } from "../shared";
import { financialMapper } from "@/app/mapper/financialMapper";
import "ag-charts-enterprise";

const FinancialWidgets = () => {
  const { data, isFetching } = useGetFinancialDataQuery({});

  const options: AgFinancialChartOptions = {
    data: financialMapper(data),
    theme: "ag-financial-dark",
    title: { text: "Finance Inc." },
  };

  return (
    <div className="w-full bg-[#21222D] rounded-2xl py-6 px-8">
      <h1 className="text-xl font-bold mb-4">Financial Chart</h1>
      <div className="w-full min-h-[500px] flex items-center justify-center">
        {isFetching ? (
          <Loader />
        ) : (
          <AgFinancialCharts options={options} className="h-[500px] w-full" />
        )}
      </div>
    </div>
  );
};

export default FinancialWidgets;
