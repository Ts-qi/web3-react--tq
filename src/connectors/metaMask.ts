import { initializeConnector  } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

// MetaMask 应该是一个类的instance

export const [ metamask, hooks] = initializeConnector<MetaMask>(
  (actions: any)=> new MetaMask({ actions })
  )