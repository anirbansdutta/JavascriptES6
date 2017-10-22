describe('testing ES6 framework',function()
	{
		it('The constructor' , function()
			{
				class Person
				{
					constructor(Name)
					{
						this.name = Name
					}
					get name()
					{
						return this._name;
					}
					set name(Name)
					{
						if(Name)
						this._name = Name;
					}
					doWork()
					{
						return "free";
					}
					foo()
					{
						return "foo";
					}
					toString()
					{
						return this.name;
					}
				}
				class Employee extends Person
				{
					constructor(name,title)
					{						
						super(name);
						this.title = title;
					}
					get title()	
					{
						return this._title;
					}
					set title(Title)
					{
						this._title = Title;
					}
					doWork()
					{
						//overriding doWork() as well as invoking other parent class methods.
						return super.foo()+ super.doWork() + "paid";
					}
					
				}

				let per = new Person("anirban");
				let emp = new Employee("sunny","Consultant");
				
				expect(per.doWork()).toBe("free");
				expect(emp.doWork()).toBe("foofreepaid");

				expect(per.toString()).toBe("anirban");
				expect(emp.toString()).toBe("sunny");

				let makeEveryOneWork = function(...people)
				{
					let result = [];
					//let result1 = [];
					//let result2 = [];
					/*for(let i=0 ; i< people.length;i++)
					{
						if(people[i] instanceof Person)
						result1.push(people[i].doWork());
					}
					for( let p in people)
					{
						result2.push(people[p].doWork())
					}
					*/

					for( let p of people)
					{
						result.push(p.doWork())
					}

					return result;
				}

				expect(makeEveryOneWork(per,emp)).toEqual(["free","foofreepaid"]);

			});
	});