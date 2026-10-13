/*
  Unit 1: Using Objects and Methods

  Each defineTopic(...) block below is one topic:
      defineTopic(unit number, "topic number", "topic title", [ questions ]);
  Topics appear on the unit page in the order they are listed here.
  Each quiz draws 10 random questions from the topic's list.

  HOW TO ADD A QUESTION
  Copy one { ... } block, paste it inside the topic's [ ... ] list, and edit it.
  Keep the comma between blocks.

    id          A short unique label, e.g. "1.3-21" (shown in error messages only).
    prompt      The question, in "double quotes". Wrap inline code in `backticks`.
    code        Optional. A Java snippet between `backticks` (may span many lines).
                Delete the whole line(s) if the question has no code.
                If the Java code itself contains a backslash, such as "\n", write it
                twice: "\n".
    choices     2 to 5 answers, each in "double quotes". Use `backticks` for inline code.
    answer      The letter of the correct choice: "A", "B", "C", "D" or "E".
    explanation Shown after the student answers. Keep it to a sentence or two.

  To use a double quote inside a "..." string, write \" (for example "say \"hi\"").
*/

defineTopic(1, "1.1", "Introduction to Algorithms, Programming, and Compilers", [
  {
    id: "1.1-01",
    prompt: "Which of the following best describes an algorithm?",
    choices: [
      "A program written in Java that has already been compiled",
      "A finite, ordered set of steps for solving a problem or completing a task",
      "Any sequence of Java statements that compiles without error",
      "A list of the variables that a program uses"
    ],
    answer: "B",
    explanation: "An algorithm is a step-by-step process that can be written in any language, including plain English. It does not have to be Java code or compiled."
  },
  {
    id: "1.1-02",
    prompt: "An algorithm is intended to display the average of three test scores. The steps are listed below in no particular order. In which order should the steps be performed?",
    code: `
      I.   Divide the sum by 3.
      II.  Read the three scores.
      III. Add the three scores to get a sum.
      IV.  Display the result.
    `,
    choices: [
      "I, II, III, IV",
      "II, I, III, IV",
      "III, II, I, IV",
      "II, III, I, IV"
    ],
    answer: "D",
    explanation: "Sequencing matters: the scores must be read before they are added, and the sum must exist before it is divided. Dividing before adding (II, I, III, IV) uses a value that has not been computed yet."
  },
  {
    id: "1.1-03",
    prompt: "Which of the following best describes the role of the compiler?",
    choices: [
      "It checks the code for some errors, such as syntax errors, and those errors must be fixed before the program can be run.",
      "It runs the program one line at a time and displays the output.",
      "It finds and corrects logic errors in the program.",
      "It guarantees that a program that compiles will never stop with an error while it runs."
    ],
    answer: "A",
    explanation: "The compiler checks code for some errors, and errors it detects must be fixed before the program can run. It cannot detect logic errors, and a program that compiles can still have a run-time error."
  },
  {
    id: "1.1-04",
    prompt: "A programmer types a statement but forgets to put a semicolon at the end of it. Which of the following best describes the result of attempting to compile and run the program?",
    choices: [
      "The program runs normally because the semicolon is optional.",
      "The program compiles, but a run-time error occurs when that statement is reached.",
      "The compiler reports a syntax error, so the program does not run.",
      "The program runs but produces incorrect output because of a logic error."
    ],
    answer: "C",
    explanation: "Leaving out a required semicolon breaks the rules of the language, which is a syntax error. The compiler detects it, and the program cannot be run until it is fixed."
  },
  {
    id: "1.1-05",
    prompt: "A programmer suspects that a program for computing a restaurant tip contains a logic error. Which of the following is the best way to find out?",
    choices: [
      "Compile the program, because the compiler reports all logic errors.",
      "Check that the program has no syntax errors, because a program with no syntax errors has no logic errors.",
      "Run the program with specific input values whose correct results are known, and compare the output to the expected results.",
      "Read the comments in the program, because comments are checked when the program runs."
    ],
    answer: "C",
    explanation: "Logic errors are found by testing the program with specific data to see whether it produces the expected outcome. The compiler cannot detect them, because a program with a logic error follows all the rules of the language."
  },
  {
    id: "1.1-06",
    prompt: "Which of the following is an example of a run-time error?",
    choices: [
      "While a program is running, it attempts an operation that cannot be carried out, and the program stops abnormally with an error message.",
      "A statement is missing a closing parenthesis.",
      "A program that should compute the area of a rectangle computes its perimeter instead.",
      "A required word in a statement is misspelled, so the compiler reports an error."
    ],
    answer: "A",
    explanation: "A run-time error happens during execution and typically makes the program terminate abnormally. The missing parenthesis and the misspelled word are syntax errors found by the compiler, and the wrong formula is a logic error."
  },
  {
    id: "1.1-07",
    prompt: "Which of the following statements about exceptions is true?",
    choices: [
      "An exception is reported by the compiler before the program runs.",
      "When an exception occurs, the program automatically skips the statement and continues normally.",
      "An exception can occur only when a program contains a syntax error.",
      "An exception is a type of run-time error that interrupts the normal flow of a program's execution."
    ],
    answer: "D",
    explanation: "An exception is a run-time error that was not detected by the compiler. It occurs while the program runs and interrupts the normal flow of execution, typically making the program stop. A program with a syntax error never compiles, so it cannot run long enough for an exception to occur."
  },
  {
    id: "1.1-08",
    prompt: "Which of the following best describes an integrated development environment (IDE)?",
    choices: [
      "It is the only way a Java program can be compiled.",
      "It is a tool that provides an editor, compiler access, and other features that help programmers write, run, and debug programs.",
      "It guarantees that a program contains no logic errors.",
      "It is a collection of the values that a program displays as output."
    ],
    answer: "B",
    explanation: "An IDE bundles tools such as an editor, compiler, and debugger in one place. Programs can also be compiled without an IDE, and no tool can guarantee the absence of logic errors."
  },
  {
    id: "1.1-09",
    prompt: "Which of the following statements about representing an algorithm is true?",
    choices: [
      "An algorithm can be represented using written language or a diagram, such as a flowchart, before any program code is written.",
      "An algorithm must be written in a programming language such as Java.",
      "A diagram cannot represent an algorithm, because a diagram cannot show the order of the steps.",
      "A set of steps becomes an algorithm only after it has been compiled."
    ],
    answer: "A",
    explanation: "Algorithms are step-by-step processes, and they can be described in plain written language or with diagrams. Program code is just one more way to express an algorithm."
  },
  {
    id: "1.1-10",
    prompt: "Which of the following errors will be detected by the compiler?",
    code: `
      I.   A statement that is missing its semicolon
      II.  A calculation that fails only for certain values that
           are entered while the program is running
      III. A misspelled word that the programming language requires
    `,
    choices: [
      "I only",
      "II only",
      "I and III only",
      "I, II, and III"
    ],
    answer: "C",
    explanation: "Missing semicolons and misspelled required words break the rules of the language, so they are syntax errors found by the compiler. A problem that appears only for certain values entered while the program runs cannot be detected until the program runs, so the compiler does not report it."
  },
  {
    id: "1.1-11",
    prompt: "A program asks the user for the number of people sharing a bill and divides the total by that number. The program works for most inputs, but when the user enters `0`, it stops abnormally and displays an error message. Which of the following best describes this error?",
    choices: [
      "A syntax error, which is detected by the compiler",
      "A logic error, which is detected by the compiler",
      "It is not an error, because a program is allowed to stop whenever an input is unusual.",
      "A run-time error, which occurs only while the program is executing"
    ],
    answer: "D",
    explanation: "The program compiles, so it is not a syntax error, and the problem depends on a value entered at run time. A mistake that makes a running program terminate abnormally is a run-time error. (Topic 1.3 covers the specific exception for this case.)"
  },
  {
    id: "1.1-12",
    prompt: "A robot stands on square 0 of a long row of numbered squares, facing toward the higher-numbered squares. It follows the steps below one at a time, in order. On which square does the robot finish?",
    code: `
      1. Move forward 5 squares.
      2. Turn around.
      3. Move forward 2 squares.
      4. Turn around.
      5. Move forward 1 square.
    `,
    choices: ["2", "4", "3", "8"],
    answer: "B",
    explanation: "The steps are completed one at a time: the robot reaches square 5, turns, moves back to square 3, turns again, and moves forward to square 4. Ignoring the turns gives 8, and missing the second turn gives 2."
  },
  {
    id: "1.1-13",
    prompt: "Which of the following statements about writing and running programs is true?",
    choices: [
      "Programs can be written only inside an integrated development environment (IDE).",
      "Code can be written in any text editor, but an IDE is often used because it provides tools to write, compile, and run code.",
      "An IDE runs programs without compiling them.",
      "Code written in a plain text editor can never be compiled."
    ],
    answer: "B",
    explanation: "Any text editor can be used to write code. An IDE is popular because it brings writing, compiling, and running together in one place, but the code still has to be compiled."
  },
  {
    id: "1.1-14",
    prompt: "A student's program compiles and runs to completion without any error messages, but the value it prints is not what the student expected. Which of the following is the most likely explanation?",
    choices: [
      "The program contains a logic error.",
      "The program contains a syntax error.",
      "The program threw an exception.",
      "The compiler translated the program incorrectly."
    ],
    answer: "A",
    explanation: "A syntax error would stop compilation and an exception would stop execution with a message. A program that runs but gives the wrong result has a logic error."
  },
  {
    id: "1.1-15",
    prompt: "A programmer clicks Compile and receives the message `error: ';' expected`. Which of the following statements is true?",
    choices: [
      "The program ran but threw an exception on the line with the missing semicolon.",
      "The message describes a logic error that was found by testing.",
      "The compiler found a syntax error, and the program cannot be run until the error is fixed.",
      "The program will still run but will skip the line with the missing semicolon."
    ],
    answer: "C",
    explanation: "This is a syntax error, which is detected by the compiler. Errors that the compiler detects must be fixed before the program can be run."
  },
  {
    id: "1.1-16",
    prompt: "Cup A holds apple juice, cup B holds orange juice, and cup C is empty. An algorithm is intended to exchange the contents of cups A and B. The steps are listed below in no particular order. In which order must the steps be performed?",
    code: `
      I.   Pour cup B into cup A.
      II.  Pour cup A into cup C.
      III. Pour cup C into cup B.
    `,
    choices: [
      "I, II, III",
      "II, III, I",
      "III, II, I",
      "II, I, III"
    ],
    answer: "D",
    explanation: "Cup A must be emptied into C first, then B can be poured into A, and finally C is poured into B. Pouring B into A first would mix the two juices, which shows why the order of steps matters."
  },
  {
    id: "1.1-17",
    prompt: "Which of the following statements about compile-time errors and run-time errors is true?",
    choices: [
      "A program with a compile-time error cannot be run, while a program with a run-time error compiles but stops abnormally while running.",
      "Both compile-time errors and run-time errors are detected by the compiler.",
      "Run-time errors are always caused by missing punctuation.",
      "A program with a logic error will never compile."
    ],
    answer: "A",
    explanation: "Compile-time errors prevent the program from being translated and run. Run-time errors, such as exceptions, happen only during execution of code that compiled successfully."
  },
  {
    id: "1.1-18",
    prompt: "A program is intended to compute the area of a rectangle by multiplying its length by its width. Which of the following mistakes would be detected only by testing, because the program would still compile and run without an error message?",
    code: `
      I.   The formula adds the length and width instead of multiplying them.
      II.  The statement that computes the area is missing its semicolon.
      III. A required word in the statement is misspelled.
    `,
    choices: [
      "II only",
      "II and III only",
      "I and III only",
      "I only"
    ],
    answer: "D",
    explanation: "Mistake I follows the rules of the language but uses the wrong formula, so it is a logic error found only by testing. Mistakes II and III break the language's rules, so they are syntax errors that the compiler reports."
  },
  {
    id: "1.1-19",
    prompt: "A program compiles without any errors. While it is running, an exception occurs during the fifth statement. Which of the following best describes what happens?",
    choices: [
      "The compiler reports the exception, and the program does not start.",
      "The fifth statement is skipped, and the program continues normally with the sixth statement.",
      "The normal flow of the program's execution is interrupted, and the program stops abnormally.",
      "The program automatically restarts from its first statement."
    ],
    answer: "C",
    explanation: "An exception is a run-time error that was not detected by the compiler. It interrupts the normal flow of execution, and the program typically terminates abnormally instead of continuing."
  },
  {
    id: "1.1-20",
    prompt: "A student compiles a program, and the compiler reports three errors. The student fixes two of the errors and then tries to run the program. Which of the following statements is true?",
    choices: [
      "The program runs and skips the line that still contains an error.",
      "The program cannot be run until the remaining error is fixed.",
      "The program runs until it reaches the remaining error and then throws an exception.",
      "The compiler fixes the remaining error automatically, and the program runs."
    ],
    answer: "B",
    explanation: "Errors that the compiler detects must all be fixed before the program can be run. Fixing only some of them is not enough."
  }
]);

defineTopic(1, "1.2", "Variables and Data Types", [
  {
    id: "1.2-01",
    prompt: "Which of the following lists contains only primitive types?",
    choices: [
      "`int`, `String`",
      "`int`, `double`, `boolean`",
      "`String` only",
      "`double`, `String`, `boolean`"
    ],
    answer: "B",
    explanation: "The three primitive types used in this course are `int`, `double`, and `boolean`. `String` is a class, so it is a reference type."
  },
  {
    id: "1.2-02",
    prompt: "A program needs to store a student's grade point average, such as `3.75`. Which of the following declarations is most appropriate?",
    choices: [
      "`int gpa = 3.75;`",
      "`boolean gpa = 3.75;`",
      "`String gpa = 3.75;`",
      "`double gpa = 3.75;`"
    ],
    answer: "D",
    explanation: "A GPA can have a fractional part, so `double` is the right type. Assigning `3.75` to an `int`, `boolean`, or `String` variable does not compile."
  },
  {
    id: "1.2-03",
    prompt: "A program needs a variable that records whether a light is currently on. Which data type is most appropriate?",
    choices: ["`boolean`", "`int`", "`double`", "`String`"],
    answer: "A",
    explanation: "A value that can only be on or off is best represented by a `boolean`, which holds `true` or `false`."
  },
  {
    id: "1.2-04",
    prompt: "Which of the following best describes a data type?",
    choices: [
      "The name given to a variable",
      "The location in memory where a single value is stored",
      "A set of values together with a set of operations that can be performed on those values",
      "A statement that creates a new variable"
    ],
    answer: "C",
    explanation: "A data type defines which values are allowed and which operations can be done with them. A variable's name and its storage location are properties of the variable, not of the type."
  },
  {
    id: "1.2-05",
    prompt: "Data types in Java can be placed into which two categories?",
    choices: [
      "Whole numbers and decimal numbers",
      "Numbers and text",
      "Variables and constants",
      "Primitive types and reference types"
    ],
    answer: "D",
    explanation: "Every data type is either a primitive type (such as `int`, `double`, and `boolean`) or a reference type (such as `String`). Whole numbers and decimals are both handled by primitive types."
  },
  {
    id: "1.2-06",
    prompt: "Which of the following values is an `int` value?",
    choices: ["`7.5`", "`-12`", "`true`", "`4.25`"],
    answer: "B",
    explanation: "An `int` value is an integer, and integers can be negative. `7.5` and `4.25` are real numbers with fractional parts, so they are `double` values, and `true` is a `boolean` value."
  },
  {
    id: "1.2-07",
    prompt: "Which of the following statements is true?",
    choices: [
      "A variable of a reference type, such as `String`, stores a reference to an object rather than storing the object's data directly.",
      "A variable of type `int` stores a reference to an integer object.",
      "`String` is a primitive type because strings are used so often.",
      "A variable of type `double` stores a reference to a decimal object."
    ],
    answer: "A",
    explanation: "Primitive variables (`int`, `double`, `boolean`) hold their values directly, while reference variables refer to objects. `String` is a reference type even though it is used often."
  },
  {
    id: "1.2-08",
    prompt: "Which of the following describes all of the values that can be stored in a variable of type `boolean`?",
    choices: [
      "`0` and `1`",
      "`true` and `false` only",
      "Any whole number",
      "`yes`, `no`, and `maybe`"
    ],
    answer: "B",
    explanation: "A `boolean` value is either `true` or `false`, and nothing else. Java does not treat `0` and `1` as `boolean` values."
  },
  {
    id: "1.2-09",
    prompt: "A program needs a variable to hold a person's name, which is a sequence of letters. Which of the following is the most appropriate type for the variable?",
    choices: [
      "`int`, because each letter could be given a number",
      "`boolean`, because a name is either entered or not entered",
      "`String`, a reference type, because a name is not a number or a Boolean value",
      "`double`, because a name can be long"
    ],
    answer: "C",
    explanation: "The primitive types store numbers and Boolean values. A name is text, so it is represented by a `String` object, which is a reference type."
  },
  {
    id: "1.2-10",
    prompt: "A program stores the number of students in a class, the average temperature in the classroom, and whether the class has met today. Which of the following lists the most appropriate types, in that order?",
    choices: [
      "`double`, `int`, `String`",
      "`int`, `int`, `int`",
      "`boolean`, `double`, `int`",
      "`int`, `double`, `boolean`"
    ],
    answer: "D",
    explanation: "A count of students is a whole number (`int`), an average temperature can have a fractional part (`double`), and a yes/no fact is a `boolean`."
  },
  {
    id: "1.2-11",
    prompt: "Which of the following best describes a variable?",
    choices: [
      "A value that is typed directly into the code and never changes",
      "A value that is fixed when the program starts and can never change",
      "A storage location that has a name and a data type and holds a value that can change while the program is running",
      "An instruction that the computer carries out"
    ],
    answer: "C",
    explanation: "A variable is a named storage location with an associated data type. Its value can change while the program runs, but its name and type stay the same."
  },
  {
    id: "1.2-12",
    prompt: "Consider the following declarations. Which of the following statements is true?",
    code: `
      int age = 16;
      double height = 5.75;
      boolean member = true;
    `,
    choices: [
      "`age`, `height`, and `member` are all reference variables.",
      "Each variable holds a primitive value of its declared type.",
      "`height` holds a reference to an object that stores `5.75`.",
      "`member` holds a whole number."
    ],
    answer: "B",
    explanation: "`int`, `double`, and `boolean` are primitive types, so each variable holds a primitive value of its own type directly. `member` holds the `boolean` value `true`, not a number."
  },
  {
    id: "1.2-13",
    prompt: "Which of the following is best represented by a variable of type `double`?",
    choices: [
      "The number of students absent today",
      "Whether a door is locked",
      "The average rainfall for a month, in inches",
      "The number of wheels on a car"
    ],
    answer: "C",
    explanation: "An average rainfall can have a fractional part, such as `3.4` inches, so it is a real number and fits `double`. Counts of students and wheels are integers (`int`), and a locked door is a `boolean` fact."
  },
  {
    id: "1.2-14",
    prompt: "Which of the following statements about reference types is true?",
    choices: [
      "A reference type is used to define objects, which are not primitive values.",
      "Reference types are used only to store whole numbers.",
      "`int` and `double` are reference types.",
      "A variable of a reference type can store only the values `true` and `false`."
    ],
    answer: "A",
    explanation: "Reference types are used for objects, such as `String` objects, that are not primitive values. `int`, `double`, and `boolean` are the primitive types."
  },
  {
    id: "1.2-15",
    prompt: "A program declares the variable `score` with the statement `int score = 0;`. Later in the program, the value stored in `score` becomes `15`. Which of the following statements is true?",
    choices: [
      "This is allowed, because the value of a variable can change while the program is running, and `score` is still an `int` variable.",
      "This is not allowed, because a variable can hold only the value it was given when it was declared.",
      "When the value changes, the type of `score` changes as well.",
      "A second variable named `score` is created to hold `15`."
    ],
    answer: "A",
    explanation: "A variable is a storage location whose value can change while the program runs. Its name and data type stay the same. (Topic 1.4 covers the assignment statements that change a value.)"
  },
  {
    id: "1.2-16",
    prompt: "Which of the following best explains why `boolean` is considered a data type?",
    choices: [
      "It is a word that Java recognizes.",
      "It stores a reference to an object.",
      "It defines a set of values (`true` and `false`) and the operations that can be performed on those values.",
      "It can hold any number, positive or negative."
    ],
    answer: "C",
    explanation: "Like every data type, `boolean` defines a set of values and the operations that go with them. Its values are only `true` and `false`, and it is a primitive type, not a reference type."
  },
  {
    id: "1.2-17",
    prompt: "Consider the declaration `double rate = 0.05;`. Which of the following correctly identifies its parts?",
    choices: [
      "`double` is the variable's name, and `rate` is its data type.",
      "`double` is the data type, `rate` is the variable's name, and `0.05` is the value stored in the variable.",
      "`rate` is the data type, and `0.05` is the variable's name.",
      "`0.05` is the data type, because it determines what kind of number is stored."
    ],
    answer: "B",
    explanation: "A declaration gives the type first and then the name. Every variable has a name and a data type, and this one starts out holding the value `0.05`."
  },
  {
    id: "1.2-18",
    prompt: "Which of the following best describes a value of type `double`?",
    choices: [
      "A whole number only",
      "Either `true` or `false`",
      "A sequence of characters",
      "A real number, which can have a fractional part, such as `2.5`"
    ],
    answer: "D",
    explanation: "A `double` value is a real number. Whole numbers are `int` values, `true` and `false` are `boolean` values, and a sequence of characters is a `String`."
  },
  {
    id: "1.2-19",
    prompt: "A programmer is designing a program for a library. Which of the following is best represented by a reference type rather than a primitive type?",
    choices: [
      "The number of books a member has checked out",
      "Whether the library is currently open",
      "The late fee per day, in dollars",
      "A book, which has a title, an author, and a number of pages"
    ],
    answer: "D",
    explanation: "A book is made of several pieces of data, so it is best represented as an object, which uses a reference type. The other items are single numbers or a single true/false fact, which fit the primitive types `int`, `double`, and `boolean`."
  },
  {
    id: "1.2-20",
    prompt: "Assume `num` is an `int` variable that holds `42` and `word` is a `String` variable whose text is the two characters 4 and 2. Which of the following statements is true?",
    choices: [
      "`num` stores the primitive value 42 directly, while `word` stores a reference to a `String` object.",
      "`num` and `word` store exactly the same kind of data.",
      "Both `num` and `word` are primitive variables.",
      "Both `num` and `word` store references to objects."
    ],
    answer: "A",
    explanation: "`int` is a primitive type, so `num` holds the number itself. `String` is a reference type, so `word` refers to an object, even though the characters look like a number."
  }
]);

