/*
  Unit 2: Selection and Iteration

  See questions/unit1.js for a description of each field.
  Each defineTopic(...) block is one topic. To add a question, copy a { ... } block,
  paste it inside the topic's [ ... ] list, and edit it.
*/

defineTopic(2, "2.1", "Algorithms with Selection and Repetition", [
  {
    id: "2.1-01",
    prompt: "Which of the following best describes selection in an algorithm?",
    choices: [
      "Executing steps one after another in the order in which they are written",
      "Deciding whether to execute a step based on whether a condition is true or false",
      "Executing a group of steps over and over until a condition is met",
      "Breaking a large problem into several smaller problems"
    ],
    answer: "B",
    explanation: "Selection uses a true/false condition to decide which steps run. Running steps in order is sequencing, and repeating steps is repetition."
  },
  {
    id: "2.1-02",
    prompt: "Consider the following algorithm. What value is displayed when the algorithm is carried out?",
    code: `
      1. Set count to 0.
      2. Set n to 1.
      3. If n is odd, add 1 to count.
      4. Add 1 to n.
      5. If n is less than or equal to 6, go to step 3.
      6. Display count.
    `,
    choices: ["2", "4", "6", "3"],
    answer: "D",
    explanation: "Steps 3 through 5 repeat for n = 1, 2, 3, 4, 5, and 6. Only 1, 3, and 5 are odd, so count ends at 3."
  },
  {
    id: "2.1-03",
    prompt: "Consider the following algorithm. Which building blocks of algorithms does it use?",
    code: `
      1. Read a positive whole number n.
      2. Set total to 0.
      3. Repeat n times: add 5 to total.
      4. Display total.
    `,
    choices: [
      "Sequencing and repetition only",
      "Sequencing and selection only",
      "Selection and repetition only",
      "Sequencing, selection, and repetition"
    ],
    answer: "A",
    explanation: "The steps run in order (sequencing) and step 3 repeats (repetition). No step chooses between alternatives based on a condition, so there is no selection."
  },
  {
    id: "2.1-04",
    prompt: "Consider the following algorithm. What values are displayed?",
    code: `
      Set x to 10
      Set y to 3
      While x is greater than y
          Set x to x - y
          Add 1 to y
      Display x, then display y
    `,
    choices: ["1 3", "7 4", "3 5", "-2 6"],
    answer: "C",
    explanation: "After the first pass x is 7 and y is 4; after the second, x is 3 and y is 5. Now 3 > 5 is false, so the loop stops. Choosing 1 3 forgets that y also changes each time."
  },
  {
    id: "2.1-05",
    prompt: "An algorithm is intended to display exactly one value: the larger of two numbers `a` and `b`, or either one if they are equal. Which of the following algorithms meets this specification?",
    choices: [
      "If a > b, display b.\nOtherwise, display a.",
      "If a > b, display a.\nIf b > a, display b.",
      "If a > b, display a.\nOtherwise, display b.",
      "Display a.\nIf b > a, display b."
    ],
    answer: "C",
    explanation: "Exactly one branch of an if/otherwise runs, and it picks the larger value. The two separate ifs display nothing when a equals b, and the last choice displays two values when b is larger."
  },
  {
    id: "2.1-06",
    prompt: "Consider the following two algorithms. In both, division drops any remainder (for example, 9 / 2 is 4). What does each algorithm display when n starts at 9?",
    code: `
      Algorithm X                        Algorithm Y
      1. If n is odd, add 1 to n.        1. Set n to n / 2.
      2. Set n to n / 2.                 2. If n is odd, add 1 to n.
      3. Display n.                      3. Display n.
    `,
    choices: [
      "X displays 5 and Y displays 4.",
      "Both algorithms display 5.",
      "Both algorithms display 4.",
      "X displays 4 and Y displays 5."
    ],
    answer: "A",
    explanation: "In X, 9 is odd, so n becomes 10 and then 10 / 2 is 5. In Y, 9 / 2 is 4, which is even, so 4 is displayed. The same selection and sequencing steps in a different order give a different outcome."
  },
  {
    id: "2.1-07",
    prompt: "Consider the following algorithm. In step 2, division drops any remainder (for example, 25 / 2 is 12). What value is displayed?",
    code: `
      1. Set n to 100. Set steps to 0.
      2. While n is greater than 1:
             Set n to n / 2.
             Add 1 to steps.
      3. Display steps.
    `,
    choices: ["7", "5", "50", "6"],
    answer: "D",
    explanation: "n takes the values 100, 50, 25, 12, 6, 3, 1. That is 6 halvings before n is no longer greater than 1."
  },
  {
    id: "2.1-08",
    prompt: "Consider the following two algorithms, each of which starts with the same number n. Which of the following statements is true?",
    code: `
      Algorithm X                 Algorithm Y
      1. Add 5 to n.              1. Multiply n by 2.
      2. Multiply n by 2.         2. Add 5 to n.
      3. Display n.               3. Display n.
    `,
    choices: [
      "The algorithms always display the same value because they use the same steps.",
      "The algorithms never display the same value.",
      "The algorithms display the same value only when n is 0.",
      "The algorithms display the same value only when n is negative."
    ],
    answer: "B",
    explanation: "Algorithm X displays 2n + 10 and Algorithm Y displays 2n + 5, which always differ by 5. Sequencing matters: the same steps in a different order can give a different result."
  },
  {
    id: "2.1-09",
    prompt: "Consider the following algorithm for computing a shipping cost. What is the value of cost when weight is 10?",
    code: `
      If weight is greater than 10
          Set cost to 20
      Otherwise
          If weight is greater than 5
              Set cost to 12
          Otherwise
              Set cost to 8
    `,
    choices: ["12", "20", "8", "No value is assigned to cost."],
    answer: "A",
    explanation: "10 is not greater than 10, so the Otherwise part runs. There, 10 is greater than 5, so cost is set to 12."
  },
  {
    id: "2.1-10",
    prompt: "An algorithm is intended to display the even numbers from 2 through 20, inclusive, in increasing order. Which of the following algorithms meets this specification?",
    choices: [
      "Set n to 2.\nWhile n < 20:\n    Display n.\n    Add 2 to n.",
      "Set n to 2.\nWhile n <= 20:\n    Display n.\n    Add 2 to n.",
      "Set n to 2.\nWhile n <= 20:\n    Add 2 to n.\n    Display n.",
      "Set n to 1.\nWhile n <= 20:\n    Display n.\n    Add 2 to n."
    ],
    answer: "B",
    explanation: "Using <= includes 20, and displaying before adding starts the output at 2. Using < leaves out 20, adding first displays 4 through 22, and starting at 1 displays odd numbers."
  },
  {
    id: "2.1-11",
    prompt: "Consider the following algorithm. Which of the following best describes its behavior?",
    code: `
      1. Set n to 1.
      2. While n is not equal to 10:
             Display n.
             Add 2 to n.
    `,
    choices: [
      "It displays 1 3 5 7 9 and then stops.",
      "It displays 1 3 5 7 9 11 and then stops.",
      "It displays nothing.",
      "It never stops, because n is never equal to 10."
    ],
    answer: "D",
    explanation: "n is always odd (1, 3, 5, ..., 9, 11, 13, ...), so it skips over 10 and the condition never becomes false. This is an infinite loop."
  },
  {
    id: "2.1-12",
    prompt: "A robot vacuum follows the algorithm below. Which of the following statements about the algorithm is true?",
    code: `
      1. Repeat until the whole floor has been cleaned:
             a. Move forward one step.
             b. If there is an obstacle ahead, turn right.
      2. Return to the charging dock.
    `,
    choices: [
      "Step 1 uses selection, and step 1b uses repetition.",
      "The algorithm uses repetition but not selection.",
      "Step 1 uses repetition, and step 1b uses selection inside the repeated steps.",
      "The algorithm uses selection but not repetition, because step 1b makes a decision."
    ],
    answer: "C",
    explanation: "Step 1 repeats its steps until a desired outcome is reached, which is repetition. Step 1b makes a true or false decision about turning, which is selection, and it happens each time the steps repeat."
  },
  {
    id: "2.1-13",
    prompt: "Which of the following everyday instructions is an example of repetition?",
    choices: [
      "If it is raining, take an umbrella.",
      "Put on your socks, and then put on your shoes.",
      "If the light is red, stop; otherwise, keep driving.",
      "Stir the mixture until it is smooth."
    ],
    answer: "D",
    explanation: "Stirring until a condition is met repeats an action. The \"if\" instructions are selection, and doing one step after another is sequencing."
  },
  {
    id: "2.1-14",
    prompt: "A student uses the following algorithm to plan savings for a $120 purchase. What value is displayed?",
    code: `
      1. Set balance to 50. Set weeks to 0.
      2. Repeat until balance is at least 120:
             Add 15 to balance.
             Add 1 to weeks.
      3. Display weeks.
    `,
    choices: ["5", "4", "6", "8"],
    answer: "A",
    explanation: "balance takes the values 65, 80, 95, 110, and 125, so the steps repeat 5 times before the desired outcome (at least 120) is reached. Choosing 8 divides 120 by 15 and ignores the starting balance of 50."
  },
  {
    id: "2.1-15",
    prompt: "Consider the following algorithm. What is displayed?",
    code: `
      Set k to 1
      While k is less than or equal to 5
          If k is even
              Display "E"
          Otherwise
              Display "O"
          Add 1 to k
    `,
    choices: ["EOEOE", "OEOE", "OEOEO", "OEOEOE"],
    answer: "C",
    explanation: "The loop runs for k = 1, 2, 3, 4, 5, which are odd, even, odd, even, odd. That gives OEOEO, five letters in all."
  },
  {
    id: "2.1-16",
    prompt: "The following steps are intended to swap the values of `a` and `b` using a third variable, `temp`. The steps are listed in no particular order. In which order should they be performed?",
    code: `
      I.   Set a to b.
      II.  Set b to temp.
      III. Set temp to a.
    `,
    choices: ["I, II, III", "III, I, II", "I, III, II", "II, III, I"],
    answer: "B",
    explanation: "The original value of a must be saved in temp before a is overwritten. Then b goes into a, and the saved value goes into b. Doing I first loses a's original value."
  },
  {
    id: "2.1-17",
    prompt: "The following algorithm is intended to display \"Pass\" if score is at least 60 and \"Fail\" otherwise. Which of the following best describes its behavior?",
    code: `
      1. If score is greater than or equal to 60, display "Pass".
      2. Display "Fail".
    `,
    choices: [
      "It displays both \"Pass\" and \"Fail\" when score is at least 60.",
      "It works as intended for all values of score.",
      "It displays \"Fail\" only when score is less than 60.",
      "It displays nothing when score is less than 60."
    ],
    answer: "A",
    explanation: "Step 2 is not controlled by the condition in step 1, so \"Fail\" is always displayed. A passing score therefore displays both words. An Otherwise is needed."
  },
  {
    id: "2.1-18",
    prompt: "Consider the following algorithm. What value is displayed?",
    code: `
      Set total to 0
      Set i to 3
      While i is less than or equal to 15
          Add i to total
          Add 4 to i
      Display total
    `,
    choices: ["21", "55", "36", "19"],
    answer: "C",
    explanation: "i takes the values 3, 7, 11, and 15 before it becomes 19 and the loop stops. 3 + 7 + 11 + 15 = 36. Answering 21 leaves out 15, the last value that still satisfies the condition."
  },
  {
    id: "2.1-19",
    prompt: "An algorithm is intended to display the sum 1 + 2 + ... + n for any positive whole number n. Which of the following algorithms meets this specification?",
    choices: [
      "Set sum to 0.\nSet k to 1.\nWhile k < n:\n    Add k to sum.\n    Add 1 to k.\nDisplay sum.",
      "Set sum to 0.\nSet k to 1.\nWhile k <= n:\n    Add 1 to k.\n    Add k to sum.\nDisplay sum.",
      "Set sum to 0.\nSet k to 0.\nWhile k <= n:\n    Add 1 to k.\n    Add k to sum.\nDisplay sum.",
      "Set sum to 0.\nSet k to n.\nWhile k > 0:\n    Add k to sum.\n    Subtract 1 from k.\nDisplay sum."
    ],
    answer: "D",
    explanation: "Counting down from n to 1 adds each of n, n - 1, ..., 1 exactly once. The first choice never adds n, and the other two add n + 1 because k is increased before it is added."
  },
  {
    id: "2.1-20",
    prompt: "Consider the following algorithm. Which of the following best describes what it displays?",
    code: `
      1. Read a whole number n.
      2. If n is negative, set n to -n.
      3. If n is greater than 100, set n to 100.
      4. Display n.
    `,
    choices: [
      "n if n is between 0 and 100; otherwise, 100",
      "The absolute value of n, or 100 if the absolute value is greater than 100",
      "The absolute value of n",
      "100 if n is negative; otherwise, n"
    ],
    answer: "B",
    explanation: "Step 2 makes n nonnegative, and step 3 then caps it at 100. For example, -50 displays 50 and -250 displays 100, so the first choice is wrong for -50."
  }
]);

defineTopic(2, "2.2", "Boolean Expressions", [
  {
    id: "2.2-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 5;
      int b = 8;
      System.out.println((a < b) + " " + (a == b));
    `,
    choices: ["false true", "true true", "true false", "false false"],
    answer: "C",
    explanation: "5 < 8 is true and 5 == 8 is false. Each relational expression produces a boolean value, which is concatenated into the output."
  },
  {
    id: "2.2-02",
    prompt: "Which of the following statements compiles without error?",
    choices: [
      "`boolean done = 7 > 3;`",
      "`boolean done = \"true\";`",
      "`boolean done = 1;`",
      "`boolean done = (7 = 3);`"
    ],
    answer: "A",
    explanation: "A relational expression produces a boolean, so it can be assigned to a boolean variable. A String or an int is not a boolean in Java, and `=` is assignment, not comparison."
  },
  {
    id: "2.2-03",
    prompt: "Which of the following Java operators tests whether two `int` values are not equal?",
    choices: ["`<>`", "`=!`", "`!==`", "`!=`"],
    answer: "D",
    explanation: "Java uses `!=` for \"not equal to.\" The other symbols are not Java relational operators."
  },
  {
    id: "2.2-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double x = 7 / 2;
      System.out.println(x == 3.5);
    `,
    choices: [
      "`true`",
      "`false`",
      "`3.5`",
      "Nothing is printed because the code does not compile."
    ],
    answer: "B",
    explanation: "`7 / 2` is integer division and gives 3, which is stored as 3.0. Since 3.0 is not equal to 3.5, the comparison is false."
  },
  {
    id: "2.2-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int score = 82;
      boolean passed = score >= 70;
      score = 60;
      System.out.println(passed);
    `,
    choices: [
      "`true`",
      "`false`",
      "`60`",
      "Nothing is printed because a boolean variable cannot be assigned an expression."
    ],
    answer: "A",
    explanation: "The expression is evaluated once, when it is assigned, and 82 >= 70 is true. Changing score later does not change the value already stored in passed."
  },
  {
    id: "2.2-06",
    prompt: "Assume that `r1` and `r2` are variables of the same reference type and that each refers to an object. When does the expression `r1 == r2` evaluate to `true`?",
    choices: [
      "Whenever the two objects have the same attribute values",
      "Whenever the two objects were created with the same constructor arguments",
      "Only when `r1` and `r2` refer to the same object",
      "Never, because `==` can be used only with primitive values"
    ],
    answer: "C",
    explanation: "With reference types, `==` compares the object references, not the contents of the objects. Two separate objects holding the same values are still different objects, so `==` is false for them."
  },
  {
    id: "2.2-07",
    prompt: "Assume that `n` is a properly declared and initialized `int` variable. Which of the following expressions evaluates to `true` exactly when `n` is even?",
    choices: ["`n / 2 == 0`", "`n % 2 == 0`", "`n % 2 == 1`", "`n % 2 = 0`"],
    answer: "B",
    explanation: "An even number has a remainder of 0 when divided by 2. `n / 2 == 0` is true only for -1, 0, and 1, and `n % 2 = 0` does not compile because `=` is assignment."
  },
  {
    id: "2.2-08",
    prompt: "Consider the following code segment. Which of the following best describes the result of compiling and running it?",
    code: `
      int count = 4;
      boolean ok = count = 4;
      System.out.println(ok);
    `,
    choices: [
      "`true` is printed.",
      "`false` is printed.",
      "`4` is printed.",
      "The code does not compile because `count = 4` is an assignment that produces an `int`, not a `boolean`."
    ],
    answer: "D",
    explanation: "A single `=` assigns; it does not compare. The value of `count = 4` is the int 4, which cannot be stored in a boolean variable. The comparison would be `count == 4`."
  },
  {
    id: "2.2-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = 0.1 + 0.2;
      System.out.println((d == 0.3) + " " + (Math.abs(d - 0.3) < 0.000001));
    `,
    choices: ["true true", "true false", "false false", "false true"],
    answer: "D",
    explanation: "Because of round-off error, `0.1 + 0.2` is stored as a value very slightly larger than 0.3, so `==` is false. The values are within 0.000001 of each other, so the second test is true."
  },
  {
    id: "2.2-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n1 = 5;
      int n2 = 5;
      String s1 = new String("go");
      String s2 = new String("go");
      System.out.println((n1 == n2) + " " + (s1 == s2));
    `,
    choices: ["true false", "true true", "false false", "false true"],
    answer: "A",
    explanation: "For the primitive `int` values, `==` compares the values themselves, so 5 == 5 is true. For the `String` objects, `==` compares references, and each `new String` creates a different object, so the result is false even though the text matches."
  },
  {
    id: "2.2-11",
    prompt: "Consider the statement `boolean b = 3 + 4 <= 7;` What value is stored in `b`?",
    choices: [
      "`false`",
      "Nothing; the statement does not compile because `+` cannot appear in a boolean expression.",
      "`true`",
      "`7`"
    ],
    answer: "C",
    explanation: "Arithmetic operators have higher precedence than relational operators, so `3 + 4` is computed first. 7 <= 7 is true."
  },
  {
    id: "2.2-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int i = 5;
      double d = 5.0;
      System.out.println((i == d) + " " + (i / 2 == d / 2));
    `,
    choices: [
      "false false",
      "true false",
      "false true",
      "Nothing is printed because an `int` cannot be compared to a `double`."
    ],
    answer: "B",
    explanation: "When an int is compared to a double, the int is widened to 5.0, so the first comparison is true. `i / 2` is integer division (2) while `d / 2` is 2.5, so the second is false."
  },
  {
    id: "2.2-13",
    prompt: "Assume `int a = 6;` and `int b = 9;` have been executed. Which of the following expressions evaluate to `true`?",
    code: `
      I.   a * 3 == b * 2
      II.  b - a != 3
      III. b / a >= 1.5
    `,
    choices: ["I only", "I and III only", "II only", "I, II, and III"],
    answer: "A",
    explanation: "I compares 18 to 18, which is true. II is false because 9 - 6 is exactly 3. In III, `b / a` is integer division and gives 1, and 1 >= 1.5 is false."
  },
  {
    id: "2.2-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 3;
      boolean b1 = x > 2;
      x = x * 2;
      boolean b2 = x < 5;
      System.out.println(b1 + " " + b2 + " " + (b1 == b2));
    `,
    choices: ["true true true", "true false true", "false false true", "true false false"],
    answer: "D",
    explanation: "b1 is true because 3 > 2. x becomes 6, so b2 is false. The two booleans are different, so `b1 == b2` is false."
  },
  {
    id: "2.2-15",
    prompt: "Assume `x` and `y` are `int` variables. What is the data type of the expression `x < y`?",
    choices: ["`int`", "`boolean`", "`double`", "`String`"],
    answer: "B",
    explanation: "Every relational expression evaluates to either true or false, so its type is boolean, whatever the types of the values being compared."
  },
  {
    id: "2.2-16",
    prompt: "The following method is intended to return `true` if `num` is a multiple of 7 and `false` otherwise. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static boolean isMultipleOf7(int num)
      {
          return /* missing code */;
      }
    `,
    choices: ["`num / 7 == 0`", "`num % 7 == 7`", "`num % 7 == 0`", "`7 % num == 0`"],
    answer: "C",
    explanation: "num is a multiple of 7 when dividing by 7 leaves no remainder. `num % 7` can never be 7, and `7 % num == 0` tests whether num divides 7, which is backwards."
  },
  {
    id: "2.2-17",
    prompt: "Consider the following method. What is printed as a result of executing `System.out.println(check(9, 4) + \" \" + check(6, 6));`?",
    code: `
      public static boolean check(int a, int b)
      {
          boolean result = a > b;
          result = a % b == 0;
          return result;
      }
    `,
    choices: ["false true", "true false", "true true", "false false"],
    answer: "A",
    explanation: "The second assignment replaces the first, so the method returns whether a is divisible by b. 9 % 4 is 1 (false) and 6 % 6 is 0 (true). Choosing true false uses only the first assignment."
  },
  {
    id: "2.2-18",
    prompt: "Which of the following statements causes a compile-time error?",
    choices: [
      "`boolean b = 5 != 4;`",
      "`boolean b = 2.5 > 2;`",
      "`boolean b = 4 == 4.0;`",
      "`boolean b = 5 < 7 < 9;`"
    ],
    answer: "D",
    explanation: "`5 < 7` produces a boolean, and a boolean cannot be compared to 9 with `<`. Mixing int and double in a comparison is legal."
  },
  {
    id: "2.2-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 10;
      int b = a;
      a = a + 1;
      System.out.println(a == b);
    `,
    choices: ["`true`", "`11`", "`false`", "`a == b`"],
    answer: "C",
    explanation: "b receives a copy of the value 10. Changing a to 11 afterward does not change b, so 11 == 10 is false."
  },
  {
    id: "2.2-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double price = 19.99;
      int qty = 3;
      System.out.println((price * qty > 60) + " " + ((int) price * qty >= 57));
    `,
    choices: ["true true", "false true", "true false", "false false"],
    answer: "B",
    explanation: "`price * qty` is about 59.97, which is not greater than 60. The cast applies only to price, giving 19, and 19 * 3 = 57, which is >= 57."
  }
]);

