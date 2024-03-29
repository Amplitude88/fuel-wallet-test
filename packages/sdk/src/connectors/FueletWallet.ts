import type { ConnectorMetadata } from '../types';

import { FuelWalletConnector } from './FuelWallet';

export class FueletWalletConnector extends FuelWalletConnector {
  name = 'Fuelet Wallet';
  metadata: ConnectorMetadata = {
    image: {
      light: '/connectors/fuelet-light.svg',
      dark: '/connectors/fuelet-dark.svg',
    },
    install: {
      action: 'Install',
      description: 'Install Fuelet Wallet in order to connect it.',
      link: 'https://fuelet.app/download/',
    },
  };

  constructor() {
    super('Fuelet Wallet');
  }
}
