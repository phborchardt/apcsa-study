/*
  Unit 3: Class Creation

  See questions/unit1.js for a description of each field.
  Each defineTopic(...) block is one topic. To add a question, copy a { ... } block,
  paste it inside the topic's [ ... ] list, and edit it.
*/

defineTopic(3, "3.1", "Abstraction and Program Design", [
  {
    id: "3.1-01",
    prompt: "Which of the following best describes procedural abstraction?",
    choices: [
      "Grouping several related pieces of data into a single object",
      "Using a method by knowing what it does, without needing to know how it is implemented",
      "Writing all of a program's statements in `main` so they are easy to find",
      "Storing each value a program uses in its own separately named variable"
    ],
    answer: "B",
    explanation: "Procedural abstraction lets a programmer call a method based on its name, parameters, and documented behavior while ignoring its implementation. Grouping related data into an object is data abstraction."
  },
  {
    id: "3.1-02",
    prompt: "A program stores each student's name, ID number, and GPA inside a single `Student` object instead of in three unrelated variables. Which concept does this best illustrate?",
    choices: [
      "Procedural abstraction",
      "Iteration",
      "Selection",
      "Data abstraction"
    ],
    answer: "D",
    explanation: "Data abstraction manages complexity by bundling related data into one named unit, here a `Student` object. Procedural abstraction is about naming and reusing behavior through methods."
  },
  {
    id: "3.1-03",
    prompt: "A programmer is writing a design, in plain language, for a `Book` class in a library system. Each book has a title, an author, and is either checked out or available. Which of the following is the best list of attributes for the design?",
    choices: [
      "title (`String`), author (`String`), checkedOut (`boolean`)",
      "title (`String`), author (`String`), checkedOut (`double`)",
      "bookInfo (`String`), which holds the title, author, and status together in one piece of text",
      "title (`String`), author (`String`), checkOut (the action of lending the book to a patron)"
    ],
    answer: "A",
    explanation: "Each attribute gets its own name and a fitting type, and a two-state property is naturally a `boolean`. Packing everything into one `String` makes the data hard to use, and checking a book out is a behavior, not an attribute, so the last design has no way to record the book's status."
  },
  {
    id: "3.1-04",
    prompt: "A programmer is designing a `BankAccount` class. Which of the following is best modeled as a behavior (method) of the class rather than as an attribute (instance variable)?",
    choices: [
      "The account number",
      "The current balance",
      "Depositing money into the account",
      "The name of the account owner"
    ],
    answer: "C",
    explanation: "Depositing is an action the account performs, so it becomes a method such as `deposit(double amount)`. The account number, balance, and owner name are data each account stores."
  },
  {
    id: "3.1-05",
    prompt: "A `Thermostat` class needs an instance variable for the current temperature setting, which can be a value such as 68.5. Which type is most appropriate for this attribute?",
    choices: ["`double`", "`int`", "`boolean`", "`String`"],
    answer: "A",
    explanation: "The value can have a fractional part, so `double` fits. An `int` would lose the .5, and storing a number in a `String` would make arithmetic and comparisons awkward."
  },
  {
    id: "3.1-06",
    prompt: "Consider the following method. A programmer wants to write a helper method that removes the repeated code. Which of the following helper method headers is most appropriate?",
    code: `
      public static double totalCost(int smallQty, int largeQty)
      {
          double small = smallQty * 2.50;
          if (smallQty >= 10)
          {
              small = small * 0.9;
          }
          double large = largeQty * 4.00;
          if (largeQty >= 10)
          {
              large = large * 0.9;
          }
          return small + large;
      }
    `,
    choices: [
      "`public static double cost()`",
      "`public static void cost(int qty, double price)`",
      "`public static double cost(int smallQty, int largeQty)`",
      "`public static double cost(int qty, double price)`"
    ],
    answer: "D",
    explanation: "The repeated pattern depends on a quantity and a price and produces a cost, so the helper needs those two parameters and a `double` return value; then `totalCost` returns `cost(smallQty, 2.50) + cost(largeQty, 4.00)`. A `void` helper could not give the cost back to the caller."
  },
  {
    id: "3.1-07",
    prompt: "The method `computeTax(double amount)` returns `amount * 0.07`. The program now needs to compute tax at several different rates. Which change best uses procedural abstraction to make the method reusable?",
    choices: [
      "Change the method so it prints the tax instead of returning it",
      "Add a parameter for the rate, as in `computeTax(double amount, double rate)`",
      "Write a separate copy of the method for each tax rate",
      "Make `amount` an instance variable so every method can change it"
    ],
    answer: "B",
    explanation: "Turning the hard-coded value into a parameter generalizes the method so one implementation serves every rate. Copying the method for each rate creates exactly the duplicated code that methods are meant to remove."
  },
  {
    id: "3.1-08",
    prompt: "A programmer is designing a `Student` class. Each student has a name, and every student in the program attends the same school, so the school name is the same for all `Student` objects. Which design best describes these two attributes?",
    choices: [
      "Both the name and the school name are instance variables, so that the school name can be shared.",
      "Both the name and the school name are class variables, because every student has them.",
      "The name is an instance variable, because each student has a different one, and the school name is a class variable, because it is shared by all instances.",
      "The name is a class variable, because it identifies the class, and the school name is an instance variable."
    ],
    answer: "C",
    explanation: "An instance variable holds a value unique to each object, such as a student's name. A class variable is one attribute shared by all instances of the class, which fits a school name that is the same for everyone. (How to declare a class variable in Java is covered in topic 3.7.)"
  },
  {
    id: "3.1-09",
    prompt: "A programmer designing a `Car` class for a parking-garage program gives each car a license plate and the time it entered the garage, but leaves out the car's engine size and paint color. Which concept does this decision best illustrate?",
    choices: [
      "Method overloading",
      "Iteration",
      "Abstraction: keeping the details that matter for the problem and leaving out irrelevant ones",
      "Method decomposition: breaking a large behavior into smaller methods"
    ],
    answer: "C",
    explanation: "Abstraction reduces complexity by focusing on the main idea and hiding details irrelevant to the question at hand. The garage only needs to identify the car and compute parking time, so engine size and paint color are left out."
  },
  {
    id: "3.1-10",
    prompt: "Which of the following are examples of abstraction?",
    code: `
      I.   Calling str.length() without knowing how the String
           class stores its characters
      II.  Representing a playing card as a Card object with a
           suit and a rank
      III. Copying the same ten lines of code into three
           different methods
    `,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    answer: "A",
    explanation: "I is procedural abstraction (using a method without its details) and II is data abstraction (bundling related data). Copying code is the opposite of abstraction, which would put those lines in one named method."
  },
  {
    id: "3.1-11",
    prompt: "The method `printBoxes` contains three nearly identical loops. A programmer will rewrite it as `printRow(3); printRow(5); printRow(2);` with exactly the same output. Which of the following is a correct body for `printRow(int n)`?",
    code: `
      public static void printBoxes()
      {
          for (int i = 0; i < 3; i++)
          {
              System.out.print("*");
          }
          System.out.println();
          for (int i = 0; i < 5; i++)
          {
              System.out.print("*");
          }
          System.out.println();
          for (int i = 0; i < 2; i++)
          {
              System.out.print("*");
          }
          System.out.println();
      }
    `,
    choices: [
      "for (int i = 0; i < n; i++)\n{\n    System.out.println(\"*\");\n}",
      "for (int i = 1; i < n; i++)\n{\n    System.out.print(\"*\");\n}\nSystem.out.println();",
      "for (int i = 0; i <= n; i++)\n{\n    System.out.print(\"*\");\n}\nSystem.out.println();",
      "for (int i = 0; i < n; i++)\n{\n    System.out.print(\"*\");\n}\nSystem.out.println();"
    ],
    answer: "D",
    explanation: "The helper must print `n` stars on one line and then end the line, exactly like each original block. Starting at 1 or using `<=` is off by one, and `println` inside the loop prints the stars in a column."
  },
  {
    id: "3.1-12",
    prompt: "A design for a `Movie` class says each movie has a title, a length in whole minutes, an average rating (such as 4.3), and whether it is currently showing in theaters. Which of the following attributes in the design is NOT given an appropriate type?",
    choices: [
      "title, of type `String`",
      "lengthInMinutes, of type `boolean`",
      "averageRating, of type `double`",
      "nowShowing, of type `boolean`"
    ],
    answer: "B",
    explanation: "A length in whole minutes is a count, so it should be an `int`; a `boolean` can only hold `true` or `false`. The other declarations match their data: text, a fractional rating, and a yes/no property."
  },
  {
    id: "3.1-13",
    prompt: "A method `findLargest` is used by many programs. Its header and its documented behavior (it returns the largest of its arguments) stay the same, but the programmer rewrites the statements inside the method so that it runs faster. Which statement is true?",
    choices: [
      "Programs that call `findLargest` do not need to change.",
      "Every call to `findLargest` must be rewritten to match the new statements inside the method.",
      "The parameters of `findLargest` must be renamed so that callers know the method has changed.",
      "The method must be given a new name, because its implementation is different."
    ],
    answer: "A",
    explanation: "With procedural abstraction, callers depend only on the method's signature and what it does, not on how it does it. As long as those are preserved, the internals can change without anyone who calls the method being notified."
  },
  {
    id: "3.1-14",
    prompt: "A `Date` class originally represented a date with three `int` values: month, day, and year. The programmer changes the class to represent a date with a single `int` that counts days since January 1, 1900. Programs that use `Date` objects work with them only by creating them and calling their methods, and every method's name, parameters, and documented behavior stay the same. Which statement is true?",
    choices: [
      "All programs that use `Date` objects must be rewritten.",
      "Programs that use `Date` objects must now do their own day-counting arithmetic.",
      "A `Date` can no longer report its month, because the month is not stored directly.",
      "Programs that use `Date` objects do not need to change."
    ],
    answer: "D",
    explanation: "Data abstraction separates what a data type represents (a date) from the concrete details of how it is stored. Because users of the class rely only on its methods, the representation can change, and a method can still compute the month from the day count."
  },
  {
    id: "3.1-15",
    prompt: "When a class design is written in Java, attributes and behaviors are typically implemented as which of the following?",
    choices: [
      "Attributes as methods; behaviors as instance variables",
      "Attributes as parameters; behaviors as return values",
      "Attributes as instance variables; behaviors as methods",
      "Attributes as constructors; behaviors as local variables"
    ],
    answer: "C",
    explanation: "An attribute is data each object keeps, stored in instance variables. A behavior is something an object can do, written as a method."
  },
  {
    id: "3.1-16",
    prompt: "A programmer has written one 200-line method that reads a list of scores, computes their average, finds the highest score, and prints a report. Which change best applies method decomposition?",
    choices: [
      "Move all 200 lines into the class's constructor",
      "Write methods such as `computeAverage`, `findHighest`, and `printReport`, and call them from the original method",
      "Replace each loop with the repeated statements written out one after another",
      "Combine several statements onto each line so the method is shorter"
    ],
    answer: "B",
    explanation: "Decomposition breaks a large task into smaller methods, each with one clear job, which are easier to read, test, and reuse. Moving or compressing the code leaves the same single large task."
  },
  {
    id: "3.1-17",
    prompt: "The following natural-language design lists the behaviors of a `TollBooth` class. Which set of attributes lets all three behaviors be carried out, using as few attributes as possible?",
    code: `
      TollBooth behaviors:
        carPassed(amount)  records that one car passed and paid amount
        getCarCount()      returns the number of cars that have passed
        getAverage()       returns the average amount paid per car,
                           or 0.0 if no cars have passed
    `,
    choices: [
      "carCount (`int`) and totalPaid (`double`)",
      "totalPaid (`double`) only",
      "carCount (`int`) only",
      "carCount (`int`) and lastAmount (`double`)"
    ],
    answer: "A",
    explanation: "The average is the total paid divided by the number of cars, so the booth must remember both. Keeping only the most recent amount loses the earlier payments, and either attribute alone cannot support both reporting behaviors."
  },
  {
    id: "3.1-18",
    prompt: "Which of the following is NOT a benefit of decomposing a program into methods?",
    choices: [
      "Repeated code can be written once and called wherever it is needed.",
      "Each method can be tested on its own, which makes errors easier to find.",
      "Using methods guarantees that the program has no logic errors.",
      "A well-named method can be reused without rereading its implementation."
    ],
    answer: "C",
    explanation: "Methods make code easier to understand, test, and reuse, but a method can still contain a logic error. The other three choices are real benefits of decomposition."
  },
  {
    id: "3.1-19",
    prompt: "Consider the following code segment, where all variables are `double`. A helper method `distance(double ax, double ay, double bx, double by)` returns the distance between the points (ax, ay) and (bx, by). Which expression can replace the right-hand side of the assignment to `perimeter` without changing its value?",
    code: `
      double d1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      double d2 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));
      double d3 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
      double perimeter = d1 + d2 + d3;
    `,
    choices: [
      "`distance(x1, x2, y1, y2) + distance(x2, x3, y2, y3) + distance(x3, x1, y3, y1)`",
      "`distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3)`",
      "`distance(x1, y1, x2, y2) * 3`",
      "`distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3) + distance(x3, y3, x1, y1)`"
    ],
    answer: "D",
    explanation: "Each call must pass one point's x and y followed by the other point's x and y, and all three sides are needed. Passing both x values first matches the parameters in the wrong order, and multiplying one side by 3 only works for an equilateral triangle."
  },
  {
    id: "3.1-20",
    prompt: "A `GamePlayer` class is being designed for a video game. Which of the following attributes is best represented as a class variable rather than as an instance variable?",
    choices: [
      "The player's current score",
      "The maximum number of lives allowed, which is the same for every player in the game",
      "The player's chosen screen name",
      "The player's current position on the game board"
    ],
    answer: "B",
    explanation: "A class variable is an attribute shared by all instances of the class, like a game-wide limit on lives. Score, name, and position differ from player to player, so each player object needs its own instance variable for them. (Declaring class variables in Java is covered in topic 3.7.)"
  },
]);