defineTopic(2, "2.3", "if Statements", [
  {
    id: "2.3-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 8;
      if (x > 5)
      {
          x = x - 3;
      }
      System.out.println(x);
    `,
    choices: ["5", "8", "3", "2"],
    answer: "A",
    explanation: "8 > 5 is true, so the body runs and x becomes 8 - 3, which is 5."
  },
  {
    id: "2.3-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int temp = 65;
      if (temp >= 70)
      {
          System.out.print("warm ");
      }
      else
      {
          System.out.print("cool ");
      }
      System.out.println("day");
    `,
    choices: ["warm day", "cool", "cool day", "warm cool day"],
    answer: "C",
    explanation: "65 >= 70 is false, so only the else branch prints \"cool \". The last statement is after the if-else, so it always runs."
  },
  {
    id: "2.3-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 3;
      if (n > 5)
          System.out.print("A");
          System.out.print("B");
      System.out.print("C");
    `,
    choices: ["C", "BC", "ABC", "AB"],
    answer: "B",
    explanation: "Without braces, the if controls only the next statement, which prints A. The indentation does not matter, so B and C are always printed."
  },
  {
    id: "2.3-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 4;
      int b = 9;
      if (b % a == 1)
      {
          a = a * 2;
      }
      else
      {
          b = b - a;
      }
      if (a == b)
      {
          System.out.println("same");
      }
      else
      {
          System.out.println(a + " " + b);
      }
    `,
    choices: ["same", "4 5", "8 1", "8 9"],
    answer: "D",
    explanation: "`9 % 4` is 1, so a becomes 8 and the else branch that changes b is skipped. 8 is not equal to 9, so \"8 9\" is printed."
  },
  {
    id: "2.3-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 10;
      if (x > 5)
      {
          x = x - 6;
      }
      if (x < 5)
      {
          x = x * 3;
      }
      System.out.println(x);
    `,
    choices: ["4", "12", "30", "10"],
    answer: "B",
    explanation: "These are two separate if statements, so both conditions are checked. The first makes x equal to 4, and then 4 < 5 is true, so x becomes 12."
  },
  {
    id: "2.3-06",
    prompt: "The following method is intended to return the absolute value of `n`. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static int absVal(int n)
      {
          if (/* missing code */)
          {
              n = -n;
          }
          return n;
      }
    `,
    choices: ["`n < 0`", "`n > 0`", "`n == -n`", "`n != 0`"],
    answer: "A",
    explanation: "Only a negative number should be negated. `n > 0` would make positive values negative, and `n != 0` would negate every nonzero value."
  },
  {
    id: "2.3-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      int val = 2;
      if (val > 5);
      {
          count = count + 1;
      }
      System.out.println(count);
    `,
    choices: [
      "0",
      "Nothing is printed because the code does not compile.",
      "2",
      "1"
    ],
    answer: "D",
    explanation: "The semicolon right after the condition ends the if with an empty statement. The block below is not part of the if, so it always runs and count becomes 1. This compiles."
  },
  {
    id: "2.3-08",
    prompt: "Consider the following method. What is printed as a result of executing `System.out.println(f(9) + f(10));`?",
    code: `
      public static int f(int x)
      {
          if (x % 3 == 0)
          {
              return x / 3;
          }
          return x + 1;
      }
    `,
    choices: ["311", "13", "14", "10"],
    answer: "C",
    explanation: "f(9) returns 3 from inside the if. For f(10) the condition is false, so 11 is returned. Both values are ints, so they are added to give 14, not concatenated."
  },
  {
    id: "2.3-09",
    prompt: "A parking garage charges by the hour, and any partial hour is charged as a full hour. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      /** Returns the number of hours charged for parking.
       *  Precondition: minutes >= 0
       */
      public static int hoursCharged(int minutes)
      {
          int hours = minutes / 60;
          if (/* missing code */)
          {
              hours++;
          }
          return hours;
      }
    `,
    choices: [
      "`minutes > 60`",
      "`minutes / 60 > 0`",
      "`minutes % 60 != 0`",
      "`minutes % 60 == 0`"
    ],
    answer: "C",
    explanation: "Integer division counts only full hours, so one more hour is needed exactly when there are leftover minutes. `minutes > 60` would wrongly charge 3 hours for 120 minutes and only 0 hours for 30 minutes."
  },
  {
    id: "2.3-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 7;
      if (x > 5)
      {
          x = x - 5;
          System.out.print("P");
      }
      else
      {
          x = x + 5;
          System.out.print("Q");
      }
      System.out.println(x);
    `,
    choices: ["P2Q7", "Q12", "P7", "P2"],
    answer: "D",
    explanation: "The condition is checked once. It is true, so only the if branch runs. Changing x inside that branch does not cause the else branch to run as well."
  },
  {
    id: "2.3-11",
    prompt: "In an `if-else` statement, when is the body of the `else` executed?",
    choices: [
      "Only when the condition of the `if` is false",
      "Every time, after the body of the `if` finishes",
      "Only when the condition of the `if` is true",
      "Only when the body of the `if` contains more than one statement"
    ],
    answer: "A",
    explanation: "Exactly one of the two branches runs. The if body runs when the condition is true, and the else body runs when it is false."
  },
  {
    id: "2.3-12",
    prompt: "Consider the following code segment. Which of the following best describes the result of compiling and running it?",
    code: `
      int n = 5;
      if (n > 0)
          System.out.print("pos");
          n = 0;
      else
          System.out.print("non-pos");
    `,
    choices: [
      "`pos` is printed.",
      "The code does not compile because the `else` is not connected to an `if`.",
      "`posnon-pos` is printed.",
      "`non-pos` is printed."
    ],
    answer: "B",
    explanation: "Without braces, the if controls only the print statement. `n = 0;` ends the if statement, so the else has no matching if and the compiler reports an error."
  },
  {
    id: "2.3-13",
    prompt: "Assume that `a` and `b` are properly declared and initialized `int` variables. Which of the following code segments correctly assign the larger of `a` and `b` to `max`?",
    code: `
      I.   int max = a;
           if (b > max)
           {
               max = b;
           }

      II.  int max = b;
           if (a > b)
           {
               max = a;
           }

      III. int max;
           if (a > b)
           {
               max = a;
           }
           else
           {
               max = b;
           }
    `,
    choices: ["I only", "III only", "I and III only", "I, II, and III"],
    answer: "D",
    explanation: "Each segment starts with or chooses one value and replaces it only when the other is larger. All three work, including when a and b are equal."
  },
  {
    id: "2.3-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      boolean found = false;
      int n = 12;
      if (n % 4 == 0)
      {
          found = true;
      }
      if (found)
      {
          n = n / 4;
      }
      else
      {
          n = n * 4;
      }
      System.out.println(n);
    `,
    choices: ["3", "48", "12", "true"],
    answer: "A",
    explanation: "12 % 4 is 0, so found becomes true. A boolean variable can be used directly as a condition, so n becomes 12 / 4, which is 3."
  },
  {
    id: "2.3-15",
    prompt: "The following method is intended to apply a 10 percent discount only when `total` is at least 100. Which of the following best describes the behavior of the method?",
    code: `
      public static double finalPrice(double total)
      {
          if (total >= 100)
              System.out.println("Discount applied");
              total = total * 0.9;
          return total;
      }
    `,
    choices: [
      "The method works as intended.",
      "The method does not compile because the if statement has no braces.",
      "The discount is applied to every total, because only the print statement is controlled by the if.",
      "The discount is never applied, because the if controls the return statement."
    ],
    answer: "C",
    explanation: "Without braces, only the next statement belongs to the if. The multiplication always runs, so a total of 50 returns 45.0 even though no message is printed."
  },
  {
    id: "2.3-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 3;
      int b = 5;
      if (a < b)
      {
          a = a + b;
      }
      if (a < b)
      {
          b = b - a;
      }
      else
      {
          b = a - b;
      }
      System.out.println(a + " " + b);
    `,
    choices: ["8 -3", "8 3", "3 5", "8 5"],
    answer: "B",
    explanation: "a becomes 8 in the first if. The second condition is checked with the new value, so 8 < 5 is false and b becomes 8 - 5, which is 3."
  },
  {
    id: "2.3-17",
    prompt: "A method is intended to print \"eligible\" when `age` is 18 or older and do nothing otherwise. Which condition should be used in `if (/* condition */)`?",
    choices: ["`age > 18`", "`age >= 17`", "`age == 18`", "`age >= 18`"],
    answer: "D",
    explanation: "\"18 or older\" includes 18, so `>=` is needed. `age > 18` misses age 18, `age >= 17` lets 17 through, and `age == 18` excludes everyone older."
  },
  {
    id: "2.3-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int points = 40;
      if (points < 50)
      {
          points = points + 10;
      }
      else
      {
          points = points - 10;
      }
      System.out.println(points);
    `,
    choices: ["50", "30", "40", "60"],
    answer: "A",
    explanation: "40 < 50 is true, so points becomes 50 and the else branch is skipped. The else does not run even though points is no longer less than 50."
  },
  {
    id: "2.3-19",
    prompt: "Assume that `x` and `y` are properly declared `int` variables. Which of the following code segments assigns the same value to `y` as the given code segment for all values of `x`?",
    code: `
      if (x > 10)
      {
          y = 1;
      }
      else
      {
          y = 0;
      }
    `,
    choices: [
      "y = 1;\nif (x < 10)\n{\n    y = 0;\n}",
      "y = 0;\nif (x > 10)\n{\n    y = 1;\n}",
      "if (x > 10)\n{\n    y = 1;\n}\ny = 0;",
      "if (x <= 10)\n{\n    y = 1;\n}\nelse\n{\n    y = 0;\n}"
    ],
    answer: "B",
    explanation: "Starting y at 0 and changing it to 1 only when x > 10 matches the if-else. The first choice gives 1 when x is 10, the third always ends with 0, and the last reverses the results."
  },
  {
    id: "2.3-20",
    prompt: "Consider the following method. What is printed as a result of executing `System.out.println(grade(95) + \" \" + grade(70));`?",
    code: `
      public static String grade(int score)
      {
          String result = "";
          if (score >= 90)
          {
              result = result + "A";
          }
          if (score >= 80)
          {
              result = result + "B";
          }
          else
          {
              result = result + "C";
          }
          return result;
      }
    `,
    choices: ["A C", "AB BC", "AB C", "A B"],
    answer: "C",
    explanation: "The first if and the if-else are separate statements. For 95, both 95 >= 90 and 95 >= 80 are true, giving \"AB\". For 70, only the else runs, giving \"C\"."
  }
]);

