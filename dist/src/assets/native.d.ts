import { AssetMap, ChainId } from '../types';
declare const nativeAssets: AssetMap;
declare const testnetNativeAssets: AssetMap & {
    [x: string]: {
        name: string;
        chain: ChainId;
        type: import("../types").AssetType;
        code: string;
        decimals: number;
        coinGeckoId?: string;
        color?: string;
        contractAddress?: string;
        matchingAsset?: string;
        feeAsset?: string;
    };
};
export { nativeAssets, testnetNativeAssets };
