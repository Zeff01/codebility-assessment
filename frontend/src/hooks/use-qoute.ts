import axios from "axios";
import { finnhubApiKey } from "../config/index";
import { useState, useEffect, useCallback } from "react";

interface IUseQoute {
  symbol: string;
}

interface IStockData {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
}

const useQoute = ({ symbol }: IUseQoute) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [stockData, setStockData] = useState<IStockData>({
    c: 0,
    h: 0,
    l: 0,
    o: 0,
    pc: 0,
  });

  const fetchCallback = useCallback(() => {
    axios
      .get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${finnhubApiKey}`
      )
      .then(({ data }) => {
        setLoading(false);
        setStockData({
          c: data.c,
          h: data.h,
          l: data.l,
          o: data.o,
          pc: data.pc,
        });
      });
  }, [symbol]);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  return {
    stockData,
    loading,
  };
};

export default useQoute;
