import React from "react";
import AnalysisOfCoffeeManufacturing from "../../components/research/21_22/AnalysisOfCoffeeManufacturing";
import BitOPath from "../../components/research/21_22/BitOPath";
import CoviKnowApp from "../../components/research/21_22/CoviKnowApp";
import CryptoPred from "../../components/research/21_22/CryptoPred";
import DroneForAnimalHusbandry from "../../components/research/21_22/DroneForAnimalHusbandry";
import CommonText from "../../components/research/CommonText";

const season_2021_2022 = ({ setCurrPage }) => {
  return (
    <div className="my-3">
      <CommonText setCurrPage={setCurrPage} year="2021-2022" />
      <CoviKnowApp />
      <hr style={{ margin: "20px" }} />
      <AnalysisOfCoffeeManufacturing />
      <hr style={{ margin: "20px" }} />
      <DroneForAnimalHusbandry />
      <hr style={{ margin: "20px" }} />
      <BitOPath />
      <hr style={{ margin: "20px" }} />
      <CryptoPred />
    </div>
  );
};

export default season_2021_2022;
