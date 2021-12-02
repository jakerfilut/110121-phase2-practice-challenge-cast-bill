import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = ("http://localhost:8002/bills")

export default function App() {
  //start here with your code for step one
  const [billData, setbillData] = useState([])


useEffect(() =>{
  fetch(API)
  .then((res) => res.json())
  .then((billsData) => setbillData(billsData))
}, [])

function yourCast(bill){
  console.log("addCast")
  setbillData(billData.map((singlebill) =>
  singlebill.id === bill.id ? {...singlebill, isCast: true} : singlebill
  ))
}

function unCastBill(bill){
  setbillData(billData.map((singlebill) =>
  singlebill.id === bill.id ? {...singlebill, isCast: false} : singlebill
  ))
}

function fireBill(bill){
  console.log("fireBill")
  setbillData(billData.filter((bills) => bills.id !== bill.id))
} 


  return (
    <div>
      <BillsCast billData={billData.filter((bill) => bill.isCast)}
      yourCast={unCastBill}
      />
      <BillCollection billData={billData}
      yourCast={yourCast}
      fireBill={fireBill}
      />
    </div>
  );
}