defineTopic(2, "2.4", "Nested if Statements", [
  {
    id: "2.4-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int score = 85;
      String grade;
      if (score >= 90)
      {
          grade = "A";
      }
      else if (score >= 80)
      {
          grade = "B";
      }
      else if (score >= 70)
      {
          grade = "C";
      }
      else
      {
          grade = "F";
      }
      System.out.println(grade);
    `,
    choices: ["A", "C", "BC", "B"],
    answer: "D",
    explanation: "The conditions are checked in order, and 85 >= 80 is the first true one. Once a branch runs, the rest of the chain is skipped, so \"C\" is never assigned."
  },
  {
    id: "2.4-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int score = 95;
      if (score >= 70)
      {
          System.out.println("C");
      }
      else if (score >= 80)
      {
          System.out.println("B");
      }
      else if (score >= 90)
      {
          System.out.println("A");
      }
      else
      {
          System.out.println("F");
      }
    `,
    choices: ["A", "C", "CBA", "F"],
    answer: "B",
    explanation: "95 >= 70 is the first condition checked and it is true, so \"C\" is printed and the rest of the chain is skipped. Order matters: the most restrictive range should be tested first."
  },
  {
    id: "2.4-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 4;
      int y = 7;
      if (x > 2)
      {
          if (y > 10)
          {
              System.out.println("one");
          }
          else
          {
              System.out.println("two");
          }
      }
      else
      {
          System.out.println("three");
      }
    `,
    choices: ["two", "three", "one", "twothree"],
    answer: "A",
    explanation: "4 > 2 is true, so the inner if-else runs. 7 > 10 is false, so \"two\" is printed. The outer else is skipped."
  },
  {
    id: "2.4-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 5;
      int b = 3;
      if (a < 4)
          if (b < 4)
              System.out.print("X");
      else
          System.out.print("Y");
      System.out.print("Z");
    `,
    choices: ["YZ", "XZ", "Z", "XYZ"],
    answer: "C",
    explanation: "Without braces, an else belongs to the nearest unmatched if, which is `if (b < 4)`, no matter how it is indented. Since 5 < 4 is false, the whole inner if-else is skipped and only Z prints."
  },
  {
    id: "2.4-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 10;
      if (n % 3 == 0)
      {
          if (n % 5 == 0)
          {
              System.out.println("FizzBuzz");
          }
          else
          {
              System.out.println("Fizz");
          }
      }
      else if (n % 5 == 0)
      {
          System.out.println("Buzz");
      }
      else
      {
          System.out.println(n);
      }
    `,
    choices: ["Buzz", "Fizz", "10", "FizzBuzz"],
    answer: "A",
    explanation: "10 % 3 is 1, so the outer if and its nested statement are skipped. 10 % 5 is 0, so the else if branch prints \"Buzz\"."
  },
  {
    id: "2.4-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 12;
      if (x > 10)
      {
          x = x - 5;
      }
      else if (x > 5)
      {
          x = x * 2;
      }
      else
      {
          x = 0;
      }
      System.out.println(x);
    `,
    choices: ["14", "0", "12", "7"],
    answer: "D",
    explanation: "The first branch runs and x becomes 7. Even though 7 > 5 is now true, the else if is not checked, because only one branch of a chain ever runs."
  },
  {
    id: "2.4-07",
    prompt: "Consider the following method. What is printed as a result of executing `System.out.println(fee(70, true) + fee(70, false) + fee(8, true));`?",
    code: `
      public static int fee(int age, boolean member)
      {
          if (age < 12)
          {
              return 5;
          }
          else if (member)
          {
              if (age >= 65)
              {
                  return 6;
              }
              else
              {
                  return 8;
              }
          }
          else if (age >= 65)
          {
              return 9;
          }
          return 12;
      }
    `,
    choices: ["22", "23", "20", "695"],
    answer: "C",
    explanation: "fee(70, true) reaches the nested if and returns 6, fee(70, false) returns 9, and fee(8, true) returns 5 from the first branch. The ints are added: 6 + 9 + 5 = 20."
  },
  {
    id: "2.4-08",
    prompt: "A `String` variable `category` should be set to \"low\" when `n` is less than 10, \"mid\" when `n` is from 10 to 19, and \"high\" when `n` is 20 or more. Which of the following code segments work as intended?",
    code: `
      I.   if (n < 10)
               category = "low";
           else if (n < 20)
               category = "mid";
           else
               category = "high";

      II.  if (n >= 20)
               category = "high";
           else if (n >= 10)
               category = "mid";
           else
               category = "low";

      III. if (n < 20)
               category = "mid";
           else if (n < 10)
               category = "low";
           else
               category = "high";
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "I and II test the ranges in a consistent order, so each branch is reached only for its range. In III, any n less than 10 is also less than 20, so it is labeled \"mid\" and \"low\" is never assigned."
  },
  {
    id: "2.4-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 2;
      int b = 8;
      if (a > 5)
      {
          if (b > 5)
              System.out.print("P");
      }
      else
          System.out.print("Q");
      System.out.print("R");
    `,
    choices: ["R", "QR", "PR", "PQR"],
    answer: "B",
    explanation: "The braces close the inner if, so the else belongs to `if (a > 5)`. Since 2 > 5 is false, Q is printed, followed by R."
  },
  {
    id: "2.4-10",
    prompt: "A multiway selection statement has the form `if ... else if ... else if ... else`. How many of its branches are executed each time the statement runs?",
    choices: [
      "Exactly one",
      "Every branch whose condition is true",
      "None, unless every condition is true",
      "Two: the first branch whose condition is true and the final else"
    ],
    answer: "A",
    explanation: "Conditions are checked in order and only the first true branch runs. If none is true, the final else runs, so exactly one branch always executes."
  },
  {
    id: "2.4-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int t = 50;
      String s = "none";
      if (t > 90)
      {
          s = "hot";
      }
      else if (t > 70)
      {
          s = "warm";
      }
      else if (t > 55)
      {
          s = "mild";
      }
      System.out.println(s);
    `,
    choices: ["mild", "warm", "Nothing is printed.", "none"],
    answer: "D",
    explanation: "None of the three conditions is true for 50, and there is no final else, so no branch runs. s keeps its original value, and \"none\" is printed."
  },
  {
    id: "2.4-12",
    prompt: "Assume that `x` and `y` are properly declared `int` variables. Which of the following code segments assigns the same value to `y` as the given code segment for all values of `x`?",
    code: `
      if (x > 100)
          y = 3;
      else if (x > 50)
          y = 2;
      else
          y = 1;
    `,
    choices: [
      "if (x > 50)\n    y = 2;\nelse if (x > 100)\n    y = 3;\nelse\n    y = 1;",
      "if (x > 100)\n    y = 3;\nif (x > 50)\n    y = 2;\nelse\n    y = 1;",
      "if (x <= 50)\n    y = 1;\nelse if (x <= 100)\n    y = 2;\nelse\n    y = 3;",
      "y = 1;\nif (x > 50)\n    y = 2;\nelse if (x > 100)\n    y = 3;"
    ],
    answer: "C",
    explanation: "Testing the ranges from the bottom up gives 1 for x up to 50, 2 for 51 to 100, and 3 above 100. In the other choices, x = 101 gets 2, because the `x > 50` test either comes first or runs after y is set to 3."
  },
  {
    id: "2.4-13",
    prompt: "Consider the following method. What is returned by the call `describe(-4)`?",
    code: `
      public static String describe(int n)
      {
          if (n > 0)
          {
              if (n % 2 == 0)
              {
                  return "positive even";
              }
              return "positive odd";
          }
          else if (n == 0)
          {
              return "zero";
          }
          return "negative";
      }
    `,
    choices: ["\"negative\"", "\"positive even\"", "\"zero\"", "\"positive odd\""],
    answer: "A",
    explanation: "-4 > 0 is false, so the nested even/odd test is never reached. -4 == 0 is also false, so the final return gives \"negative\"."
  },
  {
    id: "2.4-14",
    prompt: "The following method is intended to return \"A\" for scores of 90 and above, \"B\" for 80 through 89, \"C\" for 70 through 79, and \"F\" otherwise. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static String letter(int score)
      {
          if (score >= 90)
          {
              return "A";
          }
          /* missing code */
          return "F";
      }
    `,
    choices: [
      "if (score >= 70)\n    return \"C\";\nif (score >= 80)\n    return \"B\";",
      "if (score >= 80)\n    return \"B\";\nif (score >= 70)\n    return \"C\";",
      "if (score < 90)\n    return \"B\";\nif (score < 80)\n    return \"C\";",
      "if (score >= 80)\n    return \"B\";\nelse\n    return \"C\";"
    ],
    answer: "B",
    explanation: "Because a return ends the method, each test is reached only if the earlier ones failed, so the ranges must be checked from highest to lowest. Testing 70 first returns \"C\" for an 85. In the last choice both branches return, so `return \"F\";` can never be reached and the method does not compile."
  },
  {
    id: "2.4-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 10;
      int b = 20;
      if (a > 5)
      {
          a = a + 10;
          if (a > b)
          {
              b = 0;
          }
          else
          {
              b = b + a;
          }
      }
      else
      {
          a = 0;
      }
      System.out.println(a + " " + b);
    `,
    choices: ["20 0", "0 20", "10 40", "20 40"],
    answer: "D",
    explanation: "a becomes 20 inside the outer if. The inner test 20 > 20 is false, so b becomes 20 + 20, which is 40."
  },
  {
    id: "2.4-16",
    prompt: "Consider the following code segment, where `x` and `y` are properly declared and initialized `int` variables. Which of the following statements is true?",
    code: `
      if (x > 0)
          if (y > 0)
              System.out.println("both");
      else
          System.out.println("x not positive");
    `,
    choices: [
      "The else belongs to `if (x > 0)`, so the message is printed whenever `x` is not positive.",
      "The code does not compile because the else is not lined up with its if.",
      "The else belongs to `if (y > 0)`, so the message is printed when `x` is positive and `y` is not positive.",
      "The message is printed whenever `y` is not positive, regardless of the value of `x`."
    ],
    answer: "C",
    explanation: "Java pairs an else with the nearest unmatched if; indentation is ignored. So the message prints only when x > 0 is true and y > 0 is false, despite what it says."
  },
  {
    id: "2.4-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int age = 65;
      double price;
      if (age < 5)
      {
          price = 0.0;
      }
      else if (age < 18)
      {
          price = 8.5;
      }
      else if (age < 65)
      {
          price = 12.0;
      }
      else
      {
          price = 7.0;
      }
      System.out.println(price);
    `,
    choices: ["12.0", "7.0", "0.0", "8.5"],
    answer: "B",
    explanation: "65 < 65 is false, so none of the conditions is true and the final else assigns 7.0. Choosing 12.0 treats `<` as if it were `<=`."
  },
  {
    id: "2.4-18",
    prompt: "Consider the following code segment, where `n` is a properly declared and initialized `int` variable. For which of the following values of `n` does the code segment print `Q`?",
    code: `
      if (n > 10)
      {
          if (n < 20)
          {
              System.out.println("P");
          }
          else
          {
              System.out.println("Q");
          }
      }
      else
      {
          if (n < 0)
          {
              System.out.println("R");
          }
          else
          {
              System.out.println("S");
          }
      }
    `,
    choices: ["20", "15", "10", "-5"],
    answer: "A",
    explanation: "Q requires n > 10 to be true and n < 20 to be false, which is true for 20. 15 prints P, 10 prints S, and -5 prints R."
  },
  {
    id: "2.4-19",
    prompt: "Consider the following code segment, where `a`, `b`, `c`, and `m` are properly declared `int` variables. Which of the following best describes the value of `m` after the code segment executes?",
    code: `
      if (a > b)
      {
          if (a > c)
          {
              m = a;
          }
          else
          {
              m = c;
          }
      }
      else
      {
          if (b > c)
          {
              m = b;
          }
          else
          {
              m = c;
          }
      }
    `,
    choices: [
      "The smallest of `a`, `b`, and `c`",
      "`a` if `a` is greater than `b`; otherwise, `b`",
      "The largest of `a`, `b`, and `c`",
      "The middle value of `a`, `b`, and `c`"
    ],
    answer: "C",
    explanation: "The outer if picks the larger of a and b, and the inner if compares that value to c and keeps the larger. So m is the maximum of all three."
  },
  {
    id: "2.4-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 5;
      if (x > 3)
          System.out.print("A");
      else if (x > 1)
          System.out.print("B");
      if (x > 4)
          System.out.print("C");
      else
          System.out.print("D");
    `,
    choices: ["A", "AB", "ABC", "AC"],
    answer: "D",
    explanation: "There are two separate statements here: an if / else if chain and then an if-else. The chain prints only A, and the second statement prints C because 5 > 4."
  }
]);

defineTopic(2, "2.5", "Compound Boolean Expressions", [
  {
    id: "2.5-01",
    prompt: "What is printed when the following code segment is executed?",
    code: `
      int x = 0;
      if (x != 0 && 10 / x > 1)
      {
          System.out.println("A");
      }
      else
      {
          System.out.println("B");
      }
    `,
    choices: ["A", "B", "Nothing is printed.", "An `ArithmeticException` is thrown."],
    answer: "B",
    explanation: "`x != 0` is false, so `&&` short-circuits and `10 / x` is never evaluated. No division by zero happens, and the `else` branch prints B."
  },
  {
    id: "2.5-02",
    prompt: "Assume that `x` is a properly declared and initialized `int` variable. Which of the following expressions evaluates to `true` exactly when `x` is between 1 and 10, inclusive?",
    choices: [
      "`1 <= x <= 10`",
      "`x >= 1 || x <= 10`",
      "`x >= 1 && x <= 10`",
      "`x > 1 && x < 10`"
    ],
    answer: "C",
    explanation: "Both conditions must hold, so they are joined with `&&`, and `>=`/`<=` include the endpoints. Using `||` makes the expression true for every int, and `1 <= x <= 10` does not compile because `1 <= x` is a boolean that cannot be compared to 10."
  },
  {
    id: "2.5-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int temp = 72;
      boolean raining = false;
      if (temp > 65 && !raining)
      {
          System.out.println("Picnic");
      }
      else
      {
          System.out.println("Stay in");
      }
    `,
    choices: ["Picnic", "Stay in", "PicnicStay in", "Nothing is printed because `raining` is false."],
    answer: "A",
    explanation: "`temp > 65` is true and `!raining` is `!false`, which is true. Both operands of `&&` are true, so Picnic is printed."
  },
  {
    id: "2.5-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      boolean a = true;
      boolean b = false;
      boolean c = false;
      System.out.print((a || b && c) + " ");
      System.out.print((a || b) && c);
    `,
    choices: ["true true", "false false", "false true", "true false"],
    answer: "D",
    explanation: "`&&` has higher precedence than `||`, so the first expression is `a || (b && c)`, which is `true || false`, or true. The parentheses in the second expression force `(a || b)` first, giving `true && false`, which is false."
  },
  {
    id: "2.5-05",
    prompt: "Assume that `word` is a properly declared and initialized `String` variable. Which of the following expressions will never cause an `IndexOutOfBoundsException`, no matter what string `word` refers to?",
    choices: [
      "`word.substring(0, 3).equals(\"pre\") && word.length() >= 3`",
      "`word.length() >= 3 || word.substring(0, 3).equals(\"pre\")`",
      "`word.length() >= 3 && word.substring(0, 3).equals(\"pre\")`",
      "`word.substring(0, 3).equals(\"pre\") || word.length() < 3`"
    ],
    answer: "C",
    explanation: "When `word` is shorter than 3 characters, `word.length() >= 3` is false and `&&` short-circuits, so `substring(0, 3)` is never called. In the `||` version a false left operand forces the right side to be evaluated, and the other two call `substring` first."
  },
  {
    id: "2.5-06",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it, which appears in another method of the same class?",
    code: `
      public static boolean check(int n)
      {
          System.out.print(n + " ");
          return n > 2;
      }

      if (check(1) && check(5))
      {
          System.out.print("yes");
      }
      else
      {
          System.out.print("no");
      }
    `,
    choices: ["1 5 no", "1 no", "no", "1 5 yes"],
    answer: "B",
    explanation: "`check(1)` prints 1 and returns false. Because the left operand of `&&` is false, `check(5)` is never called, so only 1 is printed before no."
  },
  {
    id: "2.5-07",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it, which appears in another method of the same class?",
    code: `
      public static boolean isBig(int n)
      {
          System.out.print(n + " ");
          return n > 2;
      }

      if (isBig(3) || isBig(0) && isBig(4))
      {
          System.out.print("yes");
      }
      else
      {
          System.out.print("no");
      }
    `,
    choices: ["3 yes", "3 0 yes", "3 0 4 yes", "3 0 no"],
    answer: "A",
    explanation: "Because `&&` binds tighter, the condition is `isBig(3) || (isBig(0) && isBig(4))`. `isBig(3)` returns true, so `||` short-circuits and the entire right side is skipped."
  },
  {
    id: "2.5-08",
    prompt: "Assume that `num` is a properly declared and initialized `int` variable. Which of the following expressions evaluates to `true` exactly when `num` is outside the range 1 to 100, inclusive?",
    choices: [
      "`num < 1 && num > 100`",
      "`num <= 1 || num >= 100`",
      "`!(num > 1 && num < 100)`",
      "`num < 1 || num > 100`"
    ],
    answer: "D",
    explanation: "A number is outside the range if it is too small or too large, so the conditions are joined with `||`. Using `&&` is never true, and the other two choices wrongly treat 1 and 100 as outside the range."
  },
  {
    id: "2.5-09",
    prompt: "Consider the following code segment, where `year` is a positive `int`. For which of the following values of `year` will `leap` be `true`?",
    code: `
      boolean leap = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;

      I.   1900
      II.  2000
      III. 2024
    `,
    choices: ["III only", "II and III only", "I and III only", "I, II, and III"],
    answer: "B",
    explanation: "The expression groups as `(year % 4 == 0 && year % 100 != 0) || year % 400 == 0`. 1900 is divisible by 100 but not by 400, so it is false. 2000 is divisible by 400, and 2024 is divisible by 4 but not by 100, so both are true."
  },
  {
    id: "2.5-10",
    prompt: "The following method is intended to return `true` if exactly one of its two parameters is positive and `false` otherwise. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static boolean exactlyOne(int a, int b)
      {
          return /* missing code */;
      }
    `,
    choices: [
      "`a > 0 || b > 0`",
      "`a > 0 && b > 0`",
      "`(a > 0 || b > 0) && !(a > 0 && b > 0)`",
      "`!(a > 0) && !(b > 0)`"
    ],
    answer: "C",
    explanation: "At least one must be positive (`a > 0 || b > 0`) and they must not both be positive (`!(a > 0 && b > 0)`). Using only `||` incorrectly returns true when both parameters are positive."
  },
  {
    id: "2.5-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 5;
      int y = 10;
      if (x > 3 && y < 10 || x + y == 15)
      {
          System.out.println("P");
      }
      else
      {
          System.out.println("Q");
      }
    `,
    choices: ["P", "Q", "PQ", "Nothing is printed."],
    answer: "A",
    explanation: "`x > 3 && y < 10` is `true && false`, which is false. Then `false || x + y == 15` is `false || true`, which is true, so P is printed."
  },
  {
    id: "2.5-12",
    prompt: "Consider the following code segment. Which of the following best describes the result of compiling and running it?",
    code: `
      int score = 50;
      if (0 < score < 100)
      {
          System.out.println("valid");
      }
    `,
    choices: [
      "valid is printed.",
      "Nothing is printed.",
      "The code does not compile.",
      "The code compiles, but a run-time error occurs."
    ],
    answer: "C",
    explanation: "`0 < score` produces a boolean, and a boolean cannot be compared to 100 with `<`, so this is a compile-time error. A range check must be written as `0 < score && score < 100`."
  },
  {
    id: "2.5-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      boolean a = true;
      boolean b = false;
      System.out.println((!a && b) + " " + !(a && b));
    `,
    choices: ["true true", "false false", "true false", "false true"],
    answer: "D",
    explanation: "`!` has higher precedence than `&&`, so `!a && b` means `(!a) && b`, which is `false && false`, or false. In `!(a && b)` the parentheses make `a && b` (false) evaluate first, and `!false` is true."
  },
  {
    id: "2.5-14",
    prompt: "Assume that `total` and `count` are `int` variables and that `count` may be 0. Which of the following expressions can be evaluated without causing an `ArithmeticException`, for all values of `total` and `count`?",
    code: `
      I.   count != 0 && total / count > 10
      II.  total / count > 10 && count != 0
      III. count == 0 || total / count > 10
    `,
    choices: ["I only", "I and III only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "In I and III the check on `count` comes first: when `count` is 0, `&&` sees false or `||` sees true and skips the division. In II the division is evaluated first, so it fails when `count` is 0."
  },
  {
    id: "2.5-15",
    prompt: "Consider the following variable declarations. Which of the following expressions evaluate to `true`?",
    code: `
      int a = 3;
      int b = 8;

      I.   a < b && b < 10
      II.  !(a < b) || b == 8
      III. a > 5 || b > 5 && a == b
    `,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    answer: "A",
    explanation: "I is `true && true`. II is `false || true`. III groups as `a > 5 || (b > 5 && a == b)`, which is `false || (true && false)`, so it is false."
  },
  {
    id: "2.5-16",
    prompt: "A method is intended to return `true` if `hour` is between 0 and 23, inclusive, and `minute` is between 0 and 59, inclusive, and `false` otherwise. Which of the following expressions should the method return?",
    choices: [
      "`hour >= 0 && hour <= 23 || minute >= 0 && minute <= 59`",
      "`!(hour < 0 || hour > 23) || !(minute < 0 || minute > 59)`",
      "`(hour >= 0 || hour <= 23) && (minute >= 0 || minute <= 59)`",
      "`hour >= 0 && hour < 24 && minute >= 0 && minute < 60`"
    ],
    answer: "D",
    explanation: "All four conditions must be true, so they are all joined with `&&`, and `hour < 24` is the same as `hour <= 23`. The first two choices accept a valid hour with an invalid minute, and the third choice is true for every int value."
  },
  {
    id: "2.5-17",
    prompt: "Which of the following best describes short-circuit evaluation in Java?",
    choices: [
      "If the result of an `&&` or `||` expression can be determined from its left operand alone, the right operand is not evaluated.",
      "Both operands of `&&` and `||` are always evaluated, but the result is computed more quickly.",
      "The `&&` operator is always evaluated before the `||` operator in an expression.",
      "Evaluation of an expression stops as soon as one of its operands causes an exception."
    ],
    answer: "A",
    explanation: "`false && ...` is always false and `true || ...` is always true, so Java skips the right operand in those cases. Evaluating `&&` before `||` is a precedence rule, not short-circuiting."
  },
  {
    id: "2.5-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "hi";
      if (s.substring(2, 3).equals("x") && s.length() >= 3)
      {
          System.out.println("x found");
      }
      else
      {
          System.out.println("no x");
      }
    `,
    choices: [
      "x found",
      "no x",
      "Nothing is printed.",
      "An `IndexOutOfBoundsException` is thrown."
    ],
    answer: "D",
    explanation: "The left operand is evaluated first, and `s.substring(2, 3)` uses an end index past the end of a 2-character string. The length check would have prevented this only if it came first, before the `&&`."
  },
  {
    id: "2.5-19",
    prompt: "Consider the following method. What is printed as a result of executing `System.out.println(classify(4) + classify(-12) + classify(-3) + classify(9));`?",
    code: `
      public static String classify(int n)
      {
          if (n > 0 && n % 2 == 0 || n < -10)
          {
              return "X";
          }
          else if (!(n > 0) && n % 3 == 0)
          {
              return "Y";
          }
          return "Z";
      }
    `,
    choices: ["XYYZ", "XXYY", "XXYZ", "XYZZ"],
    answer: "C",
    explanation: "The first condition groups as `(n > 0 && n % 2 == 0) || n < -10`, so 4 and -12 both give X. -3 is not positive and is divisible by 3, giving Y, and 9 fails both conditions, giving Z. XYYZ comes from grouping as `n > 0 && (n % 2 == 0 || n < -10)`."
  },
  {
    id: "2.5-20",
    prompt: "Assume that `x` and `y` are properly declared and initialized `int` variables. Which of the following expressions evaluates to `true` only when both `x` and `y` are negative?",
    choices: [
      "`x < 0 || y < 0`",
      "`x < 0 && y < 0`",
      "`x && y < 0`",
      "`x + y < 0`"
    ],
    answer: "B",
    explanation: "Both conditions must be true, so each comparison is written out in full and they are joined with `&&`. `x && y < 0` does not compile because `x` is an int, not a boolean, and `x + y < 0` is also true for values like -5 and 2."
  },
]);

