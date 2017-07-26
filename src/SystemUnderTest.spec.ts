import { SystemUnderTest } from './';

describe('reproduce error', () => {
  it('should echo back the input', () => {
    const msg: string = 'My Message';
    let sut: SystemUnderTest = new SystemUnderTest(msg);
    expect(sut.message).toEqual(msg);
  })
})