defineTopic(1, "1.3", "Expressions and Output", [
  {
    id: "1.3-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 7;
      int b = 2;
      System.out.println(a / b);
    `,
    choices: ["3.5", "3", "3.0", "4"],
    answer: "B",
    explanation: "`a / b` is integer division because both operands are `int`, so the result is only the integer portion of the quotient, `3`. An `int` result prints without a decimal point, and it is not rounded up to `4`."
  },
  {
    id: "1.3-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.print("A");
      System.out.println("B");
      System.out.print("C");
    `,
    choices: ["AB\nC", "A\nB\nC", "ABC", "A\nBC"],
    answer: "A",
    explanation: "`print` does not move to a new line, so `B` appears right after `A`. `println` moves to the next line after printing `B`, so `C` starts a new line."
  },
  {
    id: "1.3-03",
    prompt: "What is printed as a result of executing the following statement?",
    code: `
      System.out.println("She said \\"hi\\"");
    `,
    choices: [
      "She said \\\"hi\\\"",
      "She said hi",
      "She said \"hi\"",
      "Nothing; a compile-time error occurs."
    ],
    answer: "C",
    explanation: "The escape sequence `\\\"` puts a double-quote character inside a string literal. The backslashes are not printed."
  },
  {
    id: "1.3-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 23;
      System.out.println(x % 4 + x / 4);
    `,
    choices: ["3", "5", "9.75", "8"],
    answer: "D",
    explanation: "`23 % 4` is the remainder `3`, and `23 / 4` is integer division, which gives `5`. The sum is `8`."
  },
  {
    id: "1.3-05",
    prompt: "What is printed as a result of executing the following statement?",
    code: `
      System.out.println(2 + 3 * 4 - 6 / 4);
    `,
    choices: ["12.5", "13", "19", "18"],
    answer: "B",
    explanation: "`*` and `/` are evaluated before `+` and `-`: `3 * 4` is `12` and `6 / 4` is `1` (integer division). Then `2 + 12 - 1` is `13`. Evaluating left to right would give `19`."
  },
  {
    id: "1.3-06",
    prompt: "Which of the following best describes a literal?",
    choices: [
      "A variable whose value cannot change",
      "Any expression that contains an arithmetic operator",
      "The code representation of a fixed value, such as `25`, `3.5`, or `\"hi\"`",
      "The name of a variable"
    ],
    answer: "C",
    explanation: "A literal is a fixed value written directly in the code. `25` is an `int` literal, `3.5` is a `double` literal, and `\"hi\"` is a string literal. A variable's name is not a literal."
  },
  {
    id: "1.3-07",
    prompt: "What is the result of executing the following code segment?",
    code: `
      int total = 50;
      int count = 0;
      System.out.println(total / count);
    `,
    choices: ["0", "50", "Nothing; a compile-time error occurs.", "An `ArithmeticException` is thrown."],
    answer: "D",
    explanation: "Integer division by zero is undefined, so Java throws an `ArithmeticException` at run time. The code compiles because the compiler does not know the value of `count`."
  },
  {
    id: "1.3-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.println(7 / 2 * 2.0);
      System.out.println(7 / 2.0 * 2);
    `,
    choices: ["6.0\n7.0", "7.0\n7.0", "6\n7.0", "6.0\n6.0"],
    answer: "A",
    explanation: "In the first line `7 / 2` is integer division (`3`), and `3 * 2.0` is `6.0`. In the second line `7 / 2.0` is `3.5` because one operand is a `double`, and `3.5 * 2` is `7.0`."
  },
  {
    id: "1.3-09",
    prompt: "Which of the following statements prints `Hello, World` when it is executed?",
    choices: [
      "`System.out.println(Hello, World);`",
      "`System.out.println(\"Hello, World);`",
      "`System.out.println(\"Hello, World\");`",
      "`System.out.println(\"Hello,\" \"World\");`"
    ],
    answer: "C",
    explanation: "A string literal is a sequence of characters enclosed in double quotes, with a quote at each end. Without quotes, `Hello` and `World` are treated as names, and a missing closing quote or two literals placed side by side do not compile."
  },
  {
    id: "1.3-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.print(7 / 2);
      System.out.println(7 % 2);
      System.out.print(7.0 / 2);
    `,
    choices: ["3\n1\n3.5", "31\n3.5", "3.51\n3.5", "31\n3"],
    answer: "B",
    explanation: "`7 / 2` is integer division (`3`) and `7 % 2` is the remainder (`1`). Because the first call is `print`, `1` appears right after `3`, and `println` then ends the line. `7.0 / 2` has a `double` operand, so it is `3.5`."
  },
  {
    id: "1.3-11",
    prompt: "What is printed as a result of executing the following statement?",
    code: `
      System.out.println("C:\\\\new\\\\file");
    `,
    choices: [
      "C:\\new\\file",
      "C:\\\\new\\\\file",
      "C:\\\new\\file",
      "C:newfile"
    ],
    answer: "A",
    explanation: "Each `\\\\` escape sequence prints a single backslash. The `n` after it is an ordinary letter, so no newline is printed."
  },
  {
    id: "1.3-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.print("Go\\nTeam");
      System.out.println("!");
    `,
    choices: ["GoTeam!", "Go\nTeam\n!", "Go\\nTeam!", "Go\nTeam!"],
    answer: "D",
    explanation: "The escape sequence `\\n` inside the string starts a new line, so `Team` appears on the second line. Because the first call is `print`, the `!` follows `Team` on the same line."
  },
  {
    id: "1.3-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 10;
      int b = 3;
      System.out.println((a + b) % 4 * 2);
    `,
    choices: ["16", "2", "5", "13"],
    answer: "B",
    explanation: "The parentheses are evaluated first, giving `13`. Then `%` and `*` have the same precedence and are evaluated left to right: `13 % 4` is `1`, and `1 * 2` is `2`."
  },
  {
    id: "1.3-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.println(10 / 4 + 10 / 4.0);
    `,
    choices: ["4.0", "5.0", "4.5", "4"],
    answer: "C",
    explanation: "`10 / 4` is integer division (`2`). `10 / 4.0` is `2.5` because one operand is a `double`. Adding `2` and `2.5` gives the `double` `4.5`."
  },
  {
    id: "1.3-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int num = 4567;
      System.out.println(num % 10 + num / 10 % 10);
    `,
    choices: ["13", "76", "11", "463"],
    answer: "A",
    explanation: "`num % 10` is the last digit, `7`. `num / 10` is `456`, and `456 % 10` is `6`. Since no `String` is involved, `7 + 6` is added to give `13`."
  },
  {
    id: "1.3-16",
    prompt: "Which of the following expressions evaluates to `2.5`?",
    choices: ["`5 / 2`", "`5 / 2 * 1.0`", "`1.0 * (5 / 2)`", "`5.0 / 2`"],
    answer: "D",
    explanation: "Only `5.0 / 2` divides with a `double` operand. In the other expressions `5 / 2` is integer division and has already produced `2` before any `double` is involved."
  },
  {
    id: "1.3-17",
    prompt: "Assume that `a`, `b`, and `c` are `int` variables that have been properly declared and initialized. Which of the following expressions evaluates to the exact average of the three values?",
    choices: [
      "`(a + b + c) / 3`",
      "`a + b + c / 3.0`",
      "`(a + b + c) / 3.0`",
      "`(a + b + c) / 3 * 1.0`"
    ],
    answer: "C",
    explanation: "Dividing the parenthesized sum by `3.0` performs `double` division. Option A truncates, option D truncates before multiplying, and option B divides only `c` because of precedence."
  },
  {
    id: "1.3-18",
    prompt: "Which of the following statements will cause an `ArithmeticException` to be thrown when executed?",
    code: `
      I.   int r = 10 / 0;
      II.  int r = 10 / (4 / 5);
      III. int r = 0 / 10;
    `,
    choices: ["I only", "II only", "I and III only", "I and II only"],
    answer: "D",
    explanation: "In II, `4 / 5` is integer division and evaluates to `0`, so both I and II divide an `int` by the integer zero and throw an `ArithmeticException`. Dividing `0` by `10` is legal and gives `0`."
  },
  {
    id: "1.3-19",
    prompt: "Consider the following variable declarations. Which of the following expressions evaluates to a value of type `int`?",
    code: `
      int n = 5;
      double x = 2.0;
    `,
    choices: ["`n * x`", "`n % 3 + n / 2`", "`x / n`", "`n + x - x`"],
    answer: "B",
    explanation: "An operation on two `int` values gives an `int`, and `n % 3 + n / 2` uses only `int` values. Every other choice uses `x`, and an operation with at least one `double` gives a `double`, even when the value is a whole number, as in `n + x - x`."
  },
  {
    id: "1.3-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.println("Total:");
      System.out.print(3 + 4);
      System.out.print(" items");
    `,
    choices: ["Total:\n7 items", "Total:7 items", "Total:\n3 + 4 items", "Total:\n34 items"],
    answer: "A",
    explanation: "`println` moves to a new line after `Total:`. The expression `3 + 4` is evaluated and `7` is printed, and the string literal ` items` is printed exactly as written right after it, because `print` does not start a new line."
  }
]);

defineTopic(1, "1.4", "Assignment Statements and Input", [
  {
    id: "1.4-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 5;
      x = x + 3;
      x = x * 2;
      System.out.println(x);
    `,
    choices: ["13", "16", "10", "11"],
    answer: "B",
    explanation: "Each assignment uses the current value of `x`: `5 + 3` is `8`, and then `8 * 2` is `16`."
  },
  {
    id: "1.4-02",
    prompt: "The following code segment is intended to swap the values of `a` and `b`. What are the values of `a` and `b` after the code segment is executed?",
    code: `
      int a = 3;
      int b = 8;
      a = b;
      b = a;
    `,
    choices: ["`a` is 8, `b` is 3", "`a` is 3, `b` is 8", "`a` is 8, `b` is 8", "`a` is 3, `b` is 3"],
    answer: "C",
    explanation: "After `a = b`, both variables hold `8`, and the original `3` is lost. Then `b = a` copies `8` into `b`. A temporary variable is needed to swap correctly."
  },
  {
    id: "1.4-03",
    prompt: "Consider the following code segment. Which of the following can replace `/* missing code */` so that the values of `first` and `second` are swapped?",
    code: `
      int first = 10;
      int second = 20;
      /* missing code */
    `,
    choices: [
      "first = second;\nsecond = first;",
      "int temp = first;\nfirst = second;\nsecond = temp;",
      "int temp = first;\nsecond = first;\nfirst = temp;",
      "int temp = second;\nfirst = second;\nsecond = temp;"
    ],
    answer: "B",
    explanation: "Saving `first` in `temp` keeps its value before it is overwritten, so it can be placed in `second` at the end. Without a correctly used temporary variable, one of the original values is lost."
  },
  {
    id: "1.4-04",
    prompt: "What are the values of `a`, `b`, and `c` after the following code segment is executed?",
    code: `
      int a = 2;
      int b = 5;
      int c = a;
      a = b;
      b = c + a;
      c = b - a;
    `,
    choices: [
      "`a` is 5, `b` is 7, `c` is 2",
      "`a` is 5, `b` is 7, `c` is 5",
      "`a` is 2, `b` is 7, `c` is 5",
      "`a` is 5, `b` is 10, `c` is 5"
    ],
    answer: "A",
    explanation: "`c` gets `2`, then `a` gets `5`. `b` becomes `2 + 5`, which is `7`, and `c` becomes `7 - 5`, which is `2`."
  },
  {
    id: "1.4-05",
    prompt: "Which of the following best describes what happens when the statement `count = count + 1;` is executed?",
    choices: [
      "A compile-time error occurs because `count` cannot equal `count + 1`.",
      "The values of `count` and `count + 1` are compared.",
      "The value `count + 1` is stored in a new variable, and `count` is unchanged.",
      "The right side is evaluated using the current value of `count`, and the result is then stored in `count`."
    ],
    answer: "D",
    explanation: "`=` is the assignment operator, not a statement of equality. The expression on the right is evaluated first, and its value replaces the old value of the variable on the left."
  },
  {
    id: "1.4-06",
    prompt: "Consider the following code segment, which appears inside a method. Which of the following best describes the result of compiling it?",
    code: `
      int total;
      int count = 4;
      total = total + count;
    `,
    choices: [
      "A compile-time error occurs because `total` is used in an expression before it has been assigned a value.",
      "It compiles, and `total` becomes `4` because variables start with the value `0`.",
      "It compiles, and `total` becomes `null`.",
      "It compiles, but a run-time error occurs when the last statement is executed."
    ],
    answer: "A",
    explanation: "Every variable must be assigned a value before it is used in an expression. `total` is declared but never initialized, so the compiler reports an error; it does not assume a starting value of `0`."
  },
  {
    id: "1.4-07",
    prompt: "Assume that the variables `int n;` and `boolean done;` have been declared. Which of the following assignment statements compiles without error?",
    choices: ["`n = 7.5;`", "`done = false;`", "`done = 0;`", "`n = true;`"],
    answer: "B",
    explanation: "The value assigned must be from a compatible data type. `false` is a `boolean` value, so it can be stored in `done`. `7.5` is a `double`, `0` is an `int`, and `true` is a `boolean`, so the other three do not match their variables."
  },
  {
    id: "1.4-08",
    prompt: "Which of the following statements about `null` is true?",
    choices: [
      "`null` can be assigned to an `int` variable to show that it has no value yet.",
      "`null` is another way of writing the number `0`.",
      "A variable that is assigned `null` refers to an object that contains no data.",
      "`null` is a special value that can be assigned to a variable of a reference type, such as `String`, to indicate that it is not associated with any object."
    ],
    answer: "D",
    explanation: "The literal `null` means a reference does not refer to any object. It can be stored only in reference-type variables, not in primitive variables such as `int`, and it is not the same as `0` or an empty object."
  },
  {
    id: "1.4-09",
    prompt: "Consider the following code segment. Which of the following best describes the value of the expression on the right side of the last assignment statement?",
    code: `
      int x = 7;
      double y = 2.0;
      double result;
      result = x / 2 * y;
    `,
    choices: [
      "The `int` value `6`",
      "The `double` value `7.0`",
      "The `double` value `6.0`",
      "Two separate values, `3` and `2.0`"
    ],
    answer: "C",
    explanation: "During execution the expression is evaluated to a single value: `x / 2` is integer division (`3`), and `3 * 2.0` is `6.0`. Because one operand is a `double`, the value has type `double`, and then it is stored in `result`."
  },
  {
    id: "1.4-10",
    prompt: "Which of the following statements about program input is true?",
    choices: [
      "A program can receive input only as text typed at a keyboard.",
      "The `Scanner` class is the only way a Java program can get input.",
      "Input can come in a variety of forms, such as tactile, audio, visual, or text, and the `Scanner` class is one way to obtain text input from the keyboard.",
      "Input is the information that a program displays on the screen."
    ],
    answer: "C",
    explanation: "Input can be touch, sound, images, or text. The `Scanner` class is one way, but not the only way, for a Java program to read text typed at the keyboard. Information a program displays is output, not input."
  },
  {
    id: "1.4-11",
    prompt: "What are the values of `x` and `y` after the following code segment is executed?",
    code: `
      int x = 4;
      int y = x * 3;
      x = y - x;
      y = x / 3;
    `,
    choices: ["`x` is 8, `y` is 4", "`x` is 4, `y` is 12", "`x` is 8, `y` is 2.67", "`x` is 8, `y` is 2"],
    answer: "D",
    explanation: "`y` is `12`, then `x` becomes `12 - 4`, which is `8`. Finally `y` is `8 / 3`, which is `2` because of integer division."
  },
  {
    id: "1.4-12",
    prompt: "Assume that `x` and `y` are `int` variables that have been properly declared and initialized. Which of the following statements causes a compile-time error?",
    choices: ["`x = y + 5;`", "`x = x * x;`", "`x + 1 = y;`", "`y = 2 * x - y;`"],
    answer: "C",
    explanation: "The left side of an assignment must be a variable that can store the value. `x + 1` is an expression, not a variable, so it cannot be assigned to."
  },
  {
    id: "1.4-13",
    prompt: "A smartphone app responds when the user taps the screen, speaks a command, or points the camera at a sign. Which of the following best describes these actions?",
    choices: [
      "They are all output produced by the app.",
      "They are different forms of input: tactile, audio, and visual.",
      "Only typed text counts as input, so none of them are input.",
      "They are errors that the compiler detects."
    ],
    answer: "B",
    explanation: "Input is information given to a program, and it can come in many forms. A tap is tactile input, a spoken command is audio input, and a camera image is visual input."
  },
  {
    id: "1.4-14",
    prompt: "What are the values of `a`, `b`, and `c` after the following code segment is executed?",
    code: `
      int a = 1;
      int b = 2;
      int c = 3;
      int temp = a;
      a = b;
      b = c;
      c = temp;
    `,
    choices: [
      "`a` is 2, `b` is 3, `c` is 1",
      "`a` is 3, `b` is 1, `c` is 2",
      "`a` is 1, `b` is 2, `c` is 3",
      "`a` is 2, `b` is 3, `c` is 2"
    ],
    answer: "A",
    explanation: "`temp` saves `1`. Then `a` gets `2`, `b` gets `3`, and `c` gets the saved `1`, so each value moves one position to the left."
  },
  {
    id: "1.4-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 6;
      n = n * n - n / 4;
      System.out.println(n);
    `,
    choices: ["34.5", "7", "36", "35"],
    answer: "D",
    explanation: "The whole right side is evaluated using the old value `6`: `6 * 6` is `36` and `6 / 4` is `1`, so `n` becomes `35`. Only then is the value stored in `n`."
  },
  {
    id: "1.4-16",
    prompt: "What are the values of `a` and `b` after the following code segment is executed?",
    code: `
      int a = 7;
      int b = 2;
      a = a + b;
      b = a - b;
      a = a - b;
    `,
    choices: ["`a` is 7, `b` is 2", "`a` is 9, `b` is 7", "`a` is 2, `b` is 7", "`a` is 2, `b` is 2"],
    answer: "C",
    explanation: "`a` becomes `9`, then `b` becomes `9 - 2`, which is `7`, and `a` becomes `9 - 7`, which is `2`. This sequence swaps the values without a temporary variable."
  },
  {
    id: "1.4-17",
    prompt: "Consider the following code segment. Which of the following can replace `/* missing code */` so that `x` has the value `10` and `y` has the value `13` after the code segment executes?",
    code: `
      int x = 3;
      int y = 10;
      /* missing code */
    `,
    choices: [
      "x = y;\ny = x + 3;",
      "y = x + y;\nx = y;",
      "x = y;\ny = y + x;",
      "y = x + 3;\nx = y;"
    ],
    answer: "A",
    explanation: "After `x = y`, `x` is `10`, and `y = x + 3` uses the new value of `x`, so `y` is `13`. Option C doubles `y` to `20`, and options B and D leave both variables equal."
  },
  {
    id: "1.4-18",
    prompt: "Consider the following code segment. Which statement initializes the variable `points`?",
    code: `
      int points;
      points = 10;
      points = points + 5;
    `,
    choices: [
      "`int points;`",
      "`points = points + 5;`",
      "None of the statements, because `points` is not given a value when it is declared",
      "`points = 10;`"
    ],
    answer: "D",
    explanation: "A variable is initialized the first time it is assigned a value. The declaration only creates the variable, `points = 10;` gives it its first value, and the last statement changes a value that already exists."
  },
  {
    id: "1.4-19",
    prompt: "What are the values of `x` and `y` after the following code segment is executed?",
    code: `
      double x = 2.5;
      int y = 4;
      x = x * y;
      y = y + 1;
      x = x / y;
    `,
    choices: ["`x` is 2.5, `y` is 5", "`x` is 2.0, `y` is 5", "`x` is 2, `y` is 5", "`x` is 2.0, `y` is 4"],
    answer: "B",
    explanation: "`x` becomes `10.0`, `y` becomes `5`, and then `x` becomes `10.0 / 5`, which is `2.0`. The last statement uses the new value of `y`, not the original `4`."
  },
  {
    id: "1.4-20",
    prompt: "What are the values of `a` and `b` after the following code segment is executed?",
    code: `
      int a = 10;
      int b = 3;
      a = a % b + a / b;
      b = a * b;
    `,
    choices: ["`a` is 4, `b` is 12", "`a` is 4, `b` is 3", "`a` is 13, `b` is 39", "`a` is 4, `b` is 9"],
    answer: "A",
    explanation: "`10 % 3` is `1` and `10 / 3` is `3`, so `a` becomes `4`. Then `b` becomes `4 * 3`, which is `12`, using the new value of `a`."
  }
]);

