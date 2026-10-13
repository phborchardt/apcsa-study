# AP CSA Study Site

A static, single-page study site for AP Computer Science A, organized by the 2025–26 College Board course framework (4 units, 53 topics). Navigation: **home** (four units) → **unit page** (every topic in the unit, plus a mixed-review quiz) → **quiz** (10 random questions from the topic's bank) → **summary** (score, missed questions with explanations, retry missed).

## Hard constraints

- **Must work from `file://`**, by double-clicking `index.html` with no local server. This means:
  - No `fetch()`/XHR, no ES modules (`type="module"`), and no loading JSON at runtime. Browsers block all of these on `file://`.
  - Question data is loaded with plain `<script src>` tags. Each question file calls the global `defineTopic(...)`.
  - No build step, bundler, npm dependencies or CDN libraries. The site must also work offline.
- **One question file per unit, hand-editable** by a teacher who is not a programmer. Keep the format simple and stable, and keep the instructions comment at the top of `questions/unit1.js`.

## Content status

- All four units are complete: 53 topics × 20 questions = 1,060 questions, balanced 5 per answer letter in every topic.
- Every question with runnable code had its answer key checked by compiling and running it with JDK 21 (about 80% of the bank). Concept questions with no code were reviewed by hand.
- The whole bank was reviewed against the 2025-26 CED (Oct 2026): 215 questions replaced and 98 edited. `CED-COVERAGE.md` maps every essential knowledge (EK) statement to the questions that cover it. Update it when you add, replace, or retarget a question. After that review, an independent second reviewer rechecked all 319 concept questions (no runnable code) against the CED: no wrong keys, 9 wording fixes.
- Questions that describe a class in the prompt instead of showing it are deliberately self-contained, because quizzes draw questions in random order.

## Question format

```js
defineTopic(1, "1.3", "Expressions and Output", [
  {
    id: "1.3-01",                  // "<topic>-NN"; unique; used only in error messages
    prompt: "Question text with `inline code` in backticks.",
    code: `
      int x = 5;                   // optional Java snippet; common indentation is stripped
    `,
    choices: ["A text", "B text", "C text", "D text"],
    answer: "B",                   // letter of the correct choice
    explanation: "Shown after answering. One to three sentences."
  },
]);
```

- Topics appear on the unit page in the order of their `defineTopic` calls. A topic with an empty list shows as "No questions yet".
- In `prompt`, `choices` and `explanation`, text in `` `backticks` `` renders as inline monospace. All text is HTML-escaped. A choice containing `\n` renders as a code block.
- **Escaping trap:** inside a `code:` template literal, a Java escape such as `"\n"` must be written `"\\n"`, because JavaScript turns `\n` into a real newline. Never put `${` or a backtick inside `code`.
- Invalid questions are skipped and listed in a red notice on the home and unit pages. Syntax errors in a question file are reported there too.

## Question-writing standards

- College Board exam style: four choices (A–D), stems such as "What is printed as a result of executing the following code segment?", `/* missing code */` completions, and I/II/III questions. Distractors come from real misconceptions.
- Each topic's 20 answers are balanced (5 each of A–D), cover a mix of easy, medium and hard, and contain no near-duplicates.
- Java subset of the 2025–26 course: `int`, `double`, `boolean`, `String`, arrays, `ArrayList`, `Integer`/`Double`, `Math`, `Scanner`/`File`, and user-written classes. Do not use `char`/`charAt`, `switch`, `do-while`, `?:`, `break`/`continue`, `extends`/interfaces (1.12 covers inheritance only as a concept), `Arrays`/`Collections`, or `++` inside larger expressions.
- **Topic order is strict:** a question in topic X.Y uses only Java introduced in topics up to X.Y, and its main point is an EK of X.Y. Non-obvious consequences found in the CED:
  - No string concatenation (`"a" + x`) before 1.15. Earlier topics print with separate `print`/`println` calls.
  - No full class definitions before 3.3 (Unit 1 shows classes as documented headers only), no `main(String[] args)` before 4.3 (it is an array), no `static` variables before 3.7.
  - Excluded entirely: keyboard input and tracing Scanner input (1.4, 4.6), mixing `nextLine` with other Scanner methods (4.6), regex specials in `split`, `%` with negative or zero operands, double division by zero, infinities/NaN, overriding `toString`, writing recursive code (4.16), nonrectangular 2D arrays.
  - 4.14 is linear search only (including 2D); binary search and merge sort are 4.17.
  - Name the string index exception `IndexOutOfBoundsException`, as the CED does.
- The CED text is in `C:\Users\admin\Downloads\ap-computer-science-a-course-and-exam-description-effective-fall-2025.pdf` (`pdftotext -layout` in Git Bash extracts it).
- AP code formatting: braces on their own lines, 4-space indentation.
- **Verify every answer key by running the code.** JDK 21 is at `C:\Program Files\Microsoft\jdk-21.0.12.101-hotspot\bin` (not on PATH). Generate harnesses from the parsed question file, not retyped code, so escaping bugs are caught.

## Conventions

- Always pass question text through `escapeHtml` or `formatText` before inserting it into HTML.
- Keep the page usable at phone width (~400px) and in dark mode.

## Adding a unit

1. Create `questions/unitN.js` with `defineTopic(N, ...)` calls.
2. Add a `<script>` tag for it in `index.html`, after `js/app.js`.
3. Add `{ number: N, title: "...", file: "questions/unitN.js" }` to `UNITS` in `js/app.js`.
