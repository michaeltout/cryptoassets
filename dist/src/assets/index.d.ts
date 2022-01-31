import { chainToTokenAddressMap, chainToTestnetTokenAddressMap } from './erc20';
declare const assets: {
    [x: string]: import("..").Asset;
};
declare const testnetAssets: {
    [x: string]: import("..").Asset | (import("..").Asset & {
        name: string;
        chain: import("..").ChainId;
        type: import("../types").AssetType;
        code: string;
        decimals: number;
        coinGeckoId?: string;
        color?: string;
        contractAddress?: string;
        matchingAsset?: string;
        feeAsset?: string;
    });
};
export { assets, testnetAssets, chainToTokenAddressMap, chainToTestnetTokenAddressMap };