defineTopic(1, "1.5", "Casting and Range of Variables", [
  {
    id: "1.5-01",
    prompt: "What is printed as a result of executing the following statement?",
    code: `
      System.out.println((int) 7.9);
    `,
    choices: ["8", "7.9", "7", "7.0"],
    answer: "C",
    explanation: "Casting a `double` to an `int` truncates: the fractional part is simply dropped. It does not round, so the result is `7`, not `8`."
  },
  {
    id: "1.5-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double temp = 98.6;
      int t = (int) temp;
      System.out.println(temp);
      System.out.println(t);
    `,
    choices: ["98.6\n98", "98\n98", "98.6\n99", "98.0\n98"],
    answer: "A",
    explanation: "The cast produces a new `int` value, `98`, and stores it in `t`. It does not change `temp`, which still holds `98.6`."
  },
  {
    id: "1.5-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int total = 17;
      int count = 4;
      System.out.println((double) (total / count));
    `,
    choices: ["4.25", "4.0", "4", "5.0"],
    answer: "B",
    explanation: "The parentheses make `total / count` evaluate first as integer division, giving `4`. Casting `4` to `double` gives `4.0`; the lost `.25` cannot be recovered."
  },
  {
    id: "1.5-04",
    prompt: "Assume that `x` is a positive `double` variable. Which of the following expressions evaluates to the value of `x` rounded to the nearest integer?",
    choices: [
      "`(int) x`",
      "`(int) x + 0.5`",
      "`(int) x + 1`",
      "`(int) (x + 0.5)`"
    ],
    answer: "D",
    explanation: "Adding `0.5` before truncating pushes values with a fractional part of `.5` or more up to the next integer. Option B casts first and then adds `0.5`, which produces a `double` such as `2.5`."
  },
  {
    id: "1.5-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int big = Integer.MAX_VALUE;
      big = big + 1;
      System.out.println(big);
    `,
    choices: [
      "2147483648",
      "-2147483648",
      "An `ArithmeticException` is thrown.",
      "2147483647"
    ],
    answer: "B",
    explanation: "`2147483648` is outside the range of `int`, so the result overflows and wraps around to `Integer.MIN_VALUE`. Java does not throw an exception for integer overflow."
  },
  {
    id: "1.5-06",
    prompt: "Which of the following best describes what happens when an `int` expression produces a result greater than `Integer.MAX_VALUE`?",
    choices: [
      "An `ArithmeticException` is thrown.",
      "The compiler always reports an error.",
      "Java automatically converts the result to a `double`.",
      "Integer overflow occurs, and the result wraps around to an incorrect value within the `int` range."
    ],
    answer: "D",
    explanation: "An `int` can hold only values from `Integer.MIN_VALUE` to `Integer.MAX_VALUE`. A result outside that range overflows silently and produces a wrong value, with no exception."
  },
  {
    id: "1.5-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double x = 0.1 + 0.2;
      System.out.println(x);
    `,
    choices: [
      "0.3",
      "0.30000000000000004",
      "0.30",
      "An `ArithmeticException` is thrown."
    ],
    answer: "B",
    explanation: "`0.1` and `0.2` cannot be stored exactly in binary, so the `double` sum has a small round-off error. This is why `double` results can be slightly different from the exact decimal answer."
  },
  {
    id: "1.5-08",
    prompt: "Which of the following statements will compile without error?",
    code: `
      I.   int n = (int) 3.7;
      II.  double d = (double) 5;
      III. int m = 9.0 / 2;
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "Statements I and II use casts that produce the declared type. In III, `9.0 / 2` is a `double`, so storing it in an `int` without a cast does not compile."
  },
  {
    id: "1.5-09",
    prompt: "What is printed as a result of executing the following statement?",
    code: `
      System.out.println((int) -3.8);
    `,
    choices: ["-3", "-4", "3", "-3.8"],
    answer: "A",
    explanation: "Casting to `int` truncates toward zero, so the fractional part is dropped and `-3.8` becomes `-3`. It does not round down to `-4`."
  },
  {
    id: "1.5-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double price = 4.65;
      int rounded = (int) (price + 0.5);
      System.out.println(rounded);
    `,
    choices: ["4", "5.15", "4.65", "5"],
    answer: "D",
    explanation: "`price + 0.5` is about `5.15`, and casting to `int` truncates it to `5`. Adding `0.5` before truncating is how a positive `double` is rounded to the nearest integer."
  },
  {
    id: "1.5-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double x = -2.7;
      int r = (int) (x - 0.5);
      System.out.println(r);
    `,
    choices: ["-3", "-2", "-4", "-3.2"],
    answer: "A",
    explanation: "For a negative number, subtracting `0.5` and then casting rounds to the nearest integer: `-2.7 - 0.5` is `-3.2`, which truncates to `-3`. Using `x + 0.5` would give `(int) -2.2`, which is `-2`, the wrong rounding."
  },
  {
    id: "1.5-12",
    prompt: "Consider the statement `int product = 100000 * 100000;`. Which of the following best describes the result?",
    choices: [
      "`product` stores `10000000000`.",
      "A compile-time error occurs because the result is too large.",
      "The result is outside the range of `int`, so overflow occurs and `product` stores an incorrect value.",
      "An `ArithmeticException` is thrown."
    ],
    answer: "C",
    explanation: "Ten billion is larger than `Integer.MAX_VALUE` (about 2.1 billion). The multiplication overflows silently, so a wrong value is stored and no error or exception occurs."
  },
  {
    id: "1.5-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 9;
      double y = x / 2;
      int z = (int) (y * 2);
      System.out.println(y);
      System.out.println(z);
    `,
    choices: ["4.5\n9", "4.0\n8.0", "4.5\n8", "4.0\n8"],
    answer: "D",
    explanation: "`x / 2` is integer division, so `y` is `4.0`, not `4.5`. Then `y * 2` is `8.0`, which is cast to the `int` `8`."
  },
  {
    id: "1.5-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = 2.9;
      System.out.println((int) d * 3);
      System.out.println((int) (d * 3));
    `,
    choices: ["6\n8", "8\n8", "6\n6", "8.7\n8"],
    answer: "A",
    explanation: "A cast applies only to the value right after it, so `(int) d * 3` is `2 * 3`, which is `6`. In `(int) (d * 3)`, the product `8.7` is computed first and then truncated to `8`."
  },
  {
    id: "1.5-15",
    prompt: "Which of the following expressions evaluate to `2147483647`, the largest value an `int` can hold?",
    code: `
      I.   Integer.MAX_VALUE
      II.  Integer.MIN_VALUE - 1
      III. Integer.MAX_VALUE + 1
    `,
    choices: ["I only", "I and III only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "Subtracting `1` from `Integer.MIN_VALUE` overflows and wraps around to `Integer.MAX_VALUE`. Adding `1` to `Integer.MAX_VALUE` wraps the other way to `Integer.MIN_VALUE`."
  },
  {
    id: "1.5-16",
    prompt: "In which of the following statements is an `int` value automatically converted (widened) to a `double` value?",
    code: `
      I.   double d = 8;
      II.  System.out.println(8 * 1.5);
      III. int n = (int) 8.5;
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "In I, the `int` `8` is widened to `8.0` when it is stored in a `double` variable. In II, `8` is widened so it can be multiplied by the `double` `1.5`. In III, a `double` is explicitly cast to an `int`, which is the opposite direction and is not automatic."
  },
  {
    id: "1.5-17",
    prompt: "Consider the following code segment. Which of the following can replace `/* missing code */` so that `avg` is assigned `4.7`?",
    code: `
      int sum = 47;
      int count = 10;
      double avg = /* missing code */;
    `,
    choices: [
      "`(double) (sum / count)`",
      "`(int) sum / count`",
      "`sum / count`",
      "`(double) sum / count`"
    ],
    answer: "D",
    explanation: "The cast applies to `sum` before the division, so the division is done with a `double` operand and gives `4.7`. In option A the integer division happens first, producing `4.0`."
  },
  {
    id: "1.5-18",
    prompt: "Which of the following statements about the `int` type is true?",
    choices: [
      "An `int` variable can store any whole number, no matter how large.",
      "`int` values must be between `Integer.MIN_VALUE` and `Integer.MAX_VALUE`, inclusive, because an `int` is stored using a fixed number of bits.",
      "`int` values range from `0` to `Integer.MAX_VALUE`, so negative numbers require a `double`.",
      "When a value is too large for an `int`, Java automatically stores it as a `double`."
    ],
    answer: "B",
    explanation: "An `int` uses 32 bits, so its range is `-2147483648` to `2147483647`. Values outside that range cause overflow; Java never changes the variable's type automatically."
  },
  {
    id: "1.5-19",
    prompt: "Assume that `x` is a `double` variable. For which of the following values of `x` does the expression `(int) (x + 0.5)` evaluate to `3`?",
    choices: ["`2.4`", "`3.5`", "`2.5`", "`3.6`"],
    answer: "C",
    explanation: "`2.5 + 0.5` is `3.0`, which truncates to `3`. `2.4` gives `2`, while `3.5` and `3.6` both give `4`, because they round up."
  },
  {
    id: "1.5-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = 0.1 + 0.7;
      int n = (int) (d * 10);
      System.out.println(n);
    `,
    choices: ["7", "8", "0", "8.0"],
    answer: "A",
    explanation: "Because of round-off error, `0.1 + 0.7` is slightly less than `0.8`, so `d * 10` is about `7.999999999999999`. Casting truncates rather than rounds, so `n` is `7`."
  }
]);

defineTopic(1, "1.6", "Compound Assignment Operators", [
  {
    id: "1.6-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 5;
      x += 3;
      x *= 2;
      System.out.println(x);
    `,
    choices: ["16", "13", "11", "10"],
    answer: "A",
    explanation: "`x += 3` makes `x` 8, and `x *= 2` makes it 16. Each compound statement is applied in order to the current value of `x`."
  },
  {
    id: "1.6-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int count = 10;
      count -= 4;
      count++;
      System.out.println(count);
    `,
    choices: ["6", "5", "7", "11"],
    answer: "C",
    explanation: "`count -= 4` makes `count` 6, and `count++` adds 1, giving 7."
  },
  {
    id: "1.6-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 17;
      x /= 3;
      System.out.println(x);
    `,
    choices: ["5.666666666666667", "5", "6", "2"],
    answer: "B",
    explanation: "`x /= 3` means `x = x / 3`, and because `x` is an `int` this is integer division, so 17 / 3 is 5. The answer 2 would come from confusing `/=` with `%=`."
  },
  {
    id: "1.6-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 23;
      n %= 5;
      n *= 4;
      System.out.println(n);
    `,
    choices: ["16", "3", "92", "12"],
    answer: "D",
    explanation: "`n %= 5` stores the remainder 3 in `n`, and `n *= 4` makes it 12. The answer 16 comes from treating `%=` as division (23 / 5 is 4)."
  },
  {
    id: "1.6-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = 5.0;
      d += 1 / 2;
      System.out.println(d);
    `,
    choices: ["5.5", "5.0", "5", "6.0"],
    answer: "B",
    explanation: "The right side `1 / 2` is evaluated first with integer division and is 0, so `d` stays 5.0. Storing the result in a `double` does not change how `1 / 2` is computed."
  },
  {
    id: "1.6-06",
    prompt: "Which of the following statements is equivalent to `total = total * 3;` for an `int` variable `total`?",
    choices: ["`total *= 3;`", "`total =* 3;`", "`total * 3;`", "`3 *= total;`"],
    answer: "A",
    explanation: "The compound operator `*=` multiplies the variable by the right side and stores the result back in the variable. The operator symbol comes before the `=`, and the variable must be on the left."
  },
  {
    id: "1.6-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 4;
      int b = 6;
      a += b;
      b -= a;
      a *= b;
      System.out.println(a);
      System.out.println(b);
    `,
    choices: ["10\n-4", "40\n-4", "-40\n4", "-40\n-4"],
    answer: "D",
    explanation: "`a` becomes 10, then `b` becomes 6 - 10 = -4, then `a` becomes 10 * -4 = -40. Each statement uses the values produced by the statements before it."
  },
  {
    id: "1.6-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 7;
      x *= 2 + 3;
      System.out.println(x);
    `,
    choices: ["17", "14", "35", "20"],
    answer: "C",
    explanation: "The entire right side is evaluated first, so the statement means `x = x * (2 + 3)`, which is 7 * 5 = 35. The answer 17 comes from computing `x * 2 + 3`."
  },
  {
    id: "1.6-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double avg = 0;
      int sum = 9;
      avg += sum / 2;
      System.out.println(avg);
    `,
    choices: ["4.0", "4.5", "4", "5.0"],
    answer: "A",
    explanation: "`sum / 2` uses integer division because both operands are `int`, giving 4. Adding 4 to the `double` 0.0 gives 4.0, which is printed with a decimal point."
  },
  {
    id: "1.6-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 10;
      x -= 3 - 1;
      System.out.println(x);
    `,
    choices: ["6", "8", "7", "12"],
    answer: "B",
    explanation: "The right side `3 - 1` is evaluated first and is 2, so `x` becomes 10 - 2 = 8. The answer 6 comes from computing `x - 3 - 1` from left to right."
  },
  {
    id: "1.6-11",
    prompt: "Assume `k` is an `int` variable that has been initialized. Which of the following statements have the same effect as `k = k + 1;`?",
    code: `
      I.   k++;
      II.  k += 1;
      III. k =+ 1;
    `,
    choices: ["I only", "II only", "I, II, and III", "I and II only"],
    answer: "D",
    explanation: "Both `k++` and `k += 1` add 1 to `k`. Statement III is `k = +1`, which assigns the value 1 to `k` instead of adding 1."
  },
  {
    id: "1.6-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 9;
      x /= 2;
      x *= 2;
      x += x % 3;
      System.out.println(x);
    `,
    choices: ["9", "8", "10", "11"],
    answer: "C",
    explanation: "`x /= 2` gives 4 (integer division), `x *= 2` gives 8, and `x += x % 3` adds 8 % 3 = 2, giving 10. Dividing and then multiplying by 2 does not restore 9 because the remainder was lost."
  },
  {
    id: "1.6-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int val = 5;
      val *= val;
      val -= 3;
      val /= 4;
      System.out.println(val);
    `,
    choices: ["5.5", "5", "6", "22"],
    answer: "B",
    explanation: "`val` becomes 25, then 22, then 22 / 4 = 5 with integer division. Because `val` is an `int`, the result cannot be 5.5."
  },
  {
    id: "1.6-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int score = 20;
      score--;
      score--;
      score++;
      System.out.println(score);
    `,
    choices: ["19", "18", "20", "21"],
    answer: "A",
    explanation: "Each `--` subtracts 1 and each `++` adds 1, so the net change is -1 and `score` is 19."
  },
  {
    id: "1.6-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 7;
      double d = x;
      d /= 2;
      x /= 2;
      System.out.println(d);
      System.out.println(x);
    `,
    choices: ["3.5\n3.5", "3\n3", "3.5\n3", "3.0\n3"],
    answer: "C",
    explanation: "`d` holds 7.0, so `d /= 2` is floating-point division and gives 3.5. `x /= 2` is integer division and gives 3; dividing `d` has no effect on `x`."
  },
  {
    id: "1.6-16",
    prompt: "The following code segment is intended to double the value of `amount` and then subtract 5, so that 19 is printed. Which of the following can be used to replace `/* missing code */` so that the code segment works as intended?",
    code: `
      int amount = 12;
      /* missing code */
      System.out.println(amount);
    `,
    choices: ["amount *= 2 - 5;", "amount -= 5;\namount *= 2;", "amount *= 2;\namount--;", "amount *= 2;\namount -= 5;"],
    answer: "D",
    explanation: "Multiplying by 2 gives 24 and subtracting 5 gives 19. `amount *= 2 - 5` multiplies by -3, and subtracting before doubling gives 14."
  },
  {
    id: "1.6-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 3;
      int b = 4;
      a += b;
      b += a;
      a += b;
      System.out.println(a);
    `,
    choices: ["18", "14", "11", "25"],
    answer: "A",
    explanation: "`a` becomes 7, then `b` becomes 4 + 7 = 11, then `a` becomes 7 + 11 = 18."
  },
  {
    id: "1.6-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int total = 0;
      total += 5 / 2 * 2;
      total += 5 % 2;
      double result = total;
      result /= 2;
      System.out.println(result);
    `,
    choices: ["3.0", "2.0", "2", "2.5"],
    answer: "D",
    explanation: "`5 / 2 * 2` is 2 * 2 = 4 and `5 % 2` is 1, so `total` is 5. `result` holds 5.0, and `result /= 2` is floating-point division, giving 2.5. The answer 3.0 comes from ignoring integer division in `5 / 2`."
  },
  {
    id: "1.6-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int m = 15;
      m %= 4;
      m++;
      m *= m;
      System.out.println(m);
    `,
    choices: ["9", "16", "4", "64"],
    answer: "B",
    explanation: "`m %= 4` gives 3, `m++` makes it 4, and `m *= m` gives 16. The answer 9 comes from skipping the `m++` statement."
  },
  {
    id: "1.6-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = 10;
      d /= 4;
      int k = (int) d;
      k *= 3;
      d *= k;
      System.out.println(d);
    `,
    choices: ["18.75", "15", "15.0", "12.0"],
    answer: "C",
    explanation: "`d` becomes 2.5, the cast truncates it so `k` is 2, then `k` becomes 6, and `d *= k` gives 2.5 * 6 = 15.0. The answer 18.75 comes from forgetting that the cast drops the decimal part."
  }
]);

