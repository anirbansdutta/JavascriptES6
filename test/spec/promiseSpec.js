describe("promise",function()
{
	it("of my mom for a new phone", function(done)
		{
			let isMomHappy = true;

			//creating a Promise
			let willGetNewPhone = new Promise(function(resolve,reject)
			{
				if(isMomHappy)
				{
					let phone = {type:"Motorola",color:"black"};
					resolve(phone);
				}
				else
				{
					let reason = new Error("Mom is not happy!");
					reject(reason);
				}
			});

			let showOff= function(phone)
			{
				return new Promise(function(resolve,reject)
				{
					let message = ""
					if(phone)
					{
						 message = `Please have a look at my new ${phone.type} ${phone.color} phone!`;
					}
					resolve(message);
				})
			};

			//invoking a promise
			(function()
			{
				willGetNewPhone
				.then(showOff)
				.then(function(fulfilled)
				{
					console.log(fulfilled);
				})
				willGetNewPhone.catch(function(error)
				{
					console.log(error.message);
				})
			})();
			

			done();

		});
});