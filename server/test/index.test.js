import { expect } from 'chai';
import { makeMessage } from '../utils/helper';

describe('MakeMessage', () => {
  it('should generate an object with the appropriate title, text and createdAt properties', () => {
    const from = 'Ayodele';
    const text = 'Testing stuff';
    const res = makeMessage(from, text);
    expect(res).to.include({ from, text });
    expect(res.createdAt).to.match(/(PM|AM)/i);
  });
});