defineTopic(1, "1.7", "Application Program Interface (API) and Libraries", [
  {
    id: "1.7-01",
    prompt: "Which of the following best describes a library in Java?",
    choices: [
      "A single method that every Java program must contain",
      "A collection of classes that have already been written and can be used in a program",
      "A file that stores the output produced by a program",
      "A list of all the variables declared in a program"
    ],
    answer: "B",
    explanation: "Libraries are collections of existing classes that programmers can use instead of writing that code themselves."
  },
  {
    id: "1.7-02",
    prompt: "Which of the following best describes what the API documentation for a class tells a programmer?",
    choices: [
      "The exact source code that implements every behavior of the class",
      "Which programs have used the class in the past",
      "How the compiler checks the class for syntax errors",
      "How to use the class, including its attributes and behaviors, without needing to see how it is implemented"
    ],
    answer: "D",
    explanation: "An API specification informs the programmer how to use a class by describing its attributes and behaviors. It does not show the code inside the class, so the class can be used without reading that code."
  },
  {
    id: "1.7-03",
    prompt: "In the documentation for a class, the data each object stores is described by the class's ____, and the actions each object can perform are described by the class's ____. Which of the following correctly fills in the blanks?",
    choices: [
      "attributes; behaviors",
      "behaviors; attributes",
      "packages; libraries",
      "comments; packages"
    ],
    answer: "A",
    explanation: "Attributes are the data related to the class, stored in variables, and behaviors are what an object can do, defined by its methods."
  },
  {
    id: "1.7-04",
    prompt: "The API documentation for a `Lamp` class states that each lamp keeps track of whether it is on and of its brightness level, from 0 to 10. It also states that a lamp can be turned on, turned off, and have its brightness changed. Which of the following can a programmer conclude from this documentation alone?",
    choices: [
      "How the brightness level is stored inside the computer's memory",
      "The exact code that turns the lamp on",
      "That a `Lamp` object stores its brightness and that its brightness can be changed",
      "That the `Lamp` class has no behaviors"
    ],
    answer: "C",
    explanation: "Documentation describes the attributes (whether the lamp is on, its brightness) and behaviors (turning on, turning off, changing brightness) of the class. It does not show how the class is implemented."
  },
  {
    id: "1.7-05",
    prompt: "A programmer is writing a program that needs to work with many colors. A library already contains a `Color` class, and its documentation describes the class's attributes and behaviors. Which of the following is the best approach?",
    choices: [
      "Write a new color class from scratch before using any colors",
      "Copy the documentation into the program, because documentation is program code",
      "Use the existing `Color` class to create the color objects the program needs, using its documentation to learn how",
      "Avoid the class, because classes in a library cannot be used to create objects"
    ],
    answer: "C",
    explanation: "Existing classes and class libraries can be used to create objects. The documentation tells the programmer how to use the class, so there is no need to rewrite it."
  },
  {
    id: "1.7-06",
    prompt: "A program uses a class from a library, but the program's author never sees the code inside that class. Which of the following statements is true?",
    choices: [
      "The author can still use the class correctly by following its API documentation, which describes the class's attributes and behaviors.",
      "The program cannot compile unless the class's code is copied into the same file.",
      "The author must rewrite the class in order to understand what it does.",
      "The class can be used only to store `int` values."
    ],
    answer: "A",
    explanation: "Documentation in API specifications is what makes it possible to understand and use a class without reading its implementation. That is one of the main benefits of libraries."
  },
  {
    id: "1.7-07",
    prompt: "Which of the following best describes a package in Java?",
    choices: [
      "A single object created from a class",
      "A group of related classes",
      "A method that returns a value",
      "A variable that stores a reference to an object"
    ],
    answer: "B",
    explanation: "Classes in the APIs and libraries are grouped into packages, so a package is a group of related classes."
  },
  {
    id: "1.7-08",
    prompt: "The documentation for a `Song` class describes the items listed below. Which of the items are behaviors of a `Song` object?",
    code: `
      I.   The title of the song
      II.  Playing the song
      III. The length of the song, in seconds
      IV.  Pausing the song
    `,
    choices: ["I and III only", "I, II, III, and IV", "II only", "II and IV only"],
    answer: "D",
    explanation: "Behaviors are what an object can do, so playing and pausing the song are behaviors. The title and the length are data stored by the object, so they are attributes."
  },
  {
    id: "1.7-09",
    prompt: "Which of the following correctly describes how attributes and behaviors are represented in a class?",
    choices: [
      "Attributes are defined by methods, and behaviors are stored in variables.",
      "Both attributes and behaviors are stored in variables.",
      "Both attributes and behaviors are defined by packages.",
      "Attributes are stored in variables, and behaviors are defined by methods."
    ],
    answer: "D",
    explanation: "Attributes are the data related to the class, and that data is stored in variables. Behaviors are what objects can do, and they are defined by methods."
  },
  {
    id: "1.7-10",
    prompt: "Which of the following best describes an application programming interface (API) specification?",
    choices: [
      "A program that translates source code so that it can be run",
      "Documentation that informs the programmer how to use the classes in a library",
      "A list of the errors found when a program is compiled",
      "A single class that contains every method a program might need"
    ],
    answer: "B",
    explanation: "An API specification documents the classes in a library so programmers know how to use them. It is not a translator, an error list, or a single class."
  },
  {
    id: "1.7-11",
    prompt: "The documentation for a `Timer` class states that each timer stores the number of seconds remaining, and that a timer can be started, paused, and reset. A student claims, \"The number of seconds remaining is a behavior, because it changes while the timer runs.\" Which of the following best evaluates the student's claim?",
    choices: [
      "The claim is incorrect. The seconds remaining is data stored by the object, so it is an attribute, while starting, pausing, and resetting are behaviors.",
      "The claim is correct, because anything that changes is a behavior.",
      "The claim is correct, because the value of an attribute can never change.",
      "The claim is incorrect, because the seconds remaining is a package."
    ],
    answer: "A",
    explanation: "An attribute is data related to the class and stored in a variable, and that data can change. Behaviors are the actions an object can do, which are defined by methods."
  },
  {
    id: "1.7-12",
    prompt: "Which of the following is NOT typically included in the API documentation for a class?",
    choices: [
      "The type of value each behavior produces",
      "The information needed to create an object of the class",
      "The code inside each method that makes it work",
      "A description of what each method does"
    ],
    answer: "C",
    explanation: "API documentation describes how to use a class, not how it is implemented. Programmers can use a class correctly without seeing the code inside its methods."
  },
  {
    id: "1.7-13",
    prompt: "Which of the following correctly describes the relationship among a library, its classes, and its API specification?",
    choices: [
      "A library is a collection of classes, and the API specification describes how to use those classes.",
      "A class is a collection of libraries, and the API specification lists every program that uses them.",
      "An API specification is a collection of libraries, and each library is a single class.",
      "A library is a single method, and the API specification is the code for that method."
    ],
    answer: "A",
    explanation: "Libraries are collections of classes, and the API specification informs programmers how to use those classes. The other choices reverse or confuse these roles."
  },
  {
    id: "1.7-14",
    prompt: "The documentation for a `Box` class lists the width of the box as one of its attributes. Where is this data stored for a `Box` object?",
    choices: [
      "In a method of the class",
      "In the package that contains the class",
      "In the API documentation",
      "In a variable"
    ],
    answer: "D",
    explanation: "Attributes are data related to the class, and they are stored in variables. Methods define behaviors, and the documentation only describes the attributes."
  },
  {
    id: "1.7-15",
    prompt: "The documentation for a `MusicPlayer` class mentions the current volume level and the ability to play a track. Which of the following correctly classifies these two items?",
    choices: [
      "The volume level is a behavior, and playing a track is an attribute.",
      "The volume level is an attribute, and playing a track is a behavior.",
      "Both are attributes.",
      "Both are behaviors."
    ],
    answer: "B",
    explanation: "The volume level is data that a music player stores, so it is an attribute. Playing a track is something the player can do, so it is a behavior defined by a method."
  },
  {
    id: "1.7-16",
    prompt: "The documentation for a `BankAccount` class describes the following: the account balance, the owner's name, a way to deposit money, a way to withdraw money, and a way to get the balance. Which of these are attributes of a `BankAccount` object?",
    choices: [
      "Depositing and withdrawing money",
      "Getting the balance only",
      "The account balance and the owner's name",
      "All five items listed"
    ],
    answer: "C",
    explanation: "Attributes are the data an object stores, here the balance and the owner's name. Depositing, withdrawing, and getting the balance are behaviors, which are implemented as methods."
  },
  {
    id: "1.7-17",
    prompt: "Which of the following is the best reason for a programmer to use an existing library class rather than writing the same code from scratch?",
    choices: [
      "Programs that use library classes do not need to be compiled.",
      "Library classes have already been written and tested, which saves time and reduces errors.",
      "Library code runs without using any of the computer's memory.",
      "Programs that use library classes cannot contain logic errors."
    ],
    answer: "B",
    explanation: "Reusing tested code saves development time and makes errors less likely. A program using libraries still must be compiled and can still have its own logic errors."
  },
  {
    id: "1.7-18",
    prompt: "The API documentation for the `Integer` class lists `Integer.MAX_VALUE`, which holds the largest value an `int` can hold. Which of the following best describes `Integer.MAX_VALUE`?",
    choices: [
      "An attribute of the `Integer` class, which is data stored in a variable",
      "A behavior of the `Integer` class, which must be called with parentheses",
      "A package that contains the `Integer` class",
      "A library that contains the `Integer` class"
    ],
    answer: "A",
    explanation: "`MAX_VALUE` is data related to the `Integer` class, stored in a variable, so it is an attribute. It is used without parentheses because it is not a method."
  },
  {
    id: "1.7-19",
    prompt: "A student says, \"A library is one big class that contains everything a program needs.\" Which of the following best corrects the student's statement?",
    choices: [
      "A library is a single method that every program calls first.",
      "A library is a list of the variables in a program.",
      "A library is a document that has no connection to any classes.",
      "A library is a collection of many classes, and the classes are grouped into packages."
    ],
    answer: "D",
    explanation: "Libraries are collections of classes, not a single class, and the classes in libraries are grouped into packages of related classes."
  },
  {
    id: "1.7-20",
    prompt: "Which of the following types is defined by a class, making it a reference type?",
    choices: ["`int`", "`boolean`", "`String`", "`double`"],
    answer: "C",
    explanation: "A class defines a specific reference type, and `String` is a class. `int`, `boolean`, and `double` are primitive types, which are not defined by classes."
  }
]);

