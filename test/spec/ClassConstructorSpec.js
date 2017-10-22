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
				}
				class Employee extends Person
				{
					constructor(name,title)
					{						
						super(name);
						this._title = title;
					}
					doWork()
					{
						return `${this._name} is Working`;	
					}	
					getEmployeeDetail()			
					{
						return `${this._title} ${this._name}`
					}
					
				}

				let per = new Person("anirban");
				let emp = new Employee("sunny","Consultant");
				expect(per.name).toBe('anirban');
				expect(emp.name).toBe('sunny');
				//expect(emp.doWork()).toBe('sunny is Working');
				expect(emp.getEmployeeDetail()).toBe('Consultant sunny');
				
			});
	});