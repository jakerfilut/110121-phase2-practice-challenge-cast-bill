import React from 'react';
import BillCard from "./BillCard"

function BillCollection({billData, yourCast, fireBill }) {

const mapBillData = billData.map((bill) =>(
<BillCard yourCast={yourCast}
 key={bill.id} 
 bill={bill}
 fireBill={fireBill}
 />
))

  return (
    <div className="ui four column grid">
      <div className="row">
        {mapBillData}
      </div>
    </div>
  );
}

export default BillCollection