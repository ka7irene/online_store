import React from 'react';

const TotalPrice = ({ totalPrice}) => {
    return (
      <div style={{ position: 'absolute', top: 10, right: 10}}>
        {totalPrice > 0 && <h2>Total Price: ${totalPrice.toFixed(2)}</h2>}
      </div>
    );
  };

  export default TotalPrice;