defineTopic(1, "1.8", "Documentation with Comments", [
  {
    id: "1.8-01",
    prompt: "Which of the following is a correctly written single-line comment in Java?",
    choices: ["`/* compute the area`", "`# compute the area`", "`// compute the area`", "`<!-- compute the area -->`"],
    answer: "C",
    explanation: "A single-line comment starts with `//` and continues to the end of the line. A comment starting with `/*` must be closed with `*/`, and `#` and `<!-- -->` are not Java comment symbols."
  },
  {
    id: "1.8-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 5; // x = 10;
      /* x = 20; */
      x = x + 1;
      System.out.println(x);
    `,
    choices: ["6", "11", "21", "5"],
    answer: "A",
    explanation: "Both `x = 10;` and `x = 20;` are inside comments, so the compiler ignores them. Only `x = x + 1` changes `x`, giving 6."
  },
  {
    id: "1.8-03",
    prompt: "Which of the following best describes what the Java compiler does with comments?",
    choices: [
      "It executes them before the other statements in the program.",
      "It prints them when the program runs.",
      "It checks that they correctly describe the code.",
      "It ignores them, so they do not affect how the program runs."
    ],
    answer: "D",
    explanation: "Comments are for human readers. The compiler skips them, so they never change the program's behavior or output."
  },
  {
    id: "1.8-04",
    prompt: "Which kind of comment is used to write Javadoc documentation for a class or method?",
    choices: ["`// ...`", "`/** ... */`", "`/* ... */`", "`<!-- ... -->`"],
    answer: "B",
    explanation: "Javadoc comments begin with `/**` and end with `*/`. Tools can turn them into API documentation. A `/* */` comment that starts with only one asterisk is an ordinary block comment."
  },
  {
    id: "1.8-05",
    prompt: "Which of the following best describes a precondition?",
    choices: [
      "A condition that must be true just before a method is called in order for the method to work as intended",
      "A condition that is guaranteed to be true after a method has finished executing",
      "A comment that the compiler checks before it runs the method",
      "A statement that throws an exception when a condition is not met"
    ],
    answer: "A",
    explanation: "A precondition is a requirement the caller must satisfy before calling the method. A condition that is true after the method runs is a postcondition."
  },
  {
    id: "1.8-06",
    prompt: "Which of the following best describes a postcondition?",
    choices: [
      "A condition that must be true before a method is called",
      "A comment placed after the last line of a class",
      "A list of the variables that the method uses",
      "A condition that is true after a method executes, describing its outcome, such as what it returns"
    ],
    answer: "D",
    explanation: "A postcondition describes what will be true when the method finishes, such as its return value or how an object's state has changed, provided the preconditions were met."
  },
  {
    id: "1.8-07",
    prompt: "A method's documentation includes the comment `Precondition: num > 0`. A programmer calls the method with `num` equal to -4. Which of the following statements is true?",
    choices: [
      "Java automatically throws an exception because the precondition is not met.",
      "The method is required to print an error message and return.",
      "The method is not expected to check for or handle this case, so its behavior is not guaranteed.",
      "The program will not compile because the value -4 violates the precondition."
    ],
    answer: "C",
    explanation: "A precondition is a promise the caller makes, and the method may assume it is true without checking. Preconditions are only comments, so neither the compiler nor the Java runtime enforces them."
  },
  {
    id: "1.8-08",
    prompt: "A method named `sumTo` works with an `int` value `n` that is given to it when it is called. The method is documented with the comment below. For which of the following values of `n` is the method's precondition violated?",
    code: `
      /**
       * Precondition: n >= 0
       * Postcondition: returns the sum 0 + 1 + 2 + ... + n
       */
    `,
    choices: ["`0`", "`-3`", "`5`", "`100`"],
    answer: "B",
    explanation: "The precondition requires `n >= 0`, and -3 is negative. A value of 0 satisfies `n >= 0`. (Topic 1.9 covers how values are passed to methods.)"
  },
  {
    id: "1.8-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int total = 10;
      /* total = total * 2;
         total = total + 5; */
      total = total - 3; // total = 0;
      System.out.println(total);
    `,
    choices: ["22", "7", "0", "10"],
    answer: "B",
    explanation: "The block comment hides both lines between `/*` and `*/`, and `total = 0;` is after `//`. Only `total = total - 3` runs, so 7 is printed. The answer 22 comes from treating the second line as code."
  },
  {
    id: "1.8-10",
    prompt: "Each of the following comments is placed on its own lines just before a method. Which of the comments can be compiled without error?",
    code: `
      I.   /* This method returns the area */

      II.  // This method returns
           the area

      III. /** Returns the area */
    `,
    choices: ["I only", "I and II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "A `//` comment ends at the end of its line, so the words `the area` on the next line are treated as code and cause a compile-time error. Comments I and III are properly closed block and Javadoc comments."
  },
  {
    id: "1.8-11",
    prompt: "A method that works with two `int` values, `width` and `height`, is documented with the precondition `width > 0 and height > 0` and the postcondition \"returns the area of the rectangle\". Which of the following statements about the method is true?",
    choices: [
      "The method can assume that `width` and `height` are both positive, so it does not need to check them.",
      "The method must return `0` whenever `width` is negative.",
      "The precondition causes a compile-time error if the method is used with a negative `width`.",
      "The postcondition is guaranteed to be true even if the precondition is false."
    ],
    answer: "A",
    explanation: "Code inside the method may rely on the precondition being true. If a caller breaks the precondition, the postcondition is no longer promised, and the compiler does not check comments."
  },
  {
    id: "1.8-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.println("// not a comment");
    `,
    choices: [
      "Nothing is printed.",
      "Nothing is printed because the code does not compile.",
      "not a comment",
      "// not a comment"
    ],
    answer: "D",
    explanation: "Inside a string literal, `//` is just two ordinary characters, not the start of a comment. The whole string is printed."
  },
  {
    id: "1.8-13",
    prompt: "Which of the following best describes the purpose of comments in a program?",
    choices: [
      "To make the program run faster",
      "To give instructions that the compiler follows",
      "To hide parts of the output from the user",
      "To explain the code to people who read it, including other programmers and the original programmer later"
    ],
    answer: "D",
    explanation: "Comments document the code for human readers. They have no effect on speed, compilation, or output."
  },
  {
    id: "1.8-14",
    prompt: "Which of the following comment styles can span multiple lines but is NOT a Javadoc comment?",
    choices: ["`/* ... */`", "`/** ... */`", "`// ...`", "`#* ... *#`"],
    answer: "A",
    explanation: "`/* ... */` is a block comment that may cover several lines. `/** ... */` is the Javadoc form, `//` covers only one line, and `#* *#` is not Java syntax."
  },
  {
    id: "1.8-15",
    prompt: "Consider the following code segment. What is the result of compiling and running it?",
    code: `
      int n = 5;
      /* n = n + 1;
         /* n = n * 2; */
         n = n - 3; */
      System.out.println(n);
    `,
    choices: ["5 is printed.", "2 is printed.", "The code does not compile.", "6 is printed."],
    answer: "C",
    explanation: "Block comments do not nest: the comment ends at the first `*/`. The line `n = n - 3; */` is then treated as code, and the stray `*/` causes a compile-time error."
  },
  {
    id: "1.8-16",
    prompt: "A method named `divide` works with two `int` values, `num` and `den`, and is documented with the comment below. Which of the following statements is true?",
    code: `
      /**
       * Precondition: den != 0
       * Returns num divided by den using integer division
       */
    `,
    choices: [
      "The method does not compile unless it checks whether `den` is 0.",
      "The method does not need to check whether `den` is 0, because the precondition states that it will not be.",
      "Using the method with `den` equal to 0 causes a compile-time error.",
      "The precondition guarantees that the method never returns 0."
    ],
    answer: "B",
    explanation: "Whoever uses the method is responsible for meeting the precondition, so the method may assume `den` is not 0. The compiler ignores comments, so a violation is never reported at compile time."
  },
  {
    id: "1.8-17",
    prompt: "A method that adds money to a bank account is documented with the comment below. The method is used with `amount` equal to `50`, and the precondition is satisfied. Which of the following must be true after the method executes?",
    code: `
      /**
       * Adds amount to the balance of this account.
       * Precondition: amount > 0
       * Postcondition: the balance has increased by amount
       */
    `,
    choices: [
      "The balance is 50 greater than it was before the method executed.",
      "The balance is exactly 50.",
      "The new balance was printed on the screen.",
      "The balance is unchanged, because comments are not executed."
    ],
    answer: "A",
    explanation: "A postcondition must always be true after the method executes, and it can describe the current value of an object's attributes, such as the balance. The comment itself is not executed, but it describes what the method's code does."
  },
  {
    id: "1.8-18",
    prompt: "A method that works with two `int` values, `a` and `b`, is being documented. Which of the following is the most appropriate postcondition for the method?",
    choices: [
      "`a` and `b` are both positive.",
      "The method contains three statements.",
      "Returns the greater of `a` and `b`.",
      "`a` is not equal to `b`."
    ],
    answer: "C",
    explanation: "A postcondition describes the result of the method, such as what it returns. Requirements on `a` and `b` before the call would be preconditions, and how the method is implemented is not a postcondition."
  },
  {
    id: "1.8-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      // System.out.print("A");
      System.out.print("B"); /* System.out.print("C"); */
      System.out.print("D"); // System.out.print("E");
    `,
    choices: ["ABCDE", "BCD", "B", "BD"],
    answer: "D",
    explanation: "Code after `//` on a line and code between `/*` and `*/` is ignored, but the code before a comment on the same line still runs. Only the statements printing B and D execute."
  },
  {
    id: "1.8-20",
    prompt: "Which of the following statements about preconditions is true?",
    choices: [
      "`precondition` is a Java keyword that must appear in the code of the method.",
      "A precondition is typically documented in a comment just before the method.",
      "The compiler reports an error if a call might violate a precondition.",
      "Every method must have at least one precondition."
    ],
    answer: "B",
    explanation: "Preconditions are written in comments, often Javadoc comments above the method. They are not Java syntax, the compiler does not check them, and many methods have none."
  }
]);

defineTopic(1, "1.9", "Method Signatures", [
  {
    id: "1.9-01",
    prompt: "Consider the method header `public static double average(int a, int b)`. Which of the following is the signature of this method?",
    choices: [
      "`public static double average`",
      "`double average(int, int)`",
      "`average`",
      "`average(int, int)`"
    ],
    answer: "D",
    explanation: "A method signature is the method name together with the ordered list of parameter types. The return type and keywords such as `public static` are not part of the signature."
  },
  {
    id: "1.9-02",
    prompt: "A method has the return type `void`. Which of the following statements is true?",
    choices: [
      "The method has no parameters.",
      "The method does not return a value.",
      "The method always returns 0.",
      "The method cannot print any output."
    ],
    answer: "B",
    explanation: "`void` means no value is returned to the caller. A `void` method can still have parameters and can print output."
  },
  {
    id: "1.9-03",
    prompt: "Consider the following method and code segment. In the method call `square(side)`, which of the following is the argument?",
    code: `
      public static int square(int num)
      {
          return num * num;
      }

      // code segment in main
      int side = 6;
      int result = square(side);
    `,
    choices: ["`num`", "`result`", "`side`", "`int`"],
    answer: "C",
    explanation: "An argument is the value passed in a method call, here the value of `side`. `num` is the parameter, the variable in the method header that receives the argument's value."
  },
  {
    id: "1.9-04",
    prompt: "Which of the following pairs of method headers could both appear in the same class without causing a compile-time error?",
    choices: [
      "public static void show(int x)\npublic static void show(double x)",
      "public static int calc(int a)\npublic static double calc(int b)",
      "public static void put(int a, int b)\npublic static void put(int b, int a)",
      "public static int find(int n)\npublic static void find(int n)"
    ],
    answer: "A",
    explanation: "Overloaded methods must have different parameter type lists, and `show(int)` differs from `show(double)`. The other pairs have the same signature, because return types and parameter names are not part of the signature."
  },
  {
    id: "1.9-05",
    prompt: "Consider the following two methods, which appear in the same class. What is printed as a result of executing the code segment in `main`?",
    code: `
      public static void show(int x)
      {
          System.out.print("I");
      }

      public static void show(double x)
      {
          System.out.print("D");
      }

      // code segment in main
      show(5);
      show(5.0);
      show(5 / 2);
    `,
    choices: ["IDI", "IDD", "DDD", "IID"],
    answer: "A",
    explanation: "Java chooses the overload whose parameter type matches the argument. `5` and `5 / 2` are `int` values (5 / 2 is 2), and `5.0` is a `double`. The answer IDD comes from thinking `5 / 2` produces 2.5."
  },
  {
    id: "1.9-06",
    prompt: "Consider the following method and code segment. What is printed as a result of executing the code segment?",
    code: `
      public static void addTen(int n)
      {
          n += 10;
      }

      // code segment in main
      int x = 5;
      addTen(x);
      System.out.println(x);
    `,
    choices: ["15", "10", "5", "Nothing is printed because the code does not compile."],
    answer: "C",
    explanation: "Java passes arguments by value: the parameter `n` gets a copy of 5, and changing `n` does not change `x`. The answer 15 assumes the method can change the caller's variable."
  },
  {
    id: "1.9-07",
    prompt: "Consider the method header `public static double area(double w, int h)`. Which of the following method calls compiles without error?",
    choices: ["`area(3.5, 4.5)`", "`area(4)`", "`area(\"3\", 4)`", "`area(3, 4)`"],
    answer: "D",
    explanation: "The `int` argument 3 can be widened automatically to match the `double` parameter `w`. In `area(3.5, 4.5)` the second argument is a `double`, which cannot be passed to an `int` parameter without a cast."
  },
  {
    id: "1.9-08",
    prompt: "Consider the following two methods, which appear in the same class. Which of the following calls would compile and print `B`?",
    code: `
      public static void m(int a, double b)
      {
          System.out.print("A");
      }

      public static void m(double a, int b)
      {
          System.out.print("B");
      }

      I.   m(1.0, 2)
      II.  m(2, 1.0)
      III. m(1, 2)
    `,
    choices: ["None", "I only", "II only", "I and III only"],
    answer: "B",
    explanation: "Call I matches `m(double, int)` and prints B, and call II matches `m(int, double)` and prints A. Call III could match either method after widening, so it is ambiguous and does not compile."
  },
  {
    id: "1.9-09",
    prompt: "Consider the following method and code segment, which appear in the same class. What is printed as a result of executing the code segment in `main`?",
    code: `
      public static void middle()
      {
          System.out.print("B");
          System.out.print("C");
      }

      // code segment in main
      System.out.print("A");
      middle();
      System.out.print("D");
      middle();
    `,
    choices: ["ADBCBC", "ABCD", "ABCDBC", "BCBCAD"],
    answer: "C",
    explanation: "Each call to `middle` interrupts `main`: the method's statements run, and then control returns to the statement right after the call. So A is printed, then BC, then D, then BC again. The answer ADBCBC assumes the method calls wait until `main` is finished."
  },
  {
    id: "1.9-10",
    prompt: "A method named `repeat` takes a `String` and an `int` as parameters and does not return a value. Which of the following is a correct header for the method?",
    choices: [
      "`public static repeat(String word, int times)`",
      "`public static void repeat(String word, times)`",
      "`public static String repeat(String word, int times)`",
      "`public static void repeat(String word, int times)`"
    ],
    answer: "D",
    explanation: "Every method header needs a return type, `void` when nothing is returned, and each parameter needs both a type and a name."
  },
  {
    id: "1.9-11",
    prompt: "Consider the following method and code segment. What is printed as a result of executing the code segment?",
    code: `
      public static int change(int a, int b)
      {
          a = a + b;
          b = a - b;
          return a * b;
      }

      // code segment in main
      int x = 2;
      int y = 3;
      int z = change(x, y);
      System.out.print(x);
      System.out.print(" ");
      System.out.print(y);
      System.out.print(" ");
      System.out.println(z);
    `,
    choices: ["2 3 10", "5 2 10", "2 3 6", "5 2 6"],
    answer: "A",
    explanation: "Inside the method, `a` becomes 5 and `b` becomes 2, so 10 is returned. `a` and `b` are copies, so `x` and `y` keep their values 2 and 3."
  },
  {
    id: "1.9-12",
    prompt: "Consider the method header `public static int half(int n)`. Which of the following statements compiles without error?",
    choices: [
      "`int r = half(7.0);`",
      "`double r = half(7);`",
      "`int r = half(\"7\");`",
      "`String r = half(7);`"
    ],
    answer: "B",
    explanation: "The `int` returned by `half(7)` can be stored in a `double` variable. A `double` or `String` argument does not match the `int` parameter, and an `int` cannot be assigned to a `String`."
  },
  {
    id: "1.9-13",
    prompt: "Which of the following best describes the parameters of a method?",
    choices: [
      "The values that are passed to the method when it is called",
      "The variables listed in the method header that receive values when the method is called",
      "The value that the method returns",
      "The variables declared in the `main` method"
    ],
    answer: "B",
    explanation: "Parameters are declared in the method header. The values supplied in the call are arguments, and they are copied into the parameters."
  },
  {
    id: "1.9-14",
    prompt: "A class already contains a method with the header `public static int find(String s, int start)`. Which of the following method headers could be added to the same class without causing a compile-time error?",
    choices: [
      "`public static double find(String t, int k)`",
      "`public static void find(String s, int start)`",
      "`public static int find(String target, int index)`",
      "`public static int find(int start, String s)`"
    ],
    answer: "D",
    explanation: "`find(int, String)` has a different ordered list of parameter types, so it is a legal overload. The other headers all have the signature `find(String, int)`; changing only the return type or parameter names does not create a new signature."
  },
  {
    id: "1.9-15",
    prompt: "Consider the following methods and code segment, which appear in the same class. What is printed as a result of executing the code segment in `main`?",
    code: `
      public static void first()
      {
          System.out.print("1");
          second();
          System.out.print("2");
      }

      public static void second()
      {
          System.out.print("3");
      }

      // code segment in main
      first();
      System.out.print("4");
      second();
    `,
    choices: ["13243", "12343", "1324", "31243"],
    answer: "A",
    explanation: "`first` prints 1, then its call to `second` prints 3, and control returns to `first`, which prints 2. Back in `main`, 4 is printed and `second` is called again, printing 3. The answer 12343 assumes the call inside `first` runs only after `first` finishes."
  },
  {
    id: "1.9-16",
    prompt: "A programmer uses a method named `distance` from a library written by someone else. The documentation explains what the method computes and lists its parameters, but the programmer has never seen the code inside the method. Which of the following best describes this situation?",
    choices: [
      "The programmer cannot call the method until reading the statements in the method body.",
      "The method runs automatically when the program starts, so it does not need to be called.",
      "This is procedural abstraction: the programmer can use the method by knowing what it does, without knowing how it was written.",
      "The method's signature includes the statements in the method body, so the programmer must know them to call it."
    ],
    answer: "C",
    explanation: "Procedural abstraction lets a programmer use a method by knowing what it does, even without knowing how it was written. A method runs only when it is called, and its signature is just the name and the ordered list of parameter types."
  },
  {
    id: "1.9-17",
    prompt: "Consider the following method and code segment, which appear in the same class. What is printed as a result of executing the code segment in `main`?",
    code: `
      public static void warn()
      {
          System.out.println("Warning");
      }

      // code segment in main
      System.out.println("Start");
      System.out.println("End");
    `,
    choices: ["Warning\nStart\nEnd", "Start\nWarning\nEnd", "Start\nEnd\nWarning", "Start\nEnd"],
    answer: "D",
    explanation: "A method is a named block of code that runs only when it is called. `warn` is never called, so its statement never executes, no matter where the method appears in the class."
  },
  {
    id: "1.9-18",
    prompt: "Consider the method header `public static String label(String name, int num)`. Which of the following best describes the result of the call `label(5, \"Item\")`?",
    choices: [
      "A compile-time error occurs because the argument types do not match the parameter types in order.",
      "The method runs, and Java reorders the arguments to match the parameters.",
      "The code compiles, but an error occurs when the call is executed.",
      "The method runs and treats 5 as the name and \"Item\" as the number."
    ],
    answer: "A",
    explanation: "Arguments are matched to parameters by position, so the first argument must be a `String` and the second an `int`. Java does not reorder arguments, and the mismatch is detected at compile time."
  },
  {
    id: "1.9-19",
    prompt: "Consider the method header `public static boolean isEven(int num)`. Which of the following statements uses the method correctly?",
    choices: [
      "`int b = isEven(4);`",
      "`isEven(4) = true;`",
      "`boolean b = isEven(4);`",
      "`boolean b = isEven(4.0);`"
    ],
    answer: "C",
    explanation: "The method takes an `int` and returns a `boolean`, so its result can be stored in a `boolean` variable. A `boolean` cannot be stored in an `int`, a method call cannot be assigned to, and 4.0 is not an `int`."
  },
  {
    id: "1.9-20",
    prompt: "Which of the following is NOT part of a method's signature?",
    choices: [
      "The method's name",
      "The method's return type",
      "The number of parameters",
      "The types of the parameters, in order"
    ],
    answer: "B",
    explanation: "A signature is the method name and the ordered list of parameter types. Because the return type is not included, two methods cannot differ only by return type."
  }
]);

defineTopic(1, "1.10", "Calling Class Methods", [
  {
    id: "1.10-01",
    prompt: "The class `Calc` contains the method `public static int cube(int n)`. Which of the following correctly calls this method from a different class?",
    choices: ["`Calc.cube(3)`", "`cube.Calc(3)`", "`Calc(3).cube`", "`Calc.cube[3]`"],
    answer: "A",
    explanation: "A class (static) method is called with the class name, a dot, the method name, and the arguments in parentheses."
  },
  {
    id: "1.10-02",
    prompt: "Consider the following method and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static int triple(int n)
      {
          return n * 3;
      }

      // code segment in main
      int a = triple(4) + 1;
      System.out.println(a);
    `,
    choices: ["15", "12", "16", "13"],
    answer: "D",
    explanation: "`triple(4)` returns 12, and the expression adds 1, giving 13. The answer 15 comes from adding 1 to the argument instead of to the returned value."
  },
  {
    id: "1.10-03",
    prompt: "The class `Weather` contains the method `public static double toFahrenheit(double celsius)`. The statement `double f = toFahrenheit(20.0);` appears in a method of a different class and does not compile. Which of the following best explains the error?",
    choices: [
      "A class method cannot return a `double` value.",
      "Outside the `Weather` class, the class method must be called with the class name and the dot operator, as in `Weather.toFahrenheit(20.0)`.",
      "The argument 20.0 must be an `int` because the method is `static`.",
      "Class methods can be called only from inside the class that defines them."
    ],
    answer: "B",
    explanation: "Class methods are typically called using the class name and the dot operator. The class name may be left off only when the call is inside the defining class, which is not the case here."
  },
  {
    id: "1.10-04",
    prompt: "The class `MathHelper` contains the following class methods. What is printed by the statement `System.out.println(MathHelper.doubleIt(MathHelper.addOne(4)));` in another class?",
    code: `
      public static int addOne(int x)
      {
          return x + 1;
      }

      public static int doubleIt(int x)
      {
          return x * 2;
      }
    `,
    choices: ["9", "8", "10", "12"],
    answer: "C",
    explanation: "The inner call runs first: `addOne(4)` returns 5, and `doubleIt(5)` returns 10. The answer 9 comes from applying the methods in the wrong order."
  },
  {
    id: "1.10-05",
    prompt: "Consider the following method and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static void show(int n)
      {
          System.out.print(n * 2);
          System.out.print(" ");
      }

      // code segment in main
      show(3);
      show(3 + 1);
      System.out.print(5);
    `,
    choices: ["3 4 5", "6 7 5", "6 8 10", "6 8 5"],
    answer: "D",
    explanation: "The argument `3 + 1` is evaluated to 4 before the call, so the method prints 6 and then 8. The final statement prints 5 directly without calling `show`."
  },
  {
    id: "1.10-06",
    prompt: "Consider the following method and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static double half(int n)
      {
          return n / 2;
      }

      // code segment in main
      System.out.println(half(7));
    `,
    choices: ["3.5", "3.0", "3", "4.0"],
    answer: "B",
    explanation: "`n / 2` is integer division and gives 3, which is then converted to the return type `double`, 3.0. A `double` return type does not change how `n / 2` is computed."
  },
  {
    id: "1.10-07",
    prompt: "Consider the following methods and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static int f(int x)
      {
          return x + g(x);
      }

      public static int g(int y)
      {
          return y * y;
      }

      // code segment in main
      System.out.println(f(3) - g(2));
    `,
    choices: ["8", "14", "5", "12"],
    answer: "A",
    explanation: "`f(3)` returns 3 + g(3) = 3 + 9 = 12, and `g(2)` returns 4, so 12 - 4 = 8 is printed."
  },
  {
    id: "1.10-08",
    prompt: "Which of the following best describes a class method?",
    choices: [
      "A method that must be called on an individual object of the class",
      "A method that can only be called from the `main` method",
      "A method declared with the keyword `static` that is called using the class name and does not need an object",
      "A method that cannot have any parameters"
    ],
    answer: "C",
    explanation: "Class methods are declared `static` and belong to the class itself, so no object is needed to call them. They can have parameters and can be called from any method that has access to them."
  },
  {
    id: "1.10-09",
    prompt: "The class `Converter` contains the following class method. A method in a different class needs to store the number of feet in 30 inches in the variable `feet`. Which of the following can replace `/* missing code */` so that this works as intended?",
    code: `
      public static double toFeet(double inches)
      {
          return inches / 12;
      }

      // in a method of a different class
      double feet = /* missing code */;
    `,
    choices: ["`Converter.toFeet(30)`", "`toFeet(30)`", "`Converter.toFeet()`", "`Converter(30).toFeet`"],
    answer: "A",
    explanation: "Outside the `Converter` class, the static method must be called as `Converter.toFeet(...)` with one argument. Calling `toFeet(30)` without the class name only works inside `Converter` itself."
  },
  {
    id: "1.10-10",
    prompt: "Which of the following method headers declares a class method?",
    choices: [
      "`public int area(int w, int h)`",
      "`public void static area(int w, int h)`",
      "`public static int area(int w, int h)`",
      "`public int area(static int w, int h)`"
    ],
    answer: "C",
    explanation: "A class method includes the keyword `static` in its header before the return type and method name. The first header has no `static`, so it declares an instance method, and the other two place `static` where it is not allowed."
  },
  {
    id: "1.10-11",
    prompt: "The class `Converter` contains the class method `public static int toInches(int feet)`. Which of the following statements, appearing in a method of a different class, compile without error?",
    code: `
      I.   int a = Converter.toInches(3);
      II.  int b = toInches(3);
      III. int c = Converter.toInches(2) + Converter.toInches(1);
    `,
    choices: ["I only", "I and III only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "From a different class, the class method is called with the class name and the dot operator, as in I and III. Leaving off the class name, as in II, works only inside `Converter` itself."
  },
  {
    id: "1.10-12",
    prompt: "The class `Scale` contains the following class methods. What is printed as a result of executing the code segment, which appears in a different class?",
    code: `
      public static int up(int n)
      {
          return n + 4;
      }

      public static int down(int n)
      {
          return n - 1;
      }

      // code segment in a different class
      int a = Scale.up(3);
      int b = Scale.down(a) * 2;
      System.out.println(b);
    `,
    choices: ["13", "4", "14", "12"],
    answer: "D",
    explanation: "`Scale.up(3)` returns 7, so `a` is 7. `Scale.down(7)` returns 6, and 6 * 2 is 12. The answer 13 comes from passing `a * 2` to `down` instead of multiplying the returned value by 2."
  },
  {
    id: "1.10-13",
    prompt: "A class method is associated with the class itself rather than with an instance of the class. Which of the following is a result of this?",
    choices: [
      "The method can be called using the class name without first creating an object of the class.",
      "The method can only be called from inside its own class.",
      "The method cannot have parameters or return a value.",
      "Each object of the class has its own separate copy of the method's result."
    ],
    answer: "A",
    explanation: "Because a `static` method belongs to the class, it is called with the class name and the dot operator, and no object is needed. Class methods can have parameters, can return values, and can be called from other classes."
  },
  {
    id: "1.10-14",
    prompt: "The class `Tools` contains the following class methods. What is the result of executing the code segment, which appears in a different class?",
    code: `
      public static int twice(int n)
      {
          return n * 2;
      }

      public static int combine(int a, int b)
      {
          return Tools.twice(a) + twice(b);
      }

      // code segment in a different class
      System.out.println(Tools.combine(4, 1));
    `,
    choices: [
      "9 is printed.",
      "The code does not compile because `twice(b)` is missing the class name.",
      "10 is printed.",
      "The code does not compile because `Tools.twice(a)` cannot use the class name inside `Tools`."
    ],
    answer: "C",
    explanation: "Inside `Tools`, a class method can be called with or without the class name, so both calls in `combine` are legal. `twice(4)` is 8 and `twice(1)` is 2, so 10 is printed."
  },
  {
    id: "1.10-15",
    prompt: "The class `Geometry` contains the method `public static int square(int n)`. Another method inside `Geometry` needs to call `square`. Which of the following calls can be used?",
    code: `
      I.   square(5)
      II.  Geometry.square(5)
      III. Geometry().square(5)
    `,
    choices: ["I only", "II only", "I, II, and III", "I and II only"],
    answer: "D",
    explanation: "Inside its own class, a static method can be called with or without the class name. `Geometry()` is not a valid way to refer to the class, so III does not compile."
  },
  {
    id: "1.10-16",
    prompt: "Consider the following methods and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static int add(int a, int b)
      {
          return a + b;
      }

      public static int sub(int a, int b)
      {
          return a - b;
      }

      // code segment in main
      System.out.println(sub(add(2, 5), add(1, 1)));
    `,
    choices: ["9", "5", "-5", "3"],
    answer: "B",
    explanation: "The arguments are evaluated first: `add(2, 5)` is 7 and `add(1, 1)` is 2. Then `sub(7, 2)` returns 5."
  },
  {
    id: "1.10-17",
    prompt: "Consider the following method and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static double avg(int a, int b)
      {
          return (a + b) / 2.0;
      }

      // code segment in main
      int total = (int) avg(3, 4) + (int) avg(5, 6);
      System.out.println(total);
    `,
    choices: ["9", "9.0", "8", "8.0"],
    answer: "C",
    explanation: "The calls return 3.5 and 5.5, and each cast truncates its value, giving 3 + 5 = 8. The answer 9 comes from adding 3.5 + 5.5 before truncating."
  },
  {
    id: "1.10-18",
    prompt: "Consider the following method and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static int bump(int x)
      {
          x = x + 5;
          return x;
      }

      // code segment in main
      int x = 1;
      int y = bump(x);
      y = bump(y);
      System.out.print(x);
      System.out.print(" ");
      System.out.println(y);
    `,
    choices: ["11 11", "6 11", "1 6", "1 11"],
    answer: "D",
    explanation: "The parameter `x` is a separate copy, so the variable `x` in `main` stays 1. `y` becomes 6 and then 11 because each returned value is stored back in `y`."
  },
  {
    id: "1.10-19",
    prompt: "The class `Geo` contains the following class methods. What is printed as a result of executing the code segment, which appears in a different class?",
    code: `
      public static int perimeter(int w, int h)
      {
          return 2 * w + 2 * h;
      }

      public static int area(int w, int h)
      {
          return w * h;
      }

      // code segment in a different class
      int p = Geo.perimeter(3, Geo.area(1, 2));
      System.out.println(p);
    `,
    choices: ["10", "12", "6", "16"],
    answer: "A",
    explanation: "The argument `Geo.area(1, 2)` is evaluated first and returns 2, so the call is `Geo.perimeter(3, 2)`, which returns 6 + 4 = 10. The answer 12 comes from adding 1 and 2 instead of multiplying them."
  },
  {
    id: "1.10-20",
    prompt: "Consider the following method and code segment, which are in the same class. What is printed as a result of executing the code segment?",
    code: `
      public static int f(int n)
      {
          return n % 4;
      }

      // code segment in main
      int a = f(10) + f(f(7));
      System.out.println(a);
    `,
    choices: ["7", "5", "6", "3"],
    answer: "B",
    explanation: "`f(10)` is 10 % 4 = 2. `f(7)` is 3, and `f(3)` is 3 % 4 = 3, so `a` is 2 + 3 = 5."
  }
]);

defineTopic(1, "1.11", "Math Class", [
  {
    id: "1.11-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = -7;
      int b = 3;
      System.out.println(Math.abs(a) + Math.abs(b));
    `,
    choices: ["-4", "10", "4", "-10"],
    answer: "B",
    explanation: "`Math.abs(-7)` is 7 and `Math.abs(3)` is 3, so 10 is printed. Choosing -4 or 4 means the absolute value was applied after adding instead of to each value."
  },
  {
    id: "1.11-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.println(Math.pow(2, 3));
    `,
    choices: ["6", "8", "6.0", "8.0"],
    answer: "D",
    explanation: "`Math.pow(2, 3)` computes 2 to the third power, which is 8, and `Math.pow` always returns a `double`, so `8.0` is printed. The value 6 comes from confusing a power with multiplication."
  },
  {
    id: "1.11-03",
    prompt: "Consider the following statement. Which of the following best describes the result of compiling and executing it?",
    code: `
      int root = Math.sqrt(16);
    `,
    choices: [
      "The code does not compile because `Math.sqrt` returns a `double`, which cannot be assigned to an `int` variable without a cast.",
      "The code compiles and `root` is assigned the value 4.",
      "The code compiles and `root` is assigned the value 4.0.",
      "The code compiles, but a run-time error occurs because 16 is an `int`."
    ],
    answer: "A",
    explanation: "`Math.sqrt` returns a `double`, and Java does not automatically narrow a `double` to an `int`. A cast such as `(int) Math.sqrt(16)` would be needed."
  },
  {
    id: "1.11-04",
    prompt: "Which of the following best describes the possible values of `n` after the following statement executes?",
    code: `
      int n = (int) (Math.random() * 6) + 1;
    `,
    choices: [
      "Any integer from 0 to 5, inclusive",
      "Any integer from 0 to 6, inclusive",
      "Any integer from 1 to 6, inclusive",
      "Any integer from 1 to 7, inclusive"
    ],
    answer: "C",
    explanation: "`Math.random()` returns a double in [0.0, 1.0). Multiplying by 6 gives [0.0, 6.0), casting to `int` gives 0 through 5, and adding 1 shifts the range to 1 through 6."
  },
  {
    id: "1.11-05",
    prompt: "Which of the following expressions evaluates to a random integer from 5 to 12, inclusive?",
    choices: [
      "`(int) (Math.random() * 8) + 5`",
      "`(int) (Math.random() * 7) + 5`",
      "`(int) (Math.random() * 12) + 5`",
      "`(int) Math.random() * 8 + 5`"
    ],
    answer: "A",
    explanation: "There are 12 - 5 + 1 = 8 possible values, so multiply by 8 to get 0 through 7 after the cast, then add 5. In the last choice the cast applies only to `Math.random()`, which always becomes 0."
  },
  {
    id: "1.11-06",
    prompt: "Assume that the `double` variables `x1`, `y1`, `x2`, and `y2` represent the points (`x1`, `y1`) and (`x2`, `y2`). Which of the following expressions correctly computes the distance between the two points?",
    choices: [
      "`Math.sqrt(Math.pow(x2 - x1, 2) + (y2 - y1) * 2)`",
      "`Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))`",
      "`Math.sqrt(x2 - x1) + Math.sqrt(y2 - y1)`",
      "`Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)`"
    ],
    answer: "B",
    explanation: "The distance is the square root of the sum of the squared differences. The first choice doubles instead of squaring, and the last choice forgets the square root."
  },
  {
    id: "1.11-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double a = 6;
      double b = 8;
      double c = Math.sqrt(a * a + b * b);
      System.out.println(c);
    `,
    choices: ["14.0", "10", "10.0", "100.0"],
    answer: "C",
    explanation: "`a * a + b * b` is 100.0 and its square root is 10.0. Because `Math.sqrt` returns a `double`, the output is `10.0`, not `10`."
  },
  {
    id: "1.11-08",
    prompt: "Which of the following best describes the possible values of the expression `Math.random() * 10`?",
    choices: [
      "Any integer from 0 to 10, inclusive",
      "Any double value from 0.0 to 10.0, inclusive",
      "Any integer from 0 to 9, inclusive",
      "Any double value greater than or equal to 0.0 and less than 10.0"
    ],
    answer: "D",
    explanation: "`Math.random()` returns a `double` that is at least 0.0 and less than 1.0, so multiplying by 10 gives a `double` in [0.0, 10.0). There is no cast, so the result is not an integer, and 10.0 itself is never produced."
  },
  {
    id: "1.11-09",
    prompt: "Which of the following best describes the possible values of `temp` after the following statement executes?",
    code: `
      int temp = (int) (Math.random() * 20) - 10;
    `,
    choices: [
      "Any integer from -10 to 10, inclusive",
      "Any integer from -10 to 9, inclusive",
      "Any integer from -9 to 10, inclusive",
      "Any integer from 0 to 19, inclusive"
    ],
    answer: "B",
    explanation: "`(int) (Math.random() * 20)` produces 0 through 19, and subtracting 10 gives -10 through 9. The upper value 20 is never produced, so 10 is not possible."
  },
  {
    id: "1.11-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = (int) Math.pow(3, 2) + 5 / 2;
      System.out.println(x);
    `,
    choices: ["11", "11.5", "11.0", "12"],
    answer: "A",
    explanation: "`(int) Math.pow(3, 2)` is 9 and `5 / 2` is integer division, giving 2, so `x` is 11. Since `x` is an `int`, no decimal point is printed."
  },
  {
    id: "1.11-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = Math.abs(-2.5) * 2;
      System.out.println(d);
    `,
    choices: ["-5.0", "5", "-5", "5.0"],
    answer: "D",
    explanation: "`Math.abs(-2.5)` is 2.5, and 2.5 * 2 is 5.0. The variable is a `double`, so `5.0` is printed."
  },
  {
    id: "1.11-12",
    prompt: "Which of the following statements assign a random integer from 1 to 100, inclusive, to `n`?",
    code: `
      I.   int n = (int) (Math.random() * 100) + 1;
      II.  int n = (int) (Math.random() * 101);
      III. int n = 100 - (int) (Math.random() * 100);
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "Statement I gives 0 through 99 plus 1, which is 1 through 100. Statement III gives 100 minus 0 through 99, which is also 1 through 100. Statement II gives 0 through 100, so 0 is possible."
  },
  {
    id: "1.11-13",
    prompt: "Assume that `int` variables `a` and `b` have been properly declared and initialized and that the value of `a` is less than the value of `b`. Which of the following expressions evaluates to a random integer from `a` to `b`, inclusive?",
    choices: [
      "`(int) (Math.random() * (b - a + 1)) + a`",
      "`(int) (Math.random() * (b - a)) + a`",
      "`(int) (Math.random() * (b - a + 1))`",
      "`(int) (Math.random() * b) + a`"
    ],
    answer: "A",
    explanation: "There are `b - a + 1` values in the range, so the cast produces 0 through `b - a`, and adding `a` shifts that to `a` through `b`. Using `b - a` is off by one and never produces `b`."
  },
  {
    id: "1.11-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 5;
      int y = 9;
      double result = Math.sqrt(x + y + 2) + Math.pow(x - y, 2);
      System.out.println(result);
    `,
    choices: ["-4.0", "20", "12.0", "20.0"],
    answer: "D",
    explanation: "`Math.sqrt(16)` is 4.0 and `Math.pow(-4, 2)` is 16.0, so `result` is 20.0. Treating `Math.pow(x - y, 2)` as `(x - y) * 2` gives -8 and leads to -4.0."
  },
  {
    id: "1.11-15",
    prompt: "A student's program calls `Math.abs` and `Math.pow`. The program contains no statement that says where the `Math` class comes from. Which of the following best describes what happens when the program is compiled?",
    choices: [
      "The program does not compile because the programmer must write the `Math` class first.",
      "The program compiles because `Math` is part of the `java.lang` package, and classes in `java.lang` are available by default.",
      "The program compiles only if a `Math` object is created before the methods are called.",
      "The program compiles, but each call to a `Math` method returns 0."
    ],
    answer: "B",
    explanation: "The `Math` class is in the `java.lang` package, and classes in `java.lang` are available to every program by default. Its methods are class methods, so no `Math` object is needed."
  },
  {
    id: "1.11-16",
    prompt: "Which of the following expressions evaluates to a random `double` value that is greater than or equal to 2.0 and less than 5.0?",
    choices: [
      "`Math.random() * 5 + 2`",
      "`Math.random() * 2 + 3`",
      "`Math.random() * 3 + 2`",
      "`(int) (Math.random() * 3) + 2`"
    ],
    answer: "C",
    explanation: "`Math.random() * 3` is in [0.0, 3.0), and adding 2 gives [2.0, 5.0). The last choice casts to `int`, so it produces only 2, 3, or 4."
  },
  {
    id: "1.11-17",
    prompt: "Which of the following statements about the `Math` class are true?",
    code: `
      I.   Math is part of the java.lang package, so it is available by default.
      II.  Math contains only class (static) methods.
      III. Math.sqrt(x) can be called as sqrt(x) from any class.
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "`Math` is in `java.lang` and contains only class methods, so I and II are true. A class method is called with its class name from outside its class, so `sqrt(x)` alone does not compile in a programmer's class."
  },
  {
    id: "1.11-18",
    prompt: "Which of the following statements about the methods of the `Math` class is true?",
    choices: [
      "The `Math` methods are static, so they are called using the class name, such as `Math.sqrt(x)`, without creating a `Math` object.",
      "A `Math` object must be created before `Math.abs` can be called.",
      "`Math.pow(2, 3)` returns the `int` value 8.",
      "`Math.random()` can return any value from 0.0 to 1.0, including 1.0."
    ],
    answer: "A",
    explanation: "`Math` methods are class (static) methods called with `Math.` in front. `Math.pow` returns a `double`, and `Math.random()` never returns 1.0."
  },
  {
    id: "1.11-19",
    prompt: "Which of the following expressions evaluates to a random even integer from 0 to 10, inclusive, with each even value possible?",
    choices: [
      "`(int) (Math.random() * 11)`",
      "`2 * (int) (Math.random() * 5)`",
      "`2 * (int) (Math.random() * 6)`",
      "`(int) (2 * Math.random() * 6)`"
    ],
    answer: "C",
    explanation: "`(int) (Math.random() * 6)` is 0 through 5, and doubling gives 0, 2, 4, 6, 8, or 10. Multiplying by 5 never reaches 10, and the last choice doubles before the cast, so odd values are possible."
  },
  {
    id: "1.11-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 7;
      int b = 2;
      double r = Math.sqrt(a / b + 6);
      System.out.println(r);
    `,
    choices: ["3", "3.082207001484488", "9.0", "3.0"],
    answer: "D",
    explanation: "`a / b` is integer division, giving 3, so the argument is 9 and `Math.sqrt(9)` is 3.0. Expecting 3.08... assumes `7 / 2` is 3.5."
  },
]);