defineTopic(3, "3.2", "Impact of Program Design", [
  {
    id: "3.2-01",
    prompt: "Which of the following best describes system reliability?",
    choices: [
      "How quickly the program produces its results",
      "How many people can use the program at the same time",
      "How consistently the program performs its intended function, without failing, under the conditions it will be used in",
      "How few lines of code were needed to write the program"
    ],
    answer: "C",
    explanation: "A reliable system does what it is supposed to do correctly and consistently across the situations it will face. Speed, number of users, and code length are separate qualities."
  },
  {
    id: "3.2-02",
    prompt: "A programmer copies a large section of code from a commercial program into their own product and sells it, without the copyright holder's permission. Which concern does this raise?",
    choices: [
      "A violation of intellectual property rights",
      "A lack of accessibility",
      "A lack of system reliability",
      "Poor procedural abstraction"
    ],
    answer: "A",
    explanation: "Software is creative work protected by copyright, and using it without permission or a license violates the owner's intellectual property rights."
  },
  {
    id: "3.2-03",
    prompt: "Which of the following statements about open-source software is true?",
    choices: [
      "Open-source software is guaranteed to be free of errors.",
      "Anyone may use open-source code for any purpose with no conditions at all.",
      "Open-source code can never be used in a product that is sold.",
      "Its source code is publicly available, and its license states how the code may be used, changed, and shared."
    ],
    answer: "D",
    explanation: "Open-source code is published with a license that grants permissions and may attach conditions, such as giving credit or sharing changes. Many licenses allow commercial use, and open-source programs can still contain bugs."
  },
  {
    id: "3.2-04",
    prompt: "A program that computes shipping costs was tested only with packages weighing between 1 and 10 pounds. The price changes at 5 pounds, and the program will accept any weight. Which additional testing would most improve confidence in its reliability?",
    choices: [
      "Running the same tests again to make sure the results do not change",
      "Testing weights such as 0, 4.9, 5, 5.1, and 500 pounds",
      "Running the existing tests on a faster computer",
      "Testing more 3-pound packages with different destination names"
    ],
    answer: "B",
    explanation: "Errors tend to hide at boundaries (just below, at, and just above 5) and at unusual or extreme inputs (0 and very large weights). Repeating tests in the range already covered adds little new information."
  },
  {
    id: "3.2-05",
    prompt: "A social media app shows each user the posts that receive the most reactions. Over time, users see more and more extreme content, because extreme posts draw the most reactions. This is best described as which of the following?",
    choices: [
      "A syntax error in the program",
      "A violation of intellectual property",
      "An example of data abstraction",
      "An unintended consequence of the program's design"
    ],
    answer: "D",
    explanation: "The program does what it was written to do, but that design has an effect its creators did not intend. Programmers should consider how a design may affect people and society, not just whether the code runs."
  },
  {
    id: "3.2-06",
    prompt: "A ride-sharing app lets people earn money by driving their own cars and makes it easier for riders to find transportation. In some cities, taxi drivers have lost income because fewer people hire taxis. Which statement best describes the impact of this program?",
    choices: [
      "The program has both beneficial and harmful effects on the economy.",
      "The program has only beneficial effects, because it fills a real need.",
      "The program is unreliable, because some drivers earn less money.",
      "The program violates the taxi companies' intellectual property."
    ],
    answer: "A",
    explanation: "Programs affect society and the economy in ways that can be both beneficial (new income, easier travel) and harmful (lost income for others). Filling a need does not mean a program has no harmful effects."
  },
  {
    id: "3.2-07",
    prompt: "A school creates an app that sends students a reminder every time an assignment is posted, to help them keep track of their work. Teachers often post assignments late at night, and many students report losing sleep because of the notifications. Which statement best describes this situation?",
    choices: [
      "The app has a syntax error, because it sends notifications at night.",
      "The app violates intellectual property, because it uses the teachers' assignments.",
      "A program meant to fill a need has an unintended harmful effect beyond its intended use.",
      "There is no impact worth considering, because the app does exactly what it was written to do."
    ],
    answer: "C",
    explanation: "The app solves a real problem, but its design also causes harm its creators did not intend. A program can run exactly as written and still have harmful effects on the people it touches."
  },
  {
    id: "3.2-08",
    prompt: "A developer wants to include an open-source library in a program that will be distributed to the public. The library's license states that any distributed program that includes the library must also make its own source code available under the same license. What must the developer do to use the library legally?",
    choices: [
      "Nothing, because open-source code has no requirements",
      "Make the program's source code available under that same license",
      "Remove the original author's name from the library before distributing it",
      "Rename the library's methods so the code is considered original"
    ],
    answer: "B",
    explanation: "Using licensed code means following its terms, and this license requires the combined program to be shared under the same terms. Removing credit or renaming methods does not make copied code original."
  },
  {
    id: "3.2-09",
    prompt: "A game company wants to include a graphics library in its new game. The library is not open source; it is sold by another company. What must the game company do before including the library's code in its game?",
    choices: [
      "Obtain permission from the library's owner, which often means purchasing a license",
      "Nothing, as long as the library's company is credited in the game's documentation",
      "Rename the library's methods so that the code counts as the game company's own work",
      "Release the game as open source, which makes the library open source as well"
    ],
    answer: "A",
    explanation: "Code that is not published as open source belongs to its owner, so a programmer must get permission, and often pay, before using it. Giving credit or renaming methods does not grant the right to use someone else's code."
  },
  {
    id: "3.2-10",
    prompt: "Which of the following practices are likely to increase the reliability of a program?",
    code: `
      I.   Testing each method with a variety of inputs, including
           boundary cases
      II.  Checking that user input is valid before using it
      III. Removing all comments so the source file is shorter
    `,
    choices: ["I only", "II and III only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "Thorough testing finds errors before users do, and validating input keeps bad data from causing failures. Removing comments makes the code harder to maintain and does nothing to make it work more correctly."
  },
  {
    id: "3.2-11",
    prompt: "A student finds a useful method posted on a website. Which statement about using that code is most accurate?",
    choices: [
      "All code posted online is in the public domain and may be used freely.",
      "The code is usually protected by copyright, so the student should check its license or get permission and give credit.",
      "The code becomes the student's own work once the variable names are changed.",
      "Code is protected by copyright only if it compiles without errors."
    ],
    answer: "B",
    explanation: "Being publicly visible does not make code free to use; the author's rights and any license terms still apply. Renaming variables does not change who wrote the code."
  },
  {
    id: "3.2-12",
    prompt: "A navigation app sends drivers around highway traffic jams by routing them through quiet residential streets. Residents then complain about heavy traffic on their streets. Which statement best describes this situation?",
    choices: [
      "The app has a syntax error that sends drivers the wrong way.",
      "The app is unreliable because its routes do not reach the destination.",
      "The app's developers violated another company's intellectual property.",
      "The app works as intended but has a negative impact on people who are not its users."
    ],
    answer: "D",
    explanation: "The routing logic correctly finds faster routes, but its effect on neighborhoods is an unintended consequence. Programs can affect people beyond their users, which designers should consider."
  },
  {
    id: "3.2-13",
    prompt: "Consider the following method. When `share(12, 0)` is called, what happens, and which change would best improve the method's reliability?",
    code: `
      // Returns the number of items each person gets when
      // items are shared equally among people
      public static int share(int items, int people)
      {
          return items / people;
      }
    `,
    choices: [
      "An `ArithmeticException` is thrown; the method should state a precondition or check that `people` is greater than 0 before dividing.",
      "The value 0 is returned; no change is needed.",
      "The value 12 is returned; the method should multiply instead of divide.",
      "The code does not compile; `people` must be declared as a `double`."
    ],
    answer: "A",
    explanation: "Integer division by zero throws an `ArithmeticException` at run time, so the method fails on that input. Documenting a precondition or handling the zero case makes the method behave predictably."
  },
  {
    id: "3.2-14",
    prompt: "A video-calling program becomes widely used. Which of the following are impacts that the program could have on society, the economy, or culture?",
    code: `
      I.   Families who live in different countries can talk face to
           face more often.
      II.  Businesses spend less on travel because more meetings are
           held online.
      III. Some workers feel pressure to be available for calls at
           all hours.
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "D",
    explanation: "Programs can have social, economic, and cultural impacts, and these can be beneficial (I and II) or harmful (III). A complete view of a program's impact includes both kinds."
  },
  {
    id: "3.2-15",
    prompt: "Which of the following statements about the impacts of computer programs is most accurate?",
    choices: [
      "A program that contains no errors cannot have harmful effects.",
      "A program written to solve a problem can have harmful effects its programmers did not intend, as well as beneficial effects.",
      "Programs affect only the people who use them directly.",
      "The impacts of programs are economic only; programs do not affect society or culture."
    ],
    answer: "B",
    explanation: "The creation of programs affects society, the economy, and culture, in both beneficial and harmful ways, and some harmful effects reach beyond the program's intended use. Correct code can still have unintended consequences."
  },
  {
    id: "3.2-16",
    prompt: "Which of the following is a likely benefit of releasing a program as open source?",
    choices: [
      "No one else can ever earn money from the program.",
      "Every user is required to pay for a license.",
      "Other programmers can examine the code, find errors, and contribute improvements.",
      "The program can no longer contain security vulnerabilities."
    ],
    answer: "C",
    explanation: "Because the source is public, many people can review and improve it. Open source does not guarantee security, and many open-source licenses allow commercial use."
  },
  {
    id: "3.2-17",
    prompt: "The following method is intended to return `\"pass\"` if `score` is at least 70 and `\"fail\"` otherwise. It was tested with 50, 85, and 100, and all three gave the expected results. Which additional test value would reveal the error in the method?",
    code: `
      public static String result(int score)
      {
          if (score > 70)
          {
              return "pass";
          }
          return "fail";
      }
    `,
    choices: ["0", "69", "99", "70"],
    answer: "D",
    explanation: "A score of exactly 70 should pass, but `70 > 70` is false, so the method returns `\"fail\"`. Testing at the boundary catches this off-by-one error; values far from 70 behave correctly."
  },
  {
    id: "3.2-18",
    prompt: "Which of the following is a legal and ethical use of another person's code?",
    choices: [
      "Using code from an open-source project in a way its license allows, and crediting the author as the license requires",
      "Copying a classmate's solution and submitting it as your own work",
      "Copying a commercial program and giving copies to friends",
      "Removing the license notice from a library before distributing it with your program"
    ],
    answer: "A",
    explanation: "Following the license terms, including attribution, is how licensed code is used properly. The other actions violate copyright, a license, or academic honesty."
  },
  {
    id: "3.2-19",
    prompt: "Before releasing an app, a company has a small group of real users try it out. Which is the main benefit of this practice?",
    choices: [
      "It guarantees that no errors remain in the app.",
      "Real users may use the app in unexpected ways, revealing errors and usability problems the developers did not anticipate.",
      "It makes the app's source code open source.",
      "It removes the need for the developers to test their own code."
    ],
    answer: "B",
    explanation: "Developers tend to test the way they expect the program to be used, so outside users often find new problems. No amount of testing guarantees a program is error-free."
  },
  {
    id: "3.2-20",
    prompt: "Which of the following statements about system reliability are true?",
    code: `
      I.   A reliable program performs its tasks as expected under
           its stated conditions without failing.
      II.  If a program gives the correct result for one typical
           input, it has been shown to be reliable.
      III. Programmers can improve reliability by testing a program
           with a variety of conditions.
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "Reliability means working as expected under the stated conditions without failure, and testing many kinds of input is how programmers improve it. One successful test says little about other inputs, such as boundary or unusual values, so II is false."
  },
]);

defineTopic(3, "3.3", "Anatomy of a Class", [
  {
    id: "3.3-01",
    prompt: "Consider the `Book` class below. Which statement, appearing in a different class, will cause a compile-time error?",
    code: `
      public class Book
      {
          private String title;

          public Book(String t)
          {
              title = t;
          }

          public String getTitle()
          {
              return title;
          }
      }
    `,
    choices: [
      "`Book b = new Book(\"Dune\");`",
      "`String s = new Book(\"Dune\").getTitle();`",
      "`System.out.println(new Book(\"Dune\").title);`",
      "`Book b = null;`"
    ],
    answer: "C",
    explanation: "`title` is `private`, so it can only be accessed inside the `Book` class. Code in other classes must use the public accessor `getTitle()`."
  },
  {
    id: "3.3-02",
    prompt: "Which of the following best describes encapsulation?",
    choices: [
      "Declaring every method in a class as `private`",
      "Keeping an object's data private and allowing access to it only through the class's public methods",
      "Writing all of a program's classes in a single file",
      "Giving every object of a class the same values for its instance variables"
    ],
    answer: "B",
    explanation: "Encapsulation hides the data (private instance variables) and exposes controlled operations (public methods). If every method were private, client code could not use the class at all."
  },
  {
    id: "3.3-03",
    prompt: "Consider the following class. Which of the following correctly identifies its parts?",
    code: `
      public class Lamp
      {
          private boolean on;

          public Lamp()
          {
              on = false;
          }

          public void toggle()
          {
              on = !on;
          }
      }
    `,
    choices: [
      "`on` is an instance variable, `Lamp()` is a constructor, and `toggle` is a method.",
      "`on` is a local variable, `Lamp()` is a constructor, and `toggle` is a method.",
      "`on` is an instance variable, and `Lamp()` and `toggle` are both methods with return type `void`.",
      "`on` is an instance variable, `Lamp()` is a method, and `toggle` is a constructor."
    ],
    answer: "A",
    explanation: "`on` is declared inside the class but outside any method, so it is an instance variable. `Lamp()` has the class's name and no return type, so it is a constructor; `toggle` has a return type of `void`, so it is a method."
  },
  {
    id: "3.3-04",
    prompt: "Which of the following is a correct header for a class named `Song`, written the way classes are declared in this course?",
    choices: [
      "`private class Song`",
      "`public Song`",
      "`public void class Song`",
      "`public class Song`"
    ],
    answer: "D",
    explanation: "In this course, classes are always designated `public` and are declared with the keyword `class`, followed by the class name. A class header has no return type, and leaving out `class` makes the header invalid."
  },
  {
    id: "3.3-05",
    prompt: "Consider the following class. Which of the code segments I, II, and III, appearing in a different class, will compile without error?",
    code: `
      public class Account
      {
          private double balance;

          public Account(double initial)
          {
              balance = initial;
          }

          private boolean isValid(double amt)
          {
              return amt > 0 && amt <= balance;
          }

          public void withdraw(double amt)
          {
              if (isValid(amt))
              {
                  balance -= amt;
              }
          }
      }

      I.   Account a = new Account(100.0);
           a.withdraw(20.0);

      II.  Account a = new Account(100.0);
           a.balance -= 20.0;

      III. Account a = new Account(100.0);
           boolean ok = a.isValid(20.0);
    `,
    choices: ["I and III only", "I only", "I, II, and III", "II and III only"],
    answer: "B",
    explanation: "Only the public constructor and the public method `withdraw` can be used outside the class. Both the instance variable `balance` and the helper method `isValid` are `private`, so II and III do not compile, even though `withdraw` itself can call `isValid`."
  },
  {
    id: "3.3-06",
    prompt: "Consider the following class and client code. What is printed when the client code is executed?",
    code: `
      public class Tally
      {
          private int count;

          public Tally(int start)
          {
              count = start;
          }

          public void add(int n)
          {
              count += n;
          }

          public int getCount()
          {
              return count;
          }
      }

      // client code
      Tally t1 = new Tally(3);
      Tally t2 = new Tally(10);
      t1.add(4);
      t2.add(t1.getCount());
      System.out.println(t1.getCount() + " " + t2.getCount());
    `,
    choices: ["7 14", "3 13", "7 10", "7 17"],
    answer: "D",
    explanation: "Each object has its own `count`. `t1` goes from 3 to 7, and then `t2` adds 7 to its own 10 to get 17. Choosing 3 13 forgets that `t1.add(4)` already changed `t1`."
  },
  {
    id: "3.3-07",
    prompt: "Consider the following class. A client writes `c.hour = 37;` for a `Clock` object `c`, which gives the clock an impossible time. Which change to the class would best prevent this?",
    code: `
      public class Clock
      {
          public int hour;

          public Clock()
          {
              hour = 12;
          }
      }
    `,
    choices: [
      "Make `hour` private and add a public `setHour` method that changes `hour` only when the new value is from 0 to 23",
      "Remove the constructor so that `hour` starts at 0",
      "Declare `hour` inside the constructor instead of in the class",
      "Change the type of `hour` from `int` to `double`"
    ],
    answer: "A",
    explanation: "Making the data private forces clients to go through a method, and that method can reject invalid values. This is the purpose of encapsulation. Declaring `hour` inside the constructor would make it a local variable that disappears when the constructor ends (local variables are covered in topic 3.8)."
  },
  {
    id: "3.3-08",
    prompt: "Consider the following class. Which of the following can replace `/* missing method header */` so that client code can call the method to obtain the player's score?",
    code: `
      public class Player
      {
          private String name;
          private int score;

          public Player(String n)
          {
              name = n;
              score = 0;
          }

          /* missing method header */
          {
              return score;
          }
      }
    `,
    choices: [
      "`public void getScore()`",
      "`private int getScore()`",
      "`public int getScore()`",
      "`public int getScore(int score)`"
    ],
    answer: "C",
    explanation: "An accessor for clients must be `public` and must return an `int`. A `private` method cannot be called from other classes, and a `void` method cannot return a value. The last header compiles, but it forces clients to pass an argument, and inside the method `score` would refer to that parameter, so the method would just return its argument (topic 3.8 covers this)."
  },
  {
    id: "3.3-09",
    prompt: "Which of the following statements about the keyword `private` is true?",
    choices: [
      "A `private` instance variable can be accessed directly only by code inside the class that declares it.",
      "A `private` instance variable cannot change after the constructor runs.",
      "A `private` instance variable can be accessed directly by any class in the same program.",
      "A `private` method cannot be called by any code, including other methods in its class."
    ],
    answer: "A",
    explanation: "`private` restricts access to the declaring class; methods of that class can read and change private variables at any time and can call private methods. Making a value unchangeable is a different idea."
  },
  {
    id: "3.3-10",
    prompt: "Consider the following class. Which statement is true about executing `Ticket t = new Ticket(12.5);` in a class other than `Ticket`?",
    code: `
      public class Ticket
      {
          private double price;

          private Ticket(double p)
          {
              price = p;
          }

          public double getPrice()
          {
              return price;
          }
      }
    `,
    choices: [
      "A `Ticket` object is created, and its price is 12.5.",
      "The statement does not compile, because the constructor is `private`; in this course, constructors are always designated `public`.",
      "The statement compiles, but an error occurs at run time because `price` is `private`.",
      "The statement compiles, and a `Ticket` object is created, but its price is 0.0."
    ],
    answer: "B",
    explanation: "A `private` constructor can be used only inside its own class, so the call from another class does not compile. In this course constructors are always `public`, so that client code can create objects."
  },
  {
    id: "3.3-11",
    prompt: "Consider the following class and client code. What is printed when the client code is executed?",
    code: `
      public class Greeter
      {
          private String greeting;

          public Greeter(String g)
          {
              greeting = g;
          }

          public String greet(String name)
          {
              return greeting + ", " + name;
          }

          public String greetTwice(String name)
          {
              return greet(name) + "! " + greet(name) + "!";
          }
      }

      // client code
      Greeter g = new Greeter("Hi");
      System.out.println(g.greetTwice("Ana"));
    `,
    choices: [
      "Hi, Ana Hi, Ana",
      "Hi, Ana!",
      "The code does not compile, because `greet` must be called on an object inside `greetTwice`.",
      "Hi, Ana! Hi, Ana!"
    ],
    answer: "D",
    explanation: "Inside the class, a method can call another method of the same object without a dot, so `greet(name)` runs on the object `g`. Each call returns \"Hi, Ana\", and `greetTwice` joins them with the exclamation points."
  },
  {
    id: "3.3-12",
    prompt: "Which of the following statements about a class and the objects created from it is true?",
    choices: [
      "All objects of a class share a single copy of each instance variable.",
      "Only one object can be created from each class.",
      "Each object of a class has its own copy of the class's instance variables.",
      "An object's instance variables must be declared inside the constructor."
    ],
    answer: "C",
    explanation: "A class is a blueprint; each object built from it gets its own set of instance variables, so changing one object does not change another. Instance variables are declared in the class, outside any method or constructor."
  },
  {
    id: "3.3-13",
    prompt: "Consider the following class. Which of the code segments I, II, and III, appearing in a different class, will compile without error?",
    code: `
      public class Pet
      {
          private String name;
          private int age;

          public Pet(String n, int a)
          {
              name = n;
              age = a;
          }

          public String getName()
          {
              return name;
          }

          public void setAge(int a)
          {
              age = a;
          }
      }

      I.   Pet p = new Pet("Rex", 3);
           p.setAge(4);

      II.  Pet p = new Pet("Rex", 3);
           String s = p.getName();

      III. Pet p = new Pet(3, "Rex");
    `,
    choices: ["I only", "III only", "II and III only", "I and II only"],
    answer: "D",
    explanation: "I and II call the public constructor with arguments in the right order and then call public methods. III passes the arguments in the wrong order, so they do not match the constructor's parameter types `(String, int)`."
  },
  {
    id: "3.3-14",
    prompt: "Which keyword in a method header allows the method to be called from code in other classes?",
    choices: ["`public`", "`private`", "`void`", "`return`"],
    answer: "A",
    explanation: "`public` makes a method accessible from any class. `private` limits access to the declaring class, and `void` only says that the method returns no value."
  },
  {
    id: "3.3-15",
    prompt: "Consider the following class and client code. What is printed when the client code is executed?",
    code: `
      public class Light
      {
          private int brightness;

          public Light()
          {
              brightness = 50;
          }

          public void dim(int amount)
          {
              brightness -= amount;
              if (brightness < 0)
              {
                  brightness = 0;
              }
          }

          public void brighten(int amount)
          {
              brightness += amount;
              if (brightness > 100)
              {
                  brightness = 100;
              }
          }

          public int getBrightness()
          {
              return brightness;
          }
      }

      // client code
      Light lamp = new Light();
      lamp.brighten(70);
      lamp.dim(30);
      lamp.dim(80);
      lamp.brighten(15);
      System.out.println(lamp.getBrightness());
    `,
    choices: ["25", "15", "0", "5"],
    answer: "B",
    explanation: "The methods keep `brightness` between 0 and 100: 50 becomes 120, which is capped at 100, then 70, then -10, which is raised to 0, then 15. Ignoring both limits gives 25."
  },
  {
    id: "3.3-16",
    prompt: "A class has a helper method that is used only by other methods in the same class and is not meant to be used by clients. Which access modifier is most appropriate for the helper, and why?",
    choices: [
      "`public`, so that client code can call it when needed",
      "`public`, because every method in a class must be public",
      "`private`, because it is an implementation detail that clients do not need",
      "`private`, because private methods run faster than public methods"
    ],
    answer: "C",
    explanation: "Making the helper private hides how the class does its work, so the helper can be changed later without affecting client code. Access modifiers control visibility, not speed."
  },
  {
    id: "3.3-17",
    prompt: "Consider the following class and client code. What is printed when the client code is executed?",
    code: `
      public class Thermometer
      {
          private double degrees;

          public Thermometer(double d)
          {
              degrees = d;
          }

          private double toFahrenheit()
          {
              return degrees * 9 / 5 + 32;
          }

          public String report()
          {
              return degrees + " C is " + toFahrenheit() + " F";
          }
      }

      // client code
      Thermometer t = new Thermometer(100.0);
      System.out.println(t.report());
    `,
    choices: [
      "100.0 C is 212.0 F",
      "Nothing is printed; the code does not compile because `report` calls the `private` method `toFahrenheit`.",
      "Nothing is printed; the code does not compile because the client cannot access the `private` variable `degrees`.",
      "100 C is 212 F"
    ],
    answer: "A",
    explanation: "A `private` method can be called from inside its own class, so the public method `report` may use `toFahrenheit`. The client calls only the public constructor and the public method `report`, so the code compiles and prints 212.0 for 100.0 degrees Celsius."
  },
  {
    id: "3.3-18",
    prompt: "Which of the following statements describe how access modifiers are used in this course?",
    code: `
      I.   Classes are designated public.
      II.  Constructors are designated public.
      III. Instance variables are designated public, unless the
           class specification states otherwise.
    `,
    choices: ["I only", "III only", "I, II, and III", "I and II only"],
    answer: "D",
    explanation: "In this course, classes and constructors are always `public`. Instance variables should be `private` unless the specification says otherwise, so that access to an object's data stays inside the class (encapsulation)."
  },
  {
    id: "3.3-19",
    prompt: "Consider the following class. Which statement about client code that uses `Account` objects is true?",
    code: `
      public class Account
      {
          private double balance;

          public Account()
          {
              balance = 0.0;
          }

          public void deposit(double amt)
          {
              if (amt > 0)
              {
                  balance += amt;
              }
          }

          public double getBalance()
          {
              return balance;
          }
      }
    `,
    choices: [
      "Client code can make `balance` negative by calling `deposit` with a negative amount.",
      "Client code can change `balance` only by calling `deposit`, which ignores amounts that are not positive.",
      "Client code can assign any value directly to `balance`, because it is a `double`.",
      "Client code cannot find out the value of `balance` at all."
    ],
    answer: "B",
    explanation: "Because `balance` is private, the only way for a client to change it is through `deposit`, which checks the amount first, so `balance` can never become negative. Clients can still read it with the public `getBalance` method."
  },
  {
    id: "3.3-20",
    prompt: "Consider the following class. Which of the following client code segments prints `2`?",
    code: `
      public class Counter
      {
          private int count;

          public Counter()
          {
              count = 0;
          }

          public void increment()
          {
              count++;
          }

          public int getCount()
          {
              return count;
          }
      }
    `,
    choices: [
      "Counter c = new Counter();\nc.increment();\nc.increment();\nSystem.out.println(c.count);",
      "Counter.increment();\nCounter.increment();\nSystem.out.println(Counter.getCount());",
      "Counter c = new Counter();\nc.increment();\nc.increment();\nSystem.out.println(c.getCount());",
      "Counter c = new Counter();\nCounter d = new Counter();\nc.increment();\nd.increment();\nSystem.out.println(c.getCount());"
    ],
    answer: "C",
    explanation: "Instance methods are called on an object, and the private `count` must be read through `getCount()`. The first segment does not compile because `count` is private, the second calls instance methods on the class name, and the last prints 1 because each object has its own count."
  },
]);

defineTopic(3, "3.4", "Constructors", [
  {
    id: "3.4-01",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Gadget`?",
    code: `
      public class Gadget
      {
          private int count;
          private double rate;
          private boolean active;
          private String label;

          public Gadget()
          {
          }

          public String getInfo()
          {
              return count + " " + rate + " " + active + " " + label;
          }
      }

      Gadget g = new Gadget();
      System.out.println(g.getInfo());
    `,
    choices: [
      "0 0.0 false null",
      "0 0 false null",
      "Nothing is printed; the class does not compile because its instance variables are never initialized.",
      "A `NullPointerException` is thrown because `label` is `null`."
    ],
    answer: "A",
    explanation: "Instance variables that are not assigned in the constructor get default values: 0 for int, 0.0 for double, false for boolean, and null for references. Concatenating a null reference with a String gives the text null; no exception occurs."
  },
  {
    id: "3.4-02",
    prompt: "Which of the following statements about constructors is true?",
    choices: [
      "A constructor must have the return type `void`.",
      "A constructor is called when an object is created using the keyword `new`.",
      "A class can have at most one constructor.",
      "A class does not compile unless its constructor assigns a value to every instance variable."
    ],
    answer: "B",
    explanation: "A constructor runs when `new` creates an object. Constructors have no return type (not even void), a class may have several overloaded constructors, and unassigned instance variables simply keep default values."
  },
  {
    id: "3.4-03",
    prompt: "Consider the following class. Which of the following best describes the result of executing the statement `Book b = new Book();` in a class other than `Book`?",
    code: `
      public class Book
      {
          private String title;

          public Book(String t)
          {
              title = t;
          }

          public String getTitle()
          {
              return title;
          }
      }
    `,
    choices: [
      "A `Book` object is created, and its `title` is `null`.",
      "A `Book` object is created, and its `title` is the empty string.",
      "A run-time error occurs because `title` has not been initialized.",
      "The statement does not compile because `Book` has no constructor with no parameters."
    ],
    answer: "D",
    explanation: "Java supplies a default no-argument constructor only when a class has no constructors at all. Because `Book` declares a constructor with a parameter, there is no `Book()` constructor and the call does not compile."
  },
  {
    id: "3.4-04",
    prompt: "A class `Point` has a constructor with two `int` parameters that assigns them to the instance variables `x` and `y`. Which of the following best describes what happens when the statement `Point p = new Point(3, 4);` is executed?",
    choices: [
      "The constructor returns the values 3 and 4, and they are stored directly in `p`.",
      "Memory is allocated for a new `Point` object, the constructor uses 3 and 4 to set its initial state, and a reference to the object is stored in `p`.",
      "The variable `p` is declared, but no object is created until a method is called on `p`.",
      "A copy of an existing `Point` object is made, and its `x` and `y` are changed to 3 and 4."
    ],
    answer: "B",
    explanation: "Calling a constructor with `new` allocates memory for the object, runs the constructor so the parameters can initialize the instance variables, and returns a reference to the new object. A constructor has no return type and does not return the argument values."
  },
  {
    id: "3.4-05",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Rectangle`?",
    code: `
      public class Rectangle
      {
          private int width;
          private int height;

          public Rectangle()
          {
              width = 1;
              height = 1;
          }

          public Rectangle(int side)
          {
              width = side;
              height = side;
          }

          public Rectangle(int w, int h)
          {
              width = w;
              height = h;
          }

          public int area()
          {
              return width * height;
          }
      }

      Rectangle r1 = new Rectangle();
      Rectangle r2 = new Rectangle(3);
      Rectangle r3 = new Rectangle(2, 5);
      System.out.println(r1.area() + r2.area() + r3.area());
    `,
    choices: ["11", "1910", "20", "14"],
    answer: "C",
    explanation: "Each call runs the constructor whose parameter list matches the arguments. The areas are 1 * 1 = 1, 3 * 3 = 9, and 2 * 5 = 10, and adding int values gives 20 (not the concatenation 1910)."
  },
  {
    id: "3.4-06",
    prompt: "Consider the following incomplete class. Which of the following can be used to replace /* missing code */ so that the constructor works as intended?",
    code: `
      public class Student
      {
          private String name;
          private int grade;

          /** Initializes name to n and grade to g */
          public Student(String n, int g)
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "name = n;\ngrade = g;",
      "n = name;\ng = grade;",
      "name = \"n\";\ngrade = g;",
      "name = n;\ngrade = grade;"
    ],
    answer: "A",
    explanation: "The constructor must assign each parameter's value to the matching instance variable. Reversing the assignment changes only the parameters, `\"n\"` is the literal text n rather than the parameter, and `grade = grade;` assigns the instance variable to itself, so it stays 0."
  },
  {
    id: "3.4-07",
    prompt: "Consider the following two classes. What is printed as a result of executing the code segment, which appears in a class other than `Engine` or `Car`?",
    code: `
      public class Engine
      {
          private int power;

          public Engine(int p)
          {
              power = p;
          }

          public void setPower(int p)
          {
              power = p;
          }

          public int getPower()
          {
              return power;
          }
      }

      public class Car
      {
          private Engine motor;

          public Car(Engine e)
          {
              motor = e;
          }

          public int getPower()
          {
              return motor.getPower();
          }
      }

      Engine eng = new Engine(150);
      Car c = new Car(eng);
      eng.setPower(200);
      System.out.println(c.getPower());
    `,
    choices: ["150", "200", "0", "350"],
    answer: "B",
    explanation: "The constructor stores the reference it receives, so `motor` and `eng` refer to the same `Engine` object. Changing that object through `eng` is seen through `c`; the constructor did not make a copy."
  },
  {
    id: "3.4-08",
    prompt: "Consider the following classes. The `Car` constructor is intended to give the new `Car` its own `Engine` with the same power as `e`, so that later changes to the object referenced by `e` do not affect the `Car`. Which of the following can be used to replace /* missing code */ so that the constructor works as intended?",
    code: `
      public class Engine
      {
          private int power;

          public Engine(int p)
          {
              power = p;
          }

          public int getPower()
          {
              return power;
          }

          // There may be other methods that change power.
      }

      public class Car
      {
          private Engine motor;

          public Car(Engine e)
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "motor = e;",
      "e = new Engine(e.getPower());",
      "motor = new Engine(e);",
      "motor = new Engine(e.getPower());"
    ],
    answer: "D",
    explanation: "Creating a new `Engine` with the same power and assigning it to the instance variable makes an independent copy. `motor = e;` stores a reference to the original object, `e = new Engine(...)` changes only the parameter and leaves `motor` as `null`, and `new Engine(e)` does not compile because there is no constructor that takes an `Engine`."
  },
  {
    id: "3.4-09",
    prompt: "The `Item` class contains the two constructors shown. Which of the following statements, appearing in a class other than `Item`, compile without error?",
    code: `
      public Item(String name, double price)
      { /* implementation not shown */ }

      public Item(String name)
      { /* implementation not shown */ }

      I.   Item a = new Item("pen", 2);
      II.  Item b = new Item(1.5, "pen");
      III. Item c = new Item("pen");
    `,
    choices: ["I only", "III only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "In I, the int 2 is automatically widened to a double, so it matches the first constructor. III matches the second constructor. II has the arguments in the wrong order, and no constructor takes a double followed by a String."
  },
  {
    id: "3.4-10",
    prompt: "A `Car` class has three instance variables: `make` (a `String`), `mileage` (an `int`), and `fuelLevel` (a `double`). Which of the following best describes the state of a particular `Car` object?",
    choices: [
      "The values of that object's `make`, `mileage`, and `fuelLevel` at a given time",
      "The list of methods that the `Car` class provides",
      "The parameter list of the `Car` constructor",
      "The name of the class that the object was created from"
    ],
    answer: "A",
    explanation: "An object's state is its attributes and their values at a given moment, stored in the object's instance variables. Methods describe behavior, not state, and the state can change as the object's methods run."
  },
  {
    id: "3.4-11",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Widget`?",
    code: `
      public class Widget
      {
          private int size;

          public void Widget()
          {
              size = 5;
          }

          public int getSize()
          {
              return size;
          }
      }

      Widget w = new Widget();
      System.out.println(w.getSize());
    `,
    choices: [
      "5",
      "Nothing is printed; the code does not compile because `Widget` has no constructor.",
      "Nothing is printed; the code does not compile because a method cannot have the same name as its class.",
      "0"
    ],
    answer: "D",
    explanation: "Because it has the return type void, `Widget()` is an ordinary method, not a constructor. The class therefore has no constructors, so Java supplies a default constructor that leaves `size` at 0, and the method is never called."
  },
  {
    id: "3.4-12",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Ticket`?",
    code: `
      public class Ticket
      {
          private String event;
          private double price;
          private int quantity;

          public Ticket(String e, double p)
          {
              event = e;
              price = p;
              quantity = 1;
          }

          public void addTickets(int n)
          {
              quantity += n;
          }

          public String getInfo()
          {
              return event + " " + quantity + " " + price * quantity;
          }
      }

      Ticket t = new Ticket("Show", 12.5);
      t.addTickets(2);
      System.out.println(t.getInfo());
    `,
    choices: ["Show 2 25.0", "Show 1 12.5", "Show 3 37.5", "Show 0 0.0"],
    answer: "C",
    explanation: "The constructor sets the initial state of every instance variable: two from the parameters and `quantity` to 1. Adding 2 tickets makes `quantity` 3, and 12.5 * 3 is 37.5. Choosing 2 forgets the constructor's starting value of 1."
  },
  {
    id: "3.4-13",
    prompt: "Consider the following class. Which of the following statements is true?",
    code: `
      public class Recipe
      {
          private String title;
          private int servings;

          public Recipe(String t, int s)
          {
              title = t;
              servings = s;
          }

          public void doubleIt()
          {
              servings *= 2;
          }
      }
    `,
    choices: [
      "Each `Recipe` object has its own title and number of servings; there is a has-a relationship between a `Recipe` and these instance variables.",
      "All `Recipe` objects share one title and one number of servings.",
      "A `Recipe` object's state cannot change after its constructor finishes.",
      "The values of `title` and `servings` are part of a `Recipe` object's state only while the constructor is running."
    ],
    answer: "A",
    explanation: "An object's state is defined by the instance variables that belong to it, so each `Recipe` has a title and has a number of servings. The state can change later, for example when `doubleIt` is called, and it lasts as long as the object does."
  },
  {
    id: "3.4-14",
    prompt: "Which of the following best describes the purpose of a constructor?",
    choices: [
      "To return the value of an instance variable",
      "To declare the instance variables that each object of the class has",
      "To change the state of an object at any time after the object has been created",
      "To initialize the instance variables of a newly created object"
    ],
    answer: "D",
    explanation: "A constructor sets up the initial state of a new object. Instance variables are declared outside any constructor, returning a value is the job of an accessor, and changing state later is the job of a mutator."
  },
  {
    id: "3.4-15",
    prompt: "Consider the following class. What is the result of executing the code segment, which appears in a class other than `Pet`?",
    code: `
      public class Pet
      {
          private String name;

          public Pet()
          {
          }

          public int nameLength()
          {
              return name.length();
          }
      }

      Pet p = new Pet();
      System.out.println(p.nameLength());
    `,
    choices: [
      "0 is printed.",
      "A `NullPointerException` is thrown.",
      "4 is printed.",
      "The code does not compile because `name` is never initialized."
    ],
    answer: "B",
    explanation: "The constructor does not assign `name`, so it has the default value null. Calling `length()` on a null reference throws a `NullPointerException`. An unassigned instance variable does not cause a compile error, and null is not the empty string."
  },
  {
    id: "3.4-16",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Counter`?",
    code: `
      public class Counter
      {
          private int value;
          private int step;

          public Counter()
          {
              value = 0;
              step = 1;
          }

          public Counter(int s)
          {
              value = 10;
              step = s;
          }

          public void tick()
          {
              value += step;
          }

          public int getValue()
          {
              return value;
          }
      }

      Counter a = new Counter();
      Counter b = new Counter(3);
      a.tick();
      b.tick();
      b.tick();
      a.tick();
      System.out.println(a.getValue() + " " + b.getValue());
    `,
    choices: ["2 6", "4 16", "2 16", "1 13"],
    answer: "C",
    explanation: "`a` starts at 0 with step 1 and ticks twice, giving 2. `b` uses the one-parameter constructor, so it starts at 10 with step 3 and ticks twice, giving 16. Each object has its own copies of the instance variables."
  },
  {
    id: "3.4-17",
    prompt: "Consider the following two classes. What is printed as a result of executing the code segment, which appears in a class other than `Battery` or `Phone`?",
    code: `
      public class Battery
      {
          private int charge;

          public Battery(int c)
          {
              charge = c;
          }

          public void setCharge(int c)
          {
              charge = c;
          }

          public int getCharge()
          {
              return charge;
          }
      }

      public class Phone
      {
          private Battery cell;

          public Phone(Battery b)
          {
              cell = b;
          }

          public int getCharge()
          {
              return cell.getCharge();
          }
      }

      Battery bat = new Battery(100);
      Phone p1 = new Phone(bat);
      bat = new Battery(300);
      Phone p2 = new Phone(bat);
      bat.setCharge(50);
      System.out.println(p1.getCharge() + " " + p2.getCharge());
    `,
    choices: ["100 300", "50 50", "300 50", "100 50"],
    answer: "D",
    explanation: "`p1` stores a reference to the first `Battery`. Assigning a new `Battery` to `bat` changes only what `bat` refers to, not `p1`. The second `Battery` is shared by `bat` and `p2`, so setting its charge to 50 is seen by `p2`."
  },
  {
    id: "3.4-18",
    prompt: "Which of the following is a valid header for a constructor of a class named `Lamp`?",
    choices: [
      "`public lamp(boolean on)`",
      "`public Lamp(boolean on)`",
      "`public void Lamp(boolean on)`",
      "`public Lamp Lamp(boolean on)`"
    ],
    answer: "B",
    explanation: "A constructor has exactly the same name as the class (Java is case-sensitive) and no return type. Adding a return type such as void turns the header into an ordinary method header."
  },
  {
    id: "3.4-19",
    prompt: "Consider the following two classes. What is printed as a result of executing the code segment, which appears in a class other than `Wallet` or `Person`?",
    code: `
      public class Wallet
      {
          private int cash;

          public Wallet(int c)
          {
              cash = c;
          }

          public void remove(int amount)
          {
              cash -= amount;
          }

          public int getCash()
          {
              return cash;
          }
      }

      public class Person
      {
          private Wallet wallet;

          public Person(Wallet w)
          {
              wallet = w;
          }

          public void spend(int amount)
          {
              wallet.remove(amount);
          }
      }

      Wallet shared = new Wallet(50);
      Person ann = new Person(shared);
      Person ben = new Person(shared);
      ann.spend(10);
      ben.spend(15);
      System.out.println(shared.getCash());
    `,
    choices: ["50", "40", "25", "35"],
    answer: "C",
    explanation: "Both `Person` constructors store the same reference, so `ann`, `ben`, and `shared` all refer to one `Wallet`. Both purchases come out of it: 50 - 10 - 15 = 25."
  },
  {
    id: "3.4-20",
    prompt: "Which of the following statements are true?",
    code: `
      I.   If a class contains no constructors, Java provides a
           constructor with no parameters.
      II.  If a class contains a constructor with parameters, Java
           also provides a constructor with no parameters.
      III. A boolean instance variable that is not assigned a value
           in the constructor has the value false.
    `,
    choices: ["I and III only", "I only", "II and III only", "I, II, and III"],
    answer: "A",
    explanation: "The default no-argument constructor is supplied only when the class declares no constructors at all, so II is false. Instance variables that are not assigned get default values, and the default for boolean is false."
  }
]);

defineTopic(3, "3.5", "Methods: How to Write Them", [
  {
    id: "3.5-01",
    prompt: "A class has an `int` instance variable `count`. Which of the following is the best header for a method that takes no parameters and returns the value of `count`?",
    choices: [
      "`public int getCount()`",
      "`public void getCount()`",
      "`public int getCount(int count)`",
      "`public getCount()`"
    ],
    answer: "A",
    explanation: "A method that returns an int must declare the return type int, and an accessor needs no parameters. A void method cannot return a value, and every method header must have a return type."
  },
  {
    id: "3.5-02",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Account`?",
    code: `
      public class Account
      {
          private double balance;

          public Account(double start)
          {
              balance = start;
          }

          public void deposit(double amount)
          {
              balance += amount;
          }

          public void withdraw(double amount)
          {
              if (amount <= balance)
              {
                  balance -= amount;
              }
          }

          public double getBalance()
          {
              return balance;
          }
      }

      Account acct = new Account(100.0);
      acct.deposit(50.0);
      acct.withdraw(200.0);
      acct.withdraw(30.0);
      System.out.println(acct.getBalance());
    `,
    choices: ["-80.0", "150.0", "120.0", "100.0"],
    answer: "C",
    explanation: "After the deposit the balance is 150.0. The withdrawal of 200.0 is skipped because 200.0 is more than the balance, and the withdrawal of 30.0 leaves 120.0. Choosing -80.0 ignores the if statement in `withdraw`."
  },
  {
    id: "3.5-03",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Adder`?",
    code: `
      public class Adder
      {
          private int total;

          public Adder()
          {
              total = 0;
          }

          public void addAndReset(int n)
          {
              total += n;
              n = 0;
          }

          public int getTotal()
          {
              return total;
          }
      }

      Adder a = new Adder();
      int x = 5;
      a.addAndReset(x);
      a.addAndReset(x);
      System.out.println(x + " " + a.getTotal());
    `,
    choices: ["0 5", "5 10", "0 10", "5 5"],
    answer: "B",
    explanation: "The parameter `n` receives a copy of the value of `x`, so setting `n` to 0 has no effect on `x`. Both calls add 5, giving a total of 10. Choosing 0 5 assumes that changing the parameter also changed `x`."
  },
  {
    id: "3.5-04",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Score`?",
    code: `
      public class Score
      {
          private int points;

          public Score(int start)
          {
              points = start;
          }

          public int addPoints(int p)
          {
              return points + p;
          }

          public int getPoints()
          {
              return points;
          }
      }

      Score s = new Score(10);
      s.addPoints(5);
      System.out.println(s.addPoints(3) + " " + s.getPoints());
    `,
    choices: ["18 18", "18 10", "13 13", "13 10"],
    answer: "D",
    explanation: "`addPoints` returns a new value but never assigns anything to `points`, so the object always has 10 points. The first call's return value is discarded, and the second returns 10 + 3 = 13."
  },
  {
    id: "3.5-05",
    prompt: "Consider the following method, which appears in a class. Which of the following statements is true?",
    code: `
      public String letter(int score)
      {
          if (score >= 90)
          {
              return "A";
          }
          else if (score >= 80)
          {
              return "B";
          }
      }
    `,
    choices: [
      "The method returns `null` when `score` is less than 80.",
      "The method returns the empty string when `score` is less than 80.",
      "The method does not compile because it does not return a value on every path.",
      "The method compiles, but a run-time error occurs when `score` is less than 80."
    ],
    answer: "C",
    explanation: "A non-void method must return a value of its return type on every possible path. When `score` is less than 80 neither return statement runs, so the compiler reports a missing return statement."
  },
  {
    id: "3.5-06",
    prompt: "Consider the following incomplete class. The `raise` method is intended to increase `target` by `amount`, except that `target` must never be greater than 80. For example, if `target` is 75, then `raise(10)` should make `target` equal to 80. Which of the following can be used to replace /* missing code */ so that `raise` works as intended?",
    code: `
      public class Thermostat
      {
          private int target;

          /** Precondition: t <= 80 */
          public Thermostat(int t)
          {
              target = t;
          }

          /** Precondition: amount > 0 */
          public void raise(int amount)
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "if (target + amount <= 80)\n{\n    target += amount;\n}",
      "target += amount;\nif (target > 80)\n{\n    target = 80;\n}",
      "return target + amount;",
      "if (target > 80)\n{\n    target = 80;\n}\ntarget += amount;"
    ],
    answer: "B",
    explanation: "Adding first and then capping at 80 handles every case. The first choice leaves 75 unchanged instead of raising it to 80, the third does not compile because a void method cannot return a value, and the last checks the limit before adding."
  },
  {
    id: "3.5-07",
    prompt: "Consider the following incomplete class. The `getPerimeter` method is intended to return the perimeter of the rectangle. Which of the following can be used to replace /* missing code */ so that `getPerimeter` works as intended?",
    code: `
      public class Rectangle
      {
          private int width;
          private int height;

          public Rectangle(int w, int h)
          {
              width = w;
              height = h;
          }

          public int getPerimeter()
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "return 2 * width + height;",
      "System.out.println(2 * (width + height));",
      "int perimeter = 2 * (width + height);",
      "return 2 * (width + height);"
    ],
    answer: "D",
    explanation: "A non-void method must use a return statement to send its value back to the caller. Printing the value or storing it in a local variable does not return it (and the method would not compile), and `2 * width + height` doubles only the width."
  },
  {
    id: "3.5-08",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Calc`?",
    code: `
      public class Calc
      {
          private int total;

          public Calc()
          {
              total = 1;
          }

          public void triple()
          {
              total *= 3;
          }

          public void addTwo()
          {
              total += 2;
          }

          public void both()
          {
              addTwo();
              triple();
          }

          public int getTotal()
          {
              return total;
          }
      }

      Calc c = new Calc();
      c.both();
      c.triple();
      c.addTwo();
      System.out.println(c.getTotal());
    `,
    choices: ["29", "17", "27", "11"],
    answer: "A",
    explanation: "`both` first adds 2 (total 3) and then triples (total 9). The next calls triple to 27 and add 2 to get 29. Choosing 17 performs the steps inside `both` in the wrong order."
  },
  {
    id: "3.5-09",
    prompt: "The `Lamp` class contains the methods shown. Assume `lamp` is a properly declared and initialized `Lamp` variable in a class other than `Lamp`. Which of the following statements cause a compile-time error?",
    code: `
      public void toggle()
      { /* implementation not shown */ }

      public boolean isOn()
      { /* implementation not shown */ }

      I.   boolean b = lamp.toggle();
      II.  lamp.isOn();
      III. System.out.println(lamp.toggle());
    `,
    choices: ["I only", "III only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "A void method returns no value, so its call cannot be assigned to a variable or printed. Statement II is legal: calling a non-void method and ignoring its return value compiles, even though the value is discarded."
  },
  {
    id: "3.5-10",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Checker`?",
    code: `
      public class Checker
      {
          public int check(int n)
          {
              if (n > 10)
              {
                  return 1;
              }
              n = n * 2;
              if (n > 10)
              {
                  return 2;
              }
              return 3;
          }
      }

      Checker ch = new Checker();
      System.out.println(ch.check(12) + " " + ch.check(6) + " " + ch.check(4));
    `,
    choices: ["2 2 3", "1 2 3", "1 3 3", "3 3 3"],
    answer: "B",
    explanation: "A return statement ends the method immediately. check(12) returns 1 at once, check(6) doubles n to 12 and returns 2, and check(4) doubles n to 8 and returns 3. Choosing 2 for check(12) assumes the method keeps running after the first return."
  },
  {
    id: "3.5-11",
    prompt: "Which of the following best describes an accessor method?",
    choices: [
      "A method that changes the value of one or more instance variables",
      "A method that has the same name as the class and creates an object",
      "A method that has the return type void and prints the object's state",
      "A method that returns information about an object's state without changing it"
    ],
    answer: "D",
    explanation: "An accessor (getter) lets code outside the class obtain the value of an instance variable or other information about the object without changing it. A method that changes instance variables is a mutator, and the method that creates an object is a constructor."
  },
  {
    id: "3.5-12",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Doubler`?",
    code: `
      public class Doubler
      {
          public int doubleIt(int value)
          {
              value = value * 2;
              return value;
          }
      }

      Doubler d = new Doubler();
      int num = 7;
      int result = d.doubleIt(num);
      System.out.println(num + " " + result);
    `,
    choices: ["7 14", "14 14", "7 7", "14 7"],
    answer: "A",
    explanation: "When `num` is passed, the parameter `value` is initialized with a copy of 7. Doubling `value` changes only the copy, so `num` is still 7, while the returned value 14 is stored in `result`."
  },
  {
    id: "3.5-13",
    prompt: "The `Shop` class contains the method shown. Assume `shop` is a properly declared and initialized `Shop` variable in a class other than `Shop`. Which of the following statements compile without error?",
    code: `
      public double cost(int qty, double price)
      { /* implementation not shown */ }

      I.   double d = shop.cost(2, 3);
      II.  int c = shop.cost(2, 3.5);
      III. double e = shop.cost(2.0, 3.5);
    `,
    choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
    answer: "A",
    explanation: "In I, the int argument 3 is widened to match the double parameter. II fails because the returned double cannot be assigned to an int without a cast, and III fails because the double 2.0 cannot be passed to the int parameter `qty`."
  },
  {
    id: "3.5-14",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Game`?",
    code: `
      public class Game
      {
          private int score;
          private int lives;

          public Game()
          {
              score = 0;
              lives = 3;
          }

          public void hit(int points)
          {
              if (lives > 0)
              {
                  score += points;
                  lives--;
              }
          }

          public int getScore()
          {
              return score;
          }
      }

      Game g = new Game();
      g.hit(10);
      g.hit(20);
      g.hit(5);
      g.hit(40);
      System.out.println(g.getScore());
    `,
    choices: ["75", "70", "35", "0"],
    answer: "C",
    explanation: "Each call to `hit` uses up one of the three lives. The first three calls add 10 + 20 + 5 = 35, and on the fourth call `lives` is 0, so nothing changes."
  },
  {
    id: "3.5-15",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Search`?",
    code: `
      public class Search
      {
          public int firstOver(int start, int limit)
          {
              for (int n = start; n < 50; n += 7)
              {
                  if (n > limit)
                  {
                      return n;
                  }
              }
              return -1;
          }
      }

      Search s = new Search();
      System.out.println(s.firstOver(3, 20) + " " + s.firstOver(10, 60));
    `,
    choices: ["24 45", "24 -1", "17 -1", "-1 -1"],
    answer: "B",
    explanation: "A `return` inside the loop ends the loop and the method at once. For (3, 20) the values 3, 10, 17, 24 are checked, and 24 is returned. For (10, 60) no value below 50 is over 60, so the loop finishes and -1 is returned. Choosing -1 -1 assumes the loop always runs to the end."
  },
  {
    id: "3.5-16",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Stepper`?",
    code: `
      public class Stepper
      {
          private int pos;

          public Stepper(int p)
          {
              pos = p;
          }

          public int move(int d)
          {
              pos += d;
              return pos * 2;
          }
      }

      Stepper s = new Stepper(1);
      int total = 0;
      for (int i = 1; i <= 3; i++)
      {
          total += s.move(i);
      }
      System.out.println(total);
    `,
    choices: ["12", "14", "7", "26"],
    answer: "D",
    explanation: "`move` both changes `pos` and returns a value. `pos` becomes 2, 4, and 7, so the calls return 4, 8, and 14, which add to 26. Choosing 12 forgets that `pos` keeps its value between calls."
  },
  {
    id: "3.5-17",
    prompt: "Consider the following method, which appears in a class that has an `int` instance variable `value`. Which of the following best describes the behavior of the method?",
    code: `
      public int replace(int newValue)
      {
          int old = value;
          value = newValue;
          return old;
      }
    `,
    choices: [
      "It returns `newValue` without changing `value`.",
      "It sets `value` to `newValue` and returns `newValue`.",
      "It sets `value` to `newValue` and returns the value that `value` had before the call.",
      "It returns `value` without changing it."
    ],
    answer: "C",
    explanation: "The method saves the current value in `old`, then updates the instance variable, then returns the saved value. A method can be both a mutator and return a value."
  },
  {
    id: "3.5-18",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Light`?",
    code: `
      public class Light
      {
          private boolean on;

          public void toggle()
          {
              on = !on;
          }

          public boolean isOn()
          {
              return on;
          }
      }

      Light a = new Light();
      Light b = new Light();
      a.toggle();
      b.toggle();
      b.toggle();
      a.toggle();
      a.toggle();
      System.out.println(a.isOn() + " " + b.isOn());
    `,
    choices: ["false true", "true false", "true true", "false false"],
    answer: "B",
    explanation: "Each `Light` starts with `on` equal to false (the default) and has its own copy of `on`. `a` is toggled three times and ends true; `b` is toggled twice and ends false."
  },
  {
    id: "3.5-19",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Logger`?",
    code: `
      public class Logger
      {
          private int count;

          public void log(String msg)
          {
              count++;
              System.out.print(count + ":" + msg + " ");
          }

          public int getCount()
          {
              return count;
          }
      }

      Logger lg = new Logger();
      lg.log("a");
      lg.log("b");
      System.out.println(lg.getCount());
    `,
    choices: ["1:a 2:b 2", "0:a 1:b 2", "1:a 2:b 3", "a b 2"],
    answer: "A",
    explanation: "`count` starts at 0 and is incremented before each message is printed, so the messages are 1:a and 2:b. `getCount` only reads the value, which is still 2."
  },
  {
    id: "3.5-20",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Pricer`?",
    code: `
      public class Pricer
      {
          private double taxRate;

          public Pricer(double rate)
          {
              taxRate = rate;
          }

          public double total(int qty, double unitPrice)
          {
              double subtotal = qty * unitPrice;
              return subtotal + subtotal * taxRate;
          }
      }

      Pricer p = new Pricer(0.5);
      System.out.println(p.total(4, 2.5));
    `,
    choices: ["10.0", "5.0", "10.5", "15.0"],
    answer: "D",
    explanation: "The method uses the values passed to its parameters: `subtotal` is 4 * 2.5 = 10.0, and adding 10.0 * 0.5 gives 15.0. Choosing 10.0 ignores the tax, and 10.5 adds the rate itself instead of the tax amount."
  }
]);

defineTopic(3, "3.6", "Methods: Passing and Returning References of an Object", [
  {
    id: "3.6-01",
    prompt: "Consider the following class and method. The method `grow` appears in a class other than `Box`. What is printed as a result of executing the code segment, which appears in the same class as `grow`?",
    code: `
      public class Box
      {
          private int size;

          public Box(int s)
          {
              size = s;
          }

          public void setSize(int s)
          {
              size = s;
          }

          public int getSize()
          {
              return size;
          }
      }

      public static void grow(Box b)
      {
          b.setSize(b.getSize() * 2);
      }

      Box bx = new Box(5);
      grow(bx);
      System.out.println(bx.getSize());
    `,
    choices: ["5", "10", "7", "0"],
    answer: "B",
    explanation: "The parameter `b` receives a copy of the reference in `bx`, so both refer to the same `Box`. Calling `setSize` through `b` changes that object, and the change is visible through `bx`."
  },
  {
    id: "3.6-02",
    prompt: "Consider the following class and method. The method `refill` appears in a class other than `Tank`. What is printed as a result of executing the code segment, which appears in the same class as `refill`?",
    code: `
      public class Tank
      {
          private int level;

          public Tank(int lev)
          {
              level = lev;
          }

          public void setLevel(int lev)
          {
              level = lev;
          }

          public int getLevel()
          {
              return level;
          }
      }

      public static void refill(Tank t)
      {
          t = new Tank(100);
          t.setLevel(50);
      }

      Tank tank = new Tank(5);
      refill(tank);
      System.out.println(tank.getLevel());
    `,
    choices: ["5", "50", "100", "0"],
    answer: "A",
    explanation: "Assigning a new `Tank` to the parameter `t` makes `t` refer to a different object; it does not change what `tank` refers to. The new object is changed to 50, but the original `Tank` still has level 5."
  },
  {
    id: "3.6-03",
    prompt: "The `Book` class has a constructor, an accessor `getPages`, and a mutator `setPages`. The method `totalPages` appears in another class and is specified to return the combined number of pages in two books. Which of the following statements about this implementation of `totalPages` is true?",
    code: `
      public static int totalPages(Book b1, Book b2)
      {
          b1.setPages(b1.getPages() + b2.getPages());
          return b1.getPages();
      }
    `,
    choices: [
      "The method cannot change the caller's `Book` object, because the parameter `b1` holds a copy of that object.",
      "The method returns the correct value, and the change to `b1` is undone when the method returns.",
      "The method returns the correct value but also changes the caller's `Book` object, which is poor practice because the specification does not require it.",
      "The method does not compile because a method cannot call a mutator method on a parameter."
    ],
    answer: "C",
    explanation: "`b1` holds a copy of the reference, so `setPages` changes the caller's actual `Book`, and the change remains after the method returns. It is good practice not to modify a mutable object passed as a parameter unless the specification requires it; here a local variable could hold the sum instead."
  },
  {
    id: "3.6-04",
    prompt: "Consider the following class and method. The method `update` appears in a class other than `Box`. What is printed as a result of executing the code segment, which appears in the same class as `update`?",
    code: `
      public class Box
      {
          private int size;

          public Box(int s)
          {
              size = s;
          }

          public void setSize(int s)
          {
              size = s;
          }

          public int getSize()
          {
              return size;
          }
      }

      public static void update(Box b, int n)
      {
          n = n + 1;
          b.setSize(n);
      }

      int k = 7;
      Box bx = new Box(1);
      update(bx, k);
      System.out.println(k + " " + bx.getSize());
    `,
    choices: ["8 8", "7 1", "8 1", "7 8"],
    answer: "D",
    explanation: "`n` is a copy of `k`, so increasing `n` to 8 leaves `k` at 7. The `Box` is reached through a copy of the reference, so setting its size to 8 is seen through `bx`."
  },
  {
    id: "3.6-05",
    prompt: "Consider the following two classes. What is printed as a result of executing the code segment, which appears in a class other than `Player` or `Team`?",
    code: `
      public class Player
      {
          private int number;

          public Player(int n)
          {
              number = n;
          }

          public void setNumber(int n)
          {
              number = n;
          }

          public int getNumber()
          {
              return number;
          }
      }

      public class Team
      {
          private Player captain;

          public Team(Player p)
          {
              captain = p;
          }

          public Player getCaptain()
          {
              return captain;
          }
      }

      Team t = new Team(new Player(10));
      Player p = t.getCaptain();
      p.setNumber(23);
      System.out.println(t.getCaptain().getNumber());
    `,
    choices: [
      "10",
      "23",
      "0",
      "Nothing is printed; the code does not compile because `captain` is private."
    ],
    answer: "B",
    explanation: "`getCaptain` returns a reference to the `Team`'s own `Player` object, not a copy. `p` is an alias for that object, so changing its number changes the team's captain. Returning a private variable's value from a public method is legal."
  },
  {
    id: "3.6-06",
    prompt: "Consider the following incomplete class. The `distanceTo` method is intended to return the distance between this point and `other`, which is the square root of (x1 - x2) squared plus (y1 - y2) squared. Which of the following can be used to replace /* missing code */ so that `distanceTo` works as intended?",
    code: `
      public class Point
      {
          private int x;
          private int y;

          public Point(int xVal, int yVal)
          {
              x = xVal;
              y = yVal;
          }

          public double distanceTo(Point other)
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "int dx = x - other.x;\nint dy = y - other.y;\nreturn Math.sqrt(dx * dx + dy * dy);",
      "int dx = other.x - x;\nint dy = other.y - y;\nreturn Math.sqrt(dx + dy);",
      "return Math.sqrt((x - y) * (x - y) + (other.x - other.y) * (other.x - other.y));",
      "int dx = x - other.x;\nint dy = y - other.y;\nreturn dx * dx + dy * dy;"
    ],
    answer: "A",
    explanation: "Code inside `Point` may use `other.x` and `other.y` even though they are private. The correct choice subtracts matching coordinates, squares, adds, and takes the square root; the others forget to square, subtract the wrong pair of values, or forget the square root."
  },
  {
    id: "3.6-07",
    prompt: "The `Point` class has private instance variables `x` and `y`. A method in the `Point` class has a parameter `Point other` and uses the expression `other.x`. Which of the following statements is true?",
    choices: [
      "The method does not compile because `x` is private.",
      "The method compiles only if `Point` has a public `getX` method.",
      "The method compiles because code in the `Point` class can access the private instance variables of any `Point` object.",
      "The method compiles, but `other.x` always refers to the `x` of the object on which the method was called."
    ],
    answer: "C",
    explanation: "Private access is decided by class, not by object: any code written inside `Point` can use the private variables of every `Point` object, including a parameter. `other.x` is the x of the object that `other` refers to."
  },
  {
    id: "3.6-08",
    prompt: "Consider the following two classes. Which of the marked lines in the `Ticket` class causes a compile-time error?",
    code: `
      public class Coupon
      {
          private int value;

          public Coupon(int v)
          {
              value = v;
          }

          public int getValue()
          {
              return value;
          }
      }

      public class Ticket
      {
          private int price;

          public Ticket(int p)
          {
              price = p;
          }

          public boolean costsMoreThan(Ticket other)
          {
              return price > other.price;          // line 1
          }

          public boolean beatsCoupon(Coupon c)
          {
              return price > c.value;              // line 2
          }

          public boolean coveredBy(Coupon c)
          {
              return price <= c.getValue();        // line 3
          }
      }
    `,
    choices: ["Line 1 only", "Lines 1 and 2 only", "Lines 2 and 3 only", "Line 2 only"],
    answer: "D",
    explanation: "A method can use the private data of a parameter only when the parameter has the same type as the method's own class. Line 1 is legal because `other` is a `Ticket`, but line 2 uses the private `value` of a `Coupon`. Line 3 uses the public accessor, so it is legal."
  },
  {
    id: "3.6-09",
    prompt: "Consider the following class and method. The method `swap` appears in a class other than `Box`. What is printed as a result of executing the code segment, which appears in the same class as `swap`?",
    code: `
      public class Box
      {
          private int size;

          public Box(int s)
          {
              size = s;
          }

          public int getSize()
          {
              return size;
          }
      }

      public static void swap(Box a, Box b)
      {
          Box temp = a;
          a = b;
          b = temp;
      }

      Box b1 = new Box(1);
      Box b2 = new Box(2);
      swap(b1, b2);
      System.out.println(b1.getSize() + " " + b2.getSize());
    `,
    choices: ["1 2", "2 1", "1 1", "2 2"],
    answer: "A",
    explanation: "The parameters `a` and `b` are copies of the references. Swapping the copies changes only the local variables inside the method; `b1` and `b2` still refer to their original objects, and neither object was changed."
  },
  {
    id: "3.6-10",
    prompt: "Consider the following class and method. The method `copySizes` appears in a class other than `Box`. What is printed as a result of executing the code segment, which appears in the same class as `copySizes`?",
    code: `
      public class Box
      {
          private int size;

          public Box(int s)
          {
              size = s;
          }

          public void setSize(int s)
          {
              size = s;
          }

          public int getSize()
          {
              return size;
          }
      }

      public static void copySizes(Box a, Box b)
      {
          a.setSize(b.getSize());
          b.setSize(a.getSize());
      }

      Box b1 = new Box(1);
      Box b2 = new Box(2);
      copySizes(b1, b2);
      System.out.println(b1.getSize() + " " + b2.getSize());
    `,
    choices: ["2 1", "1 2", "2 2", "1 1"],
    answer: "C",
    explanation: "The method changes the objects themselves, so the caller sees the changes. The first statement sets the first box to 2, and the second statement copies that new value 2 back into the second box. Choosing 2 1 assumes the original size of the first box was saved."
  },
  {
    id: "3.6-11",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Money`?",
    code: `
      public class Money
      {
          private int cents;

          public Money(int c)
          {
              cents = c;
          }

          public Money add(Money other)
          {
              return new Money(cents + other.cents);
          }

          public int getCents()
          {
              return cents;
          }
      }

      Money a = new Money(50);
      Money b = new Money(25);
      Money c = a.add(b);
      a.add(c);
      System.out.println(a.getCents() + " " + c.getCents());
    `,
    choices: ["125 75", "50 75", "50 125", "75 75"],
    answer: "B",
    explanation: "`add` returns a new `Money` object and never changes `cents` in either existing object. `c` refers to a new object with 75 cents, and the second call's result is discarded, so `a` still has 50."
  },
  {
    id: "3.6-12",
    prompt: "Consider the following class and method. The method `bigger` appears in a class other than `Box`. What is printed as a result of executing the code segment, which appears in the same class as `bigger`?",
    code: `
      public class Box
      {
          private int size;

          public Box(int s)
          {
              size = s;
          }

          public void setSize(int s)
          {
              size = s;
          }

          public int getSize()
          {
              return size;
          }
      }

      public static Box bigger(Box a, Box b)
      {
          if (a.getSize() >= b.getSize())
          {
              return a;
          }
          return b;
      }

      Box x = new Box(4);
      Box y = new Box(9);
      Box z = bigger(x, y);
      z.setSize(1);
      System.out.println(x.getSize() + " " + y.getSize() + " " + z.getSize());
    `,
    choices: ["4 9 1", "1 9 1", "4 9 9", "4 1 1"],
    answer: "D",
    explanation: "`bigger` returns a reference to an existing object, not a copy. `z` refers to the same `Box` as `y`, so setting the size through `z` also changes what `y` sees."
  },
  {
    id: "3.6-13",
    prompt: "Consider the following method header, where `Box` is a class with a method `setSize` that changes the size of a box. Which of the following statements about calls to `change` are true?",
    code: `
      public static void change(Box b, int n)

      I.   The method can change the state of the Box object
           that the caller passes as an argument.
      II.  Assigning a new value to n inside the method changes
           the variable that the caller passed as an argument.
      III. Assigning a new Box object to b inside the method makes
           the caller's variable refer to the new Box object.
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "A",
    explanation: "The parameter `b` refers to the caller's object, so calling a mutator like `setSize` through `b` changes it. Parameters are copies, though, so assigning a new value to `n` or a new object to `b` affects only the parameter, not the caller's variables."
  },
  {
    id: "3.6-14",
    prompt: "Consider the following method. What is printed as a result of executing the code segment, which appears in the same class as `shout`?",
    code: `
      public static void shout(String s)
      {
          s = s + "!";
      }

      String word = "hi";
      shout(word);
      System.out.println(word);
    `,
    choices: ["hi!", "hi", "!", "null"],
    answer: "B",
    explanation: "Strings are immutable, so `s + \"!\"` creates a new String and the assignment changes only the parameter `s`. The caller's `word` still refers to the original string hi."
  },
  {
    id: "3.6-15",
    prompt: "Consider the following classes. The `getCaptain` method is intended to return a `Player` with the same number as `captain`, but code outside `Team` should not be able to change the `Team`'s captain by using the returned reference. Which of the following can be used to replace /* missing code */ so that `getCaptain` works as intended?",
    code: `
      public class Player
      {
          private int number;

          public Player(int n)
          {
              number = n;
          }

          public void setNumber(int n)
          {
              number = n;
          }

          public int getNumber()
          {
              return number;
          }
      }

      public class Team
      {
          private Player captain;

          public Team(Player p)
          {
              captain = new Player(p.getNumber());
          }

          public Player getCaptain()
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "return captain;",
      "Player copy = captain;\nreturn copy;",
      "return new Player(captain.getNumber());",
      "captain = new Player(captain.getNumber());\nreturn captain;"
    ],
    answer: "C",
    explanation: "Returning a new `Player` with the same number gives the caller a separate object, so changes to it do not affect the team. The other choices all return a reference to the object stored in `captain`; assigning to `copy` creates only another alias."
  },
  {
    id: "3.6-16",
    prompt: "Consider the following class and method. The method `tweak` appears in a class other than `Box`. What is printed as a result of executing the code segment, which appears in the same class as `tweak`?",
    code: `
      public class Box
      {
          private int size;

          public Box(int s)
          {
              size = s;
          }

          public void setSize(int s)
          {
              size = s;
          }

          public int getSize()
          {
              return size;
          }
      }

      public static void tweak(Box b)
      {
          b.setSize(b.getSize() + 1);
          b = new Box(10);
          b.setSize(b.getSize() + 1);
      }

      Box bx = new Box(3);
      tweak(bx);
      tweak(bx);
      System.out.println(bx.getSize());
    `,
    choices: ["11", "3", "4", "5"],
    answer: "D",
    explanation: "In each call, the first statement changes the caller's `Box` by 1. After `b` is reassigned, the last statement changes only the new `Box`, which the caller never sees. Two calls take the size from 3 to 5."
  },
  {
    id: "3.6-17",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Account`?",
    code: `
      public class Account
      {
          private int balance;

          public Account(int b)
          {
              balance = b;
          }

          public void transferTo(Account other, int amt)
          {
              if (amt <= balance)
              {
                  balance -= amt;
                  other.balance += amt;
              }
          }

          public int getBalance()
          {
              return balance;
          }
      }

      Account a = new Account(100);
      Account b = new Account(20);
      a.transferTo(b, 30);
      b.transferTo(a, 60);
      a.transferTo(b, 50);
      System.out.println(a.getBalance() + " " + b.getBalance());
    `,
    choices: ["20 100", "80 40", "70 50", "130 -10"],
    answer: "A",
    explanation: "After the first transfer, `a` has 70 and `b` has 50. The second transfer does nothing because 60 is more than 50. The third moves 50 from `a` to `b`, leaving 20 and 100. The method may change `other.balance` directly because it is inside the `Account` class."
  },
  {
    id: "3.6-18",
    prompt: "The `Point` class has private `int` instance variables `x` and `y` and a constructor that takes two `int` parameters. It has no other methods. Consider the following code segment, which appears in a class other than `Point`. Which of the following statements is true?",
    code: `
      Point p1 = new Point(1, 2);
      Point p2 = new Point(4, 6);
      int dx = p2.x - p1.x;
      System.out.println(dx);
    `,
    choices: [
      "3 is printed.",
      "-3 is printed.",
      "A run-time error occurs because `x` is private.",
      "The code segment does not compile because `x` is private and is accessed outside the `Point` class."
    ],
    answer: "D",
    explanation: "Private instance variables can be accessed only by code inside their own class. Code in another class would need a public accessor such as `getX`, so this is a compile-time error, not a run-time error."
  },
  {
    id: "3.6-19",
    prompt: "Consider the following class. What is printed as a result of executing the code segment, which appears in a class other than `Point`?",
    code: `
      public class Point
      {
          private int x;
          private int y;

          public Point(int xVal, int yVal)
          {
              x = xVal;
              y = yVal;
          }

          public Point midpoint(Point other)
          {
              return new Point((x + other.x) / 2, (y + other.y) / 2);
          }

          public int getX()
          {
              return x;
          }

          public int getY()
          {
              return y;
          }
      }

      Point a = new Point(1, 4);
      Point b = new Point(4, 9);
      Point m = a.midpoint(b);
      System.out.println(m.getX() + ", " + m.getY());
    `,
    choices: ["2.5, 6.5", "5, 13", "2, 6", "1, 4"],
    answer: "C",
    explanation: "`midpoint` returns a new `Point` whose coordinates are 5 / 2 and 13 / 2. Both are int divisions, which give 2 and 6, so the result is not 2.5, 6.5. The original points `a` and `b` are unchanged."
  },
  {
    id: "3.6-20",
    prompt: "When an object reference is passed as an argument to a method, which of the following is stored in the corresponding parameter?",
    choices: [
      "A copy of the object, so changes made to the object through the parameter do not affect the caller",
      "A copy of the reference, so the parameter and the argument refer to the same object",
      "The caller's variable itself, so assigning a new object to the parameter also changes the caller's variable",
      "Nothing; a method can only receive primitive values as arguments"
    ],
    answer: "B",
    explanation: "Java passes the value of the argument, and for an object that value is a reference. The parameter therefore refers to the same object, so mutator calls through it are visible to the caller, but reassigning the parameter is not."
  }
]);

defineTopic(3, "3.7", "Class Variables and Methods", [
  {
    id: "3.7-01",
    prompt: "Consider the following class and client code, which appears in a class other than `Survey`. What is printed as a result of executing the client code?",
    code: `
      public class Survey
      {
          public static int responses = 0;
          private String question;

          public Survey(String q)
          {
              question = q;
          }

          public void answer()
          {
              responses++;
          }
      }

      // client code
      Survey s1 = new Survey("Color?");
      Survey s2 = new Survey("Food?");
      s1.answer();
      s2.answer();
      Survey.responses += 10;
      s1.answer();
      System.out.println(Survey.responses);
    `,
    choices: [
      "3",
      "13",
      "11",
      "The code does not compile because `responses` must be accessed through a `Survey` object."
    ],
    answer: "B",
    explanation: "A `public` class variable is accessed outside its class with the class name and the dot operator, as in `Survey.responses`. Both objects share the one copy, so it goes 1, 2, 12, 13."
  },
  {
    id: "3.7-02",
    prompt: "A class `Player` declares the instance variable `private int score;` and the class variable `private static int numPlayers;`. Which of the following statements is true?",
    choices: [
      "Each `Player` object has its own copy of both `numPlayers` and `score`.",
      "All `Player` objects share one copy of `score`, and each `Player` object has its own copy of `numPlayers`.",
      "All `Player` objects share one copy of `numPlayers`, and each `Player` object has its own copy of `score`.",
      "`numPlayers` can be accessed only from static methods of `Player`."
    ],
    answer: "C",
    explanation: "A `static` variable belongs to the class, so there is a single shared copy. Instance variables such as `score` are created separately for every object. Instance methods can also use `numPlayers`, so the last choice is false."
  },
  {
    id: "3.7-03",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Ticket
      {
          private static int sold = 0;
          private String event;

          public Ticket(String e)
          {
              event = e;
              sold++;
          }

          public static int getSold()
          {
              return sold;
          }
      }

      // client code
      Ticket t1 = new Ticket("Concert");
      Ticket t2 = new Ticket("Game");
      Ticket t3 = t1;
      System.out.println(Ticket.getSold());
    `,
    choices: ["2", "3", "1", "0"],
    answer: "A",
    explanation: "The constructor runs only when `new` is used, which happens twice. `Ticket t3 = t1;` copies a reference and creates no new object, so `sold` is 2, not 3."
  },
  {
    id: "3.7-04",
    prompt: "Consider the following class. Which of the following best explains why the class does not compile?",
    code: `
      public class Rectangle
      {
          private int width;
          private int height;
          private static int count = 0;

          public Rectangle(int w, int h)
          {
              width = w;
              height = h;
              count++;
          }

          public int getArea()
          {
              return width * height;
          }

          public static int getCount()
          {
              return count;
          }

          public static int getWidthPlusCount()
          {
              return width + count;
          }
      }
    `,
    choices: [
      "The constructor cannot modify the static variable `count`.",
      "The method `getArea` must be declared `static` because `count` is static.",
      "The static method `getCount` cannot return a `private` variable.",
      "The static method `getWidthPlusCount` cannot access the instance variable `width`."
    ],
    answer: "D",
    explanation: "A static method is not called on any particular object, so it has no `width` to use. Constructors and instance methods may freely use static variables, so the other choices describe legal code."
  },
  {
    id: "3.7-05",
    prompt: "A class `Config` contains the declaration `public static final int MAX_USERS = 50;`. Which of the following statements, appearing in a method of a different class, will compile without error?",
    code: `
      I.   int limit = Config.MAX_USERS;
      II.  Config.MAX_USERS = 100;
      III. System.out.println(Config.MAX_USERS * 2);
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "A `public static` constant can be read anywhere using the class name, as in I and III. Because it is `final`, its value cannot be changed after it is initialized, so II causes a compile-time error."
  },
  {
    id: "3.7-06",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Team
      {
          private static int totalPoints = 0;
          private int points;

          public void score(int p)
          {
              points += p;
              totalPoints += p;
          }

          public int getPoints()
          {
              return points;
          }

          public static int getTotalPoints()
          {
              return totalPoints;
          }
      }

      // client code
      Team red = new Team();
      Team blue = new Team();
      red.score(3);
      blue.score(5);
      red.score(2);
      System.out.println(red.getPoints() + " " + Team.getTotalPoints());
    `,
    choices: ["5 5", "10 10", "3 10", "5 10"],
    answer: "D",
    explanation: "`points` belongs to each object, so `red` has 3 + 2 = 5. `totalPoints` is shared by every `Team`, so it collects all three scores: 3 + 5 + 2 = 10."
  },
  {
    id: "3.7-07",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class MathUtil
      {
          public static int square(int n)
          {
              return n * n;
          }

          public static int twice(int n)
          {
              return square(n) + square(n);
          }
      }

      // client code
      System.out.println(MathUtil.twice(3) - MathUtil.square(2));
    `,
    choices: [
      "2",
      "14",
      "22",
      "The code does not compile because `square` must be called as `MathUtil.square` inside `twice`."
    ],
    answer: "B",
    explanation: "`twice(3)` returns 9 + 9 = 18 and `square(2)` returns 4, so 14 is printed. Inside its own class, a static method can call another static method by name; the class name is needed only from other classes."
  },
  {
    id: "3.7-08",
    prompt: "A class `Account` has an instance variable `balance`, a static variable `numAccounts`, an instance method `getBalance()`, and a static method `getNumAccounts()`. Which of the following statements could appear in the body of a different static method of `Account` without causing a compile-time error?",
    code: `
      I.   numAccounts++;
      II.  balance = 0;
      III. int n = getNumAccounts();
    `,
    choices: ["I only", "II only", "II and III only", "I and III only"],
    answer: "D",
    explanation: "A static method can use static variables and call other static methods directly. It cannot use an instance variable such as `balance` by name, because no particular object is associated with the call."
  },
  {
    id: "3.7-09",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Visitor
      {
          private static int totalVisits = 0;
          private int myVisits = 0;

          public void visit()
          {
              myVisits++;
              totalVisits++;
          }

          public String report()
          {
              return myVisits + "/" + totalVisits;
          }
      }

      // client code
      Visitor v1 = new Visitor();
      Visitor v2 = new Visitor();
      v1.visit();
      v2.visit();
      v2.visit();
      v1.visit();
      v2.visit();
      System.out.println(v1.report() + " " + v2.report());
    `,
    choices: ["2/5 3/5", "2/2 3/3", "2/4 3/5", "5/5 5/5"],
    answer: "A",
    explanation: "`v1` visited 2 times and `v2` 3 times, and the shared `totalVisits` is 5. Both reports are built after all the visits, so both see the current shared value of 5, not the value it had at `v1`'s last visit."
  },
  {
    id: "3.7-10",
    prompt: "Consider the following class. The first `Order` object created should have an `orderId` of 100, the second should have 101, and so on. Which of the following can be used to replace /* missing code */ so that the constructor works as intended?",
    code: `
      public class Order
      {
          private static int nextId = 100;
          private int orderId;

          public Order()
          {
              /* missing code */
          }

          public int getOrderId()
          {
              return orderId;
          }
      }
    `,
    choices: [
      "nextId++;\norderId = nextId;",
      "orderId = 100;\nnextId++;",
      "orderId = nextId;\nnextId++;",
      "int nextId = 100;\norderId = nextId;\nnextId++;"
    ],
    answer: "C",
    explanation: "Each object copies the current shared value and then advances it for the next object. Incrementing first would start at 101, and declaring a local `nextId` hides the static variable (scope is covered in topic 3.8), so every order would get 100."
  },
  {
    id: "3.7-11",
    prompt: "Consider the following class and client code. What is the result of executing the client code?",
    code: `
      public class Box
      {
          private int volume;

          public Box(int v)
          {
              volume = v;
          }

          public static Box larger(Box a, Box b)
          {
              if (a.volume >= b.volume)
              {
                  return a;
              }
              return b;
          }

          public int getVolume()
          {
              return volume;
          }
      }

      // client code
      Box b1 = new Box(12);
      Box b2 = new Box(20);
      System.out.println(Box.larger(b1, b2).getVolume());
    `,
    choices: [
      "12",
      "20",
      "The code does not compile because a static method cannot access `volume`.",
      "The code does not compile because `larger` must be called on a `Box` object."
    ],
    answer: "B",
    explanation: "A static method cannot use `volume` by itself, but it can use `a.volume` because it names a specific object, and `private` access is allowed anywhere inside `Box`. `b2` has the larger volume, so 20 is printed."
  },
  {
    id: "3.7-12",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Robot
      {
          private static int built;
          private String name;

          public Robot(String n)
          {
              name = n;
              built++;
          }

          public static int getBuilt()
          {
              return built;
          }
      }

      // client code
      System.out.print(Robot.getBuilt() + " ");
      Robot r = new Robot("R2");
      r = new Robot("C3");
      System.out.println(Robot.getBuilt());
    `,
    choices: [
      "0 2",
      "0 1",
      "1 2",
      "The code does not compile because no `Robot` object exists when `getBuilt` is first called."
    ],
    answer: "A",
    explanation: "A static method is called through the class, so no object is needed, and `built` starts at the default value 0. Two objects are constructed, even though `r` refers only to the second one, so 2 is printed next."
  },
  {
    id: "3.7-13",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Light
      {
          private static int onCount = 0;
          private boolean isOn;

          public Light()
          {
              isOn = false;
          }

          public void toggle()
          {
              isOn = !isOn;
              if (isOn)
              {
                  onCount++;
              }
              else
              {
                  onCount--;
              }
          }

          public static int getOnCount()
          {
              return onCount;
          }
      }

      // client code
      Light a = new Light();
      Light b = new Light();
      Light c = a;
      a.toggle();
      b.toggle();
      c.toggle();
      b.toggle();
      b.toggle();
      System.out.println(Light.getOnCount());
    `,
    choices: ["3", "2", "0", "1"],
    answer: "D",
    explanation: "`c` refers to the same object as `a`, so `c.toggle()` turns `a` back off. The shared count goes 1, 2, 1, 0, 1. Treating `c` as a separate light gives 3."
  },
  {
    id: "3.7-14",
    prompt: "A programmer is adding a method to a `Calculator` class that returns the average of its two `double` parameters. The method does not use any instance variables. Which method header is most appropriate so that the method can be called from other classes as `Calculator.average(4.0, 7.0)`?",
    choices: [
      "`public double average(double a, double b)`",
      "`public static double average(double a, double b)`",
      "`public static void average(double a, double b)`",
      "`private static double average(double a, double b)`"
    ],
    answer: "B",
    explanation: "A method called through the class name must be `static`, it must be `public` to be called from other classes, and it must return a `double`. Without `static`, the method could be called only on a `Calculator` object."
  },
  {
    id: "3.7-15",
    prompt: "Consider the following class. Which of the marked lines causes a compile-time error?",
    code: `
      public class Loan
      {
          public static final double RATE = 0.05;
          private static int numLoans = 0;
          private double amount;

          public Loan(double a)
          {
              amount = a;
              numLoans++;                    // line 1
          }

          public void raiseRate()
          {
              RATE = RATE + 0.01;            // line 2
          }

          public double interest()
          {
              return amount * RATE;          // line 3
          }
      }
    `,
    choices: ["Line 1 only", "Lines 1 and 2 only", "Line 2 only", "Lines 2 and 3 only"],
    answer: "C",
    explanation: "`RATE` is declared `final`, so its value cannot be modified, and line 2 is an error. A `final` variable can still be read, as in line 3, and a constructor may change a non-final class variable, as in line 1."
  },
  {
    id: "3.7-16",
    prompt: "Consider the following class. Which of the marked lines in the class method `welcome` causes a compile-time error?",
    code: `
      public class Greeter
      {
          private String greeting;

          public Greeter(String g)
          {
              greeting = g;
          }

          public String greet(String name)
          {
              return greeting + ", " + name;
          }

          public static String welcome(Greeter g, String name)
          {
              String a = g.greet(name);       // line 1
              String b = greet(name);         // line 2
              String c = g.greeting;          // line 3
              return a;
          }
      }
    `,
    choices: ["Line 1 only", "Line 2 only", "Line 3 only", "Lines 2 and 3 only"],
    answer: "B",
    explanation: "A class method cannot call an instance method without an instance, so line 2 is an error. Lines 1 and 3 are legal because they use `g`, an instance passed as a parameter, and code inside `Greeter` may use the private data of any `Greeter` object."
  },
  {
    id: "3.7-17",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Game
      {
          private static int highScore = 0;
          private int score;

          public Game(int s)
          {
              score = s;
              if (score > highScore)
              {
                  highScore = score;
              }
          }

          public static int getHighScore()
          {
              return highScore;
          }
      }

      // client code
      Game g1 = new Game(40);
      Game g2 = new Game(75);
      Game g3 = new Game(60);
      System.out.println(Game.getHighScore());
    `,
    choices: ["75", "60", "175", "0"],
    answer: "A",
    explanation: "The shared `highScore` is updated only when a new score beats it: 40, then 75. The score of 60 is not higher, so `highScore` stays 75. Choosing 60 assumes the last object created sets the value."
  },
  {
    id: "3.7-18",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Clicker
      {
          private static int clicks = 0;

          public void click()
          {
              clicks++;
          }

          public static void reset()
          {
              clicks = 0;
          }

          public static int getClicks()
          {
              return clicks;
          }
      }

      // client code
      Clicker c1 = new Clicker();
      Clicker c2 = new Clicker();
      c1.click();
      c2.click();
      c1.click();
      Clicker.reset();
      c2.click();
      System.out.println(Clicker.getClicks());
    `,
    choices: ["4", "2", "1", "0"],
    answer: "C",
    explanation: "There is only one `clicks` variable, shared by both objects. `reset` sets it to 0 for everyone, and the final click makes it 1. Choosing 2 treats `clicks` as if each object had its own copy."
  },
  {
    id: "3.7-19",
    prompt: "Which of the following statements about a `public static` method is true?",
    choices: [
      "It can be called using the class name, without creating an object of the class.",
      "It can access the instance variables of the class directly by name.",
      "It must have a `void` return type.",
      "It is called automatically each time an object of the class is created."
    ],
    answer: "A",
    explanation: "Static methods belong to the class and are called as `ClassName.methodName(...)`. They have no current object, so they cannot use instance variables directly, and they may return any type."
  },
  {
    id: "3.7-20",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Item
      {
          private static int count = 0;
          private static int total = 0;
          private int value;

          public Item(int v)
          {
              value = v;
              count++;
              total += v;
          }

          public static double average()
          {
              return (double) total / count;
          }
      }

      // client code
      for (int k = 1; k <= 4; k++)
      {
          Item it = new Item(k * 3);
      }
      System.out.println(Item.average());
    `,
    choices: ["7.0", "30.0", "12.0", "7.5"],
    answer: "D",
    explanation: "Four items with values 3, 6, 9, and 12 are created, so `total` is 30 and `count` is 4. The cast makes the division 30.0 / 4, which is 7.5; integer division would give 7.0."
  },
]);

defineTopic(3, "3.8", "Scope and Access", [
  {
    id: "3.8-01",
    prompt: "Consider the following code segment. What is the result of compiling and executing the code segment?",
    code: `
      int sum = 0;
      for (int k = 1; k <= 5; k++)
      {
          sum += k;
      }
      System.out.println(sum + " " + k);
    `,
    choices: [
      "15 5",
      "15 6",
      "The code does not compile because `k` is not defined outside the loop.",
      "The code does not compile because `sum` is not defined inside the loop."
    ],
    answer: "C",
    explanation: "A variable declared in a `for` loop header exists only inside the loop. `sum` is declared before the loop, so it can be used both inside and after it."
  },
  {
    id: "3.8-02",
    prompt: "Consider the following method. Which of the following best describes the result of compiling the method?",
    code: `
      public static String classify(int n)
      {
          if (n > 0)
          {
              String result = "positive";
          }
          else
          {
              String result = "not positive";
          }
          return result;
      }
    `,
    choices: [
      "It compiles and returns \"positive\" when `n` is greater than 0 and \"not positive\" otherwise.",
      "It compiles and always returns \"not positive\" because the `else` block declares `result` last.",
      "It does not compile because `result` is declared twice in the same method.",
      "It does not compile because `result` is not in scope at the `return` statement."
    ],
    answer: "D",
    explanation: "Each `result` is local to the block in braces where it is declared and no longer exists after that block ends. The two declarations are in separate blocks, so they do not conflict; declaring `result` once before the `if` would fix the method."
  },
  {
    id: "3.8-03",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Scoreboard
      {
          private int count;

          public Scoreboard()
          {
              count = 2;
          }

          public void update()
          {
              int count = 10;
              count++;
          }

          public int getCount()
          {
              return count;
          }
      }

      // client code
      Scoreboard s = new Scoreboard();
      s.update();
      System.out.println(s.getCount());
    `,
    choices: ["11", "2", "3", "10"],
    answer: "B",
    explanation: "`update` declares a local variable named `count`, which hides the instance variable inside that method. Only the local variable becomes 11, and it disappears when the method ends, so the instance variable is still 2."
  },
  {
    id: "3.8-04",
    prompt: "Consider the following method and code segment, which appear in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static void addTen(int num)
      {
          num = num + 10;
          System.out.print(num + " ");
      }

      // client code
      int num = 5;
      addTen(num);
      System.out.println(num);
    `,
    choices: [
      "15 5",
      "15 15",
      "5 5",
      "The code does not compile because `num` is declared twice."
    ],
    answer: "A",
    explanation: "The parameter `num` is a separate variable whose scope is the method `addTen`; it receives a copy of 5. Changing it to 15 does not affect the caller's `num`, which is a different variable that happens to have the same name."
  },
  {
    id: "3.8-05",
    prompt: "Consider the following class. Which of the following best explains why the class does not compile?",
    code: `
      public class Order
      {
          private double price;

          public Order(double p)
          {
              price = p;
          }

          public double withTax()
          {
              private double tax = price * 0.08;
              return price + tax;
          }
      }
    `,
    choices: [
      "`tax` is a local variable, and local variables cannot be declared `public` or `private`.",
      "`price` is `private`, so it cannot be used in `withTax`.",
      "`tax` should be declared `public` instead, because its value is used in the `return` statement.",
      "Every variable used in a method must first be declared in the constructor."
    ],
    answer: "A",
    explanation: "A variable declared inside a method body is a local variable that exists only in that method, so access modifiers such as `private` and `public` are not allowed on it. Removing `private` fixes the class."
  },
  {
    id: "3.8-06",
    prompt: "Consider the following class. Which variables can be used at the point marked /* here */?",
    code: `
      public class Example
      {
          private int total;

          public void process(int amount)
          {
              for (int i = 0; i < amount; i++)
              {
                  int doubled = i * 2;
                  total += doubled;
              }
              /* here */
          }
      }
    `,
    choices: [
      "`amount` only",
      "`total`, `amount`, and `i` only",
      "`total`, `amount`, `i`, and `doubled`",
      "`total` and `amount` only"
    ],
    answer: "D",
    explanation: "The instance variable `total` is in scope throughout the class, and the parameter `amount` is in scope throughout the method. `i` and `doubled` were declared in the loop, so they no longer exist after it."
  },
  {
    id: "3.8-07",
    prompt: "Which of the following code segments compile without error?",
    code: `
      I.
      for (int i = 0; i < 3; i++)
      {
          System.out.print(i);
      }
      for (int i = 0; i < 3; i++)
      {
          System.out.print(i);
      }

      II.
      int i = 0;
      for (int i = 0; i < 3; i++)
      {
          System.out.print(i);
      }

      III.
      for (int i = 0; i < 3; i++)
      {
          int temp = i;
      }
      int temp = 5;
      System.out.print(temp);
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "In I and III, each earlier variable's scope ends with its loop, so the name can be declared again afterward. In II, the outer `i` is still in scope when the loop header tries to declare another `i`, which is a compile-time error."
  },
  {
    id: "3.8-08",
    prompt: "Consider the following code segment. What is printed as a result of executing the code segment?",
    code: `
      for (int k = 1; k <= 3; k++)
      {
          int total = 0;
          total += k * 10;
          System.out.print(total + " ");
      }
    `,
    choices: ["10 30 60", "10 20 30", "0 0 0", "60"],
    answer: "B",
    explanation: "`total` is declared inside the loop body, so a new variable starting at 0 is created on every pass. It never accumulates; to get a running total, it would need to be declared before the loop."
  },
  {
    id: "3.8-09",
    prompt: "A class has a `private int` instance variable named `level`. Which of the following method definitions, if added to the class, compile without error?",
    code: `
      I.
      public void setLevel(int newLevel)
      {
          int old = level;
          level = newLevel;
      }

      II.
      public void setLevel(private int newLevel)
      {
          level = newLevel;
      }

      III.
      public void setLevel(int newLevel)
      {
          public int old = level;
          level = newLevel;
      }
    `,
    choices: ["II only", "I and III only", "I only", "I, II, and III"],
    answer: "C",
    explanation: "Parameters and variables declared in a method body are both local variables, which can be used only within the method and cannot be declared `public` or `private`. Only I avoids an access modifier on a local variable."
  },
  {
    id: "3.8-10",
    prompt: "Consider the following class. Which of the following statements about the parameter `rate` is true?",
    code: `
      public class Savings
      {
          private double balance;

          public Savings(double start, double rate)
          {
              balance = start * (1 + rate);
          }

          public double getBalance()
          {
              return balance;
          }
      }
    `,
    choices: [
      "`rate` can be used in `getBalance` because it was given a value when the object was constructed.",
      "`rate` is a local variable of the constructor and can be used only inside the constructor.",
      "`rate` becomes an instance variable of every `Savings` object.",
      "`rate` could be declared `private` in the constructor header so that clients cannot change it."
    ],
    answer: "B",
    explanation: "Parameters of a constructor or method are local variables: they exist only while that constructor or method runs and can be used only inside it. To use the rate later, the constructor would have to store it in an instance variable."
  },
  {
    id: "3.8-11",
    prompt: "Consider the following class. Which of the following best explains why the class does not compile?",
    code: `
      public class Recipe
      {
          private int servings;

          public Recipe(int s)
          {
              servings = s;
              int perPerson = 2;
          }

          public int totalCups()
          {
              return servings * perPerson;
          }
      }
    `,
    choices: [
      "`perPerson` is a local variable of the constructor and is not in scope in `totalCups`.",
      "`servings` is `private` and cannot be used in `totalCups`.",
      "A constructor cannot declare local variables.",
      "`totalCups` must have a parameter named `servings`."
    ],
    answer: "A",
    explanation: "A local variable exists only in the method or constructor where it is declared. To be used in `totalCups`, `perPerson` would have to be an instance variable. `private` instance variables like `servings` can be used in any method of the class."
  },
  {
    id: "3.8-12",
    prompt: "Which of the following statements about instance variables and local variables is true?",
    choices: [
      "A local variable declared in one method can be used in any other method of the same class.",
      "Instance variables can be used in any instance method of the class, while a local variable can be used only within the block where it is declared.",
      "Local variables are automatically given default values such as 0, `false`, or `null`.",
      "Instance variables exist only while one of the class's methods is executing."
    ],
    answer: "B",
    explanation: "An instance variable's scope is the whole class, and it lasts as long as its object does. A local variable's scope is the block where it is declared, and it must be given a value before it is used."
  },
  {
    id: "3.8-13",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Counter
      {
          private int total = 0;

          public int increment()
          {
              int calls = 0;
              calls++;
              total++;
              return calls + total;
          }
      }

      // client code
      Counter c = new Counter();
      c.increment();
      c.increment();
      System.out.println(c.increment());
    `,
    choices: ["6", "2", "3", "4"],
    answer: "D",
    explanation: "The local variable `calls` is created fresh on every call, so it is always 1 when returned. The instance variable `total` keeps its value between calls and is 3 on the third call, so 1 + 3 = 4. Choosing 6 assumes `calls` also keeps its value."
  },
  {
    id: "3.8-14",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Bag
      {
          private int size;
          private int capacity;

          public Bag(int s)
          {
              int size = s;
              capacity = s * 2;
          }

          public String info()
          {
              return size + " " + capacity;
          }
      }

      // client code
      Bag b = new Bag(4);
      System.out.println(b.info());
    `,
    choices: ["4 8", "0 0", "0 8", "4 0"],
    answer: "C",
    explanation: "The constructor declares a local variable `size`, so within the constructor that name refers to the local variable, not the instance variable. The instance variable `size` keeps its default value 0, while `capacity` is set to 8."
  },
  {
    id: "3.8-15",
    prompt: "In a method of a class, a local variable is declared with the same name as one of the class's instance variables. Within the body of that method, after the declaration, what does that name refer to?",
    choices: [
      "The instance variable, because instance variables are declared first in the class",
      "The local variable",
      "Both variables, so assigning a value through the name changes both of them",
      "Neither; the class does not compile because a local variable cannot have the same name as an instance variable"
    ],
    answer: "B",
    explanation: "When a local variable or parameter has the same name as an instance variable, the name refers to the local variable within the body of that method or constructor. This is legal Java, but it hides the instance variable."
  },
  {
    id: "3.8-16",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Car
      {
          private int speed;

          public Car(int s)
          {
              speed = s;
          }

          public void accelerate(int speed)
          {
              speed = speed + 10;
          }

          public int getSpeed()
          {
              return speed;
          }
      }

      // client code
      Car c = new Car(30);
      c.accelerate(20);
      System.out.println(c.getSpeed());
    `,
    choices: ["40", "50", "20", "30"],
    answer: "D",
    explanation: "Inside `accelerate`, the name `speed` refers to the parameter, which hides the instance variable. Only the parameter changes (to 30), so the object's `speed` is still the 30 set by the constructor."
  },
  {
    id: "3.8-17",
    prompt: "Consider the following method. Which of the following best describes the result of compiling the method and calling `sumTo(4)`?",
    code: `
      public static int sumTo(int n)
      {
          int sum = 0;
          for (int k = 1; k <= n; k++)
          {
              int sum = sum + k;
          }
          return sum;
      }
    `,
    choices: [
      "The method does not compile because `sum` is already defined when it is declared again inside the loop.",
      "The method compiles, and `sumTo(4)` returns 10.",
      "The method compiles, and `sumTo(4)` returns 0 because the loop's `sum` is a different variable.",
      "The method compiles, and `sumTo(4)` returns 4."
    ],
    answer: "A",
    explanation: "The outer `sum` is still in scope inside the loop, and Java does not allow a local variable to be declared again while another local variable with the same name is in scope. Removing `int` inside the loop would make the method return 10."
  },
  {
    id: "3.8-18",
    prompt: "Consider the following code segment. What is printed as a result of executing the code segment?",
    code: `
      int total = 0;
      for (int k = 1; k <= 4; k++)
      {
          int temp = k * 2;
          if (temp > 4)
          {
              int extra = temp - 4;
              total += extra;
          }
          total += 1;
      }
      System.out.println(total);
    `,
    choices: ["6", "4", "10", "14"],
    answer: "C",
    explanation: "`total` is declared outside the loop, so it accumulates. Each pass adds 1, and the passes where `temp` is 6 and 8 also add 2 and 4: 4 + 2 + 4 = 10. `temp` and `extra` are recreated on each pass but are only used within it."
  },
  {
    id: "3.8-19",
    prompt: "Consider the following class. Which of the following can be used to replace /* missing code */ so that `getPerimeter` returns the perimeter of the rectangle?",
    code: `
      public class Rectangle
      {
          private int length;
          private int width;

          public Rectangle(int len, int wid)
          {
              length = len;
              width = wid;
          }

          public int getPerimeter()
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "return 2 * len + 2 * wid;",
      "int length = 0;\nreturn 2 * length + 2 * width;",
      "return 2 * (Rectangle.length + Rectangle.width);",
      "return 2 * length + 2 * width;"
    ],
    answer: "D",
    explanation: "The instance variables `length` and `width` are in scope in every method. The constructor parameters `len` and `wid` exist only inside the constructor. A local `length` would hide the instance variable, and instance variables cannot be accessed through the class name."
  },
  {
    id: "3.8-20",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Mystery
      {
          private int x = 1;

          public int methodA(int y)
          {
              int x = y * 2;
              return x + methodB();
          }

          public int methodB()
          {
              return x * 10;
          }
      }

      // client code
      Mystery m = new Mystery();
      System.out.println(m.methodA(3));
    `,
    choices: ["16", "66", "7", "13"],
    answer: "A",
    explanation: "In `methodA`, the local `x` is 6. The local variable is not visible in `methodB`, so there `x` means the instance variable, which is 1, and `methodB` returns 10. The result is 6 + 10 = 16; choosing 66 assumes `methodB` sees the local `x`."
  },
]);

defineTopic(3, "3.9", "this Keyword", [
  {
    id: "3.9-01",
    prompt: "What is printed when the following client code is executed?",
    code: `
      public class Point
      {
          private int x;

          public Point(int x)
          {
              x = x;
          }

          public int getX()
          {
              return x;
          }
      }

      // client code
      Point p = new Point(5);
      System.out.println(p.getX());
    `,
    choices: ["5", "0", "null", "The code does not compile."],
    answer: "B",
    explanation: "Inside the constructor, the parameter `x` shadows the instance variable, so `x = x;` assigns the parameter to itself. The instance variable keeps its default value of 0. Writing `this.x = x;` would fix it."
  },
  {
    id: "3.9-02",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Pet
      {
          private String name;
          private int age;

          public Pet(String name, int age)
          {
              this.name = name;
              this.age = age;
          }

          public void haveBirthday()
          {
              age++;
          }

          public String getInfo()
          {
              return name + " " + age;
          }
      }

      // client code
      Pet p = new Pet("Rex", 3);
      p.haveBirthday();
      System.out.println(p.getInfo());
    `,
    choices: ["Rex 4", "Rex 3", "null 1", "null 0"],
    answer: "A",
    explanation: "`this.name` and `this.age` refer to the instance variables, so the constructor stores the parameter values in the object. `haveBirthday` then increases `age` to 4."
  },
  {
    id: "3.9-03",
    prompt: "Consider the following class. Which of the following can be used to replace /* missing code */ so that the constructor initializes the instance variables to the values of its parameters?",
    code: `
      public class Student
      {
          private String name;
          private double gpa;

          public Student(String name, double gpa)
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "name = name;\ngpa = gpa;",
      "name = this.name;\ngpa = this.gpa;",
      "this.name = name;\nthis.gpa = gpa;",
      "this.name = this.name;\nthis.gpa = gpa;"
    ],
    answer: "C",
    explanation: "The parameters have the same names as the instance variables, so plain `name` means the parameter. `this.name` refers to the instance variable of the object being constructed, and it must be on the left side of the assignment."
  },
  {
    id: "3.9-04",
    prompt: "Consider the following classes and client code. What is printed as a result of executing the client code?",
    code: `
      public class Player
      {
          private String name;
          private Team team;

          public Player(String name)
          {
              this.name = name;
          }

          public String getName()
          {
              return name;
          }

          public void join(Team t)
          {
              team = t;
              t.addPlayer(this);
          }
      }

      public class Team
      {
          private String roster = "";

          public void addPlayer(Player p)
          {
              roster += p.getName() + " ";
          }

          public String getRoster()
          {
              return roster;
          }
      }

      // client code
      Team t = new Team();
      Player a = new Player("Kim");
      Player b = new Player("Lee");
      b.join(t);
      a.join(t);
      System.out.println(t.getRoster());
    `,
    choices: [
      "Kim Lee",
      "null null",
      "The code does not compile because `this` cannot be passed as an argument.",
      "Lee Kim"
    ],
    answer: "D",
    explanation: "In `join`, `this` is the `Player` the method was called on, and passing it lets the team call back to that player. `b` joins first, so the roster is Lee followed by Kim."
  },
  {
    id: "3.9-05",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Box
      {
          private int size;

          public Box(int size)
          {
              this.size = size;
          }

          public int compareSize(Box other)
          {
              return this.size - other.size;
          }
      }

      // client code
      Box small = new Box(4);
      Box big = new Box(9);
      System.out.println(small.compareSize(big) + " " + big.compareSize(small));
    `,
    choices: ["-5 5", "5 -5", "5 5", "0 0"],
    answer: "A",
    explanation: "In `small.compareSize(big)`, `this` is `small` and `other` is `big`, giving 4 - 9 = -5. In the second call the roles are reversed, giving 5."
  },
  {
    id: "3.9-06",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Square
      {
          private int side;

          public Square(int side)
          {
              this.side = side;
          }

          public int area()
          {
              return side * side;
          }

          public boolean biggerThan(Square other)
          {
              return this.area() > other.area();
          }

          public int areaDifference(Square other)
          {
              if (this.biggerThan(other))
              {
                  return this.area() - other.area();
              }
              return other.area() - area();
          }
      }

      // client code
      Square s1 = new Square(3);
      Square s2 = new Square(5);
      System.out.println(s1.areaDifference(s2));
    `,
    choices: ["-16", "16", "4", "2"],
    answer: "B",
    explanation: "`this.area()` and `area()` both call the method on the current object, `s1`, giving 9; `other.area()` is 25. Since `s1` is not bigger, the method returns 25 - 9 = 16. Choosing 2 compares side lengths instead of areas."
  },
  {
    id: "3.9-07",
    prompt: "Consider the following class. Which of the following implementations of `setHour` will correctly set the instance variable `hour` to the value of the parameter?",
    code: `
      public class Clock
      {
          private int hour;

          public int getHour()
          {
              return hour;
          }

          /* setHour method goes here */
      }

      I.
      public void setHour(int hour)
      {
          this.hour = hour;
      }

      II.
      public void setHour(int h)
      {
          hour = h;
      }

      III.
      public void setHour(int hour)
      {
          hour = this.hour;
      }
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "I uses `this.hour` to reach the instance variable that the parameter hides. II needs no `this` because the parameter has a different name. III copies the instance variable into the parameter, so the object is unchanged."
  },
  {
    id: "3.9-08",
    prompt: "Inside an instance method or constructor, what does the keyword `this` refer to?",
    choices: [
      "The class in which the method is defined",
      "The object whose method or constructor is being called",
      "The most recently created object of the class",
      "The first parameter of the method"
    ],
    answer: "B",
    explanation: "`this` is a reference to the current object: the object the method was called on, or the object being built by a constructor. It is not the class itself."
  },
  {
    id: "3.9-09",
    prompt: "Consider the following class. Which of the following best explains why the class does not compile?",
    code: `
      public class Counter
      {
          private int count;

          public static void reset()
          {
              this.count = 0;
          }

          public int getCount()
          {
              return count;
          }
      }
    `,
    choices: [
      "`count` must be declared `public` to be used with `this`.",
      "`this.count` must be written as `Counter.count`.",
      "A method with a `void` return type cannot use `this`.",
      "`this` cannot be used in a static method because a static method is not called on a particular object."
    ],
    answer: "D",
    explanation: "A static method belongs to the class, so there is no current object for `this` to refer to. Making `reset` an instance method would fix the error."
  },
  {
    id: "3.9-10",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Token
      {
          private int value;

          public Token(int value)
          {
              this.value = value;
          }

          public boolean isSameObject(Token other)
          {
              return this == other;
          }

          public boolean hasSameValue(Token other)
          {
              return this.value == other.value;
          }
      }

      // client code
      Token t1 = new Token(7);
      Token t2 = new Token(7);
      Token t3 = t1;
      System.out.print(t1.isSameObject(t2) + " ");
      System.out.print(t1.isSameObject(t3) + " ");
      System.out.println(t1.hasSameValue(t2));
    `,
    choices: ["true true true", "false true true", "false false true", "false true false"],
    answer: "B",
    explanation: "`this == other` compares references, so it is true only when both refer to the same object, as `t1` and `t3` do. `t1` and `t2` are different objects, but their `value` fields are equal, so `hasSameValue` returns true."
  },
  {
    id: "3.9-11",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Tally
      {
          private int count;

          public Tally addOne()
          {
              count++;
              return this;
          }

          public int getCount()
          {
              return count;
          }
      }

      // client code
      Tally t1 = new Tally();
      Tally t2 = t1.addOne();
      t2.addOne();
      t1.addOne();
      System.out.println(t1.getCount() + " " + t2.getCount());
    `,
    choices: ["2 1", "3 1", "3 3", "2 2"],
    answer: "C",
    explanation: "`return this;` returns a reference to the same object, not a copy, so `t2` and `t1` are aliases. All three calls increase the same `count`, which ends at 3."
  },
  {
    id: "3.9-12",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Banner
      {
          private int width;
          private int height;

          public Banner()
          {
              width = 1;
              height = 1;
          }

          public void resize(int width, int height)
          {
              this.width = width;
              height = height;
          }

          public int getArea()
          {
              return width * height;
          }
      }

      // client code
      Banner b = new Banner();
      b.resize(4, 6);
      System.out.println(b.getArea());
    `,
    choices: ["24", "1", "6", "4"],
    answer: "D",
    explanation: "`this.width = width;` updates the instance variable to 4, but `height = height;` assigns the parameter to itself, so the instance variable `height` stays 1. The area is 4 * 1 = 4."
  },
  {
    id: "3.9-13",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Meter
      {
          private int reading = 50;

          public int combined()
          {
              int reading = 8;
              return this.reading + reading;
          }
      }

      // client code
      Meter m = new Meter();
      System.out.println(m.combined());
    `,
    choices: ["58", "16", "100", "50"],
    answer: "A",
    explanation: "The local variable `reading` (8) hides the instance variable, but `this.reading` still refers to the instance variable (50). The sum is 58."
  },
  {
    id: "3.9-14",
    prompt: "Consider the following classes and client code. What is printed as a result of executing the client code?",
    code: `
      public class Rect
      {
          private int width;
          private int height;

          public Rect(int width, int height)
          {
              this.width = width;
              this.height = height;
          }

          public int getWidth()
          {
              return width;
          }

          public int getHeight()
          {
              return height;
          }

          public boolean fitsIn(Rect other)
          {
              return Geometry.contains(other, this);
          }
      }

      public class Geometry
      {
          public static boolean contains(Rect outer, Rect inner)
          {
              return inner.getWidth() <= outer.getWidth()
                  && inner.getHeight() <= outer.getHeight();
          }
      }

      // client code
      Rect a = new Rect(3, 8);
      Rect b = new Rect(5, 6);
      Rect c = new Rect(6, 9);
      System.out.println(a.fitsIn(b) + " " + a.fitsIn(c) + " " + c.fitsIn(a));
    `,
    choices: ["true false true", "true true false", "false true false", "false false false"],
    answer: "C",
    explanation: "`fitsIn` passes the current object as `inner` and its parameter as `outer`. `a` (3 by 8) does not fit in `b` because 8 > 6, does fit in `c`, and `c` does not fit in `a`. Reversing the arguments gives the second choice's pattern."
  },
  {
    id: "3.9-15",
    prompt: "Which of the following statements about the keyword `this` is true?",
    choices: [
      "A constructor must use `this.x = x;` whenever the class has an instance variable named `x`.",
      "In a static method, `this` refers to the class that contains the method.",
      "When a parameter has the same name as an instance variable, `this.` can be used to refer to the instance variable.",
      "`this` refers to a copy of the current object, so changes made through `this` do not affect the original object."
    ],
    answer: "C",
    explanation: "`this.name` always means the current object's instance variable, even when a parameter or local variable named `name` hides it. `this` is only needed when such a name conflict exists, it cannot be used in static methods, and it refers to the actual object rather than a copy."
  },
  {
    id: "3.9-16",
    prompt: "Consider the following class and client code. What is printed as a result of executing the client code?",
    code: `
      public class Cup
      {
          private int ounces;

          public Cup(int ounces)
          {
              this.ounces = ounces;
          }

          public void trade(Cup other)
          {
              int temp = this.ounces;
              this.ounces = other.ounces;
              other.ounces = temp;
          }

          public int getOunces()
          {
              return ounces;
          }
      }

      // client code
      Cup a = new Cup(8);
      Cup b = new Cup(12);
      Cup c = new Cup(20);
      a.trade(b);
      b.trade(c);
      System.out.println(a.getOunces() + " " + b.getOunces() + " " + c.getOunces());
    `,
    choices: ["12 20 8", "12 8 20", "20 12 8", "8 12 20"],
    answer: "A",
    explanation: "`a.trade(b)` swaps the contents of `a` and `b`, so `a` has 12 and `b` has 8. Then `b.trade(c)` swaps `b` and `c`, giving `b` 20 and `c` 8. Changes through `other` affect the actual argument objects."
  },
  {
    id: "3.9-17",
    prompt: "Consider the following class. Which of the following can be used to replace /* missing code */ so that `absorb` works as intended?",
    code: `
      public class Jar
      {
          private int coins;

          public Jar(int coins)
          {
              this.coins = coins;
          }

          /** Moves all coins from other into this jar, leaving other empty. */
          public void absorb(Jar other)
          {
              /* missing code */
          }

          public int getCoins()
          {
              return coins;
          }
      }
    `,
    choices: [
      "coins += other.coins;\nother.coins = 0;",
      "other.coins = 0;\nthis.coins += other.coins;",
      "this.coins = other.coins;\nother.coins = 0;",
      "other.coins += coins;\ncoins = 0;"
    ],
    answer: "A",
    explanation: "`coins` (the same as `this.coins`) must gain `other.coins` before `other` is emptied. Emptying first adds 0, assigning with `=` loses this jar's original coins, and the last choice moves coins in the wrong direction."
  },
  {
    id: "3.9-18",
    prompt: "Consider the following classes and client code. What is printed as a result of executing the client code?",
    code: `
      public class Owner
      {
          private String name;
          private Dog dog;

          public Owner(String name)
          {
              this.name = name;
              dog = new Dog(this);
          }

          public String getName()
          {
              return name;
          }

          public Dog getDog()
          {
              return dog;
          }
      }

      public class Dog
      {
          private Owner owner;

          public Dog(Owner owner)
          {
              this.owner = owner;
          }

          public Owner getOwner()
          {
              return owner;
          }
      }

      // client code
      Owner o = new Owner("Sam");
      Dog d = o.getDog();
      System.out.println(d.getOwner().getName() + " " + (d.getOwner() == o));
    `,
    choices: [
      "Sam false",
      "null true",
      "The code does not compile because `this` cannot be used inside a constructor.",
      "Sam true"
    ],
    answer: "D",
    explanation: "In the `Owner` constructor, `this` refers to the `Owner` being built, and its `name` is already set. The `Dog` stores that reference, so `d.getOwner()` is the same object as `o` and `==` is true."
  },
  {
    id: "3.9-19",
    prompt: "Consider the following class. Which of the following can be used to replace /* missing code */ so that `transfer` works as intended?",
    code: `
      public class Account
      {
          private double balance;

          public Account(double balance)
          {
              this.balance = balance;
          }

          public void deposit(double amount)
          {
              balance += amount;
          }

          public void withdraw(double amount)
          {
              balance -= amount;
          }

          public double getBalance()
          {
              return balance;
          }

          /** Moves amount from this account into the account other. */
          public void transfer(Account other, double amount)
          {
              /* missing code */
          }
      }
    `,
    choices: [
      "other.withdraw(amount);\nthis.deposit(amount);",
      "this.withdraw(amount);\nother.deposit(amount);",
      "withdraw(amount);\ndeposit(amount);",
      "this.withdraw(amount);\nthis.deposit(amount);"
    ],
    answer: "B",
    explanation: "The money leaves the current object, so `withdraw` is called on `this`, and it goes into `other`. The first choice moves money in the wrong direction, and the last two choices withdraw from and deposit into the same account."
  },
  {
    id: "3.9-20",
    prompt: "Consider the following class. Which of the marked lines causes a compile-time error?",
    code: `
      public class Lamp
      {
          private boolean on;
          private static int lampCount = 0;

          public Lamp()
          {
              this.on = false;              // line 1
              lampCount++;
          }

          public void toggle()
          {
              this.on = !this.on;           // line 2
          }

          public static int getLampCount()
          {
              return this.lampCount;        // line 3
          }
      }
    `,
    choices: ["Line 1 only", "Line 2 only", "Lines 1 and 3 only", "Line 3 only"],
    answer: "D",
    explanation: "Class methods do not have a `this` reference, because they are not called on a particular object, so line 3 is an error; `return lampCount;` would work. In a constructor (line 1) and an instance method (line 2), `this` refers to the current object."
  },
]);
