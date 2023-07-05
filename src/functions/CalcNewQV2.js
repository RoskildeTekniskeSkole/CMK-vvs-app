/* New QV2: (NewQV / CalcQVSumTimesMainOpening) * NewQVSum */
/* Accepts a single param, index, to determine which of the "valves" is being calculated */

import { useContext } from "react";
import GF2Context from "../context/GF2Context";
import CalcNewQV from "./CalcNewQV";
import CalcQVSumTimesMainOpening from "./CalcQVSumTimesMainOpening";
import CalcNewQVSum from "./CalcNewQVSum";

const CalcNewQV2 = (index) => {
  const { GF2Data } = useContext(GF2Context);
  let sum =
    (CalcNewQV(index) / CalcQVSumTimesMainOpening(GF2Data)) * CalcNewQVSum();

  return sum;
};

export default CalcNewQV2;