defineTopic(2, "2.6", "Comparing Boolean Expressions", [
  {
    id: "2.6-01",
    prompt: "Assume that `a` and `b` are `boolean` variables. Which of the following expressions is equivalent to `!(a && b)`?",
    choices: ["`!a && !b`", "`a || b`", "`!a || b`", "`!a || !b`"],
    answer: "D",
    explanation: "By De Morgan's law, negating an `&&` negates each operand and changes `&&` to `||`. A common mistake is to negate the operands but keep `&&`."
  },
  {
    id: "2.6-02",
    prompt: "Assume that `x` is an `int` variable. Which of the following expressions is equivalent to `!(x > 5)`?",
    choices: ["`x < 5`", "`x <= 5`", "`x >= 5`", "`!x > 5`"],
    answer: "B",
    explanation: "The opposite of \"greater than 5\" is \"less than or equal to 5\". `x < 5` leaves out 5 itself, and `!x` does not compile for an int."
  },
  {
    id: "2.6-03",
    prompt: "Assume that `x` and `y` are `int` variables. Which of the following expressions is equivalent to `!(x >= 10 || y < 3)`?",
    choices: [
      "`x < 10 && y >= 3`",
      "`x < 10 || y >= 3`",
      "`x <= 10 && y > 3`",
      "`x > 10 && y >= 3`"
    ],
    answer: "A",
    explanation: "De Morgan's law changes `||` to `&&` and negates each part: `!(x >= 10)` is `x < 10` and `!(y < 3)` is `y >= 3`. Keeping `||` or flipping only the direction of a comparison gives a different expression."
  },
  {
    id: "2.6-04",
    prompt: "Assume that `p` and `q` are `boolean` variables. For which of the following combinations of values does `(p || q) && !(p && q)` evaluate to `true`?",
    code: `
      I.   p is true,  q is true
      II.  p is true,  q is false
      III. p is false, q is false
    `,
    choices: ["I only", "I and II only", "II only", "II and III only"],
    answer: "C",
    explanation: "The expression is true when at least one value is true but not both. In I both are true, so `!(p && q)` is false, and in III neither is true, so `p || q` is false."
  },
  {
    id: "2.6-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String a = "cat";
      String b = new String("cat");
      System.out.println((a == b) + " " + a.equals(b));
    `,
    choices: ["true true", "false true", "true false", "false false"],
    answer: "B",
    explanation: "`new String` creates a separate object, so `a == b` compares two different references and is false. `equals` compares the characters, which match, so it is true."
  },
  {
    id: "2.6-06",
    prompt: "The `Counter` class has a constructor `Counter(int start)` that sets the count to `start`, a method `increment()` that adds 1 to the count, and a method `getCount()` that returns the count. What is printed as a result of executing the following code segment?",
    code: `
      Counter c1 = new Counter(3);
      Counter c2 = c1;
      c2.increment();
      System.out.println(c1.getCount() + " " + (c1 == c2));
    `,
    choices: ["3 true", "3 false", "4 false", "4 true"],
    answer: "D",
    explanation: "`c2 = c1` copies the reference, so `c1` and `c2` are aliases for the same object. Changing the object through `c2` is visible through `c1`, and `==` is true because both refer to the same object."
  },
  {
    id: "2.6-07",
    prompt: "Assume that the `Point` class has a constructor `Point(int x)` and does not define an `equals` method. What is printed as a result of executing the following code segment?",
    code: `
      Point a = new Point(5);
      Point b = new Point(5);
      Point c = a;
      System.out.println((a == b) + " " + (a == c));
    `,
    choices: ["false true", "true true", "true false", "false false"],
    answer: "A",
    explanation: "`a` and `b` refer to two different objects that happen to hold the same value, so `a == b` is false. `c` is an alias of `a`, so `a == c` is true."
  },
  {
    id: "2.6-08",
    prompt: "Assume that `str` is a `String` variable. Which of the following expressions correctly determines whether `str` does not refer to any object, without causing an error?",
    choices: ["`str.equals(null)`", "`str.length() == 0`", "`str == null`", "`str.equals(\"\")`"],
    answer: "C",
    explanation: "Comparisons to `null` use `==`. If `str` is null, calling any method on it, including `equals` or `length`, throws a `NullPointerException`. An empty string is an object, so it is not the same as null."
  },
  {
    id: "2.6-09",
    prompt: "Assume that `a` and `b` are `boolean` variables. Which of the following expressions are equivalent to `!(a || !b)`?",
    code: `
      I.   !a && b
      II.  !a || b
      III. b && !a
    `,
    choices: ["I only", "II only", "II and III only", "I and III only"],
    answer: "D",
    explanation: "By De Morgan's law, `!(a || !b)` becomes `!a && !!b`, which is `!a && b`. III is the same expression with the operands in the other order, and `&&` gives the same result in either order."
  },
  {
    id: "2.6-10",
    prompt: "Assume that `x` is an `int` variable. Which of the following expressions is equivalent to `x > 5 || x > 10`?",
    choices: ["`x > 5`", "`x > 10`", "`x > 5 && x > 10`", "`x >= 5`"],
    answer: "A",
    explanation: "Any value greater than 10 is also greater than 5, so the `|| x > 10` part never changes the result. The expression is true exactly when `x > 5`."
  },
  {
    id: "2.6-11",
    prompt: "Assume that `a` and `b` are `boolean` variables. Which of the following expressions is equivalent to `a && (a || b)` for all values of `a` and `b`?",
    choices: ["`b`", "`a`", "`a || b`", "`a && b`"],
    answer: "B",
    explanation: "If `a` is false, the whole expression is false. If `a` is true, `a || b` is true, so the expression is true. The result always equals `a`, regardless of `b`."
  },
  {
    id: "2.6-12",
    prompt: "Assume that `x` and `y` are `int` variables. Which of the following expressions is NOT equivalent to `!(x < 3 && y > 7)`?",
    choices: [
      "`x >= 3 || y <= 7`",
      "`!(x < 3) || !(y > 7)`",
      "`x >= 3 && y <= 7`",
      "`!(y > 7 && x < 3)`"
    ],
    answer: "C",
    explanation: "Applying De Morgan's law requires changing `&&` to `||`. `x >= 3 && y <= 7` negates each comparison but keeps `&&`, so it is false for values such as `x = 5, y = 9`, while the original is true."
  },
  {
    id: "2.6-13",
    prompt: "Assume that `p` and `q` are `boolean` variables. Which of the following expressions produces the result column of this truth table?",
    code: `
      p      q      result
      true   true   false
      true   false  true
      false  true   true
      false  false  true
    `,
    choices: ["`!p && !q`", "`!(p && q)`", "`!(p || q)`", "`p || q`"],
    answer: "B",
    explanation: "The result is false only when both values are true, which is the opposite of `p && q`. `!p && !q` (equivalent to `!(p || q)`) is true only in the last row."
  },
  {
    id: "2.6-14",
    prompt: "Consider the following code segment, where `x` and `y` are properly declared and initialized `int` variables. Which of the following statements assigns the same value to `result` for all values of `x` and `y`?",
    code: `
      boolean result;
      if (x > 10)
      {
          result = true;
      }
      else
      {
          result = y > 10;
      }
    `,
    choices: [
      "`result = x > 10 && y > 10;`",
      "`result = !(x > 10) || y > 10;`",
      "`result = x > 10 || !(y > 10);`",
      "`result = x > 10 || y > 10;`"
    ],
    answer: "D",
    explanation: "`result` is true when `x > 10`, and otherwise it depends on `y > 10`, which is exactly how `||` works. With `&&`, the result would be false whenever `x > 10` but `y <= 10`."
  },
  {
    id: "2.6-15",
    prompt: "Consider the following code segment. Which of the following expressions evaluate to `true`?",
    code: `
      String s1 = "Java";
      String s2 = s1;
      String s3 = new String("Java");

      I.   s1 == s2
      II.  s1 == s3
      III. s1.equals(s3)
    `,
    choices: ["I and III only", "III only", "I and II only", "I, II, and III"],
    answer: "A",
    explanation: "`s2` is an alias of `s1`, so `s1 == s2` is true. `s3` is a separate object created with `new`, so `==` is false, but `equals` compares the characters and is true."
  },
  {
    id: "2.6-16",
    prompt: "Consider the following method. What is printed as a result of executing `System.out.println(sameName(null, null) + \" \" + sameName(\"Al\", null) + \" \" + sameName(new String(\"Al\"), \"Al\"));`?",
    code: `
      public static boolean sameName(String a, String b)
      {
          if (a == null || b == null)
          {
              return a == b;
          }
          return a.equals(b);
      }
    `,
    choices: [
      "false false true",
      "true false false",
      "true false true",
      "A `NullPointerException` is thrown."
    ],
    answer: "C",
    explanation: "Two null references are equal with `==`, so the first call returns true. In the second call only one is null, so `==` returns false. In the third call neither is null, and `equals` compares the characters, returning true."
  },
  {
    id: "2.6-17",
    prompt: "The `Book` class has a constructor `Book(String title, int pages)`. It also has an `equals` method that returns `true` when two `Book` objects have the same title and the same number of pages. What is printed as a result of executing the following code segment?",
    code: `
      Book b1 = new Book("Dune", 412);
      Book b2 = new Book("Dune", 412);
      Book b3 = new Book("Dune", 500);
      System.out.println(b1.equals(b2) + " " + (b1 == b2) + " " + b1.equals(b3));
    `,
    choices: ["true false false", "true true false", "false false false", "true false true"],
    answer: "A",
    explanation: "The class's `equals` method compares attributes, and `b1` and `b2` have the same title and pages, so it returns true. `==` compares references, and `b1` and `b2` are different objects. `b3` has a different number of pages, so `b1.equals(b3)` is false."
  },
  {
    id: "2.6-18",
    prompt: "Assume that `x` is an `int` variable. Which of the following expressions evaluates to `true` for every possible value of `x`?",
    choices: [
      "`x > 0 && x <= 0`",
      "`x > 0 || x < 0`",
      "`!(x > 0) || x < 0`",
      "`x > 0 || x <= 0`"
    ],
    answer: "D",
    explanation: "Every int is either greater than 0 or less than or equal to 0, so the `||` is always true. `x > 0 || x < 0` is false when `x` is 0, and the `&&` version is never true."
  },
  {
    id: "2.6-19",
    prompt: "Many classes, such as `String`, provide their own `equals` method. Which of the following best describes the purpose of such a method?",
    choices: [
      "It determines whether two variables refer to the same object.",
      "It must be provided before `==` can be used to compare two objects of the class.",
      "It specifies the criteria, usually based on the objects' attributes, for deciding whether two objects of the class are equivalent.",
      "It copies the attribute values of one object into another object of the same class."
    ],
    answer: "C",
    explanation: "A class's `equals` method defines what it means for two of its objects to be equivalent, usually by comparing their attributes. Checking whether two variables refer to the same object is what `==` does, and `==` works on any references."
  },
  {
    id: "2.6-20",
    prompt: "Assume that `a`, `b`, and `c` are `boolean` variables. Which of the following expressions is equivalent to `!(!a && b) && c`?",
    choices: [
      "`(a && !b) && c`",
      "`(a || !b) && c`",
      "`a || !b && c`",
      "`!a || b && c`"
    ],
    answer: "B",
    explanation: "De Morgan's law turns `!(!a && b)` into `a || !b`, and the parentheses must stay because `&&` has higher precedence. Without them, `a || !b && c` means `a || (!b && c)`, which is true when `a` is true and `c` is false."
  },
]);

