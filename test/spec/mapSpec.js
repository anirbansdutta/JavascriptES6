describe("maps",function()
	{
		it("is a kep value pair",function()
			{
				let map = new Map();
				expect(map.size).toBe(0);

				map.set("age", 35);
				expect(map.get("age")).toBe(35);
				
				map.clear();
				expect(map.size).toBe(0);

				let obj = {name:"Anirban"};

				map.set(obj, "Dutta");
				expect(map.get(obj)).toBe("Dutta");

				map.delete(obj)
				expect(map.size).toBe(0);

				let mapConst = new Map([["age",35],["sex","Male"],["food","veg"]]);
				expect(mapConst.get("sex")).toBe("Male");
				expect(mapConst.has("age")).toBe(true);

				let recordCount = 0;

				mapConst.forEach((value,key)=> {
					if(key != "food")
						++recordCount;
				});
				expect(recordCount).toBe(2);
			});
	});


