describe("callBack" , function()
	{
		it("is very fundamental to functional Programming",function()
			{
				let arrObject = [{name:"anirban",salary:6500,age:34}, {name:"sunny",salary:4500,age:37}, {name:"dutta",salary:5500,age:33}]
				
				let definePromotion = function(object,criteria)
				{
					let result = {name:undefined,salary:0,age:0}
					if(criteria == "age")
					{
						
						object.forEach((obj) => {
						  if(obj.age > result.age)
						  	result = obj;
						})
					}
					else
					{
					object.forEach((obj) => {
					  if(obj.salary > result.salary)
					  	result = obj;
					})
					}
					return result;
				}

				let isPromotable = function(promotedList,callback,criteria)
				{
					let result = {}
					if(typeof callback === "function")
					{
						result = callback(promotedList, criteria);
					}

					return result.name;
				}

				expect(isPromotable(arrObject,definePromotion,"salary")).toBe("anirban");
				expect(isPromotable(arrObject,definePromotion,"age")).toBe("sunny");
			});
	});