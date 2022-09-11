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


export {getTxItems, addTx};