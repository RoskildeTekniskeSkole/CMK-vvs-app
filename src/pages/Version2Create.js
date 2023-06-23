import { useState } from "react";
import CreateInput from "../components/CreateInput";
import { useContext } from "react";
import AssignmentContext from "../context/AssignmentContext";
import CalcSum from "../functions/CalcSum";
import SiteDescription from "../components/SiteDescription";

const Version2Create = () => {
  const { assignmentData, setAssignmentData } = useContext(AssignmentContext);

  // ------------------------------------- //
  // Handling various inputs

  const [totalPD, setTotalPD] =
    useState(assignmentData[0] && assignmentData[0].totalPD) || "";

  const handleTotalPD = (e) => {
    setTotalPD(e.target.value);
    setAssignmentData((prevData) => {
      let newData = [...prevData];
      if (newData[0]) {
        newData[0].totalPD = Number(e.target.value);
      }
      return newData;
    });
  };

  const [desiredMS, setDesiredMS] =
    useState(assignmentData[0] && assignmentData[0].desiredMS) || "";

  const handleDesiredMS = (e) => {
    setDesiredMS(e.target.value);
    setAssignmentData((prevData) => {
      let newData = [...prevData];
      if (newData[0]) {
        newData[0].desiredMS = Number(e.target.value);
      }
      return newData;
    });
  };

  const [desiredOpening, setDesiredOpening] =
    useState(assignmentData[0] && assignmentData[0].desiredOpening) || "";

  const handleDesiredOpening = (e) => {
    if (e.target.value < 0 || e.target.value > 10) {
      return;
    }

    setDesiredOpening(e.target.value);
    setAssignmentData((prevData) => {
      let newData = [...prevData];
      if (newData[0]) {
        newData[0].desiredOpening = Number(e.target.value);
      }
      return newData;
    });
  };

  // ------------------------------------- //
  // Outside functions

  let averageMS = Number(CalcSum(assignmentData) / (assignmentData.length - 1));

  return (
    <>
      <SiteDescription />
      <h1 className="text-center my-4 font-semibold">Lærerside</h1>
      <div className="flex max-w-fit mb-6">
        <label htmlFor="totalPD">Indtast total PD (Lufttryk[Pa])&nbsp;</label>
        <input
          type="number"
          id="totalPD"
          className="w-16 text-center border-[1px] border-secondaryBG rounded"
          value={totalPD}
          onChange={handleTotalPD}
        />
        <p className="leading-6">&nbsp;[Pa]</p>
      </div>

      <div className="border-secondaryBG rounded border-2 m-4 p-4">
        <h2 className="font-medium m-2">
          Indtsat lufthastighed på de enkelte kontrolventiler [m/s], når
          kontrolventiler = 5 mm.
        </h2>
        {/* The amount of inputs needs to be the amount of KVinputs in the assignmentData array. Those are the only ones that change */}
        {[...Array(assignmentData.length - 1)].map((_, index) => (
          <CreateInput
            key={"CreationInput" + index}
            index={index}
            isLast={false}
          ></CreateInput>
        ))}
      </div>
      <p className="my-4 mx-4">
        Gennemsnitlig lufthast. [m/s]) med KV på 5 mm:&nbsp;
        {parseFloat(averageMS).toFixed(1)} [m/s]
      </p>
      <div className="flex my-2 max-w-fit">
        <label htmlFor="desiredMS">Ønsket lufthastighed:&nbsp;</label>
        <input
          type="text"
          id="desiredMS"
          className="max-w-[100px] text-center border-[1px] border-secondaryBG rounded"
          value={parseFloat(desiredMS).toFixed(1) + " [m/s]"}
          onChange={handleDesiredMS}
        />
      </div>
      <div className="my-2 max-w-fit flex flex-col items-center">
        <label htmlFor="desiredOpening">
          Åbning på hovedspjæld (1-10 mm):&nbsp;
        </label>
        <input
          type="text"
          id="desiredOpening"
          className="max-w-[100px] text-center border-[1px] border-secondaryBG rounded"
          value={parseFloat(desiredOpening).toFixed(0) + " [mm]"}
          onChange={handleDesiredOpening}
        />
      </div>
    </>
  );
};

export default Version2Create;