type LessonBlock =
  | { type: "text"; text: string }
  | { type: "heading"; text: string }
  | { type: "code"; text: string }
  | { type: "important"; text: string }
  | { type: "tip"; text: string };

export const lessonContent: Record<
  string,
  {
    title: string;
    content: LessonBlock[];
  }
> = {

 /* =========================
   SECTION 0 – ML INTRODUCTION
   ========================= */

"what-is-machine-learning": {
  title: "What is Machine Learning?",
  content: [
    {
      type: "text",
      text: "Machine Learning is a field of Artificial Intelligence that enables systems to learn patterns from data and improve performance without being explicitly programmed for every rule.",
    },
    {
      type: "text",
      text: "Instead of writing fixed logic, Machine Learning systems learn from examples and past data.",
    },
  ],
},

"why-machine-learning-matters": {
  title: "Why Machine Learning Matters",
  content: [
    {
      type: "text",
      text: "Many real-world problems are too complex or dynamic to be solved using traditional programming. Machine Learning allows systems to adapt and improve automatically as data grows.",
    },
  ],
},

"real-world-ml-applications": {
  title: "Real-world Applications of ML",
  content: [
    {
      type: "text",
      text: "Machine Learning is widely used in spam detection, recommendation systems, fraud detection, medical diagnosis, image recognition, and many other real-world applications.",
    },
  ],
},

"ml-vs-traditional-programming": {
  title: "ML vs Traditional Programming",
  content: [
    {
      type: "text",
      text: "In traditional programming, humans write rules and logic to produce outputs. In Machine Learning, the system learns rules automatically by analyzing data and examples.",
    },
  ],
},

"types-of-machine-learning": {
  title: "Types of Machine Learning (Overview)",
  content: [
    {
      type: "text",
      text: "The main types of Machine Learning are Supervised Learning, Unsupervised Learning, and Reinforcement Learning. Each type solves different categories of problems.",
    },
  ],
},




 "python-Introduction": {
  title: "Introduction to Python for Machine Learning",
  content: [
    {
      type: "heading",
      text: "What is Python?",
    },
    {
      type: "text",
      text: "Python is a high-level programming language known for its simplicity, readability, and flexibility. It allows developers to focus on problem-solving instead of complex syntax.",
    },

    {
      type: "heading",
      text: "Why Python is Used in Machine Learning",
    },
    {
      type: "text",
      text: "Python has a rich ecosystem of libraries that support data analysis, mathematical computation, and Machine Learning model development.",
    },
    {
      type: "important",
      text: "Most Machine Learning frameworks and research tools are built primarily for Python.",
    },

    {
      type: "heading",
      text: "Python and Mathematical Thinking",
    },
    {
      type: "text",
      text: "Machine Learning relies heavily on mathematics. Python acts as a bridge between mathematical concepts and practical implementation.",
    },

    {
      type: "heading",
      text: "How Python Fits into the ML Workflow",
    },
    {
      type: "text",
      text: "Python is used to load data, clean it, train Machine Learning models, evaluate results, and visualize performance.",
    },

    {
      type: "heading",
      text: "Lesson Summary",
    },
    {
      type: "text",
      text: "Python is the foundation of modern Machine Learning. Learning Python properly will make all future ML concepts easier to understand and implement.",
    },
  ],
},


"python-environment-setup": {
  title: "Environment Setup: Python & VS Code",
  content: [
    {
      type: "heading",
      text: "Why Environment Setup is Important",
    },
    {
      type: "text",
      text: "Before writing any Python or Machine Learning code, your system must be properly prepared. A good environment setup ensures that your programs run correctly and you do not face unnecessary errors later.",
    },
    {
      type: "text",
      text: "Most beginners struggle not because Python is hard, but because their environment is not set up properly. This lesson will solve that problem completely.",
    },

    {
      type: "heading",
      text: "What You Need for Machine Learning",
    },
    {
      type: "text",
      text: "To start learning Machine Learning with Python, you need three basic things: Python itself, a code editor, and a way to run Python programs.",
    },
    {
      type: "text",
      text: "We will use Python as the programming language and Visual Studio Code (VS Code) as the code editor.",
    },

    {
      type: "heading",
      text: "Installing Python",
    },
    {
      type: "text",
      text: "Python is the language we will use throughout this course. Always install Python from the official Python website to avoid problems.",
    },
    {
      type: "text",
      text: "Download the latest stable version of Python 3 and start the installation.",
    },
    {
      type: "important",
      text: "During installation, make sure you check the option 'Add Python to PATH'. This step is very important.",
    },

    {
      type: "heading",
      text: "What Does 'Add Python to PATH' Mean?",
    },
    {
      type: "text",
      text: "PATH allows your computer to find Python when you type commands in the terminal. If Python is not added to PATH, your system will not recognize Python commands.",
    },
    {
      type: "text",
      text: "Checking this option saves you from many future errors.",
    },

    {
      type: "heading",
      text: "Installing Visual Studio Code (VS Code)",
    },
    {
      type: "text",
      text: "Visual Studio Code is a lightweight and powerful code editor. It is widely used by professionals for Python and Machine Learning development.",
    },
    {
      type: "text",
      text: "After installing VS Code, you can install the Python extension inside VS Code to get better coding support.",
    },

    {
      type: "heading",
      text: "Running Your First Python Program",
    },
    {
      type: "text",
      text: "Now that Python is installed, let us check if everything is working correctly by running a simple Python program.",
    },
    {
      type: "code",
      text: "print(\"Python environment setup successful\")",
    },

    {
      type: "heading",
      text: "What This Program Does",
    },
    {
      type: "text",
      text: "This program prints a message on the screen. If you see the message without any error, it means Python is installed correctly and ready to use.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "In this lesson, you learned why environment setup matters, how to install Python, what PATH means, how to install VS Code, and how to run your first Python program.",
    },
    {
      type: "text",
      text: "Your system is now ready for learning Python and Machine Learning.",
    },
  ],
},

"running-your-first-python-program": {
  title: "Running Your First Python Program",
  content: [
    {
      type: "heading",
      text: "Why This Lesson Matters",
    },
    {
      type: "text",
      text: "Installing Python is only the first step. To truly start learning, you must know how to run Python programs and see their output.",
    },
    {
      type: "text",
      text: "In this lesson, you will learn how to write a simple Python program and run it step by step.",
    },

    {
      type: "heading",
      text: "What is a Python Program?",
    },
    {
      type: "text",
      text: "A Python program is a set of instructions written in the Python language. These instructions are executed line by line by the Python interpreter.",
    },
    {
      type: "text",
      text: "Even a single line of Python code is considered a valid program.",
    },

    {
      type: "heading",
      text: "Creating Your First Python File",
    },
    {
      type: "text",
      text: "To write a Python program, you first need a file. Python files always have the extension .py",
    },
    {
      type: "text",
      text: "Open Visual Studio Code, create a new file, and save it as first_program.py.",
    },

    {
      type: "heading",
      text: "Writing Your First Python Code",
    },
    {
      type: "text",
      text: "Inside the file, write the following line of code. This code tells Python to display a message on the screen.",
    },
    {
      type: "code",
      text: "print(\"Hello, Python!\")",
    },

    {
      type: "heading",
      text: "Running the Python Program",
    },
    {
      type: "text",
      text: "Now that your code is written, it is time to run the program. You can run Python programs using the terminal.",
    },
    {
      type: "text",
      text: "Open the terminal in VS Code and make sure you are in the folder where your Python file is saved.",
    },
    {
      type: "code",
      text: "python first_program.py",
    },

    {
      type: "heading",
      text: "Understanding the Output",
    },
    {
      type: "text",
      text: "If everything is set up correctly, you will see the message 'Hello, Python!' printed in the terminal.",
    },
    {
      type: "text",
      text: "This confirms that Python is working correctly and you can run Python programs successfully.",
    },

    {
      type: "heading",
      text: "Common Beginner Mistakes",
    },
    {
      type: "text",
      text: "Beginners often face errors due to wrong file names, incorrect folder paths, or missing Python installation.",
    },
    {
      type: "text",
      text: "If you see an error, read it carefully. Errors are normal and part of learning programming.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "In this lesson, you learned what a Python program is, how to create a Python file, how to write simple Python code, and how to run it using the terminal.",
    },
    {
      type: "text",
      text: "You are now ready to move forward and learn Python syntax and variables.",
    },
  ],
},
"python-introduction": {
  title: "Introduction to Python",
  content: [
    {
      type: "heading",
      text: "What is Python?",
    },
    {
      type: "text",
      text: "Python is a high-level programming language that is designed to be simple, readable, and easy to learn.",
    },
    {
      type: "text",
      text: "Unlike many programming languages, Python focuses on writing code that looks close to normal English, which makes it beginner-friendly.",
    },

    {
      type: "heading",
      text: "Why Python is Easy to Learn",
    },
    {
      type: "text",
      text: "Python removes unnecessary symbols and complex syntax. You do not need to worry about semicolons, brackets everywhere, or complicated rules.",
    },
    {
      type: "text",
      text: "This allows learners to focus more on problem-solving rather than memorizing syntax.",
    },

    {
      type: "heading",
      text: "Python is a General-Purpose Language",
    },
    {
      type: "text",
      text: "Python is not limited to Machine Learning. It is used in web development, automation, data analysis, game development, and many other fields.",
    },
    {
      type: "text",
      text: "Learning Python once can open multiple career paths.",
    },

    {
      type: "heading",
      text: "Why Python is Popular in Machine Learning",
    },
    {
      type: "text",
      text: "Python has powerful libraries that handle complex mathematics, data processing, and Machine Learning models.",
    },
    {
      type: "text",
      text: "Instead of building everything from scratch, developers use Python libraries to focus on solving real-world problems.",
    },

    {
      type: "heading",
      text: "Python Code is Easy to Read",
    },
    {
      type: "text",
      text: "Python code is often described as readable and clean. Even someone new to programming can understand Python code with little effort.",
    },
    {
      type: "text",
      text: "This readability is very important in Machine Learning projects where code is long and complex.",
    },

    {
      type: "heading",
      text: "Python in the Machine Learning Journey",
    },
    {
      type: "text",
      text: "In Machine Learning, Python is used to load data, clean data, train models, test performance, and visualize results.",
    },
    {
      type: "text",
      text: "Almost every step in the ML workflow uses Python in some form.",
    },

    {
      type: "heading",
      text: "What You Should Remember",
    },
    {
      type: "text",
      text: "Python is easy to learn, powerful, and extremely popular in Machine Learning. Mastering Python fundamentals will make learning ML concepts much easier.",
    },
    {
      type: "text",
      text: "From this point onward, every lesson will build on top of Python basics.",
    },
  ],
},
"python-syntax-indentation": {
  title: "Python Syntax & Indentation",
  content: [
    {
      type: "heading",
      text: "What is Syntax in Programming?",
    },
    {
      type: "text",
      text: "Syntax means the rules that define how code is written in a programming language. Every language has its own syntax, and Python is known for having very simple syntax.",
    },

    {
      type: "heading",
      text: "Why Python Syntax Feels Different",
    },
    {
      type: "text",
      text: "Most programming languages use brackets and semicolons. Python avoids this and uses indentation to structure code.",
    },
    {
      type: "text",
      text: "This makes Python code clean, readable, and closer to how humans think.",
    },

    {
      type: "heading",
      text: "Writing Your First Structured Code",
    },
    {
      type: "text",
      text: "Let’s look at a simple example. This program prints a message only if a condition is true.",
    },
    {
      type: "code",
      text: "age = 18\n\nif age >= 18:\n    print(\"You are eligible to vote\")",
    },

    {
      type: "heading",
      text: "Understanding Indentation",
    },
    {
      type: "text",
      text: "Indentation means adding spaces at the beginning of a line. In Python, indentation is used to define blocks of code.",
    },
    {
      type: "text",
      text: "All lines that belong to the same block must have the same indentation level.",
    },

    {
      type: "heading",
      text: "What Happens If Indentation Is Wrong?",
    },
    {
      type: "text",
      text: "If indentation is incorrect, Python will throw an error or behave unexpectedly. This makes indentation very important in Python.",
    },
    {
      type: "code",
      text: "if True:\nprint(\"This will cause an error\")",
    },

    {
      type: "heading",
      text: "Correct Indentation Example",
    },
    {
      type: "code",
      text: "if True:\n    print(\"This works correctly\")",
    },

    {
      type: "heading",
      text: "Why Python Uses Indentation",
    },
    {
      type: "text",
      text: "Indentation forces developers to write clean and readable code. This is especially important in Machine Learning projects where code can become long and complex.",
    },

    {
      type: "heading",
      text: "Indentation and Nested Blocks",
    },
    {
      type: "text",
      text: "Python allows blocks inside blocks. Each new level requires additional indentation.",
    },
    {
      type: "code",
      text: "score = 85\n\nif score >= 50:\n    print(\"Passed\")\n    if score >= 80:\n        print(\"Excellent performance\")",
    },

    {
      type: "heading",
      text: "How Much Indentation Should You Use?",
    },
    {
      type: "text",
      text: "The standard practice in Python is to use 4 spaces for indentation. Most code editors handle this automatically.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what syntax means, how Python syntax works, and why indentation is a core part of Python programming.",
    },
    {
      type: "text",
      text: "From this point onward, indentation will appear in almost every Python program you write.",
    },
  ],
},
"python-variables-naming": {
  title: "Variables & Naming Rules",
  content: [
    {
      type: "heading",
      text: "What is a Variable?",
    },
    {
      type: "text",
      text: "A variable is a name that stores a value in memory. You can think of a variable as a container that holds data.",
    },
    {
      type: "text",
      text: "Instead of remembering values directly, we give them names so that we can use them again and again.",
    },

    {
      type: "heading",
      text: "Creating Variables in Python",
    },
    {
      type: "text",
      text: "In Python, you create a variable by assigning a value to a name using the equals (=) sign.",
    },
    {
      type: "code",
      text: "age = 25\nheight = 5.8\nname = \"Machine Learning\"",
    },

    {
      type: "heading",
      text: "How Python Understands Data Types",
    },
    {
      type: "text",
      text: "Python automatically detects the type of data stored in a variable. You do not need to specify the data type explicitly.",
    },
    {
      type: "code",
      text: "x = 10\nprint(type(x))\n\ny = 3.5\nprint(type(y))",
    },

    {
      type: "heading",
      text: "Variables Can Change",
    },
    {
      type: "text",
      text: "Variables in Python can be updated. The value stored in a variable can change during program execution.",
    },
    {
      type: "code",
      text: "score = 50\nscore = score + 10\nprint(score)",
    },

    {
      type: "heading",
      text: "Rules for Naming Variables",
    },
    {
      type: "text",
      text: "Variable names must start with a letter or an underscore. They cannot start with a number.",
    },
    {
      type: "text",
      text: "Variable names can contain letters, numbers, and underscores, but no spaces.",
    },

    {
      type: "heading",
      text: "Good vs Bad Variable Names",
    },
    {
      type: "text",
      text: "Choosing clear and meaningful variable names makes your code easier to read and understand.",
    },
    {
      type: "code",
      text: "x = 90        # bad name\nstudent_score = 90  # good name",
    },

    {
      type: "heading",
      text: "Why Variable Naming Matters in ML",
    },
    {
      type: "text",
      text: "In Machine Learning, variables store datasets, features, labels, model parameters, and predictions.",
    },
    {
      type: "text",
      text: "Clear variable names make ML code easier to debug, understand, and maintain.",
    },

    {
      type: "heading",
      text: "Python Naming Style (Best Practice)",
    },
    {
      type: "text",
      text: "Python developers usually use lowercase letters with underscores. This style is called snake_case.",
    },
    {
      type: "code",
      text: "training_data\nmodel_accuracy\npredicted_output",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what variables are, how to create them, how values change, and how to name variables properly.",
    },
    {
      type: "text",
      text: "Variables will be used in every Machine Learning program you write from now on.",
    },
  ],
},
"python-data-types": {
  title: "Python Data Types",
  content: [
    {
      type: "heading",
      text: "What is a Data Type?",
    },
    {
      type: "text",
      text: "A data type tells Python what kind of data a variable is holding. Different types of data behave differently in a program.",
    },
    {
      type: "text",
      text: "For example, numbers can be added, text can be combined, and true or false values control decisions.",
    },

    {
      type: "heading",
      text: "Why Data Types Matter",
    },
    {
      type: "text",
      text: "In Machine Learning, data types define how data is stored, processed, and used inside models.",
    },
    {
      type: "text",
      text: "Understanding data types helps you avoid errors and work with data more confidently.",
    },

    {
      type: "heading",
      text: "Main Python Data Types (Beginner Level)",
    },
    {
      type: "text",
      text: "Python has many data types, but you should first master these four core types.",
    },

    {
      type: "heading",
      text: "1. Integers (int)",
    },
    {
      type: "text",
      text: "Integers are whole numbers without decimals. They are commonly used for counting, indexing, and iterations.",
    },
    {
      type: "code",
      text: "age = 25\nitems = 10\nepochs = 100",
    },

    {
      type: "heading",
      text: "2. Floating Point Numbers (float)",
    },
    {
      type: "text",
      text: "Floats are numbers with decimal points. They are widely used in Machine Learning for calculations and measurements.",
    },
    {
      type: "code",
      text: "learning_rate = 0.01\naccuracy = 92.5",
    },

    {
      type: "heading",
      text: "3. Strings (str)",
    },
    {
      type: "text",
      text: "Strings are used to store text. They are enclosed in single or double quotes.",
    },
    {
      type: "text",
      text: "Text data is very common in real-world Machine Learning problems.",
    },
    {
      type: "code",
      text: "name = \"Machine Learning\"\nlabel = 'spam'",
    },

    {
      type: "heading",
      text: "4. Booleans (bool)",
    },
    {
      type: "text",
      text: "Booleans represent truth values. They can only be True or False.",
    },
    {
      type: "text",
      text: "They are often used in conditions and decision-making logic.",
    },
    {
      type: "code",
      text: "is_trained = True\nhas_error = False",
    },

    {
      type: "heading",
      text: "Checking the Data Type",
    },
    {
      type: "text",
      text: "You can check the type of any variable using the type() function.",
    },
    {
      type: "code",
      text: "x = 10\nprint(type(x))",
    },

    {
      type: "heading",
      text: "Data Types at a Glance",
    },
    {
      type: "text",
      text: "The table below summarizes the most common Python data types you will use at the beginning.",
    },
    {
      type: "code",
      text: "int    → whole numbers (10, 20)\nfloat  → decimal numbers (0.5, 3.14)\nstr    → text data (\"ML\")\nbool   → True or False",
    },

    {
      type: "important",
      text: "Using the correct data type is critical. Machine Learning models expect numbers, not text. Data must often be converted before training models.",
    },

    {
      type: "heading",
      text: "Data Types in Machine Learning Context",
    },
    {
      type: "text",
      text: "In Machine Learning, raw data is often messy. You will frequently convert strings to numbers and ensure all data is in the correct format.",
    },
    {
      type: "text",
      text: "This is why understanding data types early makes ML learning much smoother.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what data types are, the most important Python data types, how to check them, and why they matter in Machine Learning.",
    },
    {
      type: "text",
      text: "Next, you will learn how to convert data from one type to another.",
    },
  ],
},
"python-type-conversion": {
  title: "Type Conversion in Python",
  content: [
    {
      type: "heading",
      text: "What is Type Conversion?",
    },
    {
      type: "text",
      text: "Type conversion means changing data from one type to another. For example, converting text into numbers or numbers into text.",
    },
    {
      type: "text",
      text: "This is very common in real programs, especially in Machine Learning.",
    },

    {
      type: "heading",
      text: "Why Type Conversion is Needed",
    },
    {
      type: "text",
      text: "User input, files, and external data sources often provide data in text form, even when the data represents numbers.",
    },
    {
      type: "text",
      text: "Before performing calculations or training models, this data must be converted into numeric types.",
    },

    {
      type: "heading",
      text: "Converting to Integer (int)",
    },
    {
      type: "text",
      text: "The int() function is used to convert values into integers.",
    },
    {
      type: "code",
      text: "age_text = \"25\"\nage = int(age_text)\nprint(age)",
    },

    {
      type: "heading",
      text: "Converting to Float (float)",
    },
    {
      type: "text",
      text: "The float() function converts values into decimal numbers.",
    },
    {
      type: "code",
      text: "price_text = \"19.99\"\nprice = float(price_text)\nprint(price)",
    },

    {
      type: "heading",
      text: "Converting to String (str)",
    },
    {
      type: "text",
      text: "The str() function converts values into text. This is useful for displaying output or creating messages.",
    },
    {
      type: "code",
      text: "score = 95\nmessage = \"Score: \" + str(score)\nprint(message)",
    },

    {
      type: "heading",
      text: "Converting to Boolean (bool)",
    },
    {
      type: "text",
      text: "The bool() function converts values into True or False based on their truth value.",
    },
    {
      type: "code",
      text: "print(bool(1))\nprint(bool(0))\nprint(bool(\"\"))\nprint(bool(\"ML\"))",
    },

    {
      type: "heading",
      text: "Common Conversion Mistakes",
    },
    {
      type: "text",
      text: "Not all text can be converted into numbers. Converting invalid values will cause errors.",
    },
    {
      type: "code",
      text: "value = \"abc\"\n# int(value)  # This will cause an error",
    },

    {
      type: "important",
      text: "Always make sure the value is valid before converting. In Machine Learning, invalid data is very common.",
    },

    {
      type: "heading",
      text: "Type Conversion in Machine Learning Context",
    },
    {
      type: "text",
      text: "Datasets often store numbers as text. Before training models, you must convert them into integers or floats.",
    },
    {
      type: "text",
      text: "Almost every data cleaning step in ML involves type conversion.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what type conversion is, how to convert between data types, common mistakes, and why conversion is critical in Machine Learning.",
    },
    {
      type: "text",
      text: "Next, you will learn how Python performs calculations using operators.",
    },
  ],
},
"python-operators": {
  title: "Python Operators",
  content: [
    {
      type: "heading",
      text: "What is an Operator?",
    },
    {
      type: "text",
      text: "An operator is a symbol that tells Python to perform an operation such as calculation, comparison, or logical decision.",
    },
    {
      type: "text",
      text: "Operators work on values and variables to produce a result.",
    },

    {
      type: "heading",
      text: "Types of Operators in Python",
    },
    {
      type: "text",
      text: "At the beginner level, you should focus on three main types of operators.",
    },
    {
      type: "code",
      text: "1. Arithmetic Operators\n2. Comparison Operators\n3. Logical Operators",
    },

    {
      type: "heading",
      text: "1. Arithmetic Operators (Math Operations)",
    },
    {
      type: "text",
      text: "Arithmetic operators are used to perform mathematical calculations.",
    },
    {
      type: "code",
      text: "+   Addition\n-   Subtraction\n*   Multiplication\n/   Division\n%   Modulus (remainder)",
    },

    {
      type: "heading",
      text: "Arithmetic Operators – Example",
    },
    {
      type: "code",
      text: "a = 10\nb = 3\n\nprint(a + b)   # 13\nprint(a - b)   # 7\nprint(a * b)   # 30\nprint(a / b)   # 3.33\nprint(a % b)   # 1",
    },

    {
      type: "heading",
      text: "2. Comparison Operators (Yes / No Decisions)",
    },
    {
      type: "text",
      text: "Comparison operators compare two values and return True or False.",
    },
    {
      type: "code",
      text: "==   Equal to\n!=   Not equal to\n>    Greater than\n<    Less than\n>=   Greater than or equal to\n<=   Less than or equal to",
    },

    {
      type: "heading",
      text: "Comparison Operators – Example",
    },
    {
      type: "code",
      text: "age = 20\n\nprint(age > 18)     # True\nprint(age == 18)    # False\nprint(age != 25)    # True",
    },

    {
      type: "heading",
      text: "3. Logical Operators (Thinking Operators)",
    },
    {
      type: "text",
      text: "Logical operators are used to combine multiple conditions.",
    },
    {
      type: "code",
      text: "and   → True if both conditions are True\nor    → True if at least one condition is True\nnot   → Reverses the result",
    },

    {
      type: "heading",
      text: "Logical Operators – Example",
    },
    {
      type: "code",
      text: "age = 22\nhas_id = True\n\nprint(age >= 18 and has_id)\nprint(age < 18 or has_id)\nprint(not has_id)",
    },

    {
      type: "important",
      text: "Comparison and logical operators return Boolean values (True or False). These values control the flow of programs and Machine Learning decisions.",
    },

    {
      type: "heading",
      text: "Operators in Machine Learning Context",
    },
    {
      type: "text",
      text: "Operators are used in Machine Learning to compare predictions, calculate errors, apply conditions, and control training logic.",
    },
    {
      type: "text",
      text: "For example, checking accuracy thresholds or filtering data relies heavily on operators.",
    },

    {
      type: "heading",
      text: "Visual Summary",
    },
    {
      type: "code",
      text: "Arithmetic  → Numbers & calculations\nComparison → True / False decisions\nLogical    → Combining conditions",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what operators are, how arithmetic, comparison, and logical operators work, and why they are essential in Machine Learning.",
    },
    {
      type: "text",
      text: "Next, you will use these operators inside decision-making logic.",
    },
  ],
},
"python-control-flow": {
  title: "Control Flow (if / loops)",
  content: [
    {
      type: "heading",
      text: "What is Control Flow?",
    },
    {
      type: "text",
      text: "Control flow decides how a program runs based on conditions and repetition.",
    },
    {
      type: "text",
      text: "It allows a program to make decisions and repeat actions.",
    },

    {
      type: "heading",
      text: "Decision Making with if Statement",
    },
    {
      type: "text",
      text: "The if statement checks a condition. If the condition is True, the code inside runs.",
    },
    {
      type: "code",
      text: "age = 20\n\nif age >= 18:\n    print(\"You are eligible\")",
    },

    {
      type: "heading",
      text: "Using if and else",
    },
    {
      type: "text",
      text: "The else block runs when the if condition is False.",
    },
    {
      type: "code",
      text: "age = 16\n\nif age >= 18:\n    print(\"Eligible\")\nelse:\n    print(\"Not eligible\")",
    },

    {
      type: "heading",
      text: "Multiple Conditions with elif",
    },
    {
      type: "text",
      text: "elif is used when you have more than two possible conditions.",
    },
    {
      type: "code",
      text: "score = 85\n\nif score >= 90:\n    print(\"Grade A\")\nelif score >= 75:\n    print(\"Grade B\")\nelse:\n    print(\"Grade C\")",
    },

    {
      type: "heading",
      text: "Repeating Tasks with Loops",
    },
    {
      type: "text",
      text: "Loops allow you to repeat code without writing it multiple times.",
    },

    {
      type: "heading",
      text: "for Loop (Fixed Repetition)",
    },
    {
      type: "text",
      text: "Use a for loop when you know how many times to repeat a task.",
    },
    {
      type: "code",
      text: "for i in range(5):\n    print(i)",
    },

    {
      type: "heading",
      text: "while Loop (Conditional Repetition)",
    },
    {
      type: "text",
      text: "Use a while loop when repetition depends on a condition.",
    },
    {
      type: "code",
      text: "count = 0\n\nwhile count < 3:\n    print(count)\n    count += 1",
    },

    {
      type: "heading",
      text: "Breaking Out of Loops",
    },
    {
      type: "text",
      text: "The break keyword stops a loop immediately.",
    },
    {
      type: "code",
      text: "for i in range(10):\n    if i == 5:\n        break\n    print(i)",
    },

    {
      type: "heading",
      text: "Skipping Iterations with continue",
    },
    {
      type: "text",
      text: "The continue keyword skips the current iteration and moves to the next one.",
    },
    {
      type: "code",
      text: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
    },

    {
      type: "important",
      text: "Control flow is the backbone of Machine Learning logic. Training loops, conditions, and evaluation all depend on it.",
    },

    {
      type: "heading",
      text: "Control Flow in Machine Learning",
    },
    {
      type: "text",
      text: "Machine Learning models use loops for training, conditions for stopping criteria, and decisions for evaluation.",
    },
    {
      type: "text",
      text: "Without control flow, ML models cannot learn or improve.",
    },

    {
      type: "heading",
      text: "Visual Summary",
    },
    {
      type: "code",
      text: "if / elif / else → Decision making\nfor loop          → Fixed repetition\nwhile loop        → Conditional repetition\nbreak / continue  → Loop control",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how Python makes decisions using if statements and how repetition works using loops.",
    },
    {
      type: "text",
      text: "Next, you will learn how to organize logic using functions.",
    },
  ],
},
"python-functions": {
  title: "Functions in Python (Why They Matter in ML)",
  content: [
    {
      type: "heading",
      text: "What is a Function?",
    },
    {
      type: "text",
      text: "A function is a reusable block of code that performs a specific task.",
    },
    {
      type: "text",
      text: "Instead of writing the same code again and again, you write it once inside a function and reuse it.",
    },

    {
      type: "heading",
      text: "Why Functions Exist",
    },
    {
      type: "text",
      text: "Functions help keep code clean, organized, and easy to understand.",
    },
    {
      type: "text",
      text: "They allow you to break large problems into smaller logical steps.",
    },

    {
      type: "heading",
      text: "Defining a Function in Python",
    },
    {
      type: "code",
      text:
`def greet():
    print("Hello, welcome to Machine Learning")

# Pedagogy note:
# 'def' tells Python that we are defining a function.
# The code inside the function runs only when the function is called.`,
    },

    {
      type: "heading",
      text: "Calling a Function",
    },
    {
      type: "code",
      text:
`greet()

# Pedagogy note:
# A function does nothing until it is called.
# Calling a function executes the code inside it.`,
    },

    {
      type: "heading",
      text: "Functions with Parameters",
    },
    {
      type: "text",
      text: "Parameters allow functions to receive data and work with different values.",
    },
    {
      type: "code",
      text:
`def greet_user(name):
    print("Hello", name)

greet_user("Alice")
greet_user("Bob")

# Pedagogy note:
# 'name' is a parameter.
# Different values can be passed to the same function.`,
    },

    {
      type: "heading",
      text: "Returning Values from a Function",
    },
    {
      type: "text",
      text: "Functions can return results using the return keyword.",
    },
    {
      type: "code",
      text:
`def add(a, b):
    return a + b

result = add(5, 3)
print(result)

# Pedagogy note:
# return sends data back from the function.
# This is extremely important in ML where functions return predictions.`,
    },

    {
      type: "heading",
      text: "Why Functions Matter in Machine Learning",
    },
    {
      type: "code",
      text:
`# Example ML-style thinking

def calculate_accuracy(correct, total):
    return (correct / total) * 100

accuracy = calculate_accuracy(90, 100)
print(accuracy)

# Pedagogy note:
# ML code uses functions to calculate metrics,
# train models, preprocess data, and make predictions.`,
    },

    {
      type: "heading",
      text: "Functions Make Code Reusable",
    },
    {
      type: "code",
      text:
`def normalize(value, max_value):
    return value / max_value

print(normalize(50, 100))
print(normalize(30, 100))

# Pedagogy note:
# The same logic is reused without rewriting code.
# This is how ML pipelines are built.`,
    },

    {
      type: "heading",
      text: "Functions vs Copy-Paste Code",
    },
    {
      type: "text",
      text: "Copy-pasting code creates bugs and confusion. Functions create structure and clarity.",
    },

    {
      type: "important",
      text: "Almost every Machine Learning library internally uses functions. Writing your own functions is the first step toward writing real ML code.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what functions are, how to define them, pass data, return values, and why functions are critical in Machine Learning.",
    },
    {
      type: "text",
      text: "With functions, your Python code becomes modular, readable, and powerful.",
    },
  ],
},
"python-lists": {
  title: "Lists in Python",
  content: [
    {
      type: "heading",
      text: "What is a List?",
    },
    {
      type: "text",
      text: "A list is a data structure used to store multiple values in a single variable.",
    },
    {
      type: "text",
      text: "Instead of creating many variables, lists help you keep related data together.",
    },

    {
      type: "heading",
      text: "Creating a List",
    },
    {
      type: "code",
      text:
`numbers = [10, 20, 30]
names = ["Alice", "Bob", "Charlie"]

# Pedagogy note:
# Lists use square brackets []
# Items are separated by commas`,
    },

    {
      type: "heading",
      text: "Accessing List Items",
    },
    {
      type: "text",
      text: "Each item in a list has a position called an index. Indexing starts from 0.",
    },
    {
      type: "code",
      text:
`numbers = [10, 20, 30]
print(numbers[0])   # 10
print(numbers[1])   # 20

# Pedagogy note:
# First item → index 0
# Second item → index 1`,
    },

    {
      type: "heading",
      text: "Modifying List Items",
    },
    {
      type: "code",
      text:
`numbers[1] = 25
print(numbers)

# Pedagogy note:
# Lists are mutable (can be changed)`,
    },

    {
      type: "heading",
      text: "Adding Items to a List",
    },
    {
      type: "code",
      text:
`numbers.append(40)
print(numbers)

# Pedagogy note:
# append() adds item at the end`,
    },

    {
      type: "heading",
      text: "Why Lists Matter in Machine Learning",
    },
    {
      type: "text",
      text: "In Machine Learning, lists are used to store datasets, feature values, labels, and predictions.",
    },
    {
      type: "text",
      text: "They are often the starting point before using advanced libraries like NumPy and Pandas.",
    },

    {
      type: "important",
      text: "Lists allow you to work with collections of data, which is the core of Machine Learning.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what lists are, how to create them, access items, modify values, and why they are important in ML.",
    },
  ],
},
"python-tuples": {
  title: "Tuples in Python",
  content: [
    {
      type: "heading",
      text: "What is a Tuple?",
    },
    {
      type: "text",
      text: "A tuple is a data structure used to store multiple values, similar to a list.",
    },
    {
      type: "text",
      text: "The key difference is that tuples cannot be changed after creation.",
    },

    {
      type: "heading",
      text: "Creating a Tuple",
    },
    {
      type: "code",
      text:
`coordinates = (10, 20)
colors = ("red", "green", "blue")

# Pedagogy note:
# Tuples use round brackets ()
# Values are fixed once created`,
    },

    {
      type: "heading",
      text: "Accessing Tuple Items",
    },
    {
      type: "code",
      text:
`colors = ("red", "green", "blue")
print(colors[0])
print(colors[1])

# Pedagogy note:
# Indexing works same as lists`,
    },

    {
      type: "heading",
      text: "Tuples Cannot Be Modified",
    },
    {
      type: "code",
      text:
`colors[0] = "yellow"  # ❌ Error

# Pedagogy note:
# Tuples are immutable (read-only)`,
    },

    {
      type: "heading",
      text: "Why Tuples Exist",
    },
    {
      type: "text",
      text: "Tuples protect data from accidental changes and make programs more reliable.",
    },

    {
      type: "heading",
      text: "List vs Tuple (Quick Comparison)",
    },
    {
      type: "code",
      text:
`List  → Mutable (can change)
Tuple → Immutable (cannot change)

Use list  → when data changes
Use tuple → when data must stay fixed`,
    },

    {
      type: "heading",
      text: "Tuples in Machine Learning",
    },
    {
      type: "text",
      text: "Tuples are used in Machine Learning to store fixed values like coordinates, configuration settings, or dimensions.",
    },
    {
      type: "text",
      text: "They ensure important values are not modified by mistake.",
    },

    {
      type: "important",
      text: "Use tuples when data should remain constant throughout the program.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what tuples are, how they differ from lists, and when to use them in Machine Learning.",
    },
  ],
},
"python-sets": {
  title: "Sets in Python",
  content: [
    {
      type: "heading",
      text: "What is a Set?",
    },
    {
      type: "text",
      text: "A set is a data structure used to store multiple unique values.",
    },
    {
      type: "text",
      text: "Sets automatically remove duplicate values.",
    },

    {
      type: "heading",
      text: "Creating a Set",
    },
    {
      type: "code",
      text:
`numbers = {1, 2, 3, 3, 4}
print(numbers)

# Pedagogy note:
# Duplicate values are removed automatically`,
    },

    {
      type: "heading",
      text: "Why Sets Are Useful",
    },
    {
      type: "text",
      text: "Sets are useful when you only care about unique values and not their order.",
    },

    {
      type: "heading",
      text: "Adding Items to a Set",
    },
    {
      type: "code",
      text:
`colors = {"red", "blue"}
colors.add("green")
print(colors)

# Pedagogy note:
# add() inserts a new unique value`,
    },

    {
      type: "heading",
      text: "Removing Items from a Set",
    },
    {
      type: "code",
      text:
`colors.remove("red")
print(colors)

# Pedagogy note:
# remove() deletes an item from the set`,
    },

    {
      type: "heading",
      text: "Set vs List (Quick View)",
    },
    {
      type: "code",
      text:
`List → Allows duplicates, keeps order
Set  → No duplicates, order not guaranteed`,
    },

    {
      type: "heading",
      text: "Sets in Machine Learning",
    },
    {
      type: "text",
      text: "In Machine Learning, sets are used to find unique categories, remove duplicate values, and clean datasets.",
    },
    {
      type: "text",
      text: "They are especially useful during data preprocessing.",
    },

    {
      type: "important",
      text: "If you need unique values, always think about using a set.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what sets are, how they store unique values, and why they are useful in Machine Learning.",
    },
  ],
},
"python-dictionaries": {
  title: "Dictionaries in Python",
  content: [
    {
      type: "heading",
      text: "What is a Dictionary?",
    },
    {
      type: "text",
      text: "A dictionary is a data structure that stores data in key–value pairs.",
    },
    {
      type: "text",
      text: "Instead of using positions like lists, dictionaries use keys to access values.",
    },

    {
      type: "heading",
      text: "Creating a Dictionary",
    },
    {
      type: "code",
      text:
`student = {
    "name": "Alice",
    "age": 20,
    "score": 85
}

# Pedagogy note:
# Keys describe the data
# Values store the actual information`,
    },

    {
      type: "heading",
      text: "Accessing Values Using Keys",
    },
    {
      type: "code",
      text:
`print(student["name"])
print(student["score"])

# Pedagogy note:
# Keys are used instead of index numbers`,
    },

    {
      type: "heading",
      text: "Updating Dictionary Values",
    },
    {
      type: "code",
      text:
`student["score"] = 90
print(student)

# Pedagogy note:
# Dictionaries are mutable`,
    },

    {
      type: "heading",
      text: "Adding New Key–Value Pairs",
    },
    {
      type: "code",
      text:
`student["grade"] = "A"
print(student)

# Pedagogy note:
# New information can be added easily`,
    },

    {
      type: "heading",
      text: "Why Dictionaries Are Powerful",
    },
    {
      type: "text",
      text: "Dictionaries allow you to store structured data in a readable and meaningful way.",
    },

    {
      type: "heading",
      text: "Dictionary vs List (Mental Model)",
    },
    {
      type: "code",
      text:
`List       → Data by position
Dictionary → Data by meaning (key)`,
    },

    {
      type: "heading",
      text: "Dictionaries in Machine Learning",
    },
    {
      type: "text",
      text: "In Machine Learning, dictionaries are used to represent features and their values.",
    },
    {
      type: "text",
      text: "They are commonly used for configurations, labeled data, and model parameters.",
    },

    {
      type: "important",
      text: "Machine Learning models think in terms of feature–value pairs. Dictionaries match this thinking style.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what dictionaries are, how to create and modify them, and why they are essential in Machine Learning.",
    },
  ],
},
"iterating-data-structures": {
  title: "Iterating Over Data Structures",
  content: [
    {
      type: "heading",
      text: "What Does Iteration Mean?",
    },
    {
      type: "text",
      text: "Iteration means going through data one item at a time.",
    },
    {
      type: "text",
      text: "In Machine Learning, almost everything involves iterating over data.",
    },

    {
      type: "heading",
      text: "Iterating Over a List",
    },
    {
      type: "code",
      text:
`numbers = [1, 2, 3, 4]

for n in numbers:
    print(n)

# Pedagogy note:
# Loop touches one data point at a time`,
    },

    {
      type: "heading",
      text: "Iterating Over a Tuple",
    },
    {
      type: "code",
      text:
`coordinates = (10, 20)

for value in coordinates:
    print(value)

# Pedagogy note:
# Tuples iterate like lists`,
    },

    {
      type: "heading",
      text: "Iterating Over a Set",
    },
    {
      type: "code",
      text:
`unique_ids = {101, 102, 103}

for uid in unique_ids:
    print(uid)

# Pedagogy note:
# Order is not guaranteed in sets`,
    },

    {
      type: "heading",
      text: "Iterating Over a Dictionary (Keys)",
    },
    {
      type: "code",
      text:
`student = {"name": "Alice", "score": 90}

for key in student:
    print(key)

# Pedagogy note:
# Default iteration gives keys`,
    },

    {
      type: "heading",
      text: "Iterating Over Dictionary Values",
    },
    {
      type: "code",
      text:
`for value in student.values():
    print(value)

# Pedagogy note:
# values() gives actual data`,
    },

    {
      type: "heading",
      text: "Iterating Over Key–Value Pairs",
    },
    {
      type: "code",
      text:
`for key, value in student.items():
    print(key, value)

# Pedagogy note:
# This pattern is used heavily in ML`,
    },

    {
      type: "heading",
      text: "Why Iteration Matters in Machine Learning",
    },
    {
      type: "text",
      text: "Machine Learning models learn by iterating over data samples repeatedly.",
    },
    {
      type: "text",
      text: "Training, evaluation, and preprocessing all rely on iteration.",
    },

    {
      type: "important",
      text: "If you understand loops on data structures, you can understand how ML models learn.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how to iterate over lists, tuples, sets, and dictionaries, and why iteration is essential in Machine Learning.",
    },
  ],
},
"nested-data-structures": {
  title: "Nested Data Structures",
  content: [
    {
      type: "heading",
      text: "What Are Nested Data Structures?",
    },
    {
      type: "text",
      text: "Nested data structures mean storing one data structure inside another.",
    },
    {
      type: "text",
      text: "Real-world data is almost always nested.",
    },

    {
      type: "heading",
      text: "List Inside a List",
    },
    {
      type: "code",
      text:
`matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

print(matrix[0])
print(matrix[1][2])

# Pedagogy note:
# Think rows → columns`,
    },

    {
      type: "heading",
      text: "Dictionary Inside a Dictionary",
    },
    {
      type: "code",
      text:
`student = {
    "name": "Alice",
    "scores": {
        "math": 90,
        "science": 85
    }
}

print(student["scores"]["math"])

# Pedagogy note:
# Data grouped by meaning`,
    },

    {
      type: "heading",
      text: "List of Dictionaries (Very Common)",
    },
    {
      type: "code",
      text:
`students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92}
]

print(students[1]["name"])

# Pedagogy note:
# Each item = one data record`,
    },

    {
      type: "heading",
      text: "Iterating Over Nested Data",
    },
    {
      type: "code",
      text:
`for student in students:
    print(student["name"], student["score"])

# Pedagogy note:
# This pattern is used everywhere in ML`,
    },

    {
      type: "heading",
      text: "Why Nested Data Matters in ML",
    },
    {
      type: "text",
      text: "Datasets contain rows, columns, features, labels, and metadata — all nested together.",
    },
    {
      type: "text",
      text: "Understanding nested data helps you read JSON, CSV, and API data.",
    },

    {
      type: "important",
      text: "If you can understand nested data, real datasets will not scare you.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how lists and dictionaries can be nested, how to access inner values, and why nested data is fundamental in Machine Learning.",
    },
  ],
},
"choosing-right-data-structure": {
  title: "When to Use Which Data Structure",
  content: [
    {
      type: "heading",
      text: "Why Choosing the Right Structure Matters",
    },
    {
      type: "text",
      text: "In Machine Learning, the way you store data affects how easily you can process, clean, and understand it.",
    },
    {
      type: "text",
      text: "Choosing the right data structure makes your code simpler and your thinking clearer.",
    },

    {
      type: "heading",
      text: "Quick Decision Table",
    },
    {
      type: "code",
      text:
`Use List        → Ordered data, duplicates allowed
Use Tuple       → Fixed data that should not change
Use Set         → Unique values only
Use Dictionary  → Feature–value data`,
    },

    {
      type: "heading",
      text: "When to Use a List",
    },
    {
      type: "text",
      text: "Use a list when the order of data matters and duplicates are allowed.",
    },
    {
      type: "code",
      text:
`scores = [85, 90, 85]

# Pedagogy note:
# Order matters, duplicates allowed`,
    },

    {
      type: "heading",
      text: "When to Use a Tuple",
    },
    {
      type: "text",
      text: "Use a tuple when data should not be modified, such as coordinates or configuration values.",
    },
    {
      type: "code",
      text:
`point = (10, 20)

# Pedagogy note:
# Fixed structure, safer than list`,
    },

    {
      type: "heading",
      text: "When to Use a Set",
    },
    {
      type: "text",
      text: "Use a set when you want only unique values and do not care about order.",
    },
    {
      type: "code",
      text:
`unique_labels = {"spam", "ham", "spam"}

# Pedagogy note:
# Duplicates removed automatically`,
    },

    {
      type: "heading",
      text: "When to Use a Dictionary",
    },
    {
      type: "text",
      text: "Use a dictionary when data has meaning and labels, such as features and their values.",
    },
    {
      type: "code",
      text:
`email = {
  "length": 120,
  "has_link": True
}

# Pedagogy note:
# This is how ML sees data`,
    },

    {
      type: "heading",
      text: "How ML Thinks About Data",
    },
    {
      type: "text",
      text: "Machine Learning models work with structured data: features, labels, and values.",
    },
    {
      type: "text",
      text: "Dictionaries and lists of dictionaries are the most common structures used in ML.",
    },

    {
      type: "important",
      text: "If you can choose the right data structure, you are already thinking like a Machine Learning engineer.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how to decide between lists, tuples, sets, and dictionaries based on the problem you are solving.",
    },
  ],
},
"python-input-output": {
  title: "Input & Output in Python",
  content: [
    {
      type: "heading",
      text: "What is Input and Output?",
    },
    {
      type: "text",
      text: "Input means taking data from outside the program. Output means showing results back to the user.",
    },
    {
      type: "text",
      text: "In Machine Learning, data rarely lives inside the code. It usually comes from files, users, or external systems.",
    },

    {
      type: "heading",
      text: "Taking Input from the User",
    },
    {
      type: "code",
      text:
`name = input("Enter your name: ")
print(name)

# Pedagogy note:
# input() always returns text (string)`,
    },

    {
      type: "heading",
      text: "Why Input is Important for ML",
    },
    {
      type: "text",
      text: "Machine Learning models often take input values like features, parameters, or user data.",
    },
    {
      type: "text",
      text: "Understanding input helps you control how data enters your ML pipeline.",
    },

    {
      type: "heading",
      text: "Printing Output",
    },
    {
      type: "code",
      text:
`score = 85
print("Model accuracy:", score)

# Pedagogy note:
# Output helps you inspect results`,
    },

    {
      type: "heading",
      text: "Input vs Output (ML Perspective)",
    },
    {
      type: "code",
      text:
`Input  → Raw data / features
Output → Predictions / results`,
    },

    {
      type: "heading",
      text: "Why This Matters in Machine Learning",
    },
    {
      type: "text",
      text: "Training models, testing models, and making predictions all depend on proper input and output handling.",
    },
    {
      type: "text",
      text: "If you cannot control input and output, you cannot control your model.",
    },

    {
      type: "important",
      text: "Machine Learning is a loop: data comes in, results go out.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how Python takes input, shows output, and why this is essential for Machine Learning workflows.",
    },
  ],
},
"python-reading-files": {
  title: "Reading Files in Python",
  content: [
    {
      type: "heading",
      text: "Why Reading Files Is Important",
    },
    {
      type: "text",
      text: "In real-world Machine Learning, data is not written inside the Python code. It usually exists in external files such as text files, CSV files, or logs.",
    },
    {
      type: "text",
      text: "To train a Machine Learning model, Python must first read this external data and bring it into memory.",
    },

    {
      type: "heading",
      text: "What Does It Mean to Read a File?",
    },
    {
      type: "text",
      text: "Reading a file means opening it, accessing its content, and storing that content inside your program so it can be processed.",
    },
    {
      type: "text",
      text: "Once data is inside the program, you can clean it, analyze it, or feed it into a Machine Learning model.",
    },

    {
      type: "heading",
      text: "Opening a File in Python",
    },
    {
      type: "text",
      text: "Before reading a file, Python must know which file to open and in which mode.",
    },
    {
      type: "code",
      text:
`file = open("data.txt", "r")

# Pedagogy note:
# 'r' stands for read mode`,
    },

    {
      type: "heading",
      text: "Reading the Entire File",
    },
    {
      type: "text",
      text: "Sometimes datasets are small enough to be loaded completely into memory at once.",
    },
    {
      type: "code",
      text:
`content = file.read()
print(content)

# Pedagogy note:
# read() loads the whole file as one string`,
    },

    {
      type: "heading",
      text: "Reading Files Line by Line",
    },
    {
      type: "text",
      text: "Large datasets should not be loaded all at once. Reading line by line is more memory-efficient.",
    },
    {
      type: "code",
      text:
`file = open("data.txt", "r")

for line in file:
    print(line)

# Pedagogy note:
# Each loop iteration reads one line`,
    },

    {
      type: "heading",
      text: "Why Closing a File Matters",
    },
    {
      type: "text",
      text: "When a file is open, the operating system reserves resources for it.",
    },
    {
      type: "text",
      text: "If files are not closed properly, programs may crash or behave unpredictably.",
    },
    {
      type: "code",
      text:
`file.close()

# Pedagogy note:
# Always close files after reading`,
    },

    {
      type: "heading",
      text: "The Safer and Preferred Way: Using 'with'",
    },
    {
      type: "text",
      text: "Python provides a safer way to work with files using the 'with' statement.",
    },
    {
      type: "text",
      text: "It automatically closes the file when the block ends.",
    },
    {
      type: "code",
      text:
`with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Pedagogy note:
# This is the recommended approach`,
    },

    {
      type: "heading",
      text: "How This Connects to Machine Learning",
    },
    {
      type: "text",
      text: "Machine Learning workflows start by reading raw data from files before any cleaning or modeling happens.",
    },
    {
      type: "text",
      text: "CSV datasets, logs, and configuration files are all accessed using the same file-reading concepts.",
    },

    {
      type: "important",
      text: "Reading files correctly is the first real technical step toward building Machine Learning systems.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what file reading means, how Python opens and reads files, why closing files matters, and how this fits into real Machine Learning workflows.",
    },
  ],
},
"python-writing-files": {
  title: "Writing Files in Python",
  content: [
    {
      type: "heading",
      text: "Why Writing Files Is Important",
    },
    {
      type: "text",
      text: "In Machine Learning, the work does not end after processing data or training a model.",
    },
    {
      type: "text",
      text: "Results such as predictions, accuracy scores, and logs must be saved so they can be reused later.",
    },

    {
      type: "heading",
      text: "What Does Writing to a File Mean?",
    },
    {
      type: "text",
      text: "Writing to a file means taking data from your program and storing it permanently on disk.",
    },
    {
      type: "text",
      text: "This allows your results to exist even after the program stops running.",
    },

    {
      type: "heading",
      text: "Opening a File in Write Mode",
    },
    {
      type: "text",
      text: "To write data, a file must be opened in write mode using 'w'.",
    },
    {
      type: "code",
      text:
`file = open("results.txt", "w")

# Pedagogy note:
# 'w' means write mode`,
    },

    {
      type: "heading",
      text: "Writing Text to a File",
    },
    {
      type: "code",
      text:
`file.write("Model accuracy: 85%")

# Pedagogy note:
# write() stores text in the file`,
    },

    {
      type: "heading",
      text: "Closing the File After Writing",
    },
    {
      type: "text",
      text: "Closing a file ensures that all data is properly saved and system resources are released.",
    },
    {
      type: "code",
      text:
`file.close()

# Pedagogy note:
# Always close files after writing`,
    },

    {
      type: "heading",
      text: "Using 'with' to Write Files Safely",
    },
    {
      type: "text",
      text: "The 'with' statement is the recommended way to write files because it automatically closes the file.",
    },
    {
      type: "code",
      text:
`with open("results.txt", "w") as file:
    file.write("Training completed successfully")

# Pedagogy note:
# Safer and cleaner approach`,
    },

    {
      type: "heading",
      text: "Appending Data to a File",
    },
    {
      type: "text",
      text: "Sometimes you want to add new information without deleting existing data.",
    },
    {
      type: "code",
      text:
`with open("results.txt", "a") as file:
    file.write("\\nNew experiment logged")

# Pedagogy note:
# 'a' means append mode`,
    },

    {
      type: "heading",
      text: "Writing Files in Machine Learning",
    },
    {
      type: "text",
      text: "Machine Learning workflows save predictions, evaluation metrics, and logs to files.",
    },
    {
      type: "text",
      text: "Without writing files, trained models and results would be lost after execution.",
    },

    {
      type: "important",
      text: "Machine Learning systems are valuable only when their results can be stored and reused.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how to write data to files, append new information, and why saving results is essential in Machine Learning workflows.",
    },
  ],
},
"python-error-handling": {
  title: "Basic Error Handling (try / except)",
  content: [
    {
      type: "heading",
      text: "Why Error Handling Matters",
    },
    {
      type: "text",
      text: "In real-world programs, errors are unavoidable. Files may be missing, data may be incorrect, or inputs may be invalid.",
    },
    {
      type: "text",
      text: "Error handling allows your program to fail safely instead of crashing.",
    },

    {
      type: "heading",
      text: "What Is an Error?",
    },
    {
      type: "text",
      text: "An error is a problem that occurs while a program is running, causing it to stop unexpectedly.",
    },
    {
      type: "text",
      text: "Without handling errors, your program terminates and produces no useful output.",
    },

    {
      type: "heading",
      text: "The try / except Pattern",
    },
    {
      type: "text",
      text: "Python provides try and except blocks to handle errors gracefully.",
    },
    {
      type: "code",
      text:
`try:
    x = int("abc")
except:
    print("Conversion failed")

# Pedagogy note:
# Program continues instead of crashing`,
    },

    {
      type: "heading",
      text: "Handling File Errors",
    },
    {
      type: "text",
      text: "Files may not exist or may be inaccessible. Error handling prevents program failure.",
    },
    {
      type: "code",
      text:
`try:
    file = open("data.txt", "r")
    content = file.read()
    file.close()
except:
    print("File not found")

# Pedagogy note:
# Common real-world scenario`,
    },

    {
      type: "heading",
      text: "Why Not Ignore Errors?",
    },
    {
      type: "text",
      text: "Ignoring errors makes debugging difficult and systems unreliable.",
    },
    {
      type: "text",
      text: "Handling errors allows you to understand what went wrong and respond appropriately.",
    },

    {
      type: "heading",
      text: "Error Handling in Machine Learning",
    },
    {
      type: "text",
      text: "Machine Learning pipelines process large amounts of data and external files.",
    },
    {
      type: "text",
      text: "Error handling ensures models do not fail due to minor issues such as missing data or incorrect formats.",
    },

    {
      type: "important",
      text: "A Machine Learning engineer writes code that survives unexpected data.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what errors are, how try and except work, and why error handling is essential in Machine Learning workflows.",
    },
  ],
},
"why-clean-data-matters": {
  title: "Why Clean Data Matters in Machine Learning",
  content: [
    {
      type: "heading",
      text: "What Is Clean Data?",
    },
    {
      type: "text",
      text: "Clean data means data that is accurate, complete, consistent, and usable for analysis.",
    },
    {
      type: "text",
      text: "In Machine Learning, models do not understand context — they only learn from the data they are given.",
    },

    {
      type: "heading",
      text: "What Happens With Dirty Data?",
    },
    {
      type: "text",
      text: "Dirty data may contain missing values, incorrect formats, duplicate entries, or inconsistent information.",
    },
    {
      type: "text",
      text: "If dirty data is used, Machine Learning models learn wrong patterns and produce unreliable results.",
    },

    {
      type: "heading",
      text: "Common Data Problems",
    },
    {
      type: "code",
      text:
`Missing values
Duplicate records
Incorrect data types
Inconsistent labels

# Pedagogy note:
# These issues exist in almost every real dataset`,
    },

    {
      type: "heading",
      text: "Why ML Models Depend on Data Quality",
    },
    {
      type: "text",
      text: "Machine Learning models do not question data. They assume the data is correct.",
    },
    {
      type: "text",
      text: "If the input data is flawed, the output predictions will also be flawed.",
    },

    {
      type: "heading",
      text: "Real-World ML Example",
    },
    {
      type: "text",
      text: "If an email dataset contains mislabeled spam emails, a spam classifier will learn incorrect patterns.",
    },
    {
      type: "text",
      text: "The model may start marking important emails as spam.",
    },

    {
      type: "heading",
      text: "Cleaning Data Is Part of the ML Job",
    },
    {
      type: "text",
      text: "In real Machine Learning projects, most time is spent cleaning and preparing data — not training models.",
    },
    {
      type: "text",
      text: "Python is used to detect, fix, and remove data problems before modeling begins.",
    },

    {
      type: "important",
      text: "Better data always beats better algorithms.",
    },

    {
      type: "heading",
      text: "How This Section Fits into Machine Learning",
    },
    {
      type: "text",
      text: "Sections 1–3 prepared you to handle real data confidently using Python.",
    },
    {
      type: "text",
      text: "From the next section onward, you will start learning how Machine Learning uses this data.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned why data quality matters, common data issues, and why cleaning data is essential before applying Machine Learning.",
    },
  ],
},
"what-is-numpy": {
  title: "What is NumPy?",
  content: [
    {
      type: "heading",
      text: "Why Python Alone Is Not Enough for ML",
    },
    {
      type: "text",
      text: "Python is easy to read and write, but it is not designed for heavy numerical computation.",
    },
    {
      type: "text",
      text: "Machine Learning involves large amounts of numerical data and mathematical operations.",
    },

    {
      type: "heading",
      text: "What is NumPy?",
    },
    {
      type: "text",
      text: "NumPy is a Python library designed for fast numerical computation.",
    },
    {
      type: "text",
      text: "It provides powerful data structures and operations for working with numbers efficiently.",
    },

    {
      type: "heading",
      text: "The Core Idea Behind NumPy",
    },
    {
      type: "text",
      text: "The core idea of NumPy is the NumPy array.",
    },
    {
      type: "text",
      text: "A NumPy array stores numbers in a compact, fixed-type format that is much faster than Python lists.",
    },

    {
      type: "heading",
      text: "Creating a NumPy Array",
    },
    {
      type: "code",
      text:
`import numpy as np

numbers = np.array([1, 2, 3, 4])

# Pedagogy note:
# NumPy arrays are homogeneous (same data type)`,
    },

    {
      type: "heading",
      text: "Why NumPy Is Fast",
    },
    {
      type: "text",
      text: "NumPy performs operations at the C-level, which makes it significantly faster than Python loops.",
    },
    {
      type: "text",
      text: "This speed is critical when working with large datasets in Machine Learning.",
    },

    {
      type: "heading",
      text: "NumPy in Machine Learning",
    },
    {
      type: "text",
      text: "Most Machine Learning libraries like scikit-learn, TensorFlow, and PyTorch rely on NumPy internally.",
    },
    {
      type: "text",
      text: "Understanding NumPy helps you understand how data flows through ML models.",
    },

    {
      type: "important",
      text: "If Machine Learning is about numbers, NumPy is the language those numbers speak.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what NumPy is, why Python alone is not enough for ML, and how NumPy fits into the Machine Learning ecosystem.",
    },
  ],
},

"numpy-arrays-vs-lists": {
  title: "NumPy Arrays vs Python Lists",
  content: [
    {
      type: "heading",
      text: "Why This Comparison Matters",
    },
    {
      type: "text",
      text: "Python lists are general-purpose data structures, while NumPy arrays are designed specifically for numerical computation.",
    },
    {
      type: "text",
      text: "Machine Learning relies heavily on numerical operations, which is where NumPy arrays shine.",
    },

    {
      type: "heading",
      text: "Python List Example",
    },
    {
      type: "code",
      text:
`numbers = [1, 2, 3, 4]
result = []

for n in numbers:
    result.append(n * 2)

print(result)

# Pedagogy note:
# Requires manual looping`,
    },

    {
      type: "heading",
      text: "NumPy Array Example",
    },
    {
      type: "code",
      text:
`import numpy as np

numbers = np.array([1, 2, 3, 4])
result = numbers * 2

print(result)

# Pedagogy note:
# Vectorized operation (no loop)`,
    },

    {
      type: "heading",
      text: "Key Differences (Mental Model)",
    },
    {
      type: "code",
      text:
`Python List → Flexible, slow for math
NumPy Array → Fixed-type, fast for math`,
    },

    {
      type: "heading",
      text: "Why NumPy Feels Natural in ML",
    },
    {
      type: "text",
      text: "Machine Learning algorithms work on entire arrays of data at once, not one value at a time.",
    },
    {
      type: "text",
      text: "NumPy allows you to think in terms of vectors and matrices instead of loops.",
    },

    {
      type: "important",
      text: "If you find yourself writing loops for math, NumPy is the better choice.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how NumPy arrays differ from Python lists and why NumPy is preferred for Machine Learning computations.",
    },
  ],
},

"numpy-array-operations": {
  title: "Array Operations & Broadcasting",
  content: [
    {
      type: "heading",
      text: "What is Broadcasting?",
    },
    {
      type: "text",
      text: "Broadcasting is a mechanism that allows NumPy to perform operations on arrays of different shapes.",
    },
    {
      type: "text",
      text: "Instead of forcing you to write loops, NumPy automatically expands smaller arrays when needed.",
    },

    {
      type: "heading",
      text: "Why Broadcasting Exists",
    },
    {
      type: "text",
      text: "In Machine Learning, we often apply the same operation to an entire dataset.",
    },
    {
      type: "text",
      text: "Broadcasting makes these operations simple, readable, and efficient.",
    },

    {
      type: "heading",
      text: "Simple Broadcasting Example",
    },
    {
      type: "code",
      text:
`import numpy as np

arr = np.array([1, 2, 3, 4])
result = arr + 10

print(result)

# Pedagogy note:
# 10 is applied to every element automatically`,
    },

    {
      type: "heading",
      text: "How to Think About Broadcasting",
    },
    {
      type: "text",
      text: "You can imagine NumPy stretching the smaller value to match the shape of the larger array.",
    },
    {
      type: "text",
      text: "This stretching happens virtually, without copying data.",
    },

    {
      type: "heading",
      text: "Broadcasting with Arrays",
    },
    {
      type: "code",
      text:
`matrix = np.array([[1, 2, 3],
                   [4, 5, 6]])

vector = np.array([10, 20, 30])

print(matrix + vector)

# Pedagogy note:
# vector is added to each row`,
    },

    {
      type: "heading",
      text: "Why This Is Powerful",
    },
    {
      type: "text",
      text: "Without broadcasting, you would need nested loops to perform these operations.",
    },
    {
      type: "text",
      text: "Broadcasting keeps code short and performance high.",
    },

    {
      type: "heading",
      text: "Broadcasting in Machine Learning",
    },
    {
      type: "text",
      text: "Feature scaling, normalization, and bias addition all rely on broadcasting.",
    },
    {
      type: "text",
      text: "When a model adds a bias term to every prediction, broadcasting is doing the work.",
    },

    {
      type: "important",
      text: "Broadcasting is one of the main reasons NumPy code looks clean and mathematical.",
    },

    {
      type: "heading",
      text: "Common Beginner Mistake",
    },
    {
      type: "text",
      text: "If array shapes are incompatible, broadcasting will fail and raise an error.",
    },
    {
      type: "text",
      text: "Always be aware of the shape of your arrays.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what broadcasting is, how NumPy applies it, and why it is essential in Machine Learning workflows.",
    },
  ],
},
"why-numpy-is-fast": {
  title: "Why NumPy is Fast",
  content: [
    {
      type: "heading",
      text: "The Speed Problem in Python",
    },
    {
      type: "text",
      text: "Pure Python is easy to read and write, but it becomes slow when working with large amounts of numerical data.",
    },
    {
      type: "text",
      text: "Machine Learning often involves millions of calculations, which is where performance matters.",
    },

    {
      type: "heading",
      text: "Why Python Loops Are Slow",
    },
    {
      type: "text",
      text: "In Python, loops execute one step at a time, and each step involves interpretation overhead.",
    },
    {
      type: "text",
      text: "This overhead becomes a bottleneck when processing large datasets.",
    },

    {
      type: "heading",
      text: "NumPy Solves This Problem",
    },
    {
      type: "text",
      text: "NumPy is written in C under the hood, which allows it to perform computations much faster than Python loops.",
    },
    {
      type: "text",
      text: "When you use NumPy operations, the heavy computation happens in optimized C code.",
    },

    {
      type: "heading",
      text: "Vectorized Operations",
    },
    {
      type: "text",
      text: "NumPy encourages vectorized operations, meaning operations are applied to entire arrays at once.",
    },
    {
      type: "code",
      text:
`import numpy as np

arr = np.array([1, 2, 3, 4, 5])
result = arr * 2

print(result)

# Pedagogy note:
# No loop is written, but multiplication happens for all elements`,
    },

    {
      type: "heading",
      text: "Memory Efficiency",
    },
    {
      type: "text",
      text: "NumPy arrays store data in a contiguous block of memory.",
    },
    {
      type: "text",
      text: "This allows the CPU to access data faster compared to Python lists.",
    },

    {
      type: "heading",
      text: "Consistency of Data Types",
    },
    {
      type: "text",
      text: "Unlike Python lists, NumPy arrays store elements of the same data type.",
    },
    {
      type: "text",
      text: "This consistency allows NumPy to apply low-level optimizations.",
    },

    {
      type: "heading",
      text: "Why This Matters in Machine Learning",
    },
    {
      type: "text",
      text: "Training Machine Learning models involves repeated mathematical operations.",
    },
    {
      type: "text",
      text: "NumPy ensures these operations are fast enough to scale to real-world datasets.",
    },

    {
      type: "important",
      text: "Almost all ML libraries like Pandas, scikit-learn, and TensorFlow rely on NumPy internally.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned why NumPy is faster than pure Python and why it is the foundation of Machine Learning computations.",
    },
  ],
},
"what-is-pandas": {
  title: "Introduction to Pandas (What & Why)",
  content: [
    {
      type: "heading",
      text: "The Data Problem in Machine Learning",
    },
    {
      type: "text",
      text: "Machine Learning is not just about algorithms. Most of the work happens before the model is trained.",
    },
    {
      type: "text",
      text: "Real-world data is messy, incomplete, and stored in tables, files, or databases.",
    },

    {
      type: "heading",
      text: "What is Pandas?",
    },
    {
      type: "text",
      text: "Pandas is a Python library designed for working with structured data such as tables and spreadsheets.",
    },
    {
      type: "text",
      text: "It provides powerful tools to load, clean, explore, and manipulate data easily.",
    },

    {
      type: "heading",
      text: "Why NumPy Alone Is Not Enough",
    },
    {
      type: "text",
      text: "NumPy is great for numerical computation, but it lacks labels, column names, and flexible data handling.",
    },
    {
      type: "text",
      text: "Pandas adds structure, making data easier to understand and work with.",
    },

    {
      type: "heading",
      text: "Key Idea: Data as Tables",
    },
    {
      type: "text",
      text: "In Pandas, data is usually represented in a table-like structure with rows and columns.",
    },
    {
      type: "text",
      text: "This format closely matches how real-world datasets are stored.",
    },

    {
      type: "heading",
      text: "Your First Pandas Example",
    },
    {
      type: "code",
      text:
`import pandas as pd

data = {
  "age": [22, 25, 30],
  "score": [85, 90, 78]
}

df = pd.DataFrame(data)
print(df)

# Pedagogy note:
# Data is stored with column names and rows`,
    },

    {
      type: "heading",
      text: "Why Pandas Is Essential for ML",
    },
    {
      type: "text",
      text: "Pandas makes it easy to select features, clean missing values, and prepare data for Machine Learning models.",
    },
    {
      type: "text",
      text: "Most ML pipelines start with Pandas DataFrames.",
    },

    {
      type: "important",
      text: "If NumPy is the engine of ML, Pandas is the dashboard that helps you understand the data.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what Pandas is, why it exists, and why it is a critical tool for Machine Learning workflows.",
    },
  ],
},
"pandas-series-dataframes": {
  title: "Series & DataFrames",
  content: [
    {
      type: "heading",
      text: "Understanding Pandas Data Structures",
    },
    {
      type: "text",
      text: "Pandas mainly works with two core data structures: Series and DataFrames.",
    },
    {
      type: "text",
      text: "Almost all Machine Learning datasets are handled using these two structures.",
    },

    {
      type: "heading",
      text: "What is a Series?",
    },
    {
      type: "text",
      text: "A Series is a one-dimensional data structure that can hold numbers, strings, or other data types.",
    },
    {
      type: "text",
      text: "You can think of a Series as a single column of data.",
    },

    {
      type: "heading",
      text: "Simple Series Example",
    },
    {
      type: "code",
      text:
`import pandas as pd

scores = pd.Series([85, 90, 78])
print(scores)

# Pedagogy note:
# This is like one column without a table`,
    },

    {
      type: "heading",
      text: "What is a DataFrame?",
    },
    {
      type: "text",
      text: "A DataFrame is a two-dimensional structure with rows and columns.",
    },
    {
      type: "text",
      text: "It is similar to an Excel sheet or a database table.",
    },

    {
      type: "heading",
      text: "Simple DataFrame Example",
    },
    {
      type: "code",
      text:
`data = {
  "age": [22, 25, 30],
  "score": [85, 90, 78]
}

df = pd.DataFrame(data)
print(df)

# Pedagogy note:
# Rows = records, Columns = features`,
    },

    {
      type: "heading",
      text: "Why DataFrames Matter in Machine Learning",
    },
    {
      type: "text",
      text: "In Machine Learning, each row usually represents one data sample.",
    },
    {
      type: "text",
      text: "Each column represents a feature used by the model.",
    },

    {
      type: "heading",
      text: "Series vs DataFrame (Quick Comparison)",
    },
    {
      type: "text",
      text: "Series = single column of data. DataFrame = multiple columns combined into a table.",
    },

    {
      type: "important",
      text: "Most ML models expect input data in a tabular format, which is why DataFrames are used everywhere.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what Series and DataFrames are, how they differ, and why DataFrames are central to Machine Learning.",
    },
  ],
},
"reading-csv-with-pandas": {
  title: "Reading CSV Files with Pandas",
  content: [
    {
      type: "heading",
      text: "Why CSV Files Are Everywhere",
    },
    {
      type: "text",
      text: "Most real-world datasets are stored in CSV (Comma Separated Values) format.",
    },
    {
      type: "text",
      text: "CSV files are simple, lightweight, and easy to share, which makes them popular in Machine Learning.",
    },

    {
      type: "heading",
      text: "What is a CSV File?",
    },
    {
      type: "text",
      text: "A CSV file stores data in rows and columns, where values are separated by commas.",
    },
    {
      type: "text",
      text: "Each row usually represents one data record, and each column represents a feature.",
    },

    {
      type: "heading",
      text: "Reading a CSV File Using Pandas",
    },
    {
      type: "code",
      text:
`import pandas as pd

df = pd.read_csv("data.csv")
print(df.head())

# Pedagogy note:
# read_csv loads the file into a DataFrame
# head() shows the first few rows`,
    },

    {
      type: "heading",
      text: "Why head() is Important",
    },
    {
      type: "text",
      text: "The head() method helps you quickly inspect the structure of the dataset.",
    },
    {
      type: "text",
      text: "This step is always done before cleaning or modeling data.",
    },

    {
      type: "heading",
      text: "Common Beginner Mistake",
    },
    {
      type: "text",
      text: "A wrong file path or file name will cause an error while reading CSV files.",
    },
    {
      type: "text",
      text: "Always ensure the file exists in the correct directory.",
    },

    {
      type: "heading",
      text: "Why This Matters in Machine Learning",
    },
    {
      type: "text",
      text: "Every Machine Learning project starts with loading data.",
    },
    {
      type: "text",
      text: "Pandas makes it easy to move from raw data files to clean, usable datasets.",
    },

    {
      type: "important",
      text: "If you can load and inspect data correctly, you are already ahead in the ML workflow.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned what CSV files are, how to read them using Pandas, and why this step is essential in Machine Learning.",
    },
  ],
},
"data-cleaning-with-pandas": {
  title: "Selecting & Filtering Data in Pandas",
  content: [
    {
      type: "heading",
      text: "Why Selecting Data Matters",
    },
    {
      type: "text",
      text: "In Machine Learning, models do not need all available data.",
    },
    {
      type: "text",
      text: "Selecting the right columns and rows helps focus on useful information.",
    },

    {
      type: "heading",
      text: "Selecting Columns",
    },
    {
      type: "text",
      text: "Pandas allows you to select columns using column names.",
    },
    {
      type: "code",
      text:
`import pandas as pd

df = pd.read_csv("data.csv")

ages = df["age"]
print(ages)

# Pedagogy note:
# This selects a single feature column`,
    },

    {
      type: "heading",
      text: "Selecting Multiple Columns",
    },
    {
      type: "code",
      text:
`features = df[["age", "score"]]
print(features)

# Pedagogy note:
# Multiple features selected together`,
    },

    {
      type: "heading",
      text: "Filtering Rows Using Conditions",
    },
    {
      type: "text",
      text: "You can filter rows based on conditions, similar to if-statements.",
    },
    {
      type: "code",
      text:
`high_scores = df[df["score"] > 80]
print(high_scores)

# Pedagogy note:
# Only rows matching the condition are kept`,
    },

    {
      type: "heading",
      text: "Why This is Important for ML",
    },
    {
      type: "text",
      text: "Filtering helps remove irrelevant data and focus on meaningful patterns.",
    },
    {
      type: "text",
      text: "Feature selection improves model performance and clarity.",
    },

    {
      type: "important",
      text: "Always inspect selected data before sending it to a Machine Learning model.",
    },

    {
      type: "heading",
      text: "What You Learned in This Lesson",
    },
    {
      type: "text",
      text: "You learned how to select columns, filter rows, and prepare relevant data for Machine Learning.",
    },
  ],
},

}