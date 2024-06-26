import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

export const TransactionList = () => {
  const { transactions, deleteTransaction,addMilles } = useGlobalState();

  const renderTransactionRow = (transaction, index) => (
    <TableRow className="border-b bg-white border-gray-300" key={transaction.id}>
      <TableCell className="px-4 py-2 text-center text-black">{index + 1}</TableCell>
      <TableCell className="px-4 py-2 text-black font-mono">{transaction.description}</TableCell>
      <TableCell className="px-4 py-2 font-bold text-green-600">{transaction.amount > 0 ? addMilles(parseInt(transaction.amount)) : 0}</TableCell>
      <TableCell className="px-4 py-2 font-bold text-red-600">{transaction.amount < 0 ? addMilles(parseInt(transaction.amount)) : 0}</TableCell>
      <TableCell className="px-4 py-2 text-right">
        <button
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300"
          onClick={() => deleteTransaction(transaction.id)}
        >
          Eliminar
        </button>
      </TableCell>
    </TableRow>
  );

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="overflow-x-auto">
        <Table className="w-full bg-white shadow-md rounded-lg">
          <TableHead>
            <TableRow className="bg-gray-100 border-b border-gray-300 text-black">
              <TableHeaderCell className="px-4 py-2 text-center">#</TableHeaderCell>
              <TableHeaderCell className="px-4 py-2">Descripcion</TableHeaderCell>
              <TableHeaderCell className="px-4 py-2">Recibido</TableHeaderCell>
              <TableHeaderCell className="px-4 py-2">Pagado</TableHeaderCell>
              <TableHeaderCell className="px-4 py-2 text-right">Accion</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction, index) => renderTransactionRow(transaction, index))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
