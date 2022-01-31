import { AssetMap } from '../../types';
declare const erc20Assets: AssetMap;
declare const testnetErc20Assets: AssetMap;
declare const chainToTokenAddressMap: {
    [chain: string]: AssetMap;
};
declare const chainToTestnetTokenAddressMap: {
    [chain: string]: AssetMap;
};
export { erc20Assets, testnetErc20Assets, chainToTokenAddressMap, chainToTestnetTokenAddressMap };
