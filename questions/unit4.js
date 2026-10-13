/*
  Unit 4: Data Collections

  See questions/unit1.js for a description of each field.
  Each defineTopic(...) block is one topic. To add a question, copy a { ... } block,
  paste it inside the topic's [ ... ] list, and edit it.
*/

defineTopic(4, "4.1", "Ethical and Social Issues Around Data Collection", [
  {
    id: "4.1-01",
    prompt: "A free fitness app records each user's GPS location every few minutes, all day, and shares the location history with advertisers. Which of the following is the most significant concern raised by this practice?",
    choices: [
      "The app will run more slowly as the location history grows.",
      "A detailed location history can reveal a person's home, workplace, and daily routine, threatening their privacy.",
      "Advertisers will be unable to use location data that is collected so often.",
      "GPS coordinates are stored as `double` values, which may contain round-off error."
    ],
    answer: "B",
    explanation: "Location data collected continuously is highly personal: it can reveal where someone lives, works, and goes each day. The other choices are technical or business details, not the ethical issue of sharing personal data."
  },
  {
    id: "4.1-02",
    prompt: "A beach snack shop recorded how many ice cream cones it sold each day last summer so that it could plan how many workers to schedule. A city official wants to use this data set to estimate how much ice cream the city's residents eat in a year. Which of the following is the best evaluation of this plan?",
    choices: [
      "The plan is sound, because the data set contains real sales numbers.",
      "The plan is sound as long as the shop's numbers are multiplied by 4 to cover all four seasons.",
      "The plan is unsound only because ice cream sales are not stored as numbers.",
      "The data set was collected to answer a question about one shop's summer staffing, so it may not be appropriate for answering a question about all residents over a whole year."
    ],
    answer: "D",
    explanation: "Data collected for one specific question (staffing a beach shop in summer) does not represent residents' habits across the city or the year. Real data is not automatically appropriate for a different question, and scaling it up does not fix that."
  },
  {
    id: "4.1-03",
    prompt: "A hospital releases a research data set after removing patients' names and addresses. Each record still contains the patient's ZIP code, full birth date, gender, and diagnosis. Which of the following is the most serious remaining risk?",
    choices: [
      "Many patients could be re-identified by matching ZIP code, birth date, and gender against other available data, such as voter lists.",
      "Without names, the data set can no longer be used for any research.",
      "The diagnoses cannot be analyzed because they are stored as text.",
      "There is no remaining risk, because a person cannot be identified without a name."
    ],
    answer: "A",
    explanation: "Removing names does not guarantee anonymity: a combination of fields such as ZIP code, birth date, and gender is unique for many people and can be linked to other data sets. Assuming that no name means no risk is the key misconception."
  },
  {
    id: "4.1-04",
    prompt: "A facial recognition system was trained mostly on photos of light-skinned adults. When tested, it is much less accurate for people with darker skin and for children. Which of the following is the most likely cause?",
    choices: [
      "The program contains a syntax error that affects only some images.",
      "Facial recognition cannot work for more than one age group.",
      "The data used to train the system did not adequately represent all the groups of people it is used on.",
      "The computer running the system did not have enough memory."
    ],
    answer: "C",
    explanation: "An algorithm learns patterns from its training data, so groups that are underrepresented in that data are recognized less accurately. This is bias in the collected data carried into the algorithm, not a syntax or hardware problem."
  },
  {
    id: "4.1-05",
    prompt: "A school stores students' names, home addresses, and medical notes in a database. Which of the following practices best protects the security of this data?",
    choices: [
      "Storing the data on a protected system and allowing access only to staff who need it for their jobs",
      "Storing a copy of the database on every classroom computer so it is never lost",
      "Emailing the full database to all teachers at the start of each year",
      "Using the same simple password for every staff account so no one gets locked out"
    ],
    answer: "A",
    explanation: "Keeping the data on a protected system and limiting access to the people who need it reduces the chance that it is exposed. Spreading copies around or sharing weak passwords greatly increases the risk that private information is seen by the wrong people."
  },
  {
    id: "4.1-06",
    prompt: "A developer is creating a flashlight app. Which of the following is the most responsible approach to collecting user data?",
    choices: [
      "Collect the user's contacts and location in case they are useful for a future feature.",
      "Collect only the data the app actually needs to provide its function.",
      "Collect as much data as possible, as long as the data is stored on the user's own phone.",
      "Collect all available data but describe the collection only in a long legal document."
    ],
    answer: "B",
    explanation: "Collecting only what is needed (data minimization) limits the harm if data is misused or leaked. Collecting extra data \"just in case\" creates privacy risk with no benefit to the user."
  },
  {
    id: "4.1-07",
    prompt: "A company trains a program to rank job applicants using records of the people it hired over the past 20 years. Most of those past hires were men. Which of the following is the most likely problem with the resulting program?",
    choices: [
      "The program will be unbiased because it uses real historical data.",
      "The program will rank every applicant equally because it cannot see names.",
      "The program will run too slowly because it was trained on 20 years of data.",
      "The program may learn to favor applicants who resemble past hires, repeating the bias in the historical data."
    ],
    answer: "D",
    explanation: "An algorithm trained on biased historical decisions tends to reproduce those decisions, even if gender is not an explicit input, because other features can act as stand-ins. Real data is not automatically fair data."
  },
  {
    id: "4.1-08",
    prompt: "Which of the following practices reduce the risk of harm from storing users' personal data?",
    code: `
      I.   Allowing only the people who need the data to access it
      II.  Collecting extra fields "just in case" they are needed later
      III. Deleting data once it is no longer needed
    `,
    choices: [
      "I only",
      "II only",
      "I and III only",
      "I, II, and III"
    ],
    answer: "C",
    explanation: "Limiting who can access the data and deleting data once it is no longer needed both reduce the amount of personal data that could be exposed. Collecting extra fields increases risk rather than reducing it."
  },
  {
    id: "4.1-09",
    prompt: "A navigation app uses a road data set in which several roads that were permanently closed years ago are still listed as open. Which of the following is the most likely effect on the app?",
    choices: [
      "The app will refuse to start until the data set is corrected.",
      "The app may plan routes that use the closed roads, so it gives incorrect directions.",
      "The app will be unaffected, because it uses only the roads that are open.",
      "The app will run faster, because it has more roads to choose from."
    ],
    answer: "B",
    explanation: "A program can only be as accurate as its data. Because the closed roads are listed as open, the app treats them as usable and may send drivers along routes that do not work."
  },
  {
    id: "4.1-10",
    prompt: "A researcher posts an online survey asking how many hours per week people use the internet and concludes that almost everyone in the country is online every day. Which of the following is the biggest flaw in this conclusion?",
    choices: [
      "Only people who already use the internet could respond, so the sample does not represent the whole population.",
      "Online surveys cannot record numbers.",
      "The survey should have asked for minutes instead of hours.",
      "The researcher should have used a larger font in the survey."
    ],
    answer: "A",
    explanation: "This is sampling bias: people without internet access could never take the survey, so the results overstate internet use. How data is collected affects which conclusions it supports."
  },
  {
    id: "4.1-11",
    prompt: "An online store wants to learn which new features all of its customers would like. Which of the following data collection methods is most likely to produce biased results?",
    choices: [
      "Sending a survey to a randomly chosen sample from the full customer list",
      "Sending the survey to every customer and following up with those who do not respond",
      "Surveying randomly chosen customers from each region in proportion to the number of customers in that region",
      "Surveying only customers who contacted the help desk to complain"
    ],
    answer: "D",
    explanation: "Customers who contacted the help desk to complain are not typical of all customers, so their answers would over-represent problems. Programmers should know how a data set was collected, and whether that method introduces bias, before drawing conclusions from it."
  },
  {
    id: "4.1-12",
    prompt: "A grocery store collects customers' purchase histories through a loyalty card program to send them coupons. Later, the store sells the purchase histories to a health insurance company. Which of the following best describes the ethical problem?",
    choices: [
      "Purchase histories are too large to transfer between companies.",
      "The coupons will no longer match customers' purchases.",
      "The data is being used for a purpose customers did not agree to when it was collected.",
      "Grocery data cannot be stored in a database."
    ],
    answer: "C",
    explanation: "Customers shared their data to receive coupons, not to have it used by an insurer in ways that could affect them. Using data for a new purpose without consent is a misuse of personal data."
  },
  {
    id: "4.1-13",
    prompt: "A weather station records three temperature readings each day and reports their average using the following method. When a sensor fails, its reading is stored as 0. On one day the readings were 60, a failed sensor, and 66. What is returned by the call `average(60, 0, 66)`?",
    code: `
      public static double average(int a, int b, int c)
      {
          return (a + b + c) / 3.0;
      }
    `,
    choices: [
      "42.0, which is too low because the missing reading was treated as a real temperature",
      "63.0, because the method ignores the failed sensor",
      "42, because integer division is used",
      "An `ArithmeticException` is thrown because one reading is 0."
    ],
    answer: "A",
    explanation: "The sum is 126, and 126 / 3.0 is 42.0. The 0 is not a real temperature, so the incomplete data makes the program report a misleading average; the two real readings, 60 and 66, average to 63.0."
  },
  {
    id: "4.1-14",
    prompt: "A city uses a program that sends more police patrols to neighborhoods where more arrests were recorded in the past. More patrols then lead to more recorded arrests in those same neighborhoods. Which of the following best describes the problem?",
    choices: [
      "The program is fair because it relies only on numbers.",
      "The program needs a faster computer to process the arrest data.",
      "The data reflects where police looked for crime, so the program can reinforce its own bias in a feedback loop.",
      "Arrest counts are whole numbers, so they cannot be averaged."
    ],
    answer: "C",
    explanation: "Recorded arrests depend partly on where police were sent, so using them to decide where to send police creates a feedback loop that amplifies existing patterns. Relying on numbers does not make an algorithm unbiased."
  },
  {
    id: "4.1-15",
    prompt: "Which of the following is least likely to identify a specific individual on its own?",
    choices: [
      "A student's school email address",
      "The average test score of a class of 30 students",
      "A student's cell phone number",
      "A student's ID number"
    ],
    answer: "B",
    explanation: "An average over 30 students is aggregated data and does not point to one person. Email addresses, phone numbers, and ID numbers are each tied to a single individual."
  },
  {
    id: "4.1-16",
    prompt: "A team is building a program that predicts which loan applicants will repay their loans. Which of the following practices could help reduce unfair bias in the program?",
    code: `
      I.   Testing the program's accuracy separately for different groups of applicants
      II.  Training the program on data from a broader, more representative group of people
      III. Checking whether input fields, such as ZIP code, act as stand-ins for
           sensitive characteristics, such as race
    `,
    choices: [
      "I only",
      "II only",
      "I and II only",
      "I, II, and III"
    ],
    answer: "D",
    explanation: "All three help: testing by group reveals unequal performance, representative data reduces skew, and checking for stand-in features catches bias that survives even when sensitive fields are removed."
  },
  {
    id: "4.1-17",
    prompt: "A data set records the number of visitors to a city's public library on each day of summer vacation. Which of the following questions is this data set most appropriate for answering?",
    choices: [
      "How many people will visit the library during the school year?",
      "On which day of summer vacation did the library have the most visitors?",
      "Which kinds of books do library visitors prefer?",
      "How many city residents own a library card?"
    ],
    answer: "B",
    explanation: "The data set contains daily summer visitor counts, so it can answer questions about those counts. It contains nothing about the school year, book preferences, or library cards, so using it for those questions would go beyond what the data is about."
  },
  {
    id: "4.1-18",
    prompt: "To protect privacy, a health department never publishes an exact count smaller than 5, because small counts could identify individuals. Consider the following method. What is printed as a result of executing `System.out.println(report(12) + \"; \" + report(3));`?",
    code: `
      public static String report(int count)
      {
          if (count < 5)
          {
              return "fewer than 5";
          }
          return "" + count;
      }
    `,
    choices: [
      "12; fewer than 5",
      "12; 3",
      "fewer than 5; 3",
      "fewer than 5; fewer than 5"
    ],
    answer: "A",
    explanation: "12 is not less than 5, so its exact value is returned, while 3 is replaced by the phrase \"fewer than 5\". Suppressing small counts is one way to share aggregate data while protecting individuals."
  },
  {
    id: "4.1-19",
    prompt: "A school club collected members' phone numbers to send event reminders. The club is now shutting down. Which of the following is the most responsible action to take with the phone numbers?",
    choices: [
      "Post the list online so former members can contact each other.",
      "Give the list to a local business that wants to advertise to students.",
      "Keep the list indefinitely in case the club restarts someday.",
      "Securely delete the phone numbers, since they are no longer needed for their original purpose."
    ],
    answer: "D",
    explanation: "Data should be kept only as long as it is needed for the purpose it was collected for. Posting, selling, or keeping it indefinitely all expose members' data without their consent."
  },
  {
    id: "4.1-20",
    prompt: "A developer says, \"Our program cannot be biased, because it just follows mathematical rules.\" Which of the following is the best response?",
    choices: [
      "The developer is correct, because computers do not have opinions.",
      "The developer is correct as long as the program has no syntax errors.",
      "A program can still produce biased results if its training data, inputs, or design choices reflect bias.",
      "Bias can occur only in programs that use random numbers."
    ],
    answer: "C",
    explanation: "Algorithms reflect the data they learn from and the choices of the people who design them, so following rules exactly can still produce unfair outcomes. Being free of syntax errors says nothing about fairness."
  }
]);

