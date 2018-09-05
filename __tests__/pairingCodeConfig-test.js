/* eslint-env jest */

import { CharacterSet, PairingCodeLength } from '../pairingCodeConfig';

describe('pairingCodeConfig', () => {
  describe('CharacterSet', () => {
    it('includes enough chars', () => {
      expect(CharacterSet.length).toBeGreaterThanOrEqual(26);
    });
  });

  describe('PairingCodeLength', () => {
    it('is reasonably long', () => {
      expect(PairingCodeLength).toBeGreaterThan(15);
    });
  });
});
