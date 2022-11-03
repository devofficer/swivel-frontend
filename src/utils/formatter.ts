const formatWalletAddress = (address: string | undefined): string => {
    if (!address) return '';
    const length = address.length;
    const formatted = `${ address.slice(0, 6) }...${ address.slice(length - 4, length) }`;
    return formatted;
};

const formatBalance = (balance: number): string => {
    return balance.toLocaleString(undefined, { minimumFractionDigits: 4 });
};

export { formatWalletAddress, formatBalance };