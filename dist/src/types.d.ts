export interface Chain {
    name: string;
    code: string;
    nativeAsset: string;
    fees: {
        unit: string;
    };
    safeConfirmations: number;
    txFailureTimeout: number;
    isValidAddress: (address: string, network?: string) => boolean;
    formatAddress: (address: string, network?: string) => string;
    isValidTransactionHash: (hash: string) => boolean;
    formatTransactionHash: (hash: string) => string;
}
export declare type AssetType = 'native' | 'erc20';
export declare enum ChainId {
    Bitcoin = "bitcoin",
    BitcoinCash = "bitcoin_cash",
    Ethereum = "ethereum",
    Rootstock = "rsk",
    BinanceSmartChain = "bsc",
    Near = "near",
    Polygon = "polygon",
    Arbitrum = "arbitrum",
    Solana = "solana",
    Fuse = "fuse",
    Terra = "terra",
    Verus = "verus"
}
export interface Asset {
    name: string;
    chain: ChainId;
    type: AssetType;
    code: string;
    decimals: number;
    coinGeckoId?: string;
    color?: string;
    contractAddress?: string;
    matchingAsset?: string;
    feeAsset?: string;
}
export declare type AssetMap = Record<string, Asset>;
