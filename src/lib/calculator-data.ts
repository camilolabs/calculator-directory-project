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
        name: "Loan calculator",
        description: "Calculate monthly loan payments and total interest",
        icon: "🏦",
        category: "finance"
      },
      {
        id: "mortgage",
        name: "Mortgage calculator",
        description: "Calculate mortgage payments with taxes and insurance",
        icon: "🏠",
        category: "finance"
      },
      {
        id: "investment",
        name: "Investment calculator",
        description: "Calculate investment returns over time",
        icon: "📈",
        category: "finance"
      },
      {
        id: "retirement",
        name: "Retirement calculator",
        description: "Plan your retirement savings",
        icon: "👴",
        category: "finance"
      },
      {
        id: "compound-interest",
        name: "Compound interest calculator",
        description: "Calculate compound interest on savings",
        icon: "💵",
        category: "finance"
      },
      {
        id: "roi",
        name: "ROI calculator",
        description: "Calculate return on investment percentage",
        icon: "📊",
        category: "finance"
      },
      {
        id: "savings",
        name: "Savings calculator",
        description: "Plan your savings goals",
        icon: "🐷",
        category: "finance"
      },
      {
        id: "tax",
        name: "Tax calculator",
        description: "Estimate your income tax",
        icon: "📋",
        category: "finance"
      },
      {
        id: "budget",
        name: "Budget calculator",
        description: "Plan your monthly budget",
        icon: "💳",
        category: "finance"
      },
      {
        id: "currency",
        name: "Currency converter",
        description: "Convert between currencies",
        icon: "💱",
        category: "finance"
      },
      {
        id: "debt-payoff",
        name: "Debt payoff calculator",
        description: "Calculate debt repayment timeline",
        icon: "💳",
        category: "finance"
      },
      {
        id: "credit-card",
        name: "Credit card payoff calculator",
        description: "Calculate credit card payoff time",
        icon: "💳",
        category: "finance"
      },
      {
        id: "apr",
        name: "APR calculator",
        description: "Calculate annual percentage rate",
        icon: "📊",
        category: "finance"
      },
      {
        id: "amortization",
        name: "Amortization schedule",
        description: "Generate loan amortization schedule",
        icon: "📅",
        category: "finance"
      },
      {
        id: "inflation",
        name: "Inflation calculator",
        description: "Calculate inflation impact over time",
        icon: "📈",
        category: "finance"
      },
      {
        id: "net-worth",
        name: "Net worth calculator",
        description: "Calculate total net worth",
        icon: "💎",
        category: "finance"
      },
      {
        id: "emergency-fund",
        name: "Emergency fund calculator",
        description: "Calculate emergency fund needs",
        icon: "🆘",
        category: "finance"
      },
      {
        id: "401k",
        name: "401(k) calculator",
        description: "Calculate 401(k) growth",
        icon: "📊",
        category: "finance"
      },
      {
        id: "tip",
        name: "Tip calculator",
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
        name: "BMI calculator",
        description: "Calculate your Body Mass Index",
        icon: "⚖️",
        category: "health"
      },
      {
        id: "calorie",
        name: "Calorie calculator",
        description: "Calculate daily calorie needs",
        icon: "🍎",
        category: "health"
      },
      {
        id: "body-fat",
        name: "Body fat calculator",
        description: "Estimate your body fat percentage",
        icon: "📏",
        category: "health"
      },
      {
        id: "protein",
        name: "Protein calculator",
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
        name: "Ideal weight calculator",
        description: "Calculate your ideal body weight",
        icon: "🎯",
        category: "health"
      },
      {
        id: "pregnancy",
        name: "Pregnancy calculator",
        description: "Calculate due date and milestones",
        icon: "🤰",
        category: "health"
      },
      {
        id: "heart-rate",
        name: "Heart rate calculator",
        description: "Calculate target heart rate zones",
        icon: "❤️",
        category: "health"
      },
      {
        id: "pace",
        name: "Running pace",
        description: "Calculate running pace and splits",
        icon: "🏃",
        category: "health"
      },
      {
        id: "macro",
        name: "Macro calculator",
        description: "Calculate macronutrient ratios",
        icon: "🥗",
        category: "health"
      },
      {
        id: "blood-pressure",
        name: "Blood pressure calculator",
        description: "Track and analyze blood pressure",
        icon: "🩺",
        category: "health"
      },
      {
        id: "hydration",
        name: "Hydration calculator",
        description: "Calculate optimal hydration needs",
        icon: "💧",
        category: "health"
      },
      {
        id: "body-age",
        name: "Body age calculator",
        description: "Calculate your biological age",
        icon: "🎂",
        category: "health"
      },
      {
        id: "meal-planner",
        name: "Meal planner",
        description: "Plan balanced meals",
        icon: "🍽️",
        category: "health"
      },
      {
        id: "bmr",
        name: "BMR calculator",
        description: "Calculate basal metabolic rate",
        icon: "🔥",
        category: "health"
      },
      {
        id: "carbs",
        name: "Carbs calculator",
        description: "Calculate daily carb intake",
        icon: "🍞",
        category: "health"
      },
      {
        id: "steps",
        name: "Step counter goal",
        description: "Calculate step goals and distance",
        icon: "👟",
        category: "health"
      },
      {
        id: "waist-hip",
        name: "Waist-to-hip ratio calculator",
        description: "Calculate WHR for health risk",
        icon: "📏",
        category: "health"
      },
      {
        id: "body-comp",
        name: "Body composition calculator",
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
        name: "Percentage calculator",
        description: "Calculate percentages easily",
        icon: "📊",
        category: "math"
      },
      {
        id: "fraction",
        name: "Fraction calculator",
        description: "Add, subtract, multiply, divide fractions",
        icon: "➗",
        category: "math"
      },
      {
        id: "square-root",
        name: "Square root calculator",
        description: "Calculate square roots and powers",
        icon: "√",
        category: "math"
      },
      {
        id: "average",
        name: "Average calculator",
        description: "Calculate mean, median, mode",
        icon: "📈",
        category: "math"
      },
      {
        id: "pythagorean",
        name: "Pythagorean theorem",
        description: "Calculate triangle sides",
        icon: "📐",
        category: "math"
      },
      {
        id: "exponent",
        name: "Exponent calculator",
        description: "Calculate exponential values",
        icon: "ⁿ",
        category: "math"
      },
      {
        id: "factorial",
        name: "Factorial calculator",
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
        name: "Ratio calculator",
        description: "Calculate and simplify ratios",
        icon: "⚖️",
        category: "math"
      },
      {
        id: "matrix",
        name: "Matrix calculator",
        description: "Perform matrix operations",
        icon: "🔲",
        category: "math"
      },
      {
        id: "prime",
        name: "Prime number checker",
        description: "Check if number is prime",
        icon: "🔢",
        category: "math"
      },
      {
        id: "logarithm",
        name: "Logarithm calculator",
        description: "Calculate logarithms",
        icon: "log",
        category: "math"
      },
      {
        id: "scientific-notation",
        name: "Scientific notation",
        description: "Convert to scientific notation",
        icon: "🔬",
        category: "math"
      },
      {
        id: "quadratic",
        name: "Quadratic equation solver",
        description: "Solve quadratic equations",
        icon: "x²",
        category: "math"
      },
      {
        id: "permutation",
        name: "Permutation & combination calculator",
        description: "Calculate permutations and combinations",
        icon: "🔀",
        category: "math"
      },
      {
        id: "standard-deviation",
        name: "Standard deviation ",
        description: "Calculate standard deviation",
        icon: "σ",
        category: "math"
      },
      {
        id: "probability",
        name: "Probability calculator",
        description: "Calculate probability",
        icon: "🎲",
        category: "math"
      },
      {
        id: "area-perimeter",
        name: "Area & perimeter calculator",
        description: "Calculate area and perimeter of shapes",
        icon: "⬜",
        category: "math"
      },
      {
        id: "slope",
        name: "Slope calculator",
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
        name: "Velocity calculator",
        description: "Calculate velocity, speed, and acceleration",
        icon: "🚀",
        category: "science"
      },
      {
        id: "force",
        name: "Force calculator",
        description: "Calculate force using Newton's laws",
        icon: "⚡",
        category: "science"
      },
      {
        id: "energy",
        name: "Energy calculator",
        description: "Calculate kinetic and potential energy",
        icon: "🔋",
        category: "science"
      },
      {
        id: "density",
        name: "Density calculator",
        description: "Calculate density, mass, and volume",
        icon: "🧊",
        category: "science"
      },
      {
        id: "pressure",
        name: "Pressure calculator",
        description: "Calculate pressure in various units",
        icon: "🌡️",
        category: "science"
      },
      {
        id: "wavelength",
        name: "Wavelength calculator",
        description: "Calculate wavelength and frequency",
        icon: "〰️",
        category: "science"
      },
      {
        id: "ohms-law",
        name: "Ohm's law",
        description: "Calculate voltage, current, and resistance",
        icon: "⚡",
        category: "science"
      },
      {
        id: "molar-mass",
        name: "Molar mass calculator",
        description: "Calculate molar mass of compounds",
        icon: "⚗️",
        category: "science"
      },
      {
        id: "ph",
        name: "pH calculator",
        description: "Calculate pH and pOH values",
        icon: "🧪",
        category: "science"
      },
      {
        id: "half-life",
        name: "Half-life calculator",
        description: "Calculate radioactive decay",
        icon: "☢️",
        category: "science"
      },
      {
        id: "gravity",
        name: "Gravity calculator",
        description: "Calculate gravitational force",
        icon: "🌍",
        category: "science"
      },
      {
        id: "momentum",
        name: "Momentum calculator",
        description: "Calculate momentum",
        icon: "➡️",
        category: "science"
      },
      {
        id: "power",
        name: "Power calculator",
        description: "Calculate power in watts",
        icon: "⚡",
        category: "science"
      },
      {
        id: "work",
        name: "Work calculator",
        description: "Calculate work done by force",
        icon: "💼",
        category: "science"
      },
      {
        id: "acceleration",
        name: "Acceleration calculator",
        description: "Calculate acceleration",
        icon: "🚀",
        category: "science"
      },
      {
        id: "projectile",
        name: "Projectile motion calculator",
        description: "Calculate projectile trajectory",
        icon: "🎯",
        category: "science"
      },
      {
        id: "gas-laws",
        name: "Gas laws calculator",
        description: "Calculate gas law equations",
        icon: "💨",
        category: "science"
      },
      {
        id: "stoichiometry",
        name: "Stoichiometry calculator",
        description: "Calculate chemical reactions",
        icon: "⚗️",
        category: "science"
      },
      {
        id: "kinematics",
        name: "Kinematics calculator",
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
        name: "Length converter",
        description: "Convert between length units",
        icon: "📏",
        category: "conversion"
      },
      {
        id: "weight",
        name: "Weight converter",
        description: "Convert between weight and mass units",
        icon: "⚖️",
        category: "conversion"
      },
      {
        id: "temperature",
        name: "Temperature converter",
        description: "Convert Celsius, Fahrenheit, Kelvin",
        icon: "🌡️",
        category: "conversion"
      },
      {
        id: "volume",
        name: "Volume converter",
        description: "Convert between volume units",
        icon: "🥤",
        category: "conversion"
      },
      {
        id: "area",
        name: "Area converter",
        description: "Convert between area units",
        icon: "📐",
        category: "conversion"
      },
      {
        id: "speed",
        name: "Speed converter",
        description: "Convert between speed units",
        icon: "🏃",
        category: "conversion"
      },
      {
        id: "time",
        name: "Time converter",
        description: "Convert between time units",
        icon: "⏰",
        category: "conversion"
      },
      {
        id: "data",
        name: "Data converter",
        description: "Convert bytes, KB, MB, GB, TB",
        icon: "💾",
        category: "conversion"
      },
      {
        id: "pressure-conversion",
        name: "Pressure converter",
        description: "Convert between pressure units",
        icon: "🎈",
        category: "conversion"
      },
      {
        id: "energy-conversion",
        name: "Energy converter",
        description: "Convert between energy units",
        icon: "⚡",
        category: "conversion"
      },
      {
        id: "angle",
        name: "Angle converter",
        description: "Convert degrees, radians, gradians",
        icon: "📐",
        category: "conversion"
      },
      {
        id: "frequency",
        name: "Frequency converter",
        description: "Convert frequency units",
        icon: "〰️",
        category: "conversion"
      },
      {
        id: "fuel",
        name: "Fuel economy converter",
        description: "Convert MPG, L/100km",
        icon: "⛽",
        category: "conversion"
      },
      {
        id: "torque",
        name: "Torque converter",
        description: "Convert torque units",
        icon: "🔧",
        category: "conversion"
      },
      {
        id: "power-conv",
        name: "Power converter",
        description: "Convert power units",
        icon: "⚡",
        category: "conversion"
      },
      {
        id: "force",
        name: "Force converter",
        description: "Convert force units",
        icon: "💪",
        category: "conversion"
      },
      {
        id: "luminosity",
        name: "Luminosity converter",
        description: "Convert light intensity units",
        icon: "💡",
        category: "conversion"
      },
      {
        id: "density-conv",
        name: "Density converter",
        description: "Convert density units",
        icon: "🧊",
        category: "conversion"
      },
      {
        id: "viscosity",
        name: "Viscosity converter",
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
        name: "Concrete calculator",
        description: "Calculate concrete volume needed",
        icon: "🏗️",
        category: "construction"
      },
      {
        id: "paint",
        name: "Paint calculator",
        description: "Calculate paint quantity needed",
        icon: "🎨",
        category: "construction"
      },
      {
        id: "flooring",
        name: "Flooring calculator",
        description: "Calculate flooring materials needed",
        icon: "🪵",
        category: "construction"
      },
      {
        id: "roofing",
        name: "Roofing calculator",
        description: "Calculate roofing materials",
        icon: "🏠",
        category: "construction"
      },
      {
        id: "drywall",
        name: "Drywall calculator",
        description: "Calculate drywall sheets needed",
        icon: "🧱",
        category: "construction"
      },
      {
        id: "brick",
        name: "Brick calculator",
        description: "Calculate number of bricks needed",
        icon: "🧱",
        category: "construction"
      },
      {
        id: "gravel",
        name: "Gravel calculator",
        description: "Calculate gravel quantity needed",
        icon: "🪨",
        category: "construction"
      },
      {
        id: "fence",
        name: "Fence calculator",
        description: "Calculate fencing materials",
        icon: "🚧",
        category: "construction"
      },
      {
        id: "stairs",
        name: "Stair calculator",
        description: "Calculate stair dimensions",
        icon: "🪜",
        category: "construction"
      },
      {
        id: "tile",
        name: "Tile calculator",
        description: "Calculate tiles needed",
        icon: "⬜",
        category: "construction"
      },
      {
        id: "insulation",
        name: "Insulation calculator",
        description: "Calculate insulation needs",
        icon: "🧱",
        category: "construction"
      },
      {
        id: "lumber",
        name: "Lumber calculator",
        description: "Calculate lumber board feet",
        icon: "🪵",
        category: "construction"
      },
      {
        id: "deck",
        name: "Deck calculator",
        description: "Calculate deck materials",
        icon: "🏡",
        category: "construction"
      },
      {
        id: "siding",
        name: "Siding calculator",
        description: "Calculate siding needed",
        icon: "🏠",
        category: "construction"
      },
      {
        id: "gutter",
        name: "Gutter calculator",
        description: "Calculate gutter length needed",
        icon: "🌧️",
        category: "construction"
      },
      {
        id: "window",
        name: "Window calculator",
        description: "Calculate window sizing",
        icon: "🪟",
        category: "construction"
      },
      {
        id: "door",
        name: "Door calculator",
        description: "Calculate door frame dimensions",
        icon: "🚪",
        category: "construction"
      },
      {
        id: "foundation",
        name: "Foundation calculator",
        description: "Calculate foundation materials",
        icon: "🏗️",
        category: "construction"
      },
      {
        id: "landscape",
        name: "Landscape calculator",
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
        name: "GPA calculator",
        description: "Calculate your grade point average",
        icon: "📚",
        category: "education"
      },
      {
        id: "grade",
        name: "Grade calculator",
        description: "Calculate final grades",
        icon: "✏️",
        category: "education"
      },
      {
        id: "study-time",
        name: "Study time planner",
        description: "Plan your study schedule",
        icon: "⏰",
        category: "education"
      },
      {
        id: "reading-time",
        name: "Reading time",
        description: "Estimate reading time for texts",
        icon: "📖",
        category: "education"
      },
      {
        id: "word-count",
        name: "Word counter",
        description: "Count words and characters",
        icon: "📝",
        category: "education"
      },
      {
        id: "typing-speed",
        name: "Typing speed",
        description: "Calculate WPM typing speed",
        icon: "⌨️",
        category: "education"
      },
      {
        id: "sat-score",
        name: "SAT score calculator",
        description: "Calculate SAT scores",
        icon: "📄",
        category: "education"
      },
      {
        id: "essay-length",
        name: "Essay length",
        description: "Calculate essay length and pages",
        icon: "📃",
        category: "education"
      },
      {
        id: "class-credits",
        name: "Credit hours",
        description: "Calculate semester credit hours",
        icon: "🎓",
        category: "education"
      },
      {
        id: "scholarship",
        name: "Scholarship calculator",
        description: "Calculate scholarship awards",
        icon: "💰",
        category: "education"
      },
      {
        id: "test-predictor",
        name: "Test score predictor",
        description: "Predict final test scores",
        icon: "📊",
        category: "education"
      },
      {
        id: "study-break",
        name: "Study break timer",
        description: "Calculate optimal study breaks",
        icon: "☕",
        category: "education"
      },
      {
        id: "assignment-planner",
        name: "Assignment planner",
        description: "Plan assignment completion",
        icon: "📋",
        category: "education"
      },
      {
        id: "exam-prep",
        name: "Exam preparation",
        description: "Calculate exam study time needed",
        icon: "📝",
        category: "education"
      },
      {
        id: "learning-pace",
        name: "Learning pace",
        description: "Calculate learning speed",
        icon: "🧠",
        category: "education"
      },
      {
        id: "attendance",
        name: "Attendance tracker",
        description: "Track class attendance percentage",
        icon: "✅",
        category: "education"
      },
      {
        id: "homework-time",
        name: "Homework time",
        description: "Estimate homework duration",
        icon: "📚",
        category: "education"
      },
      {
        id: "academic-performance",
        name: "Academic performance",
        description: "Track overall academic progress",
        icon: "🎯",
        category: "education"
      },
      {
        id: "semester-planner",
        name: "Semester planner",
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
        name: "Age calculator",
        description: "Calculate age in years, months, days",
        icon: "🎂",
        category: "time"
      },
      {
        id: "date-difference",
        name: "Date difference",
        description: "Calculate days between dates",
        icon: "📅",
        category: "time"
      },
      {
        id: "time-duration",
        name: "Time duration",
        description: "Calculate time duration between times",
        icon: "⏱️",
        category: "time"
      },
      {
        id: "business-days",
        name: "Business days",
        description: "Calculate working days",
        icon: "💼",
        category: "time"
      },
      {
        id: "timezone",
        name: "Time zone converter",
        description: "Convert between time zones",
        icon: "🌍",
        category: "time"
      },
      {
        id: "countdown",
        name: "Countdown timer",
        description: "Calculate time until event",
        icon: "⏰",
        category: "time"
      },
      {
        id: "work-hours",
        name: "Work hours",
        description: "Calculate work hours and overtime",
        icon: "⏲️",
        category: "time"
      },
      {
        id: "shift",
        name: "Shift calculator",
        description: "Calculate shift hours and breaks",
        icon: "🕐",
        category: "time"
      },
      {
        id: "sleep",
        name: "Sleep calculator",
        description: "Calculate optimal sleep and wake times",
        icon: "😴",
        category: "time"
      },
      {
        id: "meeting",
        name: "Meeting time",
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
        name: "Week number",
        description: "Calculate week number of year",
        icon: "📅",
        category: "time"
      },
      {
        id: "lunar",
        name: "Lunar calendar",
        description: "Convert to lunar calendar dates",
        icon: "🌙",
        category: "time"
      },
      {
        id: "work-anniversary",
        name: "Work anniversary",
        description: "Calculate work tenure",
        icon: "💼",
        category: "time"
      },
      {
        id: "project-timeline",
        name: "Project timeline",
        description: "Calculate project milestones",
        icon: "📊",
        category: "time"
      },
      {
        id: "deadline",
        name: "Deadline calculator",
        description: "Calculate time until deadline",
        icon: "⏳",
        category: "time"
      },
      {
        id: "time-tracker",
        name: "Time tracker",
        description: "Track time spent on tasks",
        icon: "⏱️",
        category: "time"
      },
      {
        id: "billing-hours",
        name: "Billing hours",
        description: "Calculate billable hours",
        icon: "💰",
        category: "time"
      },
      {
        id: "retirement-countdown",
        name: "Retirement countdown",
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
        name: "Recipe scaler",
        description: "Scale recipe ingredients",
        icon: "📖",
        category: "cooking"
      },
      {
        id: "cooking-time",
        name: "Cooking time",
        description: "Calculate cooking times by weight",
        icon: "⏲️",
        category: "cooking"
      },
      {
        id: "portion",
        name: "Portion calculator",
        description: "Calculate servings and portions",
        icon: "🍽️",
        category: "cooking"
      },
      {
        id: "nutrition",
        name: "Nutrition calculator",
        description: "Calculate nutritional values",
        icon: "🥗",
        category: "cooking"
      },
      {
        id: "baking",
        name: "Baking converter",
        description: "Convert baking measurements",
        icon: "🧁",
        category: "cooking"
      },
      {
        id: "meat-temp",
        name: "Meat temperature",
        description: "Safe cooking temperatures",
        icon: "🥩",
        category: "cooking"
      },
      {
        id: "pizza",
        name: "Pizza dough",
        description: "Calculate pizza dough ingredients",
        icon: "🍕",
        category: "cooking"
      },
      {
        id: "cocktail",
        name: "Cocktail ratio",
        description: "Scale cocktail recipes",
        icon: "🍸",
        category: "cooking"
      },
      {
        id: "coffee",
        name: "Coffee ratio",
        description: "Calculate coffee to water ratio",
        icon: "☕",
        category: "cooking"
      },
      {
        id: "bread",
        name: "Bread baker's %",
        description: "Calculate baker's percentage",
        icon: "🍞",
        category: "cooking"
      },
      {
        id: "meal-prep",
        name: "Meal prep calculator",
        description: "Calculate meal prep portions",
        icon: "🥡",
        category: "cooking"
      },
      {
        id: "grocery",
        name: "Grocery calculator",
        description: "Calculate grocery list quantities",
        icon: "🛒",
        category: "cooking"
      },
      {
        id: "sous-vide",
        name: "Sous vide time",
        description: "Calculate sous vide cooking time",
        icon: "🥩",
        category: "cooking"
      },
      {
        id: "fermentation",
        name: "Fermentation timer",
        description: "Calculate fermentation time",
        icon: "🫙",
        category: "cooking"
      },
      {
        id: "rising-time",
        name: "Dough rising time",
        description: "Calculate bread rising time",
        icon: "🍞",
        category: "cooking"
      },
      {
        id: "marinating",
        name: "Marinating time",
        description: "Calculate optimal marinating time",
        icon: "🥩",
        category: "cooking"
      },
      {
        id: "food-cost",
        name: "Food cost calculator",
        description: "Calculate recipe food costs",
        icon: "💰",
        category: "cooking"
      },
      {
        id: "batch-cooking",
        name: "Batch cooking",
        description: "Calculate batch cooking portions",
        icon: "🍲",
        category: "cooking"
      },
      {
        id: "meal-planning",
        name: "Weekly meal planning",
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
        name: "Profit margin calculator",
        description: "Calculate profit margins",
        icon: "📊",
        category: "business"
      },
      {
        id: "break-even",
        name: "Break-even point",
        description: "Calculate break-even analysis",
        icon: "📈",
        category: "business"
      },
      {
        id: "markup",
        name: "Markup calculator",
        description: "Calculate markup and margin",
        icon: "💵",
        category: "business"
      },
      {
        id: "payroll",
        name: "Payroll calculator",
        description: "Calculate employee payroll",
        icon: "💰",
        category: "business"
      },
      {
        id: "discount",
        name: "Discount calculator",
        description: "Calculate discounts and savings",
        icon: "🏷️",
        category: "business"
      },
      {
        id: "sales-tax",
        name: "Sales tax calculator",
        description: "Calculate sales tax amounts",
        icon: "🧾",
        category: "business"
      },
      {
        id: "commission",
        name: "Commission calculator",
        description: "Calculate sales commissions",
        icon: "💸",
        category: "business"
      },
      {
        id: "hourly-rate",
        name: "Hourly rate calculator",
        description: "Calculate hourly billing rates",
        icon: "⏰",
        category: "business"
      },
      {
        id: "depreciation",
        name: "Depreciation calculator",
        description: "Calculate asset depreciation",
        icon: "📉",
        category: "business"
      },
      {
        id: "inventory",
        name: "Inventory turnover calculator",
        description: "Calculate inventory turnover ratio",
        icon: "📦",
        category: "business"
      },
      {
        id: "cash-flow",
        name: "Cash flow calculator",
        description: "Calculate cash flow projections",
        icon: "💵",
        category: "business"
      },
      {
        id: "roi-advanced",
        name: "ROI Advanced Calculator",
        description: "Advanced return on investment analysis",
        icon: "📊",
        category: "business"
      },
      {
        id: "customer-lifetime",
        name: "Customer lifetime value calculator",
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
        name: "Employee turnover",
        description: "Calculate turnover rate",
        icon: "🚪",
        category: "business"
      },
      {
        id: "revenue-projection",
        name: "Revenue projection calculator",
        description: "Project future revenue",
        icon: "💰",
        category: "business"
      },
      {
        id: "expense-tracker",
        name: "Expense tracker",
        description: "Track business expenses",
        icon: "📋",
        category: "business"
      },
      {
        id: "invoice",
        name: "Invoice calculator",
        description: "Calculate invoice totals",
        icon: "🧾",
        category: "business"
      },
      {
        id: "productivity",
        name: "Productivity calculator",
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
        name: "Fuel cost calculator",
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
        name: "Car lease calculator",
        description: "Calculate monthly lease payments",
        icon: "🚘",
        category: "automotive"
      },
      {
        id: "auto-loan",
        name: "Auto loan calculator",
        description: "Calculate car loan payments",
        icon: "💰",
        category: "automotive"
      },
      {
        id: "tire-size",
        name: "Tire size calculator",
        description: "Compare tire sizes and specs",
        icon: "🛞",
        category: "automotive"
      },
      {
        id: "horsepower",
        name: "Horsepower calculator",
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
        name: "EV range calculator",
        description: "Calculate electric vehicle range",
        icon: "🔌",
        category: "automotive"
      },
      {
        id: "maintenance",
        name: "Maintenance schedule",
        description: "Track vehicle maintenance",
        icon: "🔧",
        category: "automotive"
      },
      {
        id: "emission",
        name: "Carbon emissions calculator",
        description: "Calculate vehicle emissions",
        icon: "🌫️",
        category: "automotive"
      },
      {
        id: "insurance-cost",
        name: "Insurance cost calculator",
        description: "Estimate car insurance costs",
        icon: "🛡️",
        category: "automotive"
      },
      {
        id: "car-depreciation",
        name: "Car depreciation calculator",
        description: "Calculate vehicle depreciation",
        icon: "📉",
        category: "automotive"
      },
      {
        id: "road-trip",
        name: "Road trip planner",
        description: "Plan road trip costs and time",
        icon: "🗺️",
        category: "automotive"
      },
      {
        id: "toll",
        name: "Toll calculator",
        description: "Calculate toll costs",
        icon: "🛣️",
        category: "automotive"
      },
      {
        id: "parking-cost",
        name: "Parking cost calculator",
        description: "Calculate parking expenses",
        icon: "🅿️",
        category: "automotive"
      },
      {
        id: "registration",
        name: "Registration fees",
        description: "Estimate registration costs",
        icon: "📋",
        category: "automotive"
      },
      {
        id: "car-comparison",
        name: "Car comparison",
        description: "Compare vehicle costs",
        icon: "⚖️",
        category: "automotive"
      },
      {
        id: "gas-vs-electric",
        name: "Gas vs electric",
        description: "Compare gas and electric costs",
        icon: "⚡",
        category: "automotive"
      },
      {
        id: "trade-in",
        name: "Trade-in value calculator",
        description: "Estimate trade-in value",
        icon: "💰",
        category: "automotive"
      }
    ]
  },
  {
    id: "real-estate",
    name: "Real estate",
    description: "Property and housing calculators",
    icon: "🏡",
    calculators: [
      {
        id: "home-affordability",
        name: "Home affordability",
        description: "Calculate home buying budget",
        icon: "💰",
        category: "real-estate"
      },
      {
        id: "rent-vs-buy",
        name: "Rent vs buy",
        description: "Compare renting vs buying",
        icon: "🏘️",
        category: "real-estate"
      },
      {
        id: "property-tax",
        name: "Property tax",
        description: "Calculate property taxes",
        icon: "📋",
        category: "real-estate"
      },
      {
        id: "cap-rate",
        name: "Cap rate calculator",
        description: "Calculate capitalization rate",
        icon: "📊",
        category: "real-estate"
      },
      {
        id: "rental-yield",
        name: "Rental yield",
        description: "Calculate rental property yield",
        icon: "🏢",
        category: "real-estate"
      },
      {
        id: "closing-costs",
        name: "Closing costs",
        description: "Estimate closing costs",
        icon: "📝",
        category: "real-estate"
      },
      {
        id: "square-footage",
        name: "Square footage",
        description: "Calculate room and property area",
        icon: "📐",
        category: "real-estate"
      },
      {
        id: "mortgage-points",
        name: "Mortgage points",
        description: "Calculate mortgage points value",
        icon: "💵",
        category: "real-estate"
      },
      {
        id: "refinance",
        name: "Refinance calculator",
        description: "Calculate refinancing benefits",
        icon: "🔄",
        category: "real-estate"
      },
      {
        id: "hoa-fees",
        name: "HOA fees impact",
        description: "Calculate HOA fee impact",
        icon: "🏘️",
        category: "real-estate"
      },
      {
        id: "investment-property",
        name: "Investment property",
        description: "Calculate investment property returns",
        icon: "📈",
        category: "real-estate"
      },
      {
        id: "flip",
        name: "House flip calculator",
        description: "Calculate flipping profit",
        icon: "🔨",
        category: "real-estate"
      },
      {
        id: "airbnb-income",
        name: "Airbnb income",
        description: "Calculate rental income potential",
        icon: "🏠",
        category: "real-estate"
      },
      {
        id: "home-equity",
        name: "Home equity",
        description: "Calculate home equity",
        icon: "💰",
        category: "real-estate"
      },
      {
        id: "down-payment",
        name: "Down payment",
        description: "Calculate down payment needs",
        icon: "💵",
        category: "real-estate"
      },
      {
        id: "pmi",
        name: "PMI calculator",
        description: "Calculate private mortgage insurance",
        icon: "🛡️",
        category: "real-estate"
      },
      {
        id: "land-area",
        name: "Land area calculator",
        description: "Calculate land area and acreage",
        icon: "🗺️",
        category: "real-estate"
      },
      {
        id: "renovation",
        name: "Renovation cost",
        description: "Estimate renovation costs",
        icon: "🔨",
        category: "real-estate"
      },
      {
        id: "appraisal",
        name: "Appraisal value",
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
        name: "Trip cost calculator",
        description: "Calculate total trip expenses",
        icon: "💰",
        category: "travel"
      },
      {
        id: "flight-carbon",
        name: "Flight carbon",
        description: "Calculate flight carbon footprint",
        icon: "🌍",
        category: "travel"
      },
      {
        id: "travel-time",
        name: "Travel time",
        description: "Calculate travel duration",
        icon: "⏱️",
        category: "travel"
      },
      {
        id: "trip-split",
        name: "Trip split calculator",
        description: "Split travel costs among group",
        icon: "👥",
        category: "travel"
      },
      {
        id: "distance",
        name: "Distance calculator",
        description: "Calculate distance between cities",
        icon: "🗺️",
        category: "travel"
      },
      {
        id: "luggage-weight",
        name: "Luggage weight",
        description: "Calculate baggage weight limits",
        icon: "🧳",
        category: "travel"
      },
      {
        id: "jet-lag",
        name: "Jet lag calculator",
        description: "Calculate jet lag recovery time",
        icon: "😴",
        category: "travel"
      },
      {
        id: "visa-days",
        name: "Visa days counter",
        description: "Track visa stay duration",
        icon: "📖",
        category: "travel"
      },
      {
        id: "packing-list",
        name: "Packing list",
        description: "Generate packing checklist",
        icon: "📋",
        category: "travel"
      },
      {
        id: "travel-insurance",
        name: "Travel insurance",
        description: "Calculate travel insurance needs",
        icon: "🛡️",
        category: "travel"
      },
      {
        id: "budget-planner",
        name: "Travel budget planner",
        description: "Plan comprehensive travel budget",
        icon: "💰",
        category: "travel"
      },
      {
        id: "currency-trip",
        name: "Trip currency exchange",
        description: "Calculate currency needs for trip",
        icon: "💱",
        category: "travel"
      },
      {
        id: "timezone-meeting",
        name: "Time zone meeting",
        description: "Find best meeting time across zones",
        icon: "🌍",
        category: "travel"
      },
      {
        id: "travel-rewards",
        name: "Travel rewards",
        description: "Calculate travel points value",
        icon: "🎁",
        category: "travel"
      },
      {
        id: "passport-validity",
        name: "Passport validity",
        description: "Check passport expiration",
        icon: "📘",
        category: "travel"
      },
      {
        id: "road-trip-stops",
        name: "Road trip stops",
        description: "Plan optimal road trip stops",
        icon: "🚗",
        category: "travel"
      },
      {
        id: "accommodation",
        name: "Accommodation cost",
        description: "Calculate lodging expenses",
        icon: "🏨",
        category: "travel"
      },
      {
        id: "daily-expenses",
        name: "Daily travel expenses",
        description: "Track daily travel spending",
        icon: "💳",
        category: "travel"
      },
      {
        id: "itinerary",
        name: "Itinerary planner",
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
        name: "Plant spacing",
        description: "Calculate plant spacing needs",
        icon: "🌿",
        category: "gardening"
      },
      {
        id: "soil-volume",
        name: "Soil volume",
        description: "Calculate soil needed",
        icon: "🪴",
        category: "gardening"
      },
      {
        id: "mulch",
        name: "Mulch calculator",
        description: "Calculate mulch quantity",
        icon: "🍂",
        category: "gardening"
      },
      {
        id: "watering",
        name: "Watering schedule",
        description: "Plan plant watering schedule",
        icon: "💧",
        category: "gardening"
      },
      {
        id: "fertilizer",
        name: "Fertilizer calculator",
        description: "Calculate fertilizer amounts",
        icon: "🧪",
        category: "gardening"
      },
      {
        id: "compost",
        name: "Compost calculator",
        description: "Calculate compost mix ratios",
        icon: "♻️",
        category: "gardening"
      },
      {
        id: "seed-quantity",
        name: "Seed quantity",
        description: "Calculate seeds needed",
        icon: "🌾",
        category: "gardening"
      },
      {
        id: "harvest-date",
        name: "Harvest date",
        description: "Calculate harvest timing",
        icon: "🥕",
        category: "gardening"
      },
      {
        id: "grow-lights",
        name: "Grow light calculator",
        description: "Calculate grow light needs",
        icon: "💡",
        category: "gardening"
      },
      {
        id: "garden-area",
        name: "Garden area",
        description: "Calculate garden plot area",
        icon: "📐",
        category: "gardening"
      },
      {
        id: "zone-finder",
        name: "Hardiness zone finder",
        description: "Find plant hardiness zone",
        icon: "🌍",
        category: "gardening"
      },
      {
        id: "frost-date",
        name: "Frost date calculator",
        description: "Calculate first/last frost dates",
        icon: "❄️",
        category: "gardening"
      },
      {
        id: "growing-season",
        name: "Growing season",
        description: "Calculate growing season length",
        icon: "🌞",
        category: "gardening"
      },
      {
        id: "greenhouse",
        name: "Greenhouse calculator",
        description: "Calculate greenhouse dimensions",
        icon: "🏡",
        category: "gardening"
      },
      {
        id: "rain-barrel",
        name: "Rain barrel calculator",
        description: "Calculate rainwater collection",
        icon: "💧",
        category: "gardening"
      },
      {
        id: "irrigation",
        name: "Irrigation calculator",
        description: "Calculate irrigation needs",
        icon: "🚿",
        category: "gardening"
      },
      {
        id: "seed-starting",
        name: "Seed starting date",
        description: "Calculate when to start seeds",
        icon: "🌱",
        category: "gardening"
      },
      {
        id: "companion-plants",
        name: "Companion planting",
        description: "Find companion plants",
        icon: "🌻",
        category: "gardening"
      },
      {
        id: "yield-estimator",
        name: "Yield estimator",
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
        name: "Beam deflection",
        description: "Calculate beam deflection",
        icon: "📏",
        category: "engineering"
      },
      {
        id: "gear-ratio",
        name: "Gear ratio",
        description: "Calculate gear ratios",
        icon: "⚙️",
        category: "engineering"
      },
      {
        id: "torque",
        name: "Torque calculator",
        description: "Calculate torque and force",
        icon: "🔩",
        category: "engineering"
      },
      {
        id: "wire-gauge",
        name: "Wire gauge",
        description: "Calculate wire size needed",
        icon: "🔌",
        category: "engineering"
      },
      {
        id: "stress-strain",
        name: "Stress & strain",
        description: "Calculate material stress",
        icon: "🏗️",
        category: "engineering"
      },
      {
        id: "flow-rate",
        name: "Flow rate",
        description: "Calculate fluid flow rate",
        icon: "💧",
        category: "engineering"
      },
      {
        id: "heat-transfer",
        name: "Heat transfer",
        description: "Calculate heat transfer rate",
        icon: "🔥",
        category: "engineering"
      },
      {
        id: "spring-constant",
        name: "Spring constant",
        description: "Calculate spring force",
        icon: "🌀",
        category: "engineering"
      },
      {
        id: "belt-length",
        name: "Belt length",
        description: "Calculate pulley belt length",
        icon: "🔗",
        category: "engineering"
      },
      {
        id: "moment-inertia",
        name: "Moment of inertia",
        description: "Calculate moment of inertia",
        icon: "🔄",
        category: "engineering"
      },
      {
        id: "voltage-drop",
        name: "Voltage drop",
        description: "Calculate voltage drop in cables",
        icon: "⚡",
        category: "engineering"
      },
      {
        id: "pipe-sizing",
        name: "Pipe sizing",
        description: "Calculate optimal pipe size",
        icon: "🔧",
        category: "engineering"
      },
      {
        id: "hvac-load",
        name: "HVAC load",
        description: "Calculate heating/cooling load",
        icon: "❄️",
        category: "engineering"
      },
      {
        id: "electrical-load",
        name: "Electrical load",
        description: "Calculate electrical load",
        icon: "⚡",
        category: "engineering"
      },
      {
        id: "compression-ratio",
        name: "Compression ratio",
        description: "Calculate engine compression ratio",
        icon: "🔩",
        category: "engineering"
      },
      {
        id: "hydraulic-pressure",
        name: "Hydraulic pressure",
        description: "Calculate hydraulic system pressure",
        icon: "💧",
        category: "engineering"
      },
      {
        id: "structural-load",
        name: "Structural load",
        description: "Calculate structural loads",
        icon: "🏗️",
        category: "engineering"
      },
      {
        id: "weld-strength",
        name: "Weld strength",
        description: "Calculate weld strength",
        icon: "🔥",
        category: "engineering"
      },
      {
        id: "bearing-load",
        name: "Bearing load",
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
        name: "One-rep max",
        description: "Calculate 1RM weightlifting",
        icon: "🏋️",
        category: "sports"
      },
      {
        id: "swim-pace",
        name: "Swimming pace",
        description: "Calculate swimming pace",
        icon: "🏊",
        category: "sports"
      },
      {
        id: "cycling-power",
        name: "Cycling power",
        description: "Calculate cycling wattage",
        icon: "🚴",
        category: "sports"
      },
      {
        id: "vo2-max",
        name: "VO2 max",
        description: "Calculate aerobic capacity",
        icon: "💨",
        category: "sports"
      },
      {
        id: "race-time",
        name: "Race time predictor",
        description: "Predict race finish times",
        icon: "🏃",
        category: "sports"
      },
      {
        id: "vertical-jump",
        name: "Vertical jump",
        description: "Calculate jump height",
        icon: "🦘",
        category: "sports"
      },
      {
        id: "golf-handicap",
        name: "Golf handicap",
        description: "Calculate golf handicap",
        icon: "⛳",
        category: "sports"
      },
      {
        id: "batting-average",
        name: "Batting average",
        description: "Calculate baseball stats",
        icon: "⚾",
        category: "sports"
      },
      {
        id: "free-throw",
        name: "Free throw %",
        description: "Calculate basketball percentages",
        icon: "🏀",
        category: "sports"
      },
      {
        id: "training-zones",
        name: "Training zones",
        description: "Calculate training intensity zones",
        icon: "📊",
        category: "sports"
      },
      {
        id: "protein-athletes",
        name: "Protein for athletes",
        description: "Calculate athletic protein needs",
        icon: "🥩",
        category: "sports"
      },
      {
        id: "carb-loading",
        name: "Carb loading",
        description: "Calculate carb loading for events",
        icon: "🍝",
        category: "sports"
      },
      {
        id: "hydration-sports",
        name: "Sports hydration",
        description: "Calculate hydration for exercise",
        icon: "💧",
        category: "sports"
      },
      {
        id: "recovery-time",
        name: "Recovery time",
        description: "Calculate workout recovery time",
        icon: "😴",
        category: "sports"
      },
      {
        id: "training-load",
        name: "Training load",
        description: "Calculate training load and fatigue",
        icon: "📈",
        category: "sports"
      },
      {
        id: "speed-calculator",
        name: "Speed calculator",
        description: "Calculate speed from pace",
        icon: "⚡",
        category: "sports"
      },
      {
        id: "splits",
        name: "Distance splits",
        description: "Calculate race splits",
        icon: "⏱️",
        category: "sports"
      },
      {
        id: "power-weight",
        name: "Power-to-weight ratio",
        description: "Calculate power to weight ratio",
        icon: "⚖️",
        category: "sports"
      },
      {
        id: "exercise-calories",
        name: "Exercise calories",
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
        name: "Depth of field",
        description: "Calculate DOF for photos",
        icon: "📸",
        category: "photography"
      },
      {
        id: "exposure",
        name: "Exposure calculator",
        description: "Calculate exposure settings",
        icon: "☀️",
        category: "photography"
      },
      {
        id: "field-of-view",
        name: "Field of view",
        description: "Calculate camera FOV",
        icon: "👁️",
        category: "photography"
      },
      {
        id: "print-size",
        name: "Print size",
        description: "Calculate print dimensions",
        icon: "🖼️",
        category: "photography"
      },
      {
        id: "aspect-ratio",
        name: "Aspect ratio",
        description: "Calculate image aspect ratios",
        icon: "📐",
        category: "photography"
      },
      {
        id: "hyperfocal",
        name: "Hyperfocal distance",
        description: "Calculate hyperfocal distance",
        icon: "🔍",
        category: "photography"
      },
      {
        id: "flash-guide",
        name: "Flash guide number",
        description: "Calculate flash power needed",
        icon: "⚡",
        category: "photography"
      },
      {
        id: "timelapse",
        name: "Timelapse calculator",
        description: "Calculate timelapse settings",
        icon: "⏱️",
        category: "photography"
      },
      {
        id: "megapixels",
        name: "Megapixel calculator",
        description: "Calculate resolution needs",
        icon: "🖥️",
        category: "photography"
      },
      {
        id: "lens-converter",
        name: "Lens crop factor",
        description: "Calculate crop factor equivalents",
        icon: "🔭",
        category: "photography"
      },
      {
        id: "storage",
        name: "Storage calculator",
        description: "Calculate photo storage needs",
        icon: "💾",
        category: "photography"
      },
      {
        id: "sensor-size",
        name: "Sensor size comparison",
        description: "Compare camera sensor sizes",
        icon: "📐",
        category: "photography"
      },
      {
        id: "diffraction",
        name: "Diffraction limit",
        description: "Calculate diffraction limit",
        icon: "🔬",
        category: "photography"
      },
      {
        id: "macro-magnification",
        name: "Macro magnification",
        description: "Calculate macro magnification ratio",
        icon: "🔍",
        category: "photography"
      },
      {
        id: "star-trails",
        name: "Star trails calculator",
        description: "Calculate star trail exposure",
        icon: "⭐",
        category: "photography"
      },
      {
        id: "sunset-time",
        name: "Sunset time",
        description: "Calculate golden hour timing",
        icon: "🌅",
        category: "photography"
      },
      {
        id: "panorama",
        name: "Panorama calculator",
        description: "Calculate panorama shots needed",
        icon: "🏞️",
        category: "photography"
      },
      {
        id: "video-bitrate",
        name: "Video bitrate",
        description: "Calculate video bitrate needs",
        icon: "🎥",
        category: "photography"
      },
      {
        id: "lens-equivalence",
        name: "Lens equivalence",
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
        name: "BPM calculator",
        description: "Calculate beats per minute",
        icon: "🥁",
        category: "music"
      },
      {
        id: "chord-finder",
        name: "Chord finder",
        description: "Find chord progressions",
        icon: "🎸",
        category: "music"
      },
      {
        id: "frequency",
        name: "Frequency calculator",
        description: "Calculate note frequencies",
        icon: "🎹",
        category: "music"
      },
      {
        id: "scale-finder",
        name: "Scale finder",
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
        name: "Interval calculator",
        description: "Calculate musical intervals",
        icon: "🎶",
        category: "music"
      },
      {
        id: "song-key",
        name: "Song key finder",
        description: "Determine song key",
        icon: "🔑",
        category: "music"
      },
      {
        id: "delay-time",
        name: "Delay time calculator",
        description: "Calculate delay/reverb timing",
        icon: "🔊",
        category: "music"
      },
      {
        id: "sample-rate",
        name: "Sample rate calculator",
        description: "Calculate audio sample rates",
        icon: "💿",
        category: "music"
      },
      {
        id: "db-calculator",
        name: "dB calculator",
        description: "Calculate decibel levels",
        icon: "🔉",
        category: "music"
      },
      {
        id: "song-length",
        name: "Song length",
        description: "Calculate song duration from BPM",
        icon: "⏱️",
        category: "music"
      },
      {
        id: "lyrics-per-minute",
        name: "Lyrics per minute calculator",
        description: "Calculate lyric delivery rate",
        icon: "📝",
        category: "music"
      },
      {
        id: "practice-time",
        name: "Practice time",
        description: "Calculate practice hours needed",
        icon: "⏰",
        category: "music"
      },
      {
        id: "recording-time",
        name: "Recording time",
        description: "Calculate recording session time",
        icon: "🎙️",
        category: "music"
      },
      {
        id: "mixing-levels",
        name: "Mixing levels",
        description: "Calculate audio mixing levels",
        icon: "🎚️",
        category: "music"
      },
      {
        id: "mastering",
        name: "Mastering loudness",
        description: "Calculate mastering LUFS",
        icon: "📊",
        category: "music"
      },
      {
        id: "copyright",
        name: "Copyright calculator",
        description: "Calculate copyright duration",
        icon: "©",
        category: "music"
      },
      {
        id: "royalty",
        name: "Royalty calculator",
        description: "Calculate music royalties",
        icon: "💰",
        category: "music"
      },
      {
        id: "setlist",
        name: "Concert setlist",
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
        name: "Carbon footprint",
        description: "Calculate your carbon footprint",
        icon: "🌱",
        category: "environment"
      },
      {
        id: "solar-savings",
        name: "Solar savings",
        description: "Calculate solar panel savings",
        icon: "☀️",
        category: "environment"
      },
      {
        id: "water-usage",
        name: "Water usage",
        description: "Calculate household water usage",
        icon: "💧",
        category: "environment"
      },
      {
        id: "recycling",
        name: "Recycling impact",
        description: "Calculate recycling benefits",
        icon: "♻️",
        category: "environment"
      },
      {
        id: "energy-usage",
        name: "Energy usage",
        description: "Calculate home energy consumption",
        icon: "⚡",
        category: "environment"
      },
      {
        id: "tree-planting",
        name: "Tree planting",
        description: "Calculate tree carbon offset",
        icon: "🌳",
        category: "environment"
      },
      {
        id: "compost-impact",
        name: "Compost impact",
        description: "Calculate composting benefits",
        icon: "🍂",
        category: "environment"
      },
      {
        id: "plastic-waste",
        name: "Plastic waste",
        description: "Calculate plastic waste impact",
        icon: "🥤",
        category: "environment"
      },
      {
        id: "led-savings",
        name: "LED savings",
        description: "Calculate LED bulb savings",
        icon: "💡",
        category: "environment"
      },
      {
        id: "eco-score",
        name: "Eco score",
        description: "Calculate environmental impact score",
        icon: "🌿",
        category: "environment"
      },
      {
        id: "ev-savings",
        name: "Electric vehicle savings",
        description: "Calculate EV environmental savings",
        icon: "🔌",
        category: "environment"
      },
      {
        id: "insulation-savings",
        name: "Insulation savings",
        description: "Calculate insulation energy savings",
        icon: "🏠",
        category: "environment"
      },
      {
        id: "weatherization",
        name: "Weatherization calculator",
        description: "Calculate weatherization benefits",
        icon: "❄️",
        category: "environment"
      },
      {
        id: "rainwater-harvest",
        name: "Rainwater harvesting",
        description: "Calculate rainwater collection potential",
        icon: "💧",
        category: "environment"
      },
      {
        id: "greywater",
        name: "Greywater system",
        description: "Calculate greywater reuse",
        icon: "♻️",
        category: "environment"
      },
      {
        id: "wind-power",
        name: "Wind power calculator",
        description: "Calculate wind energy potential",
        icon: "💨",
        category: "environment"
      },
      {
        id: "geothermal",
        name: "Geothermal savings",
        description: "Calculate geothermal savings",
        icon: "🌡️",
        category: "environment"
      },
      {
        id: "energy-audit",
        name: "Home energy audit",
        description: "Calculate home energy efficiency",
        icon: "🔍",
        category: "environment"
      },
      {
        id: "sustainable-living",
        name: "Sustainable living score",
        description: "Calculate sustainability score",
        icon: "🌱",
        category: "environment"
      }
    ]
  },
  {
    id: "pet-care",
    name: "Pet care",
    description: "Pet health and care calculators",
    icon: "🐾",
    calculators: [
      {
        id: "pet-age",
        name: "Pet age calculator",
        description: "Convert pet age to human years",
        icon: "🐶",
        category: "pet-care"
      },
      {
        id: "pet-food",
        name: "Pet food calculator",
        description: "Calculate daily food portions",
        icon: "🍖",
        category: "pet-care"
      },
      {
        id: "pet-weight",
        name: "Pet weight tracker",
        description: "Track ideal pet weight",
        icon: "⚖️",
        category: "pet-care"
      },
      {
        id: "pet-calorie",
        name: "Pet calorie needs",
        description: "Calculate pet calorie requirements",
        icon: "🥩",
        category: "pet-care"
      },
      {
        id: "pregnancy-pet",
        name: "Pet pregnancy",
        description: "Calculate pet pregnancy timeline",
        icon: "🐱",
        category: "pet-care"
      },
      {
        id: "medication",
        name: "Pet medication",
        description: "Calculate pet medication dosage",
        icon: "💊",
        category: "pet-care"
      },
      {
        id: "aquarium-size",
        name: "Aquarium size",
        description: "Calculate tank size for fish",
        icon: "🐠",
        category: "pet-care"
      },
      {
        id: "pet-cost",
        name: "Pet cost calculator",
        description: "Calculate lifetime pet costs",
        icon: "💰",
        category: "pet-care"
      },
      {
        id: "litter-box",
        name: "Litter box calculator",
        description: "Calculate litter needs",
        icon: "🪣",
        category: "pet-care"
      },
      {
        id: "vaccination",
        name: "Vaccination schedule",
        description: "Track pet vaccination dates",
        icon: "💉",
        category: "pet-care"
      },
      {
        id: "breed-size",
        name: "Breed size estimator",
        description: "Estimate adult pet size",
        icon: "📏",
        category: "pet-care"
      },
      {
        id: "pet-insurance",
        name: "Pet insurance calculator",
        description: "Calculate pet insurance costs",
        icon: "🛡️",
        category: "pet-care"
      },
      {
        id: "grooming",
        name: "Grooming schedule",
        description: "Plan pet grooming schedule",
        icon: "✂️",
        category: "pet-care"
      },
      {
        id: "exercise-needs",
        name: "Pet exercise needs",
        description: "Calculate pet exercise requirements",
        icon: "🏃",
        category: "pet-care"
      },
      {
        id: "travel-pets",
        name: "Travel with pets",
        description: "Calculate pet travel needs",
        icon: "✈️",
        category: "pet-care"
      },
      {
        id: "adoption-cost",
        name: "Pet adoption cost",
        description: "Calculate adoption expenses",
        icon: "🏠",
        category: "pet-care"
      },
      {
        id: "boarding",
        name: "Pet boarding cost",
        description: "Calculate boarding costs",
        icon: "🏨",
        category: "pet-care"
      },
      {
        id: "training-time",
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