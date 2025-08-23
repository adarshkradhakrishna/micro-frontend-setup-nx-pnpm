import { sharedState } from './shared-state.js';

describe('sharedState', () => {
  it('should work', () => {
    expect(sharedState()).toEqual('shared-state');
  });
});
