function getTxItems() {
  return JSON.parse(localStorage.getItem("txList")) || [];
}

function addTx(tx) {
  const currentTxItems = getTxItems();
  const currentLength = currentTxItems.length;
  const updatedTxItems = [...currentTxItems];
  tx.id = currentLength + 1;
  updatedTxItems.push(tx);
  localStorage.setItem("txList", JSON.stringify(updatedTxItems));
}


function calculateTxTotal() {
  const currentTxItems = getTxItems();
  let totalAmount = 0;
  for (const txItem of currentTxItems) {
    console.log(txItem);
    if (txItem.type === 'expense') {
      totalAmount -= txItem.amount;
    } else if (txItem.type === 'income') {
      totalAmount += txItem.amount;
    }
  }
  return totalAmount;
}

export {getTxItems, addTx, calculateTxTotal};