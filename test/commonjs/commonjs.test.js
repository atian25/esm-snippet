describe('test/commonjs/commonjs.test.js', () => {
  it('should work', async () => {
    const { runner } = await import('./runner.js');
    expect(runner()).toBe(true);
  });

  it('should work 2', async () => {
    const { runner } = await import('./runner.js');
    expect(runner()).toBe(true);
  });
});