defineTopic(2, "2.7", "while Loops", [
  {
    id: "2.7-01",
    prompt: "What is printed when the following code segment is executed?",
    code: `
      int n = 5;
      int sum = 0;
      while (n > 0)
      {
          sum += n;
          n -= 2;
      }
      System.out.println(sum);
    `,
    choices: ["8", "9", "15", "The loop never ends."],
    answer: "B",
    explanation: "The loop adds 5, then 3, then 1 to `sum`, giving 9. After that `n` is -1, so `n > 0` is false and the loop ends."
  },
  {
    id: "2.7-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int k = 10;
      while (k < 5)
      {
          System.out.print(k + " ");
          k++;
      }
      System.out.print("done");
    `,
    choices: ["10 done", "5 done", "Nothing is printed because the loop never ends.", "done"],
    answer: "D",
    explanation: "The condition `k < 5` is false the first time it is checked, so the loop body executes zero times and only done is printed. A `while` loop does not have to run even once."
  },
  {
    id: "2.7-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      int x = 1;
      while (x < 100)
      {
          x *= 2;
          count++;
      }
      System.out.println(count);
    `,
    choices: ["7", "6", "8", "100"],
    answer: "A",
    explanation: "`x` takes the values 2, 4, 8, 16, 32, 64 and 128, one per iteration, so the body runs 7 times. The loop stops only after `x` reaches 128, so stopping at 64 (6 iterations) is an off-by-one error."
  },
  {
    id: "2.7-04",
    prompt: "Which of the following tasks requires an iterative process (a loop) rather than only a selection statement such as `if` or `if-else`?",
    choices: [
      "Determining whether a given integer is positive, negative, or zero",
      "Repeatedly dividing a positive integer by 2 until the result is 1, and counting the number of divisions",
      "Printing the larger of two given integers",
      "Assigning a letter grade based on a single test score"
    ],
    answer: "B",
    explanation: "Iteration is needed when a step must be repeated, and here the number of divisions depends on the value, so the division is repeated while the result is greater than 1. Each of the other tasks makes one decision and can be done with selection alone."
  },
  {
    id: "2.7-05",
    prompt: "Consider the following code segment. Which of the following best describes its behavior?",
    code: `
      int n = 1;
      while (n != 10)
      {
          n += 2;
      }
      System.out.println(n);
    `,
    choices: [
      "The loop body executes 4 times and 9 is printed.",
      "The loop body executes 5 times and 11 is printed.",
      "The loop never ends because `n` is never equal to 10.",
      "The loop body never executes and 1 is printed."
    ],
    answer: "C",
    explanation: "`n` starts at 1 and increases by 2, so it is always odd and skips over 10. The condition `n != 10` is never false, so this is an infinite loop. Using `n < 10` would have stopped it."
  },
  {
    id: "2.7-06",
    prompt: "The following code segment is intended to print the integers from 1 to 10, inclusive. Which of the following can be used to replace `/* condition */` so that the code segment works as intended?",
    code: `
      int i = 1;
      while (/* condition */)
      {
          System.out.print(i + " ");
          i++;
      }
    `,
    choices: ["`i <= 10`", "`i < 10`", "`i > 10`", "`i <= 11`"],
    answer: "A",
    explanation: "The body must run for `i` equal to 1 through 10, so it continues while `i <= 10`. `i < 10` stops one early (off by one) and `i <= 11` prints one extra value."
  },
  {
    id: "2.7-07",
    prompt: "The following code segment is intended to print 5 4 3 2 1, but it prints 5 4 3 2 instead. Which of the following changes will make the code segment work as intended?",
    code: `
      int n = 5;
      while (n > 1)
      {
          System.out.print(n + " ");
          n--;
      }
    `,
    choices: [
      "Change `n > 1` to `n >= 0`",
      "Change `int n = 5;` to `int n = 6;`",
      "Move `n--;` so that it comes before the print statement",
      "Change `n > 1` to `n > 0`"
    ],
    answer: "D",
    explanation: "The loop stops one iteration too early, an off-by-one error, so the condition must also be true when `n` is 1. `n >= 0` goes one too far and also prints 0, and moving `n--;` first prints 4 3 2 1."
  },
  {
    id: "2.7-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int total = 0;
      int value = 3;
      while (total < 20)
      {
          total += value;
          value += 2;
      }
      System.out.println(total + " " + value);
    `,
    choices: ["15 9", "24 9", "24 11", "20 11"],
    answer: "C",
    explanation: "`total` becomes 3, 8, 15, then 24, and `value` becomes 5, 7, 9, then 11. The condition is checked only at the top of the loop, so the last iteration finishes completely before the loop stops."
  },
  {
    id: "2.7-09",
    prompt: "Consider the following method. For which of the following calls does the body of the `while` loop execute zero times?",
    code: `
      public static int halvings(int n)
      {
          int count = 0;
          while (n > 1)
          {
              n /= 2;
              count++;
          }
          return count;
      }
    `,
    choices: ["`halvings(1)`", "`halvings(2)`", "`halvings(3)`", "`halvings(16)`"],
    answer: "A",
    explanation: "When `n` is 1, the condition `n > 1` is false the first time it is evaluated, so the loop body never executes and 0 is returned. For 2 and 3 the body runs once, and for 16 it runs 4 times."
  },
  {
    id: "2.7-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 2;
      while (x < 50)
      {
          x = x * 3;
      }
      System.out.println(x);
    `,
    choices: ["18", "54", "50", "162"],
    answer: "B",
    explanation: "`x` becomes 6, 18 and then 54. At that point `x < 50` is false, so the loop ends and 54 is printed. The value can go past 50 because the check happens only before each iteration."
  },
  {
    id: "2.7-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int total = 0;
      int k = 0;
      while (total < 10)
      {
          total += 4;
          System.out.print(total + " ");
          k++;
      }
      System.out.println(k);
    `,
    choices: ["4 8 2", "4 8 12 2", "4 8 12 3", "0 4 8 3"],
    answer: "C",
    explanation: "The condition is checked only before each iteration. When `total` is 8, the condition is still true, so a third iteration prints 12 and makes `k` equal to 3; only then does `total < 10` evaluate to false."
  },
  {
    id: "2.7-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 20;
      while (n > 1)
      {
          System.out.print(n + " ");
          n = n / 3;
      }
    `,
    choices: ["20 6 2 0", "20 6", "6 2", "20 6 2"],
    answer: "D",
    explanation: "Integer division gives 20 / 3 = 6, 6 / 3 = 2 and 2 / 3 = 0. The values 20, 6 and 2 are printed, then `n` is 0, so the condition `n > 1` is false before 0 can be printed."
  },
  {
    id: "2.7-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 6;
      int steps = 0;
      while (n != 1)
      {
          if (n % 2 == 0)
          {
              n = n / 2;
          }
          else
          {
              n = 3 * n + 1;
          }
          steps++;
      }
      System.out.println(steps);
    `,
    choices: ["7", "8", "9", "Nothing is printed because the loop never ends."],
    answer: "B",
    explanation: "`n` goes 6, 3, 10, 5, 16, 8, 4, 2, 1. That is 8 changes, and `steps` is increased once for each, so 8 is printed."
  },
  {
    id: "2.7-14",
    prompt: "Which of the following code segments will result in an infinite loop?",
    code: `
      I.   int k = 0;
           while (k < 5)
           {
               System.out.print(k);
           }

      II.  int k = 10;
           while (k > 0)
           {
               k -= 3;
           }

      III. int k = 1;
           while (k != 0)
           {
               k += 2;
           }
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "In I, `k` is never changed, so `k < 5` stays true. In III, `k` is always odd, so it never equals 0. In II, `k` goes 10, 7, 4, 1, -2 and the loop ends even though it never equals exactly 0."
  },
  {
    id: "2.7-15",
    prompt: "Which of the following statements about `while` loops is true?",
    choices: [
      "The body of a `while` loop executes zero times if the condition is false when the loop is first reached.",
      "The body of a `while` loop always executes at least once.",
      "The condition of a `while` loop is checked only once, before the first iteration.",
      "A `while` loop ends immediately when its condition becomes false, even in the middle of the loop body."
    ],
    answer: "A",
    explanation: "The condition is checked before every iteration, including the first, so the body may never run. The condition is not checked in the middle of the body, so an iteration that has started always finishes."
  },
  {
    id: "2.7-16",
    prompt: "The following method is intended to return the smallest power of 2 that is greater than or equal to `n`. For example, `smallestPower(5)` should return 8 and `smallestPower(8)` should return 8. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      /** Precondition: n > 0 */
      public static int smallestPower(int n)
      {
          int p = 1;
          while (/* missing code */)
          {
              p *= 2;
          }
          return p;
      }
    `,
    choices: ["`p <= n`", "`p > n`", "`p * 2 < n`", "`p < n`"],
    answer: "D",
    explanation: "The loop should keep doubling while `p` is still too small, that is, while `p < n`. With `p <= n`, `smallestPower(8)` would return 16, and `p * 2 < n` stops one doubling early."
  },
  {
    id: "2.7-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 0;
      int b = 10;
      while (a < b)
      {
          a += 2;
          b -= 1;
      }
      System.out.println(a + " " + b);
    `,
    choices: ["6 7", "8 7", "8 6", "10 5"],
    answer: "C",
    explanation: "After each iteration (a, b) is (2, 9), (4, 8), (6, 7), then (8, 6). Now `a < b` is false, so 8 6 is printed. Both updates happen in the last iteration before the condition is checked again."
  },
  {
    id: "2.7-18",
    prompt: "How many times is the body of the following loop executed?",
    code: `
      int i = 5;
      int count = 0;
      while (i <= 25)
      {
          count++;
          i += 5;
      }
    `,
    choices: ["5", "4", "6", "25"],
    answer: "A",
    explanation: "The body runs with `i` equal to 5, 10, 15, 20 and 25, which is 5 times. Because the condition uses `<=`, the value 25 is included."
  },
  {
    id: "2.7-19",
    prompt: "Consider the following code segment, where `x` is an `int` variable that has already been initialized. For which of the following initial values of `x` does the loop body execute exactly 3 times?",
    code: `
      while (x < 20)
      {
          x += 5;
      }
    `,
    choices: ["0", "4", "15", "5"],
    answer: "D",
    explanation: "Starting at 5, the body runs with `x` equal to 5, 10, and 15, and then `x` is 20, so `x < 20` is false. Starting at 0 or 4 gives 4 iterations, and starting at 15 gives only 1."
  },
  {
    id: "2.7-20",
    prompt: "The following algorithm processes a list of numbers that ends with the sentinel value -1. What value is displayed if the input is 4, 7, -1, 9?",
    code: `
      Step 1: Set total to 0.
      Step 2: Read a number.
      Step 3: While the number is not -1:
                  add the number to total, then
                  read the next number.
      Step 4: Display total.
    `,
    choices: ["10", "11", "19", "20"],
    answer: "B",
    explanation: "4 and 7 are added. When -1 is read, the loop stops, so the sentinel is not added and the 9 after it is never read. The total is 11."
  },
]);

defineTopic(2, "2.8", "for Loops", [
  {
    id: "2.8-01",
    prompt: "What is printed when the following code segment is executed?",
    code: `
      for (int i = 0; i < 10; i += 3)
      {
          System.out.print(i + " ");
      }
    `,
    choices: ["0 3 6", "0 3 6 9", "3 6 9", "0 3 6 9 12"],
    answer: "B",
    explanation: "`i` takes the values 0, 3, 6 and 9. When `i` becomes 12 the condition `i < 10` is false, so the loop stops before printing it."
  },
  {
    id: "2.8-02",
    prompt: "How many times is the body of the following loop executed?",
    code: `
      for (int k = 3; k < 8; k++)
      {
          System.out.println(k);
      }
    `,
    choices: ["4", "6", "5", "8"],
    answer: "C",
    explanation: "The body runs for `k` equal to 3, 4, 5, 6 and 7. That is 8 - 3 = 5 times, because the condition `k < 8` excludes 8."
  },
  {
    id: "2.8-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int i = 5; i > 0; i--)
      {
          System.out.print(i + " ");
      }
    `,
    choices: ["5 4 3 2 1", "5 4 3 2 1 0", "4 3 2 1 0", "4 3 2 1"],
    answer: "A",
    explanation: "The loop starts at 5 and the body runs before the first decrement, so 5 is printed. When `i` reaches 0, `i > 0` is false, so 0 is not printed."
  },
  {
    id: "2.8-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int sum = 0;
      for (int i = 1; i <= 10; i += 2)
      {
          sum += i;
      }
      System.out.println(sum);
    `,
    choices: ["30", "36", "55", "25"],
    answer: "D",
    explanation: "`i` takes the odd values 1, 3, 5, 7 and 9, whose sum is 25. The next value, 11, fails `i <= 10`, so it is not added (adding it would give 36)."
  },
  {
    id: "2.8-05",
    prompt: "Consider the following code segment. Which of the following code segments produces the same output?",
    code: `
      for (int k = 0; k < 4; k++)
      {
          System.out.print(k * k + " ");
      }
    `,
    choices: [
      "int k = 0;\nwhile (k < 4)\n{\n    k++;\n    System.out.print(k * k + \" \");\n}",
      "int k = 0;\nwhile (k < 4)\n{\n    System.out.print(k * k + \" \");\n    k++;\n}",
      "int k = 0;\nwhile (k <= 4)\n{\n    System.out.print(k * k + \" \");\n    k++;\n}",
      "int k = 1;\nwhile (k < 4)\n{\n    System.out.print(k * k + \" \");\n    k++;\n}"
    ],
    answer: "B",
    explanation: "A `for` loop runs its initialization once, checks the condition before each iteration, and runs the update at the end of each iteration. The equivalent `while` loop therefore puts `k++` as the last statement of the body."
  },
  {
    id: "2.8-06",
    prompt: "Consider the following code segment. How many times is the initialization `int k = 0` executed, and how many times is the Boolean expression `k < 4` evaluated?",
    code: `
      for (int k = 0; k < 4; k++)
      {
          System.out.print(k);
      }
    `,
    choices: [
      "The initialization is executed 1 time, and `k < 4` is evaluated 4 times.",
      "The initialization is executed 4 times, and `k < 4` is evaluated 4 times.",
      "The initialization is executed 4 times, and `k < 4` is evaluated 5 times.",
      "The initialization is executed 1 time, and `k < 4` is evaluated 5 times."
    ],
    answer: "D",
    explanation: "The initialization runs only once, before the first check. The condition is evaluated for `k` equal to 0, 1, 2, and 3 (true each time) and once more for `k` equal to 4, when it is false and the loop ends, for 5 evaluations."
  },
  {
    id: "2.8-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int x = 100; x > 1; x /= 4)
      {
          System.out.print(x + " ");
      }
    `,
    choices: ["100 25 6", "100 25 6 1", "100 25", "25 6 1"],
    answer: "A",
    explanation: "Integer division gives 100, 25, 6, then 6 / 4 = 1. When `x` is 1 the condition `x > 1` is false, so 1 is never printed."
  },
  {
    id: "2.8-08",
    prompt: "Consider the following loop, where `n` is an even `int` greater than or equal to 4. In terms of `n`, how many times is the loop body executed?",
    code: `
      for (int j = 4; j <= n; j += 2)
      {
          System.out.print(j + " ");
      }
    `,
    choices: ["`n / 2`", "`(n - 4) / 2`", "`n / 2 - 1`", "`n - 4`"],
    answer: "C",
    explanation: "The values 4, 6, ..., n form (n - 4) / 2 + 1 terms, which simplifies to n / 2 - 1. For example, when `n` is 10, `j` takes 4, 6, 8 and 10, which is 4 values. `(n - 4) / 2` forgets to count the first value."
  },
  {
    id: "2.8-09",
    prompt: "The following code segment is intended to print the multiples of 5 from 50 down to 5, inclusive, in that order. Which of the following can be used to replace `/* missing code */` so that the code segment works as intended?",
    code: `
      for (/* missing code */)
      {
          System.out.print(i + " ");
      }
    `,
    choices: [
      "`int i = 50; i > 5; i -= 5`",
      "`int i = 50; i >= 5; i--`",
      "`int i = 5; i <= 50; i += 5`",
      "`int i = 50; i >= 5; i -= 5`"
    ],
    answer: "D",
    explanation: "Counting down by 5 from 50 needs `i -= 5`, and `i >= 5` makes sure 5 is included. `i > 5` stops before printing 5, and starting at 5 prints the values in the wrong order."
  },
  {
    id: "2.8-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int product = 1;
      for (int k = 1; k <= 4; k++)
      {
          product *= k;
      }
      System.out.println(product);
    `,
    choices: ["6", "24", "10", "120"],
    answer: "B",
    explanation: "`product` is multiplied by 1, 2, 3 and 4, giving 24. Stopping at 3 (an off-by-one error) would give 6, and adding instead of multiplying would give 10."
  },
  {
    id: "2.8-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int limit = 10;
      int count = 0;
      for (int k = 0; k < limit; k++)
      {
          limit--;
          count++;
      }
      System.out.println(count + " " + limit);
    `,
    choices: ["5 5", "10 0", "4 6", "6 5"],
    answer: "A",
    explanation: "The Boolean expression `k < limit` is evaluated again before every iteration, using the current values. `k` goes up by 1 and `limit` goes down by 1 each time, so after 5 iterations both are 5 and `5 < 5` is false."
  },
  {
    id: "2.8-12",
    prompt: "Consider the following code segment. Which of the following code segments produce the same output?",
    code: `
      for (int k = 1; k <= 5; k += 2)
      {
          System.out.print(k + " ");
      }

      I.   int k = 1;
           while (k <= 5)
           {
               System.out.print(k + " ");
               k += 2;
           }

      II.  int k = 1;
           while (k <= 5)
           {
               k += 2;
               System.out.print(k + " ");
           }

      III. int k = -1;
           while (k < 5)
           {
               k += 2;
               System.out.print(k + " ");
           }
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "The `for` loop prints 1 3 5. Segment I is the standard rewrite with the update at the end of the body. Segment III starts 2 lower and updates first, which also prints 1 3 5, but segment II updates before printing and prints 3 5 7."
  },
  {
    id: "2.8-13",
    prompt: "Consider the following code segment. Which of the following `for` loop headers, used with the body `System.out.print(n + \" \");`, produces the same output?",
    code: `
      int n = 1;
      while (n < 50)
      {
          System.out.print(n + " ");
          n *= 3;
      }
    `,
    choices: [
      "`for (int n = 1; n <= 27; n += 3)`",
      "`for (int n = 3; n < 50; n *= 3)`",
      "`for (int n = 1; n < 27; n *= 3)`",
      "`for (int n = 1; n < 50; n *= 3)`"
    ],
    answer: "D",
    explanation: "The `while` loop's initialization, condition and update map directly to the three parts of the `for` header, printing 1 3 9 27. Changing `n < 50` to `n < 27` drops the 27, and `n += 3` prints 1 4 7 and so on."
  },
  {
    id: "2.8-14",
    prompt: "The following code segment is intended to print the integers from 10 down to 1. Which of the following best describes the result of executing the code segment?",
    code: `
      for (int k = 10; k < 1; k--)
      {
          System.out.print(k + " ");
      }
    `,
    choices: [
      "Nothing is printed, because `k < 1` is false the first time it is evaluated.",
      "10 9 8 7 6 5 4 3 2 1 is printed, as intended.",
      "10 is printed once, and then the loop ends.",
      "The loop never ends, because `k` keeps decreasing."
    ],
    answer: "A",
    explanation: "The Boolean expression is evaluated right after `k` is initialized to 10, and `10 < 1` is false, so the body executes zero times. The condition should be `k >= 1` (or `k > 0`)."
  },
  {
    id: "2.8-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int k = 0; k < 10; k++)
      {
          System.out.print(k + " ");
          k *= 2;
      }
    `,
    choices: ["0 1 3 7 15", "0 1 3 7", "1 3 7", "Nothing is printed because the loop never ends."],
    answer: "B",
    explanation: "The body doubles `k` and then the header's `k++` adds 1. `k` goes 0, 1, 3, 7, then 7 * 2 + 1 = 15, which fails `k < 10`. Doubling 0 gives 0, but `k++` still moves it to 1, so the loop does end."
  },
  {
    id: "2.8-16",
    prompt: "Consider a `for` loop with the header `for (initialization; condition; update)`. Which of the following statements is true?",
    choices: [
      "The initialization is executed before every iteration of the loop.",
      "The update is executed before the body on each iteration.",
      "The initialization is executed once, the condition is checked before each iteration, and the update is executed after each iteration of the body.",
      "The condition is checked after each iteration of the body, so the body always executes at least once."
    ],
    answer: "C",
    explanation: "The initialization runs only once. Then the condition is tested, the body runs, and the update runs, repeating until the condition is false. Because the condition is checked first, the body may run zero times."
  },
  {
    id: "2.8-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int i;
      int total = 0;
      for (i = 1; i < 6; i++)
      {
          total += i;
      }
      System.out.println(i + " " + total);
    `,
    choices: ["5 15", "6 21", "5 10", "6 15"],
    answer: "D",
    explanation: "`total` gets 1 + 2 + 3 + 4 + 5 = 15. Because `i` was declared before the loop, it still exists afterward and holds 6, the first value that made `i < 6` false."
  },
  {
    id: "2.8-18",
    prompt: "Which of the following loops execute their body exactly 10 times?",
    code: `
      I.   for (int i = 0; i < 10; i++)
      II.  for (int i = 1; i <= 10; i++)
      III. for (int i = 0; i <= 20; i += 2)
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "I runs for 0 through 9 and II runs for 1 through 10, so each runs 10 times. III runs for 0, 2, ..., 20, which is 11 values because both 0 and 20 are included."
  },
  {
    id: "2.8-19",
    prompt: "The following method is intended to return the sum of the integers from `a` to `b`, inclusive. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      /** Precondition: a <= b */
      public static int sumRange(int a, int b)
      {
          int sum = 0;
          for (/* missing code */)
          {
              sum += k;
          }
          return sum;
      }
    `,
    choices: [
      "`int k = a; k <= b; k++`",
      "`int k = a; k < b; k++`",
      "`int k = a + 1; k <= b; k++`",
      "`int k = 0; k <= b; k++`"
    ],
    answer: "A",
    explanation: "Starting at `a` and continuing while `k <= b` includes both endpoints. Using `k < b` leaves out `b`, starting at `a + 1` leaves out `a`, and starting at 0 adds values smaller than `a`."
  },
  {
    id: "2.8-20",
    prompt: "How many times is Hi printed as a result of executing the following code segment?",
    code: `
      for (int c = 2; c < 20; c *= 2)
      {
          System.out.println("Hi");
      }
    `,
    choices: ["3", "5", "4", "18"],
    answer: "C",
    explanation: "`c` takes the values 2, 4, 8 and 16, so Hi is printed 4 times. The next value, 32, fails `c < 20`. Counting as if `c` went up by 1 would give 18."
  },
]);

