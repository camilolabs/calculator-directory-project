export interface Calculator {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  calculators: Calculator[];
}

export const calculatorData: Category[] = [
  {
    id: "finance",
    name: "Finance",
    description: "Financial calculators for loans, investments, and budgeting",
    icon: "💰",
    calculators: [
      {
        id: "loan",
        name: "Loan Calculator",
        description: "Calculate monthly loan payments and total interest",
        icon: "🏦",
        category: "finance"
      },
      {
        id: "mortgage",
        name: "Mortgage Calculator",
        description: "Calculate mortgage payments with taxes and insurance",
        icon: "🏠",
        category: "finance"
      },
      {
        id: "investment",
        name: "Investment Calculator",
        description: "Calculate investment returns over time",
        icon: "📈",
        category: "finance"
      },
      {
        id: "retirement",
        name: "Retirement Calculator",
        description: "Plan your retirement savings",
        icon: "👴",
        category: "finance"
      },
      {
        id: "compound-interest",
        name: "Compound Interest",
        description: "Calculate compound interest on savings",
        icon: "💵",
        category: "finance"
      },
      {
        id: "roi",
        name: "ROI Calculator",
        description: "Calculate return on investment percentage",
        icon: "📊",
        category: "finance"
      },
      {
        id: "savings",
        name: "Savings Calculator",
        description: "Plan your savings goals",
        icon: "🐷",
        category: "finance"
      },
      {
        id: "tax",
        name: "Tax Calculator",
        description: "Estimate your income tax",
        icon: "📋",
        category: "finance"
      },
      {
        id: "budget",
        name: "Budget Calculator",
        description: "Plan your monthly budget",
        icon: "💳",
        category: "finance"
      },
      {
        id: "currency",
        name: "Currency Converter",
        description: "Convert between currencies",
        icon: "💱",
        category: "finance"
      },
      {
        id: "debt-payoff",
        name: "Debt Payoff",
        description: "Calculate debt repayment timeline",
        icon: "💳",
        category: "finance"
      },
      {
        id: "credit-card",
        name: "Credit Card Payoff",
        description: "Calculate credit card payoff time",
        icon: "💳",
        category: "finance"
      },
      {
        id: "apr",
        name: "APR Calculator",
        description: "Calculate annual percentage rate",
        icon: "📊",
        category: "finance"
      },
      {
        id: "amortization",
        name: "Amortization Schedule",
        description: "Generate loan amortization schedule",
        icon: "📅",
        category: "finance"
      },
      {
        id: "inflation",
        name: "Inflation Calculator",
        description: "Calculate inflation impact over time",
        icon: "📈",
        category: "finance"
      },
      {
        id: "net-worth",
        name: "Net Worth Calculator",
        description: "Calculate total net worth",
        icon: "💎",
        category: "finance"
      },
      {
        id: "emergency-fund",
        name: "Emergency Fund",
        description: "Calculate emergency fund needs",
        icon: "🆘",
        category: "finance"
      },
      {
        id: "401k",
        name: "401(k) Calculator",
        description: "Calculate 401(k) growth",
        icon: "📊",
        category: "finance"
      },
      {
        id: "tip",
        name: "Tip Calculator",
        description: "Calculate tip and split bill",
        icon: "💵",
        category: "finance"
      }
    ]
  },
  {
    id: "health",
    name: "Health",
    description: "Health and fitness calculators for your wellbeing",
    icon: "🏥",
    calculators: [
      {
        id: "bmi",
        name: "BMI Calculator",
        description: "Calculate your Body Mass Index",
        icon: "⚖️",
        category: "health"
      },
      {
        id: "calorie",
        name: "Calorie Calculator",
        description: "Calculate daily calorie needs",
        icon: "🍎",
        category: "health"
      },
      {
        id: "body-fat",
        name: "Body Fat Calculator",
        description: "Estimate your body fat percentage",
        icon: "📏",
        category: "health"
      },
      {
        id: "protein",
        name: "Protein Calculator",
        description: "Calculate daily protein requirements",
        icon: "🥩",
        category: "health"
      },
      {
        id: "water",
        name: "Water Intake",
        description: "Calculate daily water needs",
        icon: "💧",
        category: "health"
      },
      {
        id: "ideal-weight",
        name: "Ideal Weight",
        description: "Calculate your ideal body weight",
        icon: "🎯",
        category: "health"
      },
      {
        id: "pregnancy",
        name: "Pregnancy Calculator",
        description: "Calculate due date and milestones",
        icon: "🤰",
        category: "health"
      },
      {
        id: "heart-rate",
        name: "Heart Rate Zones",
        description: "Calculate target heart rate zones",
        icon: "❤️",
        category: "health"
      },
      {
        id: "pace",
        name: "Running Pace",
        description: "Calculate running pace and splits",
        icon: "🏃",
        category: "health"
      },
      {
        id: "macro",
        name: "Macro Calculator",
        description: "Calculate macronutrient ratios",
        icon: "🥗",
        category: "health"
      },
      {
        id: "blood-pressure",
        name: "Blood Pressure Tracker",
        description: "Track and analyze blood pressure",
        icon: "🩺",
        category: "health"
      },
      {
        id: "hydration",
        name: "Hydration Calculator",
        description: "Calculate optimal hydration needs",
        icon: "💧",
        category: "health"
      },
      {
        id: "body-age",
        name: "Body Age Calculator",
        description: "Calculate your biological age",
        icon: "🎂",
        category: "health"
      },
      {
        id: "meal-planner",
        name: "Meal Planner",
        description: "Plan balanced meals",
        icon: "🍽️",
        category: "health"
      },
      {
        id: "bmr",
        name: "BMR Calculator",
        description: "Calculate basal metabolic rate",
        icon: "🔥",
        category: "health"
      },
      {
        id: "carbs",
        name: "Carbs Calculator",
        description: "Calculate daily carb intake",
        icon: "🍞",
        category: "health"
      },
      {
        id: "steps",
        name: "Step Counter Goal",
        description: "Calculate step goals and distance",
        icon: "👟",
        category: "health"
      },
      {
        id: "waist-hip",
        name: "Waist-to-Hip Ratio",
        description: "Calculate WHR for health risk",
        icon: "📏",
        category: "health"
      },
      {
        id: "body-comp",
        name: "Body Composition",
        description: "Calculate lean vs fat mass",
        icon: "💪",
        category: "health"
      }
    ]
  },
  {
    id: "math",
    name: "Math",
    description: "Mathematical calculators for various operations",
    icon: "🔢",
    calculators: [
      {
        id: "percentage",
        name: "Percentage Calculator",
        description: "Calculate percentages easily",
        icon: "📊",
        category: "math"
      },
      {
        id: "fraction",
        name: "Fraction Calculator",
        description: "Add, subtract, multiply, divide fractions",
        icon: "➗",
        category: "math"
      },
      {
        id: "square-root",
        name: "Square Root",
        description: "Calculate square roots and powers",
        icon: "√",
        category: "math"
      },
      {
        id: "average",
        name: "Average Calculator",
        description: "Calculate mean, median, mode",
        icon: "📈",
        category: "math"
      },
      {
        id: "pythagorean",
        name: "Pythagorean Theorem",
        description: "Calculate triangle sides",
        icon: "📐",
        category: "math"
      },
      {
        id: "exponent",
        name: "Exponent Calculator",
        description: "Calculate exponential values",
        icon: "ⁿ",
        category: "math"
      },
      {
        id: "factorial",
        name: "Factorial Calculator",
        description: "Calculate factorials",
        icon: "!",
        category: "math"
      },
      {
        id: "gcf-lcm",
        name: "GCF & LCM",
        description: "Find greatest common factor and least common multiple",
        icon: "🔄",
        category: "math"
      },
      {
        id: "ratio",
        name: "Ratio Calculator",
        description: "Calculate and simplify ratios",
        icon: "⚖️",
        category: "math"
      },
      {
        id: "matrix",
        name: "Matrix Calculator",
        description: "Perform matrix operations",
        icon: "🔲",
        category: "math"
      },
      {
        id: "prime",
        name: "Prime Number Checker",
        description: "Check if number is prime",
        icon: "🔢",
        category: "math"
      },
      {
        id: "logarithm",
        name: "Logarithm Calculator",
        description: "Calculate logarithms",
        icon: "log",
        category: "math"
      },
      {
        id: "scientific-notation",
        name: "Scientific Notation",
        description: "Convert to scientific notation",
        icon: "🔬",
        category: "math"
      },
      {
        id: "quadratic",
        name: "Quadratic Equation",
        description: "Solve quadratic equations",
        icon: "x²",
        category: "math"
      },
      {
        id: "permutation",
        name: "Permutation & Combination",
        description: "Calculate permutations and combinations",
        icon: "🔀",
        category: "math"
      },
      {
        id: "standard-deviation",
        name: "Standard Deviation",
        description: "Calculate standard deviation",
        icon: "σ",
        category: "math"
      },
      {
        id: "probability",
        name: "Probability Calculator",
        description: "Calculate probability",
        icon: "🎲",
        category: "math"
      },
      {
        id: "area-perimeter",
        name: "Area & Perimeter",
        description: "Calculate area and perimeter of shapes",
        icon: "⬜",
        category: "math"
      },
      {
        id: "slope",
        name: "Slope Calculator",
        description: "Calculate line slope",
        icon: "📐",
        category: "math"
      }
    ]
  },
  {
    id: "science",
    name: "Science",
    description: "Scientific calculators for physics and chemistry",
    icon: "🔬",
    calculators: [
      {
        id: "velocity",
        name: "Velocity Calculator",
        description: "Calculate velocity, speed, and acceleration",
        icon: "🚀",
        category: "science"
      },
      {
        id: "force",
        name: "Force Calculator",
        description: "Calculate force using Newton's laws",
        icon: "⚡",
        category: "science"
      },
      {
        id: "energy",
        name: "Energy Calculator",
        description: "Calculate kinetic and potential energy",
        icon: "🔋",
        category: "science"
      },
      {
        id: "density",
        name: "Density Calculator",
        description: "Calculate density, mass, and volume",
        icon: "🧊",
        category: "science"
      },
      {
        id: "pressure",
        name: "Pressure Calculator",
        description: "Calculate pressure in various units",
        icon: "🌡️",
        category: "science"
      },
      {
        id: "wavelength",
        name: "Wavelength Calculator",
        description: "Calculate wavelength and frequency",
        icon: "〰️",
        category: "science"
      },
      {
        id: "ohms-law",
        name: "Ohm's Law",
        description: "Calculate voltage, current, and resistance",
        icon: "⚡",
        category: "science"
      },
      {
        id: "molar-mass",
        name: "Molar Mass",
        description: "Calculate molar mass of compounds",
        icon: "⚗️",
        category: "science"
      },
      {
        id: "ph",
        name: "pH Calculator",
        description: "Calculate pH and pOH values",
        icon: "🧪",
        category: "science"
      },
      {
        id: "half-life",
        name: "Half-Life Calculator",
        description: "Calculate radioactive decay",
        icon: "☢️",
        category: "science"
      },
      {
        id: "gravity",
        name: "Gravity Calculator",
        description: "Calculate gravitational force",
        icon: "🌍",
        category: "science"
      },
      {
        id: "momentum",
        name: "Momentum Calculator",
        description: "Calculate momentum",
        icon: "➡️",
        category: "science"
      },
      {
        id: "power",
        name: "Power Calculator",
        description: "Calculate power in watts",
        icon: "⚡",
        category: "science"
      },
      {
        id: "work",
        name: "Work Calculator",
        description: "Calculate work done by force",
        icon: "💼",
        category: "science"
      },
      {
        id: "acceleration",
        name: "Acceleration Calculator",
        description: "Calculate acceleration",
        icon: "🚀",
        category: "science"
      },
      {
        id: "projectile",
        name: "Projectile Motion",
        description: "Calculate projectile trajectory",
        icon: "🎯",
        category: "science"
      },
      {
        id: "gas-laws",
        name: "Gas Laws Calculator",
        description: "Calculate gas law equations",
        icon: "💨",
        category: "science"
      },
      {
        id: "stoichiometry",
        name: "Stoichiometry",
        description: "Calculate chemical reactions",
        icon: "⚗️",
        category: "science"
      },
      {
        id: "kinematics",
        name: "Kinematics Calculator",
        description: "Calculate motion equations",
        icon: "📊",
        category: "science"
      }
    ]
  },
  {
    id: "conversion",
    name: "Conversion",
    description: "Unit conversion calculators for all measurements",
    icon: "🔄",
    calculators: [
      {
        id: "length",
        name: "Length Converter",
        description: "Convert between length units",
        icon: "📏",
        category: "conversion"
      },
      {
        id: "weight",
        name: "Weight Converter",
        description: "Convert between weight and mass units",
        icon: "⚖️",
        category: "conversion"
      },
      {
        id: "temperature",
        name: "Temperature Converter",
        description: "Convert Celsius, Fahrenheit, Kelvin",
        icon: "🌡️",
        category: "conversion"
      },
      {
        id: "volume",
        name: "Volume Converter",
        description: "Convert between volume units",
        icon: "🥤",
        category: "conversion"
      },
      {
        id: "area",
        name: "Area Converter",
        description: "Convert between area units",
        icon: "📐",
        category: "conversion"
      },
      {
        id: "speed",
        name: "Speed Converter",
        description: "Convert between speed units",
        icon: "🏃",
        category: "conversion"
      },
      {
        id: "time",
        name: "Time Converter",
        description: "Convert between time units",
        icon: "⏰",
        category: "conversion"
      },
      {
        id: "data",
        name: "Data Converter",
        description: "Convert bytes, KB, MB, GB, TB",
        icon: "💾",
        category: "conversion"
      },
      {
        id: "pressure-conversion",
        name: "Pressure Converter",
        description: "Convert between pressure units",
        icon: "🎈",
        category: "conversion"
      },
      {
        id: "energy-conversion",
        name: "Energy Converter",
        description: "Convert between energy units",
        icon: "⚡",
        category: "conversion"
      },
      {
        id: "angle",
        name: "Angle Converter",
        description: "Convert degrees, radians, gradians",
        icon: "📐",
        category: "conversion"
      },
      {
        id: "frequency",
        name: "Frequency Converter",
        description: "Convert frequency units",
        icon: "〰️",
        category: "conversion"
      },
      {
        id: "fuel",
        name: "Fuel Economy Converter",
        description: "Convert MPG, L/100km",
        icon: "⛽",
        category: "conversion"
      },
      {
        id: "torque",
        name: "Torque Converter",
        description: "Convert torque units",
        icon: "🔧",
        category: "conversion"
      },
      {
        id: "power-conv",
        name: "Power Converter",
        description: "Convert power units",
        icon: "⚡",
        category: "conversion"
      },
      {
        id: "force",
        name: "Force Converter",
        description: "Convert force units",
        icon: "💪",
        category: "conversion"
      },
      {
        id: "luminosity",
        name: "Luminosity Converter",
        description: "Convert light intensity units",
        icon: "💡",
        category: "conversion"
      },
      {
        id: "density-conv",
        name: "Density Converter",
        description: "Convert density units",
        icon: "🧊",
        category: "conversion"
      },
      {
        id: "viscosity",
        name: "Viscosity Converter",
        description: "Convert viscosity units",
        icon: "💧",
        category: "conversion"
      }
    ]
  },
  {
    id: "construction",
    name: "Construction",
    description: "Construction and building calculators",
    icon: "🏗️",
    calculators: [
      {
        id: "concrete",
        name: "Concrete Calculator",
        description: "Calculate concrete volume needed",
        icon: "🏗️",
        category: "construction"
      },
      {
        id: "paint",
        name: "Paint Calculator",
        description: "Calculate paint quantity needed",
        icon: "🎨",
        category: "construction"
      },
      {
        id: "flooring",
        name: "Flooring Calculator",
        description: "Calculate flooring materials needed",
        icon: "🪵",
        category: "construction"
      },
      {
        id: "roofing",
        name: "Roofing Calculator",
        description: "Calculate roofing materials",
        icon: "🏠",
        category: "construction"
      },
      {
        id: "drywall",
        name: "Drywall Calculator",
        description: "Calculate drywall sheets needed",
        icon: "🧱",
        category: "construction"
      },
      {
        id: "brick",
        name: "Brick Calculator",
        description: "Calculate number of bricks needed",
        icon: "🧱",
        category: "construction"
      },
      {
        id: "gravel",
        name: "Gravel Calculator",
        description: "Calculate gravel quantity needed",
        icon: "🪨",
        category: "construction"
      },
      {
        id: "fence",
        name: "Fence Calculator",
        description: "Calculate fencing materials",
        icon: "🚧",
        category: "construction"
      },
      {
        id: "stairs",
        name: "Stair Calculator",
        description: "Calculate stair dimensions",
        icon: "🪜",
        category: "construction"
      },
      {
        id: "tile",
        name: "Tile Calculator",
        description: "Calculate tiles needed",
        icon: "⬜",
        category: "construction"
      },
      {
        id: "insulation",
        name: "Insulation Calculator",
        description: "Calculate insulation needs",
        icon: "🧱",
        category: "construction"
      },
      {
        id: "lumber",
        name: "Lumber Calculator",
        description: "Calculate lumber board feet",
        icon: "🪵",
        category: "construction"
      },
      {
        id: "deck",
        name: "Deck Calculator",
        description: "Calculate deck materials",
        icon: "🏡",
        category: "construction"
      },
      {
        id: "siding",
        name: "Siding Calculator",
        description: "Calculate siding needed",
        icon: "🏠",
        category: "construction"
      },
      {
        id: "gutter",
        name: "Gutter Calculator",
        description: "Calculate gutter length needed",
        icon: "🌧️",
        category: "construction"
      },
      {
        id: "window",
        name: "Window Calculator",
        description: "Calculate window sizing",
        icon: "🪟",
        category: "construction"
      },
      {
        id: "door",
        name: "Door Calculator",
        description: "Calculate door frame dimensions",
        icon: "🚪",
        category: "construction"
      },
      {
        id: "foundation",
        name: "Foundation Calculator",
        description: "Calculate foundation materials",
        icon: "🏗️",
        category: "construction"
      },
      {
        id: "landscape",
        name: "Landscape Calculator",
        description: "Calculate landscaping materials",
        icon: "🌳",
        category: "construction"
      }
    ]
  },
  {
    id: "education",
    name: "Education",
    description: "Educational calculators for students",
    icon: "🎓",
    calculators: [
      {
        id: "gpa",
        name: "GPA Calculator",
        description: "Calculate your grade point average",
        icon: "📚",
        category: "education"
      },
      {
        id: "grade",
        name: "Grade Calculator",
        description: "Calculate final grades",
        icon: "✏️",
        category: "education"
      },
      {
        id: "study-time",
        name: "Study Time Planner",
        description: "Plan your study schedule",
        icon: "⏰",
        category: "education"
      },
      {
        id: "reading-time",
        name: "Reading Time",
        description: "Estimate reading time for texts",
        icon: "📖",
        category: "education"
      },
      {
        id: "word-count",
        name: "Word Counter",
        description: "Count words and characters",
        icon: "📝",
        category: "education"
      },
      {
        id: "typing-speed",
        name: "Typing Speed",
        description: "Calculate WPM typing speed",
        icon: "⌨️",
        category: "education"
      },
      {
        id: "sat-score",
        name: "SAT Score Calculator",
        description: "Calculate SAT scores",
        icon: "📄",
        category: "education"
      },
      {
        id: "essay-length",
        name: "Essay Length",
        description: "Calculate essay length and pages",
        icon: "📃",
        category: "education"
      },
      {
        id: "class-credits",
        name: "Credit Hours",
        description: "Calculate semester credit hours",
        icon: "🎓",
        category: "education"
      },
      {
        id: "scholarship",
        name: "Scholarship Calculator",
        description: "Calculate scholarship awards",
        icon: "💰",
        category: "education"
      },
      {
        id: "test-predictor",
        name: "Test Score Predictor",
        description: "Predict final test scores",
        icon: "📊",
        category: "education"
      },
      {
        id: "study-break",
        name: "Study Break Timer",
        description: "Calculate optimal study breaks",
        icon: "☕",
        category: "education"
      },
      {
        id: "assignment-planner",
        name: "Assignment Planner",
        description: "Plan assignment completion",
        icon: "📋",
        category: "education"
      },
      {
        id: "exam-prep",
        name: "Exam Preparation",
        description: "Calculate exam study time needed",
        icon: "📝",
        category: "education"
      },
      {
        id: "learning-pace",
        name: "Learning Pace",
        description: "Calculate learning speed",
        icon: "🧠",
        category: "education"
      },
      {
        id: "attendance",
        name: "Attendance Tracker",
        description: "Track class attendance percentage",
        icon: "✅",
        category: "education"
      },
      {
        id: "homework-time",
        name: "Homework Time",
        description: "Estimate homework duration",
        icon: "📚",
        category: "education"
      },
      {
        id: "academic-performance",
        name: "Academic Performance",
        description: "Track overall academic progress",
        icon: "🎯",
        category: "education"
      },
      {
        id: "semester-planner",
        name: "Semester Planner",
        description: "Plan semester schedule",
        icon: "📅",
        category: "education"
      }
    ]
  },
  {
    id: "time",
    name: "Time",
    description: "Time and date calculators",
    icon: "⏰",
    calculators: [
      {
        id: "age",
        name: "Age Calculator",
        description: "Calculate age in years, months, days",
        icon: "🎂",
        category: "time"
      },
      {
        id: "date-difference",
        name: "Date Difference",
        description: "Calculate days between dates",
        icon: "📅",
        category: "time"
      },
      {
        id: "time-duration",
        name: "Time Duration",
        description: "Calculate time duration between times",
        icon: "⏱️",
        category: "time"
      },
      {
        id: "business-days",
        name: "Business Days",
        description: "Calculate working days",
        icon: "💼",
        category: "time"
      },
      {
        id: "timezone",
        name: "Time Zone Converter",
        description: "Convert between time zones",
        icon: "🌍",
        category: "time"
      },
      {
        id: "countdown",
        name: "Countdown Timer",
        description: "Calculate time until event",
        icon: "⏰",
        category: "time"
      },
      {
        id: "work-hours",
        name: "Work Hours",
        description: "Calculate work hours and overtime",
        icon: "⏲️",
        category: "time"
      },
      {
        id: "shift",
        name: "Shift Calculator",
        description: "Calculate shift hours and breaks",
        icon: "🕐",
        category: "time"
      },
      {
        id: "sleep",
        name: "Sleep Calculator",
        description: "Calculate optimal sleep and wake times",
        icon: "😴",
        category: "time"
      },
      {
        id: "meeting",
        name: "Meeting Time",
        description: "Calculate meeting durations",
        icon: "👥",
        category: "time"
      },
      {
        id: "anniversary",
        name: "Anniversary Calculator",
        description: "Calculate anniversary dates",
        icon: "💝",
        category: "time"
      },
      {
        id: "week-number",
        name: "Week Number",
        description: "Calculate week number of year",
        icon: "📅",
        category: "time"
      },
      {
        id: "lunar",
        name: "Lunar Calendar",
        description: "Convert to lunar calendar dates",
        icon: "🌙",
        category: "time"
      },
      {
        id: "work-anniversary",
        name: "Work Anniversary",
        description: "Calculate work tenure",
        icon: "💼",
        category: "time"
      },
      {
        id: "project-timeline",
        name: "Project Timeline",
        description: "Calculate project milestones",
        icon: "📊",
        category: "time"
      },
      {
        id: "deadline",
        name: "Deadline Calculator",
        description: "Calculate time until deadline",
        icon: "⏳",
        category: "time"
      },
      {
        id: "time-tracker",
        name: "Time Tracker",
        description: "Track time spent on tasks",
        icon: "⏱️",
        category: "time"
      },
      {
        id: "billing-hours",
        name: "Billing Hours",
        description: "Calculate billable hours",
        icon: "💰",
        category: "time"
      },
      {
        id: "retirement-countdown",
        name: "Retirement Countdown",
        description: "Calculate time until retirement",
        icon: "🏖️",
        category: "time"
      }
    ]
  },
  {
    id: "cooking",
    name: "Cooking",
    description: "Cooking and recipe calculators",
    icon: "👨‍🍳",
    calculators: [
      {
        id: "recipe-scaler",
        name: "Recipe Scaler",
        description: "Scale recipe ingredients",
        icon: "📖",
        category: "cooking"
      },
      {
        id: "cooking-time",
        name: "Cooking Time",
        description: "Calculate cooking times by weight",
        icon: "⏲️",
        category: "cooking"
      },
      {
        id: "portion",
        name: "Portion Calculator",
        description: "Calculate servings and portions",
        icon: "🍽️",
        category: "cooking"
      },
      {
        id: "nutrition",
        name: "Nutrition Calculator",
        description: "Calculate nutritional values",
        icon: "🥗",
        category: "cooking"
      },
      {
        id: "baking",
        name: "Baking Converter",
        description: "Convert baking measurements",
        icon: "🧁",
        category: "cooking"
      },
      {
        id: "meat-temp",
        name: "Meat Temperature",
        description: "Safe cooking temperatures",
        icon: "🥩",
        category: "cooking"
      },
      {
        id: "pizza",
        name: "Pizza Dough",
        description: "Calculate pizza dough ingredients",
        icon: "🍕",
        category: "cooking"
      },
      {
        id: "cocktail",
        name: "Cocktail Ratio",
        description: "Scale cocktail recipes",
        icon: "🍸",
        category: "cooking"
      },
      {
        id: "coffee",
        name: "Coffee Ratio",
        description: "Calculate coffee to water ratio",
        icon: "☕",
        category: "cooking"
      },
      {
        id: "bread",
        name: "Bread Baker's %",
        description: "Calculate baker's percentage",
        icon: "🍞",
        category: "cooking"
      },
      {
        id: "meal-prep",
        name: "Meal Prep Calculator",
        description: "Calculate meal prep portions",
        icon: "🥡",
        category: "cooking"
      },
      {
        id: "grocery",
        name: "Grocery Calculator",
        description: "Calculate grocery list quantities",
        icon: "🛒",
        category: "cooking"
      },
      {
        id: "sous-vide",
        name: "Sous Vide Time",
        description: "Calculate sous vide cooking time",
        icon: "🥩",
        category: "cooking"
      },
      {
        id: "fermentation",
        name: "Fermentation Timer",
        description: "Calculate fermentation time",
        icon: "🫙",
        category: "cooking"
      },
      {
        id: "rising-time",
        name: "Dough Rising Time",
        description: "Calculate bread rising time",
        icon: "🍞",
        category: "cooking"
      },
      {
        id: "marinating",
        name: "Marinating Time",
        description: "Calculate optimal marinating time",
        icon: "🥩",
        category: "cooking"
      },
      {
        id: "food-cost",
        name: "Food Cost Calculator",
        description: "Calculate recipe food costs",
        icon: "💰",
        category: "cooking"
      },
      {
        id: "batch-cooking",
        name: "Batch Cooking",
        description: "Calculate batch cooking portions",
        icon: "🍲",
        category: "cooking"
      },
      {
        id: "meal-planning",
        name: "Weekly Meal Planning",
        description: "Plan weekly meals and portions",
        icon: "📅",
        category: "cooking"
      }
    ]
  },
  {
    id: "business",
    name: "Business",
    description: "Business and productivity calculators",
    icon: "💼",
    calculators: [
      {
        id: "profit-margin",
        name: "Profit Margin",
        description: "Calculate profit margins",
        icon: "📊",
        category: "business"
      },
      {
        id: "break-even",
        name: "Break-Even Point",
        description: "Calculate break-even analysis",
        icon: "📈",
        category: "business"
      },
      {
        id: "markup",
        name: "Markup Calculator",
        description: "Calculate markup and margin",
        icon: "💵",
        category: "business"
      },
      {
        id: "payroll",
        name: "Payroll Calculator",
        description: "Calculate employee payroll",
        icon: "💰",
        category: "business"
      },
      {
        id: "discount",
        name: "Discount Calculator",
        description: "Calculate discounts and savings",
        icon: "🏷️",
        category: "business"
      },
      {
        id: "sales-tax",
        name: "Sales Tax",
        description: "Calculate sales tax amounts",
        icon: "🧾",
        category: "business"
      },
      {
        id: "commission",
        name: "Commission Calculator",
        description: "Calculate sales commissions",
        icon: "💸",
        category: "business"
      },
      {
        id: "hourly-rate",
        name: "Hourly Rate",
        description: "Calculate hourly billing rates",
        icon: "⏰",
        category: "business"
      },
      {
        id: "depreciation",
        name: "Depreciation",
        description: "Calculate asset depreciation",
        icon: "📉",
        category: "business"
      },
      {
        id: "inventory",
        name: "Inventory Turnover",
        description: "Calculate inventory turnover ratio",
        icon: "📦",
        category: "business"
      },
      {
        id: "cash-flow",
        name: "Cash Flow Calculator",
        description: "Calculate cash flow projections",
        icon: "💵",
        category: "business"
      },
      {
        id: "roi-advanced",
        name: "ROI Advanced",
        description: "Advanced return on investment analysis",
        icon: "📊",
        category: "business"
      },
      {
        id: "customer-lifetime",
        name: "Customer Lifetime Value",
        description: "Calculate CLV",
        icon: "👥",
        category: "business"
      },
      {
        id: "conversion-rate",
        name: "Conversion Rate",
        description: "Calculate conversion rates",
        icon: "📈",
        category: "business"
      },
      {
        id: "employee-turnover",
        name: "Employee Turnover",
        description: "Calculate turnover rate",
        icon: "🚪",
        category: "business"
      },
      {
        id: "revenue-projection",
        name: "Revenue Projection",
        description: "Project future revenue",
        icon: "💰",
        category: "business"
      },
      {
        id: "expense-tracker",
        name: "Expense Tracker",
        description: "Track business expenses",
        icon: "📋",
        category: "business"
      },
      {
        id: "invoice",
        name: "Invoice Calculator",
        description: "Calculate invoice totals",
        icon: "🧾",
        category: "business"
      },
      {
        id: "productivity",
        name: "Productivity Calculator",
        description: "Measure productivity metrics",
        icon: "⚡",
        category: "business"
      }
    ]
  },
  {
    id: "automotive",
    name: "Automotive",
    description: "Car and vehicle calculators",
    icon: "🚗",
    calculators: [
      {
        id: "fuel-cost",
        name: "Fuel Cost Calculator",
        description: "Calculate trip fuel costs",
        icon: "⛽",
        category: "automotive"
      },
      {
        id: "mpg",
        name: "MPG Calculator",
        description: "Calculate miles per gallon",
        icon: "🚙",
        category: "automotive"
      },
      {
        id: "lease",
        name: "Car Lease Calculator",
        description: "Calculate monthly lease payments",
        icon: "🚘",
        category: "automotive"
      },
      {
        id: "auto-loan",
        name: "Auto Loan Calculator",
        description: "Calculate car loan payments",
        icon: "💰",
        category: "automotive"
      },
      {
        id: "tire-size",
        name: "Tire Size Calculator",
        description: "Compare tire sizes and specs",
        icon: "🛞",
        category: "automotive"
      },
      {
        id: "horsepower",
        name: "Horsepower Calculator",
        description: "Calculate engine horsepower",
        icon: "⚡",
        category: "automotive"
      },
      {
        id: "0-60",
        name: "0-60 Time Calculator",
        description: "Calculate acceleration times",
        icon: "🏁",
        category: "automotive"
      },
      {
        id: "ev-range",
        name: "EV Range Calculator",
        description: "Calculate electric vehicle range",
        icon: "🔌",
        category: "automotive"
      },
      {
        id: "maintenance",
        name: "Maintenance Schedule",
        description: "Track vehicle maintenance",
        icon: "🔧",
        category: "automotive"
      },
      {
        id: "emission",
        name: "Carbon Emissions",
        description: "Calculate vehicle emissions",
        icon: "🌫️",
        category: "automotive"
      },
      {
        id: "insurance-cost",
        name: "Insurance Cost",
        description: "Estimate car insurance costs",
        icon: "🛡️",
        category: "automotive"
      },
      {
        id: "car-depreciation",
        name: "Car Depreciation",
        description: "Calculate vehicle depreciation",
        icon: "📉",
        category: "automotive"
      },
      {
        id: "road-trip",
        name: "Road Trip Planner",
        description: "Plan road trip costs and time",
        icon: "🗺️",
        category: "automotive"
      },
      {
        id: "toll",
        name: "Toll Calculator",
        description: "Calculate toll costs",
        icon: "🛣️",
        category: "automotive"
      },
      {
        id: "parking-cost",
        name: "Parking Cost",
        description: "Calculate parking expenses",
        icon: "🅿️",
        category: "automotive"
      },
      {
        id: "registration",
        name: "Registration Fees",
        description: "Estimate registration costs",
        icon: "📋",
        category: "automotive"
      },
      {
        id: "car-comparison",
        name: "Car Comparison",
        description: "Compare vehicle costs",
        icon: "⚖️",
        category: "automotive"
      },
      {
        id: "gas-vs-electric",
        name: "Gas vs Electric",
        description: "Compare gas and electric costs",
        icon: "⚡",
        category: "automotive"
      },
      {
        id: "trade-in",
        name: "Trade-In Value",
        description: "Estimate trade-in value",
        icon: "💰",
        category: "automotive"
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    description: "Property and housing calculators",
    icon: "🏡",
    calculators: [
      {
        id: "home-affordability",
        name: "Home Affordability",
        description: "Calculate home buying budget",
        icon: "💰",
        category: "real-estate"
      },
      {
        id: "rent-vs-buy",
        name: "Rent vs Buy",
        description: "Compare renting vs buying",
        icon: "🏘️",
        category: "real-estate"
      },
      {
        id: "property-tax",
        name: "Property Tax",
        description: "Calculate property taxes",
        icon: "📋",
        category: "real-estate"
      },
      {
        id: "cap-rate",
        name: "Cap Rate Calculator",
        description: "Calculate capitalization rate",
        icon: "📊",
        category: "real-estate"
      },
      {
        id: "rental-yield",
        name: "Rental Yield",
        description: "Calculate rental property yield",
        icon: "🏢",
        category: "real-estate"
      },
      {
        id: "closing-costs",
        name: "Closing Costs",
        description: "Estimate closing costs",
        icon: "📝",
        category: "real-estate"
      },
      {
        id: "square-footage",
        name: "Square Footage",
        description: "Calculate room and property area",
        icon: "📐",
        category: "real-estate"
      },
      {
        id: "mortgage-points",
        name: "Mortgage Points",
        description: "Calculate mortgage points value",
        icon: "💵",
        category: "real-estate"
      },
      {
        id: "refinance",
        name: "Refinance Calculator",
        description: "Calculate refinancing benefits",
        icon: "🔄",
        category: "real-estate"
      },
      {
        id: "hoa-fees",
        name: "HOA Fees Impact",
        description: "Calculate HOA fee impact",
        icon: "🏘️",
        category: "real-estate"
      },
      {
        id: "investment-property",
        name: "Investment Property",
        description: "Calculate investment property returns",
        icon: "📈",
        category: "real-estate"
      },
      {
        id: "flip",
        name: "House Flip Calculator",
        description: "Calculate flipping profit",
        icon: "🔨",
        category: "real-estate"
      },
      {
        id: "airbnb-income",
        name: "Airbnb Income",
        description: "Calculate rental income potential",
        icon: "🏠",
        category: "real-estate"
      },
      {
        id: "home-equity",
        name: "Home Equity",
        description: "Calculate home equity",
        icon: "💰",
        category: "real-estate"
      },
      {
        id: "down-payment",
        name: "Down Payment",
        description: "Calculate down payment needs",
        icon: "💵",
        category: "real-estate"
      },
      {
        id: "pmi",
        name: "PMI Calculator",
        description: "Calculate private mortgage insurance",
        icon: "🛡️",
        category: "real-estate"
      },
      {
        id: "land-area",
        name: "Land Area Calculator",
        description: "Calculate land area and acreage",
        icon: "🗺️",
        category: "real-estate"
      },
      {
        id: "renovation",
        name: "Renovation Cost",
        description: "Estimate renovation costs",
        icon: "🔨",
        category: "real-estate"
      },
      {
        id: "appraisal",
        name: "Appraisal Value",
        description: "Estimate property appraisal",
        icon: "📊",
        category: "real-estate"
      }
    ]
  },
  {
    id: "travel",
    name: "Travel",
    description: "Trip planning and travel calculators",
    icon: "✈️",
    calculators: [
      {
        id: "trip-cost",
        name: "Trip Cost Calculator",
        description: "Calculate total trip expenses",
        icon: "💰",
        category: "travel"
      },
      {
        id: "flight-carbon",
        name: "Flight Carbon",
        description: "Calculate flight carbon footprint",
        icon: "🌍",
        category: "travel"
      },
      {
        id: "travel-time",
        name: "Travel Time",
        description: "Calculate travel duration",
        icon: "⏱️",
        category: "travel"
      },
      {
        id: "trip-split",
        name: "Trip Split Calculator",
        description: "Split travel costs among group",
        icon: "👥",
        category: "travel"
      },
      {
        id: "distance",
        name: "Distance Calculator",
        description: "Calculate distance between cities",
        icon: "🗺️",
        category: "travel"
      },
      {
        id: "luggage-weight",
        name: "Luggage Weight",
        description: "Calculate baggage weight limits",
        icon: "🧳",
        category: "travel"
      },
      {
        id: "jet-lag",
        name: "Jet Lag Calculator",
        description: "Calculate jet lag recovery time",
        icon: "😴",
        category: "travel"
      },
      {
        id: "visa-days",
        name: "Visa Days Counter",
        description: "Track visa stay duration",
        icon: "📖",
        category: "travel"
      },
      {
        id: "packing-list",
        name: "Packing List",
        description: "Generate packing checklist",
        icon: "📋",
        category: "travel"
      },
      {
        id: "travel-insurance",
        name: "Travel Insurance",
        description: "Calculate travel insurance needs",
        icon: "🛡️",
        category: "travel"
      },
      {
        id: "budget-planner",
        name: "Travel Budget Planner",
        description: "Plan comprehensive travel budget",
        icon: "💰",
        category: "travel"
      },
      {
        id: "currency-trip",
        name: "Trip Currency Exchange",
        description: "Calculate currency needs for trip",
        icon: "💱",
        category: "travel"
      },
      {
        id: "timezone-meeting",
        name: "Time Zone Meeting",
        description: "Find best meeting time across zones",
        icon: "🌍",
        category: "travel"
      },
      {
        id: "travel-rewards",
        name: "Travel Rewards",
        description: "Calculate travel points value",
        icon: "🎁",
        category: "travel"
      },
      {
        id: "passport-validity",
        name: "Passport Validity",
        description: "Check passport expiration",
        icon: "📘",
        category: "travel"
      },
      {
        id: "road-trip-stops",
        name: "Road Trip Stops",
        description: "Plan optimal road trip stops",
        icon: "🚗",
        category: "travel"
      },
      {
        id: "accommodation",
        name: "Accommodation Cost",
        description: "Calculate lodging expenses",
        icon: "🏨",
        category: "travel"
      },
      {
        id: "daily-expenses",
        name: "Daily Travel Expenses",
        description: "Track daily travel spending",
        icon: "💳",
        category: "travel"
      },
      {
        id: "itinerary",
        name: "Itinerary Planner",
        description: "Plan detailed travel itinerary",
        icon: "📅",
        category: "travel"
      }
    ]
  },
  {
    id: "gardening",
    name: "Gardening",
    description: "Garden and plant care calculators",
    icon: "🌱",
    calculators: [
      {
        id: "plant-spacing",
        name: "Plant Spacing",
        description: "Calculate plant spacing needs",
        icon: "🌿",
        category: "gardening"
      },
      {
        id: "soil-volume",
        name: "Soil Volume",
        description: "Calculate soil needed",
        icon: "🪴",
        category: "gardening"
      },
      {
        id: "mulch",
        name: "Mulch Calculator",
        description: "Calculate mulch quantity",
        icon: "🍂",
        category: "gardening"
      },
      {
        id: "watering",
        name: "Watering Schedule",
        description: "Plan plant watering schedule",
        icon: "💧",
        category: "gardening"
      },
      {
        id: "fertilizer",
        name: "Fertilizer Calculator",
        description: "Calculate fertilizer amounts",
        icon: "🧪",
        category: "gardening"
      },
      {
        id: "compost",
        name: "Compost Calculator",
        description: "Calculate compost mix ratios",
        icon: "♻️",
        category: "gardening"
      },
      {
        id: "seed-quantity",
        name: "Seed Quantity",
        description: "Calculate seeds needed",
        icon: "🌾",
        category: "gardening"
      },
      {
        id: "harvest-date",
        name: "Harvest Date",
        description: "Calculate harvest timing",
        icon: "🥕",
        category: "gardening"
      },
      {
        id: "grow-lights",
        name: "Grow Light Calculator",
        description: "Calculate grow light needs",
        icon: "💡",
        category: "gardening"
      },
      {
        id: "garden-area",
        name: "Garden Area",
        description: "Calculate garden plot area",
        icon: "📐",
        category: "gardening"
      },
      {
        id: "zone-finder",
        name: "Hardiness Zone Finder",
        description: "Find plant hardiness zone",
        icon: "🌍",
        category: "gardening"
      },
      {
        id: "frost-date",
        name: "Frost Date Calculator",
        description: "Calculate first/last frost dates",
        icon: "❄️",
        category: "gardening"
      },
      {
        id: "growing-season",
        name: "Growing Season",
        description: "Calculate growing season length",
        icon: "🌞",
        category: "gardening"
      },
      {
        id: "greenhouse",
        name: "Greenhouse Calculator",
        description: "Calculate greenhouse dimensions",
        icon: "🏡",
        category: "gardening"
      },
      {
        id: "rain-barrel",
        name: "Rain Barrel Calculator",
        description: "Calculate rainwater collection",
        icon: "💧",
        category: "gardening"
      },
      {
        id: "irrigation",
        name: "Irrigation Calculator",
        description: "Calculate irrigation needs",
        icon: "🚿",
        category: "gardening"
      },
      {
        id: "seed-starting",
        name: "Seed Starting Date",
        description: "Calculate when to start seeds",
        icon: "🌱",
        category: "gardening"
      },
      {
        id: "companion-plants",
        name: "Companion Planting",
        description: "Find companion plants",
        icon: "🌻",
        category: "gardening"
      },
      {
        id: "yield-estimator",
        name: "Yield Estimator",
        description: "Estimate garden yield",
        icon: "🥕",
        category: "gardening"
      }
    ]
  },
  {
    id: "engineering",
    name: "Engineering",
    description: "Engineering and technical calculators",
    icon: "⚙️",
    calculators: [
      {
        id: "beam-deflection",
        name: "Beam Deflection",
        description: "Calculate beam deflection",
        icon: "📏",
        category: "engineering"
      },
      {
        id: "gear-ratio",
        name: "Gear Ratio",
        description: "Calculate gear ratios",
        icon: "⚙️",
        category: "engineering"
      },
      {
        id: "torque",
        name: "Torque Calculator",
        description: "Calculate torque and force",
        icon: "🔩",
        category: "engineering"
      },
      {
        id: "wire-gauge",
        name: "Wire Gauge",
        description: "Calculate wire size needed",
        icon: "🔌",
        category: "engineering"
      },
      {
        id: "stress-strain",
        name: "Stress & Strain",
        description: "Calculate material stress",
        icon: "🏗️",
        category: "engineering"
      },
      {
        id: "flow-rate",
        name: "Flow Rate",
        description: "Calculate fluid flow rate",
        icon: "💧",
        category: "engineering"
      },
      {
        id: "heat-transfer",
        name: "Heat Transfer",
        description: "Calculate heat transfer rate",
        icon: "🔥",
        category: "engineering"
      },
      {
        id: "spring-constant",
        name: "Spring Constant",
        description: "Calculate spring force",
        icon: "🌀",
        category: "engineering"
      },
      {
        id: "belt-length",
        name: "Belt Length",
        description: "Calculate pulley belt length",
        icon: "🔗",
        category: "engineering"
      },
      {
        id: "moment-inertia",
        name: "Moment of Inertia",
        description: "Calculate moment of inertia",
        icon: "🔄",
        category: "engineering"
      },
      {
        id: "voltage-drop",
        name: "Voltage Drop",
        description: "Calculate voltage drop in cables",
        icon: "⚡",
        category: "engineering"
      },
      {
        id: "pipe-sizing",
        name: "Pipe Sizing",
        description: "Calculate optimal pipe size",
        icon: "🔧",
        category: "engineering"
      },
      {
        id: "hvac-load",
        name: "HVAC Load",
        description: "Calculate heating/cooling load",
        icon: "❄️",
        category: "engineering"
      },
      {
        id: "electrical-load",
        name: "Electrical Load",
        description: "Calculate electrical load",
        icon: "⚡",
        category: "engineering"
      },
      {
        id: "compression-ratio",
        name: "Compression Ratio",
        description: "Calculate engine compression ratio",
        icon: "🔩",
        category: "engineering"
      },
      {
        id: "hydraulic-pressure",
        name: "Hydraulic Pressure",
        description: "Calculate hydraulic system pressure",
        icon: "💧",
        category: "engineering"
      },
      {
        id: "structural-load",
        name: "Structural Load",
        description: "Calculate structural loads",
        icon: "🏗️",
        category: "engineering"
      },
      {
        id: "weld-strength",
        name: "Weld Strength",
        description: "Calculate weld strength",
        icon: "🔥",
        category: "engineering"
      },
      {
        id: "bearing-load",
        name: "Bearing Load",
        description: "Calculate bearing load capacity",
        icon: "⚙️",
        category: "engineering"
      }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    description: "Sports and athletics calculators",
    icon: "⚽",
    calculators: [
      {
        id: "1rm",
        name: "One-Rep Max",
        description: "Calculate 1RM weightlifting",
        icon: "🏋️",
        category: "sports"
      },
      {
        id: "swim-pace",
        name: "Swimming Pace",
        description: "Calculate swimming pace",
        icon: "🏊",
        category: "sports"
      },
      {
        id: "cycling-power",
        name: "Cycling Power",
        description: "Calculate cycling wattage",
        icon: "🚴",
        category: "sports"
      },
      {
        id: "vo2-max",
        name: "VO2 Max",
        description: "Calculate aerobic capacity",
        icon: "💨",
        category: "sports"
      },
      {
        id: "race-time",
        name: "Race Time Predictor",
        description: "Predict race finish times",
        icon: "🏃",
        category: "sports"
      },
      {
        id: "vertical-jump",
        name: "Vertical Jump",
        description: "Calculate jump height",
        icon: "🦘",
        category: "sports"
      },
      {
        id: "golf-handicap",
        name: "Golf Handicap",
        description: "Calculate golf handicap",
        icon: "⛳",
        category: "sports"
      },
      {
        id: "batting-average",
        name: "Batting Average",
        description: "Calculate baseball stats",
        icon: "⚾",
        category: "sports"
      },
      {
        id: "free-throw",
        name: "Free Throw %",
        description: "Calculate basketball percentages",
        icon: "🏀",
        category: "sports"
      },
      {
        id: "training-zones",
        name: "Training Zones",
        description: "Calculate training intensity zones",
        icon: "📊",
        category: "sports"
      },
      {
        id: "protein-athletes",
        name: "Protein for Athletes",
        description: "Calculate athletic protein needs",
        icon: "🥩",
        category: "sports"
      },
      {
        id: "carb-loading",
        name: "Carb Loading",
        description: "Calculate carb loading for events",
        icon: "🍝",
        category: "sports"
      },
      {
        id: "hydration-sports",
        name: "Sports Hydration",
        description: "Calculate hydration for exercise",
        icon: "💧",
        category: "sports"
      },
      {
        id: "recovery-time",
        name: "Recovery Time",
        description: "Calculate workout recovery time",
        icon: "😴",
        category: "sports"
      },
      {
        id: "training-load",
        name: "Training Load",
        description: "Calculate training load and fatigue",
        icon: "📈",
        category: "sports"
      },
      {
        id: "speed-calculator",
        name: "Speed Calculator",
        description: "Calculate speed from pace",
        icon: "⚡",
        category: "sports"
      },
      {
        id: "splits",
        name: "Distance Splits",
        description: "Calculate race splits",
        icon: "⏱️",
        category: "sports"
      },
      {
        id: "power-weight",
        name: "Power-to-Weight Ratio",
        description: "Calculate power to weight ratio",
        icon: "⚖️",
        category: "sports"
      },
      {
        id: "exercise-calories",
        name: "Exercise Calories",
        description: "Calculate calories burned exercising",
        icon: "🔥",
        category: "sports"
      }
    ]
  },
  {
    id: "photography",
    name: "Photography",
    description: "Camera and photography calculators",
    icon: "📷",
    calculators: [
      {
        id: "depth-of-field",
        name: "Depth of Field",
        description: "Calculate DOF for photos",
        icon: "📸",
        category: "photography"
      },
      {
        id: "exposure",
        name: "Exposure Calculator",
        description: "Calculate exposure settings",
        icon: "☀️",
        category: "photography"
      },
      {
        id: "field-of-view",
        name: "Field of View",
        description: "Calculate camera FOV",
        icon: "👁️",
        category: "photography"
      },
      {
        id: "print-size",
        name: "Print Size",
        description: "Calculate print dimensions",
        icon: "🖼️",
        category: "photography"
      },
      {
        id: "aspect-ratio",
        name: "Aspect Ratio",
        description: "Calculate image aspect ratios",
        icon: "📐",
        category: "photography"
      },
      {
        id: "hyperfocal",
        name: "Hyperfocal Distance",
        description: "Calculate hyperfocal distance",
        icon: "🔍",
        category: "photography"
      },
      {
        id: "flash-guide",
        name: "Flash Guide Number",
        description: "Calculate flash power needed",
        icon: "⚡",
        category: "photography"
      },
      {
        id: "timelapse",
        name: "Timelapse Calculator",
        description: "Calculate timelapse settings",
        icon: "⏱️",
        category: "photography"
      },
      {
        id: "megapixels",
        name: "Megapixel Calculator",
        description: "Calculate resolution needs",
        icon: "🖥️",
        category: "photography"
      },
      {
        id: "lens-converter",
        name: "Lens Crop Factor",
        description: "Calculate crop factor equivalents",
        icon: "🔭",
        category: "photography"
      },
      {
        id: "storage",
        name: "Storage Calculator",
        description: "Calculate photo storage needs",
        icon: "💾",
        category: "photography"
      },
      {
        id: "sensor-size",
        name: "Sensor Size Comparison",
        description: "Compare camera sensor sizes",
        icon: "📐",
        category: "photography"
      },
      {
        id: "diffraction",
        name: "Diffraction Limit",
        description: "Calculate diffraction limit",
        icon: "🔬",
        category: "photography"
      },
      {
        id: "macro-magnification",
        name: "Macro Magnification",
        description: "Calculate macro magnification ratio",
        icon: "🔍",
        category: "photography"
      },
      {
        id: "star-trails",
        name: "Star Trails Calculator",
        description: "Calculate star trail exposure",
        icon: "⭐",
        category: "photography"
      },
      {
        id: "sunset-time",
        name: "Sunset Time",
        description: "Calculate golden hour timing",
        icon: "🌅",
        category: "photography"
      },
      {
        id: "panorama",
        name: "Panorama Calculator",
        description: "Calculate panorama shots needed",
        icon: "🏞️",
        category: "photography"
      },
      {
        id: "video-bitrate",
        name: "Video Bitrate",
        description: "Calculate video bitrate needs",
        icon: "🎥",
        category: "photography"
      },
      {
        id: "lens-equivalence",
        name: "Lens Equivalence",
        description: "Calculate lens focal length equivalence",
        icon: "📸",
        category: "photography"
      }
    ]
  },
  {
    id: "music",
    name: "Music",
    description: "Music theory and production calculators",
    icon: "🎵",
    calculators: [
      {
        id: "bpm",
        name: "BPM Calculator",
        description: "Calculate beats per minute",
        icon: "🥁",
        category: "music"
      },
      {
        id: "chord-finder",
        name: "Chord Finder",
        description: "Find chord progressions",
        icon: "🎸",
        category: "music"
      },
      {
        id: "frequency",
        name: "Frequency Calculator",
        description: "Calculate note frequencies",
        icon: "🎹",
        category: "music"
      },
      {
        id: "scale-finder",
        name: "Scale Finder",
        description: "Find musical scales",
        icon: "🎼",
        category: "music"
      },
      {
        id: "metronome",
        name: "Metronome",
        description: "Calculate tempo and timing",
        icon: "⏱️",
        category: "music"
      },
      {
        id: "interval",
        name: "Interval Calculator",
        description: "Calculate musical intervals",
        icon: "🎶",
        category: "music"
      },
      {
        id: "song-key",
        name: "Song Key Finder",
        description: "Determine song key",
        icon: "🔑",
        category: "music"
      },
      {
        id: "delay-time",
        name: "Delay Time",
        description: "Calculate delay/reverb timing",
        icon: "🔊",
        category: "music"
      },
      {
        id: "sample-rate",
        name: "Sample Rate",
        description: "Calculate audio sample rates",
        icon: "💿",
        category: "music"
      },
      {
        id: "db-calculator",
        name: "dB Calculator",
        description: "Calculate decibel levels",
        icon: "🔉",
        category: "music"
      },
      {
        id: "song-length",
        name: "Song Length",
        description: "Calculate song duration from BPM",
        icon: "⏱️",
        category: "music"
      },
      {
        id: "lyrics-per-minute",
        name: "Lyrics per Minute",
        description: "Calculate lyric delivery rate",
        icon: "📝",
        category: "music"
      },
      {
        id: "practice-time",
        name: "Practice Time",
        description: "Calculate practice hours needed",
        icon: "⏰",
        category: "music"
      },
      {
        id: "recording-time",
        name: "Recording Time",
        description: "Calculate recording session time",
        icon: "🎙️",
        category: "music"
      },
      {
        id: "mixing-levels",
        name: "Mixing Levels",
        description: "Calculate audio mixing levels",
        icon: "🎚️",
        category: "music"
      },
      {
        id: "mastering",
        name: "Mastering Loudness",
        description: "Calculate mastering LUFS",
        icon: "📊",
        category: "music"
      },
      {
        id: "copyright",
        name: "Copyright Calculator",
        description: "Calculate copyright duration",
        icon: "©",
        category: "music"
      },
      {
        id: "royalty",
        name: "Royalty Calculator",
        description: "Calculate music royalties",
        icon: "💰",
        category: "music"
      },
      {
        id: "setlist",
        name: "Concert Setlist",
        description: "Calculate setlist duration",
        icon: "🎤",
        category: "music"
      }
    ]
  },
  {
    id: "environment",
    name: "Environment",
    description: "Environmental and sustainability calculators",
    icon: "🌍",
    calculators: [
      {
        id: "carbon-footprint",
        name: "Carbon Footprint",
        description: "Calculate your carbon footprint",
        icon: "🌱",
        category: "environment"
      },
      {
        id: "solar-savings",
        name: "Solar Savings",
        description: "Calculate solar panel savings",
        icon: "☀️",
        category: "environment"
      },
      {
        id: "water-usage",
        name: "Water Usage",
        description: "Calculate household water usage",
        icon: "💧",
        category: "environment"
      },
      {
        id: "recycling",
        name: "Recycling Impact",
        description: "Calculate recycling benefits",
        icon: "♻️",
        category: "environment"
      },
      {
        id: "energy-usage",
        name: "Energy Usage",
        description: "Calculate home energy consumption",
        icon: "⚡",
        category: "environment"
      },
      {
        id: "tree-planting",
        name: "Tree Planting",
        description: "Calculate tree carbon offset",
        icon: "🌳",
        category: "environment"
      },
      {
        id: "compost-impact",
        name: "Compost Impact",
        description: "Calculate composting benefits",
        icon: "🍂",
        category: "environment"
      },
      {
        id: "plastic-waste",
        name: "Plastic Waste",
        description: "Calculate plastic waste impact",
        icon: "🥤",
        category: "environment"
      },
      {
        id: "led-savings",
        name: "LED Savings",
        description: "Calculate LED bulb savings",
        icon: "💡",
        category: "environment"
      },
      {
        id: "eco-score",
        name: "Eco Score",
        description: "Calculate environmental impact score",
        icon: "🌿",
        category: "environment"
      },
      {
        id: "ev-savings",
        name: "Electric Vehicle Savings",
        description: "Calculate EV environmental savings",
        icon: "🔌",
        category: "environment"
      },
      {
        id: "insulation-savings",
        name: "Insulation Savings",
        description: "Calculate insulation energy savings",
        icon: "🏠",
        category: "environment"
      },
      {
        id: "weatherization",
        name: "Weatherization Calculator",
        description: "Calculate weatherization benefits",
        icon: "❄️",
        category: "environment"
      },
      {
        id: "rainwater-harvest",
        name: "Rainwater Harvesting",
        description: "Calculate rainwater collection potential",
        icon: "💧",
        category: "environment"
      },
      {
        id: "greywater",
        name: "Greywater System",
        description: "Calculate greywater reuse",
        icon: "♻️",
        category: "environment"
      },
      {
        id: "wind-power",
        name: "Wind Power Calculator",
        description: "Calculate wind energy potential",
        icon: "💨",
        category: "environment"
      },
      {
        id: "geothermal",
        name: "Geothermal Savings",
        description: "Calculate geothermal savings",
        icon: "🌡️",
        category: "environment"
      },
      {
        id: "energy-audit",
        name: "Home Energy Audit",
        description: "Calculate home energy efficiency",
        icon: "🔍",
        category: "environment"
      },
      {
        id: "sustainable-living",
        name: "Sustainable Living Score",
        description: "Calculate sustainability score",
        icon: "🌱",
        category: "environment"
      }
    ]
  },
  {
    id: "pet-care",
    name: "Pet Care",
    description: "Pet health and care calculators",
    icon: "🐾",
    calculators: [
      {
        id: "pet-age",
        name: "Pet Age Calculator",
        description: "Convert pet age to human years",
        icon: "🐶",
        category: "pet-care"
      },
      {
        id: "pet-food",
        name: "Pet Food Calculator",
        description: "Calculate daily food portions",
        icon: "🍖",
        category: "pet-care"
      },
      {
        id: "pet-weight",
        name: "Pet Weight Tracker",
        description: "Track ideal pet weight",
        icon: "⚖️",
        category: "pet-care"
      },
      {
        id: "pet-calorie",
        name: "Pet Calorie Needs",
        description: "Calculate pet calorie requirements",
        icon: "🥩",
        category: "pet-care"
      },
      {
        id: "pregnancy-pet",
        name: "Pet Pregnancy",
        description: "Calculate pet pregnancy timeline",
        icon: "🐱",
        category: "pet-care"
      },
      {
        id: "medication",
        name: "Pet Medication",
        description: "Calculate pet medication dosage",
        icon: "💊",
        category: "pet-care"
      },
      {
        id: "aquarium-size",
        name: "Aquarium Size",
        description: "Calculate tank size for fish",
        icon: "🐠",
        category: "pet-care"
      },
      {
        id: "pet-cost",
        name: "Pet Cost Calculator",
        description: "Calculate lifetime pet costs",
        icon: "💰",
        category: "pet-care"
      },
      {
        id: "litter-box",
        name: "Litter Box Calculator",
        description: "Calculate litter needs",
        icon: "🪣",
        category: "pet-care"
      },
      {
        id: "vaccination",
        name: "Vaccination Schedule",
        description: "Track pet vaccination dates",
        icon: "💉",
        category: "pet-care"
      },
      {
        id: "breed-size",
        name: "Breed Size Estimator",
        description: "Estimate adult pet size",
        icon: "📏",
        category: "pet-care"
      },
      {
        id: "pet-insurance",
        name: "Pet Insurance Calculator",
        description: "Calculate pet insurance costs",
        icon: "🛡️",
        category: "pet-care"
      },
      {
        id: "grooming",
        name: "Grooming Schedule",
        description: "Plan pet grooming schedule",
        icon: "✂️",
        category: "pet-care"
      },
      {
        id: "exercise-needs",
        name: "Pet Exercise Needs",
        description: "Calculate pet exercise requirements",
        icon: "🏃",
        category: "pet-care"
      },
      {
        id: "travel-pets",
        name: "Travel with Pets",
        description: "Calculate pet travel needs",
        icon: "✈️",
        category: "pet-care"
      },
      {
        id: "adoption-cost",
        name: "Pet Adoption Cost",
        description: "Calculate adoption expenses",
        icon: "🏠",
        category: "pet-care"
      },
      {
        id: "boarding",
        name: "Pet Boarding Cost",
        description: "Calculate boarding costs",
        icon: "🏨",
        category: "pet-care"
      },
      {
        id: "training-time",
        name: "Training Time",
        description: "Calculate training schedule",
        icon: "🎓",
        category: "pet-care"
      },
      {
        id: "emergency-fund",
        name: "Pet Emergency Fund",
        description: "Calculate emergency fund needs",
        icon: "🆘",
        category: "pet-care"
      }
    ]
  }
];

export function getCategory(categoryId: string): Category | undefined {
  return calculatorData.find(cat => cat.id === categoryId);
}

export function getCalculator(categoryId: string, calculatorId: string): Calculator | undefined {
  const category = getCategory(categoryId);
  return category?.calculators.find(calc => calc.id === calculatorId);
}

export function getAllCategories(): Category[] {
  return calculatorData;
}

export function searchCalculators(query: string): Calculator[] {
  const lowerQuery = query.toLowerCase();
  const results: Calculator[] = [];
  
  calculatorData.forEach(category => {
    category.calculators.forEach(calculator => {
      if (
        calculator.name.toLowerCase().includes(lowerQuery) ||
        calculator.description.toLowerCase().includes(lowerQuery) ||
        category.name.toLowerCase().includes(lowerQuery)
      ) {
        results.push(calculator);
      }
    });
  });
  
  return results;
}