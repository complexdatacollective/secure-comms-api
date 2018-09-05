/* eslint-env jest */

import { commonName } from '../sslConfig';

describe('sslConfig', () => {
  it('exports a commonName', () => {
    expect(typeof commonName).toEqual('string');
  });
});
