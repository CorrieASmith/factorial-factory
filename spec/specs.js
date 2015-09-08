describe('factorialFactory', function () {
  it("multiplies all positive integers that make up the given number", function () {
    expect(factorialFactory(5)).to.equal(120);
  });
});
