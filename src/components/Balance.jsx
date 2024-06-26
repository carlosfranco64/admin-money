import React from "react";
import { useGlobalState } from "../context/GlobalState";
import { Card, Metric, Text } from "@tremor/react";

export const Balance = () => {
  const { transactions,addMilles } = useGlobalState();
  const allAmounts = transactions.map(transaction => parseInt(transaction.amount));

  const lessAmounts = transactions
    .filter(transaction => transaction.amount < 0)
    .map(transaction => Math.abs(parseInt(transaction.amount))); // Utilizo Math.abs para asegurar que obtengamos el valor positivo de los montos negativos.
  
  const plusAmounts = transactions
    .filter(transaction => transaction.amount > 0)
    .map(transaction => parseInt(transaction.amount));
  
  const ingreso = plusAmounts.reduce((acc, val) => acc + val, 0);
  const egreso = lessAmounts.reduce((acc, val) => acc + val, 0); // Sumo todos los montos negativos como egresos positivos.
  
  console.log(egreso);
  const ganancia = ingreso - egreso;
  

  


  return (
    <div className=" flex justify-center items-center  h-32">
      <div className="flex  w-[800px] justify-between gap-4 max-sm:mx-2">
        <Card
          className=" mx-auto max-w-xs px-2 py-3 bg-blue-100 border-blue-500 border-t-4  text-black rounded-md"
          decoration="top"
          decorationColor="danger"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Ingreso
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
  ${addMilles(ingreso)}
</p>

        </Card>
        <Card
          className=" mx-auto max-w-xs px-2 py-3 bg-red-100 border-red-500 border-t-4  text-black rounded-md"
          decoration="top"
          decorationColor="indigo"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Egreso
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
            ${egreso ? addMilles(egreso) : "0"}
          </p>
        </Card>
        <Card
          className={` mx-auto max-w-xs px-2 py-3  ${ ganancia < 0 && 'bg-red-500 border-red-500' } ${ ganancia === 0 && 'bg-yellow-500 border-yellow-500' } ${ ganancia > 0 && 'bg-blue-500 border-blue-500' } border-t-4  text-black rounded-md`}
          decoration="bottom"
          decorationColor="danger"
        >
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Ganancia
          </p>
          <p className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold`}>
            ${ addMilles(ganancia)}
          </p>
        </Card>
      </div>
    </div>
  );
};
