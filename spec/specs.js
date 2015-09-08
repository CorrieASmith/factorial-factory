describe('factorialFactory', function () {
  it("multiplies all positive integers that make up the given number", function () {
    expect(factorialFactory(5)).to.equal(120);
  });

  it("determines whether or not integer is greater than zero", function () {
    expect(factorialFactory(0)).to.equal(1);
  });
});