defineTopic(2, "2.9", "Implementing Selection and Iteration Algorithms", [
  {
    id: "2.9-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int sum = 0;
      int count = 0;
      for (int k = 1; k <= 20; k++)
      {
          if (k % 6 == 0)
          {
              sum += k;
              count++;
          }
      }
      System.out.println((double) sum / count);
    `,
    choices: ["12.0", "12", "36.0", "1.8"],
    answer: "A",
    explanation: "The multiples of 6 from 1 to 20 are 6, 12, and 18, so `sum` is 36 and `count` is 3. The cast makes the division use `double` values, so 12.0 is printed. Dividing by 20 instead of `count` would give 1.8."
  },
  {
    id: "2.9-02",
    prompt: "Consider the following code segment, which is intended to compute the average of the values of `x`. What is printed as a result of executing the code segment?",
    code: `
      int total = 0;
      int count = 0;
      for (int x = 4; x <= 13; x += 3)
      {
          total += x;
          count++;
      }
      double avg = total / count;
      System.out.println(avg);
    `,
    choices: ["8.5", "8", "8.0", "6.8"],
    answer: "C",
    explanation: "The loop adds 4, 7, 10, and 13, so `total` is 34 and `count` is 4. Because both are `int`, `34 / 4` is integer division and gives 8, which is then stored as `8.0`; the true average 8.5 would require a cast such as `(double) total / count`."
  },
  {
    id: "2.9-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int num = 4072;
      int sum = 0;
      while (num > 0)
      {
          sum += num % 10;
          num /= 10;
      }
      System.out.println(sum);
    `,
    choices: ["2", "13", "2704", "4072"],
    answer: "B",
    explanation: "Each iteration adds the last digit (`num % 10`) and then removes it (`num /= 10`), so the segment adds 2 + 7 + 0 + 4 = 13. The loop stops when `num` becomes 0."
  },
  {
    id: "2.9-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 50300;
      int count = 0;
      while (n > 0)
      {
          if (n % 10 == 0)
          {
              count++;
          }
          n /= 10;
      }
      System.out.println(count);
    `,
    choices: ["5", "2", "4", "3"],
    answer: "D",
    explanation: "The digits are examined from right to left: 0, 0, 3, 0, 5. Three of them are 0, so `count` is 3."
  },
  {
    id: "2.9-05",
    prompt: "The following method is intended to return the integer formed by reversing the digits of `n`. For example, `reverse(1234)` should return `4321`. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      /** Precondition: n > 0 */
      public static int reverse(int n)
      {
          int result = 0;
          while (n > 0)
          {
              /* missing code */
          }
          return result;
      }
    `,
    choices: [
      "result = result * 10 + n % 10;\nn = n / 10;",
      "result = result + n % 10;\nn = n / 10;",
      "result = result * 10 + n / 10;\nn = n % 10;",
      "n = n / 10;\nresult = result * 10 + n % 10;"
    ],
    answer: "A",
    explanation: "Each step must shift the digits already in `result` one place left (multiply by 10), append the last digit of `n` (`n % 10`), and then remove that digit from `n`. Removing the digit first, as in the last option, loses the ones digit. Swapping `/` and `%` (choice C) leaves `n` stuck at its last digit, so the loop never ends."
  },
  {
    id: "2.9-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int maxVal = 0;
      int maxPos = 0;
      for (int k = 1; k <= 5; k++)
      {
          int val = k * (6 - k);
          if (val > maxVal)
          {
              maxVal = val;
              maxPos = k;
          }
      }
      System.out.println(maxVal + " " + maxPos);
    `,
    choices: ["9 4", "8 2", "9 3", "5 5"],
    answer: "C",
    explanation: "The values of `val` are 5, 8, 9, 8, and 5. The largest is 9, first reached when `k` is 3, and later values are not greater, so `9 3` is printed."
  },
  {
    id: "2.9-07",
    prompt: "The following code segment is intended to print the smallest value of `k * k + 5` for `k` from 1 to 4. Which of the following best describes the behavior of the code segment?",
    code: `
      int smallest = 0;
      for (int k = 1; k <= 4; k++)
      {
          int temp = k * k + 5;
          if (temp < smallest)
          {
              smallest = temp;
          }
      }
      System.out.println(smallest);
    `,
    choices: [
      "It prints `6`, as intended.",
      "It prints `0`, because no value of `temp` is less than the initial value of `smallest`.",
      "It prints `21`, because the last value of `temp` is stored in `smallest`.",
      "It does not compile, because `smallest` is declared outside the loop."
    ],
    answer: "B",
    explanation: "Every value of `temp` (6, 9, 14, 21) is greater than 0, so `smallest` is never updated and 0 is printed. Initializing `smallest` to the first value or to `Integer.MAX_VALUE` would fix the error."
  },
  {
    id: "2.9-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int k = 1; k <= 20; k++)
      {
          if (k % 3 == 0 || k % 5 == 0)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["10", "1", "6", "9"],
    answer: "D",
    explanation: "There are 6 multiples of 3 and 4 multiples of 5 from 1 to 20, but 15 is in both groups and is counted only once, giving 9. Answering 10 counts 15 twice; answering 1 treats `||` as `&&`."
  },
  {
    id: "2.9-09",
    prompt: "Consider the following method. What value is returned by the call `countFactors(36)`?",
    code: `
      public static int countFactors(int n)
      {
          int count = 0;
          for (int d = 1; d <= n; d++)
          {
              if (n % d == 0)
              {
                  count++;
              }
          }
          return count;
      }
    `,
    choices: ["7", "8", "9", "18"],
    answer: "C",
    explanation: "The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36, so 9 is returned. Answering 8 forgets that the loop includes `d == n`."
  },
  {
    id: "2.9-10",
    prompt: "The following method is intended to return `true` if `n` is prime and `false` otherwise. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      /** Precondition: n >= 2 */
      public static boolean isPrime(int n)
      {
          for (int d = 2; d < n; d++)
          {
              if ( /* missing code */ )
              {
                  return false;
              }
          }
          return true;
      }
    `,
    choices: ["`n % d == 0`", "`d % n == 0`", "`n / d == 0`", "`n % d != 0`"],
    answer: "A",
    explanation: "A number is not prime if some `d` between 2 and `n - 1` divides it evenly, which is tested with `n % d == 0`. Reversing the operands tests whether `n` divides `d`, which never happens for `d < n`."
  },
  {
    id: "2.9-11",
    prompt: "The following method is intended to return `true` if `n` is prime and `false` otherwise. For which of the following calls does the method NOT return the correct result?",
    code: `
      /** Precondition: n >= 2 */
      public static boolean isPrime(int n)
      {
          for (int d = 2; d < n; d++)
          {
              if (n % d == 0)
              {
                  return false;
              }
              else
              {
                  return true;
              }
          }
          return true;
      }
    `,
    choices: ["`isPrime(2)`", "`isPrime(4)`", "`isPrime(7)`", "`isPrime(9)`"],
    answer: "D",
    explanation: "The method always returns during the first iteration, so it only checks whether `n` is divisible by 2. Since 9 is odd, `isPrime(9)` returns `true` even though 9 = 3 * 3."
  },
  {
    id: "2.9-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 24;
      int b = 36;
      int g = 1;
      for (int d = 1; d <= a; d++)
      {
          if (a % d == 0 && b % d == 0)
          {
              g = d;
          }
      }
      System.out.println(g);
    `,
    choices: ["6", "12", "72", "24"],
    answer: "B",
    explanation: "`g` is updated each time `d` divides both numbers, so it ends with the largest common divisor of 24 and 36, which is 12."
  },
  {
    id: "2.9-13",
    prompt: "The following method is intended to return the smallest digit of `n`. For example, `smallestDigit(5728)` should return 2. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      /** Precondition: n > 0 */
      public static int smallestDigit(int n)
      {
          int min = /* missing code */;
          while (n > 0)
          {
              int d = n % 10;
              if (d < min)
              {
                  min = d;
              }
              n /= 10;
          }
          return min;
      }

      I.   9
      II.  n % 10
      III. 0
    `,
    choices: ["I and II only", "I only", "II only", "I, II, and III"],
    answer: "A",
    explanation: "A minimum must start at a value no smaller than the true answer. No digit is greater than 9, and `n % 10` is one of the digits, so I and II work. Starting at 0 means no digit is ever smaller, so 0 would always be returned."
  },
  {
    id: "2.9-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 29;
      int best = 0;
      int bestK = 0;
      for (int k = 2; k <= 9; k++)
      {
          if (n % k >= best)
          {
              best = n % k;
              bestK = k;
          }
      }
      System.out.println(best + " " + bestK);
    `,
    choices: ["5 6", "4 5", "5 8", "8 5"],
    answer: "C",
    explanation: "The remainders of 29 divided by 2 through 9 are 1, 2, 1, 4, 5, 1, 5, and 2, so the maximum is 5. Because the test uses `>=`, the later tie at `k` equal to 8 replaces the one at 6; with `>`, 5 6 would be printed."
  },
  {
    id: "2.9-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int x = 7;
      int prev = x;
      int count = 0;
      for (int k = 1; k <= 6; k++)
      {
          x = (x * 3) % 10;
          if (x > prev)
          {
              count++;
          }
          prev = x;
      }
      System.out.println(count);
    `,
    choices: ["2", "3", "4", "6"],
    answer: "B",
    explanation: "The values of `x` are 1, 3, 9, 7, 1, and 3. Comparing each to the previous value (starting with 7), the value increases from 1 to 3, from 3 to 9, and from 1 to 3, so the criterion is met 3 times."
  },
  {
    id: "2.9-16",
    prompt: "Each of the following code segments is intended to store in `count` the number of digits in the positive integer `n`. Which of the code segments work as intended for all positive values of `n`?",
    code: `
      I.   int count = 0;
           while (n > 0)
           {
               n /= 10;
               count++;
           }

      II.  int count = 0;
           while (n > 10)
           {
               n /= 10;
               count++;
           }

      III. int count = 1;
           while (n >= 10)
           {
               n /= 10;
               count++;
           }
    `,
    choices: ["I only", "II only", "I and III only", "I, II, and III"],
    answer: "C",
    explanation: "Segment I removes one digit per iteration until none remain, and segment III starts at 1 and counts each digit beyond the first. Segment II gives 0 for a one-digit number and also undercounts values like 10 and 100."
  },
  {
    id: "2.9-17",
    prompt: "The method `sumEvens` is intended to return the sum of all even integers from 2 to `n`, inclusive. For example, `sumEvens(6)` should return `12`. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      /** Precondition: n >= 2 */
      public static int sumEvens(int n)
      {
          int sum = 0;
          /* missing code */
          return sum;
      }
    `,
    choices: [
      "for (int k = 0; k < n; k += 2)\n{\n    sum += k;\n}",
      "for (int k = 1; k <= n; k++)\n{\n    if (k % 2 == 1)\n    {\n        sum += k;\n    }\n}",
      "for (int k = 2; k <= n; k++)\n{\n    if (k % 2 == 0)\n    {\n        sum++;\n    }\n}",
      "for (int k = 2; k <= n; k += 2)\n{\n    sum += k;\n}"
    ],
    answer: "D",
    explanation: "Starting at 2 and adding 2 each time visits every even number up to and including `n`. Using `k < n` leaves out `n` when `n` is even, and `sum++` counts the even numbers instead of adding them."
  },
  {
    id: "2.9-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 52817;
      int result = 0;
      int place = 1;
      while (n > 0)
      {
          int d = n % 10;
          if (d % 2 == 1)
          {
              result += d * place;
              place *= 10;
          }
          n /= 10;
      }
      System.out.println(result);
    `,
    choices: ["517", "715", "57", "28"],
    answer: "A",
    explanation: "Digits are processed from right to left: 7 goes in the ones place, 1 in the tens place, and 5 in the hundreds place, while the even digits 8 and 2 are skipped. The result keeps the odd digits in their original order, 517."
  },
  {
    id: "2.9-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = 12;
      int sum = 0;
      for (int d = 1; d < n; d++)
      {
          if (n % d == 0)
          {
              sum += d;
          }
      }
      System.out.println(sum);
    `,
    choices: ["28", "15", "6", "16"],
    answer: "D",
    explanation: "The divisors of 12 that are less than 12 are 1, 2, 3, 4, and 6, which add to 16. Answering 28 includes 12 itself, which the condition `d < n` excludes."
  },
  {
    id: "2.9-20",
    prompt: "Consider the following method. Which of the following best describes the value returned by `mystery(n)`?",
    code: `
      /** Precondition: n > 0 */
      public static boolean mystery(int n)
      {
          boolean ok = true;
          int prev = 10;
          while (n > 0)
          {
              int d = n % 10;
              if (d >= prev)
              {
                  ok = false;
              }
              prev = d;
              n /= 10;
          }
          return ok;
      }
    `,
    choices: [
      "It returns `true` exactly when the digits of `n`, read from left to right, are in strictly decreasing order.",
      "It returns `true` exactly when the digits of `n`, read from left to right, are in strictly increasing order.",
      "It returns `true` exactly when no digit appears more than once in `n`.",
      "It returns `true` exactly when the last digit of `n` is the largest digit."
    ],
    answer: "B",
    explanation: "The digits are examined from right to left, and `ok` becomes `false` if any digit is not smaller than the digit to its right. So the digits must increase strictly from left to right, as in 1359; a common error is to read the order in the direction the loop visits the digits."
  }
]);

defineTopic(2, "2.10", "Implementing String Algorithms", [
  {
    id: "2.10-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String word = "banana";
      int count = 0;
      for (int i = 0; i < word.length(); i++)
      {
          if (word.substring(i, i + 1).equals("a"))
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "3", "6", "1"],
    answer: "B",
    explanation: "`word.substring(i, i + 1)` is the single letter at index `i`. The letter \"a\" appears at indexes 1, 3, and 5, so `count` is 3."
  },
  {
    id: "2.10-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "stop";
      String r = "";
      for (int i = 0; i < s.length(); i++)
      {
          r = s.substring(i, i + 1) + r;
      }
      System.out.println(r);
    `,
    choices: ["stop", "tops", "spot", "pots"],
    answer: "D",
    explanation: "Each letter is placed in front of the letters collected so far, so the string is built as \"s\", \"ts\", \"ots\", \"pots\". Writing `r + s.substring(i, i + 1)` instead would rebuild \"stop\"."
  },
  {
    id: "2.10-03",
    prompt: "Consider the following code segment. What is the result of executing it?",
    code: `
      String s = "code";
      for (int i = 0; i <= s.length(); i++)
      {
          System.out.print(s.substring(i, i + 1));
      }
    `,
    choices: [
      "`code` is printed, and then an `IndexOutOfBoundsException` is thrown.",
      "`code` is printed with no error.",
      "`cod` is printed with no error.",
      "Nothing is printed, because an `IndexOutOfBoundsException` is thrown before the loop begins."
    ],
    answer: "A",
    explanation: "The calls for `i` from 0 to 3 print the four letters. When `i` is 4, `s.substring(4, 5)` asks for an index past the end of the string, so an exception is thrown after \"code\" has already been printed."
  },
  {
    id: "2.10-04",
    prompt: "The following method is intended to return the reverse of `str`. For example, `reverse(\"abc\")` should return `\"cba\"`. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      public static String reverse(String str)
      {
          String result = "";
          for ( /* missing code */ )
          {
              result += str.substring(i, i + 1);
          }
          return result;
      }
    `,
    choices: [
      "`int i = str.length(); i > 0; i--`",
      "`int i = 0; i < str.length(); i++`",
      "`int i = str.length() - 1; i >= 0; i--`",
      "`int i = str.length() - 1; i > 0; i--`"
    ],
    answer: "C",
    explanation: "The last letter is at index `str.length() - 1` and the first is at index 0, so the loop must count down from one to the other, including 0. Starting at `str.length()` causes an exception, and stopping at `i > 0` leaves out the first letter."
  },
  {
    id: "2.10-05",
    prompt: "The following method is intended to return `true` if `s` reads the same forward and backward, and `false` otherwise. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      public static boolean isPalindrome(String s)
      {
          for (int i = 0; i < s.length() / 2; i++)
          {
              if ( /* missing code */ )
              {
                  return false;
              }
          }
          return true;
      }
    `,
    choices: [
      "`!s.substring(i, i + 1).equals(s.substring(s.length() - i, s.length() - i + 1))`",
      "`!s.substring(i, i + 1).equals(s.substring(s.length() - i - 1, s.length() - i))`",
      "`s.substring(i, i + 1).equals(s.substring(s.length() - i - 1, s.length() - i))`",
      "`s.substring(i, i + 1) != s.substring(s.length() - i - 1, s.length() - i)`"
    ],
    answer: "B",
    explanation: "The letter at index `i` must match the letter at index `s.length() - 1 - i`, and the method returns `false` as soon as a pair does not match. The first option is off by one and throws an exception when `i` is 0, and the `!=` option compares object references rather than contents."
  },
  {
    id: "2.10-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String text = "abababa";
      String target = "aba";
      int count = 0;
      int pos = text.indexOf(target);
      while (pos >= 0)
      {
          count++;
          text = text.substring(pos + 1);
          pos = text.indexOf(target);
      }
      System.out.println(count);
    `,
    choices: ["2", "1", "4", "3"],
    answer: "D",
    explanation: "After each match, the search resumes just one position past the start of the match, so overlapping occurrences are counted. \"aba\" starts at indexes 0, 2, and 4 of the original string, giving 3; skipping past the whole match with `pos + target.length()` would give 2."
  },
  {
    id: "2.10-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "mississippi";
      int pos = s.indexOf("ss");
      while (pos >= 0)
      {
          s = s.substring(0, pos) + s.substring(pos + 2);
          pos = s.indexOf("ss");
      }
      System.out.println(s);
    `,
    choices: ["miiippi", "mississippi", "miissippi", "mippi"],
    answer: "A",
    explanation: "Each iteration removes one occurrence of \"ss\" by joining the part before it with the part after it. Both occurrences are removed, leaving \"miiippi\"."
  },
  {
    id: "2.10-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String vowels = "aeiou";
      String word = "education";
      int count = 0;
      for (int i = 0; i < word.length(); i++)
      {
          String letter = word.substring(i, i + 1);
          if (vowels.indexOf(letter) >= 0)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["4", "9", "5", "6"],
    answer: "C",
    explanation: "`vowels.indexOf(letter)` is nonnegative only when `letter` is a vowel. The vowels in \"education\" are e, u, a, i, and o, so 5 is printed."
  },
  {
    id: "2.10-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "computer";
      String result = "";
      for (int i = 1; i < s.length(); i += 2)
      {
          result += s.substring(i, i + 1);
      }
      System.out.println(result);
    `,
    choices: ["cmue", "cmuer", "omue", "optr"],
    answer: "D",
    explanation: "The loop visits indexes 1, 3, 5, and 7, which hold o, p, t, and r. Starting at index 0 would instead select c, m, u, e."
  },
  {
    id: "2.10-10",
    prompt: "Assume that `String str = \"java\";` has been declared. Which of the following code segments will cause an `IndexOutOfBoundsException` to be thrown?",
    code: `
      I.   for (int i = 0; i < str.length() - 1; i++)
           {
               System.out.print(str.substring(i, i + 2));
           }

      II.  for (int i = 0; i < str.length(); i++)
           {
               System.out.print(str.substring(i, i + 2));
           }

      III. for (int i = 1; i <= str.length(); i++)
           {
               System.out.print(str.substring(i - 1, i));
           }
    `,
    choices: ["I only", "II only", "III only", "II and III only"],
    answer: "B",
    explanation: "In segment II, the last call is `str.substring(3, 5)`, but the end index cannot exceed 4. Segment I stops after `substring(2, 4)`, and segment III ends with `substring(3, 4)`, which are both legal."
  },
  {
    id: "2.10-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "bookkeeper";
      int count = 0;
      for (int i = 0; i < s.length() - 1; i++)
      {
          if (s.substring(i, i + 1).equals(s.substring(i + 1, i + 2)))
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "4", "3", "6"],
    answer: "C",
    explanation: "The segment counts places where a letter equals the next letter. \"bookkeeper\" has the adjacent pairs \"oo\", \"kk\", and \"ee\", so 3 is printed."
  },
  {
    id: "2.10-12",
    prompt: "Consider the following method. Which of the following best describes the value returned by `mystery(str)`?",
    code: `
      public static String mystery(String str)
      {
          String result = "";
          for (int i = 0; i < str.length(); i++)
          {
              String letter = str.substring(i, i + 1);
              if ("aeiou".indexOf(letter) == -1)
              {
                  result += letter;
              }
          }
          return result;
      }
    `,
    choices: [
      "A copy of `str` with every lowercase vowel removed",
      "A string containing only the lowercase vowels in `str`",
      "A copy of `str` with only the first lowercase vowel removed",
      "The number of letters in `str` that are not lowercase vowels"
    ],
    answer: "A",
    explanation: "`indexOf` returns -1 when the letter is not found in \"aeiou\", so only non-vowels are appended. The method returns a `String`, not a count."
  },
  {
    id: "2.10-13",
    prompt: "Consider the following method. Which of the following best describes the value returned by `check(word)`?",
    code: `
      public static boolean check(String word)
      {
          for (int i = 0; i < word.length(); i++)
          {
              String letter = word.substring(i, i + 1);
              if ("aeiou".indexOf(letter) >= 0)
              {
                  return true;
              }
          }
          return false;
      }
    `,
    choices: [
      "It returns `true` only when every letter in `word` is a lowercase vowel.",
      "It returns `true` when at least one letter in `word` is a lowercase vowel.",
      "It returns `true` only when the first letter of `word` is a lowercase vowel.",
      "It returns `true` when `word` contains no lowercase vowels."
    ],
    answer: "B",
    explanation: "The method returns `true` as soon as it finds any vowel, and returns `false` only after every letter has been checked without finding one. It keeps looping past non-vowels, so it does not check only the first letter."
  },
  {
    id: "2.10-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "pencil";
      String min = s.substring(0, 1);
      for (int i = 1; i < s.length(); i++)
      {
          String letter = s.substring(i, i + 1);
          if (letter.compareTo(min) < 0)
          {
              min = letter;
          }
      }
      System.out.println(min);
    `,
    choices: ["p", "e", "c", "l"],
    answer: "C",
    explanation: "`compareTo` returns a negative value when `letter` comes before `min` alphabetically, so `min` ends up as the earliest letter. Of p, e, n, c, i, and l, the earliest is c."
  },
  {
    id: "2.10-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "planet";
      String r = "";
      for (int i = 0; i < 4; i++)
      {
          r = s.substring(i, i + 1) + r;
      }
      r += s.substring(4);
      System.out.println(r);
    `,
    choices: ["tenalp", "etnalp", "nalp", "nalpet"],
    answer: "D",
    explanation: "Placing each new letter in front reverses the first four letters, giving \"nalp\". Then `s.substring(4)` appends the rest of the string, \"et\", in its original order."
  },
  {
    id: "2.10-16",
    prompt: "The following code segment is intended to count the number of times `\"at\"` appears in the `String` `s`. Which of the following can be used to replace /* condition */ so that the code segment works as intended for any string `s`?",
    code: `
      int count = 0;
      for (int i = 0; /* condition */; i++)
      {
          if (s.substring(i, i + 2).equals("at"))
          {
              count++;
          }
      }
    `,
    choices: [
      "`i < s.length() - 1`",
      "`i < s.length()`",
      "`i < s.length() - 2`",
      "`i < s.length() / 2`"
    ],
    answer: "A",
    explanation: "A two-letter substring starting at `i` needs `i + 2 <= s.length()`, which is the same as `i < s.length() - 1`. Using `i < s.length()` throws an exception on the last index, and `i < s.length() - 2` misses an \"at\" at the very end of the string."
  },
  {
    id: "2.10-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "assess";
      int last = -1;
      for (int i = 0; i < s.length(); i++)
      {
          if (s.substring(i, i + 1).equals("s"))
          {
              last = i;
          }
      }
      System.out.println(last);
    `,
    choices: ["1", "5", "4", "6"],
    answer: "B",
    explanation: "`last` is updated every time an \"s\" is found, so it ends with the index of the final \"s\". The string has 6 letters with indexes 0 to 5, and the last letter is an \"s\", so 5 is printed."
  },
  {
    id: "2.10-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String a = "abc";
      String b = "12345";
      String result = "";
      for (int i = 0; i < a.length(); i++)
      {
          result += a.substring(i, i + 1) + b.substring(i, i + 1);
      }
      result += b.substring(a.length());
      System.out.println(result);
    `,
    choices: ["a1b2c3", "abc12345", "a1b2c345", "1a2b3c45"],
    answer: "C",
    explanation: "The loop alternates letters from `a` and `b` to build \"a1b2c3\". Then `b.substring(3)` adds the remaining characters \"45\"."
  },
  {
    id: "2.10-19",
    prompt: "The following code segment is intended to remove every `\"a\"` from `s`. What is printed as a result of executing the code segment?",
    code: `
      String s = "aardvark";
      for (int i = 0; i < s.length(); i++)
      {
          if (s.substring(i, i + 1).equals("a"))
          {
              s = s.substring(0, i) + s.substring(i + 1);
          }
      }
      System.out.println(s);
    `,
    choices: ["rdvrk", "aardvark", "rdvark", "ardvrk"],
    answer: "D",
    explanation: "When the \"a\" at index 0 is removed, the second \"a\" shifts into index 0, but `i` then moves on to 1, so that \"a\" is skipped. Only two of the three \"a\" letters are removed, leaving \"ardvrk\"."
  },
  {
    id: "2.10-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "banana";
      int count = 0;
      for (int i = 0; i <= s.length() - 3; i++)
      {
          if (s.substring(i, i + 1).equals(s.substring(i + 2, i + 3)))
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["3", "2", "4", "6"],
    answer: "A",
    explanation: "The loop examines each three-letter substring, \"ban\", \"ana\", \"nan\", and \"ana\", and counts those whose first and last letters match. Three of them do, so 3 is printed."
  }
]);

defineTopic(2, "2.11", "Nested Iteration", [
  {
    id: "2.11-01",
    prompt: "How many times is `\"*\"` printed as a result of executing the following code segment?",
    code: `
      for (int i = 0; i < 3; i++)
      {
          for (int j = 0; j < 4; j++)
          {
              System.out.print("*");
          }
      }
    `,
    choices: ["7", "9", "12", "16"],
    answer: "C",
    explanation: "The inner loop prints 4 stars each time it runs, and the outer loop runs it 3 times, for 3 * 4 = 12 stars. Adding the bounds (7) is a common mistake."
  },
  {
    id: "2.11-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int i = 1; i <= 2; i++)
      {
          for (int j = 1; j <= 3; j++)
          {
              System.out.print(i + "-" + j + " ");
          }
      }
    `,
    choices: [
      "1-1 1-2 1-3 2-1 2-2 2-3",
      "1-1 2-1 1-2 2-2 1-3 2-3",
      "1-1 2-2",
      "1-1 1-2 1-3"
    ],
    answer: "A",
    explanation: "The inner loop completes all of its iterations (`j` from 1 to 3) before the outer loop moves on to its next value of `i`. Alternating between the two values of `i` would mean the outer loop changes first, which is not how nested loops work."
  },
  {
    id: "2.11-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int r = 1; r <= 4; r++)
      {
          for (int c = 1; c <= r; c++)
          {
              System.out.print(c);
          }
          System.out.println();
      }
    `,
    choices: [
      "1\n22\n333\n4444",
      "1234\n123\n12\n1",
      "1\n12\n123",
      "1\n12\n123\n1234"
    ],
    answer: "D",
    explanation: "Row `r` prints the values of `c` from 1 to `r`, then moves to a new line. Printing `r` instead of `c` would produce 1, 22, 333, 4444."
  },
  {
    id: "2.11-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int i = 1; i <= 3; i++)
      {
          for (int j = 3; j >= i; j--)
          {
              System.out.print(j);
          }
          System.out.println();
      }
    `,
    choices: [
      "123\n23\n3",
      "321\n32\n3",
      "321\n21\n1",
      "3\n32\n321"
    ],
    answer: "B",
    explanation: "Each row counts `j` down from 3 to `i`. Row 1 prints 321, row 2 prints 32, and row 3 prints 3."
  },
  {
    id: "2.11-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String a = "noon";
      String b = "on";
      int count = 0;
      for (int i = 0; i < a.length(); i++)
      {
          for (int j = 0; j < b.length(); j++)
          {
              if (a.substring(i, i + 1).equals(b.substring(j, j + 1)))
              {
                  count++;
              }
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "4", "8", "3"],
    answer: "B",
    explanation: "Every letter of \"noon\" is compared with both letters of \"on\", and each letter of \"noon\" matches exactly one of them. So there are 4 matches out of the 8 comparisons."
  },
  {
    id: "2.11-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "banana";
      int count = 0;
      for (int i = 0; i < s.length(); i++)
      {
          for (int j = i + 1; j < s.length(); j++)
          {
              if (s.substring(i, i + 1).equals(s.substring(j, j + 1)))
              {
                  count++;
              }
          }
      }
      System.out.println(count);
    `,
    choices: ["3", "8", "14", "4"],
    answer: "D",
    explanation: "Because `j` starts at `i + 1`, each pair of positions is compared once. The three a's form 3 matching pairs and the two n's form 1, for a total of 4."
  },
  {
    id: "2.11-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int sum = 0;
      for (int i = 1; i <= 3; i++)
      {
          for (int j = 1; j <= 2; j++)
          {
              sum += i * j;
          }
      }
      System.out.println(sum);
    `,
    choices: ["12", "9", "18", "36"],
    answer: "C",
    explanation: "For each `i`, the inner loop adds `i * 1 + i * 2`, which is `3 * i`. Adding 3 + 6 + 9 gives 18."
  },
  {
    id: "2.11-08",
    prompt: "How many times is `\"#\"` printed as a result of executing the following code segment?",
    code: `
      for (int i = 2; i <= 5; i++)
      {
          for (int j = 1; j <= i; j += 2)
          {
              System.out.print("#");
          }
      }
    `,
    choices: ["8", "7", "10", "14"],
    answer: "A",
    explanation: "The inner loop visits the odd values up to `i`: 1 value when `i` is 2, 2 values when `i` is 3 or 4, and 3 values when `i` is 5. That is 1 + 2 + 2 + 3 = 8."
  },
  {
    id: "2.11-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int i = 1; i <= 3; i++)
      {
          int j = i;
          while (j < 5)
          {
              count++;
              j += 2;
          }
      }
      System.out.println(count);
    `,
    choices: ["5", "6", "4", "9"],
    answer: "A",
    explanation: "When `i` is 1, `j` takes the values 1 and 3; when `i` is 2, the values 2 and 4; when `i` is 3, only 3. The inner loop body runs 2 + 2 + 1 = 5 times."
  },
  {
    id: "2.11-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int r = 1; r <= 2; r++)
      {
          for (int c = 1; c <= 3; c++)
          {
              System.out.print(r + c);
          }
          System.out.println();
      }
    `,
    choices: [
      "23\n34\n45",
      "123\n123",
      "234\n345",
      "2\n3\n4\n3\n4\n5"
    ],
    answer: "C",
    explanation: "`r + c` adds two `int` values, so row 1 prints 2, 3, 4 and row 2 prints 3, 4, 5. The `println` is outside the inner loop, so each row is on one line."
  },
  {
    id: "2.11-11",
    prompt: "The following code segment is intended to print the pattern shown below. Which of the following can be used to replace /* missing code */ so that the code segment works as intended?",
    code: `
      *****
      ****
      ***
      **
      *

      for (int i = 5; i >= 1; i--)
      {
          for ( /* missing code */ )
          {
              System.out.print("*");
          }
          System.out.println();
      }
    `,
    choices: [
      "`int j = 1; j <= 5; j++`",
      "`int j = 1; j <= i; j++`",
      "`int j = i; j <= 5; j++`",
      "`int j = 0; j <= i; j++`"
    ],
    answer: "B",
    explanation: "Row `i` must print exactly `i` stars, which the loop from 1 to `i` does. Starting `j` at `i` and going to 5 prints the rows in the reverse order, and starting at 0 prints one extra star per row."
  },
  {
    id: "2.11-12",
    prompt: "Which of the following code segments print exactly six `\"*\"` characters?",
    code: `
      I.   for (int i = 0; i < 2; i++)
           {
               for (int j = 0; j < 3; j++)
               {
                   System.out.print("*");
               }
           }

      II.  for (int i = 1; i <= 3; i++)
           {
               for (int j = 1; j <= i; j++)
               {
                   System.out.print("*");
               }
           }

      III. for (int i = 0; i < 3; i++)
           {
               for (int j = i; j < 3; j++)
               {
                   System.out.print("*");
               }
           }
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "D",
    explanation: "Segment I prints 2 * 3 = 6 stars. Segment II prints 1 + 2 + 3 = 6, and segment III prints 3 + 2 + 1 = 6."
  },
  {
    id: "2.11-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String a = "apple";
      String b = "pear";
      String common = "";
      for (int i = 0; i < a.length(); i++)
      {
          String letter = a.substring(i, i + 1);
          for (int j = 0; j < b.length(); j++)
          {
              if (letter.equals(b.substring(j, j + 1)))
              {
                  common += letter;
              }
          }
      }
      System.out.println(common);
    `,
    choices: ["ape", "pea", "apple", "appe"],
    answer: "D",
    explanation: "Each letter of \"apple\" is appended once for every match in \"pear\". The a, both p's, and the e each match once and l does not match, so the result is \"appe\", in the order of \"apple\"."
  },
  {
    id: "2.11-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "cat";
      for (int i = 0; i < s.length(); i++)
      {
          for (int j = i + 1; j <= s.length(); j++)
          {
              System.out.print(s.substring(i, j) + " ");
          }
      }
    `,
    choices: [
      "c ca cat a at t",
      "c a t ca at cat",
      "c ca cat at t",
      "cat at t"
    ],
    answer: "A",
    explanation: "For each start index `i`, the inner loop prints every substring beginning at `i`, from shortest to longest. Starting at 0 gives c, ca, cat; at 1 gives a, at; at 2 gives t."
  },
  {
    id: "2.11-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int j = 0;
      int count = 0;
      for (int i = 0; i < 3; i++)
      {
          while (j < 3)
          {
              count++;
              j++;
          }
      }
      System.out.println(count);
    `,
    choices: ["9", "0", "3", "6"],
    answer: "C",
    explanation: "Because `j` is declared outside both loops, it is never reset to 0. The while loop runs 3 times during the first outer iteration, and after that `j < 3` is false, so `count` is 3, not 9."
  },
  {
    id: "2.11-16",
    prompt: "Consider the following method. What value is returned by the call `findPair(4)`?",
    code: `
      public static String findPair(int target)
      {
          for (int a = 1; a <= 5; a++)
          {
              for (int b = a; b <= 5; b++)
              {
                  if (a * b == target)
                  {
                      return a + "," + b;
                  }
              }
          }
          return "none";
      }
    `,
    choices: ["\"2,2\"", "\"1,4\"", "\"4,1\"", "\"none\""],
    answer: "B",
    explanation: "The pairs are checked in order with `a` = 1 first, and 1 * 4 is 4, so the method returns \"1,4\" before it ever reaches 2 * 2. The pair 4, 1 is never checked because `b` starts at `a`."
  },
  {
    id: "2.11-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int i = 1; i < 10; i *= 3)
      {
          for (int j = 0; j < i; j++)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["13", "9", "27", "4"],
    answer: "A",
    explanation: "The outer loop runs with `i` equal to 1, 3, and 9, and the inner loop runs `i` times each time. The total is 1 + 3 + 9 = 13."
  },
  {
    id: "2.11-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      for (int r = 1; r <= 3; r++)
      {
          for (int s = 0; s < 3 - r; s++)
          {
              System.out.print("-");
          }
          for (int k = 0; k < r; k++)
          {
              System.out.print("#");
          }
          System.out.println();
      }
    `,
    choices: [
      "#--\n##-\n###",
      "###\n-##\n--#",
      "--#\n-##\n###",
      "--#\n-#\n#"
    ],
    answer: "C",
    explanation: "Row `r` prints `3 - r` dashes followed by `r` number signs. Row 1 is --#, row 2 is -##, and row 3 is ###."
  },
  {
    id: "2.11-19",
    prompt: "Consider the following method. Which of the following best describes the value returned by `mystery(s)`?",
    code: `
      public static boolean mystery(String s)
      {
          for (int i = 0; i < s.length(); i++)
          {
              for (int j = i + 1; j < s.length(); j++)
              {
                  if (s.substring(i, i + 1).equals(s.substring(j, j + 1)))
                  {
                      return true;
                  }
              }
          }
          return false;
      }
    `,
    choices: [
      "It returns `true` only when `s` contains two identical letters that are next to each other.",
      "It returns `true` exactly when some letter appears more than once in `s`.",
      "It returns `true` only when the first letter of `s` appears again later in `s`.",
      "It returns `true` for every string with at least one letter, because each letter is compared with itself."
    ],
    answer: "B",
    explanation: "Every pair of different positions `i < j` is compared, not just neighbors, so the method finds any repeated letter. A letter is never compared with itself because `j` starts at `i + 1`."
  },
  {
    id: "2.11-20",
    prompt: "Consider the following code segment. What is the result of executing it?",
    code: `
      String s = "abc";
      for (int i = 0; i < s.length(); i++)
      {
          for (int j = i; j <= s.length(); j++)
          {
              System.out.print(s.substring(j, j + 1));
          }
      }
    `,
    choices: [
      "`abcbcc` is printed with no error.",
      "Nothing is printed, because an `IndexOutOfBoundsException` is thrown.",
      "`abcbccc` is printed with no error.",
      "`abc` is printed, and then an `IndexOutOfBoundsException` is thrown."
    ],
    answer: "D",
    explanation: "During the first outer iteration, `j` goes from 0 to 3, printing a, b, c. When `j` is 3, `s.substring(3, 4)` goes past the end of the string, so the exception is thrown before the outer loop continues."
  }
]);

defineTopic(2, "2.12", "Informal Run-Time Analysis", [
  {
    id: "2.12-01",
    prompt: "How many times is the statement `sum += k;` executed as a result of executing the following code segment?",
    code: `
      int sum = 0;
      for (int k = 5; k <= 20; k++)
      {
          sum += k;
      }
    `,
    choices: ["15", "20", "21", "16"],
    answer: "D",
    explanation: "`k` takes every value from 5 to 20, inclusive, which is 20 - 5 + 1 = 16 values. Subtracting the bounds without adding 1 gives 15, an off-by-one error."
  },
  {
    id: "2.12-02",
    prompt: "How many times is the statement `count++;` executed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int k = 0; k < 20; k += 3)
      {
          count++;
      }
    `,
    choices: ["6", "7", "20", "8"],
    answer: "B",
    explanation: "`k` takes the values 0, 3, 6, 9, 12, 15, and 18, which is 7 values. The next value, 21, fails the condition."
  },
  {
    id: "2.12-03",
    prompt: "Consider the following code segment, where `n` is a positive integer. How many times is `count++;` executed?",
    code: `
      for (int i = 0; i < n; i++)
      {
          for (int j = 0; j < n; j++)
          {
              count++;
          }
      }
    `,
    choices: ["`n`", "`2 * n`", "`n * n`", "`n + n * n`"],
    answer: "C",
    explanation: "The inner loop executes `count++` `n` times, and it runs once for each of the `n` iterations of the outer loop, giving `n * n`. Nested loops multiply; they do not add."
  },
  {
    id: "2.12-04",
    prompt: "Consider the following code segment, where `n` is a positive integer. How many times is `count++;` executed?",
    code: `
      for (int i = 0; i < n; i++)
      {
          for (int j = 0; j < i; j++)
          {
              count++;
          }
      }
    `,
    choices: ["`n * n`", "`n * (n - 1) / 2`", "`n * (n + 1) / 2`", "`n - 1`"],
    answer: "B",
    explanation: "The inner loop runs 0, 1, 2, ..., `n - 1` times, and that sum equals `n * (n - 1) / 2`. The formula `n * (n + 1) / 2` would apply if the inner loop ran 1 through `n` times."
  },
  {
    id: "2.12-05",
    prompt: "Consider the following two code segments, where `n` is a positive integer and `count` is an `int` variable. Which of the following statements is true?",
    code: `
      Segment 1:
      for (int k = 0; k < n; k++)
      {
          count++;
      }
      for (int k = 0; k < n; k++)
      {
          count++;
      }

      Segment 2:
      for (int i = 0; i < n; i++)
      {
          for (int j = 0; j < 2; j++)
          {
              count++;
          }
      }
    `,
    choices: [
      "Segment 1 executes `count++` more times than Segment 2 for all values of `n`.",
      "Segment 2 executes `count++` more times than Segment 1 for all values of `n`.",
      "Both segments execute `count++` the same number of times for all values of `n`.",
      "Which segment executes `count++` more times depends on the value of `n`."
    ],
    answer: "C",
    explanation: "Segment 1 runs two loops of `n` iterations one after the other, for `2 * n` executions. Segment 2's inner loop runs twice for each of `n` outer iterations, also `2 * n`."
  },
  {
    id: "2.12-06",
    prompt: "Consider the following two code segments, where `n` is a positive integer. For which values of `n` do the two segments execute `count++` the same number of times?",
    code: `
      Segment 1:
      for (int k = 0; k < n; k++)
      {
          count++;
      }
      for (int k = 0; k < n; k++)
      {
          count++;
      }

      Segment 2:
      for (int i = 0; i < n; i++)
      {
          for (int j = 0; j < n; j++)
          {
              count++;
          }
      }
    `,
    choices: [
      "Only when `n` is 2",
      "Only when `n` is 1",
      "For all positive values of `n`",
      "For no positive value of `n`"
    ],
    answer: "A",
    explanation: "Segment 1 executes `count++` `2 * n` times and Segment 2 executes it `n * n` times. These are equal only when `n` is 2; for larger `n`, the nested loops execute it many more times."
  },
  {
    id: "2.12-07",
    prompt: "How many times is the statement `count++;` executed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int k = 1; k < 100; k *= 2)
      {
          count++;
      }
    `,
    choices: ["6", "50", "99", "7"],
    answer: "D",
    explanation: "`k` takes the values 1, 2, 4, 8, 16, 32, and 64, which is 7 values; the next value, 128, ends the loop. Because `k` doubles, the count grows very slowly as the bound grows."
  },
  {
    id: "2.12-08",
    prompt: "Consider the following code segment, where `n` is a positive integer. When `n` is 16, the statement `count++;` is executed 4 times. How many times is it executed when `n` is 32?",
    code: `
      int k = n;
      while (k > 1)
      {
          k = k / 2;
          count++;
      }
    `,
    choices: ["5", "8", "16", "32"],
    answer: "A",
    explanation: "Each iteration halves `k`, so doubling `n` adds only one more iteration: 32, 16, 8, 4, 2, 1 takes 5 steps. Answering 8 incorrectly assumes the count doubles when `n` doubles."
  },
  {
    id: "2.12-09",
    prompt: "Consider the following code segment, where `n` is a positive integer. When `n` is 5, the statement `count++;` is executed 25 times. How many times is it executed when `n` is 10?",
    code: `
      for (int i = 0; i < n; i++)
      {
          for (int j = 0; j < n; j++)
          {
              count++;
          }
      }
    `,
    choices: ["50", "100", "30", "35"],
    answer: "B",
    explanation: "The statement executes `n * n` times, so when `n` doubles from 5 to 10, the count goes from 25 to 100, four times as many. Answering 50 assumes the count only doubles."
  },
  {
    id: "2.12-10",
    prompt: "How many times is the statement `count++;` executed as a result of executing the following code segment?",
    code: `
      int n = 10;
      int count = 0;
      for (int i = 0; i < n; i += 2)
      {
          for (int j = 0; j < 3; j++)
          {
              count++;
          }
      }
    `,
    choices: ["30", "13", "18", "15"],
    answer: "D",
    explanation: "The outer loop runs with `i` equal to 0, 2, 4, 6, and 8, which is 5 times, and the inner loop runs 3 times each time. That is 5 * 3 = 15."
  },
  {
    id: "2.12-11",
    prompt: "How many times is the statement `count++;` executed as a result of executing the following code segment?",
    code: `
      int n = 6;
      int count = 0;
      for (int i = 0; i < n; i++)
      {
          for (int j = i; j < n; j++)
          {
              count++;
          }
      }
    `,
    choices: ["36", "15", "21", "30"],
    answer: "C",
    explanation: "The inner loop runs 6, 5, 4, 3, 2, and 1 times as `i` increases, for a total of 21. Answering 15 corresponds to starting `j` at `i + 1`."
  },
  {
    id: "2.12-12",
    prompt: "Consider the following two code segments, where `n` is a positive integer. Which of the following statements is true?",
    code: `
      Segment 1:
      for (int k = 0; k < n; k++)
      {
          if (k % 2 == 0)
          {
              count++;
          }
      }

      Segment 2:
      for (int k = 0; k < n; k += 2)
      {
          count++;
      }
    `,
    choices: [
      "Both segments execute `count++` the same number of times, but Segment 1 executes its loop body about twice as many times as Segment 2.",
      "Segment 1 executes `count++` about twice as many times as Segment 2.",
      "Segment 2 executes `count++` about twice as many times as Segment 1.",
      "Both segments execute `count++` the same number of times and repeat their loop bodies the same number of times."
    ],
    answer: "A",
    explanation: "Both segments execute `count++` once for each even value of `k` less than `n`. Segment 1 still runs its loop body (the `if` test) for every value of `k`, while Segment 2 skips the odd values, so Segment 1 does about twice as much work."
  },
  {
    id: "2.12-13",
    prompt: "How many times is the statement `k++;` executed as a result of executing the following code segment?",
    code: `
      int k = 0;
      while (k < 10 && k * k < 30)
      {
          k++;
      }
    `,
    choices: ["5", "6", "10", "30"],
    answer: "B",
    explanation: "The loop continues while `k * k` is less than 30, which is true for `k` from 0 to 5. After 6 increments `k` is 6 and 36 is not less than 30, so the loop stops before reaching the bound of 10."
  },
  {
    id: "2.12-14",
    prompt: "Consider the following code segment. How many times is the boolean expression `i != j` evaluated, and how many times is `count++;` executed?",
    code: `
      int count = 0;
      for (int i = 0; i < 4; i++)
      {
          for (int j = 0; j < 4; j++)
          {
              if (i != j)
              {
                  count++;
              }
          }
      }
    `,
    choices: [
      "`i != j` is evaluated 16 times, and `count++;` is executed 16 times.",
      "`i != j` is evaluated 12 times, and `count++;` is executed 12 times.",
      "`i != j` is evaluated 16 times, and `count++;` is executed 12 times.",
      "`i != j` is evaluated 16 times, and `count++;` is executed 4 times."
    ],
    answer: "C",
    explanation: "The `if` test runs on every one of the 4 * 4 = 16 inner iterations. It is false only in the 4 cases where `i` equals `j`, so `count++` executes 12 times."
  },
  {
    id: "2.12-15",
    prompt: "Assume that `n` is a positive integer. Which of the following code segments execute `count++;` exactly `n` times?",
    code: `
      I.   for (int k = 1; k <= n; k++)
           {
               count++;
           }

      II.  for (int k = n; k > 0; k--)
           {
               count++;
           }

      III. for (int k = 0; k <= n; k++)
           {
               count++;
           }
    `,
    choices: ["I only", "I and II only", "II and III only", "I, II, and III"],
    answer: "B",
    explanation: "Segments I and II each visit `n` values (1 to `n`, and `n` down to 1). Segment III visits 0 through `n`, which is `n + 1` values."
  },
  {
    id: "2.12-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int a = 0;
      int b = 0;
      for (int i = 0; i < 5; i++)
      {
          a++;
          for (int j = 0; j < 4; j++)
          {
              b++;
          }
      }
      System.out.println(a + " " + b);
    `,
    choices: ["5 20", "20 20", "5 4", "9 20"],
    answer: "A",
    explanation: "`a++` is in the outer loop only, so it runs 5 times. `b++` is in the inner loop, which runs 4 times for each of the 5 outer iterations, for 20 times."
  },
  {
    id: "2.12-17",
    prompt: "Consider the following three code segments, where `n` is a positive integer. Which of the following statements is true?",
    code: `
      I.   for (int k = 0; k < 100; k++)
           {
               count++;
           }

      II.  for (int k = 0; k < n; k++)
           {
               count++;
           }

      III. for (int i = 0; i < n; i++)
           {
               for (int j = 0; j < n; j++)
               {
                   count++;
               }
           }
    `,
    choices: [
      "When `n` is 5, segment III executes `count++` the most times.",
      "Segment I always executes `count++` the most times, because 100 is the largest loop bound.",
      "Segments II and III execute `count++` the same number of times for every value of `n`.",
      "When `n` is 5, segment I executes `count++` the most times, but for large enough values of `n`, segment III executes it the most times."
    ],
    answer: "D",
    explanation: "When `n` is 5, the counts are 100, 5, and 25, so segment I does the most. Segment I always does exactly 100, while segment III does `n * n`, which is larger once `n` exceeds 10."
  },
  {
    id: "2.12-18",
    prompt: "How many times is the statement `count++;` executed as a result of executing the following code segment?",
    code: `
      int lo = 0;
      int hi = 20;
      int count = 0;
      while (lo < hi)
      {
          lo += 2;
          hi -= 3;
          count++;
      }
    `,
    choices: ["5", "7", "4", "10"],
    answer: "C",
    explanation: "The gap `hi - lo` starts at 20 and shrinks by 5 each iteration: 15, 10, 5, 0. After 4 iterations `lo` and `hi` are both 8, so `lo < hi` is false."
  },
  {
    id: "2.12-19",
    prompt: "How many times is the statement `count++;` executed as a result of executing the following code segment?",
    code: `
      int n = 8;
      int count = 0;
      for (int i = 1; i <= n; i *= 2)
      {
          for (int j = 0; j < n; j++)
          {
              count++;
          }
      }
    `,
    choices: ["32", "64", "24", "16"],
    answer: "A",
    explanation: "The outer loop runs with `i` equal to 1, 2, 4, and 8, which is 4 times, and the inner loop runs 8 times each time, for 32. Answering 64 assumes the outer loop runs `n` times, and 24 forgets that `i <= n` includes 8."
  },
  {
    id: "2.12-20",
    prompt: "Consider the following code segment, where `n` is a positive integer. If the value of `n` is increased from 10 to 11, how many more times is `count++;` executed?",
    code: `
      for (int i = 0; i < n; i++)
      {
          for (int j = 0; j < i; j++)
          {
              count++;
          }
      }
    `,
    choices: ["1", "11", "21", "10"],
    answer: "D",
    explanation: "Increasing `n` to 11 adds one more outer iteration, with `i` equal to 10, and in that iteration the inner loop runs 10 times. The total goes from 45 to 55."
  }
]);