defineTopic(4, "4.2", "Introduction to Using Data Sets", [
  {
    id: "4.2-01",
    prompt: "Which of the following best describes a data set?",
    choices: [
      "A single variable that stores one value",
      "A method that sorts values into order",
      "A collection of related data, often organized as records that each have the same fields",
      "A list of the errors produced when a program runs"
    ],
    answer: "C",
    explanation: "A data set is a collection of related data, typically organized as records (such as one per person or day) with the same fields in each record. One variable holds a single value, not a data set."
  },
  {
    id: "4.2-02",
    prompt: "A data set contains one record for each day of 2024 for a single city. Each record has the date, the high temperature, the low temperature, and the amount of rainfall. Which of the following questions can be answered using only this data set?",
    choices: [
      "On which day in 2024 did the city receive the most rainfall?",
      "Why did it rain more in April than in June?",
      "What will the high temperature be on July 4, 2030?",
      "Was 2024 rainier in this city than in a nearby city?"
    ],
    answer: "A",
    explanation: "Finding the day with the most rainfall only requires comparing the rainfall field across records. The data cannot explain causes, does not include future years, and has no data for any other city."
  },
  {
    id: "4.2-03",
    prompt: "A school library's data set has one record per checkout, with the fields student ID, grade level, book title, and checkout date. Which of the following questions can NOT be answered using this data set?",
    choices: [
      "Which book title was checked out most often?",
      "How many checkouts were made by ninth graders?",
      "In which month were the most books checked out?",
      "Did students enjoy the books they checked out?"
    ],
    answer: "D",
    explanation: "Nothing in the data set records students' opinions of the books, so enjoyment cannot be determined. The other questions can be answered by counting records grouped by title, grade level, or month."
  },
  {
    id: "4.2-04",
    prompt: "A student is planning an algorithm to find the day with the highest temperature in a week of recorded temperatures. Which of the following best describes how a table can help with this planning?",
    choices: [
      "A table is useful only after the program has been written, to display its output.",
      "Listing each day and its temperature in a table lets the student trace the steps, such as keeping track of the highest temperature seen so far as each row is examined.",
      "Putting the data in a table means no algorithm is needed, because the answer is always in the first row.",
      "A table can show the data but cannot be used to plan the order in which values are processed."
    ],
    answer: "B",
    explanation: "A chart or table makes the data visible, so the student can plan and trace the algorithm one row at a time before writing code. The table does not replace the algorithm."
  },
  {
    id: "4.2-05",
    prompt: "The table shows a data set of the rainfall, in inches, for five days. The algorithm below the table is applied to the data set. What value does the algorithm report?",
    code: `
      Day   Rainfall
      Mon   0.2
      Tue   0.0
      Wed   1.1
      Thu   0.4
      Fri   0.0

      Step 1: Set count to 0.
      Step 2: For each day, in order, if its rainfall is greater than 0.3,
              add 1 to count.
      Step 3: Report count.
    `,
    choices: [
      "5",
      "3",
      "1",
      "2"
    ],
    answer: "D",
    explanation: "Each value is examined one at a time. Only Wed (1.1) and Thu (0.4) are greater than 0.3, so count is 2. Answering 3 counts every day with any rain, including Mon's 0.2."
  },
  {
    id: "4.2-06",
    prompt: "A data set of test results for six students is stored in a `String`, with one letter per student: P for pass and F for fail. What is printed as a result of executing the following code segment?",
    code: `
      String results = "PFPPFP";
      int passes = 0;
      for (int i = 0; i < results.length(); i++)
      {
          if (results.substring(i, i + 1).equals("P"))
          {
              passes++;
          }
      }
      System.out.println(passes);
    `,
    choices: [
      "4",
      "2",
      "6",
      "3"
    ],
    answer: "A",
    explanation: "The loop accesses the results one at a time, and four of the six letters are P. Answering 2 counts the failures, and 6 counts every student."
  },
  {
    id: "4.2-07",
    prompt: "Which of the following is an example of a data set?",
    choices: [
      "The name of one customer at a bank",
      "A method that computes how long a customer waited",
      "The recorded wait times of every customer at a bank during one week",
      "The rule that customers are served in the order they arrive"
    ],
    answer: "C",
    explanation: "A data set is a collection of specific pieces of information, such as many recorded wait times. A single value is not a collection, and a method or rule describes processing, not data."
  },
  {
    id: "4.2-08",
    prompt: "The table shows how many hours each student volunteered. The algorithm below the table is applied to the data set. Which student's name does the algorithm report?",
    code: `
      Student   Hours
      Ana       3
      Ben       5
      Cy        2
      Dee       5

      Step 1: Set best to the first row.
      Step 2: For each remaining row, in order, if its hours are greater
              than the hours in best, set best to that row.
      Step 3: Report the student name in best.
    `,
    choices: [
      "Ana",
      "Ben",
      "Dee",
      "Cy"
    ],
    answer: "B",
    explanation: "best changes to Ben's row because 5 is greater than 3. Dee's 5 is not greater than Ben's 5, so best stays Ben. Reporting Dee would require the comparison to be greater than or equal to."
  },
  {
    id: "4.2-09",
    prompt: "A program finds the average of the values in a data set of daily step counts. Which of the following best describes how the values are processed?",
    choices: [
      "Each value is accessed one at a time and added to a running total, and after every value has been processed the total is divided by the number of values.",
      "Only the first and last values are accessed, because the average is halfway between them.",
      "Only the largest value is accessed, because it determines the average.",
      "The values must first be rearranged from smallest to largest, because an average cannot be computed otherwise."
    ],
    answer: "A",
    explanation: "When a data set is analyzed, its values are accessed one at a time and processed for the desired result; here each is added to a total. The average depends on every value, so it cannot be found from only the first, last, or largest value."
  },
  {
    id: "4.2-10",
    prompt: "A data set of five quiz scores is shown in the comments. Assume the method `getScore(k)` returns the score in row `k` as an `int`. What is printed as a result of executing the following code segment?",
    code: `
      // Row k:   0   1   2   3   4
      // Score:  85  92  78  92  60

      int total = 0;
      int k = 0;
      while (k < 5)
      {
          total += getScore(k);
          k++;
      }
      System.out.println(total / 5);
    `,
    choices: [
      "407",
      "81.4",
      "81",
      "92"
    ],
    answer: "C",
    explanation: "The loop accesses the five scores one at a time, so `total` is 85 + 92 + 78 + 92 + 60 = 407. Because `total` and 5 are both `int` values, 407 / 5 is 81, with no decimal part."
  },
  {
    id: "4.2-11",
    prompt: "A data set describes a high school basketball team's season, with one entry per game listing the date, the opponent, and the points scored. Which of the following is a specific piece of information contained in this data set?",
    choices: [
      "A prediction of how many points the team will score next season",
      "The algorithm used to compute the team's average points per game",
      "The number of games the team will play next year",
      "The number of points the team scored in its game against Central on January 12"
    ],
    answer: "D",
    explanation: "A data set is a collection of specific pieces of information that were recorded. The points scored in a particular game are stored in the data; predictions and algorithms are not."
  },
  {
    id: "4.2-12",
    prompt: "The table shows the number of library visitors in each of five months. The algorithm below the table is applied to the data set. Which month does the algorithm report?",
    code: `
      Month   Visitors
      Jan     120
      Feb     150
      Mar     140
      Apr     190
      May     200

      Step 1: For each month after the first, compute its visitors minus
              the visitors of the month before it.
      Step 2: Report the month with the largest result from Step 1.
    `,
    choices: [
      "May",
      "Apr",
      "Feb",
      "Mar"
    ],
    answer: "B",
    explanation: "The differences are Feb 30, Mar -10, Apr 50, and May 10, so April has the largest increase. May has the most visitors, but the algorithm compares each month with the one before it."
  },
  {
    id: "4.2-13",
    prompt: "Before writing code that counts how many students in a data set are in each grade level, a programmer sketches a table with a few sample rows of the data and a column for each count. Which of the following best describes the purpose of the sketch?",
    choices: [
      "The sketch is required by Java before a program can read any data.",
      "The sketch stores the data so the program does not need to access the values.",
      "The sketch shows how the data is organized, so the programmer can plan which values to access and how to process each one.",
      "The sketch guarantees that the finished program will contain no errors."
    ],
    answer: "C",
    explanation: "A chart or table is a visual representation of the data that helps plan the algorithm, such as which column to examine and which count to update for each row. It is a planning tool, not part of the Java program and not a guarantee of correctness."
  },
  {
    id: "4.2-14",
    prompt: "A data set of daily weather is stored in a `String`, with one letter per day: S for sunny, C for cloudy, and R for rainy. What is printed as a result of executing the following code segment?",
    code: `
      String days = "SSRCCRS";
      int changes = 0;
      for (int i = 1; i < days.length(); i++)
      {
          if (!days.substring(i, i + 1).equals(days.substring(i - 1, i)))
          {
              changes++;
          }
      }
      System.out.println(changes);
    `,
    choices: [
      "4",
      "3",
      "6",
      "7"
    ],
    answer: "A",
    explanation: "The loop compares each day with the day before it, which is 6 comparisons. The letter differs from the previous one at indices 2, 3, 5, and 6, so 4 is printed. Answering 6 counts every comparison rather than only the changes."
  },
  {
    id: "4.2-15",
    prompt: "A data set lists each student's name and the number of books the student read this year. Which of the following algorithms correctly determines how many students read more than 10 books?",
    choices: [
      "Set count to 0.\nFor each student, if books > 10, add that student's books to count.\nReport count.",
      "For each student, set count to 0, then if books > 10, add 1 to count.\nReport count.",
      "Set count to 0.\nIf the first student's books > 10, add 1 to count.\nReport count.",
      "Set count to 0.\nFor each student, if books > 10, add 1 to count.\nReport count."
    ],
    answer: "D",
    explanation: "Each record must be examined one at a time, adding 1 for each student who meets the condition. The first algorithm adds book totals instead of counting students, the second resets count for every student, and the third examines only one student."
  },
  {
    id: "4.2-16",
    prompt: "A store's sales data is organized in the table below. A programmer uses the table to plan an algorithm that finds which product brought in the most money (price times quantity sold). Which columns must the algorithm access?",
    code: `
      Product    Price    Quantity Sold    Supplier
      Pens       1.50     40               Acme
      Folders    2.00     25               Zed
      Binders    4.00     12               Acme
    `,
    choices: [
      "Product and Supplier only",
      "Product, Price, and Quantity Sold",
      "Price and Quantity Sold only",
      "All four columns"
    ],
    answer: "B",
    explanation: "The money for each product is Price times Quantity Sold, and Product is needed to report which product it is. Supplier is not used. Laying the data out as a table makes it clear which values the algorithm must access."
  },
  {
    id: "4.2-17",
    prompt: "A data set of high temperatures for six days is shown in the comments. Assume the method `getTemp(d)` returns the temperature for day `d` as an `int`, for `d` from 1 to 6. What is printed as a result of executing the following code segment?",
    code: `
      // Day d:   1   2   3   4   5   6
      // Temp:   71  75  68  75  80  66

      int count = 0;
      for (int d = 1; d <= 6; d++)
      {
          if (getTemp(d) >= 75)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: [
      "3",
      "2",
      "1",
      "4"
    ],
    answer: "A",
    explanation: "Each temperature is checked one at a time. Days 2, 4, and 5 have temperatures of at least 75, so 3 is printed. Answering 1 would count only temperatures strictly greater than 75."
  },
  {
    id: "4.2-18",
    prompt: "Which of the following statements about data sets is true?",
    choices: [
      "A data set must contain only numbers.",
      "A data set must contain at least 1,000 values to be useful.",
      "A data set is a program that answers a question.",
      "A data set is a collection of specific pieces of information, which can include numbers, text, or dates."
    ],
    answer: "D",
    explanation: "A data set is a collection of specific pieces of information or data, of any kind and size. A program can analyze a data set to answer a question, but the data set itself is not the program."
  },
  {
    id: "4.2-19",
    prompt: "The table shows a data set of orders at a school store. The algorithm below the table is applied to the data set. What value does the algorithm report?",
    code: `
      Order   Item   Quantity
      1       pen    3
      2       cup    1
      3       pen    2
      4       hat    4
      5       pen    1

      Step 1: Set total to 0.
      Step 2: For each order, in order, if its item is pen, add its
              quantity to total.
      Step 3: Report total.
    `,
    choices: [
      "3",
      "11",
      "6",
      "1"
    ],
    answer: "C",
    explanation: "Only orders 1, 3, and 5 are for pens, so total is 3 + 2 + 1 = 6. Answering 3 counts the pen orders instead of adding their quantities, and 11 adds every quantity."
  },
  {
    id: "4.2-20",
    prompt: "A programmer plans an algorithm that computes the sum of a data set by drawing a table with one row for each value and a column for the running total after that value is processed. The values, in order, are 4, 7, 2, and 9. Which of the following lists the running total column, from top to bottom?",
    choices: [
      "4, 7, 2, 9",
      "4, 11, 13, 22",
      "0, 4, 11, 13",
      "22, 22, 22, 22"
    ],
    answer: "B",
    explanation: "Each value is added to the total one at a time: 4, then 4 + 7 = 11, then 13, then 22. Tracing a table like this before coding helps confirm that the algorithm processes each value correctly."
  }
]);

defineTopic(4, "4.3", "Array Creation and Access", [
  {
    id: "4.3-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double[] d = new double[3];
      boolean[] b = new boolean[2];
      String[] s = new String[2];
      System.out.println(d[0] + " " + b[1] + " " + s[0]);
    `,
    choices: [
      "0 false null",
      "0.0 true null",
      "A `NullPointerException` is thrown.",
      "0.0 false null"
    ],
    answer: "D",
    explanation: "Elements of a new array get default values: 0.0 for `double`, `false` for `boolean`, and `null` for object types such as `String`. Concatenating `null` into a string prints \"null\" rather than throwing an exception."
  },
  {
    id: "4.3-02",
    prompt: "Assume `arr` is a properly initialized `int` array. Which of the following expressions evaluates to the number of elements in `arr`?",
    choices: [
      "`arr.length()`",
      "`arr.length`",
      "`arr.size()`",
      "`arr.length - 1`"
    ],
    answer: "B",
    explanation: "For arrays, `length` is a field, so it is written without parentheses. `length()` is the `String` method, `size()` is the `ArrayList` method, and `arr.length - 1` is the last valid index."
  },
  {
    id: "4.3-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] vals = {10, 20, 30};
      System.out.println(vals[vals.length]);
    `,
    choices: [
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "30",
      "0",
      "3"
    ],
    answer: "A",
    explanation: "`vals.length` is 3, but the valid indices are 0, 1, and 2, so `vals[3]` causes an `ArrayIndexOutOfBoundsException` at run time. The last element is `vals[vals.length - 1]`."
  },
  {
    id: "4.3-04",
    prompt: "Which of the following correctly declares and initializes an array containing the values 3, 6, and 9?",
    choices: [
      "`int nums = {3, 6, 9};`",
      "`int[] nums = new int[3]{3, 6, 9};`",
      "`int[] nums = {3, 6, 9};`",
      "`int[] nums = (3, 6, 9);`"
    ],
    answer: "C",
    explanation: "An initializer list in braces creates an array with those values and a length of 3. You cannot give both a size and an initializer list, and `nums` must be declared with type `int[]`, not `int`."
  },
  {
    id: "4.3-05",
    prompt: "A programmer creates an array with `int[] scores = new int[3];` and later needs to store 5 scores. Which of the following statements is true?",
    choices: [
      "Assigning values to `scores[3]` and `scores[4]` automatically increases the length of `scores` to 5.",
      "The length of `scores` cannot be changed; a new array of length 5 must be created to hold 5 values.",
      "The statement `scores.length = 5;` changes the length of `scores` to 5.",
      "Calling `scores.add(0)` twice increases the length of `scores` to 5."
    ],
    answer: "B",
    explanation: "An array's length is set when it is created and cannot change. Assigning to `scores[3]` throws an `ArrayIndexOutOfBoundsException`, `length` cannot be assigned a new value, and arrays have no `add` method."
  },
  {
    id: "4.3-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] words = new String[3];
      words[1] = "hi";
      System.out.println(words[0].length());
    `,
    choices: [
      "0",
      "2",
      "null",
      "A `NullPointerException` is thrown."
    ],
    answer: "D",
    explanation: "`words[0]` was never assigned, so it holds the default value `null`, not an empty string. Calling `length()` on `null` throws a `NullPointerException`."
  },
  {
    id: "4.3-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] nums = {4, 8, 15, 16, 23, 42};
      int k = nums[2] % 4;
      System.out.println(nums[k] + nums[nums.length - 2]);
    `,
    choices: [
      "39",
      "38",
      "58",
      "31"
    ],
    answer: "A",
    explanation: "`nums[2]` is 15 and 15 % 4 is 3, so `nums[k]` is `nums[3]`, which is 16. `nums.length - 2` is 4, and `nums[4]` is 23, so 16 + 23 = 39 is printed."
  },
  {
    id: "4.3-08",
    prompt: "An array is created with `double[] data = new double[n];`, where `n` is a positive `int`. Which of the following describes all the valid indices of `data`?",
    choices: [
      "1 through `n`",
      "0 through `n`",
      "0 through `n - 1`",
      "1 through `n - 1`"
    ],
    answer: "C",
    explanation: "Array indices start at 0, so an array with `n` elements has indices 0 through `n - 1`. Using index `n` throws an `ArrayIndexOutOfBoundsException`."
  },
  {
    id: "4.3-09",
    prompt: "Which of the following statements correctly create an array that can hold exactly 5 `String` values?",
    code: `
      I.   String[] names = new String[5];
      II.  String[] names = {"a", "b", "c", "d", "e"};
      III. String[] names = new String[];
    `,
    choices: [
      "I only",
      "III only",
      "I and III only",
      "I and II only"
    ],
    answer: "D",
    explanation: "Statement I creates an array of 5 elements, each `null`, and II creates a 5-element array from an initializer list. Statement III does not compile because `new` requires a size or an initializer list."
  },
  {
    id: "4.3-10",
    prompt: "Consider the following class and code segment. What is printed as a result of executing the code segment?",
    code: `
      public class Pet
      {
          private String name;

          public Pet(String n)
          {
              name = n;
          }

          public String getName()
          {
              return name;
          }
      }

      // code segment in another class
      Pet[] pets = new Pet[3];
      pets[0] = new Pet("Rex");
      pets[2] = new Pet("Tom");
      System.out.println(pets[2].getName() + " " + pets[1]);
    `,
    choices: [
      "Tom null",
      "A `NullPointerException` is thrown.",
      "Tom",
      "Rex null"
    ],
    answer: "A",
    explanation: "`pets[2]` refers to the `Pet` named Tom, and `pets[1]` was never assigned, so it is `null`. Concatenating `null` prints \"null\"; an exception would occur only if a method were called on `pets[1]`."
  },
  {
    id: "4.3-11",
    prompt: "Which of the following declarations will cause a compile-time error?",
    choices: [
      "`String[] names = {\"Ann\", null, \"Lee\"};`",
      "`int[] values = {4, 5, \"6\"};`",
      "`boolean[] flags = {true, false, true};`",
      "`double[] rates = new double[2];`"
    ],
    answer: "B",
    explanation: "An array stores values of a single type, so an `int` array cannot hold the `String` \"6\". A `String` array can hold `null` because its elements are object references."
  },
  {
    id: "4.3-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] arr = new int[5];
      arr[1] = 7;
      arr[3] = arr[1] * 2;
      arr[4] = arr[3] - arr[0];
      System.out.println(arr[4]);
    `,
    choices: [
      "0",
      "7",
      "14",
      "An `ArrayIndexOutOfBoundsException` is thrown."
    ],
    answer: "C",
    explanation: "`arr[3]` becomes 14, and `arr[0]` still has its default value 0, so `arr[4]` is 14 - 0 = 14. Index 4 is the last valid index of a 5-element array."
  },
  {
    id: "4.3-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] words = {"apple", "kiwi", "banana"};
      System.out.println(words.length + words[1].length());
    `,
    choices: [
      "7",
      "34",
      "9",
      "15"
    ],
    answer: "A",
    explanation: "`words.length` is the number of elements, 3, and `words[1].length()` is the length of \"kiwi\", 4. Both are `int` values, so they are added to give 7, not concatenated."
  },
  {
    id: "4.3-14",
    prompt: "Assume that `int[] a` has been properly declared and initialized with at least one element. Which of the following statements will cause a compile-time error?",
    choices: [
      "`int x = a[a.length - 1];`",
      "`double[] d = {1, 2.5};`",
      "`a = new int[0];`",
      "`int n = a.length();`"
    ],
    answer: "D",
    explanation: "`length` is a field of an array, not a method, so `a.length()` does not compile. An array of length 0 is legal, and the `int` value 1 is widened to 1.0 in a `double` initializer list."
  },
  {
    id: "4.3-15",
    prompt: "Consider the following code segment. Which of the following can replace `/* missing code */` so that the first and last elements of `v` are swapped and `v` contains 20, 10, 15, 5?",
    code: `
      int[] v = {5, 10, 15, 20};
      /* missing code */
    `,
    choices: [
      "v[0] = v[v.length - 1];\nv[v.length - 1] = v[0];",
      "int temp = v[0];\nv[v.length - 1] = temp;\nv[0] = v[v.length - 1];",
      "int temp = v[0];\nv[0] = v[v.length - 1];\nv[v.length - 1] = temp;",
      "int temp = v[v.length - 1];\nv[0] = temp;\nv[0] = v[v.length - 1];"
    ],
    answer: "C",
    explanation: "The original first value must be saved in `temp` before `v[0]` is overwritten, then placed in the last position. Without a temporary variable, as in the first choice, both positions end up holding the last value."
  },
  {
    id: "4.3-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double[] prices = {1.5, 2.0, 3.25};
      int i = (int) prices[1];
      System.out.println(prices[i]);
    `,
    choices: [
      "2.0",
      "3.25",
      "1.5",
      "An `ArrayIndexOutOfBoundsException` is thrown."
    ],
    answer: "B",
    explanation: "`prices[1]` is 2.0, and casting it to `int` gives 2, so `prices[2]`, which is 3.25, is printed. An index can be any `int` expression, including one computed from an element."
  },
  {
    id: "4.3-17",
    prompt: "Which of the following statements about arrays is true?",
    choices: [
      "An array's length increases automatically when a value is stored past the last element.",
      "An `int` array can store both `int` values and `String` values.",
      "The first element of an array is at index 1.",
      "Once an array is created, its length cannot be changed."
    ],
    answer: "D",
    explanation: "An array has a fixed length set when it is created; storing past the end throws an exception instead of growing it. Every element has the declared type, and indexing starts at 0."
  },
  {
    id: "4.3-18",
    prompt: "Consider the following class and code segment. What is printed as a result of executing the code segment?",
    code: `
      public class Counter
      {
          private int count;

          public void increment()
          {
              count++;
          }

          public int getCount()
          {
              return count;
          }
      }

      // code segment in another class
      Counter[] list = new Counter[2];
      Counter c = new Counter();
      list[0] = c;
      list[1] = c;
      list[0].increment();
      list[1].increment();
      System.out.println(c.getCount());
    `,
    choices: [
      "2",
      "1",
      "0",
      "A `NullPointerException` is thrown."
    ],
    answer: "A",
    explanation: "An array of objects stores references. Both `list[0]` and `list[1]` refer to the same `Counter` object as `c`, so that one object is incremented twice."
  },
  {
    id: "4.3-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] data = {2, 4, 6, 8};
      int idx = data[0] - 3;
      System.out.println(data[idx]);
    `,
    choices: [
      "8",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "2",
      "-1"
    ],
    answer: "B",
    explanation: "`idx` is 2 - 3 = -1, and negative indices are never valid in Java, so an `ArrayIndexOutOfBoundsException` is thrown. Java does not wrap index -1 around to the last element."
  },
  {
    id: "4.3-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int size = 4;
      String[] labels = new String[size * 2];
      labels[labels.length - 1] = "end";
      System.out.println(labels.length + " " + labels[7]);
    `,
    choices: [
      "4 end",
      "8 null",
      "8 end",
      "An `ArrayIndexOutOfBoundsException` is thrown."
    ],
    answer: "C",
    explanation: "The array is created with `size * 2`, or 8, elements, so its last index is 7. The value \"end\" is stored at `labels[7]`, so \"8 end\" is printed."
  }
]);

defineTopic(4, "4.4", "Array Traversals", [
  {
    id: "4.4-01",
    prompt: "What happens when the following code segment is executed?",
    code: `
      int[] arr = {4, 7, 2};
      int total = 0;
      for (int i = 0; i <= arr.length; i++)
      {
          total += arr[i];
      }
      System.out.println(total);
    `,
    choices: [
      "13 is printed.",
      "11 is printed.",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "The code does not compile."
    ],
    answer: "C",
    explanation: "The valid indices are 0 to 2. Because the condition is `i <= arr.length`, the loop also runs with `i == 3`, and `arr[3]` throws an `ArrayIndexOutOfBoundsException`."
  },
  {
    id: "4.4-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] nums = {1, 2, 3};
      for (int n : nums)
      {
          n = n * 2;
      }
      System.out.println(nums[0] + " " + nums[1] + " " + nums[2]);
    `,
    choices: [
      "2 4 6",
      "1 2 3",
      "0 0 0",
      "The code does not compile."
    ],
    answer: "B",
    explanation: "In an enhanced `for` loop, `n` holds a copy of each element. Assigning a new value to `n` changes only the copy, so the array still contains 1, 2, and 3."
  },
  {
    id: "4.4-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] vals = {3, 1, 4, 1, 5};
      for (int i = 0; i < vals.length; i++)
      {
          vals[i] = vals[i] + i;
      }
      System.out.println(vals[2] + " " + vals[4]);
    `,
    choices: [
      "6 9",
      "4 5",
      "7 10",
      "8 10"
    ],
    answer: "A",
    explanation: "Each element has its own index added to it, so `vals[2]` becomes 4 + 2 = 6 and `vals[4]` becomes 5 + 4 = 9. Indices start at 0, not 1, so adding `i + 1` (giving 7 10) is a mistake."
  },
  {
    id: "4.4-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] words = {"red", "green", "blue"};
      for (int k = words.length - 1; k >= 0; k--)
      {
          System.out.print(words[k] + " ");
      }
    `,
    choices: [
      "red green blue",
      "blue green",
      "green red",
      "blue green red"
    ],
    answer: "D",
    explanation: "`k` starts at the last index, 2, and counts down to 0, so the elements are printed from last to first. Because the condition is `k >= 0`, the element at index 0 is included."
  },
  {
    id: "4.4-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] data = {10, 20, 30, 40, 50, 60};
      int sum = 0;
      for (int i = 1; i < data.length; i += 2)
      {
          sum += data[i];
      }
      System.out.println(sum);
    `,
    choices: [
      "90",
      "210",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "120"
    ],
    answer: "D",
    explanation: "`i` takes the values 1, 3, and 5, so the loop adds 20 + 40 + 60 = 120. The next value of `i` is 7, which fails the condition before any out-of-range access happens. 90 would be the sum of the elements at the even indices."
  },
  {
    id: "4.4-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] scores = {7, 3, 9, 2, 8};
      int index = 0;
      while (index < scores.length && scores[index] != 9)
      {
          index++;
      }
      System.out.println(index);
    `,
    choices: [
      "2",
      "3",
      "1",
      "5"
    ],
    answer: "A",
    explanation: "The loop stops as soon as `scores[index]` is 9, which happens at index 2, so 2 is printed. Answering 3 counts positions starting from 1 instead of 0."
  },
  {
    id: "4.4-07",
    prompt: "What happens when the following code segment is executed?",
    code: `
      int[] scores = {7, 3, 9, 2, 8};
      int index = 0;
      while (scores[index] != 6 && index < scores.length)
      {
          index++;
      }
      System.out.println(index);
    `,
    choices: [
      "5 is printed.",
      "4 is printed.",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "The loop never terminates."
    ],
    answer: "C",
    explanation: "No element is 6, so `index` reaches 5. The condition then evaluates `scores[5]` before checking `index < scores.length`, which throws an exception. Putting the bounds check first would let short-circuit evaluation prevent the bad access."
  },
  {
    id: "4.4-08",
    prompt: "The `Counter` class has a constructor `Counter(int start)` that sets the count to `start`, a method `increment()` that adds 1 to the count, and a method `getCount()` that returns the count. What is printed as a result of executing the following code segment?",
    code: `
      Counter[] counters = {new Counter(1), new Counter(5), new Counter(9)};
      for (Counter c : counters)
      {
          c.increment();
      }
      System.out.println(counters[0].getCount() + counters[2].getCount());
    `,
    choices: [
      "10",
      "12",
      "14",
      "The code does not compile."
    ],
    answer: "B",
    explanation: "The loop variable `c` refers to the same object as each array element, so calling `increment` changes the objects themselves. The counts become 2 and 10, and 2 + 10 = 12. Answering 10 assumes the enhanced `for` loop cannot change anything."
  },
  {
    id: "4.4-09",
    prompt: "The `Counter` class has a constructor `Counter(int start)` that sets the count to `start`, a method `increment()` that adds 1 to the count, and a method `getCount()` that returns the count. What is printed as a result of executing the following code segment?",
    code: `
      Counter[] counters = {new Counter(1), new Counter(2)};
      for (Counter c : counters)
      {
          c.increment();
          c = new Counter(0);
      }
      System.out.println(counters[0].getCount() + " " + counters[1].getCount());
    `,
    choices: [
      "2 3",
      "0 0",
      "1 2",
      "1 1"
    ],
    answer: "A",
    explanation: "`c.increment()` changes the object in the array. Assigning `c = new Counter(0)` only makes the local variable `c` refer to a new object; the array still refers to the original objects, whose counts are 2 and 3."
  },
  {
    id: "4.4-10",
    prompt: "Which of the following tasks CANNOT be accomplished using only an enhanced `for` loop over an `int` array, without any index variable?",
    choices: [
      "Computing the sum of the elements in the array",
      "Counting the number of negative elements in the array",
      "Replacing each element of the array with its absolute value",
      "Printing each element of the array"
    ],
    answer: "C",
    explanation: "The loop variable of an enhanced `for` loop is a copy of each `int` element, so assigning to it does not change the array. Replacing elements requires an index, as in `arr[i] = Math.abs(arr[i]);`. The other tasks only read the elements."
  },
  {
    id: "4.4-11",
    prompt: "Assume `arr` is an `int` array that has been properly initialized. Which of the following can replace `/* missing loop header */` so that the code segment prints all the elements of `arr` in reverse order?",
    code: `
      /* missing loop header */
      {
          System.out.print(arr[i] + " ");
      }
    `,
    choices: [
      "`for (int i = arr.length; i > 0; i--)`",
      "`for (int i = arr.length - 1; i > 0; i--)`",
      "`for (int i = arr.length - 1; i >= 0; i--)`",
      "`for (int i = arr.length - 1; i >= 0; i++)`"
    ],
    answer: "C",
    explanation: "The last valid index is `arr.length - 1` and the first is 0, so the loop must start at `arr.length - 1` and continue while `i >= 0`. Starting at `arr.length` causes an exception, and using `i > 0` skips the element at index 0."
  },
  {
    id: "4.4-12",
    prompt: "Assume `arr` is an `int` array that has been properly initialized. Which of the following code segments print all the elements of `arr` in order from first to last?",
    code: `
      I.
      for (int i = 0; i < arr.length; i++)
      {
          System.out.print(arr[i] + " ");
      }

      II.
      for (int x : arr)
      {
          System.out.print(x + " ");
      }

      III.
      int i = 1;
      while (i <= arr.length)
      {
          System.out.print(arr[i - 1] + " ");
          i++;
      }
    `,
    choices: [
      "I only",
      "I and II only",
      "II and III only",
      "I, II, and III"
    ],
    answer: "D",
    explanation: "All three work. In III, `i` runs from 1 to `arr.length`, so `arr[i - 1]` accesses indices 0 through `arr.length - 1`. The condition `i <= arr.length` is correct here because the index used is `i - 1`."
  },
  {
    id: "4.4-13",
    prompt: "The following method is intended to return the sum of the elements in `nums`. Which of the following best describes the behavior of the method?",
    code: `
      /** Precondition: nums.length > 0 */
      public static int total(int[] nums)
      {
          int sum = 0;
          for (int i = 0; i < nums.length - 1; i++)
          {
              sum += nums[i + 1];
          }
          return sum;
      }
    `,
    choices: [
      "The method works as intended.",
      "The method returns the sum of all the elements except the first one.",
      "The method returns the sum of all the elements except the last one.",
      "The method throws an `ArrayIndexOutOfBoundsException` for every array."
    ],
    answer: "B",
    explanation: "`i` goes from 0 to `nums.length - 2`, so `i + 1` goes from 1 to `nums.length - 1`. Every element is added except the one at index 0. The upper bound keeps `i + 1` in range, so no exception occurs."
  },
  {
    id: "4.4-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] a = {1, 2, 3, 4};
      for (int i = 1; i < a.length; i++)
      {
          a[i] = a[i] + a[i - 1];
      }
      System.out.println(a[3]);
    `,
    choices: [
      "7",
      "4",
      "9",
      "10"
    ],
    answer: "D",
    explanation: "Each element is replaced by itself plus the already-updated element before it, so the array becomes 1, 3, 6, 10. Answering 7 uses the original value 3 in `a[2]` instead of the updated value 6."
  },
  {
    id: "4.4-15",
    prompt: "Consider the following code segment. Which of the following code segments produces the same output?",
    code: `
      String[] words = {"sun", "moon", "star"};
      for (String w : words)
      {
          System.out.print(w.length() + " ");
      }
    `,
    choices: [
      "int i = 0;\nwhile (i < words.length)\n{\n    i++;\n    System.out.print(words[i].length() + \" \");\n}",
      "int i = 0;\nwhile (i < words.length)\n{\n    System.out.print(words[i].length() + \" \");\n    i++;\n}",
      "int i = 0;\nwhile (i <= words.length)\n{\n    System.out.print(words[i].length() + \" \");\n    i++;\n}",
      "for (int i = 1; i < words.length; i++)\n{\n    System.out.print(words[i].length() + \" \");\n}"
    ],
    answer: "B",
    explanation: "An enhanced `for` loop can be rewritten with an index that goes from 0 through `words.length - 1`. Incrementing before printing skips index 0 and goes out of bounds, `i <= words.length` also goes out of bounds, and starting at 1 skips the first word."
  },
  {
    id: "4.4-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] names = {"Ana", "Bo", "Cyd", "Dee", "Ed"};
      String result = "";
      for (String n : names)
      {
          if (n.length() == 3)
          {
              result += n.substring(0, 1);
          }
      }
      System.out.println(result);
    `,
    choices: [
      "ACD",
      "ABCDE",
      "AnaCydDee",
      "BE"
    ],
    answer: "A",
    explanation: "Only \"Ana\", \"Cyd\", and \"Dee\" have length 3, and `substring(0, 1)` gives the first letter of each, so \"ACD\" is printed."
  },
  {
    id: "4.4-17",
    prompt: "Which of the following is the best reason to use an indexed `for` loop instead of an enhanced `for` loop to traverse an array?",
    choices: [
      "The algorithm compares each element with the element that comes after it.",
      "The algorithm must examine every element of the array.",
      "The array contains references to objects.",
      "The array contains `String` values."
    ],
    answer: "A",
    explanation: "Comparing an element with its neighbor requires knowing the position, as in `arr[i]` and `arr[i + 1]`, and an enhanced `for` loop provides no index. An enhanced `for` loop can examine every element of any array type."
  },
  {
    id: "4.4-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] nums = {4, 1, 3, 2, 6, 5};
      int i = 0;
      String path = "";
      while (i < nums.length)
      {
          path += i + " ";
          i += nums[i];
      }
      System.out.println(path);
    `,
    choices: [
      "0 1 2 3 4 5",
      "0 4",
      "4 6",
      "0 4 10"
    ],
    answer: "B",
    explanation: "The index jumps by the value stored at the current position. Starting at 0, `nums[0]` is 4, so `i` becomes 4; `nums[4]` is 6, so `i` becomes 10 and the loop ends. Only the indices 0 and 4 were added to `path`."
  },
  {
    id: "4.4-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double[] prices = {2.5, 4.0, 1.5, 3.0, 6.0};
      int count = 0;
      for (int k = prices.length / 2; k < prices.length; k++)
      {
          if (prices[k] > 2.0)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: [
      "3",
      "1",
      "4",
      "2"
    ],
    answer: "D",
    explanation: "`prices.length / 2` is 5 / 2, which is 2 with integer division, so only indices 2, 3, and 4 are examined. Of 1.5, 3.0, and 6.0, two values are greater than 2.0. Answering 4 counts the whole array."
  },
  {
    id: "4.4-20",
    prompt: "What happens when the following code segment is executed?",
    code: `
      int[] arr = {10, 20, 30};
      for (int x : arr)
      {
          System.out.print(arr[x] + " ");
      }
    `,
    choices: [
      "10 20 30 is printed.",
      "0 1 2 is printed.",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "The code does not compile."
    ],
    answer: "C",
    explanation: "In an enhanced `for` loop, `x` holds element values, not indices. On the first pass `x` is 10, and `arr[10]` is out of bounds. To print the elements, the loop body should print `x` itself."
  }
]);

defineTopic(4, "4.5", "Implementing Array Algorithms", [
  {
    id: "4.5-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] vals = {4, 9, 2, 9, 7};
      int maxIndex = 0;
      for (int i = 1; i < vals.length; i++)
      {
          if (vals[i] > vals[maxIndex])
          {
              maxIndex = i;
          }
      }
      System.out.println(maxIndex);
    `,
    choices: [
      "1",
      "3",
      "9",
      "4"
    ],
    answer: "A",
    explanation: "The code finds the index of the largest value. Because it uses `>`, the second 9 at index 3 does not replace the first 9 at index 1. Printing 9 confuses the index with the value."
  },
  {
    id: "4.5-02",
    prompt: "The following method is intended to return the smallest value in `arr`. For which of the following arrays does the method NOT return the smallest value?",
    code: `
      /** Precondition: arr.length > 0 */
      public static int findMin(int[] arr)
      {
          int min = 0;
          for (int v : arr)
          {
              if (v < min)
              {
                  min = v;
              }
          }
          return min;
      }
    `,
    choices: [
      "`{-3, 5, -8}`",
      "`{0, 4, 2}`",
      "`{6, 2, 9}`",
      "`{-1, -1, -1}`"
    ],
    answer: "C",
    explanation: "Starting `min` at 0 only works if some element is 0 or less. For `{6, 2, 9}` no element is less than 0, so the method returns 0 instead of 2. Initializing `min` to `arr[0]` fixes the error."
  },
  {
    id: "4.5-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] scores = {80, 95, 90};
      int sum = 0;
      for (int s : scores)
      {
          sum += s;
      }
      double avg = sum / scores.length;
      System.out.println(avg);
    `,
    choices: [
      "88",
      "88.0",
      "88.33333333333333",
      "89.0"
    ],
    answer: "B",
    explanation: "`sum` and `scores.length` are both `int`, so 265 / 3 is integer division and gives 88. That value is then stored in a `double`, which prints as 88.0. The fractional part was lost before the assignment."
  },
  {
    id: "4.5-04",
    prompt: "The method `average` is intended to return the exact average of the values in `arr`, including any fractional part. Which of the following can replace `/* missing code */` so that the method works as intended?",
    code: `
      /** Precondition: arr.length > 0 */
      public static double average(int[] arr)
      {
          int sum = 0;
          for (int v : arr)
          {
              sum += v;
          }
          return /* missing code */;
      }
    `,
    choices: [
      "`(double) (sum / arr.length)`",
      "`sum / arr.length * 1.0`",
      "`1.0 * (sum / arr.length)`",
      "`(double) sum / arr.length`"
    ],
    answer: "D",
    explanation: "Casting `sum` to `double` before dividing makes the division use `double` arithmetic. In the other choices, `sum / arr.length` is evaluated first as integer division, so the fractional part is already lost."
  },
  {
    id: "4.5-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] nums = {3, 8, 6, 10, 3};
      int sum = 0;
      for (int n : nums)
      {
          sum += n;
      }
      int count = 0;
      for (int n : nums)
      {
          if (n * nums.length > sum)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: [
      "2",
      "3",
      "5",
      "1"
    ],
    answer: "A",
    explanation: "The sum is 30, so `n * 5 > 30` means `n > 6`, which is true for 8 and 10. The code counts values strictly above the average of 6, so 6 itself is not counted."
  },
  {
    id: "4.5-06",
    prompt: "The method `hasNegative` is intended to return `true` if at least one element of `arr` is negative and `false` otherwise. Which of the following can replace `/* missing code */` so that the method works as intended?",
    code: `
      public static boolean hasNegative(int[] arr)
      {
          for (int v : arr)
          {
              /* missing code */
          }
          return false;
      }
    `,
    choices: [
      "if (v < 0)\n{\n    return true;\n}\nelse\n{\n    return false;\n}",
      "if (v >= 0)\n{\n    return false;\n}",
      "if (v < 0)\n{\n    return true;\n}",
      "return v < 0;"
    ],
    answer: "C",
    explanation: "The method can return `true` as soon as it finds a negative value, but it may return `false` only after checking every element. The other choices can return before every element has been checked; for example, each of them returns `false` for `{3, -1, 4}` after looking only at 3."
  },
  {
    id: "4.5-07",
    prompt: "The following method is intended to return `true` if every element of `arr` is even. Which of the following best describes what the method actually returns?",
    code: `
      /** Precondition: arr.length > 0 */
      public static boolean allEven(int[] arr)
      {
          boolean result = false;
          for (int v : arr)
          {
              if (v % 2 == 0)
              {
                  result = true;
              }
              else
              {
                  result = false;
              }
          }
          return result;
      }
    `,
    choices: [
      "`true` exactly when every element is even",
      "`true` exactly when at least one element is even",
      "`true` exactly when the last element is even",
      "`false` for every array"
    ],
    answer: "C",
    explanation: "`result` is overwritten on every pass, so only the test of the last element survives. For example, `{3, 4}` returns `true` even though 3 is odd. A correct version would start with `true` and only ever change it to `false`, or return `false` immediately."
  },
  {
    id: "4.5-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] a = {2, 2, 3, 3, 3, 1};
      int count = 0;
      for (int i = 0; i < a.length - 1; i++)
      {
          if (a[i] == a[i + 1])
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "B",
    explanation: "The code counts adjacent pairs with equal values: indices 0 and 1, 2 and 3, and 3 and 4. That is 3 pairs. Answering 2 counts groups of repeated values instead of pairs."
  },
  {
    id: "4.5-09",
    prompt: "The method `isSorted` is intended to return `true` if the elements of `arr` are in increasing order (each element is less than or equal to the next) and `false` otherwise. Which of the following can replace `/* missing loop header */` so that the method works as intended?",
    code: `
      public static boolean isSorted(int[] arr)
      {
          /* missing loop header */
          {
              if (arr[k] > arr[k + 1])
              {
                  return false;
              }
          }
          return true;
      }
    `,
    choices: [
      "`for (int k = 0; k < arr.length; k++)`",
      "`for (int k = 0; k < arr.length - 1; k++)`",
      "`for (int k = 1; k < arr.length - 1; k++)`",
      "`for (int k = 1; k <= arr.length; k++)`"
    ],
    answer: "B",
    explanation: "The body uses `arr[k + 1]`, so `k` must stop at `arr.length - 2`. Using `k < arr.length` makes `arr[k + 1]` go out of bounds, and starting at 1 skips the pair at indices 0 and 1."
  },
  {
    id: "4.5-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] words = {"cat", "dog", "cat", "emu", "dog"};
      int dup = 0;
      for (int i = 0; i < words.length; i++)
      {
          for (int j = i + 1; j < words.length; j++)
          {
              if (words[i].equals(words[j]))
              {
                  dup++;
              }
          }
      }
      System.out.println(dup);
    `,
    choices: [
      "2",
      "4",
      "7",
      "9"
    ],
    answer: "A",
    explanation: "Because `j` starts at `i + 1`, each pair of positions is compared once and no element is compared with itself. The matching pairs are the two \"cat\" values and the two \"dog\" values. Starting `j` at 0 would count each match twice and also count self-matches, giving 9."
  },
  {
    id: "4.5-11",
    prompt: "The method `containsDuplicate` is intended to return `true` if any value appears more than once in `arr` and `false` otherwise. Which of the following can replace `/* missing loop header */` so that the method works as intended?",
    code: `
      public static boolean containsDuplicate(int[] arr)
      {
          for (int i = 0; i < arr.length; i++)
          {
              /* missing loop header */
              {
                  if (arr[i] == arr[j])
                  {
                      return true;
                  }
              }
          }
          return false;
      }
    `,
    choices: [
      "`for (int j = 0; j < arr.length; j++)`",
      "`for (int j = i; j < arr.length; j++)`",
      "`for (int j = i + 1; j < arr.length - 1; j++)`",
      "`for (int j = i + 1; j < arr.length; j++)`"
    ],
    answer: "D",
    explanation: "Each element must be compared with every later element, but never with itself. Headers that let `j` equal `i` compare an element with itself and always return `true`, and stopping at `arr.length - 1` never checks the last element."
  },
  {
    id: "4.5-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] arr = {1, 2, 3, 4, 5};
      int first = arr[0];
      for (int i = 0; i < arr.length - 1; i++)
      {
          arr[i] = arr[i + 1];
      }
      arr[arr.length - 1] = first;
      for (int v : arr)
      {
          System.out.print(v + " ");
      }
    `,
    choices: [
      "2 3 4 5 1",
      "5 1 2 3 4",
      "2 3 4 5 5",
      "1 1 1 1 1"
    ],
    answer: "A",
    explanation: "Each element is copied one position to the left, and the saved first value is placed at the end, rotating the array left by one. Without saving `first`, the last position would still hold 5."
  },
  {
    id: "4.5-13",
    prompt: "Assume `arr` is an `int` array with at least two elements. Which of the following code segments rotates the elements of `arr` one position to the right, so that `{1, 2, 3, 4, 5}` becomes `{5, 1, 2, 3, 4}`?",
    choices: [
      "int last = arr[arr.length - 1];\nfor (int i = 1; i < arr.length; i++)\n{\n    arr[i] = arr[i - 1];\n}\narr[0] = last;",
      "int last = arr[arr.length - 1];\nfor (int i = arr.length - 1; i > 0; i--)\n{\n    arr[i] = arr[i - 1];\n}\narr[0] = last;",
      "for (int i = arr.length - 1; i > 0; i--)\n{\n    arr[i] = arr[i - 1];\n}\narr[0] = arr[arr.length - 1];",
      "int last = arr[arr.length - 1];\nfor (int i = arr.length - 1; i >= 0; i--)\n{\n    arr[i] = arr[i - 1];\n}\narr[0] = last;"
    ],
    answer: "B",
    explanation: "Shifting right must go from the end toward the front so each value is copied before it is overwritten, and the last value must be saved first. Going left to right copies the first value everywhere, not saving `last` loses the 5, and `i >= 0` accesses `arr[-1]`."
  },
  {
    id: "4.5-14",
    prompt: "The following code segment is intended to reverse the elements of `a`. What is printed as a result of executing the code segment?",
    code: `
      int[] a = {1, 2, 3, 4, 5, 6};
      for (int i = 0; i < a.length; i++)
      {
          int temp = a[i];
          a[i] = a[a.length - 1 - i];
          a[a.length - 1 - i] = temp;
      }
      for (int v : a)
      {
          System.out.print(v + " ");
      }
    `,
    choices: [
      "6 5 4 3 2 1",
      "6 5 4 4 5 6",
      "1 2 3 3 2 1",
      "1 2 3 4 5 6"
    ],
    answer: "D",
    explanation: "The swap itself is correct, but the loop runs over the whole array. The first half of the passes reverses the array and the second half swaps each pair back, so the array ends up unchanged. The loop should stop at `a.length / 2`."
  },
  {
    id: "4.5-15",
    prompt: "The following code segment is intended to reverse the elements of `a`. What is printed as a result of executing the code segment?",
    code: `
      int[] a = {1, 2, 3, 4, 5};
      for (int i = 0; i < a.length / 2; i++)
      {
          a[i] = a[a.length - 1 - i];
          a[a.length - 1 - i] = a[i];
      }
      for (int v : a)
      {
          System.out.print(v + " ");
      }
    `,
    choices: [
      "5 4 3 2 1",
      "1 2 3 2 1",
      "5 4 3 4 5",
      "1 2 3 4 5"
    ],
    answer: "C",
    explanation: "Without a temporary variable, the first assignment overwrites `a[i]`, so the second assignment just copies the new value back. The front half becomes 5 4 and the back half keeps 4 5. A correct swap saves `a[i]` in a temporary variable first."
  },
  {
    id: "4.5-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double[] temps = {2.5, -1.0, 4.0, 0.0, 1.5};
      double total = 0.0;
      int count = 0;
      for (double t : temps)
      {
          if (t > 0)
          {
              total += t;
              count++;
          }
      }
      System.out.println(total / count);
    `,
    choices: [
      "1.4",
      "2.0",
      "1.75",
      "2.6666666666666665"
    ],
    answer: "D",
    explanation: "Only 2.5, 4.0, and 1.5 are positive; 0.0 is not greater than 0. Their total is 8.0 and the count is 3, and because `total` is a `double`, 8.0 / 3 is about 2.67. Answering 2.0 wrongly counts the 0.0 element."
  },
  {
    id: "4.5-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] names = {"Maya", "Eli", "Zoe", "Ben", "Rory"};
      String best = names[0];
      for (String n : names)
      {
          if (n.compareTo(best) < 0)
          {
              best = n;
          }
      }
      System.out.println(best);
    `,
    choices: [
      "Ben",
      "Zoe",
      "Maya",
      "Eli"
    ],
    answer: "A",
    explanation: "`n.compareTo(best) < 0` is true when `n` comes before `best` alphabetically, so the loop finds the alphabetically first name, \"Ben\". Answering \"Zoe\" reverses the meaning of a negative `compareTo` result."
  },
  {
    id: "4.5-18",
    prompt: "The method `findMax` is intended to return the largest value in a nonempty `int` array. Which of the following can replace `/* initialization */` so that the method works as intended for every nonempty array?",
    code: `
      public static int findMax(int[] arr)
      {
          /* initialization */
          for (int v : arr)
          {
              if (v > max)
              {
                  max = v;
              }
          }
          return max;
      }

      I.   int max = 0;
      II.  int max = arr[0];
      III. int max = Integer.MIN_VALUE;
    `,
    choices: [
      "II only",
      "III only",
      "II and III only",
      "I, II, and III"
    ],
    answer: "C",
    explanation: "Starting at `arr[0]` or at `Integer.MIN_VALUE` guarantees that the true maximum replaces or equals the starting value. Starting at 0 fails when every element is negative, because the method would return 0."
  },
  {
    id: "4.5-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] a = {1, 1, 2, 2, 2, 3, 2, 2};
      int best = 1;
      int run = 1;
      for (int i = 1; i < a.length; i++)
      {
          if (a[i] == a[i - 1])
          {
              run++;
              if (run > best)
              {
                  best = run;
              }
          }
          else
          {
              run = 1;
          }
      }
      System.out.println(best);
    `,
    choices: [
      "5",
      "3",
      "2",
      "4"
    ],
    answer: "B",
    explanation: "The code finds the length of the longest run of equal adjacent values. The run of three 2s at indices 2 to 4 is longest; the 3 resets `run`, so the final two 2s form a separate run. Answering 5 counts all the 2s."
  },
  {
    id: "4.5-20",
    prompt: "The method `allPositive` is intended to return `true` if every element of `arr` is positive and `false` otherwise. For which of the following arrays does the method NOT return the intended value?",
    code: `
      public static boolean allPositive(int[] arr)
      {
          for (int v : arr)
          {
              if (v > 0)
              {
                  return true;
              }
          }
          return false;
      }
    `,
    choices: [
      "`{3, 5, 7}`",
      "`{-2, -4}`",
      "`{-3, -1, 0}`",
      "`{4, -1, 6}`"
    ],
    answer: "D",
    explanation: "The method returns `true` as soon as it finds one positive element, so it actually checks whether any element is positive. For `{4, -1, 6}` it returns `true` immediately even though -1 is not positive. To check all elements, it should return `false` on a non-positive value and `true` after the loop."
  }
]);

