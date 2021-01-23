const getTransactions = async () => {
    const transactions = await fetch('https://nextar.flip.id/frontend-test');
    return await transactions.json();
}

export { getTransactions }