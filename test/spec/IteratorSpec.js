describe("Iterables" , function()
{
it("can work with iterators at low level", function()
	{
		let numArr = [1,2,3,4];
		let result = 0;
		for(num in numArr)
		{
			result += numArr[num];
		}

		expect(result).toBe(10);
		result = 0;

		let iterators = numArr[Symbol.iterator]();
		let next = iterators.next();
		while(!next.done)
		{
			result += next.value;
			next = iterators.next();
		}

		expect(result).toBe(10);

	});
});