defineTopic(4, "4.6", "Using Text Files", [
  {
    id: "4.6-01",
    prompt: "Assume `java.io.File` and `java.util.Scanner` are imported and the enclosing method is declared with `throws IOException`. Which of the following statements creates a `Scanner` that reads the contents of the file `data.txt`?",
    choices: [
      "`Scanner in = new Scanner(\"data.txt\");`",
      "`Scanner in = new Scanner(new File(\"data.txt\"));`",
      "`File in = new Scanner(\"data.txt\");`",
      "`Scanner in = new File(\"data.txt\");`"
    ],
    answer: "B",
    explanation: "A `Scanner` reads a file when it is constructed with a `File` object, which is created from the file's name. Passing the name as a `String` does not open the file, and the other choices mix up the `File` and `Scanner` types."
  },
  {
    id: "4.6-02",
    prompt: "The file `nums.txt` contains the three lines shown in the comment. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What is printed as a result of executing the code segment?",
    code: `
      // Contents of nums.txt:
      // 4 7
      // 2
      // 9 1

      Scanner input = new Scanner(new File("nums.txt"));
      int sum = 0;
      while (input.hasNext())
      {
          sum += input.nextInt();
      }
      input.close();
      System.out.println(sum);
    `,
    choices: [
      "23",
      "11",
      "13",
      "4"
    ],
    answer: "A",
    explanation: "`nextInt` reads one whitespace-separated token at a time, and line breaks count as whitespace. The loop reads all five numbers, 4 + 7 + 2 + 9 + 1 = 23, until `hasNext` returns `false`."
  },
  {
    id: "4.6-03",
    prompt: "Which of the following best explains why a program might read its data from a text file instead of having the values written directly in the program code?",
    choices: [
      "Reading from a file is the only way for a program to use `String` values.",
      "Data in a file is automatically sorted when the program reads it.",
      "Data in a file persists when the program is not running, so it can be updated separately and retrieved each time the program runs.",
      "A file stores data only while the program is running, so it uses less memory."
    ],
    answer: "C",
    explanation: "A file is storage for data that persists when the program is not running, and its data can be retrieved during execution. Files do not sort data, and their contents remain after the program ends."
  },
  {
    id: "4.6-04",
    prompt: "Which of the following statements about reading a file with the `Scanner` method `nextLine` is true?",
    choices: [
      "`nextLine` returns only the next word on the current line.",
      "If `nextLine` is called immediately after another `Scanner` method, such as `nextInt`, on the same file, it can return the empty string, because the methods handle whitespace differently.",
      "`nextLine` cannot be used to read from a file.",
      "`nextLine` skips any line that contains a number."
    ],
    answer: "B",
    explanation: "`nextLine` returns the rest of the current line. Other `Scanner` methods stop right after the item they read, so a following `nextLine` may return only the empty remainder of that line, and code that uses both has to adjust for this."
  },
  {
    id: "4.6-05",
    prompt: "A program creates a `File` object and has a method declared with `throws IOException`. Which of the following import statements make both the `File` class and the `IOException` class available to the program?",
    choices: [
      "import java.util.File;\nimport java.util.IOException;",
      "import java.lang.File;\nimport java.lang.IOException;",
      "import java.io.File;",
      "import java.io.File;\nimport java.io.IOException;"
    ],
    answer: "D",
    explanation: "`File` and `IOException` are both in the `java.io` package, and each must be imported. Only `java.lang` classes, such as `String` and `Math`, are available without an import, so importing `File` alone does not make `IOException` available."
  },
  {
    id: "4.6-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String line = "Lee,Ana,17,B";
      String[] fields = line.split(",");
      System.out.println(fields.length + " " + fields[2]);
    `,
    choices: [
      "4 17",
      "3 17",
      "4 Ana",
      "12 17"
    ],
    answer: "A",
    explanation: "Splitting on commas produces four strings: \"Lee\", \"Ana\", \"17\", and \"B\". Index 2 is the third field, \"17\". Answering 3 counts the commas rather than the pieces between them."
  },
  {
    id: "4.6-07",
    prompt: "The file `temps.txt` contains the lines shown in the comment. The first line tells how many values follow. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What is printed as a result of executing the code segment?",
    code: `
      // Contents of temps.txt:
      // 4
      // 61.5
      // 70.0
      // 58.5
      // 66.0

      Scanner in = new Scanner(new File("temps.txt"));
      int n = in.nextInt();
      double[] temps = new double[n];
      for (int i = 0; i < n; i++)
      {
          temps[i] = in.nextDouble();
      }
      in.close();
      System.out.println(temps[n - 1] - temps[0]);
    `,
    choices: [
      "62.0",
      "-4.5",
      "4.5",
      "11.5"
    ],
    answer: "C",
    explanation: "The count 4 is read first, so `temps` holds 61.5, 70.0, 58.5, and 66.0. The last minus the first is 66.0 - 61.5 = 4.5. Answering 62.0 wrongly treats the count 4 as `temps[0]`."
  },
  {
    id: "4.6-08",
    prompt: "The file `words.txt` contains the lines shown in the comment. The code segment is intended to count the words in the file and print 3. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. Which of the following can replace `/* missing condition */` so that the code segment works as intended?",
    code: `
      // Contents of words.txt:
      // apple banana
      // cherry

      Scanner in = new Scanner(new File("words.txt"));
      int count = 0;
      while (/* missing condition */)
      {
          in.next();
          count++;
      }
      in.close();
      System.out.println(count);
    `,
    choices: [
      "`in.next() != null`",
      "`in != null`",
      "`!in.hasNext()`",
      "`in.hasNext()`"
    ],
    answer: "D",
    explanation: "`hasNext` checks whether another item is available without reading it. With `!in.hasNext()` the loop never runs and 0 is printed, and the other conditions either read input themselves or never become `false`, so `next` is eventually called with nothing left and an exception is thrown."
  },
  {
    id: "4.6-09",
    prompt: "The file `vals.txt` contains the single line shown in the comment. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What is printed as a result of executing the code segment?",
    code: `
      // Contents of vals.txt:
      // 5 2.5 7

      Scanner in = new Scanner(new File("vals.txt"));
      int a = in.nextInt();
      double b = in.nextDouble();
      double c = in.nextDouble();
      in.close();
      System.out.println(a + b + c);
    `,
    choices: [
      "14.5",
      "14.0",
      "14",
      "An exception is thrown when 7 is read."
    ],
    answer: "A",
    explanation: "`nextDouble` can read a token written as a whole number, so 7 is read as 7.0. The sum 5 + 2.5 + 7.0 is the `double` value 14.5."
  },
  {
    id: "4.6-10",
    prompt: "The file `data.txt` contains the single line shown in the comment. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What happens when the code segment is executed?",
    code: `
      // Contents of data.txt:
      // 10 3.5 4

      Scanner in = new Scanner(new File("data.txt"));
      int total = 0;
      while (in.hasNext())
      {
          total += in.nextInt();
      }
      in.close();
      System.out.println(total);
    `,
    choices: [
      "17 is printed.",
      "17.5 is printed.",
      "14 is printed.",
      "An exception is thrown when the token 3.5 is read."
    ],
    answer: "D",
    explanation: "`nextInt` requires the next token to be an integer. The token 3.5 is not, so `nextInt` throws an exception instead of rounding or skipping it."
  },
  {
    id: "4.6-11",
    prompt: "Which of the following best explains why a program should call `close` on a `Scanner` that reads from a file once it has finished reading?",
    choices: [
      "It deletes the file so that it is not read twice.",
      "It releases the file and other system resources that the `Scanner` was using.",
      "It saves any changes the program made to the file.",
      "The code will not compile unless `close` is called."
    ],
    answer: "B",
    explanation: "Closing a `Scanner` releases the resources connected to the file it was reading. It does not delete or save the file, and leaving it open is not a compile-time error."
  },
  {
    id: "4.6-12",
    prompt: "Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. No file named `missing.txt` exists. What happens when the following statement is executed?",
    code: `
      Scanner in = new Scanner(new File("missing.txt"));
    `,
    choices: [
      "A `Scanner` is created, and its `hasNext` method returns `false`.",
      "An empty file named `missing.txt` is created.",
      "An exception is thrown because the file cannot be opened, and the program terminates.",
      "The statement causes a compile-time error."
    ],
    answer: "C",
    explanation: "When the file name is invalid, the file cannot be opened, so an `IOException` is thrown and the program terminates. The statement compiles because the method header declares `throws IOException`."
  },
  {
    id: "4.6-13",
    prompt: "The file `colors.txt` contains the two lines shown in the comment, and `in` has been declared as `Scanner in = new Scanner(new File(\"colors.txt\"));`. Assume each code segment is executed with a newly created `in`. Which of the following code segments print 3, the number of words in the file?",
    code: `
      // Contents of colors.txt:
      // red green
      // blue

      I.
      int count = 0;
      while (in.hasNext())
      {
          in.next();
          count++;
      }
      System.out.println(count);

      II.
      int count = 0;
      while (in.hasNext())
      {
          in.nextLine();
          count++;
      }
      System.out.println(count);

      III.
      int count = 0;
      while (in.hasNext())
      {
          String[] words = in.nextLine().split(" ");
          count += words.length;
      }
      System.out.println(count);
    `,
    choices: [
      "I only",
      "II only",
      "I and III only",
      "I, II, and III"
    ],
    answer: "C",
    explanation: "I counts tokens one at a time, and III splits each line into words and adds the number of words on that line. II counts lines, so it prints 2."
  },
  {
    id: "4.6-14",
    prompt: "The file `items.txt` contains the three lines shown in the comment. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What is printed as a result of executing the code segment?",
    code: `
      // Contents of items.txt:
      // pen 3
      // notebook 2
      // eraser 5

      Scanner in = new Scanner(new File("items.txt"));
      String best = "";
      int most = 0;
      while (in.hasNext())
      {
          String name = in.next();
          int qty = in.nextInt();
          if (qty > most)
          {
              most = qty;
              best = name;
          }
      }
      in.close();
      System.out.println(best + " " + most);
    `,
    choices: [
      "pen 3",
      "eraser 5",
      "notebook 2",
      "An exception is thrown."
    ],
    answer: "B",
    explanation: "Each pass reads a name with `next` and a quantity with `nextInt`, so the tokens stay in step. The largest quantity is 5, which belongs to \"eraser\"."
  },
  {
    id: "4.6-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String line = "Kim, 90, 85";
      String[] parts = line.split(",");
      System.out.println("[" + parts[1] + "]");
    `,
    choices: [
      "[ 90]",
      "[90]",
      "[90,]",
      "[Kim]"
    ],
    answer: "A",
    explanation: "`split(\",\")` divides the string only at the commas, so the space after each comma stays in the next piece and `parts[1]` is \" 90\". The brackets in the output make the leading space visible."
  },
  {
    id: "4.6-16",
    prompt: "Assume `java.io.File` and `java.util.Scanner` are imported. The following method does not compile. Which of the following changes will allow it to compile and work as intended?",
    code: `
      /** Returns the number of words in the file named fileName */
      public static int countWords(String fileName)
      {
          Scanner in = new Scanner(new File(fileName));
          int count = 0;
          while (in.hasNext())
          {
              in.next();
              count++;
          }
          in.close();
          return count;
      }
    `,
    choices: [
      "Replace `new File(fileName)` with `fileName`.",
      "Change the return type of the method to `void`.",
      "Remove the statement `in.close();`.",
      "Import `java.io.IOException` and add `throws IOException` to the method header."
    ],
    answer: "D",
    explanation: "Because a file with the given name might not be openable, the method must say what to do in that case, and adding `throws IOException` (with `IOException` imported from `java.io`) does this. The other changes do not address this requirement."
  },
  {
    id: "4.6-17",
    prompt: "The file `pairs.txt` contains the three lines shown in the comment. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What happens when the code segment is executed?",
    code: `
      // Contents of pairs.txt:
      // 3 4
      // 5 6
      // 7

      Scanner in = new Scanner(new File("pairs.txt"));
      while (in.hasNext())
      {
          int a = in.nextInt();
          int b = in.nextInt();
          System.out.print(a * b + " ");
      }
      in.close();
    `,
    choices: [
      "12 30 7 is printed.",
      "15 28 is printed.",
      "12 30 is printed, and then an exception is thrown.",
      "12 30 is printed, and the program ends normally."
    ],
    answer: "C",
    explanation: "`hasNext` only guarantees one more token. On the third pass 7 is read into `a`, and the second `nextInt` finds no token left, so an exception is thrown after 12 and 30 have been printed."
  },
  {
    id: "4.6-18",
    prompt: "The file `flags.txt` contains the three lines shown in the comment. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. What is printed as a result of executing the code segment?",
    code: `
      // Contents of flags.txt:
      // true 4
      // false 9
      // true 2

      Scanner in = new Scanner(new File("flags.txt"));
      int total = 0;
      while (in.hasNext())
      {
          boolean keep = in.nextBoolean();
          int value = in.nextInt();
          if (keep)
          {
              total += value;
          }
      }
      in.close();
      System.out.println(total);
    `,
    choices: [
      "15",
      "9",
      "13",
      "6"
    ],
    answer: "D",
    explanation: "Each line is read as a `boolean` followed by an `int`. Only the values on lines marked `true`, 4 and 2, are added, so 6 is printed."
  },
  {
    id: "4.6-19",
    prompt: "Each line of the file `team.txt` has a player's name and team color separated by a comma, such as `Mia,Red`. The code segment is intended to print the names of all players on the Red team. Assume the necessary imports are present and the enclosing method is declared with `throws IOException`. Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    code: `
      Scanner in = new Scanner(new File("team.txt"));
      while (in.hasNext())
      {
          String line = in.nextLine();
          String[] parts = line.split(",");
          /* missing code */
          {
              System.out.println(parts[0]);
          }
      }
      in.close();
    `,
    choices: [
      "`if (parts[2].equals(\"Red\"))`",
      "`if (parts[1].equals(\"Red\"))`",
      "`if (parts[1] == \"Red\")`",
      "`if (line.equals(\"Red\"))`"
    ],
    answer: "B",
    explanation: "Splitting `Mia,Red` on the comma gives `parts[0]` \"Mia\" and `parts[1]` \"Red\", and strings are compared with `equals`. There is no `parts[2]`, `==` compares references rather than the characters, and a whole line never equals \"Red\"."
  },
  {
    id: "4.6-20",
    prompt: "Assume `java.io.File` has been imported and the `String` variable `path` holds the pathname of a text file, such as `\"data/scores.txt\"`. Which of the following statements creates a `File` object for that file?",
    choices: [
      "`File f = new File(path);`",
      "`File f = new File(\"path\");`",
      "`File f = path;`",
      "`File f = new File();`"
    ],
    answer: "A",
    explanation: "The `File` constructor takes the file's pathname as a `String` argument, here the value of `path`. Writing `\"path\"` in quotes names a file literally called path, a `String` cannot be assigned to a `File` variable, and the constructor needs a pathname."
  }
]);

defineTopic(4, "4.7", "Wrapper Classes", [
  {
    id: "4.7-01",
    prompt: "Which of the following statements is an example of autoboxing?",
    choices: [
      "`int total = 12;`",
      "`Integer count = 12;`",
      "`double rate = 12;`",
      "`String label = \"12\";`"
    ],
    answer: "B",
    explanation: "Autoboxing is the automatic conversion of a primitive value into its wrapper object, so the `int` 12 becomes an `Integer` object. Assigning 12 to a `double` is a widening conversion between primitive types, not boxing."
  },
  {
    id: "4.7-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String s = "42";
      int n = Integer.parseInt(s);
      System.out.println(n + 8);
    `,
    choices: [
      "50",
      "428",
      "4",
      "A `NumberFormatException` is thrown."
    ],
    answer: "A",
    explanation: "`Integer.parseInt(\"42\")` returns the `int` value 42, so `n + 8` is numeric addition and gives 50. The result 428 would come from concatenating the `String` \"42\" with 8."
  },
  {
    id: "4.7-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String a = "3";
      String b = "4";
      System.out.println(a + b);
      System.out.println(Integer.parseInt(a) + Integer.parseInt(b));
    `,
    choices: [
      "7\n7",
      "34\n34",
      "7\n34",
      "34\n7"
    ],
    answer: "D",
    explanation: "Using `+` on two `String` values concatenates them, giving \"34\". After `Integer.parseInt` converts each `String` to an `int`, `+` adds the numbers and gives 7."
  },
  {
    id: "4.7-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double d = Double.parseDouble("2.5") * 2;
      String s = "2.5" + 2;
      System.out.println(d + " " + s);
    `,
    choices: [
      "5.0 5.0",
      "2.52 2.52",
      "5.0 2.52",
      "5 2.52"
    ],
    answer: "C",
    explanation: "`Double.parseDouble(\"2.5\")` returns the `double` 2.5, so `d` is 5.0. Without parsing, `\"2.5\" + 2` is string concatenation and gives \"2.52\"."
  },
  {
    id: "4.7-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int n = Integer.parseInt("7");
      double d = Double.parseDouble("2");
      System.out.println(n / 2 + d);
    `,
    choices: [
      "5.0",
      "5.5",
      "5",
      "72"
    ],
    answer: "A",
    explanation: "`n / 2` uses two `int` values, so it is integer division and gives 3. Adding the `double` 2.0 gives 5.0. The answer 5.5 forgets that the division happens before `d` is involved."
  },
  {
    id: "4.7-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      Integer count = 5;
      Integer saved = count;
      count = count + 1;
      System.out.println(saved + " " + count);
    `,
    choices: [
      "6 6",
      "5 5",
      "5 6",
      "6 5"
    ],
    answer: "C",
    explanation: "An `Integer` object is immutable, so `count + 1` cannot change the object holding 5. Instead the result 6 is boxed into a new `Integer` and assigned to `count`, while `saved` still refers to the object holding 5."
  },
  {
    id: "4.7-07",
    prompt: "Which of the following statements about the `Integer` and `Double` classes is true?",
    choices: [
      "They are in the `java.util` package, so they must be imported before they can be used.",
      "They are in the `java.lang` package, and once an `Integer` or `Double` object is created, its value cannot be changed.",
      "An `Integer` object's value can be changed by calling one of its methods, but a `Double` object's value cannot.",
      "They can store only positive values."
    ],
    answer: "B",
    explanation: "`Integer` and `Double` are part of `java.lang`, which is available without an import, and their objects are immutable. To get a different value, a new object must be created."
  },
  {
    id: "4.7-08",
    prompt: "Consider the following method. Which of the following best describes what happens when the call `printNext(4)` is executed?",
    code: `
      public static void printNext(Integer n)
      {
          System.out.println(n + 1);
      }
    `,
    choices: [
      "The call does not compile, because 4 is an `int` and the parameter is an `Integer`.",
      "The `int` value 4 is converted to the `String` \"4\", and 41 is printed.",
      "The `Integer` parameter is autoboxed into an `int`, and 5 is printed.",
      "The `int` value 4 is autoboxed into an `Integer` object when it is passed to the parameter, and 5 is printed."
    ],
    answer: "D",
    explanation: "The compiler autoboxes a primitive value passed to a parameter of the matching wrapper type, so 4 becomes an `Integer`. Inside the method, `n + 1` unboxes it, and 5 is printed. Converting an `Integer` to an `int` is unboxing, not autoboxing."
  },
  {
    id: "4.7-09",
    prompt: "What happens when the following code segment is executed?",
    code: `
      Integer score = null;
      int total = score + 5;
      System.out.println(total);
    `,
    choices: [
      "A `NullPointerException` is thrown.",
      "5 is printed.",
      "null5 is printed.",
      "The code does not compile."
    ],
    answer: "A",
    explanation: "To compute `score + 5`, Java unboxes `score` into an `int`. Unboxing a `null` reference throws a `NullPointerException`; Java does not treat `null` as 0."
  },
  {
    id: "4.7-10",
    prompt: "Consider the following statements, which appear in this order in a method. Which of the statements compile without error?",
    code: `
      I.   Integer a = 7;
      II.  double d = a;
      III. Double x = 7;
    `,
    choices: [
      "I only",
      "I and II only",
      "I and III only",
      "I, II, and III"
    ],
    answer: "B",
    explanation: "Statement I autoboxes 7 into an `Integer`. Statement II unboxes `a` to the `int` 7 and widens it to the `double` 7.0. Statement III does not compile because the `int` 7 can be boxed only into an `Integer`, not a `Double`; it would need to be written as 7.0."
  },
  {
    id: "4.7-11",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static double twice(double x)
      {
          return 2 * x;
      }

      // code segment in another method
      Double price = 2.5;
      double result = twice(price);
      System.out.println(result);
    `,
    choices: [
      "5",
      "2.52.5",
      "The code does not compile.",
      "5.0"
    ],
    answer: "D",
    explanation: "When the `Double` object `price` is passed to a parameter of type `double`, it is unboxed to the primitive value 2.5. The method returns the `double` 5.0, which prints with a decimal point."
  },
  {
    id: "4.7-12",
    prompt: "Consider the following method. What is printed as a result of executing the code segment below it?",
    code: `
      public static Integer half(int n)
      {
          return n / 2;
      }

      Integer a = half(9);
      int b = a + half(5);
      System.out.println(b);
    `,
    choices: [
      "7",
      "6.5",
      "6",
      "7.0"
    ],
    answer: "C",
    explanation: "`9 / 2` is 4 and `5 / 2` is 2 because of integer division, and each result is autoboxed into an `Integer`. Both are unboxed for the addition, so `b` is 6."
  },
  {
    id: "4.7-13",
    prompt: "Which of the following best describes unboxing?",
    choices: [
      "Converting a `String` such as \"5\" into the `int` value 5",
      "Automatically converting an `int` value into an `Integer` object",
      "Automatically converting an `Integer` object into an `int` value",
      "Using a cast to convert a `double` value into an `int` value"
    ],
    answer: "C",
    explanation: "Unboxing is the automatic conversion from a wrapper object to its primitive value, such as `Integer` to `int`. The reverse direction is autoboxing, and converting a `String` requires `Integer.parseInt`."
  },
  {
    id: "4.7-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String data = "8,15,4";
      String[] parts = data.split(",");
      int total = 0;
      for (String p : parts)
      {
          total += Integer.parseInt(p);
      }
      System.out.println(total);
    `,
    choices: [
      "27",
      "8154",
      "3",
      "8"
    ],
    answer: "A",
    explanation: "`Integer.parseInt` converts each piece, \"8\", \"15\", and \"4\", to an `int`, so the numbers are added: 8 + 15 + 4 = 27. Concatenating the strings would give 8154, and 3 is the number of pieces."
  },
  {
    id: "4.7-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      Integer a = 7;
      Integer b = 2;
      double result = a / b;
      System.out.println(result);
    `,
    choices: [
      "3.5",
      "3",
      "4.0",
      "3.0"
    ],
    answer: "D",
    explanation: "`a` and `b` are unboxed to `int` values, so `a / b` is integer division and gives 3. Only then is 3 widened to the `double` 3.0. Storing the result in a `double` does not change how the division is done."
  },
  {
    id: "4.7-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[] tokens = {"12", "3.5", "4"};
      double total = 0;
      for (String t : tokens)
      {
          total += Double.parseDouble(t);
      }
      System.out.println(total);
    `,
    choices: [
      "19",
      "19.5",
      "123.54",
      "A `NumberFormatException` is thrown."
    ],
    answer: "B",
    explanation: "`Double.parseDouble` accepts strings with or without a decimal point, so the values are 12.0, 3.5, and 4.0, which sum to 19.5. The numbers are added, not concatenated, because `total` is a `double`."
  },
  {
    id: "4.7-17",
    prompt: "Consider the following method. What is printed as a result of executing the code segment below it?",
    code: `
      public static Integer findFirstEven(int[] arr)
      {
          for (int v : arr)
          {
              if (v % 2 == 0)
              {
                  return v;
              }
          }
          return null;
      }

      int[] data = {3, 5, 7};
      Integer result = findFirstEven(data);
      System.out.println(result);
    `,
    choices: [
      "null",
      "0",
      "A `NullPointerException` is thrown.",
      "The code does not compile."
    ],
    answer: "A",
    explanation: "No element is even, so the method returns `null`, which an `Integer` variable can hold. Printing a `null` reference displays null. A `NullPointerException` would occur only if `result` were unboxed, for example by assigning it to an `int`."
  },
  {
    id: "4.7-18",
    prompt: "Consider the following code segment. Which of the following can replace `/* missing code */` so that `num` is assigned the `int` value 250?",
    code: `
      String str = "250";
      int num = /* missing code */;
    `,
    choices: [
      "`(int) str`",
      "`str.length()`",
      "`Integer.parseInt(str)`",
      "`Integer.parseInt(\"str\")`"
    ],
    answer: "C",
    explanation: "`Integer.parseInt(str)` converts the `String` \"250\" to the `int` 250. A `String` cannot be cast to `int`, and `Integer.parseInt(\"str\")` tries to parse the letters s, t, r, which throws a `NumberFormatException`."
  },
  {
    id: "4.7-19",
    prompt: "Which of the following statements are examples of autoboxing?",
    code: `
      I.   Double price = 4.5;
      II.  double cost = 4.5;
      III. Integer n = 3;
    `,
    choices: [
      "I only",
      "II only",
      "I and II only",
      "I and III only"
    ],
    answer: "D",
    explanation: "Autoboxing happens when a primitive value is assigned to a variable of its wrapper class: 4.5 becomes a `Double` and 3 becomes an `Integer`. Statement II assigns a `double` value to a primitive `double` variable, so no wrapper object is involved."
  },
  {
    id: "4.7-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      Integer x = 7;
      int y = x;
      y++;
      System.out.println(x + " " + y);
    `,
    choices: [
      "8 8",
      "7 8",
      "7 7",
      "8 7"
    ],
    answer: "B",
    explanation: "Assigning `x` to the `int` variable `y` unboxes it, copying the value 7 into `y`. Incrementing `y` changes only the primitive variable, so `x` still holds 7."
  }
]);

defineTopic(4, "4.8", "ArrayList Methods", [
  {
    id: "4.8-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> names = new ArrayList<String>();
      names.add("Ann");
      names.add("Ben");
      names.add(0, "Cal");
      System.out.println(names);
    `,
    choices: [
      "[Ann, Ben, Cal]",
      "[Ann, Cal, Ben]",
      "[Cal, Ann, Ben]",
      "[Cal, Ben]"
    ],
    answer: "C",
    explanation: "`add(0, \"Cal\")` inserts at index 0 and shifts the existing elements to the right; it does not replace anything. Printing an `ArrayList` shows its elements in order inside square brackets."
  },
  {
    id: "4.8-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();
      nums.add(5);
      nums.add(8);
      nums.add(3);
      nums.remove(0);
      System.out.println(nums.size() + " " + nums.get(0));
    `,
    choices: [
      "2 8",
      "3 5",
      "2 5",
      "3 8"
    ],
    answer: "A",
    explanation: "`remove(0)` removes the element at index 0, which is 5, and the list shrinks to `[8, 3]`. The size is 2, and the element now at index 0 is 8."
  },
  {
    id: "4.8-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> colors = new ArrayList<String>();
      colors.add("red");
      colors.add("green");
      colors.add("blue");
      String old = colors.set(1, "gold");
      System.out.println(old + " " + colors);
    `,
    choices: [
      "gold [red, gold, blue]",
      "green [red, gold, green, blue]",
      "red [gold, green, blue]",
      "green [red, gold, blue]"
    ],
    answer: "D",
    explanation: "`set(1, \"gold\")` replaces the element at index 1 and returns the element that was there before, \"green\". Unlike `add`, `set` does not change the size of the list."
  },
  {
    id: "4.8-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> list = new ArrayList<Integer>();
      list.add(10);
      list.add(20);
      list.add(30);
      list.add(40);
      int x = list.remove(2);
      System.out.println(x + " " + list);
    `,
    choices: [
      "20 [10, 30, 40]",
      "30 [10, 20, 40]",
      "40 [10, 20, 30]",
      "2 [10, 20, 40]"
    ],
    answer: "B",
    explanation: "`remove(2)` removes the element at index 2, which is 30, and returns it. The remaining elements shift left to give `[10, 20, 40]`."
  },
  {
    id: "4.8-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> list = new ArrayList<Integer>();
      list.add(2);
      list.add(3);
      list.add(1);
      list.add(5);
      list.remove(1);
      System.out.println(list);
    `,
    choices: [
      "[2, 3, 5]",
      "[3, 1, 5]",
      "[2, 3, 1]",
      "[2, 1, 5]"
    ],
    answer: "D",
    explanation: "Because the argument 1 is an `int`, `remove(1)` removes the element at index 1, which is 3. It does not search for and remove the value 1, which is the misconception behind `[2, 3, 5]`."
  },
  {
    id: "4.8-06",
    prompt: "A programmer wants to write `ArrayList<String> words = new ArrayList<String>();` in a class. Which statement must appear at the top of the file for this to compile?",
    choices: [
      "`import java.util.ArrayList;`",
      "`import java.lang.ArrayList;`",
      "`import ArrayList;`",
      "No import is needed, because `ArrayList` is available automatically like `String`."
    ],
    answer: "A",
    explanation: "`ArrayList` is in the `java.util` package, which must be imported. Classes such as `String` and `Math` are in `java.lang`, which is the only package imported automatically."
  },
  {
    id: "4.8-07",
    prompt: "What happens when the following code segment is executed?",
    code: `
      ArrayList<String> list = new ArrayList<String>();
      list.add("x");
      list.add("y");
      list.add("z");
      System.out.println(list.get(list.size()));
    `,
    choices: [
      "z is printed.",
      "null is printed.",
      "An `IndexOutOfBoundsException` is thrown.",
      "The code does not compile."
    ],
    answer: "C",
    explanation: "The list has size 3, so its valid indices are 0, 1, and 2. `list.get(3)` is outside that range and throws an `IndexOutOfBoundsException`; the last element is `list.get(list.size() - 1)`."
  },
  {
    id: "4.8-08",
    prompt: "Assume that `list` is an `ArrayList<String>` containing `[a, b, c]`. Which of the following statements, each executed on its own starting from this list, will throw an `IndexOutOfBoundsException`?",
    code: `
      I.   list.add(3, "w");
      II.  list.set(3, "w");
      III. list.remove(3);
    `,
    choices: [
      "I only",
      "II and III only",
      "I and II only",
      "I, II, and III"
    ],
    answer: "B",
    explanation: "`add(index, obj)` may use an index from 0 through `size()`, so `add(3, \"w\")` appends to the end. `set` and `remove` need an existing element, so index 3 is out of bounds for both."
  },
  {
    id: "4.8-09",
    prompt: "Which of the following is a true statement about an `ArrayList` compared with an array?",
    choices: [
      "An `ArrayList` can grow and shrink as elements are added and removed.",
      "An `ArrayList` can store primitive `int` values directly.",
      "The number of elements in an `ArrayList` named `list` is `list.length`.",
      "The first element of an `ArrayList` named `list` is accessed with `list[0]`."
    ],
    answer: "A",
    explanation: "The size of an `ArrayList` changes as elements are added and removed, while an array's length is fixed when it is created. An `ArrayList` stores object references, uses `size()` for its size, and uses `get` instead of square brackets."
  },
  {
    id: "4.8-10",
    prompt: "Assume `words` is a nonempty `ArrayList<String>`. Which of the following expressions evaluates to the last element of `words`?",
    choices: [
      "`words.get(words.size())`",
      "`words[words.size() - 1]`",
      "`words.get(words.length - 1)`",
      "`words.get(words.size() - 1)`"
    ],
    answer: "D",
    explanation: "Indices run from 0 to `size() - 1`, so the last element is at `words.size() - 1`. Square brackets and `length` are array syntax and do not compile for an `ArrayList`, and `get(words.size())` throws an exception."
  },
  {
    id: "4.8-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> vals = new ArrayList<Integer>();
      vals.add(4);
      vals.add(7);
      vals.add(1, 2);
      vals.set(0, 9);
      vals.add(0, 5);
      System.out.println(vals);
    `,
    choices: [
      "[5, 4, 2, 7]",
      "[5, 9, 2, 7]",
      "[9, 5, 2, 7]",
      "[5, 9, 7, 2]"
    ],
    answer: "B",
    explanation: "The list goes from `[4, 7]` to `[4, 2, 7]` (insert 2 at index 1), then `[9, 2, 7]` (replace index 0), then `[5, 9, 2, 7]` (insert 5 at index 0)."
  },
  {
    id: "4.8-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();
      nums.add(6);
      nums.add(3);
      nums.add(8);
      int a = nums.set(2, nums.get(0));
      int b = nums.remove(0);
      System.out.println(a + b + " " + nums);
    `,
    choices: [
      "12 [3, 6]",
      "14 [3, 8]",
      "14 [3, 6]",
      "86 [3, 6]"
    ],
    answer: "C",
    explanation: "`set` returns the old value 8 and the list becomes `[6, 3, 6]`. `remove(0)` returns 6 and leaves `[3, 6]`. Since `a + b` is evaluated before the `String` is reached, it is the numeric sum 14."
  },
  {
    id: "4.8-13",
    prompt: "Assume `java.util.ArrayList` has been imported. Which of the following correctly declares and creates an empty list that can hold `Double` values?",
    choices: [
      "`ArrayList<Double> temps = new ArrayList<Double>();`",
      "`ArrayList<double> temps = new ArrayList<double>();`",
      "`ArrayList<Double> temps = ArrayList<Double>();`",
      "`ArrayList<Double> temps = new ArrayList<Double>[10];`"
    ],
    answer: "A",
    explanation: "An `ArrayList` object is created with `new` and a constructor call, and its type parameter must be a class such as `Double`. The other choices use a primitive type, omit `new`, or mix in array syntax."
  },
  {
    id: "4.8-14",
    prompt: "Consider the following method. What is printed as a result of executing the code segment below it?",
    code: `
      public static void addTwice(ArrayList<String> list, String s)
      {
          list.add(s);
          list.add(0, s);
      }

      ArrayList<String> letters = new ArrayList<String>();
      letters.add("m");
      addTwice(letters, "k");
      System.out.println(letters.size() + " " + letters);
    `,
    choices: [
      "1 [m]",
      "3 [m, k, k]",
      "2 [k, m]",
      "3 [k, m, k]"
    ],
    answer: "D",
    explanation: "The parameter `list` refers to the same `ArrayList` object as `letters`, so the changes made in the method are visible afterward. \"k\" is appended to the end and then inserted at the front, giving `[k, m, k]`."
  },
  {
    id: "4.8-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> letters = new ArrayList<String>();
      letters.add("A");
      letters.add("B");
      letters.add("C");
      letters.add("D");
      letters.add("E");
      letters.remove(1);
      letters.remove(2);
      System.out.println(letters);
    `,
    choices: [
      "[A, D, E]",
      "[A, C, D]",
      "[A, C, E]",
      "[C, D, E]"
    ],
    answer: "C",
    explanation: "After `remove(1)` takes out B, the list is `[A, C, D, E]`, so index 2 now holds D. The second call removes D. Choice `[A, D, E]` assumes the indices do not shift after the first removal."
  },
  {
    id: "4.8-16",
    prompt: "The `ArrayList<String>` named `items` contains `[pen, cup, map]`. Which of the following statements changes `items` to `[pen, hat, cup, map]`?",
    choices: [
      "`items.set(1, \"hat\");`",
      "`items.add(1, \"hat\");`",
      "`items.add(2, \"hat\");`",
      "`items.add(\"hat\");`"
    ],
    answer: "B",
    explanation: "`add(1, \"hat\")` inserts at index 1 and shifts cup and map to the right. `set(1, \"hat\")` would replace cup instead, and `add(\"hat\")` appends to the end."
  },
  {
    id: "4.8-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> list = new ArrayList<String>();
      list.add("a");
      list.remove(0);
      System.out.println(list + " " + list.size());
    `,
    choices: [
      "[] 0",
      "null 0",
      "[a] 1",
      "An `IndexOutOfBoundsException` is thrown."
    ],
    answer: "A",
    explanation: "After the only element is removed, the list is empty but still exists, so it prints as `[]` and its size is 0. The variable `list` is not `null`."
  },
  {
    id: "4.8-18",
    prompt: "The `ArrayList<String>` named `list` contains `[x, y, z]`. What does `list` contain after the following statement executes?",
    code: `
      list.set(0, list.set(2, list.get(0)));
    `,
    choices: [
      "[x, y, x]",
      "[z, y, z]",
      "[z, y, x]",
      "[x, y, z]"
    ],
    answer: "C",
    explanation: "The inner call `list.set(2, \"x\")` puts x at index 2 and returns the old value z. The outer call then sets index 0 to z, so the first and last elements are swapped."
  },
  {
    id: "4.8-19",
    prompt: "Consider the following code segment. Which line causes a compile-time error?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();   // line 1
      nums.add(5);                                          // line 2
      nums.add("9");                                        // line 3
      nums.add(0, 7);                                       // line 4
      int x = nums.get(1);                                  // line 5
    `,
    choices: [
      "Line 2",
      "Line 3",
      "Line 4",
      "Line 5"
    ],
    answer: "B",
    explanation: "`nums` holds only `Integer` objects, so adding the `String` \"9\" is a compile-time error. Line 2 autoboxes 5, and line 5 unboxes the `Integer` returned by `get` into an `int`."
  },
  {
    id: "4.8-20",
    prompt: "Assume `java.util.ArrayList` has been imported. Which of the following is true after the following statement executes?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();
    `,
    choices: [
      "`nums` is `null` until an element is added.",
      "`nums` contains 10 elements, each equal to 0.",
      "`nums.get(0)` returns 0.",
      "`nums` refers to an empty list, and `nums.size()` returns 0."
    ],
    answer: "D",
    explanation: "The constructor `ArrayList()` creates an empty list, so its size is 0. Unlike creating an array with `new`, it does not fill in default values, and `nums.get(0)` would throw an `IndexOutOfBoundsException`."
  }
]);

defineTopic(4, "4.9", "ArrayList Traversals", [
  {
    id: "4.9-01",
    prompt: "`list` is an `ArrayList<Integer>` containing `[2, 4, 4, 5]`. What does `list` contain after the following code segment executes?",
    code: `
      for (int i = 0; i < list.size(); i++)
      {
          if (list.get(i) % 2 == 0)
          {
              list.remove(i);
          }
      }
    `,
    choices: ["[5]", "[4, 5]", "[4, 4, 5]", "[2, 4, 5]"],
    answer: "B",
    explanation: "Removing an element shifts the later elements left, but `i` still increments, so the element moved into position `i` is skipped. After removing 2 the list is `[4, 4, 5]` and `i` is 1. After removing the 4 at index 1 the list is `[4, 5]` and `i` is 2, so the loop ends."
  },
  {
    id: "4.9-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> words = new ArrayList<String>();
      words.add("sun");
      words.add("moon");
      words.add("star");
      String result = "";
      for (int i = 0; i < words.size(); i++)
      {
          result += words.get(i).substring(0, 1);
      }
      System.out.println(result);
    `,
    choices: ["s", "sunmoonstar", "nnr", "sms"],
    answer: "D",
    explanation: "The loop visits indices 0, 1, and 2 and appends the first letter of each word, giving \"sms\". `substring(0, 1)` is the first character, not the last."
  },
  {
    id: "4.9-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();
      nums.add(3);
      nums.add(8);
      nums.add(2);
      int total = 0;
      for (int n : nums)
      {
          total += n;
      }
      System.out.println(total);
    `,
    choices: ["13", "3", "382", "2"],
    answer: "A",
    explanation: "The enhanced for loop assigns each element in turn to `n`, unboxing it to an `int`, and adds it to `total`: 3 + 8 + 2 = 13."
  },
  {
    id: "4.9-04",
    prompt: "What happens when the following code segment is executed?",
    code: `
      ArrayList<String> list = new ArrayList<String>();
      list.add("a");
      list.add("b");
      list.add("c");
      for (String s : list)
      {
          if (s.equals("b"))
          {
              list.add("z");
          }
      }
      System.out.println(list);
    `,
    choices: [
      "[a, b, c, z] is printed.",
      "[a, b, z, c] is printed.",
      "A `ConcurrentModificationException` is thrown.",
      "The loop never terminates."
    ],
    answer: "C",
    explanation: "Changing the size of a list while an enhanced for loop is traversing it is not allowed. After \"z\" is added, the loop's next step detects the change and throws a `ConcurrentModificationException`."
  },
  {
    id: "4.9-05",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[-1, -2, 3, -4, 5]`. What does `nums` contain after the following code segment executes?",
    code: `
      int i = 0;
      while (i < nums.size())
      {
          if (nums.get(i) < 0)
          {
              nums.remove(i);
          }
          else
          {
              i++;
          }
      }
    `,
    choices: [
      "[3, 5]",
      "[-2, 3, 5]",
      "[3, -4, 5]",
      "[-2, 3, -4, 5]"
    ],
    answer: "A",
    explanation: "`i` is increased only when nothing is removed, so after a removal the element that shifted into position `i` is checked next. Every negative value is removed. Choice `[-2, 3, 5]` is what happens if `i` is increased after every removal too."
  },
  {
    id: "4.9-06",
    prompt: "`words` is an `ArrayList<String>` containing `[tree, ox, cat, house, an]`. What does `words` contain after the following code segment executes?",
    code: `
      for (int i = words.size() - 1; i >= 0; i--)
      {
          if (words.get(i).length() < 4)
          {
              words.remove(i);
          }
      }
    `,
    choices: [
      "[tree, cat, house]",
      "[ox, cat, an]",
      "[tree, house]",
      "[tree, house, an]"
    ],
    answer: "C",
    explanation: "The loop traverses from the end, so removing at index `i` shifts only elements that were already checked. All words shorter than 4 characters (ox, cat, an) are removed."
  },
  {
    id: "4.9-07",
    prompt: "A programmer uses a `for` loop whose index `i` goes from `list.size() - 1` down to 0, and inside the loop removes the element at index `i` whenever it meets a condition. Which of the following best explains why this traversal does not skip any elements?",
    choices: [
      "Traversing backward causes the list to stop shifting elements after a removal.",
      "A removal shifts only the elements after index `i`, and those elements have already been visited.",
      "Traversing backward prevents a `ConcurrentModificationException`, which is what causes the skipping.",
      "The size of the list does not change until the loop finishes."
    ],
    answer: "B",
    explanation: "When the element at index `i` is removed, the elements at higher indices shift left, but a backward traversal has already processed them. The next index checked, `i - 1`, still holds an unvisited element. Elements still shift, and the size does change immediately."
  },
  {
    id: "4.9-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();
      nums.add(1);
      nums.add(2);
      nums.add(3);
      for (Integer n : nums)
      {
          n = n * 2;
      }
      System.out.println(nums);
    `,
    choices: [
      "[2, 4, 6]",
      "A `ConcurrentModificationException` is thrown.",
      "The code does not compile.",
      "[1, 2, 3]"
    ],
    answer: "D",
    explanation: "Assigning to the loop variable `n` only changes that local variable; it does not change the element stored in the list. To change elements, use an indexed loop with `nums.set(i, ...)`."
  },
  {
    id: "4.9-09",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[5, 10, 15, 20, 25, 30]`. What is printed as a result of executing the following code segment?",
    code: `
      for (int i = nums.size() - 1; i > 0; i -= 2)
      {
          System.out.print(nums.get(i) + " ");
      }
    `,
    choices: [
      "30 20 10",
      "25 15 5",
      "30 20 10 5",
      "30 25 20 15 10"
    ],
    answer: "A",
    explanation: "`i` starts at 5 and takes the values 5, 3, and 1, printing 30, 20, and 10. When `i` becomes -1 the condition `i > 0` is false and the loop stops."
  },
  {
    id: "4.9-10",
    prompt: "The following code segment is intended to remove every even value from the `ArrayList<Integer>` named `nums`. Which of the following can replace `/* missing loop header */` so that the code segment works as intended for every possible list?",
    code: `
      /* missing loop header */
      {
          if (nums.get(i) % 2 == 0)
          {
              nums.remove(i);
          }
      }
    `,
    choices: [
      "`for (int i = 0; i < nums.size(); i++)`",
      "`for (int i = nums.size() - 1; i >= 0; i--)`",
      "`for (int i = nums.size(); i >= 0; i--)`",
      "`for (int i = nums.size() - 1; i > 0; i--)`"
    ],
    answer: "B",
    explanation: "A backward traversal from the last index to index 0 checks every element exactly once. The forward loop skips the element after each removal, starting at `nums.size()` throws an `IndexOutOfBoundsException`, and stopping at `i > 0` never checks index 0."
  },
  {
    id: "4.9-11",
    prompt: "Which of the following statements about traversing an `ArrayList` with an enhanced for loop is true?",
    choices: [
      "Assigning a new value to the loop variable replaces the corresponding element in the list.",
      "An enhanced for loop visits the elements from the last index to the first.",
      "Adding or removing elements of the list inside the loop can cause a `ConcurrentModificationException`.",
      "An enhanced for loop can be used with arrays but not with an `ArrayList`."
    ],
    answer: "C",
    explanation: "Changing the size of an `ArrayList` while an enhanced for loop traverses it can throw a `ConcurrentModificationException`. The loop variable is only a copy of each element, and elements are visited from first to last."
  },
  {
    id: "4.9-12",
    prompt: "What happens when the following code segment is executed?",
    code: `
      ArrayList<String> list = new ArrayList<String>();
      list.add("a");
      list.add("b");
      list.add("c");
      for (int i = 0; i <= list.size(); i++)
      {
          System.out.print(list.get(i));
      }
    `,
    choices: [
      "abc is printed.",
      "ab is printed.",
      "An `IndexOutOfBoundsException` is thrown before anything is printed.",
      "abc is printed and then an `IndexOutOfBoundsException` is thrown."
    ],
    answer: "D",
    explanation: "Indices 0, 1, and 2 are valid, so a, b, and c are printed first. Because the condition uses `<=`, the loop also runs with `i` equal to 3, and `list.get(3)` throws an `IndexOutOfBoundsException`."
  },
  {
    id: "4.9-13",
    prompt: "What happens when the following code segment is executed?",
    code: `
      ArrayList<Integer> nums = new ArrayList<Integer>();
      nums.add(7);
      nums.add(4);
      nums.add(9);
      for (int i = nums.size(); i > 0; i--)
      {
          System.out.print(nums.get(i) + " ");
      }
    `,
    choices: [
      "An `IndexOutOfBoundsException` is thrown before anything is printed.",
      "9 4 7 is printed.",
      "9 4 is printed.",
      "9 4 7 is printed, and then an `IndexOutOfBoundsException` is thrown."
    ],
    answer: "A",
    explanation: "The loop starts with `i` equal to `nums.size()`, which is 3, but the valid indices are 0 to 2. The first call, `nums.get(3)`, throws an `IndexOutOfBoundsException` before anything is printed. Starting at `nums.size() - 1` and continuing while `i >= 0` would print 9 4 7."
  },
  {
    id: "4.9-14",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[1, 2, 3, 4]`. What does `nums` contain after the following code segment executes?",
    code: `
      int i = 0;
      while (i < nums.size())
      {
          if (nums.get(i) % 2 == 0)
          {
              nums.add(i, 0);
              i++;
          }
          i++;
      }
    `,
    choices: [
      "[1, 2, 0, 3, 4, 0]",
      "[0, 1, 0, 2, 3, 4]",
      "The loop never terminates.",
      "[1, 0, 2, 3, 0, 4]"
    ],
    answer: "D",
    explanation: "Inserting 0 at index `i` pushes the even value to index `i + 1`, so the extra `i++` steps past it before the regular `i++`. Each even value gets a 0 in front of it. Without the extra `i++`, the same even value would be found again and again and the loop would never end."
  },
  {
    id: "4.9-15",
    prompt: "`names` is an `ArrayList<String>` containing `[Jo, Al, Jan, Bea]`. What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (String name : names)
      {
          if (name.substring(0, 1).equals("J"))
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["1", "2", "3", "4"],
    answer: "B",
    explanation: "The enhanced for loop visits every name, and only \"Jo\" and \"Jan\" begin with J, so `count` is 2."
  },
  {
    id: "4.9-16",
    prompt: "`words` is an `ArrayList<String>` containing `[go, go, stop, go]`. What does `words` contain after the following code segment executes?",
    code: `
      for (int i = 0; i < words.size(); i++)
      {
          if (words.get(i).equals("go"))
          {
              words.remove(i);
              i--;
          }
      }
    `,
    choices: [
      "[go, stop]",
      "[go, stop, go]",
      "[stop]",
      "An `IndexOutOfBoundsException` is thrown."
    ],
    answer: "C",
    explanation: "After each removal, `i--` cancels the loop's `i++`, so the element that shifted into index `i` is checked next. Every \"go\" is removed. When `i` becomes -1 it is immediately increased back to 0 before `get` is called, so no exception occurs."
  },
  {
    id: "4.9-17",
    prompt: "`list` is a nonempty `ArrayList<String>`. Which of the following code segments print every element of `list`, one per line, in order from first to last?",
    code: `
      I.   for (int i = 0; i < list.size(); i++)
           {
               System.out.println(list.get(i));
           }

      II.  for (String s : list)
           {
               System.out.println(s);
           }

      III. int k = list.size();
           while (k > 0)
           {
               k--;
               System.out.println(list.get(k));
           }
    `,
    choices: [
      "I and II only",
      "I only",
      "II and III only",
      "I, II, and III"
    ],
    answer: "A",
    explanation: "I and II both visit the elements from index 0 to the end. III prints every element, but from last to first, so it does not meet the requirement of printing in order."
  },
  {
    id: "4.9-18",
    prompt: "`names` is an `ArrayList<String>` containing `[Ann, Bob, Cal, Dee]`. What happens when the following code segment is executed?",
    code: `
      for (String n : names)
      {
          if (n.equals("Bob"))
          {
              names.remove(0);
          }
      }
      System.out.println(names);
    `,
    choices: [
      "[Bob, Cal, Dee] is printed.",
      "[Ann, Cal, Dee] is printed.",
      "An `IndexOutOfBoundsException` is thrown.",
      "A `ConcurrentModificationException` is thrown."
    ],
    answer: "D",
    explanation: "Removing an element changes the size of the list while the enhanced for loop is traversing it, so the loop's next step throws a `ConcurrentModificationException`. Elements should not be added or removed inside an enhanced for loop over an `ArrayList`."
  },
  {
    id: "4.9-19",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[1, 2, 3, 4]`. What does `nums` contain after the following code segment executes?",
    code: `
      for (int i = 1; i < nums.size(); i++)
      {
          nums.set(i, nums.get(i) + nums.get(i - 1));
      }
    `,
    choices: [
      "[1, 3, 5, 7]",
      "[3, 5, 7, 4]",
      "[1, 3, 6, 10]",
      "[1, 2, 3, 4]"
    ],
    answer: "C",
    explanation: "Each element becomes itself plus the already-updated element before it, giving running totals 1, 3, 6, 10. Choice `[1, 3, 5, 7]` assumes each step uses the original value of the previous element."
  },
  {
    id: "4.9-20",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[5, 3, 8]`. What does `nums` contain after the following code segment executes?",
    code: `
      for (int i = 0; i < nums.size(); i++)
      {
          if (nums.get(i) > 4)
          {
              nums.add(nums.get(i) - 2);
          }
      }
    `,
    choices: [
      "[5, 3, 8, 3, 6]",
      "[5, 3, 8, 3, 6, 4]",
      "A `ConcurrentModificationException` is thrown.",
      "The loop never terminates."
    ],
    answer: "B",
    explanation: "`nums.size()` is checked on every iteration, so the loop also visits the values it appends: 5 adds 3, 8 adds 6, and then the new 6 adds 4. An indexed loop does not throw a `ConcurrentModificationException`, and the loop ends because 4 is not greater than 4."
  }
]);

defineTopic(4, "4.10", "Implementing ArrayList Algorithms", [
  {
    id: "4.10-01",
    prompt: "`words` is an `ArrayList<String>` containing `[plum, fig, mango, lime, grape]`. What is printed as a result of executing the following code segment?",
    code: `
      String longest = words.get(0);
      for (String w : words)
      {
          if (w.length() > longest.length())
          {
              longest = w;
          }
      }
      System.out.println(longest);
    `,
    choices: ["grape", "plum", "5", "mango"],
    answer: "D",
    explanation: "`longest` changes only when a strictly longer word is found. mango (5 letters) replaces plum, and grape is also 5 letters, so it does not replace mango."
  },
  {
    id: "4.10-02",
    prompt: "Consider the following method. What value is returned by the call `maxIndex(nums)` when `nums` contains `[3, 9, 2, 9, 1]`?",
    code: `
      public static int maxIndex(ArrayList<Integer> nums)
      {
          int best = 0;
          for (int i = 1; i < nums.size(); i++)
          {
              if (nums.get(i) > nums.get(best))
              {
                  best = i;
              }
          }
          return best;
      }
    `,
    choices: ["3", "1", "9", "4"],
    answer: "B",
    explanation: "`best` becomes 1 when the first 9 is found. The second 9, at index 3, is not strictly greater, so `best` stays 1. The method returns an index, not the value 9."
  },
  {
    id: "4.10-03",
    prompt: "Consider the following method. What is returned by `longWords(words)` when `words` contains `[tree, ox, apple, cat, kiwi]`?",
    code: `
      public static ArrayList<String> longWords(ArrayList<String> words)
      {
          ArrayList<String> result = new ArrayList<String>();
          for (String w : words)
          {
              if (w.length() > 3)
              {
                  result.add(w);
              }
          }
          return result;
      }
    `,
    choices: [
      "[tree, apple, kiwi]",
      "[ox, cat]",
      "[apple]",
      "[tree, apple, cat, kiwi]"
    ],
    answer: "A",
    explanation: "The method builds a new list holding only the words with more than 3 letters, in their original order. \"cat\" has exactly 3 letters, so it is not included."
  },
  {
    id: "4.10-04",
    prompt: "The following method is intended to remove every occurrence of `target` from `list`. For which of the following calls does the method NOT work as intended?",
    code: `
      public static void removeAll(ArrayList<Integer> list, int target)
      {
          for (int i = 0; i < list.size(); i++)
          {
              if (list.get(i) == target)
              {
                  list.remove(i);
              }
          }
      }
    `,
    choices: [
      "`list` is `[5, 2, 7]` and `target` is 2",
      "`list` is `[2, 5, 2]` and `target` is 2",
      "`list` is `[5, 2, 2, 7]` and `target` is 2",
      "`list` is `[2, 7, 2, 7]` and `target` is 2"
    ],
    answer: "C",
    explanation: "After a removal the next element shifts into index `i`, and then `i++` skips it. That matters only when two targets are next to each other, so `[5, 2, 2, 7]` ends as `[5, 2, 7]`. In the other lists, the element that gets skipped is never a 2."
  },
  {
    id: "4.10-05",
    prompt: "`items` is an `ArrayList<String>` containing `[a, b, a, a]`. What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int i = 0; i < items.size(); i++)
      {
          for (int j = i + 1; j < items.size(); j++)
          {
              if (items.get(i).equals(items.get(j)))
              {
                  count++;
              }
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "3", "1", "4"],
    answer: "B",
    explanation: "Starting `j` at `i + 1` compares each pair of positions exactly once. The matching pairs are indices (0, 2), (0, 3), and (2, 3), so `count` is 3."
  },
  {
    id: "4.10-06",
    prompt: "The following method is intended to insert `name` into `names`, which is sorted in alphabetical order, so that the list stays sorted. Which of the following can replace `/* condition */` so that the method works as intended for every possible list, including an empty list?",
    code: `
      public static void insertSorted(ArrayList<String> names, String name)
      {
          int i = 0;
          while (/* condition */)
          {
              i++;
          }
          names.add(i, name);
      }
    `,
    choices: [
      "`i < names.size() && names.get(i).compareTo(name) < 0`",
      "`names.get(i).compareTo(name) < 0 && i < names.size()`",
      "`i < names.size() && names.get(i).compareTo(name) > 0`",
      "`i < names.size() || names.get(i).compareTo(name) < 0`"
    ],
    answer: "A",
    explanation: "The loop moves past every name that comes before `name`, and the bounds check comes first so short-circuiting stops `get` from being called with `i == names.size()`. With the checks reversed, inserting a name that belongs at the end throws an `IndexOutOfBoundsException`."
  },
  {
    id: "4.10-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[] arr = {4, 1, 6};
      ArrayList<Integer> list = new ArrayList<Integer>();
      for (int v : arr)
      {
          list.add(0, v);
      }
      System.out.println(list);
    `,
    choices: [
      "[4, 1, 6]",
      "[4, 6, 1]",
      "[0, 4, 1, 6]",
      "[6, 1, 4]"
    ],
    answer: "D",
    explanation: "Each value is inserted at index 0, in front of the values added earlier, so the list ends up in reverse order of the array. `add(0, v)` adds the value `v` at index 0; it does not add the number 0."
  },
  {
    id: "4.10-08",
    prompt: "The following method is intended to swap the elements at indices `i` and `j` of `list`. Which of the following can replace `/* missing code */` so that the method works as intended?",
    code: `
      public static void swap(ArrayList<String> list, int i, int j)
      {
          String temp = list.get(i);
          /* missing code */
      }
    `,
    choices: [
      "list.set(j, temp);\nlist.set(i, list.get(j));",
      "list.set(i, list.get(j));\nlist.set(j, list.get(i));",
      "list.set(i, list.get(j));\nlist.set(j, temp);",
      "list.add(i, list.get(j));\nlist.add(j, temp);"
    ],
    answer: "C",
    explanation: "`temp` saves the original element at `i`, so index `i` can be overwritten with the element at `j`, and then `temp` goes into index `j`. Using `add` would insert extra elements instead of replacing, and the other orders overwrite a value before it is copied."
  },
  {
    id: "4.10-09",
    prompt: "The following method is intended to return the smallest value in `nums`. Which of the following best describes when the method does NOT return the smallest value?",
    code: `
      /** Precondition: nums is not empty */
      public static int findMin(ArrayList<Integer> nums)
      {
          int min = 0;
          for (int n : nums)
          {
              if (n < min)
              {
                  min = n;
              }
          }
          return min;
      }
    `,
    choices: [
      "When every value in `nums` is greater than 0",
      "When `nums` contains at least one negative value",
      "When the smallest value is the last element of `nums`",
      "When `nums` contains duplicate values"
    ],
    answer: "A",
    explanation: "Because `min` starts at 0 instead of an element of the list, a list of all positive values never updates it, and the method returns 0. Initializing `min` to `nums.get(0)` fixes the error."
  },
  {
    id: "4.10-10",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[3, 5, 2, 8, 9]`. What is printed as a result of executing the following code segment?",
    code: `
      int count = 0;
      for (int i = 1; i < nums.size(); i++)
      {
          if (nums.get(i) > nums.get(i - 1))
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "4", "1", "3"],
    answer: "D",
    explanation: "The loop compares each element with the one before it. 5 > 3, 8 > 2, and 9 > 8 are true, but 2 > 5 is false, so `count` is 3."
  },
  {
    id: "4.10-11",
    prompt: "`names` is an `ArrayList<String>` containing `[Ana, Ben, Cal, Dev]`, and `scores` is an `ArrayList<Integer>` containing `[88, 92, 75, 95]`, where `scores.get(i)` is the score for `names.get(i)`. What is printed as a result of executing the following code segment?",
    code: `
      for (int i = 0; i < names.size(); i++)
      {
          if (scores.get(i) >= 90)
          {
              System.out.print(names.get(i) + " ");
          }
      }
    `,
    choices: ["Ben", "92 95", "Ben Dev", "Dev"],
    answer: "C",
    explanation: "The same index `i` traverses both lists at the same time, so each score is matched with the name at the same position. The scores at indices 1 and 3 are at least 90, so Ben and Dev are printed. The code prints names, not scores."
  },
  {
    id: "4.10-12",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[-1, 4, -3, -2, 5]`. What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> neg = new ArrayList<Integer>();
      for (int i = nums.size() - 1; i >= 0; i--)
      {
          if (nums.get(i) < 0)
          {
              neg.add(nums.remove(i));
          }
      }
      System.out.println(nums + " " + neg);
    `,
    choices: [
      "[4, 5] [-1, -3, -2]",
      "[4, 5] [-2, -3, -1]",
      "[4, -2, 5] [-3, -1]",
      "[-1, 4, -3, -2, 5] [-2, -3, -1]"
    ],
    answer: "B",
    explanation: "`remove(i)` both deletes the element and returns it, so each negative value moves into `neg`. The traversal goes from the last index to the first, so the negatives are added in the order -2, -3, -1."
  },
  {
    id: "4.10-13",
    prompt: "`list` is an `ArrayList<Integer>` containing `[1, 2, 3, 4, 5]`. What does `list` contain after the following code segment executes?",
    code: `
      for (int i = 0; i < list.size(); i++)
      {
          int j = list.size() - 1 - i;
          int temp = list.get(i);
          list.set(i, list.get(j));
          list.set(j, temp);
      }
    `,
    choices: [
      "[5, 4, 3, 2, 1]",
      "[5, 4, 3, 4, 5]",
      "An `IndexOutOfBoundsException` is thrown.",
      "[1, 2, 3, 4, 5]"
    ],
    answer: "D",
    explanation: "The loop runs over the whole list instead of only the first half. The first half of the iterations reverse the list, and the second half swap each pair back, so the list ends in its original order. Stopping at `list.size() / 2` would reverse it."
  },
  {
    id: "4.10-14",
    prompt: "`words` is an `ArrayList<String>` containing `[b, a, b, c, a]`. What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> unique = new ArrayList<String>();
      for (String s : words)
      {
          boolean found = false;
          for (String u : unique)
          {
              if (u.equals(s))
              {
                  found = true;
              }
          }
          if (!found)
          {
              unique.add(s);
          }
      }
      System.out.println(unique);
    `,
    choices: [
      "[b, a, c]",
      "[a, b, c]",
      "[c]",
      "[b, a, b, c, a]"
    ],
    answer: "A",
    explanation: "Each word is added to `unique` only if it is not already there, so the first occurrence of each word is kept in its original order. The list is not sorted, so `[a, b, c]` is wrong."
  },
  {
    id: "4.10-15",
    prompt: "`nums` is a nonempty `ArrayList<Integer>`, and `sum` is an `int` holding the sum of its elements. Which of the following expressions evaluates to the average of the elements, including any fractional part?",
    choices: [
      "`sum / nums.size()`",
      "`(double) sum / nums.size()`",
      "`(double) (sum / nums.size())`",
      "`(double) sum / nums.length`"
    ],
    answer: "B",
    explanation: "Casting `sum` to `double` before dividing makes the division floating-point. Casting after the division keeps the truncated integer result, and `length` is not used with an `ArrayList`."
  },
  {
    id: "4.10-16",
    prompt: "The following code segment is intended to remove every occurrence of the `String` `target` from the `ArrayList<String>` named `list`. Which of the following can replace `/* missing code */` so that the code segment works as intended?",
    code: `
      int i = 0;
      while (i < list.size())
      {
          if (list.get(i).equals(target))
          {
              /* missing code */
          }
          else
          {
              i++;
          }
      }
    `,
    choices: [
      "list.remove(i);\ni++;",
      "list.remove(i);\ni--;",
      "list.remove(i);",
      "i++;\nlist.remove(i);"
    ],
    answer: "C",
    explanation: "After a removal, the next unchecked element shifts into index `i`, so `i` must stay the same. Adding `i++` skips that element, and `i--` makes `i` equal to -1 after a removal at index 0, which causes an `IndexOutOfBoundsException` on the next `get`."
  },
  {
    id: "4.10-17",
    prompt: "`nums` is a nonempty `ArrayList<Integer>`. Which of the following code segments correctly store the sum of all the elements of `nums` in `sum`?",
    code: `
      I.   int sum = 0;
           for (int n : nums)
           {
               sum += n;
           }

      II.  int sum = 0;
           for (int i = 0; i < nums.size() - 1; i++)
           {
               sum += nums.get(i);
           }

      III. int sum = 0;
           int i = nums.size();
           while (i > 0)
           {
               i--;
               sum += nums.get(i);
           }
    `,
    choices: [
      "I and III only",
      "I only",
      "I and II only",
      "I, II, and III"
    ],
    answer: "A",
    explanation: "I adds every element with an enhanced for loop, and III adds every element from the last index down to 0. II stops at `nums.size() - 2`, so it leaves out the last element."
  },
  {
    id: "4.10-18",
    prompt: "`nums` is an `ArrayList<Integer>` containing `[3, 8, 6, 1, 4]`. What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<Integer> result = new ArrayList<Integer>();
      for (int i = 0; i < nums.size(); i++)
      {
          if (nums.get(i) % 2 == 0)
          {
              result.add(i);
          }
      }
      System.out.println(result);
    `,
    choices: [
      "[8, 6, 4]",
      "[0, 3]",
      "[2, 3, 5]",
      "[1, 2, 4]"
    ],
    answer: "D",
    explanation: "The code adds the index `i`, not the element, whenever the element is even. The even values 8, 6, and 4 are at indices 1, 2, and 4."
  },
  {
    id: "4.10-19",
    prompt: "`list` is an `ArrayList<String>` containing `[a, b, c, d]`. What does `list` contain after the following code segment executes?",
    code: `
      for (int k = 0; k < 2; k++)
      {
          list.add(list.remove(0));
      }
    `,
    choices: [
      "[b, c, d, a]",
      "[a, b, c, d]",
      "[c, d, a, b]",
      "[d, c, a, b]"
    ],
    answer: "C",
    explanation: "Each iteration removes the first element and appends it to the end, since `remove` returns the element it removes. After two iterations a and b have moved to the back, giving `[c, d, a, b]`."
  },
  {
    id: "4.10-20",
    prompt: "Consider the following method. Which of the following best describes what the method returns?",
    code: `
      /** Precondition: nums is not empty */
      public static boolean mystery(ArrayList<Integer> nums)
      {
          for (int i = 1; i < nums.size(); i++)
          {
              if (nums.get(i) < nums.get(i - 1))
              {
                  return false;
              }
          }
          return true;
      }
    `,
    choices: [
      "`true` if all the elements of `nums` are different, and `false` otherwise",
      "`true` if the elements of `nums` are in increasing order, allowing equal neighbors, and `false` otherwise",
      "`true` if the first element of `nums` is the smallest, and `false` otherwise",
      "`true` if the elements of `nums` are in decreasing order, and `false` otherwise"
    ],
    answer: "B",
    explanation: "The method returns `false` as soon as an element is smaller than the one before it, so it returns `true` only when every element is at least as large as its predecessor. Equal neighbors do not cause `false`, and a list whose first element is smallest can still be out of order later."
  }
]);

defineTopic(4, "4.11", "2D Array Creation and Access", [
  {
    id: "4.11-01",
    prompt: "Which of the following correctly declares and creates a 2D array `grid` of `int` values with 3 rows and 4 columns?",
    choices: [
      "`int[][] grid = new int[4][3];`",
      "`int[][] grid = new int[3][4];`",
      "`int[] grid = new int[3][4];`",
      "`int[3][4] grid = new int[][];`"
    ],
    answer: "B",
    explanation: "The first size is the number of rows and the second is the number of columns, and the variable type must be `int[][]`. `new int[4][3]` swaps rows and columns."
  },
  {
    id: "4.11-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      double[][] prices = new double[2][3];
      System.out.println(prices[1][2]);
    `,
    choices: ["0", "null", "An `ArrayIndexOutOfBoundsException` is thrown.", "0.0"],
    answer: "D",
    explanation: "Elements of a newly created `double` array are initialized to 0.0, and `prices[1][2]` is a valid position (row 1, column 2). Printing a `double` shows the decimal point."
  },
  {
    id: "4.11-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[][] names = new String[2][2];
      System.out.println(names[0][1]);
    `,
    choices: [
      "null",
      "Nothing is printed except a blank line.",
      "A `NullPointerException` is thrown.",
      "The code does not compile because the array elements were never assigned."
    ],
    answer: "A",
    explanation: "Elements of a new array of objects are initialized to `null`, so `names[0][1]` is `null` and `println` prints the word null. No method is called on the element, so there is no `NullPointerException`."
  },
  {
    id: "4.11-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] table = new int[5][2];
      System.out.println(table.length + " " + table[0].length);
    `,
    choices: ["2 5", "10 10", "5 2", "5 5"],
    answer: "C",
    explanation: "`table.length` is the number of rows, 5, and `table[0].length` is the length of row 0, which is the number of columns, 2."
  },
  {
    id: "4.11-05",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] vals = { {3, 8, 1},
                       {6, 2, 9},
                       {4, 7, 5} };
      System.out.println(vals[1][2] - vals[2][0]);
    `,
    choices: ["5", "6", "4", "An `ArrayIndexOutOfBoundsException` is thrown."],
    answer: "A",
    explanation: "`vals[1][2]` is row 1, column 2, which is 9, and `vals[2][0]` is row 2, column 0, which is 4. The result is 9 - 4 = 5. Reading the indices as [column][row] gives 7 - 1 = 6."
  },
  {
    id: "4.11-06",
    prompt: "Consider the declaration `int[][] g = new int[3][5];`. Which of the following statements will cause an `ArrayIndexOutOfBoundsException`?",
    choices: ["`g[2][4] = 1;`", "`g[0][0] = 1;`", "`g[3][4] = 1;`", "`g[1][3] = 1;`"],
    answer: "C",
    explanation: "`g` has rows 0 to 2 and columns 0 to 4. Row index 3 does not exist, so `g[3][4]` throws the exception. `g[2][4]` is the last valid element."
  },
  {
    id: "4.11-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = new int[2][3];
      m[0][1] = 5;
      m[1][2] = m[0][1] + 2;
      m[1][0] = m[1][2] * 2;
      System.out.println(m[1][0] + m[0][2]);
    `,
    choices: ["7", "21", "12", "14"],
    answer: "D",
    explanation: "`m[1][2]` becomes 7 and `m[1][0]` becomes 14. `m[0][2]` was never assigned, so it still has the default value 0, and 14 + 0 = 14."
  },
  {
    id: "4.11-08",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] grid = { {1, 2},
                       {3, 4},
                       {5, 6} };
      int[] row = grid[1];
      row[0] = 9;
      System.out.println(grid[1][0] + " " + row.length);
    `,
    choices: ["3 2", "9 2", "9 3", "3 3"],
    answer: "B",
    explanation: "A 2D array is an array of 1D arrays, so `grid[1]` is a reference to the row `{3, 4}`. `row` refers to that same row, so changing `row[0]` changes `grid[1][0]` to 9. The row has 2 elements."
  },
  {
    id: "4.11-09",
    prompt: "Consider the following declaration. Which of the statements I, II, and III are true?",
    code: `
      int[][] arr = new int[4][6];

      I.   arr.length is 4.
      II.  arr[3] is a 1D array that holds 6 int values.
      III. arr[4][0] is the first element of the last row.
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "`arr` has 4 rows, and each row is a 1D array of 6 `int` values, so I and II are true. The rows are numbered 0 to 3, so the last row is `arr[3]`, and `arr[4][0]` would throw an exception."
  },
  {
    id: "4.11-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[][] words = { {"cat", "dog"},
                           {"emu", "fox"},
                           {"gnu", "hen"} };
      System.out.println(words[2][0] + words[0][1]);
    `,
    choices: ["gnudog", "foxemu", "dogemu", "An `ArrayIndexOutOfBoundsException` is thrown."],
    answer: "A",
    explanation: "`words[2][0]` is row 2, column 0, which is \"gnu\", and `words[0][1]` is row 0, column 1, which is \"dog\". Concatenation gives \"gnudog\"."
  },
  {
    id: "4.11-11",
    prompt: "Consider the declaration `int[][] table = new int[7][3];`. Which expression gives the index of the last column of `table`?",
    choices: ["`table.length - 1`", "`table[0].length - 1`", "`table[0].length`", "`table.length`"],
    answer: "B",
    explanation: "The number of columns is the length of a row, `table[0].length`, which is 3, so the last column index is 2. `table.length - 1` is the index of the last row."
  },
  {
    id: "4.11-12",
    prompt: "Which of the following statements will NOT compile?",
    choices: [
      "`int[][] a = new int[2][3];`",
      "`int[][] b = { {1, 2}, {3, 4} };`",
      "`int[][] c = new int[][3];`",
      "`String[][] d = new String[1][1];`"
    ],
    answer: "C",
    explanation: "When a 2D array is created with `new`, the number of rows must be given. `new int[][3]` leaves out the first size, which is a compile-time error."
  },
  {
    id: "4.11-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      boolean[][] seen = new boolean[3][3];
      seen[1][1] = true;
      System.out.println(seen[1][1] + " " + seen[2][2]);
    `,
    choices: ["true true", "true null", "true 0", "true false"],
    answer: "D",
    explanation: "Elements of a new `boolean` array are initialized to `false`. Only `seen[1][1]` was set to `true`, so `seen[2][2]` is still `false`."
  },
  {
    id: "4.11-14",
    prompt: "Which of the following statements creates a 2D array `arr` with two rows, where row 0 contains 1, 2, 3 and row 1 contains 4, 5, 6?",
    choices: [
      "`int[][] arr = { {1, 2, 3}, {4, 5, 6} };`",
      "`int[][] arr = {1, 2, 3, 4, 5, 6};`",
      "`int[][] arr = { {1, 4}, {2, 5}, {3, 6} };`",
      "`int[] arr = { {1, 2, 3}, {4, 5, 6} };`"
    ],
    answer: "A",
    explanation: "The initializer list for a 2D array is a list of 1D initializer lists, one for each row, in order. The flat list does not compile for an `int[][]`, `{ {1, 4}, {2, 5}, {3, 6} }` creates 3 rows of 2, and an `int[]` variable cannot hold rows."
  },
  {
    id: "4.11-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] nums = new int[3][4];
      nums[1][2] = 7;
      System.out.println(nums[2].length + nums[1][2]);
    `,
    choices: ["10", "47", "8", "11"],
    answer: "D",
    explanation: "`nums[2]` is a row with 4 elements, so `nums[2].length` is 4. Both operands are `int`, so `+` adds them: 4 + 7 = 11. Using the number of rows, 3, would give 10."
  },
  {
    id: "4.11-16",
    prompt: "The following method is intended to return the element in the last row and last column of `arr`. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      /** Precondition: arr has at least one row and one column. */
      public static int lastElement(int[][] arr)
      {
          return /* missing code */;
      }
    `,
    choices: [
      "`arr[arr.length][arr[0].length]`",
      "`arr[arr.length - 1][arr[0].length - 1]`",
      "`arr[arr[0].length - 1][arr.length - 1]`",
      "`arr[arr.length - 1][arr.length - 1]`"
    ],
    answer: "B",
    explanation: "The last row index is `arr.length - 1` and the last column index is `arr[0].length - 1`. The other choices go out of bounds or only work when the array is square."
  },
  {
    id: "4.11-17",
    prompt: "A theater's seats are stored in `boolean[][] seats = new boolean[10][20];` (10 rows with 20 seats in each row). Seats are numbered 0 to 199 in row-major order: seats 0 to 19 are in row 0, seats 20 to 39 are in row 1, and so on. Which expression accesses seat number `n`?",
    choices: [
      "`seats[n / 20][n % 20]`",
      "`seats[n % 20][n / 20]`",
      "`seats[n / 10][n % 10]`",
      "`seats[n % 10][n / 10]`"
    ],
    answer: "A",
    explanation: "Each row holds 20 seats, so the row is `n / 20` and the position within the row is `n % 20`. For example, seat 45 is in row 2, column 5. Dividing by 10 (the number of rows) gives the wrong positions."
  },
  {
    id: "4.11-18",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] grid = { {5, 1},
                       {8, 3},
                       {2, 6} };
      int r = grid[0][1];
      int c = grid[r][r];
      System.out.println(grid[c - 1][r]);
    `,
    choices: ["3", "2", "6", "An `ArrayIndexOutOfBoundsException` is thrown."],
    answer: "C",
    explanation: "`r` is `grid[0][1]`, which is 1. `c` is `grid[1][1]`, which is 3. The last line prints `grid[2][1]`, which is 6."
  },
  {
    id: "4.11-19",
    prompt: "What happens when the following code segment is executed?",
    code: `
      int[][] data = new int[4][2];
      data[3][1] = 5;
      data[1][2] = 5;
      System.out.println(data[3][1]);
    `,
    choices: [
      "5 is printed.",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "0 is printed.",
      "The code does not compile."
    ],
    answer: "B",
    explanation: "`data` has 4 rows but only 2 columns (indices 0 and 1). `data[1][2]` uses column 2, so an exception is thrown at run time. Index errors are not detected by the compiler."
  },
  {
    id: "4.11-20",
    prompt: "Which of the following statements about a 2D array `arr` in Java is true?",
    choices: [
      "The expression `arr.length` gives the total number of elements in `arr`.",
      "All elements of an array created with `new int[3][4]` are initialized to `null`.",
      "The expression `arr[r][c]` accesses the element in column `r` of row `c`.",
      "A 2D array is an array whose elements are 1D arrays."
    ],
    answer: "D",
    explanation: "In Java a 2D array is an array of rows, and each row is a 1D array. `arr.length` is only the number of rows, `int` elements default to 0, and the first index is the row."
  },
]);

defineTopic(4, "4.12", "2D Array Traversals", [
  {
    id: "4.12-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = { {1, 2, 3},
                    {4, 5, 6} };
      for (int r = 0; r < m.length; r++)
      {
          for (int c = 0; c < m[0].length; c++)
          {
              System.out.print(m[r][c] + " ");
          }
      }
    `,
    choices: ["1 4 2 5 3 6", "6 5 4 3 2 1", "1 2 3 4 5 6", "1 2 3"],
    answer: "C",
    explanation: "The outer loop goes through the rows and the inner loop goes through the columns, so this is a row-major traversal: all of row 0, then all of row 1."
  },
  {
    id: "4.12-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] grid = { {7, 3},
                       {9, 4},
                       {2, 8} };
      for (int c = 0; c < grid[0].length; c++)
      {
          for (int r = 0; r < grid.length; r++)
          {
              System.out.print(grid[r][c] + " ");
          }
      }
    `,
    choices: ["7 9 2 3 4 8", "7 3 9 4 2 8", "7 9 3 4 2 8", "An `ArrayIndexOutOfBoundsException` is thrown."],
    answer: "A",
    explanation: "The outer loop goes through the columns, so this is a column-major traversal: column 0 top to bottom (7 9 2), then column 1 (3 4 8). The bounds match the 3-by-2 array, so no exception occurs."
  },
  {
    id: "4.12-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[][] pets = { {"cat", "dog"},
                          {"emu", "fox"},
                          {"gnu", "hen"} };
      for (String[] row : pets)
      {
          for (String p : row)
          {
              System.out.print(p.substring(0, 1));
          }
          System.out.print(" ");
      }
    `,
    choices: ["cdefgh", "ceg dfh", "The code does not compile.", "cd ef gh"],
    answer: "D",
    explanation: "The outer enhanced for loop gives each row as a `String[]`, and the inner loop gives each `String` in that row, so the first letters are printed row by row. A space is printed after each row, giving cd ef gh."
  },
  {
    id: "4.12-04",
    prompt: "Assume `grid` is a properly created `int[][]`. Which of the following can be used to replace /* missing code */ so that every element of `grid` is printed?",
    code: `
      /* missing code */
      {
          for (int val : row)
          {
              System.out.print(val + " ");
          }
      }
    `,
    choices: ["`for (int row : grid)`", "`for (int[] row : grid)`", "`for (int[][] row : grid)`", "`for (int[] row : grid[0])`"],
    answer: "B",
    explanation: "Each element of a 2D `int` array is a 1D array, so the outer loop variable must have type `int[]`. `grid[0]` is a 1D array of `int`, so its elements are not arrays."
  },
  {
    id: "4.12-05",
    prompt: "What happens when the following code segment is executed?",
    code: `
      int[][] arr = new int[2][4];
      for (int r = 0; r < arr[0].length; r++)
      {
          for (int c = 0; c < arr.length; c++)
          {
              arr[r][c] = r + c;
          }
      }
    `,
    choices: [
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "All 8 elements of `arr` are assigned values.",
      "Only the first two columns of each row are assigned values.",
      "The code does not compile."
    ],
    answer: "A",
    explanation: "The bounds are swapped. `r` runs up to `arr[0].length - 1`, which is 3, but `arr` has only rows 0 and 1, so `arr[2][0]` throws an exception."
  },
  {
    id: "4.12-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] g = { {1, 2},
                    {3, 4} };
      for (int[] row : g)
      {
          for (int x : row)
          {
              x = x * 10;
          }
      }
      System.out.println(g[1][0]);
    `,
    choices: ["30", "3", "10", "The code does not compile."],
    answer: "B",
    explanation: "`x` is a copy of each `int` value, so assigning to `x` does not change the array. `g[1][0]` is still 3."
  },
  {
    id: "4.12-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] g = { {5, 6, 7},
                    {8, 9, 10} };
      for (int[] row : g)
      {
          row[0] = row[2];
      }
      System.out.println(g[0][0] + g[1][0]);
    `,
    choices: ["13", "The code does not compile.", "15", "17"],
    answer: "D",
    explanation: "`row` is a reference to an actual row of `g`, so `row[0] = row[2]` changes the array. `g[0][0]` becomes 7 and `g[1][0]` becomes 10, so 17 is printed. Only assigning to a primitive loop variable leaves the array unchanged."
  },
  {
    id: "4.12-08",
    prompt: "The following method is intended to print the elements in row `r` of `arr`. Which of the following can be used to replace /* missing code */ so that the method works as intended for any rectangular array?",
    code: `
      /** Precondition: 0 <= r < arr.length */
      public static void printRow(int[][] arr, int r)
      {
          /* missing code */
          {
              System.out.print(arr[r][c] + " ");
          }
      }
    `,
    choices: [
      "`for (int c = 0; c < arr.length; c++)`",
      "`for (int c = 0; c < arr[c].length; c++)`",
      "`for (int c = 0; c < arr[r].length; c++)`",
      "`for (int c = 1; c <= arr[r].length; c++)`"
    ],
    answer: "C",
    explanation: "The column index must run from 0 up to one less than the length of row `r`. `arr.length` is the number of rows, which only works when the array is square, and starting at 1 skips column 0 and goes out of bounds."
  },
  {
    id: "4.12-09",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] t = { {1, 2, 3},
                    {4, 5, 6},
                    {7, 8, 9},
                    {10, 11, 12} };
      for (int r = 0; r < t.length; r++)
      {
          System.out.print(t[r][1] + " ");
      }
    `,
    choices: ["2 5 8 11", "4 5 6", "2 5 8", "1 4 7 10"],
    answer: "A",
    explanation: "The loop keeps the column fixed at 1 and goes through all 4 rows, so it prints column 1 from top to bottom. `t[1]` would be row 1, which is 4 5 6."
  },
  {
    id: "4.12-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = { {1, 2},
                    {3, 4},
                    {5, 6} };
      for (int r = m.length - 1; r >= 0; r--)
      {
          for (int c = 0; c < m[0].length; c++)
          {
              System.out.print(m[r][c]);
          }
      }
    `,
    choices: ["654321", "563412", "123456", "214365"],
    answer: "B",
    explanation: "The rows are visited from last to first, but each row is still printed left to right: 56, then 34, then 12."
  },
  {
    id: "4.12-11",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] g = { {1, 2, 3},
                    {4, 5, 6},
                    {7, 8, 9} };
      for (int r = 0; r < g.length; r++)
      {
          System.out.print(g[r][g.length - 1 - r] + " ");
      }
    `,
    choices: ["1 5 9", "7 5 3", "3 6 9", "3 5 7"],
    answer: "D",
    explanation: "This traversal uses its own order: in row `r` it visits column `g.length - 1 - r`, so it goes from the top-right corner to the bottom-left corner. Row 0 gives 3, row 1 gives 5, and row 2 gives 7."
  },
  {
    id: "4.12-12",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] nums = { {1, 2, 3},
                       {4, 5, 6} };
      for (int c = 0; c < nums[0].length; c++)
      {
          for (int r = 0; r < nums.length; r++)
          {
              System.out.print(nums[r][c]);
          }
          System.out.println();
      }
    `,
    choices: ["123\n456", "14 25 36", "14\n25\n36", "1\n2\n3\n4\n5\n6"],
    answer: "C",
    explanation: "The outer loop goes through the 3 columns, and each column's values are printed on one line. Column 0 gives 14, column 1 gives 25, and column 2 gives 36."
  },
  {
    id: "4.12-13",
    prompt: "Which of the statements I, II, and III about traversing a 2D array `int[][] arr` are true?",
    code: `
      I.   Nested enhanced for loops visit the elements of arr in
           row-major order.
      II.  In a column-major traversal, the outer loop usually runs
           from 0 to arr[0].length - 1.
      III. Assigning a new value to the inner enhanced for loop
           variable changes the corresponding element of arr.
    `,
    choices: ["I and II only", "I only", "II and III only", "I, II, and III"],
    answer: "A",
    explanation: "The outer enhanced for loop goes through rows, so the order is row-major, and a column-major outer loop goes through the columns. III is false because the inner variable is a copy of an `int` value."
  },
  {
    id: "4.12-14",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[][] words = { {"a", "b", "c"},
                           {"d", "e", "f"} };
      String s = "";
      for (int c = words[0].length - 1; c >= 0; c--)
      {
          for (int r = 0; r < words.length; r++)
          {
              s += words[r][c];
          }
      }
      System.out.println(s);
    `,
    choices: ["fedcba", "cbafed", "adbecf", "cfbead"],
    answer: "D",
    explanation: "This is a column-major traversal that starts with the last column. Column 2 gives \"cf\", column 1 gives \"be\", and column 0 gives \"ad\"."
  },
  {
    id: "4.12-15",
    prompt: "What is the result of executing the following code segment?",
    code: `
      int[][] arr = { {1, 2},
                      {3, 4},
                      {5, 6} };
      for (int c = 0; c < arr.length; c++)
      {
          for (int r = 0; r < arr[0].length; r++)
          {
              System.out.print(arr[r][c] + " ");
          }
      }
    `,
    choices: [
      "1 3 5 2 4 6",
      "1 3 2 4 is printed, and then an `ArrayIndexOutOfBoundsException` is thrown.",
      "1 2 3 4 5 6",
      "1 3 2 4 is printed, and the code segment ends normally."
    ],
    answer: "B",
    explanation: "The bounds are swapped on a 3-by-2 array: `c` goes to 2 and `r` only goes to 1. Columns 0 and 1 print 1 3 and 2 4 (row 2 is never reached), then `arr[0][2]` throws an exception."
  },
  {
    id: "4.12-16",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] g = { {1, 2, 3},
                    {4, 5, 6},
                    {7, 8, 9} };
      for (int r = 0; r < g.length; r++)
      {
          if (r % 2 == 0)
          {
              for (int c = 0; c < g[r].length; c++)
              {
                  System.out.print(g[r][c] + " ");
              }
          }
          else
          {
              for (int c = g[r].length - 1; c >= 0; c--)
              {
                  System.out.print(g[r][c] + " ");
              }
          }
      }
    `,
    choices: ["1 2 3 4 5 6 7 8 9", "3 2 1 4 5 6 9 8 7", "1 2 3 6 5 4 7 8 9", "1 4 7 8 5 2 3 6 9"],
    answer: "C",
    explanation: "Even-numbered rows (0 and 2) are printed left to right, and the odd-numbered row 1 is printed right to left, giving 6 5 4 in the middle."
  },
  {
    id: "4.12-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] grid = new int[4][2];
      for (int[] row : grid)
      {
          System.out.print(row.length + " ");
      }
    `,
    choices: ["2 2 2 2", "4 4", "4 2", "0 0 0 0"],
    answer: "A",
    explanation: "The loop runs once for each of the 4 rows, and each row is a 1D array of length 2."
  },
  {
    id: "4.12-18",
    prompt: "The following method is intended to print the elements of `arr` in column-major order, with each column on its own line. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      public static void printColumns(int[][] arr)
      {
          for (int c = 0; c < arr[0].length; c++)
          {
              for (int r = 0; r < arr.length; r++)
              {
                  /* missing code */
              }
              System.out.println();
          }
      }
    `,
    choices: [
      "`System.out.print(arr[c][r] + \" \");`",
      "`System.out.print(arr[r][r] + \" \");`",
      "`System.out.print(arr[c][c] + \" \");`",
      "`System.out.print(arr[r][c] + \" \");`"
    ],
    answer: "D",
    explanation: "Elements are always accessed as `arr[row][column]`, no matter which loop is outside. `arr[c][r]` swaps the indices, which prints the wrong elements and can go out of bounds on a non-square array."
  },
  {
    id: "4.12-19",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = { {1, 2, 3, 4},
                    {5, 6, 7, 8},
                    {9, 10, 11, 12} };
      for (int r = 0; r < m.length; r += 2)
      {
          for (int c = 1; c < m[r].length; c += 2)
          {
              System.out.print(m[r][c] + " ");
          }
      }
    `,
    choices: ["1 3 9 11", "2 4 6 8 10 12", "2 4 10 12", "6 8"],
    answer: "C",
    explanation: "The outer loop visits rows 0 and 2, and the inner loop visits columns 1 and 3. That gives 2 4 from row 0 and 10 12 from row 2."
  },
  {
    id: "4.12-20",
    prompt: "Assume `data` is an `int[][]` with 5 rows and 3 columns. Which of the following code segments prints every element of `data` in column-major order without causing an exception?",
    choices: [
      "for (int c = 0; c < data.length; c++)\n    for (int r = 0; r < data[0].length; r++)\n        System.out.print(data[r][c] + \" \");",
      "for (int c = 0; c < data[0].length; c++)\n    for (int r = 0; r < data.length; r++)\n        System.out.print(data[r][c] + \" \");",
      "for (int r = 0; r < data.length; r++)\n    for (int c = 0; c < data[0].length; c++)\n        System.out.print(data[r][c] + \" \");",
      "for (int r = 0; r < data[0].length; r++)\n    for (int c = 0; c < data.length; c++)\n        System.out.print(data[r][c] + \" \");"
    ],
    answer: "B",
    explanation: "Column-major order needs the column loop outside, bounded by `data[0].length` (3), and the row loop inside, bounded by `data.length` (5). The third segment is row-major, and the other two swap the bounds and go out of bounds."
  },
]);

defineTopic(4, "4.13", "Implementing 2D Array Algorithms", [
  {
    id: "4.13-01",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = { {1, 2, 3},
                    {4, 5, 6} };
      int sum = 0;
      for (int r = 0; r < m.length; r++)
      {
          sum += m[r][m[r].length - 1 - r];
      }
      System.out.println(sum);
    `,
    choices: ["6", "8", "9", "12"],
    answer: "B",
    explanation: "`m.length` is 2 (the number of rows). When r = 0 the code adds `m[0][2]`, which is 3. When r = 1 it adds `m[1][1]`, which is 5. The total is 8."
  },
  {
    id: "4.13-02",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] data = { {3, 7, 1},
                       {4, 2, 6},
                       {6, 5, 9} };
      int sum = 0;
      for (int r = 0; r < data.length; r++)
      {
          sum += data[r][1];
      }
      System.out.println(sum);
    `,
    choices: ["14", "12", "13", "16"],
    answer: "A",
    explanation: "The column index stays at 1 while `r` goes through every row, so this is the sum of column 1: 7 + 2 + 5 = 14. The sum of row 1 would be 12."
  },
  {
    id: "4.13-03",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] vals = { {2, 5},
                       {4, 6},
                       {1, 3} };
      int total = 0;
      for (int[] row : vals)
      {
          for (int v : row)
          {
              total += v;
          }
      }
      double avg = total / (vals.length * vals[0].length);
      System.out.println(avg);
    `,
    choices: ["3.5", "3", "3.0", "10.5"],
    answer: "C",
    explanation: "The total is 21 and there are 6 elements. Both operands are `int`, so `21 / 6` is integer division and gives 3, which is then stored as the `double` 3.0. Expecting 3.5 overlooks integer division."
  },
  {
    id: "4.13-04",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = { {4, 9, 2},
                    {7, 1, 9} };
      int maxR = 0;
      int maxC = 0;
      for (int r = 0; r < m.length; r++)
      {
          for (int c = 0; c < m[0].length; c++)
          {
              if (m[r][c] > m[maxR][maxC])
              {
                  maxR = r;
                  maxC = c;
              }
          }
      }
      System.out.println(maxR + " " + maxC);
    `,
    choices: ["1 2", "1 0", "0 2", "0 1"],
    answer: "D",
    explanation: "The largest value, 9, first appears at row 0, column 1. The later 9 at row 1, column 2 is not strictly greater, so the location is not updated."
  },
  {
    id: "4.13-05",
    prompt: "The following method is intended to return the smallest value in `arr`. Which of the following best describes the behavior of the method?",
    code: `
      /** Precondition: arr has at least one row and one column. */
      public static int findMin(int[][] arr)
      {
          int min = 0;
          for (int r = 0; r < arr.length; r++)
          {
              for (int c = 0; c < arr[0].length; c++)
              {
                  if (arr[r][c] < min)
                  {
                      min = arr[r][c];
                  }
              }
          }
          return min;
      }
    `,
    choices: [
      "The method always returns the smallest value in `arr`.",
      "The method returns an incorrect result when every element of `arr` is positive.",
      "The method returns an incorrect result when every element of `arr` is negative.",
      "The method throws an exception when `arr` contains the value 0."
    ],
    answer: "B",
    explanation: "`min` starts at 0 instead of an element of the array. If every element is positive, none is less than 0, so the method returns 0, which is not in the array. Starting with `arr[0][0]` fixes this."
  },
  {
    id: "4.13-06",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      String[][] board = { {"X", "O", "X"},
                           {"O", "X", "O"},
                           {"X", "X", "O"} };
      int count = 0;
      for (String[] row : board)
      {
          for (String s : row)
          {
              if (s.equals("X"))
              {
                  count++;
              }
          }
      }
      System.out.println(count);
    `,
    choices: ["4", "3", "5", "9"],
    answer: "C",
    explanation: "The rows contain 2, 1, and 2 copies of \"X\", for a total of 5. The loops visit all 9 elements, but only matching ones are counted."
  },
  {
    id: "4.13-07",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] sq = { {2, 0, 1},
                     {3, 5, 4},
                     {6, 7, 8} };
      int sum = 0;
      for (int i = 0; i < sq.length; i++)
      {
          sum += sq[i][i];
      }
      System.out.println(sum);
    `,
    choices: ["15", "12", "36", "11"],
    answer: "A",
    explanation: "`sq[i][i]` is the main diagonal, from the top-left to the bottom-right: 2 + 5 + 8 = 15. The other diagonal (1 + 5 + 6) would give 12."
  },
  {
    id: "4.13-08",
    prompt: "The following method is intended to return the sum of the diagonal that runs from the top-right corner to the bottom-left corner of the square array `sq`. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      /** Precondition: sq is square (same number of rows and columns). */
      public static int otherDiagonal(int[][] sq)
      {
          int sum = 0;
          for (int i = 0; i < sq.length; i++)
          {
              sum += /* missing code */;
          }
          return sum;
      }
    `,
    choices: [
      "`sq[i][sq.length - i]`",
      "`sq[sq.length - 1 - i][sq.length - 1 - i]`",
      "`sq[i][i]`",
      "`sq[i][sq.length - 1 - i]`"
    ],
    answer: "D",
    explanation: "In row `i` the element on that diagonal is in column `sq.length - 1 - i`, so row 0 uses the last column. `sq[i][sq.length - i]` goes out of bounds when i is 0, and `sq[i][i]` is the main diagonal."
  },
  {
    id: "4.13-09",
    prompt: "The following method is intended to return `true` if `target` appears anywhere in `arr` and `false` otherwise. Which of the following best describes the behavior of the method?",
    code: `
      /** Precondition: arr has at least one row and one column. */
      public static boolean contains(int[][] arr, int target)
      {
          for (int r = 0; r < arr.length; r++)
          {
              for (int c = 0; c < arr[0].length; c++)
              {
                  if (arr[r][c] == target)
                  {
                      return true;
                  }
                  else
                  {
                      return false;
                  }
              }
          }
          return false;
      }
    `,
    choices: [
      "The method works as intended.",
      "The method returns `true` only when `target` is equal to `arr[0][0]`.",
      "The method returns `true` only when `target` is in the first row of `arr`.",
      "The method always returns `false`."
    ],
    answer: "B",
    explanation: "Both branches return, so the method ends after checking only `arr[0][0]`. The `return false` belongs after the loops, so the search continues when an element does not match."
  },
  {
    id: "4.13-10",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] g = { {5, 3, 4},
                    {1, 2, 2},
                    {9, 8, 7} };
      int count = 0;
      for (int r = 0; r < g.length; r++)
      {
          for (int c = 0; c < g[r].length - 1; c++)
          {
              if (g[r][c] > g[r][c + 1])
              {
                  count++;
              }
          }
      }
      System.out.println(count);
    `,
    choices: ["3", "4", "2", "An `ArrayIndexOutOfBoundsException` is thrown."],
    answer: "A",
    explanation: "The code counts elements greater than their right neighbor. Row 0 has one (5 > 3), row 1 has none (2 > 2 is false), and row 2 has two (9 > 8, 8 > 7). Stopping at `g[r].length - 1` keeps `c + 1` in bounds."
  },
  {
    id: "4.13-11",
    prompt: "What is the result of executing the following code segment?",
    code: `
      int[][] g = { {1, 2},
                    {1, 3},
                    {4, 3} };
      int count = 0;
      for (int r = 0; r < g.length; r++)
      {
          for (int c = 0; c < g[0].length; c++)
          {
              if (g[r][c] == g[r + 1][c])
              {
                  count++;
              }
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "1", "3", "An `ArrayIndexOutOfBoundsException` is thrown."],
    answer: "D",
    explanation: "Each element is compared with the element below it, but `r` goes all the way to the last row. When r is 2, `g[r + 1]` is `g[3]`, which does not exist. The outer loop should stop at `g.length - 1`."
  },
  {
    id: "4.13-12",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static boolean hasDuplicate(int[][] arr, int c)
      {
          for (int r = 0; r < arr.length; r++)
          {
              for (int k = r + 1; k < arr.length; k++)
              {
                  if (arr[r][c] == arr[k][c])
                  {
                      return true;
                  }
              }
          }
          return false;
      }

      int[][] t = { {4, 7, 2},
                    {9, 3, 5},
                    {4, 1, 7} };
      System.out.println(hasDuplicate(t, 0) + " " + hasDuplicate(t, 1));
    `,
    choices: ["false false", "true true", "true false", "false true"],
    answer: "C",
    explanation: "The method compares every pair of elements in column `c`. Column 0 holds 4, 9, 4, which has a duplicate, but column 1 holds 7, 3, 1, which does not. The second 7 is in column 2, so it does not count for column 1."
  },
  {
    id: "4.13-13",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] m = { {1, 2, 3, 4},
                    {5, 6, 7, 8} };
      int r = 1;
      for (int c = 0; c < m[r].length / 2; c++)
      {
          int temp = m[r][c];
          m[r][c] = m[r][m[r].length - 1 - c];
          m[r][m[r].length - 1 - c] = temp;
      }
      for (int c = 0; c < m[r].length; c++)
      {
          System.out.print(m[r][c] + " ");
      }
    `,
    choices: ["5 6 7 8", "8 7 6 5", "8 6 7 5", "4 3 2 1"],
    answer: "B",
    explanation: "The first loop swaps pairs of elements from the two ends of row 1 toward the middle and stops halfway, so row 1 is reversed. Choice 8 6 7 5 swaps only the end elements, and 4 3 2 1 is row 0 reversed."
  },
  {
    id: "4.13-14",
    prompt: "The following method is intended to return a 1D array in which element `k` is the sum of row `k` of `arr`. Which of the following can be used to replace /* missing code */ so that the method works as intended?",
    code: `
      public static int[] rowSums(int[][] arr)
      {
          int[] result = new int[/* missing code */];
          for (int r = 0; r < arr.length; r++)
          {
              for (int c = 0; c < arr[r].length; c++)
              {
                  result[r] += arr[r][c];
              }
          }
          return result;
      }
    `,
    choices: ["`arr.length`", "`arr[0].length`", "`arr.length * arr[0].length`", "`arr.length - 1`"],
    answer: "A",
    explanation: "There is one sum for each row, so the result needs `arr.length` elements. `arr[0].length` is the number of columns, which is wrong unless the array is square."
  },
  {
    id: "4.13-15",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] g = { {1, 2},
                    {3, 4},
                    {5, 6} };
      int temp = g[0][0];
      for (int r = 0; r < g.length - 1; r++)
      {
          g[r][0] = g[r + 1][0];
      }
      g[g.length - 1][0] = temp;
      for (int r = 0; r < g.length; r++)
      {
          System.out.print(g[r][0] + " ");
      }
    `,
    choices: ["5 1 3", "1 3 5", "3 5 5", "3 5 1"],
    answer: "D",
    explanation: "Each element of column 0 is copied from the element below it, which shifts the column up by one, and the saved top value 1 is placed at the bottom. This rotates column 0 up. Without `temp` the bottom would keep 5, giving 3 5 5, and 5 1 3 is a rotation down."
  },
  {
    id: "4.13-16",
    prompt: "The following method is intended to copy the elements of `arr` into a 1D array in row-major order. Which of the following can be used to replace /* missing code */ so that the method works as intended for any rectangular array?",
    code: `
      public static int[] flatten(int[][] arr)
      {
          int[] result = new int[arr.length * arr[0].length];
          for (int r = 0; r < arr.length; r++)
          {
              for (int c = 0; c < arr[0].length; c++)
              {
                  result[/* missing code */] = arr[r][c];
              }
          }
          return result;
      }
    `,
    choices: [
      "`r * arr.length + c`",
      "`r + c`",
      "`r * arr[0].length + c`",
      "`c * arr[0].length + r`"
    ],
    answer: "C",
    explanation: "Each earlier row fills `arr[0].length` positions, so row `r` starts at index `r * arr[0].length`, and column `c` is `c` places after that. Multiplying by `arr.length` only works for square arrays."
  },
  {
    id: "4.13-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] data = { {1, 2, 3},
                       {4, -1, 6},
                       {7, 8, 9},
                       {0, 1, 2} };
      int count = 0;
      for (int[] row : data)
      {
          boolean allPositive = true;
          for (int v : row)
          {
              if (v <= 0)
              {
                  allPositive = false;
              }
          }
          if (allPositive)
          {
              count++;
          }
      }
      System.out.println(count);
    `,
    choices: ["2", "3", "1", "4"],
    answer: "A",
    explanation: "The code counts rows in which every value is greater than 0. Row 1 contains -1 and row 3 contains 0, so only rows 0 and 2 are counted."
  },
  {
    id: "4.13-18",
    prompt: "Consider the following method. What is printed by the call `System.out.println(bestColumn(t));` when `t` is `{ {3, 8, 2}, {6, 1, 9}, {4, 2, 5} }`?",
    code: `
      public static int bestColumn(int[][] t)
      {
          int bestCol = 0;
          int bestSum = Integer.MIN_VALUE;
          for (int c = 0; c < t[0].length; c++)
          {
              int sum = 0;
              for (int r = 0; r < t.length; r++)
              {
                  sum += t[r][c];
              }
              if (sum > bestSum)
              {
                  bestSum = sum;
                  bestCol = c;
              }
          }
          return bestCol;
      }
    `,
    choices: ["16", "2", "1", "0"],
    answer: "B",
    explanation: "The column sums are 13, 11, and 16. The method returns the index of the column with the largest sum, which is 2, not the sum itself."
  },
  {
    id: "4.13-19",
    prompt: "Assume `arr` is a rectangular `int[][]` with at least one row and one column, and `total` is an `int` that is initially 0. Which of the following code segments correctly add every element of `arr` to `total`?",
    code: `
      I.   for (int[] row : arr)
           {
               for (int v : row)
               {
                   total += v;
               }
           }

      II.  for (int c = 0; c < arr[0].length; c++)
           {
               for (int r = 0; r < arr.length; r++)
               {
                   total += arr[r][c];
               }
           }

      III. for (int r = 0; r < arr.length; r++)
           {
               for (int c = 0; c < arr.length; c++)
               {
                   total += arr[r][c];
               }
           }
    `,
    choices: ["I only", "II only", "I and III only", "I and II only"],
    answer: "D",
    explanation: "I is a row-major traversal and II is a column-major traversal, and both visit every element. III uses the number of rows as the column bound, so it skips columns or throws an exception when the array is not square."
  },
  {
    id: "4.13-20",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      int[][] v = { {-2, 3},
                    {0, -5},
                    {-1, -1} };
      int count = 0;
      for (int r = 0; r < v.length; r++)
      {
          for (int c = 0; c < v[r].length; c++)
          {
              if (v[r][c] < 0)
              {
                  v[r][c] = 0;
                  count++;
              }
          }
      }
      System.out.println(count + " " + v[2][1]);
    `,
    choices: ["4 -1", "3 0", "4 0", "5 0"],
    answer: "C",
    explanation: "There are four negative values (-2, -5, -1, -1), and each is replaced by 0, so `v[2][1]` is now 0. The existing 0 is not negative, so it is not counted."
  },
]);

defineTopic(4, "4.14", "Searching Algorithms", [
  {
    id: "4.14-01",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int findValue(int[] arr, int target)
      {
          for (int i = 0; i < arr.length; i++)
          {
              if (arr[i] == target)
              {
                  return i;
              }
          }
          return -1;
      }

      int[] nums = {4, 7, 2, 7, 9};
      System.out.println(findValue(nums, 7));
    `,
    choices: ["1", "3", "2", "-1"],
    answer: "A",
    explanation: "Linear search checks elements from index 0 and returns as soon as it finds a match, so the first 7 at index 1 is returned. The second 7 at index 3 is never reached."
  },
  {
    id: "4.14-02",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int search(int[] arr, int target)
      {
          for (int i = arr.length - 1; i >= 0; i--)
          {
              if (arr[i] == target)
              {
                  return i;
              }
          }
          return -1;
      }

      int[] data = {5, 3, 8, 3, 1};
      System.out.println(search(data, 3));
    `,
    choices: ["1", "3", "4", "-1"],
    answer: "B",
    explanation: "This linear search starts at the last index and moves toward the front, so the first match it finds is the 3 at index 3. Answering 1 assumes the search starts at the front."
  },
  {
    id: "4.14-03",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static String findLoc(int[][] grid, int target)
      {
          for (int r = 0; r < grid.length; r++)
          {
              for (int c = 0; c < grid[r].length; c++)
              {
                  if (grid[r][c] == target)
                  {
                      return r + " " + c;
                  }
              }
          }
          return "none";
      }

      int[][] g = { {4, 9, 2},
                    {7, 5, 9},
                    {9, 1, 3} };
      System.out.println(findLoc(g, 9));
    `,
    choices: ["1 0", "2 0", "1 2", "0 1"],
    answer: "D",
    explanation: "Linear search on a 2D array accesses each row in turn and searches that row from left to right. The first 9 found is in row 0, column 1, so the method returns right away. 2 0 is the first 9 found going down the columns, and 1 0 swaps the row and column."
  },
  {
    id: "4.14-04",
    prompt: "The following method is intended to return `true` if `target` appears anywhere in `board` and `false` otherwise. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static boolean contains(String[][] board, String target)
      {
          for (String[] row : board)
          {
              for (String s : row)
              {
                  if (/* missing code */)
                  {
                      return true;
                  }
              }
          }
          return false;
      }
    `,
    choices: ["`row.equals(target)`", "`board.equals(target)`", "`s.equals(target)`", "`s.equals(row)`"],
    answer: "C",
    explanation: "The outer loop accesses each row, and the inner loop searches that row, so `s` is one `String` element to compare with `target`. `row` and `board` are arrays, so comparing them with a `String` always gives `false`."
  },
  {
    id: "4.14-05",
    prompt: "The following method is intended to return `true` if `target` appears anywhere in `arr` and `false` otherwise. Which of the following best describes the behavior of the method?",
    code: `
      /** Precondition: arr has at least one row and one column. */
      public static boolean found(int[][] arr, int target)
      {
          for (int r = 0; r < arr.length; r++)
          {
              for (int c = 0; c < arr[r].length; c++)
              {
                  if (arr[r][c] == target)
                  {
                      return true;
                  }
              }
              return false;
          }
          return false;
      }
    `,
    choices: [
      "The method works as intended.",
      "The method returns `true` only when `target` is in the first row of `arr`.",
      "The method returns `true` only when `target` is equal to `arr[0][0]`.",
      "The method always returns `false`."
    ],
    answer: "B",
    explanation: "The `return false` inside the outer loop runs as soon as the search of row 0 ends without a match, so no later row is searched. A linear search of a 2D array must search each row in turn and return `false` only after every row has been checked."
  },
  {
    id: "4.14-06",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int lastColumnOf(int[][] arr, int target)
      {
          for (int r = 0; r < arr.length; r++)
          {
              for (int c = arr[r].length - 1; c >= 0; c--)
              {
                  if (arr[r][c] == target)
                  {
                      return c;
                  }
              }
          }
          return -1;
      }

      int[][] data = { {5, 8, 0, 8},
                       {8, 6, 1, 2} };
      System.out.println(lastColumnOf(data, 8));
    `,
    choices: ["3", "1", "0", "-1"],
    answer: "A",
    explanation: "The rows are searched in order, but each row is searched from its last column to its first. In row 0 the 8 in column 3 is found first, so 3 is returned. Searching row 0 from the left would give 1, and 0 is the column of the 8 in row 1."
  },
  {
    id: "4.14-07",
    prompt: "Consider the following method. Assume `names` is an `ArrayList<String>` containing `[\"Ava\", \"Ben\", \"Cal\", \"Dee\"]`. What is printed as a result of executing the code segment that follows the method?",
    code: `
      public static int indexOfName(ArrayList<String> names, String target)
      {
          for (int i = 0; i < names.size(); i++)
          {
              if (names.get(i).equals(target))
              {
                  return i;
              }
          }
          return -1;
      }

      System.out.println(indexOfName(names, "Dee") + " " + indexOfName(names, "ben"));
    `,
    choices: ["3 1", "4 -1", "3 -1", "4 1"],
    answer: "C",
    explanation: "\"Dee\" is found at index 3 (indexes start at 0). The `equals` method is case-sensitive, so \"ben\" does not match \"Ben\" and the search returns -1."
  },
  {
    id: "4.14-08",
    prompt: "The following method is intended to return the index of the first occurrence of `target` in `arr`, or -1 if `target` is not found. Which of the following best describes the behavior of the method?",
    code: `
      public static int find(int[] arr, int target)
      {
          for (int i = 0; i < arr.length; i++)
          {
              if (arr[i] == target)
              {
                  return i;
              }
              else
              {
                  return -1;
              }
          }
          return -1;
      }
    `,
    choices: [
      "It works as intended for all arrays.",
      "It returns the index of the last occurrence of `target`, or -1 if it is not found.",
      "It always returns -1.",
      "It returns 0 if `arr[0]` equals `target`; otherwise it returns -1."
    ],
    answer: "D",
    explanation: "On the first iteration the method returns either 0 or -1, so no element after index 0 is ever checked. Returning -1 must happen only after the loop has examined every element."
  },
  {
    id: "4.14-09",
    prompt: "Which of the following statements about linear search is true?",
    choices: [
      "It checks elements one at a time, starting from either end, until the target is found or every element has been checked.",
      "It works only if the elements are sorted.",
      "It can be used with an array but not with an `ArrayList`.",
      "It always checks every element, even after the target has been found."
    ],
    answer: "A",
    explanation: "Linear search examines elements in order from one end until it finds the target or runs out of elements. It does not need sorted data, it works on arrays and `ArrayList` objects, and it can stop as soon as the target is found."
  },
  {
    id: "4.14-10",
    prompt: "Consider the following method. `scores` is an `ArrayList<Integer>` containing `[72, 95, 88, 95, 60]`. What value is returned by the call `lastAbove(scores, 90)`?",
    code: `
      public static int lastAbove(ArrayList<Integer> list, int limit)
      {
          for (int i = list.size() - 1; i >= 0; i--)
          {
              if (list.get(i) > limit)
              {
                  return i;
              }
          }
          return -1;
      }
    `,
    choices: ["1", "95", "4", "3"],
    answer: "D",
    explanation: "The search starts at the last index and moves toward the front, so the first match it finds is the 95 at index 3. Searching from the front would return 1, and the method returns an index, not the element."
  },
  {
    id: "4.14-11",
    prompt: "An array contains 50 elements, and a linear search is performed for a value that is not in the array. How many elements are compared to the target?",
    choices: ["1", "50", "25", "49"],
    answer: "B",
    explanation: "Linear search stops early only when it finds the target. When the target is absent, all 50 elements must be checked before the search can report that it was not found."
  },
  {
    id: "4.14-12",
    prompt: "Consider the following methods. What is printed as a result of executing the code segment that follows them?",
    code: `
      public static int indexIn(int[] row, int target)
      {
          for (int i = 0; i < row.length; i++)
          {
              if (row[i] == target)
              {
                  return i;
              }
          }
          return -1;
      }

      public static int countRowsWith(int[][] arr, int target)
      {
          int count = 0;
          for (int[] row : arr)
          {
              if (indexIn(row, target) != -1)
              {
                  count++;
              }
          }
          return count;
      }

      int[][] m = { {1, 4, 4},
                    {2, 3, 5},
                    {4, 0, 6},
                    {7, 8, 9} };
      System.out.println(countRowsWith(m, 4));
    `,
    choices: ["3", "1", "2", "0"],
    answer: "C",
    explanation: "`countRowsWith` accesses each row and applies the linear search `indexIn` to it. Rows 0 and 2 contain 4, so 2 is printed. Answering 3 counts the occurrences of 4 instead of the rows that contain it."
  },
  {
    id: "4.14-13",
    prompt: "Which of the following statements about linear search are true?",
    code: `
      I.   Linear search can be used on data that is not sorted.
      II.  To search a 2D array, linear search can be applied to each
           row of the array in turn.
      III. A linear search must begin at index 0.
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "I and II are true: linear search makes no assumption about order, and a 2D array is searched by accessing each row and searching it. III is false, because a linear search can start at either end."
  },
  {
    id: "4.14-14",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int countChecks(int[] arr, int target)
      {
          int checks = 0;
          for (int i = 0; i < arr.length; i++)
          {
              checks++;
              if (arr[i] == target)
              {
                  return checks;
              }
          }
          return checks;
      }

      int[] vals = {10, 20, 30, 40, 50, 60};
      System.out.println(countChecks(vals, 50) + " " + countChecks(vals, 35));
    `,
    choices: ["5 6", "4 6", "5 -1", "4 5"],
    answer: "A",
    explanation: "Finding 50 examines indexes 0 through 4, which is 5 elements. Searching for 35 examines all 6 elements and then returns the count, not -1; answering 4 confuses the index of 50 with the number of elements checked."
  },
  {
    id: "4.14-15",
    prompt: "The following method is intended to return the index of the last occurrence of `target` in `words`, or -1 if `target` does not appear. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static int lastIndexOf(String[] words, String target)
      {
          /* missing code */
          {
              if (words[i].equals(target))
              {
                  return i;
              }
          }
          return -1;
      }
    `,
    choices: [
      "`for (int i = words.length; i >= 0; i--)`",
      "`for (int i = 0; i < words.length; i++)`",
      "`for (int i = words.length - 1; i > 0; i--)`",
      "`for (int i = words.length - 1; i >= 0; i--)`"
    ],
    answer: "D",
    explanation: "Searching from the last index toward the front finds the last occurrence first, and the loop must include index 0. Starting at `words.length` throws an `ArrayIndexOutOfBoundsException`, the forward loop returns the first occurrence, and `i > 0` never checks index 0."
  },
  {
    id: "4.14-16",
    prompt: "Consider the following method. Which of the following best describes the value returned by `mystery`?",
    code: `
      public static int mystery(ArrayList<Integer> list, int target)
      {
          int result = -1;
          for (int i = 0; i < list.size(); i++)
          {
              if (list.get(i) == target)
              {
                  result = i;
              }
          }
          return result;
      }
    `,
    choices: [
      "The index of the first occurrence of `target` in `list`, or -1 if `target` is not in `list`",
      "The index of the last occurrence of `target` in `list`, or -1 if `target` is not in `list`",
      "The number of times `target` occurs in `list`",
      "-1 unless `target` occurs exactly once in `list`"
    ],
    answer: "B",
    explanation: "The loop never stops early, so each match overwrites `result` and the final value is the index of the last match. If there is no match, `result` keeps its initial value of -1."
  },
  {
    id: "4.14-17",
    prompt: "What is printed as a result of executing the following code segment?",
    code: `
      ArrayList<String> names = new ArrayList<String>();
      names.add("Kim");
      names.add("Lee");
      names.add("Ana");
      names.add("Lou");
      int i = 0;
      while (i < names.size() && !names.get(i).substring(0, 1).equals("A"))
      {
          i++;
      }
      System.out.println(i);
    `,
    choices: ["3", "Ana", "1", "2"],
    answer: "D",
    explanation: "The loop moves past each name until it finds one that starts with A or runs out of names. Kim and Lee are skipped, and the search stops at index 2, which is printed. The value printed is an index, not the name."
  },
  {
    id: "4.14-18",
    prompt: "A 2D array `seats` has 6 rows and 10 columns. A linear search examines the elements row by row, from left to right in each row, and finds the target at `seats[2][4]`. How many elements were examined, including the one that matched?",
    choices: ["25", "24", "27", "7"],
    answer: "A",
    explanation: "Rows 0 and 1 are searched completely, which is 20 elements, and then columns 0 through 4 of row 2 are examined, which is 5 more, for a total of 25. Answering 24 leaves out the matching element, and 27 is the count when searching down the columns."
  },
  {
    id: "4.14-19",
    prompt: "Consider the following method. Suppose the `while` condition is rewritten as `arr[index] != target && index < arr.length`. What happens when the rewritten method is called with a `target` that is not in `arr`?",
    code: `
      public static int locate(int[] arr, int target)
      {
          int index = 0;
          while (index < arr.length && arr[index] != target)
          {
              index++;
          }
          if (index == arr.length)
          {
              return -1;
          }
          return index;
      }
    `,
    choices: [
      "The method returns -1.",
      "The method returns `arr.length`.",
      "An `ArrayIndexOutOfBoundsException` is thrown.",
      "The loop never terminates."
    ],
    answer: "C",
    explanation: "When `index` reaches `arr.length`, the rewritten condition evaluates `arr[index]` before checking the bound, so the exception is thrown. In the original order, short-circuit evaluation stops at `index < arr.length` being false."
  },
  {
    id: "4.14-20",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int findIndex(int[] arr, int target)
      {
          int index = 0;
          for (int value : arr)
          {
              if (value == target)
              {
                  return index;
              }
              index++;
          }
          return -1;
      }

      int[] a = {8, 4, 6, 4};
      System.out.println(findIndex(a, 6) + " " + findIndex(a, 5));
    `,
    choices: ["6 -1", "2 -1", "3 -1", "2 4"],
    answer: "B",
    explanation: "The enhanced for loop gives values, so the method keeps its own `index` counter; 6 is found when `index` is 2. The value 5 is not in the array, so the method returns -1, not the final counter value of 4."
  }
]);

