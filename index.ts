
// problem-1
type TPerson = {
        name: string;
        age: number;
        gender: "male" | "female";
      };
      const persons: TPerson[] = [
        {
          name: "John Doe",
          age: 21,
          gender: "male",
        },
        {
          name: "Jane Doe",
          age: 23,
          gender: "female",
        },
        {
          name: "Michael Smith",
          age: 26,
          gender: "male",
        },
        {
          name: "Emily Johnson",
          age: 22,
          gender: "female",
        },
        {
          name: "David Brown",
          age: 24,
          gender: "male",
        },
        {
          name: "Jessica Wilson",
          age: 25,
          gender: "female",
        },
        {
          name: "Daniel Taylor",
          age: 27,
          gender: "male",
        },
        {
          name: "Olivia Martinez",
          age: 28,
          gender: "female",
        },
        {
          name: "William Garcia",
          age: 29,
          gender: "male",
        },
        {
          name: "Sophia Lopez",
          age: 30,
          gender: "female",
        },
        {
          name: "James Hernandez",
          age: 31,
          gender: "male",
        },
        {
          name: "Alexander Davis",
          age: 28,
          gender: "male",
        },
        {
          name: "Emma Rodriguez",
          age: 23,
          gender: "male",
        },
      ];
      
      const filterOutPersons = (persons: TPerson[]): string[] => {
        const femalePersons = persons.filter((person) => person.gender === "female");
        const remainingPersons = persons
          .filter((person) => person.gender !== "female")
          .map((person) => person.name);
        return remainingPersons;
      };
      
      console.log(filterOutPersons(persons));
      
      //problem-2
       type TBook = {
        title: string;
        author: string;
        year: number;
      };
      
      const books: TBook[] = [
        {
          title: "1984",
          author: "George Orwell",
          year: 1949,
        },
        {
          title: "Animal Farm",
          author: "George Orwell",
          year: 1945,
        },
        {
          title: "Sense and Sensibility",
          author: "Jane Austen",
          year: 1811,
        },
        {
          title: "The Beautiful and Damned",
          author: "F. Scott Fitzgerald",
          year: 1922,
        },
        {
          title: "Billy Budd, Sailor",
          author: "Herman Melville",
          year: 1924,
        },
        {
          title: "Anna Karenina",
          author: "Leo Tolstoy",
          year: 1877,
        },
        {
          title: "Franny and Zooey",
          author: "J.D. Salinger",
          year: 1961,
        },
        {
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          year: 1954,
        },
        {
          title: "Island",
          author: "Aldous Huxley",
          year: 1962,
        },
      ];
      
      const getBookTitlesArray = (books: TBook[]): string[] => {
        const bookTitles = books.map((book) => book.title);
        return bookTitles;
      };
      
      console.log(getBookTitlesArray(books));
      
       //problem-3
      const square = (x: number): number => x * x;
      
      const double = (x: number): number => x * 2;
      
      const add5 = (x: number): number => x + 5;
      
      const squareDoubleAndAdd5 = (x: number): number => {
        return add5(double(square(x)));
      };
      
      const number = 3;
      console.log(squareDoubleAndAdd5(number));
       //problem-4
      type TCar = {
        make: string;
        model: string;
        year: number;
      };
      
      const cars: TCar[] = [
        {
          make: "Toyota",
          model: "Camry",
          year: 2022,
        },
        {
          make: "Honda",
          model: "Accord",
          year: 2023,
        },
        {
          make: "Ford",
          model: "Mustang",
          year: 2021,
        },
        {
          make: "Chevrolet",
          model: "Silverado",
          year: 2020,
        },
        {
          make: "BMW",
          model: "X5",
          year: 2022,
        },
        {
          make: "Mercedes-Benz",
          model: "C-Class",
          year: 2023,
        },
        {
          make: "Audi",
          model: "A4",
          year: 2021,
        },
        {
          make: "Tesla",
          model: "Model S",
          year: 2024,
        },
        {
          make: "Hyundai",
          model: "Elantra",
          year: 2022,
        },
        {
          make: "Kia",
          model: "Seltos",
          year: 2023,
        },
      ];
      
      const sortCarsByYear = (cars: TCar[]): TCar[] => {
        const sortedArray = cars.sort((a, b) =>
          a.year > b.year ? 1 : b.year > a.year ? -1 : 0
        );
        return sortedArray;
      };
      
      console.log(sortCarsByYear(cars));
      
       //problem-5
      type People = {
        name: string;
        age: number;
        gender: "male" | "female";
      };
      
      const peoples: People[] = [
        {
          name: "Manik Sarker",
          age: 20,
          gender: "male",
        },
        {
          name: "Sadia Khan",
          age: 22,
          gender: "female",
        },
        {
          name: "Rakib Hossain",
          age: 25,
          gender: "male",
        },
      ];
      
      const modifyAgeByName = (
        peoples: People[],
        name: string,
        newAge: number
      ): People[] | string => {
        // Find the person by name
        const personIndex = peoples.findIndex((person) => person.name === name);
      
        if (personIndex !== -1) {
          // Modify the age of the person if found
          peoples[personIndex].age = newAge;
          return peoples;
        } else {
          return "People not found";
        }
      };
      
      console.log(modifyAgeByName(peoples, "Sadia Khan", 23));
      
      