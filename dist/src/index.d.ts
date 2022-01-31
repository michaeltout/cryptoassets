import BigNumber from 'bignumber.js';
import { assets, testnetAssets, chainToTokenAddressMap, chainToTestnetTokenAddressMap } from './assets';
import { chains, isEthereumChain } from './chains';
import { Asset, ChainId } from './types';
declare function unitToCurrency(asset: Asset, value: number | BigNumber): BigNumber;
declare function currencyToUnit(asset: Asset, value: number | BigNumber): BigNumber;
export { assets, chainToTokenAddressMap, testnetAssets, chainToTestnetTokenAddressMap, chains, isEthereumChain, unitToCurrency, currencyToUnit, Asset, ChainId };
