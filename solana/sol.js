// Connect to the Solana network
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

// Handle form submission
const sendTokensForm = document.getElementById('sendTokensForm');
sendTokensForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Get form values
  const recipientPublicKey = document.getElementById('recipientPublicKey').value.trim();
  const amount = document.getElementById('amount').value;
  const tokenSymbol = document.getElementById('tokenSelect').value;
  
  // Verify user's token balance
  const wallet = await solanaWalletAdapter.connect();
  const tokenMint = await getTokenMint(tokenSymbol);
  const userTokenAccount = await getTokenAccount(wallet.publicKey, tokenMint);
  const tokenBalance = userTokenAccount ? userTokenAccount.info.amount.toNumber() / 10 ** tokenDecimals : 0;
  if (amount > tokenBalance) {
    alert('Insufficient token balance');
    return;
  }
  
  // Create and submit transaction
  const recipientPublicKeyObj = new solanaWeb3.PublicKey(recipientPublicKey);
  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: wallet.publicKey,
      toPubkey: recipientPublicKeyObj,
      lamports: amount * 10 ** lamportsDecimals,
    })
  );
  const signedTransaction = await wallet.signTransaction(transaction);
  const transactionId = await connection.sendRawTransaction(signedTransaction.serialize());
  
  // Update UI
  alert('Transaction sent: ' + transactionId);
  document.getElementById('recipientPublicKey').value = '';
  document.getElementById('amount').value = '';
});
