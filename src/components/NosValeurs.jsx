import { value } from "@/moks/servicesData";
import React from "react";
import Value from "./Value";

const NosValeurs = () => {
  return (
    <div className="bg-[#E87717] w-full flex flex-col items-center my-6 pb-20 pt-10">
      <h2 className="font-bold text-white text-3xl">Nos valeurs</h2>
      <p className="text-white mt-10 text-center lg:text-start">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsumLorem ipsum
      </p>
      <div className="flex justify-center flex-col lg:flex-row gap-10 mt-10">
        {value.map((val) => {
          return <Value key={val.id} {...val} />;
        })}
      </div>
    </div>
  );
};

export default NosValeurs;