defineTopic(1, "1.12", "Objects: Instances of Classes", [
  {
    id: "1.12-01",
    prompt: "Which of the following best describes the relationship between a class and an object?",
    choices: [
      "An object is a blueprint that is used to create classes.",
      "A class and an object are the same thing, and the terms can be used interchangeably.",
      "A class is a blueprint that defines attributes and behaviors, and an object is a specific instance of a class.",
      "A class is a single instance of an object, and each class can be used to create only one object."
    ],
    answer: "C",
    explanation: "A class describes what data (attributes) and actions (behaviors) its objects have. Each object created from the class is an instance with its own attribute values."
  },
  {
    id: "1.12-02",
    prompt: "A library program uses a `Book` class. Each book has a title, an author, and a number of pages. A book can be checked out and returned. Which of the following is an attribute of the `Book` class?",
    choices: [
      "The number of pages",
      "Checking out the book",
      "Returning the book",
      "`Book`"
    ],
    answer: "A",
    explanation: "Attributes are the data each object stores, such as the number of pages. Checking out and returning are behaviors, and `Book` is the name of the class itself."
  },
  {
    id: "1.12-03",
    prompt: "In a video game program, each `Player` object has a name, a score, and a number of lives. A player can move, jump, and lose a life. Which of the following would most appropriately be modeled as a behavior (method) of the `Player` class?",
    choices: ["The player's name", "The player's score", "The number of lives", "Jumping"],
    answer: "D",
    explanation: "Behaviors are actions an object can perform, so jumping is a method. The name, score, and number of lives are data the object stores, so they are attributes."
  },
  {
    id: "1.12-04",
    prompt: "Consider the following variable declarations. Which of the following variables is a reference variable?",
    code: `
      int count = 5;
      String name = "Ana";
      double price = 2.5;
      boolean done = false;
    `,
    choices: ["`count`", "`name`", "`price`", "`done`"],
    answer: "B",
    explanation: "`String` is a class, so `name` holds a reference to a `String` object. `int`, `double`, and `boolean` are primitive types whose variables store the value itself."
  },
  {
    id: "1.12-05",
    prompt: "Which of the following statements about primitive types and reference types is true?",
    choices: [
      "A primitive variable stores the memory address of its value, and a reference variable stores its value directly.",
      "A variable of a reference type holds a reference to an object, while a variable of a primitive type holds the value itself.",
      "`String` is a primitive type because a `String` value can be written as a literal in double quotes.",
      "`double` is a reference type because it can store decimal values."
    ],
    answer: "B",
    explanation: "A reference variable stores a reference to an object, which can be thought of as the object's memory address, while primitive variables such as `int` and `double` hold their values directly. `String` is a class even though literals are allowed."
  },
  {
    id: "1.12-06",
    prompt: "A school wants a program to keep track of its students. For each student it stores a name, a grade level, and a GPA, and each student can enroll in a course. Which of the following is the best design?",
    choices: [
      "Write a separate class for each student, such as `Maria` and `Kevin`.",
      "Write a `Name` class, a `GradeLevel` class, and a `GPA` class, with no class that represents a student.",
      "Create a single `Student` object and change its name each time a different student is needed.",
      "Write a `Student` class with attributes for name, grade level, and GPA and a method for enrolling in a course, then create one `Student` object for each student."
    ],
    answer: "D",
    explanation: "A single class serves as the blueprint, and each real student is represented by a separate instance with its own attribute values. Writing one class per student defeats the purpose of a class."
  },
  {
    id: "1.12-07",
    prompt: "A zoo program needs classes `Animal`, `Lion`, and `Penguin`. Every animal has a name and an age and can eat. Lions and penguins have these same attributes and behaviors, plus some of their own. Which of the following best describes a class hierarchy for these classes?",
    choices: [
      "`Animal` is a superclass that holds the common attributes and behaviors, and `Lion` and `Penguin` are subclasses that can draw upon them.",
      "`Lion` is a superclass of `Animal` because a lion has more attributes than a general animal.",
      "`Lion` and `Penguin` must each repeat the code for the name, age, and eating, because subclasses cannot use a superclass's attributes and behaviors.",
      "`Animal`, `Lion`, and `Penguin` are objects, not classes, because they describe living things."
    ],
    answer: "A",
    explanation: "A class hierarchy puts common attributes and behaviors into a single superclass. Subclasses draw upon them without rewriting them, which creates an inheritance relationship from the subclasses to the superclass."
  },
  {
    id: "1.12-08",
    prompt: "Assume that `Song` is a class. Which of the following correctly declares a variable that can store a reference to a `Song` object?",
    choices: ["`int favorite;`", "`Song = favorite;`", "`Song favorite;`", "`favorite Song;`"],
    answer: "C",
    explanation: "A reference variable is declared like any other variable: the type, here the class name `Song`, followed by the variable name. An `int` variable cannot store an object reference."
  },
  {
    id: "1.12-09",
    prompt: "Which of the following is NOT a primitive type?",
    choices: ["`String`", "`int`", "`double`", "`boolean`"],
    answer: "A",
    explanation: "`String` is a class, so it is a reference type. `int`, `double`, and `boolean` are primitive types."
  },
  {
    id: "1.12-10",
    prompt: "Two objects are created from the same class. Which of the following statements is true?",
    choices: [
      "The two objects must store identical values for all of their attributes.",
      "The two objects can have different sets of methods, depending on how they were created.",
      "The two objects have the same attributes and behaviors, but each object can store different values for its attributes.",
      "Only one of the two objects can call the methods defined in the class."
    ],
    answer: "C",
    explanation: "The class defines which attributes and behaviors every instance has. Each object keeps its own values for those attributes, so two instances can be in different states."
  },
  {
    id: "1.12-11",
    prompt: "An online store program has a `Product` class. Which of the following is best described as an object (an instance of `Product`) rather than a class, attribute, or behavior?",
    choices: [
      "`Product`, the blueprint describing every item the store sells",
      "A specific pair of running shoes with a price of $79.99 and item number 4021",
      "The price that every product has",
      "Applying a discount to a product"
    ],
    answer: "B",
    explanation: "An object is one specific instance with its own attribute values, like one particular pair of shoes. `Product` is the class, price is an attribute, and applying a discount is a behavior."
  },
  {
    id: "1.12-12",
    prompt: "A programmer is designing a `BankAccount` class. Which of the following would be appropriate behaviors (methods) of the class?",
    code: `
      I.   Depositing money into the account
      II.  The current balance of the account
      III. Withdrawing money from the account
    `,
    choices: ["I only", "II only", "II and III only", "I and III only"],
    answer: "D",
    explanation: "Depositing and withdrawing are actions, so they are behaviors. The current balance is data stored by each account, so it is an attribute."
  },
  {
    id: "1.12-13",
    prompt: "Assume that `Car` is a class and that the variable `myCar`, declared with type `Car`, refers to a `Car` object. Which of the following best describes what is stored in `myCar`?",
    choices: [
      "A copy of all the attribute values of the object",
      "The name of the class, `Car`",
      "The methods of the `Car` class",
      "A reference to the object, which can be thought of as the memory address of the object"
    ],
    answer: "D",
    explanation: "A variable of a reference type holds an object reference, which can be thought of as the object's memory address. The object's attribute values are stored in the object itself, not in the variable."
  },
  {
    id: "1.12-14",
    prompt: "Which of the following best explains why writing a class is useful when a program must represent many similar items?",
    choices: [
      "The class is written once and can be used to create many objects, each with its own attribute values.",
      "A class automatically creates one object for every item the program needs.",
      "A class stores the attribute values of all its objects in a single shared variable.",
      "A class allows primitive values such as `int` values to have methods."
    ],
    answer: "A",
    explanation: "A class is a reusable blueprint: one definition, many instances, each with separate state. Objects are only created when the program explicitly creates them."
  },
  {
    id: "1.12-15",
    prompt: "Which of the following statements about the `Object` class is true?",
    choices: [
      "Only classes provided by Java, such as `String`, are subclasses of `Object`.",
      "A class written by a programmer is a subclass of `Object` only if it has no attributes.",
      "Every class in Java, including classes written by programmers, is a subclass of the `Object` class.",
      "`Object` is a primitive type that every variable shares."
    ],
    answer: "C",
    explanation: "All classes in Java are subclasses of the `Object` class, whether they come with Java or are written by a programmer. `Object` is a class, not a primitive type."
  },
  {
    id: "1.12-16",
    prompt: "In a class hierarchy, `Vehicle` is a superclass and `Bus` is a subclass of `Vehicle`. Which of the following statements is true?",
    choices: [
      "`Vehicle` can use attributes and behaviors that are defined only in `Bus`.",
      "`Bus` can draw upon the attributes and behaviors of `Vehicle` without rewriting them.",
      "`Bus` and `Vehicle` must have exactly the same attributes and behaviors.",
      "A subclass is an object that is created from its superclass."
    ],
    answer: "B",
    explanation: "A subclass draws upon the existing attributes and behaviors of its superclass without replacing them in the code, and it can add its own. The relationship does not work the other way, and a subclass is a class, not an object."
  },
  {
    id: "1.12-17",
    prompt: "Which of the following statements about objects is true?",
    choices: [
      "An object's attributes are represented by variables, and its behaviors are represented by methods.",
      "An object's behaviors are represented by variables, and its attributes are represented by methods.",
      "An object can only have attributes of primitive types.",
      "An object has behaviors but does not store any data."
    ],
    answer: "A",
    explanation: "Variables stored in each object hold its attributes (its state), and methods define its behaviors. Attributes can also be reference types, such as `String`."
  },
  {
    id: "1.12-18",
    prompt: "A `Rectangle` class has attributes `width` and `height` and a behavior that reports the area, `width * height`. A program has `r1`, a `Rectangle` with width 3 and height 4, and `r2`, a `Rectangle` with width 5 and height 2. Which of the following statements is true?",
    choices: [
      "`r1` and `r2` must have the same area because they are instances of the same class.",
      "Only one of the two objects can report its area.",
      "Changing the width of `r1` also changes the width of `r2`.",
      "`r1` and `r2` can report different areas because each object has its own width and height."
    ],
    answer: "D",
    explanation: "Both objects have the same behavior, but each uses its own attribute values, so the areas are 12 and 10."
  },
  {
    id: "1.12-19",
    prompt: "Which of the following are reference types?",
    code: `
      I.   String
      II.  int
      III. Rectangle (a class written by a programmer)
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "Every class, including `String` and programmer-written classes, is a reference type. `int` is a primitive type."
  },
  {
    id: "1.12-20",
    prompt: "A programmer writes a class named `Recipe`. Which of the following correctly describes where `Recipe` and `String` fit in Java's class hierarchy?",
    choices: [
      "`Recipe` is a subclass of `String`.",
      "Both `Recipe` and `String` are subclasses of the `Object` class.",
      "`String` is a subclass of `Object`, but `Recipe` is not, because it was written by a programmer.",
      "Neither class is a subclass of any other class."
    ],
    answer: "B",
    explanation: "All classes in Java are subclasses of the `Object` class, so this is true of both the library class `String` and the programmer's class `Recipe`."
  },
]);

defineTopic(1, "1.13", "Object Creation and Storage (Instantiation)", [
  {
    id: "1.13-01",
    prompt: "Assume that `Lamp` is a class with a constructor that has no parameters. Which of the following best describes the purpose of the keyword `new` in the statement `Lamp desk = new Lamp();`?",
    choices: [
      "It declares the variable `desk`.",
      "It indicates that `desk` is a primitive variable.",
      "It copies an existing `Lamp` object into `desk`.",
      "It creates a new `Lamp` object and calls the `Lamp` constructor to initialize it."
    ],
    answer: "D",
    explanation: "`new` creates (instantiates) an object and runs a constructor to set up its attributes; the reference to that object is then stored in `desk`. The declaration `Lamp desk` is what declares the variable."
  },
  {
    id: "1.13-02",
    prompt: "The `Book` class has exactly the following two constructors. Which of the following statements, appearing in another class, will compile without error?",
    code: `
      public Book(String t)
      public Book(String t, int p)
    `,
    choices: [
      "`Book b = new Book(412, \"Dune\");`",
      "`Book b = new Book(\"Dune\", 412);`",
      "`Book b = new Book();`",
      "`Book b = new Book(\"Dune\", \"412\");`"
    ],
    answer: "B",
    explanation: "The arguments must match a constructor's parameter list in number, order, and type; `(\"Dune\", 412)` matches `Book(String t, int p)`. Neither constructor takes no arguments, and `\"412\"` is a `String`, not an `int`."
  },
  {
    id: "1.13-03",
    prompt: "The `Ticket` class has exactly the following three constructors. Which of the following statements will compile without error?",
    code: `
      public Ticket(String event, double price)
      public Ticket(double price)
      public Ticket(String event, int row, int seat)

      I.   Ticket t = new Ticket(45.0);
      II.  Ticket t = new Ticket("Concert", 3, 12);
      III. Ticket t = new Ticket("Concert");
    `,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    answer: "A",
    explanation: "Statement I matches `Ticket(double price)` and statement II matches `Ticket(String event, int row, int seat)`. No constructor takes a single `String`, so statement III does not compile."
  },
  {
    id: "1.13-04",
    prompt: "The `Lamp` class has one constructor, `public Lamp()`, which prints `*` each time it is called. What is printed as a result of executing the following code segment?",
    code: `
      System.out.print("A");
      Lamp first = new Lamp();
      System.out.print("B");
      Lamp second = new Lamp();
    `,
    choices: ["AB**", "**AB", "A*B*", "A*B"],
    answer: "C",
    explanation: "A constructor call interrupts the sequence of statements: the constructor's statements run, and then control returns to the statement after the call. So A, *, B, and * are printed in that order."
  },
  {
    id: "1.13-05",
    prompt: "Assume that `Pet` is a class. Which of the following best describes the variable `p` after the statement `Pet p = null;` executes?",
    choices: [
      "`p` does not refer to any object.",
      "`p` refers to a `Pet` object whose attributes all have default values.",
      "`p` refers to a `Pet` object created by a no-argument constructor.",
      "The statement does not compile because a reference variable must be assigned a new object when it is declared."
    ],
    answer: "A",
    explanation: "`null` is a special value meaning a reference variable does not currently refer to any object. No object is created, and assigning `null` to a reference variable is legal."
  },
  {
    id: "1.13-06",
    prompt: "A programmer wants the statement `Rectangle r = new Rectangle(4, 7.5);` to compile. Which of the following constructor headers, if it were the only constructor in the `Rectangle` class, would allow the statement to compile?",
    choices: [
      "`public Rectangle(int w, int h)`",
      "`public void Rectangle(int w, double h)`",
      "`public Rectangle(double w)`",
      "`public Rectangle(int w, double h)`"
    ],
    answer: "D",
    explanation: "The arguments are an `int` and a `double`, which match `Rectangle(int w, double h)`. A constructor has no return type, so the header with `void` declares a method, not a constructor, and 7.5 cannot be passed to an `int` parameter."
  },
  {
    id: "1.13-07",
    prompt: "The `Thermostat` class has a constructor `public Thermostat(int startTemp)` that sets the new thermostat's temperature to `startTemp`. Which of the following best describes the role of the parameter `startTemp`?",
    choices: [
      "It is the name of the object being created.",
      "It is the value returned by the constructor.",
      "It allows the code that creates the object to supply a value that sets the initial temperature of the new object.",
      "It stores a reference to the new `Thermostat` object."
    ],
    answer: "C",
    explanation: "Constructor parameters let the caller pass in values that establish the initial values of the new object's attributes. A constructor does not return a value, and the reference to the new object is stored in the variable on the left side of the assignment."
  },
  {
    id: "1.13-08",
    prompt: "Assume that `Pet` is a class with a constructor that takes one `String` parameter. How many `Pet` objects are created by the following code segment?",
    code: `
      Pet a = new Pet("Rex");
      Pet b = new Pet("Mia");
      Pet c;
      Pet d = null;
    `,
    choices: ["1", "2", "3", "4"],
    answer: "B",
    explanation: "An object is created only when `new` calls a constructor, which happens twice. Declaring `c` creates only a variable, and `d` holds `null`, so it refers to no object."
  },
  {
    id: "1.13-09",
    prompt: "Assume that `Ticket` is a class with a constructor that takes one `double` parameter. Which of the following best describes what is stored in the variable `t` after the statement `Ticket t = new Ticket(45.0);` executes?",
    choices: [
      "A reference to the newly created `Ticket` object",
      "A copy of every attribute value of the `Ticket` object",
      "The value 45.0",
      "The name of the class, `Ticket`"
    ],
    answer: "A",
    explanation: "`Ticket` is a reference type, so `t` stores a reference to the new object, which can be thought of as the object's memory address. The value 45.0 is stored inside the object, not in `t`."
  },
  {
    id: "1.13-10",
    prompt: "The `Point` class has exactly one constructor, `public Point(int x, int y)`. Which line of the following code segment causes a compile-time error?",
    code: `
      Point p1 = new Point(3, 4);   // line 1
      Point p2 = new Point(0, 0);   // line 2
      Point p3 = null;              // line 3
      Point p4 = new Point();       // line 4
    `,
    choices: ["Line 1", "Line 2", "Line 3", "Line 4"],
    answer: "D",
    explanation: "The only constructor signature is `Point(int, int)`, so a call with no arguments matches no constructor. Lines 1 and 2 pass two `int` values, and assigning `null` to a reference variable (line 3) is legal."
  },
  {
    id: "1.13-11",
    prompt: "The `Account` class has exactly two constructors. `public Account()` creates an account with a balance of 0.0, and `public Account(double initial)` creates an account with a balance of `initial`. A program needs an account that starts with a balance of 250.0. Which of the following statements creates it?",
    choices: [
      "`Account acct = new Account();`",
      "`Account acct = new Account(250.0);`",
      "`Account acct = Account(250.0);`",
      "`Account(250.0) acct = new Account;`"
    ],
    answer: "B",
    explanation: "Passing 250.0 to the constructor with a `double` parameter establishes the initial balance. The no-argument constructor starts the balance at 0.0, and a constructor call needs the keyword `new`."
  },
  {
    id: "1.13-12",
    prompt: "The `Order` class has a constructor with the header `public Order(int qty)`. Inside the constructor, the parameter `qty` is doubled and then stored in the new object. What is printed as a result of executing the following code segment?",
    code: `
      int amount = 3;
      Order ord = new Order(amount);
      System.out.println(amount);
    `,
    choices: ["6", "0", "3", "Nothing is printed because the code does not compile."],
    answer: "C",
    explanation: "Constructor arguments are passed using call by value, so `qty` is initialized with a copy of 3. Doubling the parameter does not change the variable `amount`."
  },
  {
    id: "1.13-13",
    prompt: "Which of the following statements about constructors is true?",
    choices: [
      "A constructor must have the return type `void`.",
      "A constructor has the same name as its class and no return type, and it is called with `new` to initialize a new object.",
      "A class can have only one constructor.",
      "A constructor is called on an existing object using the dot operator, such as `p.Pet()`."
    ],
    answer: "B",
    explanation: "Constructors share the class name, have no return type (not even `void`), and run when `new` creates an object. A class may have several overloaded constructors with different parameter lists."
  },
  {
    id: "1.13-14",
    prompt: "A class named `Recipe` has a constructor. Which of the following must be true of the constructor?",
    choices: [
      "Its name is `Recipe`, the same as the name of the class.",
      "Its return type is `Recipe`.",
      "Its name must begin with `new`.",
      "It must have at least one parameter."
    ],
    answer: "A",
    explanation: "Constructors have the same name as their class and have no return type. A constructor may have no parameters; the keyword `new` is written before the constructor call, not in its name."
  },
  {
    id: "1.13-15",
    prompt: "The `Student` class has a constructor `public Student(String name, int grade)`. Which of the following can be used to replace `/* missing code */` so that a `Student` object is created with the name and grade stored in `n` and `g`?",
    code: `
      String n = "Lee";
      int g = 10;
      /* missing code */
    `,
    choices: [
      "`Student s = new Student(String n, int g);`",
      "`Student s = Student(n, g);`",
      "`Student s = new Student(g, n);`",
      "`Student s = new Student(n, g);`"
    ],
    answer: "D",
    explanation: "A constructor call uses `new`, the class name, and arguments in the order of the parameters. Types are written in the constructor header, not in the call, and the arguments cannot be reversed."
  },
  {
    id: "1.13-16",
    prompt: "The `Circle` class has exactly one constructor, `public Circle(double radius)`. Which of the following statements will compile without error?",
    code: `
      I.   Circle c = new Circle(5);
      II.  Circle c = new Circle(2.5);
      III. Circle c = new Circle("5");
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "An `int` argument such as 5 is automatically widened to a `double`, so I compiles, and II passes a `double` directly. A `String` is never converted to a `double`, so III does not compile."
  },
  {
    id: "1.13-17",
    prompt: "The `Clock` class has exactly the following four constructors. Which constructor is called when the statement `Clock c = new Clock(930);` executes?",
    code: `
      public Clock()                          // constructor 1
      public Clock(int hours)                 // constructor 2
      public Clock(int hours, int minutes)    // constructor 3
      public Clock(String time)               // constructor 4
    `,
    choices: [
      "Constructor 2",
      "Constructor 1",
      "Constructor 4",
      "No constructor matches, so the code does not compile."
    ],
    answer: "A",
    explanation: "The constructors are overloaded, and the one called is the one whose signature matches the arguments. One `int` argument matches `Clock(int)`, even though 930 looks like a time; parameter names such as `hours` do not affect the match."
  },
  {
    id: "1.13-18",
    prompt: "Assume that `Robot` is a class with a constructor that takes one `int` parameter. Which of the following best describes the flow of control when the statement `Robot r = new Robot(5);` is executed in the middle of a code segment?",
    choices: [
      "The statements after it run first, and the constructor runs when the code segment ends.",
      "The constructor is skipped unless a method is later called on `r`.",
      "The statements in the constructor execute, and then control returns to the point immediately following the constructor call.",
      "The constructor runs at the same time as the next statement in the code segment."
    ],
    answer: "C",
    explanation: "A constructor call interrupts the sequential execution of statements. The constructor's statements run first, and after the last one, control returns to the point right after the call."
  },
  {
    id: "1.13-19",
    prompt: "The `Pet` class has a constructor `public Pet(String name, int age)`. In the statement `Pet p = new Pet(\"Rex\", 4);`, which of the following are the arguments?",
    choices: ["`name` and `age`", "`String` and `int`", "`Pet` and `p`", "`\"Rex\"` and `4`"],
    answer: "D",
    explanation: "Arguments are the values passed in the constructor call. `name` and `age` are the parameters in the constructor header, which are initialized with copies of the arguments."
  },
  {
    id: "1.13-20",
    prompt: "Assume that `Box` is a class with a constructor `public Box(int side)`. Which of the following declares a reference variable without creating a `Box` object?",
    choices: [
      "`Box myBox = new Box(4);`",
      "`Box myBox;`",
      "`Box myBox = new Box(0);`",
      "`new Box(4);`"
    ],
    answer: "B",
    explanation: "A declaration alone creates a variable that can hold a reference but does not create an object. Any expression using `new` creates an object, even if (as in the last choice) the reference is not stored."
  },
]);

defineTopic(1, "1.14", "Calling Instance Methods", [
  {
    id: "1.14-01",
    prompt: "The `Thermostat` class has the following constructor and methods. What is printed as a result of executing the code segment?",
    code: `
      /** Creates a thermostat set to temperature t */
      public Thermostat(int t)

      /** Adds amount to the temperature */
      public void raise(int amount)

      /** Subtracts 1 from the temperature */
      public void lower()

      /** Returns the temperature */
      public int getTemp()

      // code segment
      Thermostat t = new Thermostat(70);
      t.raise(3);
      t.lower();
      System.out.println(t.getTemp());
    `,
    choices: ["72", "73", "70", "74"],
    answer: "A",
    explanation: "`raise(3)` changes the temperature from 70 to 73, and `lower()` subtracts 1, giving 72. Each method call changes the state of the same object."
  },
  {
    id: "1.14-02",
    prompt: "Assume that `t` refers to a `Thermostat` object, where `raise(int amount)` is a `void` method and `getTemp()` returns an `int`. Which of the following statements causes a compile-time error?",
    choices: [
      "`t.raise(5);`",
      "`int x = t.getTemp();`",
      "`int y = t.raise(5);`",
      "`t.getTemp();`"
    ],
    answer: "C",
    explanation: "A `void` method does not return a value, so its call cannot be assigned to a variable. Calling a non-void method as a statement and ignoring its return value, as in the last choice, is legal."
  },
  {
    id: "1.14-03",
    prompt: "Which of the following statements about calling a non-void instance method is true?",
    choices: [
      "A non-void method cannot be called as a statement by itself.",
      "A non-void method returns a value, which can be stored in a variable, printed, or used as part of an expression.",
      "A void method returns the value 0 when it is used in an expression.",
      "A non-void instance method must be called using the class name instead of an object."
    ],
    answer: "B",
    explanation: "The returned value can be used anywhere a value of that type is allowed. A non-void method can also be called on its own (the value is discarded), and `void` methods return nothing at all."
  },
  {
    id: "1.14-04",
    prompt: "Assume that the `Thermostat` class has a `void` method `raise(int amount)` and a method `getTemp()` that returns an `int`. Which of the following best describes the result of executing the following code segment?",
    code: `
      Thermostat t = null;
      t.raise(2);
      System.out.println(t.getTemp());
    `,
    choices: [
      "2 is printed.",
      "0 is printed.",
      "The code does not compile because `t` is `null`.",
      "A `NullPointerException` is thrown when `t.raise(2)` is executed."
    ],
    answer: "D",
    explanation: "The code compiles because `t` has type `Thermostat`, but `t` does not refer to an object. Calling a method on a `null` reference throws a `NullPointerException` at run time."
  },
  {
    id: "1.14-05",
    prompt: "The `Wallet` class has the following constructor and methods. What is printed as a result of executing the code segment?",
    code: `
      /** Creates a wallet holding m dollars */
      public Wallet(double m)

      /** Subtracts amt from the money in the wallet */
      public void spend(double amt)

      /** Adds amt to the money in the wallet and
       *  returns the new amount of money */
      public double addAndReport(double amt)

      /** Returns the money in the wallet */
      public double getMoney()

      // code segment
      Wallet w = new Wallet(20.0);
      w.spend(5.0);
      double result = w.addAndReport(10.0);
      w.spend(result / 5);
      System.out.println(w.getMoney());
    `,
    choices: ["25.0", "15.0", "20.0", "22.0"],
    answer: "C",
    explanation: "After spending 5.0, the wallet holds 15.0; `addAndReport(10.0)` makes it 25.0 and returns 25.0. Then `spend(5.0)` brings it to 20.0."
  },
  {
    id: "1.14-06",
    prompt: "The `Scorer` class has the following constructor and methods. What is printed as a result of executing the code segment?",
    code: `
      /** Creates a scorer with a score of 0 */
      public Scorer()

      /** Adds p to the score and returns the new score */
      public int addPoints(int p)

      /** Returns the score */
      public int getScore()

      // code segment
      Scorer s = new Scorer();
      s.addPoints(4);
      int total = s.addPoints(6);
      System.out.println(total + s.getScore());
    `,
    choices: ["20", "10", "16", "14"],
    answer: "A",
    explanation: "The first call's return value is ignored, but it still adds 4 to the score. The second call makes the score 10 and returns 10, so 10 + 10 = 20 is printed. Thinking `total` is only 6 gives 16."
  },
  {
    id: "1.14-07",
    prompt: "Assume that `t` refers to a `Thermostat` object and that the class has the method `public void raise(int amount)`. Which of the following correctly calls `raise` to increase `t`'s temperature by 4?",
    choices: [
      "`raise(t, 4);`",
      "`Thermostat.raise(4);`",
      "`t.raise = 4;`",
      "`t.raise(4);`"
    ],
    answer: "D",
    explanation: "An instance method is called on an object with the dot operator, followed by the method name and its arguments in parentheses. Using the class name works only for static methods."
  },
  {
    id: "1.14-08",
    prompt: "The `Thermostat` class has the methods `public void raise(int amount)` and `public int getTemp()`. Which of the following can be used to replace `/* missing code */` so that the code segment prints `75`?",
    code: `
      Thermostat t = new Thermostat(70);
      /* missing code */
    `,
    choices: [
      "System.out.println(t.raise(5));",
      "t.raise(5);\nSystem.out.println(t.getTemp());",
      "int temp = t.getTemp();\nt.raise(5);\nSystem.out.println(temp);",
      "t.raise(5);\nSystem.out.println(t.getTemp);"
    ],
    answer: "B",
    explanation: "`raise` must be called as a statement because it is `void`, and then `getTemp()` returns the updated value. The third choice saves the temperature before raising it and prints 70; the last choice omits the parentheses of the method call and does not compile."
  },
  {
    id: "1.14-09",
    prompt: "Assume that the `Thermostat` class has a constructor that takes an `int` and a `void` method `lower()`. Consider the following code segment. Which of the following, if executed immediately after the segment, would cause a `NullPointerException`?",
    code: `
      Thermostat t1 = new Thermostat(60);
      Thermostat t2 = null;

      I.   t2.lower();
      II.  t1.lower();
      III. t1 = null;
           t1.lower();
    `,
    choices: ["I only", "II only", "I and II only", "I and III only"],
    answer: "D",
    explanation: "In I, `t2` is `null`, and in III, `t1` is set to `null` before the call, so both throw a `NullPointerException`. In II, `t1` still refers to a `Thermostat` object, so the call works."
  },
  {
    id: "1.14-10",
    prompt: "Assume that the `Thermostat` class is as described: the constructor sets the temperature, `raise(int amount)` adds `amount` to it, `lower()` subtracts 1 from it, and `getTemp()` returns it. What is printed as a result of executing the following code segment?",
    code: `
      Thermostat a = new Thermostat(65);
      Thermostat b = new Thermostat(a.getTemp() + 5);
      a.raise(b.getTemp() - 60);
      b.lower();
      System.out.println(a.getTemp());
      System.out.println(b.getTemp());
    `,
    choices: ["75\n69", "75\n70", "70\n69", "65\n69"],
    answer: "A",
    explanation: "`b` starts at 70. `b.getTemp() - 60` is 10, so `a` becomes 75, and then `b.lower()` makes `b` 69. Calling `getTemp` does not change either object."
  },
  {
    id: "1.14-11",
    prompt: "The `Rectangle` class has a constructor `public Rectangle(int w, int h)` and an instance method `public void scale(int factor)`. In another class, the statement `Rectangle.scale(2);` causes a compile-time error. Which of the following best explains the error?",
    choices: [
      "`scale` is a `void` method, so it cannot be called as a statement by itself.",
      "The argument 2 must be a `double`.",
      "`scale` is an instance method, so it must be called on a `Rectangle` object with the dot operator, such as `r.scale(2)`, not on the class name.",
      "Instance methods can be called only from inside the `Rectangle` class."
    ],
    answer: "C",
    explanation: "Instance methods are called on objects of the class, using the object's name and the dot operator. Only class (static) methods are called with the class name."
  },
  {
    id: "1.14-12",
    prompt: "The `Counter` class has a constructor `Counter()` that starts the count at 0, a `void` method `increment()` that adds 1 to the count, and a method `getCount()` that returns the count. What is printed as a result of executing the following code segment?",
    code: `
      Counter a = new Counter();
      Counter b = new Counter();
      a.increment();
      a.increment();
      b.increment();
      System.out.println(a.getCount());
      System.out.println(b.getCount());
    `,
    choices: ["3\n3", "2\n1", "1\n1", "2\n2"],
    answer: "B",
    explanation: "An instance method works on the object it is called on. `a` and `b` are separate objects, so `a` is incremented twice and `b` once. The answer 3 3 assumes all calls change one shared count."
  },
  {
    id: "1.14-13",
    prompt: "The `Lamp` class has a constructor `Lamp()` and a `void` method `turnOn()`. Which of the following best describes the result of executing the following code segment?",
    code: `
      Lamp desk = new Lamp();
      Lamp porch = null;
      desk.turnOn();
      System.out.println("desk on");
      porch.turnOn();
      System.out.println("porch on");
    `,
    choices: [
      "`desk on` is printed, and then a `NullPointerException` is thrown.",
      "`desk on` and `porch on` are both printed.",
      "A `NullPointerException` is thrown before anything is printed.",
      "The code does not compile because `porch` is `null`."
    ],
    answer: "A",
    explanation: "The statements run in order, so `desk on` is printed first. `porch` does not refer to an object, so calling `turnOn` on it throws a `NullPointerException` at run time, and the last statement never runs."
  },
  {
    id: "1.14-14",
    prompt: "The `Stepper` class has the following constructor and method. What is printed as a result of executing the code segment?",
    code: `
      /** Creates a stepper at position start */
      public Stepper(int start)

      /** Adds n to the position and returns the new position */
      public int step(int n)

      // code segment
      Stepper s = new Stepper(1);
      int x = s.step(2) * s.step(3);
      System.out.println(x);
    `,
    choices: ["6", "12", "18", "9"],
    answer: "C",
    explanation: "`s.step(2)` changes the position to 3 and returns 3; then `s.step(3)` changes it to 6 and returns 6. The product is 18. Answering 12 assumes the second call starts again from 1."
  },
  {
    id: "1.14-15",
    prompt: "The `Greeter` class has a constructor `public Greeter(String n)` and exactly one other method, `public String greet(String greeting)`. Which of the following best describes the result of executing the following code segment?",
    code: `
      Greeter g = new Greeter("Kai");
      String s = g.greet();
      System.out.println(s);
    `,
    choices: [
      "`, Kai!` is printed.",
      "`null, Kai!` is printed.",
      "A `NullPointerException` is thrown.",
      "The code does not compile because `greet` requires a `String` argument."
    ],
    answer: "D",
    explanation: "A method call must supply arguments that match the method's parameter list. `greet` has one `String` parameter, so calling it with no arguments is a compile-time error."
  },
  {
    id: "1.14-16",
    prompt: "The `Counter` class has the following constructor and methods. What is printed as a result of executing the code segment?",
    code: `
      /** Creates a counter with a count of 0 */
      public Counter()

      /** Adds 1 to the count and returns the new count */
      public int next()

      /** Prints the text Count: followed by a space and
       *  the current count, then moves to a new line */
      public void display()

      // code segment
      Counter c = new Counter();
      c.next();
      c.next();
      c.display();
      System.out.println(c.next());
    `,
    choices: [
      "Count: 0\n1",
      "Count: 2\n3",
      "Count: 2\n2",
      "Count: 3\n3"
    ],
    answer: "B",
    explanation: "The two `next()` calls make the count 2 even though their return values are ignored, so `display()` prints `Count: 2`. The last call makes the count 3 and returns it, so 3 is printed."
  },
  {
    id: "1.14-17",
    prompt: "Which of the following situations causes a `NullPointerException`?",
    choices: [
      "The return value of a non-void method is not used.",
      "A `void` method is called inside a `System.out.println` statement.",
      "A primitive variable is assigned the value 0.",
      "A method is called on a reference variable whose value is `null`."
    ],
    answer: "D",
    explanation: "Calling a method using a `null` reference throws a `NullPointerException` at run time. Using a `void` method in `println` is a compile-time error, and ignoring a return value is legal."
  },
  {
    id: "1.14-18",
    prompt: "Assume that the `Wallet` class is as follows: the constructor sets the amount of money, `spend(double amt)` subtracts `amt` from it, `addAndReport(double amt)` adds `amt` to it and returns the new amount, and `getMoney()` returns the amount. What is printed as a result of executing the following code segment?",
    code: `
      Wallet a = new Wallet(10.0);
      Wallet b = new Wallet(4.0);
      a.spend(b.addAndReport(a.getMoney() / 4));
      System.out.println(a.getMoney());
      System.out.println(b.getMoney());
    `,
    choices: ["3.5\n6.5", "7.5\n6.5", "3.5\n4.0", "6.5\n3.5"],
    answer: "A",
    explanation: "The innermost call runs first: `a.getMoney() / 4` is 2.5, so `b` becomes 6.5 and 6.5 is returned. Then `a.spend(6.5)` leaves `a` with 3.5. Answering 7.5 assumes `a` spends only 2.5."
  },
  {
    id: "1.14-19",
    prompt: "The `Scorer` class has the methods `public int addPoints(int p)` and `public int getScore()`. Assume that `s` refers to a `Scorer` object. Which of the following statements will compile without error?",
    code: `
      I.   s.addPoints(3);
      II.  System.out.println(s.addPoints(3));
      III. int n = s.getScore(5);
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "A non-void method may be called as a statement (I) or used as a value (II). `getScore` has no parameters, so passing it an argument (III) does not compile."
  },
  {
    id: "1.14-20",
    prompt: "The `Tank` class has the following constructor and methods. What is printed as a result of executing the code segment?",
    code: `
      /** Creates a tank holding level liters */
      public Tank(int level)

      /** Adds amount liters to the tank */
      public void fill(int amount)

      /** Empties the tank and returns the number of
       *  liters it held just before it was emptied */
      public int drain()

      /** Returns the number of liters in the tank */
      public int getLevel()

      // code segment
      Tank a = new Tank(5);
      Tank b = new Tank(2);
      b.fill(a.drain());
      a.fill(3);
      System.out.println(a.getLevel());
      System.out.println(b.getLevel());
    `,
    choices: ["8\n7", "3\n2", "3\n7", "0\n7"],
    answer: "C",
    explanation: "`a.drain()` empties `a` and returns 5, which is passed to `b.fill`, so `b` holds 7. Then `a.fill(3)` makes `a` hold 3. The answer 8 assumes `drain` returns the value without emptying `a`."
  },
]);

defineTopic(1, "1.15", "String Manipulation", [
  {
    id: "1.15-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "computer";
      System.out.println(s.substring(3, 6));
    `,
    choices: ["mpu", "put", "pute", "mput"],
    answer: "B",
    explanation: "`substring(3, 6)` returns the characters at indices 3, 4, and 5; the end index is excluded. In \"computer\" those are `p`, `u`, and `t`."
  },
  {
    id: "1.15-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String w = "AP Java";
      System.out.println(w.length());
    `,
    choices: ["7", "6", "5", "8"],
    answer: "A",
    explanation: "`length()` counts every character, including the space, so \"AP Java\" has 7 characters. Answering 6 either skips the space or confuses the length with the last index."
  },
  {
    id: "1.15-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "banana";
      System.out.println(s.indexOf("an") + " " + s.indexOf("x"));
    `,
    choices: ["2 0", "1 0", "2 -1", "1 -1"],
    answer: "D",
    explanation: "Indices start at 0, and the first occurrence of \"an\" begins at index 1. `indexOf` returns -1 when the string is not found."
  },
  {
    id: "1.15-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String word = "planet";
      word.substring(2);
      System.out.println(word);
    `,
    choices: ["anet", "lanet", "planet", "pl"],
    answer: "C",
    explanation: "Strings are immutable: `substring` returns a new `String` and does not change `word`. The returned value is never stored, so the original \"planet\" is printed."
  },
  {
    id: "1.15-05",
    prompt: "Which of the following statements create a `String` object and store a reference to it in `s`?",
    code: `
      I.   String s = "hello";
      II.  String s = new String("hello");
      III. String s = String("hello");
    `,
    choices: ["I only", "II only", "I, II, and III", "I and II only"],
    answer: "D",
    explanation: "A `String` object can be created with a string literal (I) or by calling the `String` constructor with `new` (II). Statement III leaves out `new`, so it does not compile."
  },
  {
    id: "1.15-06",
    prompt: "Consider the following code segment. Which of the following best describes the value of `r` after the code segment executes?",
    code: `
      String x = "apple";
      String y = "banana";
      int r = x.compareTo(y);
    `,
    choices: [
      "0",
      "A negative integer",
      "A positive integer",
      "The code does not compile because `compareTo` returns a `boolean`."
    ],
    answer: "B",
    explanation: "`compareTo` returns a negative `int` when the calling string comes before the argument in lexicographic order. \"apple\" comes before \"banana\", so `r` is negative."
  },
  {
    id: "1.15-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 3;
      int b = 4;
      System.out.println(a + b + "!" + a + b);
    `,
    choices: ["7!34", "7!7", "34!34", "34!7"],
    answer: "A",
    explanation: "Evaluation is left to right: `a + b` is integer addition (7) because no `String` has appeared yet. After \"!\" the expression is a `String`, so `a` and `b` are concatenated as \"3\" and \"4\"."
  },
  {
    id: "1.15-08",
    prompt: "What is the result of executing the following code segment?",
    code: `
      String s = "code";
      System.out.println(s.substring(2, 5));
    `,
    choices: [
      "ode",
      "de",
      "An `IndexOutOfBoundsException` is thrown.",
      "The code does not compile."
    ],
    answer: "C",
    explanation: "The end index of `substring` can be at most `s.length()`, which is 4. Using 5 compiles but throws an `IndexOutOfBoundsException` at run time; Java does not trim the index to fit."
  },
  {
    id: "1.15-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "STUDY";
      String result = s.substring(4, 5) + s.substring(0, 1) + s.substring(2, 3);
      System.out.println(result);
    `,
    choices: ["DSU", "YST", "YSU", "YTU"],
    answer: "C",
    explanation: "`substring(i, i + 1)` returns the single character at index `i`. Indices 4, 0, and 2 hold \"Y\", \"S\", and \"U\"."
  },
  {
    id: "1.15-10",
    prompt: "Consider the following method. Which of the following can be used to replace `/* missing code */` so that the method returns the last character of `str`?",
    code: `
      /** Precondition: str contains at least one character. */
      public static String lastChar(String str)
      {
          /* missing code */
      }
    `,
    choices: [
      "`return str.substring(str.length() - 1);`",
      "`return str.substring(str.length());`",
      "`return str.substring(str.length(), str.length() + 1);`",
      "`return str.substring(0, 1);`"
    ],
    answer: "A",
    explanation: "The last character is at index `str.length() - 1`, and `substring` with one argument returns from there to the end. `str.substring(str.length())` returns the empty string, and the third choice throws an exception."
  },
  {
    id: "1.15-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String a = "Cat";
      String b = "cat";
      String c = "Ca" + "t";
      System.out.println(a.equals(b));
      System.out.println(a.equals(c));
    `,
    choices: ["true\ntrue", "false\ntrue", "false\nfalse", "true\nfalse"],
    answer: "B",
    explanation: "`equals` returns true only when both strings have the same sequence of characters, and it is case-sensitive, so \"Cat\" and \"cat\" are not equal. `\"Ca\" + \"t\"` produces \"Cat\", so the second comparison is true."
  },
  {
    id: "1.15-12",
    prompt: "The `Point` class has a constructor `public Point(int x, int y)`, and its `toString` method returns a string in the form `(x, y)`, such as `(1, 2)`. What is printed as a result of executing the following code segment?",
    code: `
      Point p = new Point(3, 4);
      String s = "P" + p;
      System.out.println(s);
    `,
    choices: [
      "P",
      "Pp",
      "The code does not compile because a `String` cannot be concatenated with a `Point` object.",
      "P(3, 4)"
    ],
    answer: "D",
    explanation: "When a `String` is concatenated with an object, the object's `toString` method is called implicitly, so `p` becomes \"(3, 4)\". The variable name `p` is never part of the result."
  },
  {
    id: "1.15-13",
    prompt: "Which of the following statements about `String` objects is true?",
    choices: [
      "`String` objects are immutable, so methods such as `substring` return a new `String` instead of changing the original.",
      "Calling `substring` on a `String` changes that `String` to contain only the substring.",
      "Using `+` with a `String` adds characters to the end of the original `String` object.",
      "The first character of a `String` is at index 1."
    ],
    answer: "A",
    explanation: "A `String` object can never be changed; methods and the `+` operator build and return new strings. Indices start at 0."
  },
  {
    id: "1.15-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String email = "lee.kim@school.org";
      int at = email.indexOf("@");
      String user = email.substring(0, at);
      String domain = email.substring(at + 1);
      System.out.println(domain + " " + user);
    `,
    choices: [
      "@school.org lee.kim",
      "school.org lee.kim@",
      "school.org lee.ki",
      "school.org lee.kim"
    ],
    answer: "D",
    explanation: "`at` is 7. `substring(0, 7)` stops just before the \"@\", giving \"lee.kim\", and `substring(8)` starts just after it, giving \"school.org\"."
  },
  {
    id: "1.15-15",
    prompt: "A program declares and uses `String` variables but contains no statement that says where the `String` class comes from. Which of the following best explains why the program compiles?",
    choices: [
      "`String` is a primitive type, like `int` and `double`.",
      "The `String` class is part of the `java.lang` package, and classes in `java.lang` are available by default.",
      "Every program must contain its own definition of the `String` class.",
      "`String` variables can store only string literals, which do not need a class."
    ],
    answer: "B",
    explanation: "`String` is a class in the `java.lang` package, and classes in `java.lang` are available to every program by default. It is a reference type, not a primitive type."
  },
  {
    id: "1.15-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      System.out.println("x" + (2 + 3) + 2 * 3);
    `,
    choices: ["x236", "x11", "x56", "x523"],
    answer: "C",
    explanation: "The parentheses make `2 + 3` an integer addition (5), and `*` has higher precedence than `+`, so `2 * 3` is 6. Both are then concatenated onto \"x\"."
  },
  {
    id: "1.15-17",
    prompt: "Consider the following method. Which of the following can be used to replace `/* missing code */` so that the method returns the middle character of `str`?",
    code: `
      /** Precondition: str has an odd length. */
      public static String middle(String str)
      {
          int mid = str.length() / 2;
          /* missing code */
      }
    `,
    choices: [
      "`return str.substring(mid, mid + 1);`",
      "`return str.substring(mid - 1, mid);`",
      "`return str.substring(mid);`",
      "`return str.substring(mid, mid);`"
    ],
    answer: "A",
    explanation: "For an odd length such as 5, `mid` is 2, which is the index of the middle character, and `substring(mid, mid + 1)` returns exactly that character. `substring(mid, mid)` returns the empty string."
  },
  {
    id: "1.15-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "rainbow";
      int pos = s.indexOf("x");
      System.out.println(s.substring(pos + 1));
    `,
    choices: [
      "ainbow",
      "rainbow",
      "An `IndexOutOfBoundsException` is thrown.",
      "bow"
    ],
    answer: "B",
    explanation: "\"x\" does not occur in \"rainbow\", so `pos` is -1 and `pos + 1` is 0. `substring(0)` returns the entire string."
  },
  {
    id: "1.15-19",
    prompt: "Assume that `String s = \"hello\";` has been executed. Which of the following expressions throw an `IndexOutOfBoundsException`?",
    code: `
      I.   s.substring(5)
      II.  s.substring(2, 1)
      III. s.substring(0, 6)
    `,
    choices: ["I only", "I and III only", "III only", "II and III only"],
    answer: "D",
    explanation: "`s.substring(5)` is legal because the start index may equal the length; it returns the empty string. II has a start index greater than its end index, and III has an end index greater than the length, so both throw."
  },
  {
    id: "1.15-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String phrase = "to be or not to be";
      int first = phrase.indexOf("be");
      String rest = phrase.substring(first + 3);
      System.out.println(rest.indexOf("be") + first);
    `,
    choices: ["16", "10", "13", "103"],
    answer: "C",
    explanation: "`first` is 3, so `rest` is \"or not to be\", in which \"be\" begins at index 10. Both values are `int`s, so they are added to give 13."
  },
]);
