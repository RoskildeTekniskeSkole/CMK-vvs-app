import { useContext } from "react";
import GF2Context from "../context/GF2Context";
import GF2TeacherKVValueInput from "../components/GF2TeacherKVValueInput";
import GF2QVInput from "../components/GF2QVInput";
import CalcQVSum from "../functions/CalcQVSum";

const GF2TeacherTable = ({ tableCss }) => {
  const { GF2Data } = useContext(GF2Context);
  /* 
  This is what the array being worked with looks like, it is found in ../context/ContextProvider.js

  {
    MainOpening: main vent opening
  },
  {
    QV: Initial airspeed
    TeacherKVOpening: This is the opening as put by the teacher in the beginning, it does get changed by the students
    NewKVOpening: This is the opening as put by the students, its change affects the final airspeed
  }
  [
    {
      MainOpening: 0.3,
    },
    { QV: 30.4, TeacherKVOpening: 5, NewKVOpening: 0 },
    { QV: 35.5, TeacherKVOpening: 5, NewKVOpening: 0 },
    { QV: 39.3, TeacherKVOpening: 5, NewKVOpening: 0 },
    { QV: 31.2, TeacherKVOpening: 5, NewKVOpening: 0 },
    { QV: 41.2, TeacherKVOpening: 5, NewKVOpening: 0 },
  ]
  */

  return (
    <table className="w-[288px]">
      <thead>
        <tr>
          {/* has max-w-fit to overrule the tableCss' max-w-[50px] */}
          <th className={tableCss} colSpan="7">
            Mellemregning: Lærer indtaster hvide felter
          </th>
          <th className={tableCss}>Sum</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className={tableCss + " max-w-fit font-semibold"} colSpan="2">
            Indtast Qv
          </td>

          {/* Component contains an input which handles changing GF2Context[i + 1].QV */}
          {[...Array(GF2Data.length - 1)].map((_, index) => {
            return (
              <GF2QVInput
                tableCss={tableCss}
                index={index}
                key={"QV" + index}
                id="QV"
              />
            );
          })}
          <td className={tableCss}>{CalcQVSum(GF2Data).toFixed(1)}</td>
        </tr>

        <tr>
          <td className={tableCss + " max-w-fit"} colSpan="2">
            Indtast ventilåbning
          </td>

          {/* TeacherKVOpening: Component contains input which handles changing GF2Conntext[i + 1].TeacherKVOpening */}
          {[...Array(GF2Data.length - 1)].map((_, index) => {
            return (
              <GF2TeacherKVValueInput
                tableCss={tableCss}
                index={index}
                key={"KV" + index}
                id="TeacherInputKV"
              />
            );
          })}

          <td className={tableCss}></td>
        </tr>
      </tbody>
    </table>
  );
};

export default GF2TeacherTable;
