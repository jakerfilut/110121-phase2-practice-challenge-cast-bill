import React from 'react';
import BillCard from "./BillCard"

export default function BillsCast({billData, yourCast, fireBill}) {
  
  const mapCastBill = billData.map((bill) => (
    <BillCard key={bill.id} yourCast={yourCast} bill={bill} firebill={fireBill}/>
  ))

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {mapCastBill}
        </div>
      </div>
    </div>
  );
}