defineTopic(4, "4.15", "Sorting Algorithms", [
  {
    id: "4.15-01",
    prompt: "Consider the following method. The array `arr` contains `{5, 3, 8, 1, 4}`, and `selectionSort(arr)` is called. What are the contents of `arr` after the first iteration of the outer loop?",
    code: `
      public static void selectionSort(int[] elements)
      {
          for (int j = 0; j < elements.length - 1; j++)
          {
              int minIndex = j;
              for (int k = j + 1; k < elements.length; k++)
              {
                  if (elements[k] < elements[minIndex])
                  {
                      minIndex = k;
                  }
              }
              int temp = elements[j];
              elements[j] = elements[minIndex];
              elements[minIndex] = temp;
          }
      }
    `,
    choices: ["`{1, 5, 3, 8, 4}`", "`{1, 3, 8, 5, 4}`", "`{3, 5, 8, 1, 4}`", "`{1, 3, 4, 5, 8}`"],
    answer: "B",
    explanation: "The first pass finds the smallest value, 1 at index 3, and swaps it with the 5 at index 0; no other elements move. Shifting everything right to make room is how insertion sort behaves, not selection sort."
  },
  {
    id: "4.15-02",
    prompt: "Consider the following method. The array `arr` contains `{7, 2, 9, 4, 1}`, and `insertionSort(arr)` is called. What are the contents of `arr` after the outer loop has executed three times?",
    code: `
      public static void insertionSort(int[] elements)
      {
          for (int j = 1; j < elements.length; j++)
          {
              int temp = elements[j];
              int possibleIndex = j;
              while (possibleIndex > 0 && temp < elements[possibleIndex - 1])
              {
                  elements[possibleIndex] = elements[possibleIndex - 1];
                  possibleIndex--;
              }
              elements[possibleIndex] = temp;
          }
      }
    `,
    choices: ["`{1, 2, 9, 4, 7}`", "`{2, 7, 9, 4, 1}`", "`{1, 2, 4, 9, 7}`", "`{2, 4, 7, 9, 1}`"],
    answer: "D",
    explanation: "Passes for j = 1, 2, 3 insert 2, 9, and 4 into the sorted front section, giving `{2, 4, 7, 9, 1}`; the 1 has not been looked at yet. Choice C is what selection sort would produce after three passes."
  },
  {
    id: "4.15-03",
    prompt: "An array initially contains `{6, 1, 5, 2, 9, 3}`. It is being sorted into ascending order using either the standard selection sort or the standard insertion sort. After some iterations of the outer loop, the array contains `{1, 5, 6, 2, 9, 3}`. Which of the following could describe the sort and the number of completed passes?",
    choices: [
      "Insertion sort, after two passes",
      "Selection sort, after two passes",
      "Selection sort, after three passes",
      "Insertion sort, after three passes"
    ],
    answer: "A",
    explanation: "The first three elements are sorted among themselves but 2 is not yet in front, which is the signature of insertion sort; inserting 1 and then 5 gives exactly this state. Selection sort would have placed 1 and then 2 at the front after two passes."
  },
  {
    id: "4.15-04",
    prompt: "Consider the following method. An array of 6 elements that is already in ascending order is passed to `selectionSort`. How many times are the three statements that swap two elements executed?",
    code: `
      public static void selectionSort(int[] elements)
      {
          for (int j = 0; j < elements.length - 1; j++)
          {
              int minIndex = j;
              for (int k = j + 1; k < elements.length; k++)
              {
                  if (elements[k] < elements[minIndex])
                  {
                      minIndex = k;
                  }
              }
              int temp = elements[j];
              elements[j] = elements[minIndex];
              elements[minIndex] = temp;
          }
      }
    `,
    choices: ["0", "1", "5", "6"],
    answer: "C",
    explanation: "The swap statements are not inside an `if`, so they run once per pass of the outer loop, which runs `elements.length - 1` = 5 times. When the array is already sorted, each swap simply exchanges an element with itself."
  },
  {
    id: "4.15-05",
    prompt: "Consider the following code segment, which applies insertion sort to an `ArrayList<Integer>`. Assume `list` contains `[30, 50, 10, 40, 20]`. What are the contents of `list` after the outer loop has executed twice?",
    code: `
      for (int j = 1; j < list.size(); j++)
      {
          int temp = list.get(j);
          int possibleIndex = j;
          while (possibleIndex > 0 && temp < list.get(possibleIndex - 1))
          {
              list.set(possibleIndex, list.get(possibleIndex - 1));
              possibleIndex--;
          }
          list.set(possibleIndex, temp);
      }
    `,
    choices: ["`[10, 30, 50, 40, 20]`", "`[10, 20, 50, 40, 30]`", "`[10, 50, 30, 40, 20]`", "`[10, 30, 40, 50, 20]`"],
    answer: "A",
    explanation: "Pass 1 inserts 50, which is already after 30, so nothing moves. Pass 2 shifts 50 and 30 right and inserts 10 at the front. Choice `[10, 20, 50, 40, 30]` is what selection sort would produce after two passes."
  },
  {
    id: "4.15-06",
    prompt: "Consider the following method. When `insertionSort` is called on the array `{5, 4, 3, 2, 1}`, how many times is the statement `elements[possibleIndex] = elements[possibleIndex - 1];` executed?",
    code: `
      public static void insertionSort(int[] elements)
      {
          for (int j = 1; j < elements.length; j++)
          {
              int temp = elements[j];
              int possibleIndex = j;
              while (possibleIndex > 0 && temp < elements[possibleIndex - 1])
              {
                  elements[possibleIndex] = elements[possibleIndex - 1];
                  possibleIndex--;
              }
              elements[possibleIndex] = temp;
          }
      }
    `,
    choices: ["4", "5", "10", "25"],
    answer: "C",
    explanation: "In reverse order, each new element must move all the way to the front: 1 + 2 + 3 + 4 = 10 shifts. Answering 4 counts only the passes of the outer loop, not the shifts within each pass."
  },
  {
    id: "4.15-07",
    prompt: "The following method is intended to sort `elements` into ascending order using selection sort. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static void selectionSort(int[] elements)
      {
          for (int j = 0; j < elements.length - 1; j++)
          {
              int minIndex = j;
              for (int k = j + 1; k < elements.length; k++)
              {
                  if (/* missing code */)
                  {
                      minIndex = k;
                  }
              }
              int temp = elements[j];
              elements[j] = elements[minIndex];
              elements[minIndex] = temp;
          }
      }
    `,
    choices: [
      "`elements[k] < elements[j]`",
      "`elements[k] < elements[minIndex]`",
      "`elements[k] > elements[minIndex]`",
      "`k < minIndex`"
    ],
    answer: "B",
    explanation: "Each candidate must be compared with the smallest value found so far, which is at `minIndex`. Comparing with `elements[j]` lets a later, larger element replace a smaller one already found (for example `{5, 1, 3}` would not be sorted), and `>` sorts in descending order."
  },
  {
    id: "4.15-08",
    prompt: "The following method is intended to sort `elements` into ascending order using insertion sort. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      public static void insertionSort(int[] elements)
      {
          for (int j = 1; j < elements.length; j++)
          {
              int temp = elements[j];
              int possibleIndex = j;
              while (possibleIndex > 0 && /* missing code */)
              {
                  elements[possibleIndex] = elements[possibleIndex - 1];
                  possibleIndex--;
              }
              elements[possibleIndex] = temp;
          }
      }
    `,
    choices: [
      "`temp > elements[possibleIndex - 1]`",
      "`elements[possibleIndex] < elements[possibleIndex - 1]`",
      "`temp < elements[possibleIndex]`",
      "`temp < elements[possibleIndex - 1]`"
    ],
    answer: "D",
    explanation: "Elements are shifted right while the value being inserted, `temp`, is smaller than the element to its left. Choice B fails because after the first shift `elements[possibleIndex]` no longer holds `temp`, and choice A sorts in descending order."
  },
  {
    id: "4.15-09",
    prompt: "The following method is a version of selection sort that sorts into descending order. The array `arr` contains `{4, 9, 2, 7, 5}`, and `sortDown(arr)` is called. What are the contents of `arr` after the outer loop has executed twice?",
    code: `
      public static void sortDown(int[] elements)
      {
          for (int j = 0; j < elements.length - 1; j++)
          {
              int maxIndex = j;
              for (int k = j + 1; k < elements.length; k++)
              {
                  if (elements[k] > elements[maxIndex])
                  {
                      maxIndex = k;
                  }
              }
              int temp = elements[j];
              elements[j] = elements[maxIndex];
              elements[maxIndex] = temp;
          }
      }
    `,
    choices: ["`{9, 7, 5, 4, 2}`", "`{9, 7, 2, 4, 5}`", "`{9, 4, 2, 7, 5}`", "`{2, 4, 9, 7, 5}`"],
    answer: "B",
    explanation: "Pass 1 swaps the 9 into index 0, giving `{9, 4, 2, 7, 5}`. Pass 2 finds 7 as the largest of the remaining values and swaps it with the 4 at index 1, giving `{9, 7, 2, 4, 5}`; the rest is not sorted yet."
  },
  {
    id: "4.15-10",
    prompt: "An array of distinct values is being sorted into ascending order. During each iteration of the outer loop, selection sort places one element and insertion sort inserts one element. Which of the following statements is true?",
    choices: [
      "The element placed by selection sort is in its final position, but the element inserted by insertion sort may be moved again in a later pass.",
      "The element inserted by insertion sort is in its final position, but the element placed by selection sort may be moved again in a later pass.",
      "In both algorithms, the element placed during a pass is in its final position.",
      "In both algorithms, the element placed during a pass may be moved again in a later pass."
    ],
    answer: "A",
    explanation: "Selection sort swaps the smallest remaining value into its correct and final position. Insertion sort puts a value into its correct place within the sorted section so far, but a smaller value inserted later will shift it to the right."
  },
  {
    id: "4.15-11",
    prompt: "Consider the following method. The array `names` contains `{\"Raj\", \"Eve\", \"Tom\", \"Ann\", \"Kai\"}`, and `sortNames(names)` is called. What are the contents of `names` after the outer loop has executed twice?",
    code: `
      public static void sortNames(String[] names)
      {
          for (int j = 0; j < names.length - 1; j++)
          {
              int minIndex = j;
              for (int k = j + 1; k < names.length; k++)
              {
                  if (names[k].compareTo(names[minIndex]) < 0)
                  {
                      minIndex = k;
                  }
              }
              String temp = names[j];
              names[j] = names[minIndex];
              names[minIndex] = temp;
          }
      }
    `,
    choices: ["Ann, Eve, Kai, Raj, Tom", "Ann, Raj, Eve, Tom, Kai", "Eve, Raj, Tom, Ann, Kai", "Ann, Eve, Tom, Raj, Kai"],
    answer: "D",
    explanation: "Pass 1 finds \"Ann\", the alphabetically smallest name, and swaps it with \"Raj\" at index 0. Pass 2 finds that \"Eve\" is already the smallest remaining name, so it is swapped with itself. Choice B shifts names the way insertion sort would."
  },
  {
    id: "4.15-12",
    prompt: "Consider the following code segment, which applies selection sort to an `ArrayList<Integer>`. Assume `list` contains `[40, 10, 50, 20, 30]`. What are the contents of `list` after the outer loop has executed twice?",
    code: `
      for (int j = 0; j < list.size() - 1; j++)
      {
          int minIndex = j;
          for (int k = j + 1; k < list.size(); k++)
          {
              if (list.get(k) < list.get(minIndex))
              {
                  minIndex = k;
              }
          }
          int temp = list.get(j);
          list.set(j, list.get(minIndex));
          list.set(minIndex, temp);
      }
    `,
    choices: ["`[10, 20, 30, 40, 50]`", "`[10, 40, 50, 20, 30]`", "`[10, 20, 50, 40, 30]`", "`[10, 20, 40, 50, 30]`"],
    answer: "C",
    explanation: "Pass 1 swaps 10 and 40, giving `[10, 40, 50, 20, 30]`. Pass 2 finds 20 at index 3 and swaps it with the 40 at index 1, giving `[10, 20, 50, 40, 30]`. Choice D shifts elements the way insertion sort would."
  },
  {
    id: "4.15-13",
    prompt: "Consider the following method. The array `fruits` contains `{\"pear\", \"apple\", \"fig\", \"kiwi\"}`, and `sortWords(fruits)` is called. What are the contents of `fruits` after the outer loop has executed twice?",
    code: `
      public static void sortWords(String[] words)
      {
          for (int j = 1; j < words.length; j++)
          {
              String temp = words[j];
              int possibleIndex = j;
              while (possibleIndex > 0 && temp.compareTo(words[possibleIndex - 1]) < 0)
              {
                  words[possibleIndex] = words[possibleIndex - 1];
                  possibleIndex--;
              }
              words[possibleIndex] = temp;
          }
      }
    `,
    choices: [
      "apple, fig, pear, kiwi",
      "apple, pear, fig, kiwi",
      "apple, fig, kiwi, pear",
      "fig, apple, pear, kiwi"
    ],
    answer: "A",
    explanation: "Pass 1 inserts \"apple\" before \"pear\". Pass 2 shifts \"pear\" right and stops before \"apple\", placing \"fig\" at index 1. \"kiwi\" has not been processed yet, so the array is not fully sorted."
  },
  {
    id: "4.15-14",
    prompt: "An array initially contains `{9, 3, 1, 7, 2, 8, 5}`. After three iterations of the outer loop of a standard sorting algorithm, the array contains `{1, 2, 3, 7, 9, 8, 5}`. Which algorithm could have produced this state?",
    choices: [
      "Insertion sort only",
      "Both selection sort and insertion sort",
      "Neither selection sort nor insertion sort",
      "Selection sort only"
    ],
    answer: "D",
    explanation: "The front holds the three smallest values in order, and the 9 has moved to index 4 by a swap; that matches selection sort exactly. After three passes insertion sort would have sorted only the original first four values, giving `{1, 3, 7, 9, 2, 8, 5}`."
  },
  {
    id: "4.15-15",
    prompt: "An array of distinct integers is being sorted into ascending order with the standard algorithms. Which of the following statements are true after k iterations of the outer loop?",
    code: `
      I.   For selection sort, the first k elements are the k smallest
           values in the array, in sorted order.
      II.  For insertion sort, the first k + 1 elements are in sorted
           order relative to each other.
      III. For insertion sort, the first k + 1 elements are the k + 1
           smallest values in the array.
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "Selection sort places the next smallest value on each pass, and insertion sort keeps its front section sorted. Statement III is false because insertion sort has only looked at the first k + 1 elements, and a smaller value may still be later in the array."
  },
  {
    id: "4.15-16",
    prompt: "Consider the following method. What is printed when `selectionSort` is called on the array `{6, 2, 8, 1, 5}`?",
    code: `
      public static void selectionSort(int[] elements)
      {
          for (int j = 0; j < elements.length - 1; j++)
          {
              int minIndex = j;
              for (int k = j + 1; k < elements.length; k++)
              {
                  if (elements[k] < elements[minIndex])
                  {
                      minIndex = k;
                  }
              }
              System.out.print(minIndex + " ");
              int temp = elements[j];
              elements[j] = elements[minIndex];
              elements[minIndex] = temp;
          }
      }
    `,
    choices: ["3 1 4 4", "3 1 4 3", "3 3 4 3", "1 2 5 6"],
    answer: "B",
    explanation: "The array changes after each swap: `{1, 2, 8, 6, 5}`, then unchanged, then `{1, 2, 5, 6, 8}`. The minimum indexes found are 3, 1, 4, and finally 3 (the 6). Choice D prints values instead of indexes."
  },
  {
    id: "4.15-17",
    prompt: "Consider the following method. What is printed when `insertionSort` is called on the array `{4, 1, 3, 2}`?",
    code: `
      public static void insertionSort(int[] elements)
      {
          for (int j = 1; j < elements.length; j++)
          {
              int temp = elements[j];
              int possibleIndex = j;
              while (possibleIndex > 0 && temp < elements[possibleIndex - 1])
              {
                  elements[possibleIndex] = elements[possibleIndex - 1];
                  possibleIndex--;
              }
              elements[possibleIndex] = temp;
              System.out.print(possibleIndex + " ");
          }
      }
    `,
    choices: ["0 1 1", "0 1 2", "1 2 3", "0 2 1"],
    answer: "A",
    explanation: "1 is inserted at index 0, giving `{1, 4, 3, 2}`; 3 is inserted at index 1, giving `{1, 3, 4, 2}`; 2 shifts past 4 and 3 and lands at index 1. Choice C prints `j`, the position each value started at."
  },
  {
    id: "4.15-18",
    prompt: "A student writes the following version of selection sort, which swaps elements without a temporary variable. What are the contents of `arr` after `badSort(arr)` is called, where `arr` contains `{3, 1, 2}`?",
    code: `
      public static void badSort(int[] elements)
      {
          for (int j = 0; j < elements.length - 1; j++)
          {
              int minIndex = j;
              for (int k = j + 1; k < elements.length; k++)
              {
                  if (elements[k] < elements[minIndex])
                  {
                      minIndex = k;
                  }
              }
              elements[j] = elements[minIndex];
              elements[minIndex] = elements[j];
          }
      }
    `,
    choices: ["`{1, 2, 3}`", "`{3, 1, 2}`", "`{1, 1, 2}`", "`{1, 2, 2}`"],
    answer: "C",
    explanation: "In the first pass, `elements[0]` is overwritten with 1 and then 1 is copied back into index 1, so the 3 is lost. A correct swap needs a temporary variable to hold the original value."
  },
  {
    id: "4.15-19",
    prompt: "In the standard insertion sort, the outer loop variable `j` starts at 1 rather than 0. Which of the following best explains why?",
    choices: [
      "Index 0 is reserved for a temporary value during the sort.",
      "Java arrays begin at index 1.",
      "Starting at 0 would sort the array into descending order.",
      "A section containing only the element at index 0 is already sorted, so the first element to insert is at index 1."
    ],
    answer: "D",
    explanation: "Insertion sort grows a sorted section at the front of the array, and a single element is trivially sorted. Java arrays start at index 0, which is why that element is the starting sorted section."
  },
  {
    id: "4.15-20",
    prompt: "Each of the following arrays is sorted into ascending order with the standard insertion sort. For which array will the fewest elements be shifted?",
    choices: ["`{5, 4, 3, 2, 1}`", "`{1, 2, 3, 5, 4}`", "`{2, 1, 4, 3, 5}`", "`{3, 1, 2, 5, 4}`"],
    answer: "B",
    explanation: "Only the 4 is out of place, so a single shift moves 5 right and 4 is inserted; the other arrays need 10, 2, and 3 shifts. Insertion sort does the least work on nearly sorted data."
  }
]);

defineTopic(4, "4.16", "Recursion", [
  {
    id: "4.16-01",
    prompt: "Consider the following method. What value is returned by the call `factorial(5)`?",
    code: `
      public static int factorial(int n)
      {
          if (n <= 1)
          {
              return 1;
          }
          return n * factorial(n - 1);
      }
    `,
    choices: ["5", "15", "120", "24"],
    answer: "C",
    explanation: "The calls multiply 5 * 4 * 3 * 2 * 1 = 120, with `factorial(1)` as the base case returning 1. Answering 15 adds the values instead of multiplying, and 24 is `factorial(4)`."
  },
  {
    id: "4.16-02",
    prompt: "Consider the following method. What value is returned by the call `sumDigits(2026)`?",
    code: `
      public static int sumDigits(int n)
      {
          if (n == 0)
          {
              return 0;
          }
          return n % 10 + sumDigits(n / 10);
      }
    `,
    choices: ["10", "2", "6", "202"],
    answer: "A",
    explanation: "Each call adds the last digit (`n % 10`) and recurses on the number with that digit removed (`n / 10`): 6 + 2 + 0 + 2 + 0 = 10. The base case is reached when `n` becomes 0."
  },
  {
    id: "4.16-03",
    prompt: "Consider the following method. What value is returned by the call `mystery(5821)`?",
    code: `
      public static int mystery(int n)
      {
          if (n < 10)
          {
              return n;
          }
          return mystery(n / 10);
      }
    `,
    choices: ["1", "582", "58", "5"],
    answer: "D",
    explanation: "Each call removes the last digit with integer division: 5821, 582, 58, then 5, which is less than 10 and is returned. The method returns the leftmost digit; answering 1 confuses `n / 10` with `n % 10`."
  },
  {
    id: "4.16-04",
    prompt: "Consider the following method. Which of the following code segments stores in `result` the same value that `sumSquares(n)` returns, for any `n` greater than or equal to 0?",
    code: `
      public static int sumSquares(int n)
      {
          if (n == 0)
          {
              return 0;
          }
          return n * n + sumSquares(n - 1);
      }
    `,
    choices: [
      "int result = 0;\nfor (int k = 1; k < n; k++)\n{\n    result += k * k;\n}",
      "int result = 0;\nfor (int k = 1; k <= n; k++)\n{\n    result += k * k;\n}",
      "int result = 1;\nfor (int k = 1; k <= n; k++)\n{\n    result *= k * k;\n}",
      "int result = 0;\nfor (int k = 1; k <= n; k++)\n{\n    result += k;\n}"
    ],
    answer: "B",
    explanation: "`sumSquares(n)` adds n * n, then (n - 1) * (n - 1), and so on down to the base case, which returns 0. The loop from 1 through n computes the same sum, which shows that a recursive solution can be replaced by an iterative one. Stopping at `k < n` leaves out n * n."
  },
  {
    id: "4.16-05",
    prompt: "Consider the following method. What is printed as a result of the call `printNums(4)`?",
    code: `
      public static void printNums(int n)
      {
          if (n > 0)
          {
              printNums(n - 1);
              System.out.print(n + " ");
          }
      }
    `,
    choices: ["1 2 3 4", "4 3 2 1", "4 3 2 1 0", "0 1 2 3 4"],
    answer: "A",
    explanation: "The recursive call comes before the print, so each call waits until the smaller calls have finished printing. `printNums(1)` prints first, then 2, 3, and 4; `printNums(0)` prints nothing."
  },
  {
    id: "4.16-06",
    prompt: "Consider the following method. What is printed as a result of the call `show(3)`?",
    code: `
      public static void show(int n)
      {
          if (n > 0)
          {
              System.out.print(n + " ");
              show(n - 1);
              System.out.print(n + " ");
          }
      }
    `,
    choices: ["3 2 1", "3 2 1 0 1 2 3", "3 3 2 2 1 1", "3 2 1 1 2 3"],
    answer: "D",
    explanation: "Each call prints `n` on the way down, then waits for the recursive call, then prints `n` again on the way back. `show(0)` prints nothing, so the output is 3 2 1 1 2 3."
  },
  {
    id: "4.16-07",
    prompt: "Consider the following method. What is the result of the call `sum(3)`?",
    code: `
      public static int sum(int n)
      {
          return n + sum(n - 1);
      }
    `,
    choices: [
      "6",
      "3",
      "The method keeps calling itself because it has no base case, so the program fails with a run-time error.",
      "The code does not compile because the method has no base case."
    ],
    answer: "C",
    explanation: "The method compiles, but every call makes another call (3, 2, 1, 0, -1, and so on), so the recursion never stops until the program runs out of memory for the calls and fails. A base case that returns without making a recursive call, such as returning 0 when `n` is 0, is needed."
  },
  {
    id: "4.16-08",
    prompt: "Consider the following method. Which of the following calls results in infinite recursion?",
    code: `
      public static int halve(int n)
      {
          if (n == 0)
          {
              return 0;
          }
          return 1 + halve(n - 2);
      }
    `,
    choices: ["`halve(0)`", "`halve(7)`", "`halve(4)`", "`halve(10)`"],
    answer: "B",
    explanation: "Starting from an odd number, subtracting 2 gives 5, 3, 1, -1, ... and never equals 0, so the base case is skipped. Even arguments reach 0 and stop."
  },
  {
    id: "4.16-09",
    prompt: "Consider the following method. How many times is `f` called, including the initial call, as a result of the call `f(4)`?",
    code: `
      public static int f(int n)
      {
          if (n <= 1)
          {
              return n;
          }
          return f(n - 1) + f(n - 2);
      }
    `,
    choices: ["4", "5", "3", "9"],
    answer: "D",
    explanation: "Each call with n of 2 or more makes two calls. `f(2)` makes 3 calls in total, `f(3)` makes 1 + 3 + 1 = 5, and `f(4)` makes 1 + 5 + 3 = 9. Answering 5 counts only one call per value of n."
  },
  {
    id: "4.16-10",
    prompt: "Consider the following method. What is printed as a result of the call `showDoubles(3)`?",
    code: `
      public static void showDoubles(int n)
      {
          int x = n * 2;
          if (n > 0)
          {
              showDoubles(n - 1);
          }
          System.out.print(x + " ");
      }
    `,
    choices: ["0 2 4 6", "6 4 2 0", "0 0 0 0", "6 6 6 6"],
    answer: "A",
    explanation: "Each call has its own local variable `x`, so the calls with n equal to 3, 2, 1, and 0 store 6, 4, 2, and 0. The print happens after the recursive call returns, so the innermost call prints 0 first, and then each earlier call prints its own `x`."
  },
  {
    id: "4.16-11",
    prompt: "Which of the following statements about recursion and iteration is true?",
    choices: [
      "Some problems can be solved with recursion but cannot be solved with loops.",
      "Any recursive solution can be rewritten using iteration, and any iterative solution can be rewritten using recursion.",
      "A recursive method cannot use its parameters to keep track of its progress, so it needs a loop to do so.",
      "Recursion is not a form of repetition, because each call runs only once."
    ],
    answer: "B",
    explanation: "Recursion is another form of repetition, and any recursive solution can be replicated with an iterative approach and vice versa. The parameters of a recursive method track its progress much like a loop control variable does."
  },
  {
    id: "4.16-12",
    prompt: "Consider the following method. What value is returned by the call `digits(40517)`?",
    code: `
      public static int digits(int n)
      {
          if (n < 10)
          {
              return 1;
          }
          return 1 + digits(n / 10);
      }
    `,
    choices: ["4", "40517", "5", "1"],
    answer: "C",
    explanation: "Each call removes the last digit with `n / 10` and adds 1, so the arguments are 40517, 4051, 405, 40, and 4. The base case returns 1 for 4, and the four earlier calls each add 1, giving 5."
  },
  {
    id: "4.16-13",
    prompt: "Consider the following method. What value is returned by the call `steps(13)`?",
    code: `
      public static int steps(int n)
      {
          if (n == 1)
          {
              return 0;
          }
          if (n % 2 == 0)
          {
              return 1 + steps(n / 2);
          }
          return 1 + steps(n + 1);
      }
    `,
    choices: ["6", "7", "5", "4"],
    answer: "A",
    explanation: "The sequence of arguments is 13, 14, 7, 8, 4, 2, 1. Six calls each add 1 before the base case returns 0, so the result is 6. Answering 7 counts the number of calls rather than the number of steps."
  },
  {
    id: "4.16-14",
    prompt: "Consider the following method. What value is returned by the call `mystery(1, 8)`?",
    code: `
      public static int mystery(int a, int b)
      {
          if (a > b)
          {
              return 0;
          }
          return a + mystery(a + 2, b);
      }
    `,
    choices: ["36", "9", "16", "25"],
    answer: "C",
    explanation: "The parameter `a` tracks the progress like a loop control variable: the calls use a equal to 1, 3, 5, 7, and then 9, where `a > b` and the base case returns 0. The result is 1 + 3 + 5 + 7 = 16; answering 25 also adds the 9, which is past `b`."
  },
  {
    id: "4.16-15",
    prompt: "Consider the following method. What value is returned by the call `grow(7)`?",
    code: `
      public static int grow(int n)
      {
          if (n <= 0)
          {
              return 1;
          }
          int result = grow(n - 2);
          result = result * 2;
          return result;
      }
    `,
    choices: ["128", "8", "14", "16"],
    answer: "D",
    explanation: "The calls are made with 7, 5, 3, 1, and -1, and the base case returns 1. Each of the other four calls has its own `result` and doubles the value returned to it, giving 2, 4, 8, and 16. Answering 128 doubles once for each value from 1 to 7."
  },
  {
    id: "4.16-16",
    prompt: "Consider the following method. What is printed as a result of the call `countdown(3)`?",
    code: `
      public static void countdown(int n)
      {
          if (n == 0)
          {
              System.out.println("Go");
          }
          else
          {
              System.out.print(n + " ");
              countdown(n - 1);
          }
      }
    `,
    choices: ["3 2 1", "3 2 1 Go", "Go 1 2 3", "3 2 1 0 Go"],
    answer: "B",
    explanation: "Each call with n not equal to 0 prints n and then makes a recursive call with n - 1. The call `countdown(0)` is the base case: it prints Go and makes no further call, so 0 is never printed."
  },
  {
    id: "4.16-17",
    prompt: "Which of the following must be true of a recursive method so that every call eventually finishes?",
    choices: [
      "It must contain a loop.",
      "It must return a value rather than being `void`.",
      "It must have a base case that does not make a recursive call, and each recursive call must move closer to a base case.",
      "It must call itself exactly once."
    ],
    answer: "C",
    explanation: "Without a base case that is eventually reached, the calls never stop. Recursive methods can be `void`, need no loop, and may call themselves more than once."
  },
  {
    id: "4.16-18",
    prompt: "Consider the following two methods. What is printed as a result of executing the code segment that follows them?",
    code: `
      public static int countHalves(int n)
      {
          int count = 0;
          while (n > 1)
          {
              n = n / 2;
              count++;
          }
          return count;
      }

      public static int countHalvesR(int n)
      {
          if (n <= 1)
          {
              return 0;
          }
          return 1 + countHalvesR(n / 2);
      }

      System.out.println(countHalves(20) + " " + countHalvesR(20));
    `,
    choices: ["4 4", "4 5", "5 5", "5 4"],
    answer: "A",
    explanation: "Both methods divide n by 2 until it is at most 1 and count the steps: 20, 10, 5, 2, 1 is 4 steps. The loop variable in `countHalves` plays the same role as the parameter in `countHalvesR`, so the iterative and recursive versions give the same result."
  },
  {
    id: "4.16-19",
    prompt: "Consider the following method. Which of the following best describes the value returned by `mystery(a, b)`?",
    code: `
      /** Precondition: b >= 0 */
      public static int mystery(int a, int b)
      {
          if (b == 0)
          {
              return 0;
          }
          return a + mystery(a, b - 1);
      }
    `,
    choices: ["`a + b`", "`a` raised to the power `b`", "`a * (b - 1)`", "`a * b`"],
    answer: "D",
    explanation: "The method adds `a` once for each value of `b` from `b` down to 1, and the base case adds 0, so the result is `a` added `b` times. For example, `mystery(3, 4)` is 3 + 3 + 3 + 3 + 0 = 12."
  },
  {
    id: "4.16-20",
    prompt: "Consider the following method. What is printed as a result of the call `printPattern(13)`?",
    code: `
      public static void printPattern(int n)
      {
          if (n > 1)
          {
              printPattern(n / 2);
          }
          System.out.print(n + " ");
      }
    `,
    choices: ["13 6 3 1", "1 3 6 13", "0 1 3 6 13", "13 6 3 1 0"],
    answer: "B",
    explanation: "The calls are made with 13, 6, 3, and 1 (integer division), and `printPattern(1)` does not recurse. Because each print happens after the recursive call returns, the smallest value is printed first."
  }
]);

defineTopic(4, "4.17", "Recursive Searching and Sorting", [
  {
    id: "4.17-01",
    prompt: "Consider the following method. The array `arr` contains `{1, 4, 7, 10, 13, 16, 19, 22, 25}`, and the call `binarySearch(arr, 22, 0, 8)` is made. Which values are assigned to `middle`, in order, across all of the calls?",
    code: `
      public static int binarySearch(int[] elements, int target,
                                     int startIndex, int endIndex)
      {
          if (startIndex <= endIndex)
          {
              int middle = (startIndex + endIndex) / 2;
              if (target == elements[middle])
              {
                  return middle;
              }
              else if (target < elements[middle])
              {
                  return binarySearch(elements, target, startIndex, middle - 1);
              }
              else
              {
                  return binarySearch(elements, target, middle + 1, endIndex);
              }
          }
          return -1;
      }
    `,
    choices: ["4, 7", "4, 5, 6, 7", "4, 6, 8, 7", "4, 6, 7"],
    answer: "D",
    explanation: "The ranges are 0-8 (middle 4, value 13), then 5-8 (middle 6, value 19), then 7-8 (middle 7, value 22), where the target is found. Each call searches only the half that can contain 22."
  },
  {
    id: "4.17-02",
    prompt: "Consider the following method. The array `arr` contains `{2, 4, 6, 8, 10, 12, 14}`. How many calls to `binarySearch` are made, including the initial call, when `binarySearch(arr, 5, 0, 6)` is executed?",
    code: `
      public static int binarySearch(int[] elements, int target,
                                     int startIndex, int endIndex)
      {
          if (startIndex <= endIndex)
          {
              int middle = (startIndex + endIndex) / 2;
              if (target == elements[middle])
              {
                  return middle;
              }
              else if (target < elements[middle])
              {
                  return binarySearch(elements, target, startIndex, middle - 1);
              }
              else
              {
                  return binarySearch(elements, target, middle + 1, endIndex);
              }
          }
          return -1;
      }
    `,
    choices: ["3", "4", "7", "5"],
    answer: "B",
    explanation: "The calls use the ranges 0-6 (middle value 8), 0-2 (middle value 4), 2-2 (value 6), and finally 2-1. That last call has `startIndex > endIndex`, so it returns -1; forgetting this final call gives 3."
  },
  {
    id: "4.17-03",
    prompt: "Which of the following best describes how merge sort sorts an array?",
    choices: [
      "It divides the array into two halves, recursively sorts each half, and then merges the two sorted halves together.",
      "It repeatedly finds the smallest remaining element and swaps it into the next position.",
      "It takes each element in turn and inserts it into its correct place in a sorted section at the front of the array.",
      "It compares the target with the middle element and discards the half that cannot contain it."
    ],
    answer: "A",
    explanation: "Merge sort is a divide-and-conquer algorithm: split, sort each half recursively, then merge. Choices B and C describe selection sort and insertion sort, and choice D describes binary search."
  },
  {
    id: "4.17-04",
    prompt: "In the following `merge` method from merge sort, `elements[from]` through `elements[mid]` contain `2, 5, 9` and `elements[mid + 1]` through `elements[to]` contain `1, 6, 7`. Which values have been copied into `temp`, in order, when the first `while` loop ends?",
    code: `
      private static void merge(int[] elements, int from, int mid,
                                int to, int[] temp)
      {
          int i = from;
          int j = mid + 1;
          int k = from;
          while (i <= mid && j <= to)
          {
              if (elements[i] < elements[j])
              {
                  temp[k] = elements[i];
                  i++;
              }
              else
              {
                  temp[k] = elements[j];
                  j++;
              }
              k++;
          }
          while (i <= mid)
          {
              temp[k] = elements[i];
              i++;
              k++;
          }
          while (j <= to)
          {
              temp[k] = elements[j];
              j++;
              k++;
          }
          for (k = from; k <= to; k++)
          {
              elements[k] = temp[k];
          }
      }
    `,
    choices: ["1, 2, 5, 6, 7, 9", "1, 2, 5", "1, 2, 5, 6, 7", "2, 5, 9"],
    answer: "C",
    explanation: "The first loop repeatedly copies the smaller front value of the two halves: 1, 2, 5, 6, 7. It stops when the right half is used up, and the leftover 9 is copied by the second `while` loop."
  },
  {
    id: "4.17-05",
    prompt: "Consider the following merge sort implementation. The array `arr` contains `{8, 3, 5, 1, 9, 2}`, and `mergeSort(arr)` is called. What are the contents of `arr` immediately before the last call to `merge` begins?",
    code: `
      public static void mergeSort(int[] elements)
      {
          int[] temp = new int[elements.length];
          mergeSortHelper(elements, 0, elements.length - 1, temp);
      }

      private static void mergeSortHelper(int[] elements, int from,
                                          int to, int[] temp)
      {
          if (from < to)
          {
              int middle = (from + to) / 2;
              mergeSortHelper(elements, from, middle, temp);
              mergeSortHelper(elements, middle + 1, to, temp);
              merge(elements, from, middle, to, temp);
          }
      }

      // merge combines the sorted parts elements[from]..elements[mid]
      // and elements[mid + 1]..elements[to] into one sorted part
    `,
    choices: ["`{1, 2, 3, 5, 8, 9}`", "`{3, 8, 1, 5, 2, 9}`", "`{3, 5, 8, 1, 2, 9}`", "`{3, 8, 5, 1, 9, 2}`"],
    answer: "C",
    explanation: "The left half (indexes 0-2) is fully sorted into 3, 5, 8 and the right half (indexes 3-5) into 1, 2, 9 before the final merge combines them. Choice B splits the array into pairs, but with 6 elements each half has 3."
  },
  {
    id: "4.17-06",
    prompt: "Consider the following method. What value is returned by the call `reverse(\"cart\")`?",
    code: `
      public static String reverse(String s)
      {
          if (s.length() <= 1)
          {
              return s;
          }
          return reverse(s.substring(1)) + s.substring(0, 1);
      }
    `,
    choices: ["\"trac\"", "\"cart\"", "\"tcar\"", "\"art\""],
    answer: "A",
    explanation: "The recursion traverses the string one letter at a time: each call moves its first letter to the end of the reversed rest of the string. `reverse(\"t\")` is \"t\", then \"tr\", \"tra\", and finally \"trac\". Choice \"tcar\" moves only the last letter to the front."
  },
  {
    id: "4.17-07",
    prompt: "Which of the following statements about searching a large sorted array is true?",
    choices: [
      "Linear search typically examines fewer elements, because it starts at the beginning of the array.",
      "Binary search examines every element once, but it does so in a faster order.",
      "Binary search can also be used on a large unsorted array, because it eliminates half of the elements at a time.",
      "Binary search typically examines far fewer elements than linear search, because each comparison eliminates about half of the remaining elements."
    ],
    answer: "D",
    explanation: "Binary search is typically more efficient than linear search: each comparison with a middle element discards about half of what is left. It requires sorted data, and it does not examine every element."
  },
  {
    id: "4.17-08",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int findMax(int[] arr, int index)
      {
          if (index == arr.length - 1)
          {
              return arr[index];
          }
          int rest = findMax(arr, index + 1);
          if (arr[index] > rest)
          {
              return arr[index];
          }
          return rest;
      }

      int[] vals = {4, 11, 7, 2, 9};
      System.out.println(findMax(vals, 2));
    `,
    choices: ["11", "9", "7", "2"],
    answer: "B",
    explanation: "The recursion traverses the array from `index` to the end, so this call examines only indexes 2 through 4, which hold 7, 2, and 9, and returns the largest of those. The 11 at index 1 is never considered."
  },
  {
    id: "4.17-09",
    prompt: "Consider the following method from a merge sort implementation, where `merge` combines two adjacent sorted parts. When `mergeSortHelper(arr, 0, 7, temp)` is called on an array of 8 elements, how many times is `mergeSortHelper` called, including the initial call?",
    code: `
      private static void mergeSortHelper(int[] elements, int from,
                                          int to, int[] temp)
      {
          if (from < to)
          {
              int middle = (from + to) / 2;
              mergeSortHelper(elements, from, middle, temp);
              mergeSortHelper(elements, middle + 1, to, temp);
              merge(elements, from, middle, to, temp);
          }
      }
    `,
    choices: ["15", "8", "7", "16"],
    answer: "A",
    explanation: "There is 1 call on the whole array, 2 on halves of 4, 4 on quarters of 2, and 8 on single elements: 1 + 2 + 4 + 8 = 15. Answering 7 counts only the calls that go on to call `merge`."
  },
  {
    id: "4.17-10",
    prompt: "Which of the following statements about the recursive binary search algorithm are true?",
    code: `
      I.   Each recursive call searches a range that is about half the
           size of the range in the previous call.
      II.  When the start index of the range being searched is greater
           than its end index, the target is not in the array and the
           method returns -1.
      III. It makes fewer comparisons than the iterative binary search
           for the same sorted array and target.
    `,
    choices: ["I only", "II only", "I and II only", "I, II, and III"],
    answer: "C",
    explanation: "Statements I and II describe how the search halves the range and its base case for an empty range. Statement III is false: the recursive and iterative versions examine exactly the same middle elements."
  },
  {
    id: "4.17-11",
    prompt: "Consider the following merge sort implementation. The array `arr` contains `{7, 4, 9, 2}`, and `mergeSort(arr)` is called. Which of the following shows the contents of `arr` after each call to `merge` completes, in order?",
    code: `
      public static void mergeSort(int[] elements)
      {
          int[] temp = new int[elements.length];
          mergeSortHelper(elements, 0, elements.length - 1, temp);
      }

      private static void mergeSortHelper(int[] elements, int from,
                                          int to, int[] temp)
      {
          if (from < to)
          {
              int middle = (from + to) / 2;
              mergeSortHelper(elements, from, middle, temp);
              mergeSortHelper(elements, middle + 1, to, temp);
              merge(elements, from, middle, to, temp);
          }
      }

      // merge combines the sorted parts elements[from]..elements[mid]
      // and elements[mid + 1]..elements[to] into one sorted part
    `,
    choices: [
      "`{4, 7, 9, 2}`, `{2, 4, 7, 9}`",
      "`{4, 7, 9, 2}`, `{4, 7, 2, 9}`, `{2, 4, 7, 9}`",
      "`{4, 7, 2, 9}`, `{2, 4, 7, 9}`",
      "`{4, 7, 9, 2}`, `{4, 2, 7, 9}`, `{2, 4, 7, 9}`"
    ],
    answer: "B",
    explanation: "The left half 7, 4 is merged first into 4, 7; then the right half 9, 2 is merged into 2, 9; finally the two halves are merged. A 4-element array needs 3 merges, not 2."
  },
  {
    id: "4.17-12",
    prompt: "In merge sort, the `merge` method combines `elements[from]` through `elements[mid]` with `elements[mid + 1]` through `elements[to]`. Which of the following must be true before `merge` is called for the result to be sorted?",
    choices: [
      "The entire array must already be sorted.",
      "`from` must be 0.",
      "The length of the array must be a power of 2.",
      "`elements[from]..elements[mid]` and `elements[mid + 1]..elements[to]` must each already be sorted."
    ],
    answer: "D",
    explanation: "Merging works by repeatedly taking the smaller front element of two sorted parts, so each part must already be sorted; the recursive calls guarantee this. Merge sort works on any array length and on parts that start anywhere."
  },
  {
    id: "4.17-13",
    prompt: "Consider the following method from a merge sort implementation, where `merge` combines two adjacent sorted parts. The call `mergeSortHelper(arr, 0, 6, temp)` is made on an array of 7 elements. Which ranges of indexes do the two recursive calls made by this initial call sort?",
    code: `
      private static void mergeSortHelper(int[] elements, int from,
                                          int to, int[] temp)
      {
          if (from < to)
          {
              int middle = (from + to) / 2;
              mergeSortHelper(elements, from, middle, temp);
              mergeSortHelper(elements, middle + 1, to, temp);
              merge(elements, from, middle, to, temp);
          }
      }
    `,
    choices: [
      "Indexes 0 through 2 and indexes 3 through 6",
      "Indexes 0 through 3 and indexes 3 through 6",
      "Indexes 0 through 6 and indexes 6 through 6",
      "Indexes 0 through 3 and indexes 4 through 6"
    ],
    answer: "D",
    explanation: "`middle` is (0 + 6) / 2 = 3, so the halves are 0..3 and 4..6; with an odd length the left half gets the extra element. The halves never overlap, so index 3 is not included twice."
  },
  {
    id: "4.17-14",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int binarySearch(int[] elements, int target,
                                     int startIndex, int endIndex)
      {
          if (startIndex <= endIndex)
          {
              int middle = (startIndex + endIndex) / 2;
              if (target == elements[middle])
              {
                  return middle;
              }
              else if (target < elements[middle])
              {
                  return binarySearch(elements, target, startIndex, middle - 1);
              }
              else
              {
                  return binarySearch(elements, target, middle + 1, endIndex);
              }
          }
          return -1;
      }

      int[] arr = {1, 3, 3, 3, 3, 8, 9};
      System.out.println(binarySearch(arr, 3, 0, 6));
    `,
    choices: ["3", "1", "4", "2"],
    answer: "A",
    explanation: "The first middle index is (0 + 6) / 2 = 3, and `arr[3]` is 3, so 3 is returned immediately. Binary search returns the index of a matching element, not necessarily the first occurrence, which linear search would give as 1."
  },
  {
    id: "4.17-15",
    prompt: "Consider the following method. What is printed as a result of executing the code segment that follows it?",
    code: `
      public static int countLong(ArrayList<String> words, int index)
      {
          if (index == words.size())
          {
              return 0;
          }
          int rest = countLong(words, index + 1);
          if (words.get(index).length() > 3)
          {
              return rest + 1;
          }
          return rest;
      }

      ArrayList<String> words = new ArrayList<String>();
      words.add("tree");
      words.add("ox");
      words.add("apple");
      words.add("cat");
      words.add("kiwi");
      System.out.println(countLong(words, 1));
    `,
    choices: ["3", "2", "4", "1"],
    answer: "B",
    explanation: "Each call handles the element at `index` and recurses on the rest of the list until `index` equals `words.size()`. Starting at index 1 the words are ox, apple, cat, and kiwi, and only apple and kiwi have more than 3 letters. Answering 3 also counts tree at index 0."
  },
  {
    id: "4.17-16",
    prompt: "Consider the following method. The array `arr` contains `{5, 10, 15, 20, 25, 30, 35, 40}`. When `binarySearch(arr, 32, 0, 7)` is executed, which pairs of `(startIndex, endIndex)` values are passed to the method, in order, across all calls?",
    code: `
      public static int binarySearch(int[] elements, int target,
                                     int startIndex, int endIndex)
      {
          if (startIndex <= endIndex)
          {
              int middle = (startIndex + endIndex) / 2;
              if (target == elements[middle])
              {
                  return middle;
              }
              else if (target < elements[middle])
              {
                  return binarySearch(elements, target, startIndex, middle - 1);
              }
              else
              {
                  return binarySearch(elements, target, middle + 1, endIndex);
              }
          }
          return -1;
      }
    `,
    choices: [
      "(0, 7), (4, 7), (6, 7)",
      "(0, 7), (3, 7), (5, 7), (5, 6)",
      "(0, 7), (4, 7), (6, 7), (6, 5)",
      "(0, 7), (4, 7), (4, 5), (5, 5)"
    ],
    answer: "C",
    explanation: "Middles 3 (20) and 5 (30) are smaller than 32, moving the start to 4 and then 6; middle 6 (35) is larger, so the end becomes 5. The call with (6, 5) is an empty range and returns -1. Choice B forgets the + 1 when moving right."
  },
  {
    id: "4.17-17",
    prompt: "In the standard merge sort implementation, a `temp` array the same length as `elements` is created once and passed to every recursive call. What is the purpose of `temp`?",
    choices: [
      "It holds the merged values in sorted order before they are copied back into `elements`.",
      "It stores a backup of the original array so it can be restored if the sort fails.",
      "It stores the indexes of the elements that have already been sorted.",
      "It records the value of `middle` for each recursive call."
    ],
    answer: "A",
    explanation: "While merging, values are written into `temp` so that unread values in `elements` are not overwritten; the merged range is then copied back. Creating it once avoids building a new array in every call."
  },
  {
    id: "4.17-18",
    prompt: "The following `merge` method is intended to combine the sorted parts `elements[from]..elements[mid]` and `elements[mid + 1]..elements[to]` into one sorted part. Which of the following can be used to replace `/* missing code */` so that the method works as intended?",
    code: `
      private static void merge(int[] elements, int from, int mid,
                                int to, int[] temp)
      {
          int i = from;
          int j = mid + 1;
          int k = from;
          while (i <= mid && j <= to)
          {
              if (elements[i] < elements[j])
              {
                  /* missing code */
              }
              else
              {
                  temp[k] = elements[j];
                  j++;
              }
              k++;
          }
          while (i <= mid)
          {
              temp[k] = elements[i];
              i++;
              k++;
          }
          while (j <= to)
          {
              temp[k] = elements[j];
              j++;
              k++;
          }
          for (k = from; k <= to; k++)
          {
              elements[k] = temp[k];
          }
      }
    `,
    choices: [
      "temp[k] = elements[j];\ni++;",
      "temp[i] = elements[k];\ni++;",
      "temp[k] = elements[i];\ni++;",
      "temp[k] = elements[i];\nj++;"
    ],
    answer: "C",
    explanation: "When the left part's front element `elements[i]` is smaller, it is copied into the next position of `temp`, and only `i` advances. Choice D advances the wrong index, so a value from the right part is skipped."
  },
  {
    id: "4.17-19",
    prompt: "A sorted array contains 1,000 distinct values. Using recursive binary search, what is the maximum number of calls in which the target is compared with a middle element, when the target is in the array?",
    choices: ["1,000", "10", "500", "2"],
    answer: "B",
    explanation: "Each call cuts the remaining range roughly in half, and 2^10 = 1,024 is the first power of 2 above 1,000, so at most 10 middle elements are examined. Checking up to 1,000 elements describes linear search."
  },
  {
    id: "4.17-20",
    prompt: "In the standard merge sort, the `merge` method copies `elements[i]` into `temp` when `elements[i] < elements[j]`, and copies `elements[j]` otherwise. Suppose this condition is changed to `elements[i] > elements[j]` and nothing else is changed. What are the contents of an array that initially contains `{3, 9, 1, 7}` after `mergeSort` is called on it?",
    choices: ["`{1, 3, 7, 9}`", "`{3, 9, 1, 7}`", "`{9, 3, 7, 1}`", "`{9, 7, 3, 1}`"],
    answer: "D",
    explanation: "Every merge now takes the larger front element first, so each merged part is in descending order, and the final merge produces `{9, 7, 3, 1}`. The rest of the algorithm is unchanged, so the array is still fully sorted, just in the reverse direction."
  }
]);
