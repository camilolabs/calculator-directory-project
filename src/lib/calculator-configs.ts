// Calculator configurations for all 100 calculatorscamilolabs/calculator-directory-project

// Unit conversion helpercamilolabs/calculator-directory-projectcamilolabs/calculator-directory-projectcamilolabs/calculator-directory-project
const convertToInches = (value: string, unit: string): number => {
  const val = parseFloat(value) || 0;
  switch (unit) {
    case "cm": return val / 2.54;
    case "m": return val / 0.0254;
    case "in":
    default: return val;
  }
};

const convertToMeters = (value: string, unit: string): number => {
  const val = parseFloat(value) || 0;
  switch (unit) {
    case "in": return val * 0.0254;
    case "cm": return val / 100;
    case "m":
    default: return val;
  }
};

const convertToFeet = (value: string, unit: string): number => {
  const val = parseFloat(value) || 0;
  switch (unit) {
    case "in": return val / 12;
    case "cm": return val / 30.48;
    case "m": return val / 0.3048;
    default: return val;
  }
};

export const calculatorConfigs: Record<string, any> = {
  // FINANCE CALCULATORS
  loan: {
    fields: [
      { id: "principal", label: "Loan Amount ($)", type: "number", placeholder: "50000", min: 0 },
      { id: "rate", label: "Annual Interest Rate (%)", type: "number", placeholder: "5.5", min: 0, step: 0.1 },
      { id: "years", label: "Loan Term (years)", type: "number", placeholder: "30", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const P = parseFloat(values.principal) || 0;
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      const n = (parseFloat(values.years) || 0) * 12;
      const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = M * n;
      const totalInterest = totalPayment - P;
      return [
        { label: "Monthly Payment", value: `$${M.toFixed(2)}` },
        { label: "Total Payment", value: `$${totalPayment.toFixed(2)}` },
        { label: "Total Interest", value: `$${totalInterest.toFixed(2)}` },
      ];
    },
  },

  mortgage: {
    fields: [
      { id: "price", label: "Home Price ($)", type: "number", placeholder: "300000", min: 0 },
      { id: "down", label: "Down Payment ($)", type: "number", placeholder: "60000", min: 0 },
      { id: "rate", label: "Interest Rate (%)", type: "number", placeholder: "4.5", step: 0.1 },
      { id: "years", label: "Loan Term (years)", type: "number", placeholder: "30", min: 1 },
      { id: "tax", label: "Annual Property Tax ($)", type: "number", placeholder: "3000", min: 0 },
      { id: "insurance", label: "Annual Insurance ($)", type: "number", placeholder: "1200", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const P = (parseFloat(values.price) || 0) - (parseFloat(values.down) || 0);
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      const n = (parseFloat(values.years) || 0) * 12;
      const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const monthlyTax = (parseFloat(values.tax) || 0) / 12;
      const monthlyInsurance = (parseFloat(values.insurance) || 0) / 12;
      const totalMonthly = M + monthlyTax + monthlyInsurance;
      return [
        { label: "Principal & Interest", value: `$${M.toFixed(2)}` },
        { label: "Property Tax (monthly)", value: `$${monthlyTax.toFixed(2)}` },
        { label: "Insurance (monthly)", value: `$${monthlyInsurance.toFixed(2)}` },
        { label: "Total Monthly Payment", value: `$${totalMonthly.toFixed(2)}` },
      ];
    },
  },

  investment: {
    fields: [
      { id: "initial", label: "Initial Investment ($)", type: "number", placeholder: "10000", min: 0 },
      { id: "monthly", label: "Monthly Contribution ($)", type: "number", placeholder: "500", min: 0 },
      { id: "rate", label: "Expected Return Rate (%)", type: "number", placeholder: "7", step: 0.1 },
      { id: "years", label: "Investment Period (years)", type: "number", placeholder: "20", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const P = parseFloat(values.initial) || 0;
      const PMT = parseFloat(values.monthly) || 0;
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      const n = (parseFloat(values.years) || 0) * 12;
      const FV = P * Math.pow(1 + r, n) + PMT * ((Math.pow(1 + r, n) - 1) / r);
      const totalContributions = P + PMT * n;
      const totalGain = FV - totalContributions;
      return [
        { label: "Future Value", value: `$${FV.toFixed(2)}` },
        { label: "Total Contributions", value: `$${totalContributions.toFixed(2)}` },
        { label: "Total Gain", value: `$${totalGain.toFixed(2)}` },
      ];
    },
  },

  retirement: {
    fields: [
      { id: "age", label: "Current Age", type: "number", placeholder: "30", min: 18, max: 100 },
      { id: "retireAge", label: "Retirement Age", type: "number", placeholder: "65", min: 18, max: 100 },
      { id: "current", label: "Current Savings ($)", type: "number", placeholder: "50000", min: 0 },
      { id: "monthly", label: "Monthly Contribution ($)", type: "number", placeholder: "1000", min: 0 },
      { id: "rate", label: "Expected Return (%)", type: "number", placeholder: "7", step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const years = (parseFloat(values.retireAge) || 65) - (parseFloat(values.age) || 30);
      const P = parseFloat(values.current) || 0;
      const PMT = parseFloat(values.monthly) || 0;
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      const n = years * 12;
      const FV = P * Math.pow(1 + r, n) + PMT * ((Math.pow(1 + r, n) - 1) / r);
      return [
        { label: "Retirement Savings", value: `$${FV.toFixed(2)}` },
        { label: "Years Until Retirement", value: years },
        { label: "Total Contributions", value: `$${(P + PMT * n).toFixed(2)}` },
      ];
    },
  },

  "compound-interest": {
    fields: [
      { id: "principal", label: "Initial Amount ($)", type: "number", placeholder: "5000", min: 0 },
      { id: "rate", label: "Annual Interest Rate (%)", type: "number", placeholder: "5", step: 0.1 },
      { id: "years", label: "Time Period (years)", type: "number", placeholder: "10", min: 1 },
      {
        id: "compound", label: "Compound Frequency", type: "select", options: [
          { value: "1", label: "Annually" },
          { value: "2", label: "Semi-annually" },
          { value: "4", label: "Quarterly" },
          { value: "12", label: "Monthly" },
          { value: "365", label: "Daily" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const P = parseFloat(values.principal) || 0;
      const r = (parseFloat(values.rate) || 0) / 100;
      const t = parseFloat(values.years) || 0;
      const n = parseFloat(values.compound) || 1;
      const A = P * Math.pow(1 + r / n, n * t);
      const interest = A - P;
      return [
        { label: "Final Amount", value: `$${A.toFixed(2)}` },
        { label: "Interest Earned", value: `$${interest.toFixed(2)}` },
        { label: "Total Return", value: `${((interest / P) * 100).toFixed(2)}%` },
      ];
    },
  },

  roi: {
    fields: [
      { id: "initial", label: "Initial Investment ($)", type: "number", placeholder: "10000", min: 0 },
      { id: "final", label: "Final Value ($)", type: "number", placeholder: "15000", min: 0 },
      { id: "years", label: "Time Period (years)", type: "number", placeholder: "3", min: 0.1, step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const initial = parseFloat(values.initial) || 0;
      const final = parseFloat(values.final) || 0;
      const years = parseFloat(values.years) || 1;
      const roi = ((final - initial) / initial) * 100;
      const annualizedROI = (Math.pow(final / initial, 1 / years) - 1) * 100;
      const gain = final - initial;
      return [
        { label: "Total ROI", value: `${roi.toFixed(2)}%` },
        { label: "Annualized ROI", value: `${annualizedROI.toFixed(2)}%` },
        { label: "Total Gain/Loss", value: `$${gain.toFixed(2)}` },
      ];
    },
  },

  savings: {
    fields: [
      { id: "goal", label: "Savings Goal ($)", type: "number", placeholder: "50000", min: 0 },
      { id: "current", label: "Current Savings ($)", type: "number", placeholder: "5000", min: 0 },
      { id: "monthly", label: "Monthly Contribution ($)", type: "number", placeholder: "500", min: 0 },
      { id: "rate", label: "Interest Rate (%)", type: "number", placeholder: "3", step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const goal = parseFloat(values.goal) || 0;
      const current = parseFloat(values.current) || 0;
      const monthly = parseFloat(values.monthly) || 0;
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      let months = 0;
      let balance = current;
      while (balance < goal && months < 1000) {
        balance = balance * (1 + r) + monthly;
        months++;
      }
      const years = months / 12;
      const totalContributions = current + monthly * months;
      return [
        { label: "Time to Reach Goal", value: `${years.toFixed(1)} years` },
        { label: "Months", value: months },
        { label: "Total Contributions", value: `$${totalContributions.toFixed(2)}` },
      ];
    },
  },

  tax: {
    fields: [
      { id: "income", label: "Annual Income ($)", type: "number", placeholder: "75000", min: 0 },
      {
        id: "status", label: "Filing Status", type: "select", options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married Filing Jointly" },
          { value: "head", label: "Head of Household" },
        ]
      },
      { id: "deductions", label: "Deductions ($)", type: "number", placeholder: "12000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const income = parseFloat(values.income) || 0;
      const deductions = parseFloat(values.deductions) || 0;
      const taxableIncome = Math.max(0, income - deductions);
      // Simplified tax calculation (2023 brackets for single filer)
      let tax = 0;
      if (taxableIncome <= 11000) {
        tax = taxableIncome * 0.10;
      } else if (taxableIncome <= 44725) {
        tax = 1100 + (taxableIncome - 11000) * 0.12;
      } else if (taxableIncome <= 95375) {
        tax = 5147 + (taxableIncome - 44725) * 0.22;
      } else {
        tax = 16290 + (taxableIncome - 95375) * 0.24;
      }
      const effectiveRate = (tax / income) * 100;
      return [
        { label: "Taxable Income", value: `$${taxableIncome.toFixed(2)}` },
        { label: "Estimated Tax", value: `$${tax.toFixed(2)}` },
        { label: "Effective Tax Rate", value: `${effectiveRate.toFixed(2)}%` },
        { label: "After-Tax Income", value: `$${(income - tax).toFixed(2)}` },
      ];
    },
  },

  budget: {
    fields: [
      { id: "income", label: "Monthly Income ($)", type: "number", placeholder: "5000", min: 0 },
      { id: "housing", label: "Housing ($)", type: "number", placeholder: "1500", min: 0 },
      { id: "utilities", label: "Utilities ($)", type: "number", placeholder: "200", min: 0 },
      { id: "food", label: "Food ($)", type: "number", placeholder: "500", min: 0 },
      { id: "transport", label: "Transportation ($)", type: "number", placeholder: "400", min: 0 },
      { id: "other", label: "Other Expenses ($)", type: "number", placeholder: "800", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const income = parseFloat(values.income) || 0;
      const expenses = (parseFloat(values.housing) || 0) +
        (parseFloat(values.utilities) || 0) +
        (parseFloat(values.food) || 0) +
        (parseFloat(values.transport) || 0) +
        (parseFloat(values.other) || 0);
      const remaining = income - expenses;
      const savingsRate = (remaining / income) * 100;
      return [
        { label: "Total Expenses", value: `$${expenses.toFixed(2)}` },
        { label: "Remaining", value: `$${remaining.toFixed(2)}` },
        { label: "Savings Rate", value: `${savingsRate.toFixed(1)}%` },
        { label: "Status", value: remaining >= 0 ? "On Budget ✓" : "Over Budget ✗" },
      ];
    },
  },

  currency: {
    fields: [
      { id: "amount", label: "Amount", type: "number", placeholder: "100", min: 0 },
      {
        id: "from", label: "From Currency", type: "select", options: [
          { value: "USD", label: "USD - US Dollar" },
          { value: "EUR", label: "EUR - Euro" },
          { value: "GBP", label: "GBP - British Pound" },
          { value: "JPY", label: "JPY - Japanese Yen" },
          { value: "CAD", label: "CAD - Canadian Dollar" },
        ]
      },
      {
        id: "to", label: "To Currency", type: "select", options: [
          { value: "USD", label: "USD - US Dollar" },
          { value: "EUR", label: "EUR - Euro" },
          { value: "GBP", label: "GBP - British Pound" },
          { value: "JPY", label: "JPY - Japanese Yen" },
          { value: "CAD", label: "CAD - Canadian Dollar" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const amount = parseFloat(values.amount) || 0;
      // Simplified rates (USD as base)
      const rates: Record<string, number> = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 149.5,
        CAD: 1.36,
      };
      const from = values.from || "USD";
      const to = values.to || "EUR";
      const result = (amount / rates[from]) * rates[to];
      return [
        { label: "Converted Amount", value: `${result.toFixed(2)} ${to}` },
        { label: "Exchange Rate", value: `1 ${from} = ${(rates[to] / rates[from]).toFixed(4)} ${to}` },
      ];
    },
  },

  // Added: Finance calculators with real configurations
  apr: {
    fields: [
      { id: "rate", label: "Nominal Rate (%)", type: "number", placeholder: "12", step: 0.01, min: 0 },
      {
        id: "freq", label: "Compounds per Year", type: "select", options: [
          { value: "12", label: "12 - Monthly" },
          { value: "4", label: "4 - Quarterly" },
          { value: "2", label: "2 - Semi-Annual" },
          { value: "1", label: "1 - Annual" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const r = (parseFloat(values.rate) || 0) / 100;
      const n = parseInt(values.freq || "12", 10) || 12;
      const ear = Math.pow(1 + r / n, n) - 1; // Effective Annual Rate
      return [
        { label: "Effective Annual Rate (APR)", value: `${(ear * 100).toFixed(2)}%` },
      ];
    },
  },

  amortization: {
    fields: [
      { id: "principal", label: "Loan Amount ($)", type: "number", placeholder: "250000", min: 0 },
      { id: "rate", label: "Annual Interest Rate (%)", type: "number", placeholder: "5", step: 0.01, min: 0 },
      { id: "years", label: "Term (years)", type: "number", placeholder: "30", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const P = parseFloat(values.principal) || 0;
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      const n = (parseFloat(values.years) || 0) * 12;
      if (r === 0 || n === 0) {
        const payment = n > 0 ? P / n : 0;
        return [
          { label: "Monthly Payment", value: `$${payment.toFixed(2)}` },
          { label: "Total Payment", value: `$${(payment * n).toFixed(2)}` },
          { label: "Total Interest", value: `$${(payment * n - P).toFixed(2)}` },
        ];
      }
      const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = M * n;
      const totalInterest = totalPayment - P;
      return [
        { label: "Monthly Payment", value: `$${M.toFixed(2)}` },
        { label: "Total Payment", value: `$${totalPayment.toFixed(2)}` },
        { label: "Total Interest", value: `$${totalInterest.toFixed(2)}` },
      ];
    },
  },

  tip: {
    fields: [
      { id: "bill", label: "Bill ($)", type: "number", placeholder: "100", min: 0 },
      { id: "tip", label: "Tip %", type: "number", placeholder: "15", min: 0, max: 100 },
      { id: "people", label: "People", type: "number", placeholder: "2", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const bill = parseFloat(values.bill) || 0;
      const tipPct = (parseFloat(values.tip) || 0) / 100;
      const people = Math.max(1, parseInt(values.people || "1", 10));
      const tipAmount = bill * tipPct;
      const total = bill + tipAmount;
      return [
        { label: "Tip", value: `$${tipAmount.toFixed(2)}` },
        { label: "Total", value: `$${total.toFixed(2)}` },
        { label: "Per Person", value: `$${(total / people).toFixed(2)}` },
      ];
    },
  },

  inflation: {
    fields: [
      { id: "amount", label: "Current Price ($)", type: "number", placeholder: "100", min: 0 },
      { id: "rate", label: "Inflation Rate (%)", type: "number", placeholder: "3", step: 0.01, min: 0 },
      { id: "years", label: "Years", type: "number", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const A = parseFloat(values.amount) || 0;
      const r = (parseFloat(values.rate) || 0) / 100;
      const t = parseFloat(values.years) || 0;
      const future = A * Math.pow(1 + r, t);
      const change = future - A;
      const pct = A > 0 ? (change / A) * 100 : 0;
      return [
        { label: "Future Price", value: `$${future.toFixed(2)}` },
        { label: "Increase", value: `$${change.toFixed(2)}` },
        { label: "Total Inflation", value: `${pct.toFixed(2)}%` },
      ];
    },
  },

  "net-worth": {
    fields: [
      { id: "assets", label: "Total Assets ($)", type: "number", placeholder: "250000", min: 0 },
      { id: "liabilities", label: "Total Liabilities ($)", type: "number", placeholder: "150000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const assets = parseFloat(values.assets) || 0;
      const liabilities = parseFloat(values.liabilities) || 0;
      const net = assets - liabilities;
      const debtRatio = assets > 0 ? (liabilities / assets) * 100 : 0;
      return [
        { label: "Net Worth", value: `$${net.toFixed(2)}` },
        { label: "Debt-to-Asset Ratio", value: `${debtRatio.toFixed(2)}%` },
      ];
    },
  },

  "emergency-fund": {
    fields: [
      { id: "monthly", label: "Monthly Expenses ($)", type: "number", placeholder: "3000", min: 0 },
      { id: "months", label: "Months of Coverage", type: "number", placeholder: "6", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const monthly = parseFloat(values.monthly) || 0;
      const months = Math.max(1, parseFloat(values.months) || 1);
      const fund = monthly * months;
      return [
        { label: "Recommended Emergency Fund", value: `$${fund.toFixed(2)}` },
      ];
    },
  },

  // HEALTH CALCULATORS
  bmi: {
    fields: [
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "height", label: "Height", type: "unit", placeholder: "65", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const height = convertToInches(values.height, values.height_unit || "in");
      const bmi = (weight / (height * height)) * 703;
      let category = "";
      if (bmi < 18.5) category = "Underweight";
      else if (bmi < 25) category = "Normal weight";
      else if (bmi < 30) category = "Overweight";
      else category = "Obese";
      return [
        { label: "BMI", value: bmi.toFixed(1) },
        { label: "Category", value: category },
        { label: "Height Used", value: `${height.toFixed(1)} inches` },
      ];
    },
  },

  calorie: {
    fields: [
      { id: "age", label: "Age", type: "number", placeholder: "30", min: 1 },
      {
        id: "gender", label: "Gender", type: "select", options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]
      },
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "height", label: "Height", type: "unit", placeholder: "65", min: 0 },
      {
        id: "activity", label: "Activity Level", type: "select", options: [
          { value: "1.2", label: "Sedentary" },
          { value: "1.375", label: "Light Activity" },
          { value: "1.55", label: "Moderate Activity" },
          { value: "1.725", label: "Very Active" },
          { value: "1.9", label: "Extremely Active" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) * 0.453592; // to kg
      const heightInches = convertToInches(values.height, values.height_unit || "in");
      const height = heightInches * 2.54; // to cm
      const age = parseFloat(values.age) || 0;
      const gender = values.gender;
      const activity = parseFloat(values.activity) || 1.2;

      let bmr = 0;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const tdee = bmr * activity;

      return [
        { label: "BMR (Basal Metabolic Rate)", value: `${bmr.toFixed(0)} cal/day` },
        { label: "TDEE (Maintenance)", value: `${tdee.toFixed(0)} cal/day` },
        { label: "Weight Loss (-500 cal)", value: `${(tdee - 500).toFixed(0)} cal/day` },
        { label: "Weight Gain (+500 cal)", value: `${(tdee + 500).toFixed(0)} cal/day` },
      ];
    },
  },

  "body-fat": {
    fields: [
      {
        id: "gender", label: "Gender", type: "select", options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]
      },
      { id: "age", label: "Age", type: "number", placeholder: "30", min: 1 },
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "height", label: "Height", type: "unit", placeholder: "65", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const height = convertToInches(values.height, values.height_unit || "in");
      const age = parseFloat(values.age) || 0;
      const gender = values.gender;
      const bmi = (weight / (height * height)) * 703;

      let bodyFat = 0;
      if (gender === "male") {
        bodyFat = 1.20 * bmi + 0.23 * age - 16.2;
      } else {
        bodyFat = 1.20 * bmi + 0.23 * age - 5.4;
      }

      const fatMass = (bodyFat / 100) * weight;
      const leanMass = weight - fatMass;

      return [
        { label: "Body Fat Percentage", value: `${bodyFat.toFixed(1)}%` },
        { label: "Fat Mass", value: `${fatMass.toFixed(1)} lbs` },
        { label: "Lean Mass", value: `${leanMass.toFixed(1)} lbs` },
      ];
    },
  },

  protein: {
    fields: [
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      {
        id: "activity", label: "Activity Level", type: "select", options: [
          { value: "0.8", label: "Sedentary" },
          { value: "1.2", label: "Lightly Active" },
          { value: "1.6", label: "Moderately Active" },
          { value: "2.0", label: "Very Active (Athlete)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) * 0.453592; // to kg
      const factor = parseFloat(values.activity) || 0.8;
      const proteinGrams = weight * factor;
      const proteinCals = proteinGrams * 4;

      return [
        { label: "Daily Protein", value: `${proteinGrams.toFixed(0)}g` },
        { label: "Calories from Protein", value: `${proteinCals.toFixed(0)} cal` },
        { label: "Per Meal (4 meals)", value: `${(proteinGrams / 4).toFixed(0)}g` },
      ];
    },
  },

  water: {
    fields: [
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "activity", label: "Activity Minutes/Day", type: "number", placeholder: "30", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const activity = parseFloat(values.activity) || 0;
      const baseWater = weight * 0.5; // oz
      const activityWater = activity * 12 / 30; // extra oz per 30 min
      const totalOz = baseWater + activityWater;
      const liters = totalOz * 0.0295735;
      const cups = totalOz / 8;

      return [
        { label: "Daily Water Intake", value: `${totalOz.toFixed(0)} oz` },
        { label: "In Liters", value: `${liters.toFixed(1)} L` },
        { label: "In Cups (8 oz)", value: `${cups.toFixed(1)} cups` },
      ];
    },
  },

  hydration: {
    fields: [
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "activity", label: "Activity Minutes/Day", type: "number", placeholder: "30", min: 0 },
      {
        id: "climate", label: "Climate", type: "select", options: [
          { value: "1", label: "Temperate" },
          { value: "1.1", label: "Warm" },
          { value: "1.2", label: "Hot" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const activity = parseFloat(values.activity) || 0;
      const climateFactor = parseFloat(values.climate) || 1;
      const baseOz = weight * 0.5;
      const extraOz = (activity / 30) * 12;
      const totalOz = (baseOz + extraOz) * climateFactor;
      const liters = totalOz * 0.0295735;
      return [
        { label: "Daily Hydration Goal", value: `${totalOz.toFixed(0)} oz (${liters.toFixed(2)} L)` },
        { label: "Baseline (weight)", value: `${baseOz.toFixed(0)} oz` },
        { label: "Extra (activity)", value: `${extraOz.toFixed(0)} oz` },
        { label: "Climate Factor", value: `${climateFactor}x` },
      ];
    },
  },

  bmr: {
    fields: [
      { id: "age", label: "Age", type: "number", placeholder: "30", min: 1 },
      {
        id: "gender", label: "Gender", type: "select", options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]
      },
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "height", label: "Height", type: "unit", placeholder: "65", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const weightKg = (parseFloat(values.weight) || 0) * 0.453592;
      const heightInches = convertToInches(values.height, values.height_unit || "in");
      const heightCm = heightInches * 2.54;
      const age = parseFloat(values.age) || 0;
      const gender = values.gender;
      let bmr = 0;
      if (gender === "male") {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
      } else {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
      }
      return [
        { label: "BMR (Mifflin-St Jeor)", value: `${bmr.toFixed(0)} cal/day` },
      ];
    },
  },

  carbs: {
    fields: [
      { id: "calories", label: "Daily Calories", type: "number", placeholder: "2000", min: 0 },
      { id: "carbs", label: "Carbs %", type: "number", placeholder: "50", min: 0, max: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const calories = parseFloat(values.calories) || 0;
      const carbsPct = Math.min(100, Math.max(0, parseFloat(values.carbs) || 0));
      const carbsCals = calories * (carbsPct / 100);
      const carbsGrams = carbsCals / 4;
      return [
        { label: "Carbs Target", value: `${carbsGrams.toFixed(0)} g (${carbsCals.toFixed(0)} cal)` },
      ];
    },
  },

  steps: {
    fields: [
      { id: "steps", label: "Steps", type: "number", placeholder: "10000", min: 0 },
      { id: "stride", label: "Stride Length", type: "unit", placeholder: "30", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const steps = Math.max(0, parseFloat(values.steps) || 0);
      const strideInches = convertToInches(values.stride, values.stride_unit || "in");
      const distanceInches = steps * strideInches;
      const miles = distanceInches / (12 * 5280);
      const km = miles * 1.60934;
      return [
        { label: "Distance", value: `${miles.toFixed(2)} mi (${km.toFixed(2)} km)` },
        { label: "Stride Used", value: `${strideInches.toFixed(1)} inches` },
      ];
    },
  },

  "waist-hip": {
    fields: [
      {
        id: "gender", label: "Gender", type: "select", options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]
      },
      { id: "waist", label: "Waist Circumference", type: "unit", placeholder: "34", min: 0 },
      { id: "hip", label: "Hip Circumference", type: "unit", placeholder: "40", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const waistInches = convertToInches(values.waist, values.waist_unit || "in");
      const hipInches = convertToInches(values.hip, values.hip_unit || "in");
      if (hipInches <= 0) {
        return [{ label: "Error", value: "Hip must be greater than 0" }];
      }
      const ratio = waistInches / hipInches;
      const gender = values.gender;
      let risk = "Low";
      if (gender === "male") {
        if (ratio >= 1.0) risk = "High";
        else if (ratio >= 0.9) risk = "Moderate";
      } else {
        if (ratio >= 0.9) risk = "High";
        else if (ratio >= 0.85) risk = "Moderate";
      }
      return [
        { label: "Waist-to-Hip Ratio", value: ratio.toFixed(2) },
        { label: "Risk Category", value: risk },
        { label: "Waist Used", value: `${waistInches.toFixed(1)} inches` },
        { label: "Hip Used", value: `${hipInches.toFixed(1)} inches` },
      ];
    },
  },

  // MATH CALCULATORS
  prime: {
    fields: [
      { id: "n", label: "Number", type: "number", placeholder: "97", min: 0 }
    ],
    calculate: (values: Record<string, string>) => {
      const n = Math.floor(parseFloat(values.n) || 0);
      const isPrime = (() => {
        if (n < 2) return false;
        if (n % 2 === 0) return n === 2;
        const limit = Math.floor(Math.sqrt(n));
        for (let i = 3; i <= limit; i += 2) {
          if (n % i === 0) return false;
        }
        return true;
      })();
      return [
        { label: "Is Prime?", value: isPrime ? "Yes" : "No" },
        { label: "Checked Number", value: n }
      ];
    }
  },

  logarithm: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", min: 0 },
      { id: "base", label: "Base", type: "number", placeholder: "10", min: 2 }
    ],
    calculate: (values: Record<string, string>) => {
      const x = parseFloat(values.value) || 0;
      const b = parseFloat(values.base) || 10;
      if (x <= 0 || b <= 0 || b === 1) {
        return [{ label: "Error", value: "Value>0, base>0 and ≠1" }];
      }
      const result = Math.log(x) / Math.log(b);
      return [
        { label: `log_${b}(${x})`, value: result.toFixed(6) },
        { label: "Natural log (ln)", value: Math.log(x).toFixed(6) },
      ];
    }
  },

  "scientific-notation": {
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "123456", step: 0.000001 }
    ],
    calculate: (values: Record<string, string>) => {
      const x = parseFloat(values.number) || 0;
      if (x === 0) return [{ label: "Scientific Notation", value: "0 × 10^0" }];
      const sign = x < 0 ? -1 : 1;
      const ax = Math.abs(x);
      const exp = Math.floor(Math.log10(ax));
      const mantissa = (ax / Math.pow(10, exp)) * sign;
      return [
        { label: "Mantissa", value: mantissa.toFixed(6) },
        { label: "Exponent", value: exp },
        { label: "Notation", value: `${mantissa.toFixed(6)} × 10^${exp}` }
      ];
    }
  },

  quadratic: {
    fields: [
      { id: "a", label: "a", type: "number", placeholder: "1" },
      { id: "b", label: "b", type: "number", placeholder: "-3" },
      { id: "c", label: "c", type: "number", placeholder: "2" }
    ],
    calculate: (values: Record<string, string>) => {
      const a = parseFloat(values.a) || 0;
      const b = parseFloat(values.b) || 0;
      const c = parseFloat(values.c) || 0;
      if (a === 0) return [{ label: "Error", value: "a must be non-zero" }];
      const disc = b * b - 4 * a * c;
      if (disc < 0) {
        const real = (-b / (2 * a)).toFixed(4);
        const imag = (Math.sqrt(-disc) / (2 * a)).toFixed(4);
        return [
          { label: "Root 1", value: `${real} + ${imag}i` },
          { label: "Root 2", value: `${real} - ${imag}i` },
          { label: "Discriminant", value: disc.toFixed(4) }
        ];
      }
      const x1 = (-b + Math.sqrt(disc)) / (2 * a);
      const x2 = (-b - Math.sqrt(disc)) / (2 * a);
      return [
        { label: "Root 1", value: x1.toFixed(6) },
        { label: "Root 2", value: x2.toFixed(6) },
        { label: "Discriminant", value: disc.toFixed(4) }
      ];
    }
  },

  permutation: {
    fields: [
      { id: "n", label: "n (total)", type: "number", placeholder: "6", min: 0 },
      { id: "r", label: "r (choose)", type: "number", placeholder: "2", min: 0 }
    ],
    calculate: (values: Record<string, string>) => {
      const n = Math.floor(parseFloat(values.n) || 0);
      const r = Math.floor(parseFloat(values.r) || 0);
      if (n < 0 || r < 0 || r > n) return [{ label: "Error", value: "Ensure 0≤r≤n" }];
      const fact = (k: number) => {
        let f = 1;
        for (let i = 2; i <= k; i++) f *= i;
        return f;
      };
      const nPr = fact(n) / fact(n - r);
      const nCr = nPr / fact(r);
      return [
        { label: "Permutations (nPr)", value: nPr.toLocaleString() },
        { label: "Combinations (nCr)", value: nCr.toLocaleString() }
      ];
    }
  },

  "standard-deviation": {
    fields: [
      { id: "values", label: "Values (comma-separated)", type: "text", placeholder: "10, 12, 8, 11, 9" }
    ],
    calculate: (values: Record<string, string>) => {
      const arr = (values.values || "")
        .split(/[,\s]+/)
        .map((v) => parseFloat(v))
        .filter((v) => !isNaN(v));
      if (arr.length === 0) return [{ label: "Error", value: "Enter numeric values" }];
      const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
      const variance = arr.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / arr.length;
      const sd = Math.sqrt(variance);
      return [
        { label: "Mean", value: mean.toFixed(4) },
        { label: "Variance", value: variance.toFixed(4) },
        { label: "Std Dev", value: sd.toFixed(4) }
      ];
    }
  },

  probability: {
    fields: [
      { id: "trials", label: "Trials (n)", type: "number", placeholder: "10", min: 0 },
      { id: "successes", label: "Successes (k)", type: "number", placeholder: "3", min: 0 },
      { id: "p", label: "Success Probability (p)", type: "number", placeholder: "0.5", step: 0.01, min: 0, max: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const n = Math.floor(parseFloat(values.trials) || 0);
      const k = Math.floor(parseFloat(values.successes) || 0);
      const p = Math.min(1, Math.max(0, parseFloat(values.p) || 0));
      if (k > n) return [{ label: "Error", value: "k must be ≤ n" }];
      const fact = (x: number) => {
        let f = 1;
        for (let i = 2; i <= x; i++) f *= i;
        return f;
      };
      const comb = fact(n) / (fact(k) * fact(n - k));
      const prob = comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
      return [
        { label: "Binomial Probability", value: prob.toPrecision(6) },
        { label: "Combinations (nCk)", value: comb.toLocaleString() }
      ];
    }
  },

  "area-perimeter": {
    fields: [
      {
        id: "shape", label: "Shape", type: "select", options: [
          { value: "rectangle", label: "Rectangle" },
          { value: "circle", label: "Circle" },
          { value: "triangle", label: "Right Triangle" },
        ]
      },
      { id: "a", label: "A / Length / Radius", type: "number", placeholder: "10", min: 0 },
      { id: "b", label: "B / Width", type: "number", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const shape = values.shape || "rectangle";
      const a = parseFloat(values.a) || 0;
      const b = parseFloat(values.b) || 0;
      if (shape === "rectangle") {
        return [
          { label: "Area", value: (a * b).toFixed(2) },
          { label: "Perimeter", value: (2 * (a + b)).toFixed(2) },
        ];
      } else if (shape === "circle") {
        const area = Math.PI * a * a;
        const circumference = 2 * Math.PI * a;
        return [
          { label: "Area", value: area.toFixed(2) },
          { label: "Circumference", value: circumference.toFixed(2) },
        ];
      } else {
        const area = (a * b) / 2;
        const hyp = Math.sqrt(a * a + b * b);
        return [
          { label: "Area", value: area.toFixed(2) },
          { label: "Perimeter", value: (a + b + hyp).toFixed(2) },
        ];
      }
    }
  },

  slope: {
    fields: [
      { id: "x1", label: "x1", type: "number", placeholder: "1" },
      { id: "y1", label: "y1", type: "number", placeholder: "2" },
      { id: "x2", label: "x2", type: "number", placeholder: "4" },
      { id: "y2", label: "y2", type: "number", placeholder: "8" },
    ],
    calculate: (values: Record<string, string>) => {
      const x1 = parseFloat(values.x1) || 0;
      const y1 = parseFloat(values.y1) || 0;
      const x2 = parseFloat(values.x2) || 0;
      const y2 = parseFloat(values.y2) || 0;
      if (x2 === x1) return [{ label: "Slope", value: "undefined (vertical line)" }];
      const m = (y2 - y1) / (x2 - x1);
      const b = y1 - m * x1;
      return [
        { label: "Slope (m)", value: m.toFixed(6) },
        { label: "Intercept (b)", value: b.toFixed(6) },
        { label: "Equation", value: `y = ${m.toFixed(3)}x + ${b.toFixed(3)}` },
      ];
    }
  },

  // SCIENCE CALCULATORS
  gravity: {
    fields: [
      { id: "m1", label: "Mass 1 (kg)", type: "number", placeholder: "1000", min: 0 },
      { id: "m2", label: "Mass 2 (kg)", type: "number", placeholder: "500", min: 0 },
      { id: "r", label: "Distance (m)", type: "number", placeholder: "10", min: 0.0001, step: 0.0001 },
    ],
    calculate: (values: Record<string, string>) => {
      const G = 6.67430e-11;
      const m1 = parseFloat(values.m1) || 0;
      const m2 = parseFloat(values.m2) || 0;
      const r = parseFloat(values.r) || 0;
      if (r <= 0) return [{ label: "Error", value: "Distance must be > 0" }];
      const F = (G * m1 * m2) / (r * r);
      return [
        { label: "Gravitational Force", value: `${F.toExponential(6)} N` }
      ];
    }
  },

  momentum: {
    fields: [
      { id: "mass", label: "Mass (kg)", type: "number", placeholder: "70", min: 0 },
      { id: "velocity", label: "Velocity (m/s)", type: "number", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const m = parseFloat(values.mass) || 0;
      const v = parseFloat(values.velocity) || 0;
      const p = m * v;
      return [{ label: "Momentum", value: `${p.toFixed(3)} kg·m/s` }];
    }
  },

  power: {
    fields: [
      { id: "work", label: "Work (J)", type: "number", placeholder: "500", min: 0 },
      { id: "time", label: "Time (s)", type: "number", placeholder: "10", min: 0.0001, step: 0.0001 },
    ],
    calculate: (values: Record<string, string>) => {
      const W = parseFloat(values.work) || 0;
      const t = parseFloat(values.time) || 0;
      if (t <= 0) return [{ label: "Error", value: "Time must be > 0" }];
      const P = W / t;
      return [{ label: "Power", value: `${P.toFixed(3)} W` }];
    }
  },

  work: {
    fields: [
      { id: "force", label: "Force (N)", type: "number", placeholder: "100", min: 0 },
      { id: "distance", label: "Distance (m)", type: "number", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const F = parseFloat(values.force) || 0;
      const d = parseFloat(values.distance) || 0;
      const W = F * d;
      return [{ label: "Work", value: `${W.toFixed(3)} J` }];
    }
  },

  acceleration: {
    fields: [
      { id: "v1", label: "Initial Velocity (m/s)", type: "number", placeholder: "0" },
      { id: "v2", label: "Final Velocity (m/s)", type: "number", placeholder: "20" },
      { id: "time", label: "Time (s)", type: "number", placeholder: "4", min: 0.0001, step: 0.0001 },
    ],
    calculate: (values: Record<string, string>) => {
      const v1 = parseFloat(values.v1) || 0;
      const v2 = parseFloat(values.v2) || 0;
      const t = parseFloat(values.time) || 0;
      if (t <= 0) return [{ label: "Error", value: "Time must be > 0" }];
      const a = (v2 - v1) / t;
      return [{ label: "Acceleration", value: `${a.toFixed(3)} m/s²` }];
    }
  },

  projectile: {
    fields: [
      { id: "speed", label: "Speed (m/s)", type: "number", placeholder: "30", min: 0 },
      { id: "angle", label: "Launch Angle (deg)", type: "number", placeholder: "45", min: 0, max: 90 },
    ],
    calculate: (values: Record<string, string>) => {
      const v = parseFloat(values.speed) || 0;
      const deg = parseFloat(values.angle) || 0;
      const g = 9.80665;
      const rad = (deg * Math.PI) / 180;
      const range = (v * v * Math.sin(2 * rad)) / g;
      const maxHeight = (v * v * Math.pow(Math.sin(rad), 2)) / (2 * g);
      const time = (2 * v * Math.sin(rad)) / g;
      return [
        { label: "Range", value: `${range.toFixed(2)} m` },
        { label: "Max Height", value: `${maxHeight.toFixed(2)} m` },
        { label: "Flight Time", value: `${time.toFixed(2)} s` },
      ];
    }
  },

  // CONVERSION CALCULATORS
  angle: {
    fields: [
      { id: "degrees", label: "Degrees (°)", type: "number", placeholder: "180" },
    ],
    calculate: (values: Record<string, string>) => {
      const deg = parseFloat(values.degrees) || 0;
      const rad = (deg * Math.PI) / 180;
      return [
        { label: "Radians", value: rad.toFixed(6) },
        { label: "Turns", value: (deg / 360).toFixed(6) },
      ];
    }
  },

  frequency: {
    fields: [
      { id: "hz", label: "Frequency (Hz)", type: "number", placeholder: "60", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const hz = parseFloat(values.hz) || 0;
      const rpm = hz * 60;
      const period = hz > 0 ? 1 / hz : 0;
      return [
        { label: "RPM", value: rpm.toFixed(2) },
        { label: "Period (s)", value: period ? period.toFixed(6) : "∞" },
      ];
    }
  },

  fuel: {
    fields: [
      { id: "mpg", label: "Fuel Economy (MPG)", type: "number", placeholder: "30", min: 0.1, step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const mpg = parseFloat(values.mpg) || 0;
      if (mpg <= 0) return [{ label: "Error", value: "MPG must be > 0" }];
      const lPer100km = 235.214 / mpg;
      return [
        { label: "L/100km", value: lPer100km.toFixed(2) },
      ];
    }
  },

  torque: {
    fields: [
      { id: "nm", label: "Torque (N·m)", type: "number", placeholder: "300", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const nm = parseFloat(values.nm) || 0;
      const ftlb = nm * 0.737562149;
      return [
        { label: "ft·lb", value: ftlb.toFixed(2) },
      ];
    }
  },

  "power-conv": {
    fields: [
      { id: "w", label: "Power (W)", type: "number", placeholder: "1000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.w) || 0;
      const hp = w / 745.699872;
      return [
        { label: "Horsepower", value: hp.toFixed(4) },
      ];
    }
  },

  luminosity: {
    fields: [
      { id: "lumens", label: "Lumens (lm)", type: "number", placeholder: "800", min: 0 },
      { id: "area", label: "Area (m²)", type: "number", placeholder: "10", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const lm = parseFloat(values.lumens) || 0;
      const area = parseFloat(values.area) || 0;
      if (area <= 0) return [{ label: "Error", value: "Area must be > 0" }];
      const lux = lm / area;
      return [
        { label: "Illuminance (lux)", value: lux.toFixed(2) },
      ];
    }
  },

  "density-conv": {
    fields: [
      { id: "kgm3", label: "Density (kg/m³)", type: "number", placeholder: "1000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const kgm3 = parseFloat(values.kgm3) || 0;
      const gcm3 = kgm3 / 1000;
      return [
        { label: "g/cm³", value: gcm3.toFixed(6) },
      ];
    }
  },

  viscosity: {
    fields: [
      { id: "pas", label: "Viscosity (Pa·s)", type: "number", placeholder: "0.001", step: 0.0001, min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const pas = parseFloat(values.pas) || 0;
      const cP = pas * 1000; // 1 Pa·s = 1000 cP
      return [
        { label: "Centipoise (cP)", value: cP.toFixed(2) },
      ];
    }
  },

  // TIME CALCULATORS
  anniversary: {
    fields: [
      { id: "date", label: "Anniversary Date (YYYY-MM-DD)", type: "text", placeholder: "2015-06-01" },
    ],
    calculate: (values: Record<string, string>) => {
      const dt = new Date(values.date || "");
      if (isNaN(dt.getTime())) return [{ label: "Error", value: "Invalid date" }];
      const now = new Date();
      const years = now.getFullYear() - dt.getFullYear() - ((now < new Date(now.getFullYear(), dt.getMonth(), dt.getDate())) ? 1 : 0);
      const days = Math.floor((now.getTime() - dt.getTime()) / (1000 * 60 * 60 * 24));
      return [
        { label: "Years", value: years },
        { label: "Days", value: days }
      ];
    }
  },

  "week-number": {
    fields: [
      { id: "date", label: "Date (YYYY-MM-DD)", type: "text", placeholder: "2025-01-15" },
    ],
    calculate: (values: Record<string, string>) => {
      const d = new Date(values.date || "");
      if (isNaN(d.getTime())) return [{ label: "Error", value: "Invalid date" }];
      // ISO week number
      const target = new Date(d.valueOf());
      const dayNr = (d.getDay() + 6) % 7; // Monday=0
      target.setDate(d.getDate() - dayNr + 3);
      const firstThursday = new Date(target.getFullYear(), 0, 4);
      const week = 1 + Math.round(((target.getTime() - firstThursday.getTime()) / 86400000 - 3 + ((firstThursday.getDay() + 6) % 7)) / 7);
      return [{ label: "ISO Week #", value: week }];
    }
  },

  deadline: {
    fields: [
      { id: "date", label: "Deadline (YYYY-MM-DD)", type: "text", placeholder: "2025-12-31" },
    ],
    calculate: (values: Record<string, string>) => {
      const d = new Date(values.date || "");
      if (isNaN(d.getTime())) return [{ label: "Error", value: "Invalid date" }];
      const now = new Date();
      const ms = d.getTime() - now.getTime();
      const days = Math.ceil(ms / 86400000);
      return [{ label: "Days Remaining", value: days }];
    }
  },

  "project-timeline": {
    fields: [
      { id: "start", label: "Start (YYYY-MM-DD)", type: "text", placeholder: "2025-01-01" },
      { id: "duration", label: "Duration (days)", type: "number", placeholder: "90", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const start = new Date(values.start || "");
      const duration = Math.floor(parseFloat(values.duration) || 0);
      if (isNaN(start.getTime()) || duration <= 0) return [{ label: "Error", value: "Invalid start or duration" }];
      const end = new Date(start);
      end.setDate(end.getDate() + duration);
      return [
        { label: "End Date", value: end.toISOString().slice(0, 10) },
      ];
    }
  },

  "billing-hours": {
    fields: [
      { id: "rate", label: "Hourly Rate ($)", type: "number", placeholder: "100", min: 0 },
      { id: "hours", label: "Hours", type: "number", placeholder: "20", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const rate = parseFloat(values.rate) || 0;
      const hours = parseFloat(values.hours) || 0;
      const total = rate * hours;
      return [{ label: "Bill", value: `$${total.toFixed(2)}` }];
    }
  },

  // COOKING CALCULATORS









  "food-cost": {
    fields: [
      { id: "total", label: "Total Recipe Cost ($)", type: "number", placeholder: "12.50", min: 0, step: 0.01 },
      { id: "servings", label: "Servings", type: "number", placeholder: "4", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const total = parseFloat(values.total) || 0;
      const servings = Math.max(1, Math.floor(parseFloat(values.servings) || 1));
      const perServing = servings > 0 ? total / servings : 0;
      return [
        { label: "Per Serving", value: `$${perServing.toFixed(2)}` },
        { label: "Total Cost", value: `$${total.toFixed(2)}` },
      ];
    }
  },

  // BUSINESS CALCULATORS













  invoice: {
    fields: [
      { id: "rate", label: "Hourly Rate ($)", type: "number", placeholder: "100", min: 0 },
      { id: "hours", label: "Hours", type: "number", placeholder: "20", min: 0 },
      { id: "tax", label: "Tax (%)", type: "number", placeholder: "0", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const rate = parseFloat(values.rate) || 0;
      const hours = parseFloat(values.hours) || 0;
      const taxPct = (parseFloat(values.tax) || 0) / 100;
      const subtotal = rate * hours;
      const tax = subtotal * taxPct;
      const total = subtotal + tax;
      return [
        { label: "Subtotal", value: `$${subtotal.toFixed(2)}` },
        { label: "Tax", value: `$${tax.toFixed(2)}` },
        { label: "Total", value: `$${total.toFixed(2)}` },
      ];
    }
  },

  "customer-lifetime": {
    fields: [
      { id: "aov", label: "Avg Order Value ($)", type: "number", placeholder: "50", min: 0 },
      { id: "margin", label: "Gross Margin (%)", type: "number", placeholder: "60", min: 0, max: 100 },
      { id: "repeat", label: "Repeat Purchases", type: "number", placeholder: "5", min: 0 },
      { id: "cac", label: "CAC ($)", type: "number", placeholder: "20", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const aov = parseFloat(values.aov) || 0;
      const margin = (parseFloat(values.margin) || 0) / 100;
      const repeat = Math.max(0, Math.floor(parseFloat(values.repeat) || 0));
      const cac = parseFloat(values.cac) || 0;
      const ltv = aov * margin * repeat;
      const ratio = cac > 0 ? ltv / cac : 0;
      return [
        { label: "CLV", value: `$${ltv.toFixed(2)}` },
        { label: "LTV:CAC", value: ratio.toFixed(2) },
      ];
    }
  },

  // CONSTRUCTION CALCULATORS













  lumber: {
    fields: [
      { id: "thickness", label: "Thickness (in)", type: "number", placeholder: "2", min: 0.5 },
      { id: "width", label: "Width (in)", type: "number", placeholder: "6", min: 1 },
      { id: "length", label: "Length (ft)", type: "number", placeholder: "10", min: 1 },
      { id: "count", label: "Boards", type: "number", placeholder: "12", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const t = parseFloat(values.thickness) || 0;
      const w = parseFloat(values.width) || 0;
      const l = parseFloat(values.length) || 0;
      const c = Math.max(1, Math.floor(parseFloat(values.count) || 1));
      const bf = (t * w * l * c) / 12;
      return [{ label: "Board Feet", value: bf.toFixed(2) }];
    }
  },

  foundation: {
    fields: [
      { id: "length", label: "Length (ft)", type: "number", placeholder: "30", min: 0 },
      { id: "width", label: "Width (ft)", type: "number", placeholder: "20", min: 0 },
      { id: "thickness", label: "Thickness (in)", type: "number", placeholder: "8", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const L = parseFloat(values.length) || 0;
      const W = parseFloat(values.width) || 0;
      const T_in = parseFloat(values.thickness) || 0;
      const ft3 = L * W * (T_in / 12);
      const yd3 = ft3 / 27;
      return [{ label: "Concrete (yd³)", value: yd3.toFixed(2) }];
    }
  },

  // REAL ESTATE CALCULATORS
  "cap-rate": {
    fields: [
      { id: "noi", label: "NOI ($/yr)", type: "number", placeholder: "24000", min: 0 },
      { id: "value", label: "Property Value ($)", type: "number", placeholder: "400000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const noi = parseFloat(values.noi) || 0;
      const value = parseFloat(values.value) || 0;
      const cap = value > 0 ? (noi / value) * 100 : 0;
      return [{ label: "Cap Rate", value: `${cap.toFixed(2)}%` }];
    }
  },

  "rental-yield": {
    fields: [
      { id: "rent", label: "Annual Rent ($)", type: "number", placeholder: "24000", min: 0 },
      { id: "price", label: "Property Price ($)", type: "number", placeholder: "400000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const rent = parseFloat(values.rent) || 0;
      const price = parseFloat(values.price) || 0;
      const yieldPct = price > 0 ? (rent / price) * 100 : 0;
      return [{ label: "Yield", value: `${yieldPct.toFixed(2)}%` }];
    }
  },

  "property-tax": {
    fields: [
      { id: "value", label: "Assessed Value ($)", type: "number", placeholder: "350000", min: 0 },
      { id: "rate", label: "Tax Rate (%)", type: "number", placeholder: "1.2", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const ratePct = (parseFloat(values.rate) || 0) / 100;
      const tax = value * ratePct;
      return [{ label: "Annual Tax", value: `$${tax.toFixed(2)}` }];
    }
  },

  "square-footage": {
    fields: [
      { id: "length", label: "Length (ft)", type: "number", placeholder: "20", min: 0 },
      { id: "width", label: "Width (ft)", type: "number", placeholder: "15", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const L = parseFloat(values.length) || 0;
      const W = parseFloat(values.width) || 0;
      const sqft = L * W;
      const sqm = sqft * 0.092903;
      return [
        { label: "Area (ft²)", value: sqft.toFixed(2) },
        { label: "Area (m²)", value: sqm.toFixed(2) },
      ];
    }
  },

  "closing-costs": {
    fields: [
      { id: "price", label: "Home Price ($)", type: "number", placeholder: "450000", min: 0 },
      { id: "pct", label: "Closing Cost (%)", type: "number", placeholder: "3", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const price = parseFloat(values.price) || 0;
      const pct = (parseFloat(values.pct) || 0) / 100;
      const cost = price * pct;
      return [{ label: "Estimated Closing Costs", value: `$${cost.toFixed(2)}` }];
    }
  },

  "mortgage-points": {
    fields: [
      { id: "loan", label: "Loan Amount ($)", type: "number", placeholder: "350000", min: 0 },
      { id: "points", label: "Points (%)", type: "number", placeholder: "1", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const loan = parseFloat(values.loan) || 0;
      const pointsPct = (parseFloat(values.points) || 0) / 100;
      const cost = loan * pointsPct;
      return [{ label: "Points Cost", value: `$${cost.toFixed(2)}` }];
    }
  },

  "rent-vs-buy": {
    fields: [
      { id: "rent", label: "Monthly Rent ($)", type: "number", placeholder: "2200", min: 0 },
      { id: "mortgage", label: "Monthly Mortgage PITI ($)", type: "number", placeholder: "2600", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const rent = parseFloat(values.rent) || 0;
      const mort = parseFloat(values.mortgage) || 0;
      const diff = mort - rent;
      return [
        { label: "Monthly Difference", value: `$${diff.toFixed(2)}` },
        { label: "Cheaper Option", value: diff > 0 ? "Rent" : diff < 0 ? "Buy" : "Equal" },
      ];
    }
  },

  "home-equity": {
    fields: [
      { id: "value", label: "Home Value ($)", type: "number", placeholder: "500000", min: 0 },
      { id: "balance", label: "Loan Balance ($)", type: "number", placeholder: "350000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const balance = parseFloat(values.balance) || 0;
      const equity = value - balance;
      const ltv = value > 0 ? (balance / value) * 100 : 0;
      return [
        { label: "Equity", value: `$${equity.toFixed(2)}` },
        { label: "LTV", value: `${ltv.toFixed(2)}%` },
      ];
    }
  },

  "ideal-weight": {
    fields: [
      {
        id: "gender", label: "Gender", type: "select", options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]
      },
      { id: "height", label: "Height", type: "unit", placeholder: "65", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const height = convertToInches(values.height, values.height_unit || "in");
      const gender = values.gender;

      // Devine formula
      let idealWeight = 0;
      if (gender === "male") {
        idealWeight = 50 + 2.3 * (height - 60);
      } else {
        idealWeight = 45.5 + 2.3 * (height - 60);
      }
      idealWeight = idealWeight * 2.20462; // kg to lbs

      const range = [idealWeight * 0.9, idealWeight * 1.1];

      return [
        { label: "Ideal Weight", value: `${idealWeight.toFixed(1)} lbs` },
        { label: "Healthy Range", value: `${range[0].toFixed(0)} - ${range[1].toFixed(0)} lbs` },
        { label: "Height Used", value: `${height.toFixed(1)} inches` },
      ];
    },
  },

  pregnancy: {
    fields: [
      { id: "lastPeriod", label: "Last Period (YYYY-MM-DD)", type: "text", placeholder: "2024-01-01" },
    ],
    calculate: (values: Record<string, string>) => {
      const lastPeriod = new Date(values.lastPeriod);
      const dueDate = new Date(lastPeriod);
      dueDate.setDate(dueDate.getDate() + 280); // 40 weeks

      const today = new Date();
      const daysPregnant = Math.floor((today.getTime() - lastPeriod.getTime()) / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(daysPregnant / 7);
      const days = daysPregnant % 7;
      const daysRemaining = Math.floor((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      return [
        { label: "Due Date", value: dueDate.toLocaleDateString() },
        { label: "Current Progress", value: `${weeks} weeks, ${days} days` },
        { label: "Days Remaining", value: daysRemaining > 0 ? daysRemaining : 0 },
        { label: "Trimester", value: weeks < 13 ? "First" : weeks < 27 ? "Second" : "Third" },
      ];
    },
  },

  "heart-rate": {
    fields: [
      { id: "age", label: "Age", type: "number", placeholder: "30", min: 1 },
      { id: "resting", label: "Resting Heart Rate (optional)", type: "number", placeholder: "70", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const age = parseFloat(values.age) || 0;
      const resting = parseFloat(values.resting) || 70;
      const maxHR = 220 - age;
      const reserve = maxHR - resting;

      const zones = [
        { name: "Warm Up (50-60%)", range: `${Math.round(maxHR * 0.5)}-${Math.round(maxHR * 0.6)}` },
        { name: "Fat Burn (60-70%)", range: `${Math.round(maxHR * 0.6)}-${Math.round(maxHR * 0.7)}` },
        { name: "Cardio (70-80%)", range: `${Math.round(maxHR * 0.7)}-${Math.round(maxHR * 0.8)}` },
        { name: "Peak (80-90%)", range: `${Math.round(maxHR * 0.8)}-${Math.round(maxHR * 0.9)}` },
      ];

      return [
        { label: "Max Heart Rate", value: `${maxHR} bpm` },
        ...zones.map(zone => ({ label: zone.name, value: `${zone.range} bpm` })),
      ];
    },
  },

  pace: {
    fields: [
      { id: "distance", label: "Distance", type: "unit", placeholder: "5", min: 0, step: 0.1, unitType: "length" },
      { id: "hours", label: "Hours", type: "number", placeholder: "0", min: 0 },
      { id: "minutes", label: "Minutes", type: "number", placeholder: "45", min: 0 },
      { id: "seconds", label: "Seconds", type: "number", placeholder: "0", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      // Convert distance to miles for pace calculation
      const distanceMeters = convertToMeters(values.distance, values.distance_unit || "m");
      const distance = distanceMeters / 1609.34; // to miles
      const totalSeconds = (parseFloat(values.hours) || 0) * 3600 +
        (parseFloat(values.minutes) || 0) * 60 +
        (parseFloat(values.seconds) || 0);
      const paceSeconds = totalSeconds / distance;
      const paceMin = Math.floor(paceSeconds / 60);
      const paceSec = Math.floor(paceSeconds % 60);
      const speedMph = distance / (totalSeconds / 3600);

      return [
        { label: "Pace", value: `${paceMin}:${paceSec.toString().padStart(2, '0')} /mile` },
        { label: "Speed", value: `${speedMph.toFixed(2)} mph` },
        { label: "Distance", value: `${distance.toFixed(2)} miles` },
      ];
    },
  },

  macro: {
    fields: [
      { id: "calories", label: "Daily Calories", type: "number", placeholder: "2000", min: 0 },
      { id: "protein", label: "Protein %", type: "number", placeholder: "30", min: 0, max: 100 },
      { id: "carbs", label: "Carbs %", type: "number", placeholder: "40", min: 0, max: 100 },
      { id: "fats", label: "Fats %", type: "number", placeholder: "30", min: 0, max: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const calories = parseFloat(values.calories) || 0;
      const proteinPct = parseFloat(values.protein) || 0;
      const carbsPct = parseFloat(values.carbs) || 0;
      const fatsPct = parseFloat(values.fats) || 0;

      const proteinCals = calories * (proteinPct / 100);
      const carbsCals = calories * (carbsPct / 100);
      const fatsCals = calories * (fatsPct / 100);

      const proteinGrams = proteinCals / 4;
      const carbsGrams = carbsCals / 4;
      const fatsGrams = fatsCals / 9;

      return [
        { label: "Protein", value: `${proteinGrams.toFixed(0)}g (${proteinCals.toFixed(0)} cal)` },
        { label: "Carbs", value: `${carbsGrams.toFixed(0)}g (${carbsCals.toFixed(0)} cal)` },
        { label: "Fats", value: `${fatsGrams.toFixed(0)}g (${fatsCals.toFixed(0)} cal)` },
        { label: "Total %", value: `${(proteinPct + carbsPct + fatsPct).toFixed(0)}%` },
      ];
    },
  },

  // MATH CALCULATORS
  percentage: {
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "50", step: 0.01 },
      { id: "percent", label: "Percentage (%)", type: "number", placeholder: "20", step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const number = parseFloat(values.number) || 0;
      const percent = parseFloat(values.percent) || 0;
      const result = (number * percent) / 100;
      const increase = number + result;
      const decrease = number - result;
      return [
        { label: "Result", value: result.toFixed(2) },
        { label: "Percentage Increase", value: increase.toFixed(2) },
        { label: "Percentage Decrease", value: decrease.toFixed(2) },
      ];
    },
  },

  fraction: {
    fields: [
      { id: "num1", label: "Fraction 1 Numerator", type: "number", placeholder: "1" },
      { id: "den1", label: "Fraction 1 Denominator", type: "number", placeholder: "2" },
      {
        id: "operation", label: "Operation", type: "select", options: [
          { value: "add", label: "Add (+)" },
          { value: "subtract", label: "Subtract (-)" },
          { value: "multiply", label: "Multiply (×)" },
          { value: "divide", label: "Divide (÷)" },
        ]
      },
      { id: "num2", label: "Fraction 2 Numerator", type: "number", placeholder: "1" },
      { id: "den2", label: "Fraction 2 Denominator", type: "number", placeholder: "3" },
    ],
    calculate: (values: Record<string, string>) => {
      const num1 = parseFloat(values.num1) || 0;
      const den1 = parseFloat(values.den1) || 1;
      const num2 = parseFloat(values.num2) || 0;
      const den2 = parseFloat(values.den2) || 1;
      const op = values.operation;

      let resultNum = 0, resultDen = 1;
      if (op === "add") {
        resultNum = num1 * den2 + num2 * den1;
        resultDen = den1 * den2;
      } else if (op === "subtract") {
        resultNum = num1 * den2 - num2 * den1;
        resultDen = den1 * den2;
      } else if (op === "multiply") {
        resultNum = num1 * num2;
        resultDen = den1 * den2;
      } else {
        resultNum = num1 * den2;
        resultDen = den1 * num2;
      }

      const gcd = (a: number, b: number): number => b === 0 ? Math.abs(a) : gcd(b, a % b);
      const divisor = gcd(resultNum, resultDen);
      const simplified = [resultNum / divisor, resultDen / divisor];

      return [
        { label: "Result", value: `${resultNum}/${resultDen}` },
        { label: "Simplified", value: `${simplified[0]}/${simplified[1]}` },
        { label: "Decimal", value: (resultNum / resultDen).toFixed(4) },
      ];
    },
  },

  "square-root": {
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "16", min: 0 },
      { id: "power", label: "Power (optional)", type: "number", placeholder: "2", min: 0, step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const number = parseFloat(values.number) || 0;
      const power = parseFloat(values.power) || 2;
      const sqrt = Math.pow(number, 1 / power);
      const squared = Math.pow(number, 2);
      const cubed = Math.pow(number, 3);
      return [
        { label: `${power}th Root`, value: sqrt.toFixed(4) },
        { label: "Square", value: squared.toFixed(2) },
        { label: "Cube", value: cubed.toFixed(2) },
      ];
    },
  },

  average: {
    fields: [
      { id: "numbers", label: "Numbers (comma-separated)", type: "text", placeholder: "10, 20, 30, 40, 50" },
    ],
    calculate: (values: Record<string, string>) => {
      const numbers = (values.numbers || "").split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
      if (numbers.length === 0) return [{ label: "Error", value: "Enter valid numbers" }];

      const sum = numbers.reduce((a, b) => a + b, 0);
      const mean = sum / numbers.length;
      const sorted = [...numbers].sort((a, b) => a - b);
      const median = sorted.length % 2 === 0
        ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
        : sorted[Math.floor(sorted.length / 2)];

      return [
        { label: "Mean (Average)", value: mean.toFixed(2) },
        { label: "Median", value: median.toFixed(2) },
        { label: "Sum", value: sum.toFixed(2) },
        { label: "Count", value: numbers.length },
      ];
    },
  },

  pythagorean: {
    fields: [
      { id: "a", label: "Side A", type: "number", placeholder: "3", min: 0 },
      { id: "b", label: "Side B", type: "number", placeholder: "4", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const a = parseFloat(values.a) || 0;
      const b = parseFloat(values.b) || 0;
      const c = Math.sqrt(a * a + b * b);
      const area = (a * b) / 2;
      const perimeter = a + b + c;
      return [
        { label: "Hypotenuse (c)", value: c.toFixed(4) },
        { label: "Area", value: area.toFixed(2) },
        { label: "Perimeter", value: perimeter.toFixed(2) },
      ];
    },
  },

  exponent: {
    fields: [
      { id: "base", label: "Base", type: "number", placeholder: "2" },
      { id: "exponent", label: "Exponent", type: "number", placeholder: "8" },
    ],
    calculate: (values: Record<string, string>) => {
      const base = parseFloat(values.base) || 0;
      const exp = parseFloat(values.exponent) || 0;
      const result = Math.pow(base, exp);
      return [
        { label: "Result", value: result.toExponential(4) },
        { label: "Standard Form", value: result.toFixed(2) },
      ];
    },
  },

  factorial: {
    fields: [
      { id: "number", label: "Number", type: "number", placeholder: "5", min: 0, max: 170 },
    ],
    calculate: (values: Record<string, string>) => {
      const n = Math.floor(parseFloat(values.number) || 0);
      if (n < 0) return [{ label: "Error", value: "Must be non-negative" }];
      if (n > 170) return [{ label: "Error", value: "Too large" }];

      let factorial = 1;
      for (let i = 2; i <= n; i++) factorial *= i;

      return [
        { label: "Factorial", value: factorial.toExponential(4) },
        { label: "Expression", value: `${n}!` },
      ];
    },
  },

  "gcf-lcm": {
    fields: [
      { id: "num1", label: "First Number", type: "number", placeholder: "12", min: 1 },
      { id: "num2", label: "Second Number", type: "number", placeholder: "18", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const a = Math.floor(parseFloat(values.num1) || 1);
      const b = Math.floor(parseFloat(values.num2) || 1);

      const gcd = (x: number, y: number): number => y === 0 ? x : gcd(y, x % y);
      const gcf = gcd(a, b);
      const lcm = (a * b) / gcf;

      return [
        { label: "GCF (Greatest Common Factor)", value: gcf },
        { label: "LCM (Least Common Multiple)", value: lcm },
      ];
    },
  },

  ratio: {
    fields: [
      { id: "a", label: "First Value", type: "number", placeholder: "4" },
      { id: "b", label: "Second Value", type: "number", placeholder: "6" },
    ],
    calculate: (values: Record<string, string>) => {
      const a = parseFloat(values.a) || 0;
      const b = parseFloat(values.b) || 0;

      const gcd = (x: number, y: number): number => y === 0 ? Math.abs(x) : gcd(y, x % y);
      const divisor = gcd(a, b);
      const simplified = [a / divisor, b / divisor];
      const decimal = a / b;

      return [
        { label: "Original Ratio", value: `${a}:${b}` },
        { label: "Simplified Ratio", value: `${simplified[0]}:${simplified[1]}` },
        { label: "Decimal", value: decimal.toFixed(4) },
        { label: "Percentage", value: `${(decimal * 100).toFixed(2)}%` },
      ];
    },
  },

  matrix: {
    fields: [
      { id: "a11", label: "a11", type: "number", placeholder: "1" },
      { id: "a12", label: "a12", type: "number", placeholder: "2" },
      { id: "a21", label: "a21", type: "number", placeholder: "3" },
      { id: "a22", label: "a22", type: "number", placeholder: "4" },
    ],
    calculate: (values: Record<string, string>) => {
      const a11 = parseFloat(values.a11) || 0;
      const a12 = parseFloat(values.a12) || 0;
      const a21 = parseFloat(values.a21) || 0;
      const a22 = parseFloat(values.a22) || 0;

      const det = a11 * a22 - a12 * a21;
      const trace = a11 + a22;

      return [
        { label: "Determinant", value: det.toFixed(4) },
        { label: "Trace", value: trace.toFixed(4) },
        { label: "Matrix", value: `[[${a11}, ${a12}], [${a21}, ${a22}]]` },
      ];
    },
  },

  // SCIENCE CALCULATORS
  velocity: {
    fields: [
      { id: "distance", label: "Distance", type: "unit", placeholder: "100", min: 0 },
      { id: "time", label: "Time (seconds)", type: "number", placeholder: "10", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const distance = convertToMeters(values.distance, values.distance_unit || "m");
      const time = parseFloat(values.time) || 0;
      const velocity = distance / time;
      return [
        { label: "Velocity", value: `${velocity.toFixed(2)} m/s` },
        { label: "Speed (km/h)", value: `${(velocity * 3.6).toFixed(2)} km/h` },
        { label: "Speed (mph)", value: `${(velocity * 2.237).toFixed(2)} mph` },
      ];
    },
  },

  force: {
    fields: [
      { id: "mass", label: "Mass (kg)", type: "number", placeholder: "10", min: 0 },
      { id: "acceleration", label: "Acceleration (m/s²)", type: "number", placeholder: "9.8" },
    ],
    calculate: (values: Record<string, string>) => {
      const mass = parseFloat(values.mass) || 0;
      const accel = parseFloat(values.acceleration) || 0;
      const force = mass * accel;
      return [
        { label: "Force", value: `${force.toFixed(2)} N` },
        { label: "Weight on Earth", value: `${(mass * 9.8).toFixed(2)} N` },
      ];
    },
  },

  energy: {
    fields: [
      { id: "mass", label: "Mass (kg)", type: "number", placeholder: "2", min: 0 },
      { id: "velocity", label: "Velocity (m/s)", type: "number", placeholder: "10", min: 0 },
      { id: "height", label: "Height", type: "unit", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const mass = parseFloat(values.mass) || 0;
      const velocity = parseFloat(values.velocity) || 0;
      const height = convertToMeters(values.height, values.height_unit || "m");
      const ke = 0.5 * mass * velocity * velocity;
      const pe = mass * 9.8 * height;
      const total = ke + pe;
      return [
        { label: "Kinetic Energy", value: `${ke.toFixed(2)} J` },
        { label: "Potential Energy", value: `${pe.toFixed(2)} J` },
        { label: "Total Energy", value: `${total.toFixed(2)} J` },
      ];
    },
  },

  density: {
    fields: [
      { id: "mass", label: "Mass (kg)", type: "number", placeholder: "100", min: 0 },
      { id: "volume", label: "Volume (m³)", type: "number", placeholder: "2", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const mass = parseFloat(values.mass) || 0;
      const volume = parseFloat(values.volume) || 0;
      const density = mass / volume;
      return [
        { label: "Density", value: `${density.toFixed(2)} kg/m³` },
        { label: "Density (g/cm³)", value: `${(density / 1000).toFixed(4)} g/cm³` },
      ];
    },
  },

  pressure: {
    fields: [
      { id: "force", label: "Force (N)", type: "number", placeholder: "100", min: 0 },
      { id: "area", label: "Area (m²)", type: "number", placeholder: "0.5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const force = parseFloat(values.force) || 0;
      const area = parseFloat(values.area) || 0;
      const pressure = force / area;
      return [
        { label: "Pressure", value: `${pressure.toFixed(2)} Pa` },
        { label: "Pressure (kPa)", value: `${(pressure / 1000).toFixed(2)} kPa` },
        { label: "Pressure (bar)", value: `${(pressure / 100000).toFixed(4)} bar` },
      ];
    },
  },

  wavelength: {
    fields: [
      { id: "frequency", label: "Frequency (Hz)", type: "number", placeholder: "1000000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const freq = parseFloat(values.frequency) || 0;
      const c = 299792458; // speed of light m/s
      const wavelength = c / freq;
      return [
        { label: "Wavelength", value: `${wavelength.toFixed(4)} m` },
        { label: "Wavelength (nm)", value: `${(wavelength * 1e9).toFixed(2)} nm` },
        { label: "Frequency", value: `${freq.toExponential(2)} Hz` },
      ];
    },
  },

  "ohms-law": {
    fields: [
      { id: "voltage", label: "Voltage (V)", type: "number", placeholder: "12" },
      { id: "resistance", label: "Resistance (Ω)", type: "number", placeholder: "4", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const voltage = parseFloat(values.voltage) || 0;
      const resistance = parseFloat(values.resistance) || 1;
      const current = voltage / resistance;
      const power = voltage * current;
      return [
        { label: "Current", value: `${current.toFixed(3)} A` },
        { label: "Power", value: `${power.toFixed(2)} W` },
        { label: "Voltage", value: `${voltage} V` },
        { label: "Resistance", value: `${resistance} Ω` },
      ];
    },
  },

  "molar-mass": {
    fields: [
      { id: "element", label: "Element Symbol", type: "text", placeholder: "H2O" },
    ],
    calculate: (values: Record<string, string>) => {
      const masses: Record<string, number> = {
        H: 1.008, C: 12.01, N: 14.01, O: 16.00, S: 32.07, P: 30.97, Cl: 35.45, Na: 22.99, Ca: 40.08
      };
      const formula = values.element || "";
      let molarMass = 0;
      const regex = /([A-Z][a-z]?)(\d*)/g;
      let match;
      while ((match = regex.exec(formula)) !== null) {
        const element = match[1];
        const count = match[2] ? parseInt(match[2]) : 1;
        molarMass += (masses[element] || 0) * count;
      }
      return [
        { label: "Molar Mass", value: `${molarMass.toFixed(2)} g/mol` },
        { label: "Formula", value: formula },
      ];
    },
  },

  ph: {
    fields: [
      { id: "h", label: "[H+] Concentration (M)", type: "number", placeholder: "0.0001", min: 0, step: 0.00001 },
    ],
    calculate: (values: Record<string, string>) => {
      const h = parseFloat(values.h) || 0;
      const ph = -Math.log10(h);
      const poh = 14 - ph;
      const oh = Math.pow(10, -poh);
      return [
        { label: "pH", value: ph.toFixed(2) },
        { label: "pOH", value: poh.toFixed(2) },
        { label: "[OH-]", value: oh.toExponential(2) },
        { label: "Type", value: ph < 7 ? "Acidic" : ph > 7 ? "Basic" : "Neutral" },
      ];
    },
  },

  "half-life": {
    fields: [
      { id: "initial", label: "Initial Amount", type: "number", placeholder: "100", min: 0 },
      { id: "halfLife", label: "Half-Life (years)", type: "number", placeholder: "5730", min: 0 },
      { id: "time", label: "Time Elapsed (years)", type: "number", placeholder: "11460", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const initial = parseFloat(values.initial) || 0;
      const halfLife = parseFloat(values.halfLife) || 1;
      const time = parseFloat(values.time) || 0;
      const remaining = initial * Math.pow(0.5, time / halfLife);
      const decayed = initial - remaining;
      const percentRemaining = (remaining / initial) * 100;
      return [
        { label: "Remaining Amount", value: remaining.toFixed(4) },
        { label: "Decayed Amount", value: decayed.toFixed(4) },
        { label: "Percent Remaining", value: `${percentRemaining.toFixed(2)}%` },
      ];
    },
  },

  // CONVERSION CALCULATORS
  length: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "m", label: "Meters" },
          { value: "km", label: "Kilometers" },
          { value: "cm", label: "Centimeters" },
          { value: "ft", label: "Feet" },
          { value: "in", label: "Inches" },
          { value: "mi", label: "Miles" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "m";
      const toMeters: Record<string, number> = { m: 1, km: 1000, cm: 0.01, ft: 0.3048, in: 0.0254, mi: 1609.34 };
      const meters = value * toMeters[from];
      return [
        { label: "Meters", value: `${meters.toFixed(4)} m` },
        { label: "Kilometers", value: `${(meters / 1000).toFixed(4)} km` },
        { label: "Feet", value: `${(meters / 0.3048).toFixed(4)} ft` },
        { label: "Miles", value: `${(meters / 1609.34).toFixed(4)} mi` },
      ];
    },
  },

  weight: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "kg", label: "Kilograms" },
          { value: "g", label: "Grams" },
          { value: "lb", label: "Pounds" },
          { value: "oz", label: "Ounces" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "kg";
      const toKg: Record<string, number> = { kg: 1, g: 0.001, lb: 0.453592, oz: 0.0283495 };
      const kg = value * toKg[from];
      return [
        { label: "Kilograms", value: `${kg.toFixed(4)} kg` },
        { label: "Grams", value: `${(kg * 1000).toFixed(2)} g` },
        { label: "Pounds", value: `${(kg / 0.453592).toFixed(4)} lb` },
        { label: "Ounces", value: `${(kg / 0.0283495).toFixed(2)} oz` },
      ];
    },
  },

  temperature: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100" },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "c", label: "Celsius" },
          { value: "f", label: "Fahrenheit" },
          { value: "k", label: "Kelvin" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "c";
      let c = 0;
      if (from === "c") c = value;
      else if (from === "f") c = (value - 32) * 5 / 9;
      else c = value - 273.15;
      const f = c * 9 / 5 + 32;
      const k = c + 273.15;
      return [
        { label: "Celsius", value: `${c.toFixed(2)}°C` },
        { label: "Fahrenheit", value: `${f.toFixed(2)}°F` },
        { label: "Kelvin", value: `${k.toFixed(2)} K` },
      ];
    },
  },

  volume: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "l", label: "Liters" },
          { value: "ml", label: "Milliliters" },
          { value: "gal", label: "Gallons" },
          { value: "oz", label: "Fluid Ounces" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "l";
      const toLiters: Record<string, number> = { l: 1, ml: 0.001, gal: 3.78541, oz: 0.0295735 };
      const liters = value * toLiters[from];
      return [
        { label: "Liters", value: `${liters.toFixed(4)} L` },
        { label: "Milliliters", value: `${(liters * 1000).toFixed(2)} mL` },
        { label: "Gallons", value: `${(liters / 3.78541).toFixed(4)} gal` },
        { label: "Fluid Ounces", value: `${(liters / 0.0295735).toFixed(2)} fl oz` },
      ];
    },
  },

  area: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "m2", label: "Square Meters" },
          { value: "ft2", label: "Square Feet" },
          { value: "acre", label: "Acres" },
          { value: "ha", label: "Hectares" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "m2";
      const toM2: Record<string, number> = { m2: 1, ft2: 0.092903, acre: 4046.86, ha: 10000 };
      const m2 = value * toM2[from];
      return [
        { label: "Square Meters", value: `${m2.toFixed(4)} m²` },
        { label: "Square Feet", value: `${(m2 / 0.092903).toFixed(2)} ft²` },
        { label: "Acres", value: `${(m2 / 4046.86).toFixed(4)} acres` },
        { label: "Hectares", value: `${(m2 / 10000).toFixed(4)} ha` },
      ];
    },
  },

  speed: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "100", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "ms", label: "Meters/Second" },
          { value: "kmh", label: "Kilometers/Hour" },
          { value: "mph", label: "Miles/Hour" },
          { value: "knot", label: "Knots" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "ms";
      const toMs: Record<string, number> = { ms: 1, kmh: 0.277778, mph: 0.44704, knot: 0.514444 };
      const ms = value * toMs[from];
      return [
        { label: "Meters/Second", value: `${ms.toFixed(4)} m/s` },
        { label: "Kilometers/Hour", value: `${(ms / 0.277778).toFixed(2)} km/h` },
        { label: "Miles/Hour", value: `${(ms / 0.44704).toFixed(2)} mph` },
        { label: "Knots", value: `${(ms / 0.514444).toFixed(2)} knots` },
      ];
    },
  },

  time: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "60", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "s", label: "Seconds" },
          { value: "min", label: "Minutes" },
          { value: "h", label: "Hours" },
          { value: "d", label: "Days" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "s";
      const toSeconds: Record<string, number> = { s: 1, min: 60, h: 3600, d: 86400 };
      const seconds = value * toSeconds[from];
      return [
        { label: "Seconds", value: `${seconds.toFixed(2)} s` },
        { label: "Minutes", value: `${(seconds / 60).toFixed(4)} min` },
        { label: "Hours", value: `${(seconds / 3600).toFixed(4)} h` },
        { label: "Days", value: `${(seconds / 86400).toFixed(4)} days` },
      ];
    },
  },

  data: {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1024", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "b", label: "Bytes" },
          { value: "kb", label: "Kilobytes" },
          { value: "mb", label: "Megabytes" },
          { value: "gb", label: "Gigabytes" },
          { value: "tb", label: "Terabytes" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "b";
      const toBytes: Record<string, number> = { b: 1, kb: 1024, mb: 1048576, gb: 1073741824, tb: 1099511627776 };
      const bytes = value * toBytes[from];
      return [
        { label: "Bytes", value: `${bytes.toFixed(0)} B` },
        { label: "Kilobytes", value: `${(bytes / 1024).toFixed(2)} KB` },
        { label: "Megabytes", value: `${(bytes / 1048576).toFixed(4)} MB` },
        { label: "Gigabytes", value: `${(bytes / 1073741824).toFixed(6)} GB` },
      ];
    },
  },

  "pressure-conversion": {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "pa", label: "Pascals" },
          { value: "bar", label: "Bar" },
          { value: "psi", label: "PSI" },
          { value: "atm", label: "Atmospheres" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "pa";
      const toPa: Record<string, number> = { pa: 1, bar: 100000, psi: 6894.76, atm: 101325 };
      const pa = value * toPa[from];
      return [
        { label: "Pascals", value: `${pa.toFixed(2)} Pa` },
        { label: "Bar", value: `${(pa / 100000).toFixed(6)} bar` },
        { label: "PSI", value: `${(pa / 6894.76).toFixed(4)} psi` },
        { label: "Atmospheres", value: `${(pa / 101325).toFixed(6)} atm` },
      ];
    },
  },

  "energy-conversion": {
    fields: [
      { id: "value", label: "Value", type: "number", placeholder: "1000", min: 0 },
      {
        id: "from", label: "From", type: "select", options: [
          { value: "j", label: "Joules" },
          { value: "cal", label: "Calories" },
          { value: "kwh", label: "Kilowatt-hours" },
          { value: "btu", label: "BTU" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "j";
      const toJoules: Record<string, number> = { j: 1, cal: 4.184, kwh: 3600000, btu: 1055.06 };
      const joules = value * toJoules[from];
      return [
        { label: "Joules", value: `${joules.toFixed(2)} J` },
        { label: "Calories", value: `${(joules / 4.184).toFixed(2)} cal` },
        { label: "Kilowatt-hours", value: `${(joules / 3600000).toFixed(6)} kWh` },
        { label: "BTU", value: `${(joules / 1055.06).toFixed(4)} BTU` },
      ];
    },
  },

  // CONSTRUCTION CALCULATORS
  concrete: {
    fields: [
      { id: "length", label: "Length", type: "unit", placeholder: "10", min: 0 },
      { id: "width", label: "Width", type: "unit", placeholder: "10", min: 0 },
      { id: "depth", label: "Depth", type: "unit", placeholder: "4", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const width = convertToFeet(values.width, values.width_unit || "in");
      const depthInches = convertToInches(values.depth, values.depth_unit || "in");
      const depth = depthInches / 12; // to feet
      const cubicFeet = length * width * depth;
      const cubicYards = cubicFeet / 27;
      const bags80lb = Math.ceil(cubicYards * 45);
      return [
        { label: "Cubic Yards Needed", value: `${cubicYards.toFixed(2)} yd³` },
        { label: "Cubic Feet", value: `${cubicFeet.toFixed(2)} ft³` },
        { label: "80lb Bags Needed", value: bags80lb },
      ];
    },
  },

  paint: {
    fields: [
      { id: "length", label: "Room Length", type: "unit", placeholder: "12", min: 0 },
      { id: "width", label: "Room Width", type: "unit", placeholder: "10", min: 0 },
      { id: "height", label: "Wall Height", type: "unit", placeholder: "8", min: 0 },
      { id: "coats", label: "Number of Coats", type: "number", placeholder: "2", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const width = convertToFeet(values.width, values.width_unit || "in");
      const height = convertToFeet(values.height, values.height_unit || "in");
      const coats = parseFloat(values.coats) || 1;
      const wallArea = 2 * (length + width) * height;
      const coverage = 350; // sq ft per gallon
      const gallons = Math.ceil((wallArea * coats) / coverage);
      return [
        { label: "Wall Area", value: `${wallArea.toFixed(0)} sq ft` },
        { label: "Gallons Needed", value: gallons },
        { label: "Total Coverage", value: `${(gallons * coverage).toFixed(0)} sq ft` },
      ];
    },
  },

  flooring: {
    fields: [
      { id: "length", label: "Length", type: "unit", placeholder: "15", min: 0 },
      { id: "width", label: "Width", type: "unit", placeholder: "12", min: 0 },
      { id: "waste", label: "Waste Factor (%)", type: "number", placeholder: "10", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const width = convertToFeet(values.width, values.width_unit || "in");
      const waste = parseFloat(values.waste) || 10;
      const area = length * width;
      const withWaste = area * (1 + waste / 100);
      const boxes = Math.ceil(withWaste / 20); // assuming 20 sq ft per box
      return [
        { label: "Area", value: `${area.toFixed(2)} sq ft` },
        { label: "With Waste Factor", value: `${withWaste.toFixed(2)} sq ft` },
        { label: "Boxes Needed (20 sq ft/box)", value: boxes },
      ];
    },
  },

  roofing: {
    fields: [
      { id: "length", label: "Roof Length", type: "unit", placeholder: "40", min: 0 },
      { id: "width", label: "Roof Width", type: "unit", placeholder: "30", min: 0 },
      { id: "pitch", label: "Roof Pitch", type: "number", placeholder: "6", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const width = convertToFeet(values.width, values.width_unit || "in");
      const pitch = parseFloat(values.pitch) || 0;
      const multiplier = Math.sqrt(1 + Math.pow(pitch / 12, 2));
      const area = length * width * multiplier;
      const squares = Math.ceil(area / 100); // 1 square = 100 sq ft
      return [
        { label: "Roof Area", value: `${area.toFixed(2)} sq ft` },
        { label: "Roofing Squares", value: squares },
        { label: "Shingles Bundles (3/square)", value: squares * 3 },
      ];
    },
  },

  drywall: {
    fields: [
      { id: "length", label: "Wall Length", type: "unit", placeholder: "12", min: 0 },
      { id: "height", label: "Wall Height", type: "unit", placeholder: "8", min: 0 },
      {
        id: "sheetSize", label: "Sheet Size", type: "select", options: [
          { value: "32", label: "4x8 (32 sq ft)" },
          { value: "48", label: "4x12 (48 sq ft)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const height = convertToFeet(values.height, values.height_unit || "in");
      const sheetSize = parseFloat(values.sheetSize) || 32;
      const area = length * height;
      const sheets = Math.ceil(area / sheetSize);
      return [
        { label: "Wall Area", value: `${area.toFixed(2)} sq ft` },
        { label: "Drywall Sheets", value: sheets },
        { label: "Joint Compound (lbs)", value: Math.ceil(area * 0.05) },
      ];
    },
  },

  brick: {
    fields: [
      { id: "length", label: "Wall Length", type: "unit", placeholder: "20", min: 0 },
      { id: "height", label: "Wall Height", type: "unit", placeholder: "6", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const height = convertToFeet(values.height, values.height_unit || "in");
      const area = length * height;
      const bricksPerSqFt = 7; // standard estimate
      const bricks = Math.ceil(area * bricksPerSqFt * 1.1); // 10% waste
      return [
        { label: "Wall Area", value: `${area.toFixed(2)} sq ft` },
        { label: "Bricks Needed", value: bricks },
        { label: "Mortar (cubic feet)", value: Math.ceil(area * 0.3) },
      ];
    },
  },

  gravel: {
    fields: [
      { id: "length", label: "Length", type: "unit", placeholder: "20", min: 0 },
      { id: "width", label: "Width", type: "unit", placeholder: "10", min: 0 },
      { id: "depth", label: "Depth", type: "unit", placeholder: "3", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const width = convertToFeet(values.width, values.width_unit || "in");
      const depthInches = convertToInches(values.depth, values.depth_unit || "in");
      const depth = depthInches / 12; // to feet
      const cubicFeet = length * width * depth;
      const cubicYards = cubicFeet / 27;
      const tons = cubicYards * 1.4; // approximate weight
      return [
        { label: "Cubic Yards", value: `${cubicYards.toFixed(2)} yd³` },
        { label: "Cubic Feet", value: `${cubicFeet.toFixed(2)} ft³` },
        { label: "Approximate Tons", value: `${tons.toFixed(2)} tons` },
      ];
    },
  },

  fence: {
    fields: [
      { id: "length", label: "Fence Length", type: "unit", placeholder: "100", min: 0 },
      { id: "height", label: "Fence Height", type: "unit", placeholder: "6", min: 0 },
      { id: "spacing", label: "Post Spacing", type: "unit", placeholder: "8", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const height = convertToFeet(values.height, values.height_unit || "in");
      const spacing = convertToFeet(values.spacing, values.spacing_unit || "in");
      const posts = Math.ceil(length / spacing) + 1;
      const rails = posts * 2; // 2 rails per section
      const pickets = Math.ceil(length * 2); // ~6 inch spacing
      return [
        { label: "Posts Needed", value: posts },
        { label: "Rails Needed", value: rails },
        { label: "Pickets Needed", value: pickets },
        { label: "Concrete Bags (50lb)", value: posts * 2 },
      ];
    },
  },

  stairs: {
    fields: [
      { id: "totalRise", label: "Total Rise", type: "unit", placeholder: "100", min: 0 },
      { id: "riser", label: "Riser Height", type: "unit", placeholder: "7.5", min: 1, step: 0.5 },
    ],
    calculate: (values: Record<string, string>) => {
      const totalRise = convertToInches(values.totalRise, values.totalRise_unit || "in");
      const riserHeight = convertToInches(values.riser, values.riser_unit || "in");
      const steps = Math.ceil(totalRise / riserHeight);
      const actualRiser = totalRise / steps;
      const tread = 11; // typical tread depth
      const totalRun = (steps - 1) * tread;
      return [
        { label: "Number of Steps", value: steps },
        { label: "Actual Riser Height", value: `${actualRiser.toFixed(2)}"` },
        { label: "Total Run", value: `${totalRun.toFixed(2)}"` },
        { label: "Stringer Length", value: `${Math.sqrt(totalRise * totalRise + totalRun * totalRun).toFixed(2)}"` },
      ];
    },
  },

  tile: {
    fields: [
      { id: "length", label: "Length", type: "unit", placeholder: "10", min: 0 },
      { id: "width", label: "Width", type: "unit", placeholder: "8", min: 0 },
      { id: "tileSize", label: "Tile Size", type: "unit", placeholder: "12", min: 1 },
      { id: "waste", label: "Waste Factor (%)", type: "number", placeholder: "10", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const length = convertToFeet(values.length, values.length_unit || "in");
      const width = convertToFeet(values.width, values.width_unit || "in");
      const tileSizeInches = convertToInches(values.tileSize, values.tileSize_unit || "in");
      const waste = parseFloat(values.waste) || 10;
      const area = length * width;
      const tileArea = (tileSizeInches * tileSizeInches) / 144; // convert to sq ft
      const tilesNeeded = Math.ceil((area / tileArea) * (1 + waste / 100));
      return [
        { label: "Floor Area", value: `${area.toFixed(2)} sq ft` },
        { label: "Tiles Needed", value: tilesNeeded },
        { label: "Boxes (if 10/box)", value: Math.ceil(tilesNeeded / 10) },
      ];
    },
  },

  // EDUCATION CALCULATORS
  gpa: {
    fields: [
      { id: "grades", label: "Grades (comma-separated, A=4, B=3, C=2, D=1, F=0)", type: "text", placeholder: "4,3,4,3,3" },
      { id: "credits", label: "Credits (comma-separated)", type: "text", placeholder: "3,3,4,3,2" },
    ],
    calculate: (values: Record<string, string>) => {
      const grades = (values.grades || "").split(",").map(g => parseFloat(g.trim())).filter(g => !isNaN(g));
      const credits = (values.credits || "").split(",").map(c => parseFloat(c.trim())).filter(c => !isNaN(c));
      if (grades.length === 0 || grades.length !== credits.length) {
        return [{ label: "Error", value: "Invalid input" }];
      }
      const totalPoints = grades.reduce((sum, grade, i) => sum + grade * credits[i], 0);
      const totalCredits = credits.reduce((sum, c) => sum + c, 0);
      const gpa = totalPoints / totalCredits;
      return [
        { label: "GPA", value: gpa.toFixed(3) },
        { label: "Total Credits", value: totalCredits },
        { label: "Quality Points", value: totalPoints.toFixed(2) },
      ];
    },
  },

  grade: {
    fields: [
      { id: "current", label: "Current Grade (%)", type: "number", placeholder: "85", min: 0, max: 100 },
      { id: "weight", label: "Current Weight (%)", type: "number", placeholder: "80", min: 0, max: 100 },
      { id: "desired", label: "Desired Final Grade (%)", type: "number", placeholder: "90", min: 0, max: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const current = parseFloat(values.current) || 0;
      const weight = parseFloat(values.weight) || 0;
      const desired = parseFloat(values.desired) || 0;
      const finalWeight = 100 - weight;
      const needed = (desired - (current * weight / 100)) / (finalWeight / 100);
      return [
        { label: "Score Needed on Final", value: `${needed.toFixed(2)}%` },
        { label: "Feasibility", value: needed <= 100 ? "Achievable" : "Not Possible" },
        { label: "Final Exam Weight", value: `${finalWeight}%` },
      ];
    },
  },

  "study-time": {
    fields: [
      { id: "hours", label: "Available Hours/Week", type: "number", placeholder: "20", min: 0 },
      { id: "subjects", label: "Number of Subjects", type: "number", placeholder: "4", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const hours = parseFloat(values.hours) || 0;
      const subjects = parseFloat(values.subjects) || 1;
      const perSubject = hours / subjects;
      const perDay = hours / 7;
      return [
        { label: "Hours per Subject", value: `${perSubject.toFixed(1)} hrs/week` },
        { label: "Daily Study Time", value: `${perDay.toFixed(1)} hrs/day` },
        { label: "Per Subject per Day", value: `${(perSubject / 7).toFixed(1)} hrs` },
      ];
    },
  },

  "reading-time": {
    fields: [
      { id: "words", label: "Word Count", type: "number", placeholder: "5000", min: 0 },
      { id: "speed", label: "Reading Speed (WPM)", type: "number", placeholder: "200", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const words = parseFloat(values.words) || 0;
      const speed = parseFloat(values.speed) || 200;
      const minutes = words / speed;
      const hours = Math.floor(minutes / 60);
      const mins = Math.round(minutes % 60);
      return [
        { label: "Reading Time", value: hours > 0 ? `${hours}h ${mins}m` : `${mins} minutes` },
        { label: "Total Minutes", value: Math.round(minutes) },
        { label: "Pages (250 words/page)", value: Math.ceil(words / 250) },
      ];
    },
  },

  "word-count": {
    fields: [
      { id: "text", label: "Text", type: "text", placeholder: "Enter your text here..." },
    ],
    calculate: (values: Record<string, string>) => {
      const text = values.text || "";
      const words = text.trim().split(/\\s+/).filter(w => w.length > 0).length;
      const chars = text.length;
      const charsNoSpaces = text.replace(/\\s/g, "").length;
      const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      return [
        { label: "Words", value: words },
        { label: "Characters", value: chars },
        { label: "Characters (no spaces)", value: charsNoSpaces },
        { label: "Sentences", value: sentences },
      ];
    },
  },

  "typing-speed": {
    fields: [
      { id: "words", label: "Words Typed", type: "number", placeholder: "100", min: 0 },
      { id: "minutes", label: "Time (minutes)", type: "number", placeholder: "2", min: 0.1, step: 0.1 },
      { id: "errors", label: "Errors", type: "number", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const words = parseFloat(values.words) || 0;
      const minutes = parseFloat(values.minutes) || 1;
      const errors = parseFloat(values.errors) || 0;
      const grossWPM = words / minutes;
      const netWPM = (words - errors) / minutes;
      const accuracy = ((words - errors) / words) * 100;
      return [
        { label: "Gross WPM", value: grossWPM.toFixed(1) },
        { label: "Net WPM", value: netWPM.toFixed(1) },
        { label: "Accuracy", value: `${accuracy.toFixed(1)}%` },
      ];
    },
  },

  "sat-score": {
    fields: [
      { id: "reading", label: "Reading Raw Score (0-52)", type: "number", placeholder: "40", min: 0, max: 52 },
      { id: "writing", label: "Writing Raw Score (0-44)", type: "number", placeholder: "35", min: 0, max: 44 },
      { id: "math", label: "Math Raw Score (0-58)", type: "number", placeholder: "45", min: 0, max: 58 },
    ],
    calculate: (values: Record<string, string>) => {
      const reading = parseFloat(values.reading) || 0;
      const writing = parseFloat(values.writing) || 0;
      const math = parseFloat(values.math) || 0;
      // Simplified conversion (actual is more complex)
      const readingScore = Math.round((reading / 52) * 400 + 200);
      const writingScore = Math.round((writing / 44) * 400 + 200);
      const mathScore = Math.round((math / 58) * 800 + 200);
      const evidenceBased = readingScore + writingScore;
      const total = evidenceBased + mathScore;
      return [
        { label: "Evidence-Based Reading & Writing", value: evidenceBased },
        { label: "Math", value: mathScore },
        { label: "Total Score", value: total },
      ];
    },
  },

  "essay-length": {
    fields: [
      { id: "words", label: "Word Count", type: "number", placeholder: "1500", min: 0 },
      {
        id: "spacing", label: "Spacing", type: "select", options: [
          { value: "single", label: "Single Spaced" },
          { value: "double", label: "Double Spaced" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const words = parseFloat(values.words) || 0;
      const spacing = values.spacing || "double";
      const wordsPerPage = spacing === "single" ? 500 : 250;
      const pages = words / wordsPerPage;
      const minutes = words / 40; // average writing speed
      return [
        { label: "Pages", value: pages.toFixed(1) },
        { label: "Words", value: words },
        { label: "Estimated Writing Time", value: `${Math.round(minutes)} min` },
      ];
    },
  },

  "class-credits": {
    fields: [
      { id: "classes", label: "Number of Classes", type: "number", placeholder: "5", min: 1 },
      { id: "creditsPerClass", label: "Average Credits per Class", type: "number", placeholder: "3", min: 0.5, step: 0.5 },
    ],
    calculate: (values: Record<string, string>) => {
      const classes = parseFloat(values.classes) || 0;
      const creditsPerClass = parseFloat(values.creditsPerClass) || 3;
      const totalCredits = classes * creditsPerClass;
      const status = totalCredits >= 12 ? "Full-time" : "Part-time";
      return [
        { label: "Total Credits", value: totalCredits },
        { label: "Student Status", value: status },
        { label: "Contact Hours/Week", value: Math.round(totalCredits * 3) },
      ];
    },
  },

  scholarship: {
    fields: [
      { id: "tuition", label: "Annual Tuition ($)", type: "number", placeholder: "30000", min: 0 },
      { id: "scholarship", label: "Scholarship Amount ($)", type: "number", placeholder: "15000", min: 0 },
      { id: "years", label: "Years", type: "number", placeholder: "4", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const tuition = parseFloat(values.tuition) || 0;
      const scholarship = parseFloat(values.scholarship) || 0;
      const years = parseFloat(values.years) || 1;
      const annualRemaining = tuition - scholarship;
      const totalCost = tuition * years;
      const totalScholarship = scholarship * years;
      const totalRemaining = annualRemaining * years;
      return [
        { label: "Annual Out-of-Pocket", value: `$${annualRemaining.toFixed(2)}` },
        { label: "Total Scholarship", value: `$${totalScholarship.toFixed(2)}` },
        { label: "Total Out-of-Pocket", value: `$${totalRemaining.toFixed(2)}` },
        { label: "Coverage", value: `${((scholarship / tuition) * 100).toFixed(1)}%` },
      ];
    },
  },

  // TIME CALCULATORS
  age: {
    fields: [
      { id: "birthdate", label: "Birthdate (YYYY-MM-DD)", type: "text", placeholder: "1990-01-01" },
    ],
    calculate: (values: Record<string, string>) => {
      const birthdate = new Date(values.birthdate);
      const today = new Date();
      const ageMs = today.getTime() - birthdate.getTime();
      const ageDays = Math.floor(ageMs / (1000 * 60 * 60 * 24));
      const ageYears = Math.floor(ageDays / 365.25);
      const ageMonths = Math.floor((ageDays % 365.25) / 30.44);
      const ageDaysRemaining = Math.floor((ageDays % 365.25) % 30.44);
      return [
        { label: "Age", value: `${ageYears} years, ${ageMonths} months, ${ageDaysRemaining} days` },
        { label: "Total Days", value: ageDays },
        { label: "Total Hours", value: Math.floor(ageMs / (1000 * 60 * 60)) },
      ];
    },
  },

  "date-difference": {
    fields: [
      { id: "date1", label: "Start Date (YYYY-MM-DD)", type: "text", placeholder: "2024-01-01" },
      { id: "date2", label: "End Date (YYYY-MM-DD)", type: "text", placeholder: "2024-12-31" },
    ],
    calculate: (values: Record<string, string>) => {
      const date1 = new Date(values.date1);
      const date2 = new Date(values.date2);
      const diffMs = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffWeeks = Math.floor(diffDays / 7);
      const diffMonths = Math.floor(diffDays / 30.44);
      return [
        { label: "Days", value: diffDays },
        { label: "Weeks", value: `${diffWeeks.toFixed(1)}` },
        { label: "Months", value: `${diffMonths.toFixed(1)}` },
        { label: "Years", value: `${(diffDays / 365.25).toFixed(2)}` },
      ];
    },
  },

  "time-duration": {
    fields: [
      { id: "start", label: "Start Time (HH:MM)", type: "text", placeholder: "09:00" },
      { id: "end", label: "End Time (HH:MM)", type: "text", placeholder: "17:30" },
    ],
    calculate: (values: Record<string, string>) => {
      const [startH, startM] = (values.start || "0:0").split(":").map(Number);
      const [endH, endM] = (values.end || "0:0").split(":").map(Number);
      const startMinutes = startH * 60 + startM;
      const endMinutes = endH * 60 + endM;
      const diffMinutes = endMinutes - startMinutes;
      const hours = Math.floor(diffMinutes / 60);
      const minutes = diffMinutes % 60;
      return [
        { label: "Duration", value: `${hours}h ${minutes}m` },
        { label: "Total Minutes", value: diffMinutes },
        { label: "Total Hours", value: (diffMinutes / 60).toFixed(2) },
      ];
    },
  },

  "business-days": {
    fields: [
      { id: "start", label: "Start Date (YYYY-MM-DD)", type: "text", placeholder: "2024-01-01" },
      { id: "end", label: "End Date (YYYY-MM-DD)", type: "text", placeholder: "2024-01-31" },
    ],
    calculate: (values: Record<string, string>) => {
      const start = new Date(values.start);
      const end = new Date(values.end);
      let businessDays = 0;
      let current = new Date(start);
      while (current <= end) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) businessDays++;
        current.setDate(current.getDate() + 1);
      }
      const totalDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      return [
        { label: "Business Days", value: businessDays },
        { label: "Total Days", value: totalDays },
        { label: "Weekend Days", value: totalDays - businessDays },
      ];
    },
  },

  timezone: {
    fields: [
      { id: "time", label: "Time (HH:MM)", type: "text", placeholder: "14:00" },
      {
        id: "from", label: "From Timezone", type: "select", options: [
          { value: "0", label: "UTC" },
          { value: "-5", label: "EST (UTC-5)" },
          { value: "-8", label: "PST (UTC-8)" },
          { value: "1", label: "CET (UTC+1)" },
          { value: "8", label: "CST (UTC+8)" },
        ]
      },
      {
        id: "to", label: "To Timezone", type: "select", options: [
          { value: "0", label: "UTC" },
          { value: "-5", label: "EST (UTC-5)" },
          { value: "-8", label: "PST (UTC-8)" },
          { value: "1", label: "CET (UTC+1)" },
          { value: "8", label: "CST (UTC+8)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const [hours, minutes] = (values.time || "0:0").split(":").map(Number);
      const fromOffset = parseFloat(values.from) || 0;
      const toOffset = parseFloat(values.to) || 0;
      const utcMinutes = hours * 60 + minutes - fromOffset * 60;
      const targetMinutes = utcMinutes + toOffset * 60;
      const targetHours = Math.floor(targetMinutes / 60) % 24;
      const targetMins = targetMinutes % 60;
      return [
        { label: "Converted Time", value: `${String(targetHours).padStart(2, "0")}:${String(targetMins).padStart(2, "0")}` },
        { label: "Time Difference", value: `${Math.abs(toOffset - fromOffset)} hours` },
      ];
    },
  },

  countdown: {
    fields: [
      { id: "target", label: "Target Date (YYYY-MM-DD)", type: "text", placeholder: "2024-12-31" },
    ],
    calculate: (values: Record<string, string>) => {
      const target = new Date(values.target);
      const today = new Date();
      const diffMs = target.getTime() - today.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffWeeks = Math.floor(diffDays / 7);
      return [
        { label: "Days Until", value: diffDays },
        { label: "Weeks Until", value: diffWeeks },
        { label: "Hours Until", value: diffHours },
        { label: "Status", value: diffDays >= 0 ? "Upcoming" : "Past" },
      ];
    },
  },

  "work-hours": {
    fields: [
      { id: "hours", label: "Regular Hours", type: "number", placeholder: "40", min: 0 },
      { id: "overtime", label: "Overtime Hours", type: "number", placeholder: "5", min: 0 },
      { id: "rate", label: "Hourly Rate ($)", type: "number", placeholder: "20", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const hours = parseFloat(values.hours) || 0;
      const overtime = parseFloat(values.overtime) || 0;
      const rate = parseFloat(values.rate) || 0;
      const regularPay = hours * rate;
      const overtimePay = overtime * rate * 1.5;
      const totalPay = regularPay + overtimePay;
      return [
        { label: "Regular Pay", value: `$${regularPay.toFixed(2)}` },
        { label: "Overtime Pay", value: `$${overtimePay.toFixed(2)}` },
        { label: "Total Pay", value: `$${totalPay.toFixed(2)}` },
        { label: "Total Hours", value: hours + overtime },
      ];
    },
  },

  shift: {
    fields: [
      { id: "start", label: "Shift Start (HH:MM)", type: "text", placeholder: "08:00" },
      { id: "end", label: "Shift End (HH:MM)", type: "text", placeholder: "16:30" },
      { id: "break", label: "Break Time (minutes)", type: "number", placeholder: "30", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const [startH, startM] = (values.start || "0:0").split(":").map(Number);
      const [endH, endM] = (values.end || "0:0").split(":").map(Number);
      const breakMins = parseFloat(values.break) || 0;
      const startMinutes = startH * 60 + startM;
      const endMinutes = endH * 60 + endM;
      const totalMinutes = endMinutes - startMinutes;
      const workMinutes = totalMinutes - breakMins;
      const hours = Math.floor(workMinutes / 60);
      const minutes = workMinutes % 60;
      return [
        { label: "Total Shift", value: `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m` },
        { label: "Work Time", value: `${hours}h ${minutes}m` },
        { label: "Break Time", value: `${breakMins} min` },
      ];
    },
  },

  sleep: {
    fields: [
      { id: "bedtime", label: "Bedtime (HH:MM)", type: "text", placeholder: "22:00" },
      { id: "cycles", label: "Sleep Cycles", type: "number", placeholder: "5", min: 1, max: 8 },
    ],
    calculate: (values: Record<string, string>) => {
      const [hours, minutes] = (values.bedtime || "22:0").split(":").map(Number);
      const cycles = parseFloat(values.cycles) || 5;
      const cycleMinutes = 90; // standard sleep cycle
      const sleepMinutes = cycles * cycleMinutes;
      const wakeMinutes = (hours * 60 + minutes + sleepMinutes + 14) % 1440; // +14 for fall asleep time
      const wakeHours = Math.floor(wakeMinutes / 60);
      const wakeMins = wakeMinutes % 60;
      return [
        { label: "Wake Time", value: `${String(wakeHours).padStart(2, "0")}:${String(wakeMins).padStart(2, "0")}` },
        { label: "Sleep Duration", value: `${(sleepMinutes / 60).toFixed(1)} hours` },
        { label: "Sleep Cycles", value: cycles },
      ];
    },
  },

  meeting: {
    fields: [
      { id: "attendees", label: "Number of Attendees", type: "number", placeholder: "5", min: 1 },
      { id: "duration", label: "Meeting Duration (minutes)", type: "number", placeholder: "60", min: 1 },
      { id: "avgSalary", label: "Average Hourly Rate ($)", type: "number", placeholder: "50", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const attendees = parseFloat(values.attendees) || 1;
      const duration = parseFloat(values.duration) || 60;
      const avgSalary = parseFloat(values.avgSalary) || 0;
      const totalPersonHours = (attendees * duration) / 60;
      const cost = totalPersonHours * avgSalary;
      return [
        { label: "Total Person-Hours", value: totalPersonHours.toFixed(2) },
        { label: "Meeting Cost", value: `$${cost.toFixed(2)}` },
        { label: "Cost per Attendee", value: `$${(cost / attendees).toFixed(2)}` },
      ];
    },
  },

  // COOKING CALCULATORS
  "recipe-scaler": {
    fields: [
      { id: "original", label: "Original Servings", type: "number", placeholder: "4", min: 1 },
      { id: "desired", label: "Desired Servings", type: "number", placeholder: "8", min: 1 },
      { id: "ingredient", label: "Original Amount", type: "number", placeholder: "2", step: 0.25 },
    ],
    calculate: (values: Record<string, string>) => {
      const original = parseFloat(values.original) || 1;
      const desired = parseFloat(values.desired) || 1;
      const ingredient = parseFloat(values.ingredient) || 0;
      const multiplier = desired / original;
      const scaled = ingredient * multiplier;
      return [
        { label: "Scaling Factor", value: `${multiplier.toFixed(2)}x` },
        { label: "Scaled Amount", value: scaled.toFixed(2) },
        { label: "New Servings", value: desired },
      ];
    },
  },

  "cooking-time": {
    fields: [
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "5", min: 0.1, step: 0.1 },
      {
        id: "type", label: "Meat Type", type: "select", options: [
          { value: "20", label: "Chicken (20 min/lb)" },
          { value: "15", label: "Turkey (15 min/lb)" },
          { value: "25", label: "Beef Roast (25 min/lb)" },
          { value: "30", label: "Pork Roast (30 min/lb)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const minsPerLb = parseFloat(values.type) || 20;
      const totalMinutes = weight * minsPerLb;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = Math.round(totalMinutes % 60);
      return [
        { label: "Cooking Time", value: `${hours}h ${minutes}m` },
        { label: "Total Minutes", value: Math.round(totalMinutes) },
        { label: "Weight", value: `${weight} lbs` },
      ];
    },
  },

  portion: {
    fields: [
      { id: "servings", label: "Number of Servings", type: "number", placeholder: "8", min: 1 },
      { id: "portionSize", label: "Portion Size (oz)", type: "number", placeholder: "6", min: 0.5, step: 0.5 },
    ],
    calculate: (values: Record<string, string>) => {
      const servings = parseFloat(values.servings) || 1;
      const portionSize = parseFloat(values.portionSize) || 6;
      const totalOz = servings * portionSize;
      const lbs = totalOz / 16;
      const grams = totalOz * 28.35;
      return [
        { label: "Total Ounces", value: `${totalOz.toFixed(1)} oz` },
        { label: "Total Pounds", value: `${lbs.toFixed(2)} lbs` },
        { label: "Total Grams", value: `${grams.toFixed(0)} g` },
        { label: "Servings", value: servings },
      ];
    },
  },

  nutrition: {
    fields: [
      { id: "protein", label: "Protein (g)", type: "number", placeholder: "25", min: 0 },
      { id: "carbs", label: "Carbs (g)", type: "number", placeholder: "30", min: 0 },
      { id: "fats", label: "Fats (g)", type: "number", placeholder: "10", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const protein = parseFloat(values.protein) || 0;
      const carbs = parseFloat(values.carbs) || 0;
      const fats = parseFloat(values.fats) || 0;
      const calories = protein * 4 + carbs * 4 + fats * 9;
      const proteinPct = (protein * 4 / calories) * 100;
      const carbsPct = (carbs * 4 / calories) * 100;
      const fatsPct = (fats * 9 / calories) * 100;
      return [
        { label: "Total Calories", value: Math.round(calories) },
        { label: "Protein", value: `${protein}g (${proteinPct.toFixed(0)}%)` },
        { label: "Carbs", value: `${carbs}g (${carbsPct.toFixed(0)}%)` },
        { label: "Fats", value: `${fats}g (${fatsPct.toFixed(0)}%)` },
      ];
    },
  },

  baking: {
    fields: [
      { id: "cups", label: "Cups", type: "number", placeholder: "2", min: 0, step: 0.25 },
    ],
    calculate: (values: Record<string, string>) => {
      const cups = parseFloat(values.cups) || 0;
      const ml = cups * 236.588;
      const oz = cups * 8;
      const tbsp = cups * 16;
      const tsp = cups * 48;
      return [
        { label: "Milliliters", value: `${ml.toFixed(1)} ml` },
        { label: "Fluid Ounces", value: `${oz.toFixed(1)} fl oz` },
        { label: "Tablespoons", value: `${tbsp.toFixed(1)} tbsp` },
        { label: "Teaspoons", value: `${tsp.toFixed(1)} tsp` },
      ];
    },
  },

  "meat-temp": {
    fields: [
      {
        id: "meat", label: "Meat Type", type: "select", options: [
          { value: "165", label: "Chicken/Poultry" },
          { value: "145", label: "Beef Medium-Rare" },
          { value: "160", label: "Beef Medium/Pork" },
          { value: "145", label: "Fish" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const tempF = parseFloat(values.meat) || 165;
      const tempC = (tempF - 32) * 5 / 9;
      const resting = "Let rest 3-5 minutes";
      return [
        { label: "Safe Temperature", value: `${tempF}°F` },
        { label: "Celsius", value: `${tempC.toFixed(1)}°C` },
        { label: "Note", value: resting },
      ];
    },
  },

  pizza: {
    fields: [
      { id: "pizzas", label: "Number of Pizzas", type: "number", placeholder: "2", min: 1 },
      { id: "size", label: "Pizza Size (inches)", type: "number", placeholder: "12", min: 8 },
    ],
    calculate: (values: Record<string, string>) => {
      const pizzas = parseFloat(values.pizzas) || 1;
      const size = parseFloat(values.size) || 12;
      const area = Math.PI * Math.pow(size / 2, 2);
      const totalArea = area * pizzas;
      const flourPerSqIn = 0.08; // approximate
      const flour = totalArea * flourPerSqIn;
      const water = flour * 0.65;
      const yeast = Math.ceil(pizzas * 0.5); // tsp
      return [
        { label: "Flour", value: `${flour.toFixed(0)}g` },
        { label: "Water", value: `${water.toFixed(0)}g` },
        { label: "Yeast", value: `${yeast} tsp` },
        { label: "Salt", value: `${Math.ceil(pizzas * 1.5)}g` },
      ];
    },
  },

  cocktail: {
    fields: [
      { id: "servings", label: "Number of Servings", type: "number", placeholder: "4", min: 1 },
      { id: "spirit", label: "Spirit (oz per serving)", type: "number", placeholder: "2", step: 0.25 },
      { id: "mixer", label: "Mixer (oz per serving)", type: "number", placeholder: "4", step: 0.25 },
    ],
    calculate: (values: Record<string, string>) => {
      const servings = parseFloat(values.servings) || 1;
      const spirit = parseFloat(values.spirit) || 2;
      const mixer = parseFloat(values.mixer) || 4;
      const totalSpirit = servings * spirit;
      const totalMixer = servings * mixer;
      const totalOz = totalSpirit + totalMixer;
      return [
        { label: "Total Spirit", value: `${totalSpirit.toFixed(1)} oz` },
        { label: "Total Mixer", value: `${totalMixer.toFixed(1)} oz` },
        { label: "Total Volume", value: `${totalOz.toFixed(1)} oz` },
        { label: "Ratio", value: `${spirit}:${mixer}` },
      ];
    },
  },

  coffee: {
    fields: [
      { id: "water", label: "Water (oz)", type: "number", placeholder: "16", min: 1 },
      {
        id: "ratio", label: "Coffee to Water Ratio", type: "select", options: [
          { value: "15", label: "1:15 (Strong)" },
          { value: "16", label: "1:16 (Medium)" },
          { value: "17", label: "1:17 (Mild)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const water = parseFloat(values.water) || 16;
      const ratio = parseFloat(values.ratio) || 16;
      const waterGrams = water * 29.5735;
      const coffeeGrams = waterGrams / ratio;
      const tbsp = coffeeGrams / 5; // approximate
      return [
        { label: "Coffee Needed", value: `${coffeeGrams.toFixed(1)}g` },
        { label: "Tablespoons", value: `${tbsp.toFixed(1)} tbsp` },
        { label: "Water", value: `${waterGrams.toFixed(0)}g (${water} oz)` },
        { label: "Ratio", value: `1:${ratio}` },
      ];
    },
  },

  bread: {
    fields: [
      { id: "flour", label: "Flour (g)", type: "number", placeholder: "500", min: 1 },
      { id: "hydration", label: "Hydration %", type: "number", placeholder: "70", min: 50, max: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const flour = parseFloat(values.flour) || 500;
      const hydration = parseFloat(values.hydration) || 70;
      const water = flour * (hydration / 100);
      const salt = flour * 0.02; // 2% of flour
      const yeast = flour * 0.01; // 1% of flour
      return [
        { label: "Water", value: `${water.toFixed(0)}g (${hydration}%)` },
        { label: "Salt", value: `${salt.toFixed(1)}g (2%)` },
        { label: "Yeast", value: `${yeast.toFixed(1)}g (1%)` },
        { label: "Total Dough", value: `${(flour + water + salt + yeast).toFixed(0)}g` },
      ];
    },
  },

  // BUSINESS CALCULATORS
  "profit-margin": {
    fields: [
      { id: "revenue", label: "Revenue ($)", type: "number", placeholder: "100000", min: 0 },
      { id: "cost", label: "Cost ($)", type: "number", placeholder: "60000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const revenue = parseFloat(values.revenue) || 0;
      const cost = parseFloat(values.cost) || 0;
      const profit = revenue - cost;
      const margin = (profit / revenue) * 100;
      const markup = (profit / cost) * 100;
      return [
        { label: "Gross Profit", value: `$${profit.toFixed(2)}` },
        { label: "Profit Margin", value: `${margin.toFixed(2)}%` },
        { label: "Markup", value: `${markup.toFixed(2)}%` },
      ];
    },
  },

  "break-even": {
    fields: [
      { id: "fixed", label: "Fixed Costs ($)", type: "number", placeholder: "50000", min: 0 },
      { id: "price", label: "Price per Unit ($)", type: "number", placeholder: "50", min: 0 },
      { id: "variable", label: "Variable Cost per Unit ($)", type: "number", placeholder: "20", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const fixed = parseFloat(values.fixed) || 0;
      const price = parseFloat(values.price) || 0;
      const variable = parseFloat(values.variable) || 0;
      const contribution = price - variable;
      const breakEven = Math.ceil(fixed / contribution);
      const revenue = breakEven * price;
      return [
        { label: "Break-Even Units", value: breakEven },
        { label: "Break-Even Revenue", value: `$${revenue.toFixed(2)}` },
        { label: "Contribution Margin", value: `$${contribution.toFixed(2)}` },
      ];
    },
  },

  markup: {
    fields: [
      { id: "cost", label: "Cost ($)", type: "number", placeholder: "50", min: 0 },
      { id: "markup", label: "Markup %", type: "number", placeholder: "50", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const cost = parseFloat(values.cost) || 0;
      const markup = parseFloat(values.markup) || 0;
      const price = cost * (1 + markup / 100);
      const profit = price - cost;
      const margin = (profit / price) * 100;
      return [
        { label: "Selling Price", value: `$${price.toFixed(2)}` },
        { label: "Profit", value: `$${profit.toFixed(2)}` },
        { label: "Profit Margin", value: `${margin.toFixed(2)}%` },
      ];
    },
  },

  payroll: {
    fields: [
      { id: "salary", label: "Annual Salary ($)", type: "number", placeholder: "60000", min: 0 },
      {
        id: "frequency", label: "Pay Frequency", type: "select", options: [
          { value: "52", label: "Weekly" },
          { value: "26", label: "Bi-weekly" },
          { value: "24", label: "Semi-monthly" },
          { value: "12", label: "Monthly" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const salary = parseFloat(values.salary) || 0;
      const frequency = parseFloat(values.frequency) || 26;
      const gross = salary / frequency;
      const monthly = salary / 12;
      return [
        { label: "Gross per Paycheck", value: `$${gross.toFixed(2)}` },
        { label: "Monthly Gross", value: `$${monthly.toFixed(2)}` },
        { label: "Annual Salary", value: `$${salary.toFixed(2)}` },
      ];
    },
  },

  discount: {
    fields: [
      { id: "price", label: "Original Price ($)", type: "number", placeholder: "100", min: 0 },
      { id: "discount", label: "Discount %", type: "number", placeholder: "20", min: 0, max: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const price = parseFloat(values.price) || 0;
      const discount = parseFloat(values.discount) || 0;
      const savings = price * (discount / 100);
      const final = price - savings;
      return [
        { label: "Final Price", value: `$${final.toFixed(2)}` },
        { label: "You Save", value: `$${savings.toFixed(2)}` },
        { label: "Discount", value: `${discount}%` },
      ];
    },
  },

  "sales-tax": {
    fields: [
      { id: "price", label: "Price ($)", type: "number", placeholder: "100", min: 0 },
      { id: "tax", label: "Tax Rate %", type: "number", placeholder: "8.5", min: 0, step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const price = parseFloat(values.price) || 0;
      const tax = parseFloat(values.tax) || 0;
      const taxAmount = price * (tax / 100);
      const total = price + taxAmount;
      return [
        { label: "Subtotal", value: `$${price.toFixed(2)}` },
        { label: "Sales Tax", value: `$${taxAmount.toFixed(2)}` },
        { label: "Total", value: `$${total.toFixed(2)}` },
      ];
    },
  },

  commission: {
    fields: [
      { id: "sales", label: "Total Sales ($)", type: "number", placeholder: "50000", min: 0 },
      { id: "rate", label: "Commission Rate %", type: "number", placeholder: "5", min: 0, step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const sales = parseFloat(values.sales) || 0;
      const rate = parseFloat(values.rate) || 0;
      const commission = sales * (rate / 100);
      return [
        { label: "Commission Earned", value: `$${commission.toFixed(2)}` },
        { label: "Commission Rate", value: `${rate}%` },
        { label: "Total Sales", value: `$${sales.toFixed(2)}` },
      ];
    },
  },

  "hourly-rate": {
    fields: [
      { id: "annual", label: "Desired Annual Income ($)", type: "number", placeholder: "100000", min: 0 },
      { id: "hours", label: "Billable Hours/Week", type: "number", placeholder: "30", min: 1 },
      { id: "weeks", label: "Working Weeks/Year", type: "number", placeholder: "48", min: 1, max: 52 },
    ],
    calculate: (values: Record<string, string>) => {
      const annual = parseFloat(values.annual) || 0;
      const hours = parseFloat(values.hours) || 0;
      const weeks = parseFloat(values.weeks) || 48;
      const totalHours = hours * weeks;
      const hourlyRate = annual / totalHours;
      const dailyRate = hourlyRate * 8;
      return [
        { label: "Hourly Rate", value: `$${hourlyRate.toFixed(2)}/hr` },
        { label: "Daily Rate (8 hrs)", value: `$${dailyRate.toFixed(2)}` },
        { label: "Total Billable Hours", value: totalHours },
      ];
    },
  },

  depreciation: {
    fields: [
      { id: "cost", label: "Asset Cost ($)", type: "number", placeholder: "50000", min: 0 },
      { id: "salvage", label: "Salvage Value ($)", type: "number", placeholder: "5000", min: 0 },
      { id: "years", label: "Useful Life (years)", type: "number", placeholder: "5", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const cost = parseFloat(values.cost) || 0;
      const salvage = parseFloat(values.salvage) || 0;
      const years = parseFloat(values.years) || 1;
      const depreciable = cost - salvage;
      const annualDepreciation = depreciable / years;
      const monthlyDepreciation = annualDepreciation / 12;
      return [
        { label: "Annual Depreciation", value: `$${annualDepreciation.toFixed(2)}` },
        { label: "Monthly Depreciation", value: `$${monthlyDepreciation.toFixed(2)}` },
        { label: "Depreciable Amount", value: `$${depreciable.toFixed(2)}` },
      ];
    },
  },

  inventory: {
    fields: [
      { id: "cogs", label: "Cost of Goods Sold ($)", type: "number", placeholder: "500000", min: 0 },
      { id: "avgInventory", label: "Average Inventory ($)", type: "number", placeholder: "50000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const cogs = parseFloat(values.cogs) || 0;
      const avgInventory = parseFloat(values.avgInventory) || 1;
      const turnover = cogs / avgInventory;
      const daysInventory = 365 / turnover;
      return [
        { label: "Inventory Turnover Ratio", value: turnover.toFixed(2) },
        { label: "Days in Inventory", value: Math.round(daysInventory) },
        { label: "Annual COGS", value: `$${cogs.toFixed(2)}` },
      ];
    },
  },

  // PET CARE CALCULATORS
  "pet-age": {
    fields: [
      { id: "age", label: "Pet's Age (years)", type: "number", placeholder: "5", min: 0 },
      {
        id: "type", label: "Pet Type", type: "select", options: [
          { value: "dog_small", label: "Small Dog (<20 lbs)" },
          { value: "dog_med", label: "Medium Dog (20-50 lbs)" },
          { value: "dog_large", label: "Large Dog (>50 lbs)" },
          { value: "cat", label: "Cat" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const age = parseFloat(values.age) || 0;
      const type = values.type || "cat";
      let humanYears = 0;

      if (type === "cat") {
        if (age <= 1) humanYears = 15;
        else if (age <= 2) humanYears = 24;
        else humanYears = 24 + (age - 2) * 4;
      } else {
        // Dogs
        if (age <= 1) humanYears = 15;
        else if (age <= 2) humanYears = 24;
        else {
          const multiplier = type === "dog_small" ? 4 : type === "dog_med" ? 5 : 6;
          humanYears = 24 + (age - 2) * multiplier;
        }
      }
      return [
        { label: "Human Years", value: `${Math.round(humanYears)} years` },
      ];
    },
  },

  "pet-food": {
    fields: [
      { id: "weight", label: "Pet Weight (lbs)", type: "number", placeholder: "20", min: 0 },
      { id: "calories", label: "Food Calories (kcal/cup)", type: "number", placeholder: "350", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const kcalPerCup = parseFloat(values.calories) || 350;
      const weightKg = weight * 0.453592;
      const rer = 70 * Math.pow(weightKg, 0.75);
      const dailyCals = rer * 1.6;
      const cups = dailyCals / kcalPerCup;
      return [
        { label: "Daily Calories", value: `${Math.round(dailyCals)} kcal` },
        { label: "Cups per Day", value: `${cups.toFixed(1)} cups` },
      ];
    },
  },

  "pet-weight": {
    fields: [
      { id: "current", label: "Current Weight (lbs)", type: "number", placeholder: "30", min: 0 },
      { id: "target", label: "Target Weight (lbs)", type: "number", placeholder: "25", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const current = parseFloat(values.current) || 0;
      const target = parseFloat(values.target) || 0;
      const diff = current - target;
      const pct = (diff / current) * 100;
      return [
        { label: "Weight to Lose/Gain", value: `${Math.abs(diff).toFixed(1)} lbs` },
        { label: "Percentage Change", value: `${Math.abs(pct).toFixed(1)}%` },
      ];
    },
  },

  "pet-calorie": {
    fields: [
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "20", min: 0 },
      {
        id: "activity", label: "Activity Level", type: "select", options: [
          { value: "1.2", label: "Inactive/Obese Prone" },
          { value: "1.6", label: "Average Adult" },
          { value: "2.0", label: "Active/Working" },
          { value: "3.0", label: "Puppy/Kitten" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const factor = parseFloat(values.activity) || 1.6;
      const weightKg = weight * 0.453592;
      const rer = 70 * Math.pow(weightKg, 0.75);
      const needs = rer * factor;
      return [
        { label: "Daily Calories", value: `${Math.round(needs)} kcal` },
        { label: "RER (Resting)", value: `${Math.round(rer)} kcal` },
      ];
    },
  },

  "pregnancy-pet": {
    fields: [
      { id: "days", label: "Days Since Mating", type: "number", placeholder: "10", min: 0 },
      {
        id: "type", label: "Pet Type", type: "select", options: [
          { value: "dog", label: "Dog" },
          { value: "cat", label: "Cat" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const days = parseFloat(values.days) || 0;
      const gestation = 63; // Average for both
      const remaining = gestation - days;
      return [
        { label: "Estimated Due Date", value: `In ${Math.max(0, remaining)} days` },
        { label: "Gestation Progress", value: `${Math.min(100, (days / gestation) * 100).toFixed(0)}%` },
      ];
    },
  },

  "medication": {
    fields: [
      { id: "weight", label: "Pet Weight (lbs)", type: "number", placeholder: "20", min: 0 },
      { id: "dosage", label: "Dosage (mg/kg)", type: "number", placeholder: "5", min: 0 },
      { id: "concentration", label: "Concentration (mg/ml)", type: "number", placeholder: "10", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 0;
      const dosage = parseFloat(values.dosage) || 0;
      const concentration = parseFloat(values.concentration) || 1;
      const weightKg = weight * 0.453592;
      const totalMg = weightKg * dosage;
      const ml = totalMg / concentration;
      return [
        { label: "Total Dose", value: `${totalMg.toFixed(1)} mg` },
        { label: "Volume to Administer", value: `${ml.toFixed(2)} ml` },
      ];
    },
  },

  "aquarium-size": {
    fields: [
      { id: "length", label: "Length (inches)", type: "number", placeholder: "24", min: 0 },
      { id: "width", label: "Width (inches)", type: "number", placeholder: "12", min: 0 },
      { id: "height", label: "Height (inches)", type: "number", placeholder: "16", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const l = parseFloat(values.length) || 0;
      const w = parseFloat(values.width) || 0;
      const h = parseFloat(values.height) || 0;
      const volCuIn = l * w * h;
      const gallons = volCuIn / 231;
      const liters = gallons * 3.78541;
      return [
        { label: "Volume (Gallons)", value: `${gallons.toFixed(1)} gal` },
        { label: "Volume (Liters)", value: `${liters.toFixed(1)} L` },
      ];
    },
  },

  "pet-cost": {
    fields: [
      { id: "food", label: "Monthly Food ($)", type: "number", placeholder: "50", min: 0 },
      { id: "vet", label: "Annual Vet ($)", type: "number", placeholder: "300", min: 0 },
      { id: "other", label: "Other Monthly ($)", type: "number", placeholder: "20", min: 0 },
      { id: "lifespan", label: "Expected Lifespan (years)", type: "number", placeholder: "12", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const food = parseFloat(values.food) || 0;
      const vet = parseFloat(values.vet) || 0;
      const other = parseFloat(values.other) || 0;
      const lifespan = parseFloat(values.lifespan) || 0;
      const annual = (food + other) * 12 + vet;
      const total = annual * lifespan;
      return [
        { label: "Annual Cost", value: `$${annual.toFixed(2)}` },
        { label: "Lifetime Cost", value: `$${total.toFixed(2)}` },
      ];
    },
  },

  "litter-box": {
    fields: [
      { id: "cats", label: "Number of Cats", type: "number", placeholder: "2", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const cats = parseFloat(values.cats) || 1;
      const boxes = cats + 1;
      return [
        { label: "Recommended Litter Boxes", value: boxes },
        { label: "Rule", value: "N + 1 rule" },
      ];
    },
  },

  "vaccination": {
    fields: [
      { id: "age", label: "Puppy/Kitten Age (weeks)", type: "number", placeholder: "8", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const age = parseFloat(values.age) || 0;
      let next = "";
      if (age < 6) next = "Start at 6-8 weeks";
      else if (age < 16) next = "Next round due soon (every 3-4 weeks until 16 weeks)";
      else next = "Booster at 1 year";
      return [
        { label: "Status", value: next },
      ];
    },
  },

  "breed-size": {
    fields: [
      { id: "weight", label: "Current Weight (lbs)", type: "number", placeholder: "10", min: 0 },
      { id: "age", label: "Age (weeks)", type: "number", placeholder: "12", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.weight) || 0;
      const a = parseFloat(values.age) || 1;
      // Very rough estimate: (Current Weight / Age in weeks) * 52
      const adult = (w / a) * 52;
      return [
        { label: "Estimated Adult Weight", value: `${adult.toFixed(1)} lbs` },
        { label: "Note", value: "Rough estimate, varies by breed" },
      ];
    },
  },

  "pet-insurance": {
    fields: [
      { id: "monthly", label: "Monthly Premium ($)", type: "number", placeholder: "40", min: 0 },
      { id: "deductible", label: "Annual Deductible ($)", type: "number", placeholder: "250", min: 0 },
      { id: "reimbursement", label: "Reimbursement (%)", type: "number", placeholder: "80", min: 0, max: 100 },
      { id: "bill", label: "Hypothetical Vet Bill ($)", type: "number", placeholder: "2000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const premium = parseFloat(values.monthly) || 0;
      const deductible = parseFloat(values.deductible) || 0;
      const rate = (parseFloat(values.reimbursement) || 0) / 100;
      const bill = parseFloat(values.bill) || 0;

      const covered = Math.max(0, bill - deductible) * rate;
      const outOfPocket = bill - covered + (premium * 12); // Annualized cost context

      return [
        { label: "Insurance Pays", value: `$${covered.toFixed(2)}` },
        { label: "You Pay (Bill)", value: `$${(bill - covered).toFixed(2)}` },
        { label: "Annual Cost (Premium + Bill)", value: `$${outOfPocket.toFixed(2)}` },
      ];
    },
  },

  "grooming": {
    fields: [
      {
        id: "breed", label: "Coat Type", type: "select", options: [
          { value: "short", label: "Short Hair" },
          { value: "long", label: "Long/Double Coat" },
          { value: "poodle", label: "Curly/Poodle" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const type = values.breed;
      let freq = "";
      if (type === "short") freq = "Brush weekly, bath monthly";
      else if (type === "long") freq = "Brush daily, bath monthly";
      else freq = "Professional groom every 4-6 weeks";
      return [
        { label: "Recommended Schedule", value: freq },
      ];
    },
  },

  "exercise-needs": {
    fields: [
      {
        id: "energy", label: "Energy Level", type: "select", options: [
          { value: "low", label: "Low (Bulldog, etc.)" },
          { value: "med", label: "Medium (Lab, etc.)" },
          { value: "high", label: "High (Husky, Border Collie)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const level = values.energy;
      let min = "30";
      if (level === "med") min = "60";
      if (level === "high") min = "90+";
      return [
        { label: "Daily Exercise", value: `${min} minutes` },
        { label: "Intensity", value: level === "high" ? "Vigorous activity needed" : "Walks and play" },
      ];
    },
  },

  "travel-pets": {
    fields: [
      {
        id: "mode", label: "Travel Mode", type: "select", options: [
          { value: "car", label: "Car" },
          { value: "plane", label: "Plane" },
        ]
      },
      { id: "duration", label: "Duration (hours)", type: "number", placeholder: "4", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const mode = values.mode;
      const hours = parseFloat(values.duration) || 0;
      const breaks = mode === "car" ? Math.floor(hours / 3) : 0;
      return [
        { label: "Potty/Water Breaks", value: mode === "car" ? `${breaks} stops` : "N/A (Crate)" },
        { label: "Preparation", value: mode === "plane" ? "Check airline carrier rules" : "Secure crate/harness" },
      ];
    },
  },

  "adoption-cost": {
    fields: [
      { id: "fee", label: "Adoption Fee ($)", type: "number", placeholder: "150", min: 0 },
      { id: "supplies", label: "Initial Supplies ($)", type: "number", placeholder: "200", min: 0 },
      { id: "vet", label: "Initial Vet Visit ($)", type: "number", placeholder: "100", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const total = (parseFloat(values.fee) || 0) + (parseFloat(values.supplies) || 0) + (parseFloat(values.vet) || 0);
      return [
        { label: "Total Startup Cost", value: `$${total.toFixed(2)}` },
      ];
    },
  },

  "boarding": {
    fields: [
      { id: "days", label: "Number of Days", type: "number", placeholder: "7", min: 1 },
      { id: "rate", label: "Daily Rate ($)", type: "number", placeholder: "40", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const days = parseFloat(values.days) || 0;
      const rate = parseFloat(values.rate) || 0;
      return [
        { label: "Total Boarding Cost", value: `$${(days * rate).toFixed(2)}` },
      ];
    },
  },

  "training-time": {
    fields: [
      { id: "sessions", label: "Sessions per Week", type: "number", placeholder: "3", min: 1 },
      { id: "minutes", label: "Minutes per Session", type: "number", placeholder: "15", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const sessions = parseFloat(values.sessions) || 0;
      const mins = parseFloat(values.minutes) || 0;
      const total = sessions * mins;
      return [
        { label: "Weekly Training", value: `${total} minutes` },
        { label: "Consistency", value: "Key to success!" },
      ];
    },
  },

  "pet-emergency-fund": {
    fields: [
      {
        id: "risk", label: "Risk Level", type: "select", options: [
          { value: "low", label: "Low (Young, Healthy)" },
          { value: "med", label: "Medium (Senior, Breed issues)" },
          { value: "high", label: "High (Chronic condition)" },
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const risk = values.risk;
      let fund = "1000";
      if (risk === "med") fund = "2000-3000";
      if (risk === "high") fund = "5000+";
      return [
        { label: "Recommended Fund", value: `$${fund}` },
      ];
    },
  },

  // ==========================================
  // AUTOMOTIVE CALCULATORS
  // ==========================================

  "fuel-cost": {
    fields: [
      { id: "distance", label: "Trip Distance (miles/km)", type: "number", placeholder: "300", min: 0 },
      { id: "mpg", label: "Fuel Efficiency (MPG or km/L)", type: "number", placeholder: "25", min: 0.1 },
      { id: "price", label: "Gas Price ($ per unit)", type: "number", placeholder: "3.50", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const dist = parseFloat(values.distance) || 0;
      const mpg = parseFloat(values.mpg) || 1;
      const price = parseFloat(values.price) || 0;
      const gallons = dist / mpg;
      const cost = gallons * price;
      return [
        { label: "Estimated Cost", value: `$${cost.toFixed(2)}` },
        { label: "Fuel Needed", value: `${gallons.toFixed(2)} units` },
      ];
    },
  },

  "mpg": {
    fields: [
      { id: "miles", label: "Distance Driven", type: "number", placeholder: "300", min: 0 },
      { id: "gallons", label: "Fuel Used (gallons/liters)", type: "number", placeholder: "10", min: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const miles = parseFloat(values.miles) || 0;
      const gallons = parseFloat(values.gallons) || 1;
      return [{ label: "Fuel Efficiency", value: (miles / gallons).toFixed(2) }];
    },
  },

  "lease": {
    fields: [
      { id: "msrp", label: "Vehicle Price (MSRP)", type: "number", placeholder: "30000", min: 0 },
      { id: "residual", label: "Residual Value (%)", type: "number", placeholder: "55", min: 0, max: 100 },
      { id: "rate", label: "Money Factor (or APR / 2400)", type: "number", placeholder: "0.0025", step: 0.0001 },
      { id: "term", label: "Lease Term (months)", type: "number", placeholder: "36", min: 1 },
      { id: "down", label: "Down Payment ($)", type: "number", placeholder: "2000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const msrp = parseFloat(values.msrp) || 0;
      const residualPct = (parseFloat(values.residual) || 0) / 100;
      const mf = parseFloat(values.rate) || 0.0025;
      const term = parseFloat(values.term) || 36;
      const down = parseFloat(values.down) || 0;

      const netCapCost = msrp - down;
      const residualValue = msrp * residualPct;
      const depreciation = (netCapCost - residualValue) / term;
      const rentCharge = (netCapCost + residualValue) * mf;
      const payment = depreciation + rentCharge;

      return [
        { label: "Monthly Payment (Pre-tax)", value: `$${payment.toFixed(2)}` },
        { label: "Residual Value", value: `$${residualValue.toFixed(2)}` },
        { label: "Total Lease Cost", value: `$${(payment * term + down).toFixed(2)}` },
      ];
    },
  },

  "car-loan": {
    fields: [
      { id: "price", label: "Vehicle Price ($)", type: "number", placeholder: "25000", min: 0 },
      { id: "down", label: "Down Payment ($)", type: "number", placeholder: "5000", min: 0 },
      { id: "rate", label: "Interest Rate (APR %)", type: "number", placeholder: "5.5", step: 0.1 },
      { id: "months", label: "Loan Term (months)", type: "number", placeholder: "60", min: 1 },
      { id: "trade", label: "Trade-in Value ($)", type: "number", placeholder: "0", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const price = parseFloat(values.price) || 0;
      const down = parseFloat(values.down) || 0;
      const trade = parseFloat(values.trade) || 0;
      const r = (parseFloat(values.rate) || 0) / 100 / 12;
      const n = parseFloat(values.months) || 60;

      const loanAmount = Math.max(0, price - down - trade);

      let monthly = 0;
      if (r === 0) monthly = loanAmount / n;
      else monthly = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      return [
        { label: "Monthly Payment", value: `$${monthly.toFixed(2)}` },
        { label: "Loan Amount", value: `$${loanAmount.toFixed(2)}` },
        { label: "Total Interest", value: `$${(monthly * n - loanAmount).toFixed(2)}` },
      ];
    },
  },

  "tire-size": {
    fields: [
      { id: "width", label: "Width (mm) - e.g., 205", type: "number", placeholder: "205" },
      { id: "aspect", label: "Aspect Ratio - e.g., 55", type: "number", placeholder: "55" },
      { id: "rim", label: "Rim Diameter (in) - e.g., 16", type: "number", placeholder: "16" },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.width) || 0;
      const a = parseFloat(values.aspect) || 0;
      const r = parseFloat(values.rim) || 0;

      const sidewallHeightmm = w * (a / 100);
      const diameterInches = (sidewallHeightmm * 2 / 25.4) + r;
      const circumference = diameterInches * Math.PI;

      return [
        { label: "Total Diameter", value: `${diameterInches.toFixed(2)} in` },
        { label: "Sidewall Height", value: `${(sidewallHeightmm / 25.4).toFixed(2)} in` },
        { label: "Circumference", value: `${circumference.toFixed(2)} in` },
      ];
    },
  },

  "horsepower": {
    fields: [
      { id: "torque", label: "Torque (lb-ft)", type: "number", placeholder: "300" },
      { id: "rpm", label: "RPM", type: "number", placeholder: "5252" },
    ],
    calculate: (values: Record<string, string>) => {
      const t = parseFloat(values.torque) || 0;
      const rpm = parseFloat(values.rpm) || 0;
      const hp = (t * rpm) / 5252;
      return [{ label: "Horsepower", value: `${hp.toFixed(1)} HP` }];
    },
  },

  "0-60": {
    fields: [
      { id: "weight", label: "Vehicle Weight (lbs)", type: "number", placeholder: "3500" },
      { id: "hp", label: "Horsepower (HP)", type: "number", placeholder: "250" },
      { id: "drive", label: "Drive (RWD/FWD=1, AWD=0.9)", type: "number", placeholder: "1", step: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const weight = parseFloat(values.weight) || 1;
      const hp = parseFloat(values.hp) || 1;
      const driveFactor = parseFloat(values.drive) || 1;

      // Simplified empirical estimation
      const ratio = weight / hp;
      const time = driveFactor * 0.005 * ratio * Math.sqrt(ratio) * 15;

      return [
        { label: "Est. 0-60 Time", value: `${Math.max(1.5, time).toFixed(2)} s` },
        { label: "Power-to-Weight", value: `${ratio.toFixed(2)} lbs/hp` },
      ];
    },
  },

  "ev-range": {
    fields: [
      { id: "battery", label: "Battery Capacity (kWh)", type: "number", placeholder: "75" },
      { id: "consumption", label: "Consumption (Wh/mi)", type: "number", placeholder: "240" },
    ],
    calculate: (values: Record<string, string>) => {
      const battery = parseFloat(values.battery) || 0;
      const consumption = parseFloat(values.consumption) || 1;
      const range = (battery * 1000) / consumption;
      return [{ label: "Estimated Range", value: `${Math.round(range)} miles` }];
    },
  },

  "maintenance": {
    fields: [
      { id: "oil", label: "Oil Change Cost ($)", type: "number", placeholder: "50" },
      { id: "tires", label: "Tires ($/year)", type: "number", placeholder: "200" },
      { id: "repairs", label: "Repairs ($/year)", type: "number", placeholder: "300" },
      { id: "inspection", label: "Inspection ($/year)", type: "number", placeholder: "50" },
    ],
    calculate: (values: Record<string, string>) => {
      const total = (parseFloat(values.oil) || 0) + (parseFloat(values.tires) || 0) + (parseFloat(values.repairs) || 0) + (parseFloat(values.inspection) || 0);
      return [
        { label: "Annual Maintenance", value: `$${total.toFixed(2)}` },
        { label: "Monthly Average", value: `$${(total / 12).toFixed(2)}` },
      ];
    },
  },

  "emission": {
    fields: [
      { id: "distance", label: "Annual Miles", type: "number", placeholder: "12000" },
      { id: "mpg", label: "Average MPG", type: "number", placeholder: "25" },
    ],
    calculate: (values: Record<string, string>) => {
      const dist = parseFloat(values.distance) || 0;
      const mpg = parseFloat(values.mpg) || 25;
      // Approx 19.6 lbs CO2 per gallon of gasoline
      const gallons = dist / mpg;
      const lbsCO2 = gallons * 19.6;
      const metricTons = (lbsCO2 * 0.453592) / 1000;

      return [
        { label: "Annual CO2", value: `${lbsCO2.toFixed(0)} lbs` },
        { label: "Metric Tons", value: `${metricTons.toFixed(2)} Tonnes` },
      ];
    },
  },

  "insurance-cost": {
    fields: [
      { id: "premium", label: "6-Month Premium ($)", type: "number", placeholder: "600" },
      { id: "deductible", label: "Deductible ($)", type: "number", placeholder: "500" },
    ],
    calculate: (values: Record<string, string>) => {
      const semi = parseFloat(values.premium) || 0;
      const annual = semi * 2;
      const monthly = annual / 12;
      return [
        { label: "Monthly Cost", value: `$${monthly.toFixed(2)}` },
        { label: "Annual Cost", value: `$${annual.toFixed(2)}` },
      ];
    },
  },

  "car-depreciation": {
    fields: [
      { id: "value", label: "Current Value ($)", type: "number", placeholder: "30000" },
      { id: "rate", label: "Annual Depreciation (%)", type: "number", placeholder: "15" },
      { id: "years", label: "Years to Project", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const val = parseFloat(values.value) || 0;
      const rate = (parseFloat(values.rate) || 0) / 100;
      const years = parseFloat(values.years) || 0;

      const futureValue = val * Math.pow(1 - rate, years);
      const lost = val - futureValue;

      return [
        { label: "Future Value", value: `$${futureValue.toFixed(2)}` },
        { label: "Total Loss", value: `$${lost.toFixed(2)}` },
      ];
    },
  },

  "road-trip": {
    fields: [
      { id: "miles", label: "Total Distance (miles)", type: "number", placeholder: "1000" },
      { id: "mpg", label: "Vehicle MPG", type: "number", placeholder: "25" },
      { id: "gasPrice", label: "Gas Price ($/gal)", type: "number", placeholder: "3.50" },
      { id: "food", label: "Food Budget ($)", type: "number", placeholder: "200" },
      { id: "hotel", label: "Hotel Budget ($)", type: "number", placeholder: "300" },
    ],
    calculate: (values: Record<string, string>) => {
      const miles = parseFloat(values.miles) || 0;
      const mpg = parseFloat(values.mpg) || 1;
      const price = parseFloat(values.gasPrice) || 0;
      const extras = (parseFloat(values.food) || 0) + (parseFloat(values.hotel) || 0);

      const fuelCost = (miles / mpg) * price;
      const total = fuelCost + extras;

      return [
        { label: "Fuel Cost", value: `$${fuelCost.toFixed(2)}` },
        { label: "Total Trip Cost", value: `$${total.toFixed(2)}` },
      ];
    },
  },

  "toll": {
    fields: [
      { id: "tolls", label: "Number of Tolls", type: "number", placeholder: "4" },
      { id: "avgCost", label: "Average Cost ($)", type: "number", placeholder: "5.00" },
      { id: "return", label: "Round Trip? (1=Yes, 0=No)", type: "number", placeholder: "1" },
    ],
    calculate: (values: Record<string, string>) => {
      const num = parseFloat(values.tolls) || 0;
      const cost = parseFloat(values.avgCost) || 0;
      const isReturn = parseFloat(values.return) === 1 ? 2 : 1;

      const total = num * cost * isReturn;
      return [{ label: "Total Toll Cost", value: `$${total.toFixed(2)}` }];
    },
  },

  "parking-cost": {
    fields: [
      { id: "rate", label: "Rate ($)", type: "number", placeholder: "10" },
      {
        id: "type", label: "Rate Type", type: "select", options: [
          { value: "1", label: "Per Hour" },
          { value: "24", label: "Per Day" },
          { value: "168", label: "Per Week" }
        ]
      },
      { id: "duration", label: "Duration (in selected units)", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const rate = parseFloat(values.rate) || 0;
      const duration = parseFloat(values.duration) || 0;
      const total = rate * duration;
      return [{ label: "Total Parking Cost", value: `$${total.toFixed(2)}` }];
    },
  },

  "registration": {
    fields: [
      { id: "value", label: "Vehicle Value ($)", type: "number", placeholder: "20000" },
      { id: "rate", label: "Tax Rate (%)", type: "number", placeholder: "2" },
      { id: "fixed", label: "Fixed Fees ($)", type: "number", placeholder: "50" },
    ],
    calculate: (values: Record<string, string>) => {
      const val = parseFloat(values.value) || 0;
      const rate = (parseFloat(values.rate) || 0) / 100;
      const fixed = parseFloat(values.fixed) || 0;
      const total = (val * rate) + fixed;
      return [{ label: "Est. Registration Fee", value: `$${total.toFixed(2)}` }];
    },
  },

  "car-comparison": {
    fields: [
      { id: "car1", label: "Car A Monthly Cost ($)", type: "number", placeholder: "400" },
      { id: "car2", label: "Car B Monthly Cost ($)", type: "number", placeholder: "550" },
      { id: "years", label: "Comparison Period (Years)", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const c1 = parseFloat(values.car1) || 0;
      const c2 = parseFloat(values.car2) || 0;
      const months = (parseFloat(values.years) || 1) * 12;

      const diffMonthly = Math.abs(c1 - c2);
      const totalDiff = diffMonthly * months;
      const cheaper = c1 < c2 ? "Car A" : "Car B";

      return [
        { label: "Monthly Difference", value: `$${diffMonthly.toFixed(2)}` },
        { label: "Total Savings", value: `$${totalDiff.toFixed(2)}` },
        { label: "Cheaper Option", value: cheaper },
      ];
    },
  },

  "gas-vs-electric": {
    fields: [
      { id: "gasMpg", label: "Gas Car: MPG", type: "number", placeholder: "30" },
      { id: "gasPrice", label: "Gas Price ($/gal)", type: "number", placeholder: "3.50" },
      { id: "evEff", label: "EV: kWh/100mi", type: "number", placeholder: "30" },
      { id: "elecPrice", label: "Electricity Price ($/kWh)", type: "number", placeholder: "0.15" },
      { id: "miles", label: "Annual Miles", type: "number", placeholder: "12000" },
    ],
    calculate: (values: Record<string, string>) => {
      const miles = parseFloat(values.miles) || 0;
      // Gas cost
      const gasMpg = parseFloat(values.gasMpg) || 1;
      const gasP = parseFloat(values.gasPrice) || 0;
      const annualGas = (miles / gasMpg) * gasP;

      // EV Cost
      const evEff = parseFloat(values.evEff) || 1; // kWh per 100 miles
      const elecP = parseFloat(values.elecPrice) || 0;
      const annualEv = (miles / 100) * evEff * elecP;

      return [
        { label: "Annual Gas Cost", value: `$${annualGas.toFixed(2)}` },
        { label: "Annual EV Cost", value: `$${annualEv.toFixed(2)}` },
        { label: "EV Savings", value: `$${(annualGas - annualEv).toFixed(2)}` },
      ];
    },
  },

  "trade-in": {
    fields: [
      { id: "kbb", label: "KBB Excellent Value ($)", type: "number", placeholder: "15000" },
      {
        id: "condition", label: "Condition", type: "select", options: [
          { value: "1", label: "Excellent" },
          { value: "0.9", label: "Good" },
          { value: "0.8", label: "Fair" },
          { value: "0.6", label: "Poor" }
        ]
      },
      { id: "deductions", label: "Repair Costs ($)", type: "number", placeholder: "500" },
    ],
    calculate: (values: Record<string, string>) => {
      const base = parseFloat(values.kbb) || 0;
      const factor = parseFloat(values.condition) || 1;
      const ded = parseFloat(values.deductions) || 0;
      const estimate = (base * factor) - ded;

      return [{ label: "Est. Trade-in Value", value: `$${Math.max(0, estimate).toFixed(2)}` }];
    },
  },

  // ==========================================
  // TRAVEL CALCULATORS
  // ==========================================

  "trip-cost": {
    fields: [
      { id: "transport", label: "Transportation ($)", type: "number", placeholder: "500", min: 0 },
      { id: "accommodation", label: "Accommodation ($)", type: "number", placeholder: "800", min: 0 },
      { id: "food", label: "Food & Drink ($)", type: "number", placeholder: "300", min: 0 },
      { id: "activities", label: "Activities/Tours ($)", type: "number", placeholder: "200", min: 0 },
      { id: "misc", label: "Miscellaneous ($)", type: "number", placeholder: "100", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const total = (parseFloat(values.transport) || 0) +
        (parseFloat(values.accommodation) || 0) +
        (parseFloat(values.food) || 0) +
        (parseFloat(values.activities) || 0) +
        (parseFloat(values.misc) || 0);
      return [
        { label: "Total Trip Cost", value: `$${total.toFixed(2)}` },
        { label: "50% Deposit", value: `$${(total * 0.5).toFixed(2)}` },
      ];
    },
  },

  "flight-carbon": {
    fields: [
      { id: "hours", label: "Flight Duration (hours)", type: "number", placeholder: "5", min: 0 },
      { id: "passengers", label: "Number of Passengers", type: "number", placeholder: "1", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const hours = parseFloat(values.hours) || 0;
      const passengers = parseFloat(values.passengers) || 1;
      // Estimation: ~90kg (198lbs) CO2 per hour per passenger for economy
      const co2Kg = hours * 90 * passengers;
      const co2Lbs = co2Kg * 2.20462;

      return [
        { label: "Total CO2 Emissions", value: `${co2Kg.toFixed(0)} kg` },
        { label: "In Pounds", value: `${co2Lbs.toFixed(0)} lbs` },
        { label: "Trees to Offset", value: `${Math.ceil(co2Kg / 20)} trees` },
      ];
    },
  },

  "travel-time": {
    fields: [
      { id: "distance", label: "Distance (miles)", type: "number", placeholder: "300", min: 0 },
      { id: "speed", label: "Average Speed (mph)", type: "number", placeholder: "60", min: 1 },
      { id: "breaks", label: "Total Break Time (minutes)", type: "number", placeholder: "30", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const dist = parseFloat(values.distance) || 0;
      const speed = parseFloat(values.speed) || 60;
      const breaks = parseFloat(values.breaks) || 0;

      const driveTimeMinutes = (dist / speed) * 60;
      const totalMinutes = driveTimeMinutes + breaks;

      const h = Math.floor(totalMinutes / 60);
      const m = Math.round(totalMinutes % 60);

      return [
        { label: "Total Travel Time", value: `${h}h ${m}m` },
        { label: "Driving Time Only", value: `${(driveTimeMinutes / 60).toFixed(1)} hrs` },
      ];
    },
  },

  "trip-split": {
    fields: [
      { id: "total", label: "Total Cost ($)", type: "number", placeholder: "1500", min: 0 },
      { id: "people", label: "Number of People", type: "number", placeholder: "4", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const total = parseFloat(values.total) || 0;
      const people = parseFloat(values.people) || 1;
      return [
        { label: "Cost Per Person", value: `$${(total / people).toFixed(2)}` },
      ];
    },
  },

  "distance": {
    // Using Haversine formula for Lat/Long distance
    fields: [
      { id: "lat1", label: "Latitude 1", type: "number", placeholder: "40.7128" },
      { id: "lon1", label: "Longitude 1", type: "number", placeholder: "-74.0060" },
      { id: "lat2", label: "Latitude 2", type: "number", placeholder: "51.5074" },
      { id: "lon2", label: "Longitude 2", type: "number", placeholder: "-0.1278" },
    ],
    calculate: (values: Record<string, string>) => {
      const lat1 = parseFloat(values.lat1) || 0;
      const lon1 = parseFloat(values.lon1) || 0;
      const lat2 = parseFloat(values.lat2) || 0;
      const lon2 = parseFloat(values.lon2) || 0;

      const R = 6371; // Radius of earth in km
      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      const miles = d * 0.621371;

      return [
        { label: "Distance (km)", value: `${d.toFixed(2)} km` },
        { label: "Distance (miles)", value: `${miles.toFixed(2)} mi` },
      ];
    },
  },

  "luggage-weight": {
    fields: [
      { id: "limit", label: "Airline Limit (kg)", type: "number", placeholder: "23", min: 0 },
      { id: "bag1", label: "Bag 1 Weight (kg)", type: "number", placeholder: "15", min: 0 },
      { id: "bag2", label: "Bag 2 Weight (kg)", type: "number", placeholder: "5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const limit = parseFloat(values.limit) || 23;
      const total = (parseFloat(values.bag1) || 0) + (parseFloat(values.bag2) || 0);
      const remaining = limit - total;

      return [
        { label: "Total Weight", value: `${total.toFixed(1)} kg` },
        { label: "Remaining Allowance", value: `${remaining.toFixed(1)} kg` },
        { label: "Status", value: remaining >= 0 ? "OK ✅" : "Overweight ⚠️" },
      ];
    },
  },

  "jet-lag": {
    fields: [
      { id: "diff", label: "Time Difference (hours)", type: "number", placeholder: "6", min: 0, max: 12 },
      {
        id: "direction", label: "Direction", type: "select", options: [
          { value: "east", label: "Traveling East (Harder)" },
          { value: "west", label: "Traveling West (Easier)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const diff = parseFloat(values.diff) || 0;
      const dir = values.direction || "east";
      // Rough rule: 1 day recovery per hour for East, 1 day per 1.5 hours for West
      let days = 0;
      if (dir === "east") days = diff;
      else days = diff / 1.5;

      return [
        { label: "Est. Recovery Time", value: `${days.toFixed(1)} days` },
        { label: "Advice", value: dir === "east" ? "Sleep earlier before trip" : "Stay up late before trip" },
      ];
    },
  },

  "visa-days": {
    fields: [
      { id: "entry", label: "Entry Date (YYYY-MM-DD)", type: "text", placeholder: "2024-06-01" },
      { id: "limit", label: "Visa Limit (days)", type: "number", placeholder: "90" },
    ],
    calculate: (values: Record<string, string>) => {
      const entry = new Date(values.entry);
      const limit = parseFloat(values.limit) || 90;

      if (isNaN(entry.getTime())) return [{ label: "Error", value: "Invalid Date" }];

      const exit = new Date(entry);
      exit.setDate(exit.getDate() + limit);

      const today = new Date();
      const daysLeft = Math.ceil((exit.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      return [
        { label: "Must Leave By", value: exit.toISOString().split('T')[0] },
        { label: "Days Remaining", value: daysLeft },
      ];
    },
  },

  "packing-list": {
    fields: [
      { id: "days", label: "Trip Duration (days)", type: "number", placeholder: "7", min: 1 },
      {
        id: "climate", label: "Climate", type: "select", options: [
          { value: "hot", label: "Hot/Beach" },
          { value: "cold", label: "Cold/Winter" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const days = parseFloat(values.days) || 7;
      const climate = values.climate || "hot";

      // Simple logic for clothing quantity
      const tops = days + 1;
      const bottoms = Math.ceil(days / 2);
      const undies = days + 2;

      return [
        { label: "Tops/Shirts", value: tops },
        { label: "Bottoms/Pants", value: bottoms },
        { label: "Underwear/Socks", value: undies },
        { label: "Specific Item", value: climate === "hot" ? "Swimsuit & Sunscreen" : "Coat & Gloves" },
      ];
    },
  },

  "travel-insurance": {
    fields: [
      { id: "cost", label: "Total Trip Cost ($)", type: "number", placeholder: "3000", min: 0 },
      { id: "age", label: "Traveler Age", type: "number", placeholder: "30", min: 0 },
      { id: "medical", label: "Include Medical? (1=Yes)", type: "number", placeholder: "1", max: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const cost = parseFloat(values.cost) || 0;
      const age = parseFloat(values.age) || 30;
      const med = parseFloat(values.medical) || 0;

      // Rough estimate: Base 4% + Age factor + Medical
      let pct = 0.04;
      if (age > 50) pct += 0.02;
      if (age > 70) pct += 0.03;
      if (med === 1) pct += 0.02;

      const insurance = cost * pct;

      return [
        { label: "Estimated Premium", value: `$${insurance.toFixed(2)}` },
        { label: "Rate Applied", value: `${(pct * 100).toFixed(1)}%` },
      ];
    },
  },

  "budget-planner": {
    fields: [
      { id: "budget", label: "Total Budget ($)", type: "number", placeholder: "2000" },
      { id: "days", label: "Days", type: "number", placeholder: "10" },
      { id: "flights", label: "Flights/Pre-paid ($)", type: "number", placeholder: "600" },
    ],
    calculate: (values: Record<string, string>) => {
      const budget = parseFloat(values.budget) || 0;
      const days = parseFloat(values.days) || 1;
      const prepaid = parseFloat(values.flights) || 0;

      const remaining = budget - prepaid;
      const daily = remaining / days;

      return [
        { label: "Disposable Income", value: `$${remaining.toFixed(2)}` },
        { label: "Daily Budget", value: `$${daily.toFixed(2)} / day` },
      ];
    },
  },

  "currency-trip": {
    fields: [
      { id: "amount", label: "Amount in Home Currency", type: "number", placeholder: "1000" },
      { id: "rate", label: "Exchange Rate (1 Home = ? Local)", type: "number", placeholder: "0.85" },
      { id: "fee", label: "Exchange Fee (%)", type: "number", placeholder: "2" },
    ],
    calculate: (values: Record<string, string>) => {
      const amount = parseFloat(values.amount) || 0;
      const rate = parseFloat(values.rate) || 1;
      const feePct = (parseFloat(values.fee) || 0) / 100;

      const afterFee = amount * (1 - feePct);
      const received = afterFee * rate;

      return [
        { label: "You Receive (Local)", value: received.toFixed(2) },
        { label: "Total Fee Cost", value: (amount * feePct).toFixed(2) },
      ];
    },
  },

  "timezone-meeting": {
    fields: [
      { id: "myTime", label: "My Time (Hour 0-23)", type: "number", placeholder: "14", min: 0, max: 23 },
      { id: "offset", label: "Their Offset (+/- hours)", type: "number", placeholder: "-6" },
    ],
    calculate: (values: Record<string, string>) => {
      const myH = parseFloat(values.myTime) || 0;
      const offset = parseFloat(values.offset) || 0;
      let theirH = (myH + offset) % 24;
      if (theirH < 0) theirH += 24;

      return [
        { label: "Time at Destination", value: `${theirH.toFixed(0)}:00` },
        { label: "Business Hours?", value: (theirH >= 9 && theirH <= 17) ? "Yes ✅" : "No ❌" },
      ];
    },
  },

  "travel-rewards": {
    fields: [
      { id: "points", label: "Points Available", type: "number", placeholder: "50000" },
      { id: "value", label: "Cents per Point", type: "number", placeholder: "1.2" },
    ],
    calculate: (values: Record<string, string>) => {
      const points = parseFloat(values.points) || 0;
      const cpp = parseFloat(values.value) || 0;
      const dollars = points * (cpp / 100);

      return [
        { label: "Total Value ($)", value: `$${dollars.toFixed(2)}` },
      ];
    },
  },

  "passport-validity": {
    fields: [
      { id: "expiry", label: "Expiry Date (YYYY-MM-DD)", type: "text", placeholder: "2026-01-01" },
      { id: "travel", label: "Travel Date (YYYY-MM-DD)", type: "text", placeholder: "2025-06-01" },
    ],
    calculate: (values: Record<string, string>) => {
      const exp = new Date(values.expiry);
      const travel = new Date(values.travel);

      if (isNaN(exp.getTime()) || isNaN(travel.getTime())) return [{ label: "Error", value: "Invalid Date" }];

      // Calculate months difference
      const diffMonths = (exp.getFullYear() - travel.getFullYear()) * 12 + (exp.getMonth() - travel.getMonth());

      return [
        { label: "Validity Remaining", value: `${diffMonths} months` },
        { label: "Safe to Travel?", value: diffMonths >= 6 ? "Yes (>6 months) ✅" : "Check Rules ⚠️" },
      ];
    },
  },

  "road-trip-stops": {
    fields: [
      { id: "hours", label: "Total Driving Hours", type: "number", placeholder: "12" },
      { id: "interval", label: "Stop Every (hours)", type: "number", placeholder: "3" },
    ],
    calculate: (values: Record<string, string>) => {
      const total = parseFloat(values.hours) || 0;
      const interval = parseFloat(values.interval) || 3;
      const stops = Math.floor(total / interval);
      return [
        { label: "Recommended Stops", value: stops },
        { label: "Stop Schedule", value: `Stop approx every ${interval} hrs` },
      ];
    },
  },

  "accommodation": {
    fields: [
      { id: "nights", label: "Number of Nights", type: "number", placeholder: "5" },
      { id: "price", label: "Price per Night ($)", type: "number", placeholder: "120" },
      { id: "fees", label: "Cleaning/Service Fees ($)", type: "number", placeholder: "50" },
      { id: "tax", label: "Tax Rate (%)", type: "number", placeholder: "10" },
    ],
    calculate: (values: Record<string, string>) => {
      const nights = parseFloat(values.nights) || 1;
      const price = parseFloat(values.price) || 0;
      const fees = parseFloat(values.fees) || 0;
      const taxRate = (parseFloat(values.tax) || 0) / 100;

      const subtotal = (nights * price) + fees;
      const taxes = subtotal * taxRate;
      const total = subtotal + taxes;

      return [
        { label: "Total Cost", value: `$${total.toFixed(2)}` },
        { label: "Average per Night", value: `$${(total / nights).toFixed(2)}` },
      ];
    },
  },

  "daily-expenses": {
    fields: [
      { id: "food", label: "Food ($)", type: "number", placeholder: "50" },
      { id: "transport", label: "Local Transport ($)", type: "number", placeholder: "20" },
      { id: "tickets", label: "Tickets/Entry ($)", type: "number", placeholder: "30" },
      { id: "days", label: "Trip Days", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const daily = (parseFloat(values.food) || 0) + (parseFloat(values.transport) || 0) + (parseFloat(values.tickets) || 0);
      const days = parseFloat(values.days) || 1;
      return [
        { label: "Daily Spending", value: `$${daily.toFixed(2)}` },
        { label: "Total for Trip", value: `$${(daily * days).toFixed(2)}` },
      ];
    },
  },

  "itinerary": {
    fields: [
      { id: "wake", label: "Wake Up Time (Hour 0-23)", type: "number", placeholder: "8" },
      { id: "sleep", label: "Sleep Time (Hour 0-23)", type: "number", placeholder: "22" },
      { id: "meals", label: "Time for Meals (hours)", type: "number", placeholder: "2" },
    ],
    calculate: (values: Record<string, string>) => {
      const wake = parseFloat(values.wake) || 8;
      let sleep = parseFloat(values.sleep) || 22;
      if (sleep < wake) sleep += 24; // Handle past midnight
      const meals = parseFloat(values.meals) || 2;

      const totalAwake = sleep - wake;
      const available = totalAwake - meals;

      return [
        { label: "Available for Activities", value: `${available.toFixed(1)} hours` },
        { label: "Waking Hours", value: `${totalAwake.toFixed(1)} hours` },
      ];
    },
  },

  // ==========================================
  // GARDENING CALCULATORS
  // ==========================================

  "plant-spacing": {
    fields: [
      { id: "length", label: "Bed Length (ft)", type: "number", placeholder: "10", min: 0 },
      { id: "width", label: "Bed Width (ft)", type: "number", placeholder: "4", min: 0 },
      { id: "spacing", label: "Plant Spacing (inches)", type: "number", placeholder: "12", min: 1 },
      {
        id: "type", label: "Arrangement", type: "select", options: [
          { value: "square", label: "Square Foot / Grid" },
          { value: "row", label: "Traditional Rows" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const l = (parseFloat(values.length) || 0) * 12; // inches
      const w = (parseFloat(values.width) || 0) * 12; // inches
      const s = parseFloat(values.spacing) || 12;
      const type = values.type || "square";

      let total = 0;
      if (type === "square") {
        // Grid calculation
        total = Math.floor(l / s) * Math.floor(w / s);
      } else {
        // Row calculation (assuming 18" between rows standard if not specified, simplified here)
        const rowSpacing = Math.max(s, 18);
        const rows = Math.floor(w / rowSpacing) || 1;
        const plantsPerRow = Math.floor(l / s);
        total = rows * plantsPerRow;
      }

      return [
        { label: "Total Plants Needed", value: total },
        { label: "Plants Per Row", value: Math.floor(l / s) },
      ];
    },
  },

  "soil-volume": {
    fields: [
      { id: "length", label: "Length (ft)", type: "number", placeholder: "8", min: 0 },
      { id: "width", label: "Width (ft)", type: "number", placeholder: "4", min: 0 },
      { id: "depth", label: "Depth (inches)", type: "number", placeholder: "6", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const l = parseFloat(values.length) || 0;
      const w = parseFloat(values.width) || 0;
      const d = (parseFloat(values.depth) || 0) / 12; // convert to ft

      const cuFt = l * w * d;
      const cuYd = cuFt / 27;
      // Standard soil bag is usually 0.75 cu ft or 1 cu ft
      const bags = Math.ceil(cuFt / 0.75);

      return [
        { label: "Cubic Feet", value: `${cuFt.toFixed(2)} ft³` },
        { label: "Cubic Yards", value: `${cuYd.toFixed(2)} yd³` },
        { label: "Bags (0.75 ft³)", value: bags },
      ];
    },
  },

  "mulch": {
    fields: [
      { id: "area", label: "Total Area (sq ft)", type: "number", placeholder: "100", min: 0 },
      { id: "depth", label: "Mulch Depth (inches)", type: "number", placeholder: "3", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.area) || 0;
      const depth = (parseFloat(values.depth) || 0) / 12; // ft

      const cuFt = area * depth;
      const cuYd = cuFt / 27;
      const bags = Math.ceil(cuFt / 2); // Standard mulch bag is often 2 cu ft

      return [
        { label: "Cubic Yards Needed", value: `${cuYd.toFixed(2)} yd³` },
        { label: "Bags (2 cu ft)", value: bags },
      ];
    },
  },

  "watering": {
    fields: [
      { id: "area", label: "Garden Area (sq ft)", type: "number", placeholder: "100", min: 0 },
      { id: "inches", label: "Water Needed (inches/week)", type: "number", placeholder: "1", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.area) || 0;
      const inches = parseFloat(values.inches) || 1;
      // 1 sq ft covered 1 inch deep = 0.623 gallons
      const gallons = area * inches * 0.623;

      return [
        { label: "Weekly Water", value: `${gallons.toFixed(1)} gallons` },
        { label: "Daily Average", value: `${(gallons / 7).toFixed(1)} gallons` },
      ];
    },
  },

  "fertilizer": {
    fields: [
      { id: "area", label: "Area (sq ft)", type: "number", placeholder: "1000", min: 0 },
      { id: "recommendation", label: "Recommended N (lbs/1000 sq ft)", type: "number", placeholder: "1", min: 0 },
      { id: "bagNumber", label: "Fertilizer N Value (First number on bag)", type: "number", placeholder: "10", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.area) || 0;
      const rec = parseFloat(values.recommendation) || 1; // lbs of Nitrogen needed per 1000 sq ft
      const nVal = parseFloat(values.bagNumber) || 10; // Percentage of N in bag

      const lbsNeededPer1000 = rec / (nVal / 100);
      const totalLbs = lbsNeededPer1000 * (area / 1000);

      return [
        { label: "Total Fertilizer Needed", value: `${totalLbs.toFixed(2)} lbs` },
        { label: "Rate per 100 sq ft", value: `${(totalLbs / (area / 100)).toFixed(2)} lbs` },
      ];
    },
  },

  "compost": {
    fields: [
      { id: "c", label: "Carbon (Browns) Parts", type: "number", placeholder: "30", min: 0 },
      { id: "n", label: "Nitrogen (Greens) Parts", type: "number", placeholder: "1", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const c = parseFloat(values.c) || 0;
      const n = parseFloat(values.n) || 1;
      const ratio = c / n;

      let status = "Ideal range (25:1 - 30:1)";
      if (ratio < 20) status = "Too much Nitrogen (Add Browns)";
      if (ratio > 40) status = "Too much Carbon (Add Greens)";

      return [
        { label: "C:N Ratio", value: `${ratio.toFixed(1)}:1` },
        { label: "Status", value: status },
      ];
    },
  },

  "seed-quantity": {
    fields: [
      { id: "rowFeet", label: "Total Row Feet", type: "number", placeholder: "50", min: 0 },
      { id: "spacing", label: "Seed Spacing (inches)", type: "number", placeholder: "3", min: 0.1 },
      { id: "germination", label: "Germination Rate (%)", type: "number", placeholder: "90", min: 1, max: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const feet = parseFloat(values.rowFeet) || 0;
      const spacing = parseFloat(values.spacing) || 3;
      const germ = (parseFloat(values.germination) || 100) / 100;

      const seedsNeeded = (feet * 12) / spacing;
      // Add buffer for germination failure
      const buffer = Math.ceil(seedsNeeded / germ);

      return [
        { label: "Plants Possible", value: Math.floor(seedsNeeded) },
        { label: "Seeds to Buy (w/ buffer)", value: buffer },
      ];
    },
  },

  "harvest-date": {
    fields: [
      { id: "planted", label: "Planting Date (YYYY-MM-DD)", type: "text", placeholder: "2024-05-01" },
      { id: "days", label: "Days to Maturity", type: "number", placeholder: "75", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const planted = new Date(values.planted);
      const days = parseFloat(values.days) || 0;

      if (isNaN(planted.getTime())) return [{ label: "Error", value: "Invalid Date" }];

      const harvest = new Date(planted);
      harvest.setDate(harvest.getDate() + days);

      return [
        { label: "Estimated Harvest", value: harvest.toISOString().split('T')[0] },
        { label: "Weeks Remaining", value: (days / 7).toFixed(1) },
      ];
    },
  },

  "grow-lights": {
    fields: [
      { id: "area", label: "Grow Area (sq ft)", type: "number", placeholder: "8", min: 0 },
      {
        id: "type", label: "Plant Type", type: "select", options: [
          { value: "20", label: "Low Light (Leafy Greens)" },
          { value: "30", label: "Medium Light (Herbs)" },
          { value: "40", label: "High Light (Tomatoes/Peppers)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.area) || 0;
      const wattsPerSqFt = parseFloat(values.type) || 30; // Standard LED wattage target

      const totalWatts = area * wattsPerSqFt;

      return [
        { label: "Target Wattage (LED)", value: `${totalWatts} Watts` },
        { label: "PPFD Target", value: wattsPerSqFt > 35 ? "600-900 µmol" : "200-400 µmol" },
      ];
    },
  },

  "garden-area": {
    fields: [
      {
        id: "shape", label: "Shape", type: "select", options: [
          { value: "rect", label: "Rectangle" },
          { value: "circle", label: "Circle" },
          { value: "tri", label: "Triangle" }
        ]
      },
      { id: "dim1", label: "Length / Radius / Base", type: "number", placeholder: "10" },
      { id: "dim2", label: "Width / - / Height", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const shape = values.shape || "rect";
      const d1 = parseFloat(values.dim1) || 0;
      const d2 = parseFloat(values.dim2) || 0;

      let area = 0;
      if (shape === "rect") area = d1 * d2;
      else if (shape === "circle") area = Math.PI * d1 * d1;
      else if (shape === "tri") area = 0.5 * d1 * d2;

      return [
        { label: "Total Area", value: `${area.toFixed(2)} sq ft` },
        { label: "Acres", value: `${(area / 43560).toFixed(4)}` },
      ];
    },
  },

  "zone-finder": {
    fields: [
      { id: "temp", label: "Average Annual Min Temp (°F)", type: "number", placeholder: "10" },
    ],
    calculate: (values: Record<string, string>) => {
      const t = parseFloat(values.temp);
      let zone = "";
      // Simplified USDA Hardiness Zones
      if (t <= -50) zone = "1";
      else if (t <= -40) zone = "2";
      else if (t <= -30) zone = "3";
      else if (t <= -20) zone = "4";
      else if (t <= -10) zone = "5";
      else if (t <= 0) zone = "6";
      else if (t <= 10) zone = "7";
      else if (t <= 20) zone = "8";
      else if (t <= 30) zone = "9";
      else if (t <= 40) zone = "10";
      else zone = "11+";

      return [
        { label: "Estimated USDA Zone", value: `Zone ${zone}` },
      ];
    },
  },

  "frost-date": {
    fields: [
      { id: "frostDate", label: "Average Last Frost Date (YYYY-MM-DD)", type: "text", placeholder: "2024-04-15" },
    ],
    calculate: (values: Record<string, string>) => {
      const frost = new Date(values.frostDate);
      const today = new Date();

      if (isNaN(frost.getTime())) return [{ label: "Error", value: "Invalid Date" }];

      const diffTime = frost.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return [
        { label: "Days Until Safe", value: diffDays > 0 ? diffDays : "Frost Passed" },
        { label: "Safe to Plant Outside", value: diffDays > 0 ? "Wait" : "Yes (Hardy plants)" },
      ];
    },
  },

  "growing-season": {
    fields: [
      { id: "lastFrost", label: "Last Frost Spring (YYYY-MM-DD)", type: "text", placeholder: "2024-04-15" },
      { id: "firstFrost", label: "First Frost Fall (YYYY-MM-DD)", type: "text", placeholder: "2024-10-15" },
    ],
    calculate: (values: Record<string, string>) => {
      const start = new Date(values.lastFrost);
      const end = new Date(values.firstFrost);

      if (isNaN(start.getTime()) || isNaN(end.getTime())) return [{ label: "Error", value: "Invalid Date" }];

      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return [
        { label: "Growing Season Length", value: `${diffDays} days` },
        { label: "Long Season Crops?", value: diffDays > 120 ? "Yes" : "Select early varieties" },
      ];
    },
  },

  "greenhouse": {
    fields: [
      { id: "length", label: "Length (ft)", type: "number", placeholder: "10" },
      { id: "width", label: "Width (ft)", type: "number", placeholder: "8" },
      { id: "height", label: "Avg Height (ft)", type: "number", placeholder: "7" },
    ],
    calculate: (values: Record<string, string>) => {
      const l = parseFloat(values.length) || 0;
      const w = parseFloat(values.width) || 0;
      const h = parseFloat(values.height) || 0;

      const floorArea = l * w;
      const volume = l * w * h;

      return [
        { label: "Floor Space", value: `${floorArea} sq ft` },
        { label: "Air Volume", value: `${volume} cu ft` },
        { label: "Heater BTU Estimate", value: `${(volume * 4).toFixed(0)} BTU` }, // Rough rule of thumb
      ];
    },
  },

  "rain-barrel": {
    fields: [
      { id: "roofArea", label: "Roof Footprint (sq ft)", type: "number", placeholder: "1000" },
      { id: "rainfall", label: "Rainfall Event (inches)", type: "number", placeholder: "1" },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.roofArea) || 0;
      const rain = parseFloat(values.rainfall) || 0;
      // 1 inch of rain on 1 sq ft = 0.623 gallons
      const gallons = area * rain * 0.623;

      return [
        { label: "Water Collected", value: `${gallons.toFixed(0)} gallons` },
        { label: "Barrels (55 gal)", value: (gallons / 55).toFixed(1) },
      ];
    },
  },

  "irrigation": {
    fields: [
      { id: "length", label: "Tube Length (ft)", type: "number", placeholder: "100" },
      { id: "spacing", label: "Emitter Spacing (inches)", type: "number", placeholder: "12" },
      { id: "flow", label: "Flow Rate (GPH per emitter)", type: "number", placeholder: "0.5" },
    ],
    calculate: (values: Record<string, string>) => {
      const l = parseFloat(values.length) || 0;
      const s = parseFloat(values.spacing) || 12;
      const flow = parseFloat(values.flow) || 0;

      const emitters = (l * 12) / s;
      const totalGPH = emitters * flow;
      const GPM = totalGPH / 60;

      return [
        { label: "Total Flow Rate", value: `${totalGPH.toFixed(1)} GPH` },
        { label: "Gallons Per Minute", value: `${GPM.toFixed(2)} GPM` },
        { label: "Total Emitters", value: Math.floor(emitters) },
      ];
    },
  },

  "seed-starting": {
    fields: [
      { id: "frostDate", label: "Last Frost Date (YYYY-MM-DD)", type: "text", placeholder: "2024-05-01" },
      { id: "weeks", label: "Weeks Before Frost", type: "number", placeholder: "6" },
    ],
    calculate: (values: Record<string, string>) => {
      const frost = new Date(values.frostDate);
      const weeks = parseFloat(values.weeks) || 6;

      if (isNaN(frost.getTime())) return [{ label: "Error", value: "Invalid Date" }];

      const start = new Date(frost);
      start.setDate(frost.getDate() - (weeks * 7));

      return [
        { label: "Start Seeds Indoors", value: start.toISOString().split('T')[0] },
      ];
    },
  },

  "companion-plants": {
    fields: [
      {
        id: "plant", label: "Select Plant", type: "select", options: [
          { value: "tomato", label: "Tomato" },
          { value: "carrot", label: "Carrot" },
          { value: "lettuce", label: "Lettuce" },
          { value: "beans", label: "Beans" },
          { value: "corn", label: "Corn" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const p = values.plant || "tomato";
      let friends = "";
      let foes = "";

      if (p === "tomato") { friends = "Basil, Carrots, Onions"; foes = "Potatoes, Corn, Cabbage"; }
      else if (p === "carrot") { friends = "Tomatoes, Rosemary, Sage"; foes = "Dill, Parsnips"; }
      else if (p === "lettuce") { friends = "Carrots, Radishes, Strawberries"; foes = "Beans, Parsley"; }
      else if (p === "beans") { friends = "Corn, Cucumber, Potato"; foes = "Onions, Garlic, Leeks"; }
      else if (p === "corn") { friends = "Beans, Squash, Peas"; foes = "Tomatoes"; }

      return [
        { label: "Good Companions", value: friends },
        { label: "Avoid Planting Near", value: foes },
      ];
    },
  },

  "yield-estimator": {
    fields: [
      { id: "plants", label: "Number of Plants", type: "number", placeholder: "5" },
      { id: "avgYield", label: "Avg Yield per Plant (lbs)", type: "number", placeholder: "10" },
    ],
    calculate: (values: Record<string, string>) => {
      const p = parseFloat(values.plants) || 0;
      const y = parseFloat(values.avgYield) || 0;
      const total = p * y;
      return [
        { label: "Estimated Harvest", value: `${total.toFixed(1)} lbs` },
        { label: "In Kilograms", value: `${(total * 0.453592).toFixed(1)} kg` },
      ];
    },
  },

  // ==========================================
  // ENGINEERING CALCULATORS
  // ==========================================

  "beam-deflection": {
    fields: [
      { id: "load", label: "Load Force (N)", type: "number", placeholder: "1000", min: 0 },
      { id: "length", label: "Beam Length (m)", type: "number", placeholder: "5", min: 0 },
      { id: "elasticity", label: "Modulus of Elasticity (GPa)", type: "number", placeholder: "200", min: 0 },
      { id: "inertia", label: "Moment of Inertia (cm^4)", type: "number", placeholder: "5000", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const P = parseFloat(values.load) || 0;
      const L = parseFloat(values.length) || 0;
      const E = (parseFloat(values.elasticity) || 200) * 1e9; // GPa to Pa
      const I = (parseFloat(values.inertia) || 5000) * 1e-8; // cm^4 to m^4

      // Simple support, center load formula: (P*L^3) / (48*E*I)
      const deflection = (P * Math.pow(L, 3)) / (48 * E * I);
      const mm = deflection * 1000;

      return [
        { label: "Max Deflection", value: `${mm.toFixed(4)} mm` },
        { label: "Deflection (m)", value: `${deflection.toExponential(2)} m` },
      ];
    },
  },

  "gear-ratio": {
    fields: [
      { id: "driver", label: "Driver Teeth", type: "number", placeholder: "20", min: 1 },
      { id: "driven", label: "Driven Teeth", type: "number", placeholder: "40", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const driver = parseFloat(values.driver) || 1;
      const driven = parseFloat(values.driven) || 1;
      const ratio = driven / driver;

      return [
        { label: "Gear Ratio", value: `${ratio.toFixed(2)}:1` },
        { label: "Speed Output", value: `${(1 / ratio).toFixed(2)}x Input Speed` },
        { label: "Torque Output", value: `${ratio.toFixed(2)}x Input Torque` },
      ];
    },
  },

  "torque-engineering": { // Renamed from "torque" to avoid conflict with Conversion
    fields: [
      { id: "force", label: "Force (N)", type: "number", placeholder: "100" },
      { id: "radius", label: "Radius (m)", type: "number", placeholder: "0.5" },
      { id: "angle", label: "Angle (degrees)", type: "number", placeholder: "90" },
    ],
    calculate: (values: Record<string, string>) => {
      const F = parseFloat(values.force) || 0;
      const r = parseFloat(values.radius) || 0;
      const theta = parseFloat(values.angle) || 90;
      const rad = theta * (Math.PI / 180);
      const tau = F * r * Math.sin(rad);
      return [
        { label: "Torque (N·m)", value: `${tau.toFixed(2)} N·m` },
        { label: "Torque (lb-ft)", value: `${(tau * 0.73756).toFixed(2)} lb-ft` },
      ];
    },
  },

  "wire-gauge": {
    fields: [
      { id: "current", label: "Current (Amps)", type: "number", placeholder: "10", min: 0 },
      { id: "distance", label: "Distance (ft)", type: "number", placeholder: "50", min: 0 },
      { id: "volts", label: "System Voltage", type: "number", placeholder: "12", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const I = parseFloat(values.current) || 0;
      const L = parseFloat(values.distance) || 0;
      const V = parseFloat(values.volts) || 12;
      const drop = V * 0.03; // Max 3% voltage drop typically

      // Circular Mils (CM) = (K * I * L) / V_drop. K for copper ~ 10.75
      const cm = (10.75 * I * L * 2) / drop; // *2 for round trip distance

      // Very simplified AWG lookup logic
      let gauge = "18 AWG";
      if (cm > 100000) gauge = "0 AWG";
      else if (cm > 80000) gauge = "1 AWG";
      else if (cm > 60000) gauge = "2 AWG";
      else if (cm > 40000) gauge = "4 AWG";
      else if (cm > 26000) gauge = "6 AWG";
      else if (cm > 16000) gauge = "8 AWG";
      else if (cm > 10000) gauge = "10 AWG";
      else if (cm > 6500) gauge = "12 AWG";
      else if (cm > 4100) gauge = "14 AWG";
      else if (cm > 2500) gauge = "16 AWG";

      return [
        { label: "Recommended Wire", value: gauge },
        { label: "Circular Mils Needed", value: cm.toFixed(0) },
      ];
    },
  },

  "stress-strain": {
    fields: [
      { id: "force", label: "Applied Force (N)", type: "number", placeholder: "5000" },
      { id: "area", label: "Cross-Section Area (mm²)", type: "number", placeholder: "100" },
      { id: "origLength", label: "Original Length (mm)", type: "number", placeholder: "200" },
      { id: "changeLength", label: "Change in Length (mm)", type: "number", placeholder: "0.5" },
    ],
    calculate: (values: Record<string, string>) => {
      const F = parseFloat(values.force) || 0;
      const A = (parseFloat(values.area) || 1) * 1e-6; // mm² to m²
      const L0 = (parseFloat(values.origLength) || 1) / 1000; // mm to m
      const dL = (parseFloat(values.changeLength) || 0) / 1000; // mm to m

      const stress = F / A; // Pascals
      const strain = dL / L0; // Unitless
      const modulus = strain > 0 ? stress / strain : 0;

      return [
        { label: "Stress", value: `${(stress / 1e6).toFixed(2)} MPa` },
        { label: "Strain", value: strain.toFixed(6) },
        { label: "Young's Modulus", value: `${(modulus / 1e9).toFixed(2)} GPa` },
      ];
    },
  },

  "flow-rate": {
    fields: [
      { id: "area", label: "Pipe Cross-Section (m²)", type: "number", placeholder: "0.01" },
      { id: "velocity", label: "Fluid Velocity (m/s)", type: "number", placeholder: "2" },
    ],
    calculate: (values: Record<string, string>) => {
      const A = parseFloat(values.area) || 0;
      const v = parseFloat(values.velocity) || 0;
      const Q = A * v;

      return [
        { label: "Flow Rate (m³/s)", value: Q.toFixed(4) },
        { label: "Flow Rate (L/min)", value: (Q * 60000).toFixed(1) },
      ];
    },
  },

  "heat-transfer": {
    fields: [
      { id: "k", label: "Thermal Conductivity (W/m·K)", type: "number", placeholder: "0.6" },
      { id: "area", label: "Area (m²)", type: "number", placeholder: "10" },
      { id: "tempDiff", label: "Temp Difference (°C)", type: "number", placeholder: "20" },
      { id: "thickness", label: "Material Thickness (m)", type: "number", placeholder: "0.1" },
    ],
    calculate: (values: Record<string, string>) => {
      const k = parseFloat(values.k) || 0;
      const A = parseFloat(values.area) || 0;
      const dT = parseFloat(values.tempDiff) || 0;
      const d = parseFloat(values.thickness) || 1;

      const Q = (k * A * dT) / d;

      return [
        { label: "Heat Transfer Rate", value: `${Q.toFixed(2)} Watts` },
      ];
    },
  },

  "spring-constant": {
    fields: [
      { id: "force", label: "Force Applied (N)", type: "number", placeholder: "100" },
      { id: "displacement", label: "Displacement (m)", type: "number", placeholder: "0.05" },
    ],
    calculate: (values: Record<string, string>) => {
      const F = parseFloat(values.force) || 0;
      const x = parseFloat(values.displacement) || 1;
      const k = F / x;

      return [
        { label: "Spring Constant (k)", value: `${k.toFixed(2)} N/m` },
      ];
    },
  },

  "belt-length": {
    fields: [
      { id: "d1", label: "Pulley 1 Diameter", type: "number", placeholder: "100" },
      { id: "d2", label: "Pulley 2 Diameter", type: "number", placeholder: "200" },
      { id: "c", label: "Center Distance", type: "number", placeholder: "500" },
    ],
    calculate: (values: Record<string, string>) => {
      const d1 = parseFloat(values.d1) || 0;
      const d2 = parseFloat(values.d2) || 0;
      const c = parseFloat(values.c) || 0;

      const L = 2 * c + (Math.PI * (d2 + d1)) / 2 + Math.pow(d2 - d1, 2) / (4 * c);

      return [
        { label: "Belt Length", value: L.toFixed(2) },
      ];
    },
  },

  "moment-inertia": {
    fields: [
      { id: "mass", label: "Mass (kg)", type: "number", placeholder: "5" },
      { id: "radius", label: "Radius (m)", type: "number", placeholder: "0.2" },
      {
        id: "shape", label: "Shape", type: "select", options: [
          { value: "1", label: "Thin Ring (I = MR²)" },
          { value: "0.5", label: "Solid Cylinder/Disk (I = ½MR²)" },
          { value: "0.4", label: "Solid Sphere (I = 2/5MR²)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const m = parseFloat(values.mass) || 0;
      const r = parseFloat(values.radius) || 0;
      const k = parseFloat(values.shape) || 1;

      const I = k * m * r * r;

      return [
        { label: "Moment of Inertia", value: `${I.toFixed(4)} kg·m²` },
      ];
    },
  },

  "voltage-drop": {
    fields: [
      { id: "current", label: "Load Current (Amps)", type: "number", placeholder: "5" },
      { id: "length", label: "Wire Length (m)", type: "number", placeholder: "20" },
      { id: "resistivity", label: "Resistance (Ω/m)", type: "number", placeholder: "0.017" }, // Approx 1.5mm2 copper
    ],
    calculate: (values: Record<string, string>) => {
      const I = parseFloat(values.current) || 0;
      const L = parseFloat(values.length) || 0;
      const R_per_m = parseFloat(values.resistivity) || 0;

      const R_total = R_per_m * L * 2; // Round trip
      const V_drop = I * R_total;

      return [
        { label: "Voltage Drop", value: `${V_drop.toFixed(2)} V` },
        { label: "Total Resistance", value: `${R_total.toFixed(3)} Ω` },
      ];
    },
  },

  "pipe-sizing": {
    fields: [
      { id: "flow", label: "Flow Rate (L/min)", type: "number", placeholder: "50" },
      { id: "velocity", label: "Target Velocity (m/s)", type: "number", placeholder: "2" },
    ],
    calculate: (values: Record<string, string>) => {
      const Q_lmin = parseFloat(values.flow) || 0;
      const v = parseFloat(values.velocity) || 1;

      const Q_m3s = Q_lmin / 60000;
      const Area = Q_m3s / v;
      const diameter = Math.sqrt((4 * Area) / Math.PI);
      const diameter_mm = diameter * 1000;

      return [
        { label: "Inner Diameter", value: `${diameter_mm.toFixed(2)} mm` },
        { label: "Min Pipe Area", value: `${(Area * 1e6).toFixed(2)} mm²` },
      ];
    },
  },

  "hvac-load": {
    fields: [
      { id: "area", label: "Room Area (sq ft)", type: "number", placeholder: "500" },
      { id: "occupants", label: "Number of People", type: "number", placeholder: "2" },
      { id: "windows", label: "Number of Windows", type: "number", placeholder: "3" },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.area) || 0;
      const people = parseFloat(values.occupants) || 0;
      const windows = parseFloat(values.windows) || 0;

      // Simplified rule of thumb
      // Base: 20 BTU per sq ft + 600 per person + 1000 per window
      const btu = (area * 20) + (people * 600) + (windows * 1000);
      const tons = btu / 12000;

      return [
        { label: "Cooling Load", value: `${btu.toFixed(0)} BTU/hr` },
        { label: "Tonnage", value: `${tons.toFixed(2)} Tons` },
      ];
    },
  },

  "electrical-load": {
    fields: [
      { id: "volts", label: "Voltage (V)", type: "number", placeholder: "120" },
      { id: "watts", label: "Total Watts (W)", type: "number", placeholder: "1500" },
      { id: "pf", label: "Power Factor (0-1)", type: "number", placeholder: "0.9", max: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const V = parseFloat(values.volts) || 120;
      const W = parseFloat(values.watts) || 0;
      const pf = parseFloat(values.pf) || 1;

      const VA = W / pf;
      const Amps = VA / V;

      return [
        { label: "Current Draw", value: `${Amps.toFixed(2)} Amps` },
        { label: "Apparent Power", value: `${VA.toFixed(2)} VA` },
      ];
    },
  },

  "compression-ratio": {
    fields: [
      { id: "bore", label: "Cylinder Bore (mm)", type: "number", placeholder: "86" },
      { id: "stroke", label: "Stroke Length (mm)", type: "number", placeholder: "86" },
      { id: "chamber", label: "Combustion Chamber Vol (cc)", type: "number", placeholder: "45" },
      { id: "gasket", label: "Head Gasket Thickness (mm)", type: "number", placeholder: "1.2" },
    ],
    calculate: (values: Record<string, string>) => {
      const bore = parseFloat(values.bore) || 0;
      const stroke = parseFloat(values.stroke) || 0;
      const chamber = parseFloat(values.chamber) || 1;
      const gasket = parseFloat(values.gasket) || 0;

      const boreCm = bore / 10;
      const strokeCm = stroke / 10;
      const gasketCm = gasket / 10;

      const sweptVol = Math.PI * Math.pow(boreCm / 2, 2) * strokeCm;
      const gasketVol = Math.PI * Math.pow(boreCm / 2, 2) * gasketCm;

      const totalClearance = chamber + gasketVol; // Simplified
      const ratio = (sweptVol + totalClearance) / totalClearance;

      return [
        { label: "Compression Ratio", value: `${ratio.toFixed(2)}:1` },
        { label: "Displacement (1 cyl)", value: `${sweptVol.toFixed(1)} cc` },
      ];
    },
  },

  "hydraulic-pressure": {
    fields: [
      { id: "force", label: "Force Needed (N)", type: "number", placeholder: "10000" },
      { id: "diameter", label: "Piston Diameter (mm)", type: "number", placeholder: "50" },
    ],
    calculate: (values: Record<string, string>) => {
      const F = parseFloat(values.force) || 0;
      const d = parseFloat(values.diameter) || 1;

      const r_m = (d / 2) / 1000;
      const Area = Math.PI * r_m * r_m;
      const PressurePa = F / Area;
      const PressureBar = PressurePa / 100000;

      return [
        { label: "Required Pressure", value: `${PressureBar.toFixed(2)} bar` },
        { label: "Pressure (MPa)", value: `${(PressurePa / 1e6).toFixed(2)} MPa` },
      ];
    },
  },

  "structural-load": {
    fields: [
      { id: "area", label: "Floor Area (m²)", type: "number", placeholder: "20" },
      { id: "load", label: "Live Load (kN/m²)", type: "number", placeholder: "2" }, // Residential approx 1.5-2
      { id: "dead", label: "Dead Load (kN/m²)", type: "number", placeholder: "1" },
    ],
    calculate: (values: Record<string, string>) => {
      const area = parseFloat(values.area) || 0;
      const live = parseFloat(values.load) || 0;
      const dead = parseFloat(values.dead) || 0;

      // Factored Load (UL = 1.2D + 1.6L typical ACI code, simplified here to sum)
      const totalForce = (live + dead) * area;

      return [
        { label: "Total Load", value: `${totalForce.toFixed(2)} kN` },
        { label: "Load per Unit Area", value: `${(live + dead).toFixed(2)} kN/m²` },
      ];
    },
  },

  "weld-strength": {
    fields: [
      { id: "length", label: "Weld Length (mm)", type: "number", placeholder: "50" },
      { id: "size", label: "Weld Throat Size (mm)", type: "number", placeholder: "5" },
      { id: "stress", label: "Allowable Stress (MPa)", type: "number", placeholder: "140" },
    ],
    calculate: (values: Record<string, string>) => {
      const L = parseFloat(values.length) || 0;
      const t = parseFloat(values.size) || 0;
      const S = parseFloat(values.stress) || 0;

      // Area = L * t
      // Force = Stress * Area
      const F = S * L * t; // Newtons

      return [
        { label: "Max Load Capacity", value: `${F.toFixed(0)} N` },
        { label: "In kN", value: `${(F / 1000).toFixed(2)} kN` },
      ];
    },
  },

  "bearing-load": {
    fields: [
      { id: "radial", label: "Radial Load (N)", type: "number", placeholder: "2000" },
      { id: "axial", label: "Axial Load (N)", type: "number", placeholder: "500" },
      { id: "factor", label: "X Factor (Radial)", type: "number", placeholder: "0.56" },
      { id: "yfactor", label: "Y Factor (Axial)", type: "number", placeholder: "1.45" },
    ],
    calculate: (values: Record<string, string>) => {
      const Fr = parseFloat(values.radial) || 0;
      const Fa = parseFloat(values.axial) || 0;
      const X = parseFloat(values.factor) || 0.56;
      const Y = parseFloat(values.yfactor) || 1.45;

      // Equivalent Dynamic Load P = X*Fr + Y*Fa
      const P = X * Fr + Y * Fa;
      // If P < Fr, usually P = Fr is used, but simplified calculation:
      const finalP = Math.max(P, Fr);

      return [
        { label: "Equivalent Load (P)", value: `${finalP.toFixed(0)} N` },
      ];
    },
  },

  // ==========================================
  // SPORTS CALCULATORS
  // ==========================================

  "1rm": {
    fields: [
      { id: "weight", label: "Weight Lifted (lbs/kg)", type: "number", placeholder: "135", min: 0 },
      { id: "reps", label: "Repetitions", type: "number", placeholder: "5", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.weight) || 0;
      const r = parseFloat(values.reps) || 1;

      // Epley Formula: 1RM = w * (1 + r/30)
      const max = w * (1 + r / 30);

      return [
        { label: "Estimated 1 Rep Max", value: Math.round(max) },
        { label: "5 Rep Max", value: Math.round(max * 0.87) },
        { label: "10 Rep Max", value: Math.round(max * 0.75) },
      ];
    },
  },

  "swim-pace": {
    fields: [
      { id: "distance", label: "Distance (meters)", type: "number", placeholder: "1000", min: 0 },
      { id: "time", label: "Time (MM:SS)", type: "text", placeholder: "15:00" },
    ],
    calculate: (values: Record<string, string>) => {
      const d = parseFloat(values.distance) || 1;
      const timeStr = values.time || "0:0";
      const [mm, ss] = timeStr.split(":").map(Number);
      const totalSec = (mm || 0) * 60 + (ss || 0);

      const secPer100 = (totalSec / d) * 100;
      const pMin = Math.floor(secPer100 / 60);
      const pSec = Math.round(secPer100 % 60);

      return [{ label: "Pace per 100m", value: `${pMin}:${String(pSec).padStart(2, '0')}` }];
    },
  },

  "cycling-power": {
    fields: [
      { id: "speed", label: "Speed (km/h)", type: "number", placeholder: "30", min: 0 },
      { id: "weight", label: "Total Weight (Rider+Bike kg)", type: "number", placeholder: "85", min: 0 },
      { id: "grade", label: "Gradient (%)", type: "number", placeholder: "0" },
    ],
    calculate: (values: Record<string, string>) => {
      const v = (parseFloat(values.speed) || 0) / 3.6; // m/s
      const m = parseFloat(values.weight) || 0;
      const g = (parseFloat(values.grade) || 0) / 100;

      // Simple physics model: Power = Rolling + Gravity + Aero
      // P = (Crr * m * g * v) + (m * g * sin(atan(grade)) * v) + (0.5 * CdA * rho * v^3)
      const Crr = 0.004; // Rolling resistance
      const CdA = 0.32;  // Drag area
      const rho = 1.225; // Air density

      const pRoll = Crr * m * 9.81 * v;
      const pGrav = m * 9.81 * Math.sin(Math.atan(g)) * v;
      const pAero = 0.5 * CdA * rho * Math.pow(v, 3);

      const total = pRoll + pGrav + pAero;

      return [{ label: "Estimated Power", value: `${total.toFixed(0)} Watts` }];
    },
  },

  "vo2-max": {
    fields: [
      { id: "age", label: "Age", type: "number", placeholder: "30", min: 1 },
      { id: "resthr", label: "Resting Heart Rate", type: "number", placeholder: "60", min: 30 },
      { id: "maxhr", label: "Max Heart Rate (Optional)", type: "number", placeholder: "190", min: 100 },
    ],
    calculate: (values: Record<string, string>) => {
      const age = parseFloat(values.age) || 30;
      const rest = parseFloat(values.resthr) || 60;
      const max = parseFloat(values.maxhr) || (220 - age);

      // Uth-Sørensen-Overgaard-Pedersen formula
      const vo2 = 15.3 * (max / rest);

      return [
        { label: "Estimated VO2 Max", value: `${vo2.toFixed(1)} mL/kg/min` },
        { label: "Fitness Level", value: vo2 > 50 ? "Excellent" : vo2 > 40 ? "Good" : "Average" },
      ];
    },
  },

  "race-time": {
    fields: [
      { id: "distance", label: "Race Distance (km)", type: "number", placeholder: "10", min: 0 },
      { id: "pace", label: "Average Pace (min/km) e.g. 5.5", type: "number", placeholder: "5.5", min: 0 },
    ],
    calculate: (values: Record<string, string>) => {
      const d = parseFloat(values.distance) || 0;
      const p = parseFloat(values.pace) || 0;

      const totalMin = d * p;
      const h = Math.floor(totalMin / 60);
      const m = Math.floor(totalMin % 60);
      const s = Math.round((totalMin * 60) % 60);

      return [{ label: "Finish Time", value: `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` }];
    },
  },

  "vertical-jump": {
    fields: [
      { id: "reach", label: "Standing Reach (cm)", type: "number", placeholder: "230" },
      { id: "jump", label: "Jump Reach (cm)", type: "number", placeholder: "280" },
    ],
    calculate: (values: Record<string, string>) => {
      const r = parseFloat(values.reach) || 0;
      const j = parseFloat(values.jump) || 0;
      return [{ label: "Vertical Jump", value: `${j - r} cm` }];
    },
  },

  "golf-handicap": {
    fields: [
      { id: "score", label: "Score", type: "number", placeholder: "85" },
      { id: "rating", label: "Course Rating", type: "number", placeholder: "72.0" },
      { id: "slope", label: "Slope Rating", type: "number", placeholder: "113" },
    ],
    calculate: (values: Record<string, string>) => {
      const score = parseFloat(values.score) || 0;
      const rating = parseFloat(values.rating) || 0;
      const slope = parseFloat(values.slope) || 113;

      // Differential = (Score - Course Rating) * (113 / Slope Rating)
      const diff = (score - rating) * (113 / slope);

      return [{ label: "Handicap Differential", value: diff.toFixed(1) }];
    },
  },

  "batting-average": {
    fields: [
      { id: "hits", label: "Hits", type: "number", placeholder: "30" },
      { id: "atbats", label: "At Bats", type: "number", placeholder: "100" },
    ],
    calculate: (values: Record<string, string>) => {
      const h = parseFloat(values.hits) || 0;
      const ab = parseFloat(values.atbats) || 1;
      const avg = h / ab;
      // Format to 3 decimal places without leading zero usually (e.g. .300)
      return [{ label: "Batting Average", value: avg.toFixed(3).replace(/^0+/, '') }];
    },
  },

  "free-throw": {
    fields: [
      { id: "made", label: "Shots Made", type: "number", placeholder: "8" },
      { id: "attempts", label: "Attempts", type: "number", placeholder: "10" },
    ],
    calculate: (values: Record<string, string>) => {
      const m = parseFloat(values.made) || 0;
      const a = parseFloat(values.attempts) || 1;
      return [{ label: "Percentage", value: `${((m / a) * 100).toFixed(1)}%` }];
    },
  },

  "training-zones": {
    fields: [
      { id: "maxhr", label: "Max Heart Rate", type: "number", placeholder: "190" },
      { id: "resthr", label: "Resting Heart Rate", type: "number", placeholder: "60" },
    ],
    calculate: (values: Record<string, string>) => {
      const max = parseFloat(values.maxhr) || 190;
      const rest = parseFloat(values.resthr) || 60;
      const reserve = max - rest;

      // Karvonen Formula: Target = ((Max - Rest) * %) + Rest
      const z2 = Math.round((reserve * 0.6) + rest); // 60%
      const z4 = Math.round((reserve * 0.8) + rest); // 80%

      return [
        { label: "Zone 2 (Endurance)", value: `${z2} bpm` },
        { label: "Zone 4 (Threshold)", value: `${z4} bpm` },
      ];
    },
  },

  "protein-athletes": {
    fields: [
      { id: "weight", label: "Body Weight (lbs)", type: "number", placeholder: "160" },
      {
        id: "type", label: "Activity Type", type: "select", options: [
          { value: "1.4", label: "Endurance (1.2-1.4 g/kg)" },
          { value: "1.8", label: "Strength/Muscle (1.6-2.0 g/kg)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const lbs = parseFloat(values.weight) || 0;
      const kg = lbs * 0.453592;
      const factor = parseFloat(values.type) || 1.4;

      const protein = kg * factor;

      return [{ label: "Daily Protein Target", value: `${Math.round(protein)} grams` }];
    },
  },

  "carb-loading": {
    fields: [
      { id: "weight", label: "Body Weight (kg)", type: "number", placeholder: "70" },
      {
        id: "intensity", label: "Loading Intensity", type: "select", options: [
          { value: "8", label: "Moderate (8g/kg)" },
          { value: "10", label: "High (10g/kg)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.weight) || 0;
      const i = parseFloat(values.intensity) || 8;
      return [{ label: "Daily Carb Target", value: `${Math.round(w * i)} grams` }];
    },
  },

  "hydration-sports": {
    fields: [
      { id: "wBefore", label: "Weight Before (lbs)", type: "number", placeholder: "160" },
      { id: "wAfter", label: "Weight After (lbs)", type: "number", placeholder: "159" },
      { id: "drank", label: "Fluids Consumed (oz)", type: "number", placeholder: "16" },
    ],
    calculate: (values: Record<string, string>) => {
      const before = parseFloat(values.wBefore) || 0;
      const after = parseFloat(values.wAfter) || 0;
      const drank = parseFloat(values.drank) || 0;

      const lossLbs = before - after;
      const lossOz = lossLbs * 16;
      const totalLoss = lossOz + drank;

      return [
        { label: "Sweat Loss", value: `${totalLoss.toFixed(1)} oz` },
        { label: "Rehydration Goal (1.5x)", value: `${(totalLoss * 1.5).toFixed(1)} oz` },
      ];
    },
  },

  "recovery-time": {
    fields: [
      { id: "intensity", label: "Workout Intensity (1-10)", type: "number", placeholder: "8", min: 1, max: 10 },
      { id: "duration", label: "Duration (hours)", type: "number", placeholder: "1.5" },
    ],
    calculate: (values: Record<string, string>) => {
      const i = parseFloat(values.intensity) || 5;
      const d = parseFloat(values.duration) || 1;

      // Simple heuristic
      let hours = 24;
      if (i * d > 15) hours = 48;
      if (i * d > 25) hours = 72;

      return [{ label: "Recommended Rest", value: `${hours} Hours` }];
    },
  },

  "training-load": {
    fields: [
      { id: "rpe", label: "RPE (1-10)", type: "number", placeholder: "7" },
      { id: "minutes", label: "Duration (minutes)", type: "number", placeholder: "60" },
    ],
    calculate: (values: Record<string, string>) => {
      const rpe = parseFloat(values.rpe) || 0;
      const min = parseFloat(values.minutes) || 0;
      const load = rpe * min;
      return [{ label: "Training Load (AU)", value: load }];
    },
  },

  "speed-calculator": {
    fields: [
      { id: "paceMin", label: "Pace Minutes", type: "number", placeholder: "5" },
      { id: "paceSec", label: "Pace Seconds", type: "number", placeholder: "0" },
      {
        id: "unit", label: "Pace Unit", type: "select", options: [
          { value: "km", label: "min/km" },
          { value: "mi", label: "min/mile" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const min = parseFloat(values.paceMin) || 0;
      const sec = parseFloat(values.paceSec) || 0;
      const totalMin = min + (sec / 60);

      const speed = 60 / totalMin; // units per hour
      const unit = values.unit === "mi" ? "mph" : "km/h";

      return [{ label: "Speed", value: `${speed.toFixed(2)} ${unit}` }];
    },
  },

  "splits": {
    fields: [
      { id: "distance", label: "Total Distance (km)", type: "number", placeholder: "5" },
      { id: "time", label: "Total Time (MM:SS)", type: "text", placeholder: "25:00" },
    ],
    calculate: (values: Record<string, string>) => {
      const d = parseFloat(values.distance) || 1;
      const [mm, ss] = (values.time || "0:0").split(":").map(Number);
      const totalSec = (mm || 0) * 60 + (ss || 0);

      const secPerKm = totalSec / d;
      const m = Math.floor(secPerKm / 60);
      const s = Math.round(secPerKm % 60);

      return [{ label: "Average Split", value: `${m}:${String(s).padStart(2, '0')} /km` }];
    },
  },

  "power-weight": {
    fields: [
      { id: "ftp", label: "Functional Threshold Power (W)", type: "number", placeholder: "250" },
      { id: "weight", label: "Body Weight (kg)", type: "number", placeholder: "75" },
    ],
    calculate: (values: Record<string, string>) => {
      const ftp = parseFloat(values.ftp) || 0;
      const w = parseFloat(values.weight) || 1;
      const ratio = ftp / w;
      return [{ label: "Power-to-Weight", value: `${ratio.toFixed(2)} W/kg` }];
    },
  },

  "exercise-calories": {
    fields: [
      { id: "met", label: "MET Value (Activity)", type: "number", placeholder: "8" },
      { id: "weight", label: "Weight (kg)", type: "number", placeholder: "70" },
      { id: "minutes", label: "Duration (min)", type: "number", placeholder: "30" },
    ],
    calculate: (values: Record<string, string>) => {
      const met = parseFloat(values.met) || 1;
      const w = parseFloat(values.weight) || 0;
      const t = parseFloat(values.minutes) || 0;
      // Formula: METs * 3.5 * weight(kg) / 200 * minutes
      const kcal = (met * 3.5 * w / 200) * t;
      return [{ label: "Calories Burned", value: `${Math.round(kcal)} kcal` }];
    },
  },

  // ==========================================
  // PHOTOGRAPHY CALCULATORS
  // ==========================================

  "depth-of-field": {
    fields: [
      { id: "focal", label: "Focal Length (mm)", type: "number", placeholder: "50", min: 1 },
      { id: "aperture", label: "Aperture (f/)", type: "number", placeholder: "1.8", min: 0.5 },
      { id: "distance", label: "Subject Distance (m)", type: "number", placeholder: "2", min: 0.1 },
    ],
    calculate: (values: Record<string, string>) => {
      const f = parseFloat(values.focal) || 50;
      const N = parseFloat(values.aperture) || 1.8;
      const d = (parseFloat(values.distance) || 2) * 1000; // convert to mm
      const c = 0.03; // CoC for Full Frame approx

      const H = (f * f) / (N * c) + f; // Hyperfocal distance

      const dn = (H * d) / (H + (d - f)); // Near limit
      const df = (H * d) / (H - (d - f)); // Far limit

      const dof = df - dn;

      return [
        { label: "Depth of Field", value: `${(dof / 10).toFixed(1)} cm` },
        { label: "Hyperfocal Dist", value: `${(H / 1000).toFixed(2)} m` },
      ];
    },
  },

  "exposure": {
    fields: [
      { id: "iso1", label: "Current ISO", type: "number", placeholder: "100" },
      { id: "iso2", label: "New ISO", type: "number", placeholder: "400" },
      { id: "shutter", label: "Current Shutter Denom (1/x)", type: "number", placeholder: "100" },
    ],
    calculate: (values: Record<string, string>) => {
      const iso1 = parseFloat(values.iso1) || 100;
      const iso2 = parseFloat(values.iso2) || 100;
      const s1 = parseFloat(values.shutter) || 100; // Represents 1/100

      // Stops difference = log2(iso2/iso1)
      // Each stop doubles shutter speed (halves time)
      const stops = Math.log2(iso2 / iso1);
      const factor = Math.pow(2, stops);
      const s2 = s1 * factor;

      return [{ label: "New Shutter Speed", value: `1/${Math.round(s2)} sec` }];
    },
  },

  "field-of-view": {
    fields: [
      { id: "focal", label: "Focal Length (mm)", type: "number", placeholder: "50" },
      { id: "sensor", label: "Sensor Width (mm)", type: "number", placeholder: "36" }, // 36 for FF
    ],
    calculate: (values: Record<string, string>) => {
      const f = parseFloat(values.focal) || 50;
      const w = parseFloat(values.sensor) || 36;

      // FOV = 2 * atan(sensor / (2 * focal))
      const rad = 2 * Math.atan(w / (2 * f));
      const deg = rad * (180 / Math.PI);

      return [{ label: "Field of View", value: `${deg.toFixed(1)}°` }];
    },
  },

  "print-size": {
    fields: [
      { id: "width", label: "Image Width (px)", type: "number", placeholder: "6000" },
      { id: "height", label: "Image Height (px)", type: "number", placeholder: "4000" },
      { id: "dpi", label: "Print DPI", type: "number", placeholder: "300" },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.width) || 0;
      const h = parseFloat(values.height) || 0;
      const dpi = parseFloat(values.dpi) || 300;

      return [
        { label: "Print Dimensions", value: `${(w / dpi).toFixed(1)}" x ${(h / dpi).toFixed(1)}"` },
      ];
    },
  },

  "aspect-ratio": {
    fields: [
      { id: "w", label: "Width", type: "number", placeholder: "1920" },
      { id: "h", label: "Height", type: "number", placeholder: "1080" },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.w) || 1;
      const h = parseFloat(values.h) || 1;
      const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
      const d = gcd(w, h);
      return [{ label: "Aspect Ratio", value: `${w / d}:${h / d}` }];
    },
  },

  "hyperfocal": {
    fields: [
      { id: "focal", label: "Focal Length (mm)", type: "number", placeholder: "24" },
      { id: "aperture", label: "Aperture (f/)", type: "number", placeholder: "8" },
    ],
    calculate: (values: Record<string, string>) => {
      const f = parseFloat(values.focal) || 24;
      const N = parseFloat(values.aperture) || 8;
      const c = 0.03; // CoC Full Frame

      const H = (f * f) / (N * c) + f;
      return [{ label: "Hyperfocal Distance", value: `${(H / 1000).toFixed(2)} m` }];
    },
  },

  "flash-guide": {
    fields: [
      { id: "gn", label: "Guide Number (m)", type: "number", placeholder: "60" },
      { id: "distance", label: "Subject Distance (m)", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const gn = parseFloat(values.gn) || 0;
      const dist = parseFloat(values.distance) || 1;
      // GN = Aperture * Distance
      const fstop = gn / dist;
      return [{ label: "Required Aperture", value: `f/${fstop.toFixed(1)}` }];
    },
  },

  "timelapse": {
    fields: [
      { id: "clip", label: "Final Clip Length (sec)", type: "number", placeholder: "10" },
      { id: "fps", label: "Frame Rate (fps)", type: "number", placeholder: "24" },
      { id: "event", label: "Event Duration (min)", type: "number", placeholder: "60" },
    ],
    calculate: (values: Record<string, string>) => {
      const clip = parseFloat(values.clip) || 0;
      const fps = parseFloat(values.fps) || 24;
      const eventMin = parseFloat(values.event) || 0;

      const frames = clip * fps;
      const eventSec = eventMin * 60;
      const interval = eventSec / frames;

      return [
        { label: "Interval", value: `${interval.toFixed(1)} sec` },
        { label: "Total Photos", value: frames },
      ];
    },
  },

  "megapixels": {
    fields: [
      { id: "w", label: "Width (px)", type: "number", placeholder: "6000" },
      { id: "h", label: "Height (px)", type: "number", placeholder: "4000" },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.w) || 0;
      const h = parseFloat(values.h) || 0;
      const mp = (w * h) / 1000000;
      return [{ label: "Megapixels", value: `${mp.toFixed(1)} MP` }];
    },
  },

  "lens-converter": {
    fields: [
      { id: "focal", label: "Lens Focal Length (mm)", type: "number", placeholder: "50" },
      { id: "crop", label: "Crop Factor", type: "number", placeholder: "1.5" }, // 1.5 for APS-C
    ],
    calculate: (values: Record<string, string>) => {
      const f = parseFloat(values.focal) || 0;
      const c = parseFloat(values.crop) || 1;
      return [{ label: "Full Frame Equivalent", value: `${(f * c).toFixed(0)} mm` }];
    },
  },

  "storage": {
    fields: [
      { id: "gb", label: "Card Size (GB)", type: "number", placeholder: "64" },
      { id: "mb", label: "Avg File Size (MB)", type: "number", placeholder: "25" },
    ],
    calculate: (values: Record<string, string>) => {
      const gb = parseFloat(values.gb) || 0;
      const mb = parseFloat(values.mb) || 1;
      const count = (gb * 1024) / mb;
      return [{ label: "Est. Image Capacity", value: Math.floor(count).toLocaleString() }];
    },
  },

  "sensor-size": {
    fields: [
      { id: "w1", label: "Sensor 1 Width (mm)", type: "number", placeholder: "36" },
      { id: "h1", label: "Sensor 1 Height (mm)", type: "number", placeholder: "24" },
      { id: "w2", label: "Sensor 2 Width (mm)", type: "number", placeholder: "23.5" },
      { id: "h2", label: "Sensor 2 Height (mm)", type: "number", placeholder: "15.6" },
    ],
    calculate: (values: Record<string, string>) => {
      const area1 = (parseFloat(values.w1) || 0) * (parseFloat(values.h1) || 0);
      const area2 = (parseFloat(values.w2) || 0) * (parseFloat(values.h2) || 0);
      const factor = area1 / area2;

      return [{ label: "Size Difference", value: `${factor.toFixed(2)}x larger` }];
    },
  },

  "diffraction": {
    fields: [
      { id: "mp", label: "Megapixels", type: "number", placeholder: "24" },
      {
        id: "sensor", label: "Sensor Type", type: "select", options: [
          { value: "36", label: "Full Frame" },
          { value: "23.5", label: "APS-C" },
          { value: "17.3", label: "Micro 4/3" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const mp = parseFloat(values.mp) || 24;
      const width = parseFloat(values.sensor) || 36;

      // Estimate pixel pitch in microns
      // width / sqrt(pixels w) roughly
      // Assuming 3:2 ratio: w_px = sqrt(MP * 1.5e6)
      const w_px = Math.sqrt(mp * 1500000);
      const pitch = (width * 1000) / w_px; // microns

      // Diffraction Limit Aperture approx = 2 * pixel_pitch
      const dla = 2 * pitch;

      return [{ label: "Diffraction Limit Start", value: `f/${dla.toFixed(1)}` }];
    },
  },

  "macro-magnification": {
    fields: [
      { id: "image", label: "Image Size on Sensor (mm)", type: "number", placeholder: "10" },
      { id: "object", label: "Real Object Size (mm)", type: "number", placeholder: "10" },
    ],
    calculate: (values: Record<string, string>) => {
      const i = parseFloat(values.image) || 0;
      const o = parseFloat(values.object) || 1;
      return [{ label: "Magnification Ratio", value: `${(i / o).toFixed(2)}:1` }];
    },
  },

  "star-trails": {
    fields: [
      { id: "focal", label: "Focal Length (mm)", type: "number", placeholder: "14" },
      { id: "exp", label: "Exposure Time (min)", type: "number", placeholder: "60" },
    ],
    calculate: (values: Record<string, string>) => {
      const f = parseFloat(values.focal) || 14;
      const t = parseFloat(values.exp) || 60; // minutes

      // Earth rotates 15 degrees per hour (0.25 deg per min)
      const rotation = t * 0.25;
      // Trail length depends on focal length too, simplified output:

      return [{ label: "Star Rotation", value: `${rotation.toFixed(1)} degrees` }];
    },
  },

  "sunset-time": {
    // Placeholder for logic requiring geolocation/API
    fields: [
      { id: "offset", label: "Golden Hour Duration (min)", type: "number", placeholder: "60" },
    ],
    calculate: (values: Record<string, string>) => {
      return [{ label: "Note", value: "Calculated from local sunset time" }];
    },
  },

  "panorama": {
    fields: [
      { id: "fov", label: "Lens FOV (degrees)", type: "number", placeholder: "60" },
      { id: "total", label: "Desired Total FOV (degrees)", type: "number", placeholder: "180" },
      { id: "overlap", label: "Overlap (%)", type: "number", placeholder: "30" },
    ],
    calculate: (values: Record<string, string>) => {
      const fov = parseFloat(values.fov) || 60;
      const total = parseFloat(values.total) || 180;
      const overlap = (parseFloat(values.overlap) || 30) / 100;

      const effective = fov * (1 - overlap);
      const shots = Math.ceil(total / effective);

      return [{ label: "Shots Needed", value: shots }];
    },
  },

  "video-bitrate": {
    fields: [
      { id: "hours", label: "Hours", type: "number", placeholder: "1" },
      { id: "gb", label: "Available Space (GB)", type: "number", placeholder: "32" },
    ],
    calculate: (values: Record<string, string>) => {
      const sec = (parseFloat(values.hours) || 0) * 3600;
      const bits = (parseFloat(values.gb) || 0) * 8 * 1024; // megabits

      const mbps = bits / sec;
      return [{ label: "Max Bitrate", value: `${mbps.toFixed(1)} Mbps` }];
    },
  },

  "lens-equivalence": {
    fields: [
      { id: "f1", label: "Lens 1 (mm)", type: "number", placeholder: "50" },
      { id: "s1", label: "Sensor 1 Crop", type: "number", placeholder: "1" }, // 1=FF
      { id: "s2", label: "Sensor 2 Crop", type: "number", placeholder: "1.5" }, // 1.5=APS-C
    ],
    calculate: (values: Record<string, string>) => {
      const f1 = parseFloat(values.f1) || 0;
      const c1 = parseFloat(values.s1) || 1;
      const c2 = parseFloat(values.s2) || 1;

      // Equiv focal length on Sensor 2 to match Sensor 1's FOV
      // FF equiv of lens 1 = f1 * c1
      // Lens 2 * c2 = FF equiv
      // Lens 2 = (f1 * c1) / c2
      const f2 = (f1 * c1) / c2;

      return [{ label: "Equivalent Lens for Sensor 2", value: `${f2.toFixed(1)} mm` }];
    },
  },

  // ==========================================
  // MUSIC CALCULATORS
  // ==========================================

  "bpm": {
    fields: [
      { id: "beats", label: "Beats Counted", type: "number", placeholder: "20", min: 1 },
      { id: "seconds", label: "Time (seconds)", type: "number", placeholder: "10", min: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const beats = parseFloat(values.beats) || 0;
      const seconds = parseFloat(values.seconds) || 1;
      const bpm = (beats / seconds) * 60;
      return [{ label: "BPM", value: `${Math.round(bpm)}` }];
    },
  },

  "chord-finder": {
    fields: [
      {
        id: "root", label: "Root Note", type: "select", options: [
          { value: "C", label: "C" }, { value: "D", label: "D" },
          { value: "E", label: "E" }, { value: "F", label: "F" },
          { value: "G", label: "G" }, { value: "A", label: "A" }, { value: "B", label: "B" }
        ]
      },
      {
        id: "quality", label: "Quality", type: "select", options: [
          { value: "maj", label: "Major" },
          { value: "min", label: "Minor" },
          { value: "7", label: "Dominant 7" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const root = values.root || "C";
      const q = values.quality || "maj";
      // Simplified logic for display purposes
      let notes = "";
      if (q === "maj") notes = "Root - Major 3rd - Perfect 5th";
      else if (q === "min") notes = "Root - Minor 3rd - Perfect 5th";
      else notes = "Root - Maj 3rd - Perf 5th - Min 7th";

      return [{ label: "Chord Structure", value: notes }];
    },
  },

  // CUIDADO: Este ID 'frequency' duplica al de la categoría Conversion
  "frequency-music": {
    fields: [
      { id: "semitones", label: "Semitones from A4", type: "number", placeholder: "0" },
      { id: "tuning", label: "Reference A4 (Hz)", type: "number", placeholder: "440" },
    ],
    calculate: (values: Record<string, string>) => {
      const n = parseFloat(values.semitones) || 0;
      const a4 = parseFloat(values.tuning) || 440;
      const f = a4 * Math.pow(2, n / 12);
      return [
        { label: "Frequency", value: `${f.toFixed(2)} Hz` },
        { label: "Note Offset", value: `${n} semitones` }
      ];
    },
  },

  "scale-finder": {
    fields: [
      { id: "key", label: "Key Center", type: "text", placeholder: "C" },
      {
        id: "type", label: "Scale Type", type: "select", options: [
          { value: "major", label: "Major (Ionian)" },
          { value: "minor", label: "Minor (Aeolian)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const key = (values.key || "C").toUpperCase();
      const type = values.type || "major";
      let formula = "";
      if (type === "major") formula = "W - W - H - W - W - W - H";
      else formula = "W - H - W - W - H - W - W";

      return [{ label: "Interval Formula", value: formula }];
    },
  },

  "metronome": {
    fields: [
      { id: "bpm", label: "Tempo (BPM)", type: "number", placeholder: "120" },
      { id: "beats", label: "Beats per Bar", type: "number", placeholder: "4" },
    ],
    calculate: (values: Record<string, string>) => {
      const bpm = parseFloat(values.bpm) || 120;
      const ms = 60000 / bpm;
      return [
        { label: "Beat Interval", value: `${ms.toFixed(0)} ms` },
        { label: "Beats per Second", value: `${(bpm / 60).toFixed(2)}` }
      ];
    },
  },

  "interval": {
    fields: [
      { id: "semitones", label: "Semitones", type: "number", placeholder: "7" },
    ],
    calculate: (values: Record<string, string>) => {
      const s = Math.abs(parseFloat(values.semitones) || 0) % 12;
      const intervals = ["Unison", "Minor 2nd", "Major 2nd", "Minor 3rd", "Major 3rd", "Perfect 4th", "Tritone", "Perfect 5th", "Minor 6th", "Major 6th", "Minor 7th", "Major 7th"];
      return [{ label: "Interval Name", value: intervals[s] || "Octave" }];
    },
  },

  "song-key": {
    fields: [
      { id: "chords", label: "Chords (comma separated)", type: "text", placeholder: "Am, F, C, G" },
    ],
    calculate: (values: Record<string, string>) => {
      const chords = values.chords || "";
      // Simple heuristic placeholder
      return [{ label: "Analyzed Key", value: "Analysis requires complex theory logic" }];
    },
  },

  "delay-time": {
    fields: [
      { id: "bpm", label: "BPM", type: "number", placeholder: "120" },
      {
        id: "note", label: "Note Division", type: "select", options: [
          { value: "1", label: "Quarter (1/4)" },
          { value: "0.75", label: "Dotted Eighth" },
          { value: "0.5", label: "Eighth (1/8)" }
        ]
      },
    ],
    calculate: (values: Record<string, string>) => {
      const bpm = parseFloat(values.bpm) || 120;
      const note = parseFloat(values.note) || 1;
      const ms = (60000 / bpm) * note;
      return [{ label: "Delay Time", value: `${ms.toFixed(0)} ms` }];
    },
  },

  "sample-rate": {
    fields: [
      { id: "rate", label: "Sample Rate (kHz)", type: "number", placeholder: "44.1" },
      { id: "bits", label: "Bit Depth", type: "number", placeholder: "24" },
      { id: "channels", label: "Channels", type: "number", placeholder: "2" },
      { id: "minutes", label: "Duration (min)", type: "number", placeholder: "3" },
    ],
    calculate: (values: Record<string, string>) => {
      const rate = (parseFloat(values.rate) || 44.1) * 1000;
      const bits = parseFloat(values.bits) || 24;
      const ch = parseFloat(values.channels) || 2;
      const sec = (parseFloat(values.minutes) || 0) * 60;

      const bitsTotal = rate * bits * ch * sec;
      const mb = bitsTotal / 8 / 1024 / 1024;

      return [{ label: "File Size (Uncompressed)", value: `${mb.toFixed(2)} MB` }];
    },
  },

  "db-calculator": {
    fields: [
      { id: "p1", label: "Reference Power (W)", type: "number", placeholder: "1" },
      { id: "p2", label: "Measured Power (W)", type: "number", placeholder: "100" },
    ],
    calculate: (values: Record<string, string>) => {
      const p1 = parseFloat(values.p1) || 1;
      const p2 = parseFloat(values.p2) || 1;
      const db = 10 * Math.log10(p2 / p1);
      return [{ label: "Gain/Loss", value: `${db.toFixed(2)} dB` }];
    },
  },

  "song-length": {
    fields: [
      { id: "bpm", label: "BPM", type: "number", placeholder: "120" },
      { id: "bars", label: "Number of Bars", type: "number", placeholder: "100" },
      { id: "sig", label: "Beats per Bar", type: "number", placeholder: "4" },
    ],
    calculate: (values: Record<string, string>) => {
      const bpm = parseFloat(values.bpm) || 120;
      const bars = parseFloat(values.bars) || 0;
      const sig = parseFloat(values.sig) || 4;

      const totalBeats = bars * sig;
      const minutes = totalBeats / bpm;
      const m = Math.floor(minutes);
      const s = Math.round((minutes - m) * 60);

      return [{ label: "Duration", value: `${m}:${String(s).padStart(2, '0')}` }];
    },
  },

  "lyrics-per-minute": {
    fields: [
      { id: "words", label: "Word Count", type: "number", placeholder: "300" },
      { id: "minutes", label: "Song Length (min)", type: "number", placeholder: "3.5" },
    ],
    calculate: (values: Record<string, string>) => {
      const words = parseFloat(values.words) || 0;
      const min = parseFloat(values.minutes) || 1;
      return [{ label: "Flow (Words/Min)", value: (words / min).toFixed(0) }];
    },
  },

  "practice-time": {
    fields: [
      { id: "hours", label: "Goal Hours", type: "number", placeholder: "10000" },
      { id: "daily", label: "Daily Practice (hrs)", type: "number", placeholder: "2" },
    ],
    calculate: (values: Record<string, string>) => {
      const goal = parseFloat(values.hours) || 10000;
      const daily = parseFloat(values.daily) || 1;
      const days = goal / daily;
      const years = days / 365;
      return [
        { label: "Time to Goal", value: `${years.toFixed(1)} Years` },
        { label: "Total Days", value: Math.ceil(days) }
      ];
    },
  },

  "recording-time": {
    fields: [
      { id: "songs", label: "Songs", type: "number", placeholder: "4" },
      { id: "tracks", label: "Tracks per Song", type: "number", placeholder: "8" },
      { id: "length", label: "Avg Length (min)", type: "number", placeholder: "4" },
      { id: "takes", label: "Takes per Track", type: "number", placeholder: "3" },
    ],
    calculate: (values: Record<string, string>) => {
      const songs = parseFloat(values.songs) || 0;
      const tracks = parseFloat(values.tracks) || 0;
      const len = parseFloat(values.length) || 0;
      const takes = parseFloat(values.takes) || 1;

      const totalMin = songs * tracks * len * takes;
      // Add 50% buffer for setup/review
      const studioTime = totalMin * 1.5;

      return [
        { label: "Raw Recording Time", value: `${(totalMin / 60).toFixed(1)} Hours` },
        { label: "Est. Studio Time", value: `${(studioTime / 60).toFixed(1)} Hours` }
      ];
    },
  },

  "mixing-levels": {
    fields: [
      { id: "track1", label: "Track 1 Level (dB)", type: "number", placeholder: "-6" },
      { id: "track2", label: "Track 2 Level (dB)", type: "number", placeholder: "-6" },
    ],
    calculate: (values: Record<string, string>) => {
      const t1 = parseFloat(values.track1) || -99;
      const t2 = parseFloat(values.track2) || -99;

      // Summing uncorrelated audio sources: 10 * log10(10^(L1/10) + 10^(L2/10))
      const sum = 10 * Math.log10(Math.pow(10, t1 / 10) + Math.pow(10, t2 / 10));

      return [{ label: "Combined Level", value: `${sum.toFixed(1)} dB` }];
    },
  },

  "mastering": {
    fields: [
      { id: "target", label: "Target LUFS", type: "number", placeholder: "-14" },
      { id: "current", label: "Integrated LUFS", type: "number", placeholder: "-18" },
    ],
    calculate: (values: Record<string, string>) => {
      const target = parseFloat(values.target) || -14;
      const current = parseFloat(values.current) || -18;
      const gain = target - current;
      return [{ label: "Gain Adjustment", value: `${gain > 0 ? '+' : ''}${gain.toFixed(1)} dB` }];
    },
  },

  "copyright": {
    fields: [
      { id: "death", label: "Author Death Year", type: "number", placeholder: "1980" },
      { id: "term", label: "Protection Term (Years)", type: "number", placeholder: "70" },
    ],
    calculate: (values: Record<string, string>) => {
      const death = parseFloat(values.death) || 0;
      const term = parseFloat(values.term) || 70;
      const publicDomain = death + term + 1; // Usually Jan 1st of following year
      const now = new Date().getFullYear();

      return [
        { label: "Public Domain Year", value: publicDomain },
        { label: "Status", value: now >= publicDomain ? "Public Domain" : "Protected" }
      ];
    },
  },

  "royalty": {
    fields: [
      { id: "streams", label: "Total Streams", type: "number", placeholder: "100000" },
      { id: "rate", label: "Pay Per Stream ($)", type: "number", placeholder: "0.004" },
      { id: "split", label: "Your Split (%)", type: "number", placeholder: "100" },
    ],
    calculate: (values: Record<string, string>) => {
      const streams = parseFloat(values.streams) || 0;
      const rate = parseFloat(values.rate) || 0.004;
      const split = (parseFloat(values.split) || 100) / 100;

      const total = streams * rate;
      const share = total * split;

      return [
        { label: "Total Revenue", value: `$${total.toFixed(2)}` },
        { label: "Your Share", value: `$${share.toFixed(2)}` }
      ];
    },
  },

  "setlist": {
    fields: [
      { id: "songs", label: "Number of Songs", type: "number", placeholder: "12" },
      { id: "avgLength", label: "Avg Song Length (min)", type: "number", placeholder: "3.5" },
      { id: "talk", label: "Talk/Break Time (min)", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const songs = parseFloat(values.songs) || 0;
      const avg = parseFloat(values.avgLength) || 0;
      const talk = parseFloat(values.talk) || 0;

      const total = songs * avg + talk;
      const h = Math.floor(total / 60);
      const m = Math.round(total % 60);

      return [{ label: "Set Duration", value: `${h}h ${m}m` }];
    },
  },

  // ==========================================
  // ENVIRONMENT CALCULATORS
  // ==========================================

  "carbon-footprint": {
    fields: [
      { id: "mileage", label: "Annual Driving (miles)", type: "number", placeholder: "12000" },
      { id: "mpg", label: "Car MPG", type: "number", placeholder: "25" },
      { id: "electric", label: "Monthly Electric Bill ($)", type: "number", placeholder: "100" },
      { id: "gas", label: "Monthly Gas/Heating Bill ($)", type: "number", placeholder: "50" },
    ],
    calculate: (values: Record<string, string>) => {
      const miles = parseFloat(values.mileage) || 0;
      const mpg = parseFloat(values.mpg) || 25;
      const elec = parseFloat(values.electric) || 0;
      const gas = parseFloat(values.gas) || 0;

      // 19.6 lbs CO2 per gallon gas.
      const carCo2 = (miles / mpg) * 19.6;
      // Approx $0.15/kWh, 0.85 lbs CO2/kWh. (elec/0.15 * 12 * 0.85)
      const elecCo2 = (elec / 0.15) * 12 * 0.85;
      // Approx $1.10/therm natural gas, 11.7 lbs CO2/therm. (gas/1.10 * 12 * 11.7)
      const gasCo2 = (gas / 1.10) * 12 * 11.7;

      const totalLbs = carCo2 + elecCo2 + gasCo2;
      const totalTons = totalLbs / 2000;

      return [
        { label: "Total Annual CO2", value: `${totalTons.toFixed(2)} Tons` },
        { label: "From Driving", value: `${(carCo2 / 2000).toFixed(2)} Tons` },
        { label: "From Home Energy", value: `${((elecCo2 + gasCo2) / 2000).toFixed(2)} Tons` },
      ];
    },
  },

  "solar-savings": {
    fields: [
      { id: "bill", label: "Monthly Electric Bill ($)", type: "number", placeholder: "150" },
      { id: "sun", label: "Sun Hours/Day", type: "number", placeholder: "5" },
      { id: "cost", label: "System Cost ($)", type: "number", placeholder: "15000" },
    ],
    calculate: (values: Record<string, string>) => {
      const bill = parseFloat(values.bill) || 0;
      const cost = parseFloat(values.cost) || 0;

      const annualSavings = bill * 12;
      const roi = annualSavings > 0 ? cost / annualSavings : 0;
      const tenYear = annualSavings * 10 - cost;

      return [
        { label: "Annual Savings", value: `$${annualSavings.toFixed(2)}` },
        { label: "Payback Period", value: `${roi.toFixed(1)} Years` },
        { label: "10-Year Profit", value: `$${tenYear.toFixed(2)}` },
      ];
    },
  },

  "water-usage": {
    fields: [
      { id: "people", label: "Household Members", type: "number", placeholder: "3" },
      { id: "showers", label: "Avg Shower Time (min)", type: "number", placeholder: "10" },
      { id: "baths", label: "Baths per Week", type: "number", placeholder: "2" },
      { id: "loads", label: "Laundry Loads/Week", type: "number", placeholder: "4" },
    ],
    calculate: (values: Record<string, string>) => {
      const people = parseFloat(values.people) || 1;
      const showerMin = parseFloat(values.showers) || 0;
      const baths = parseFloat(values.baths) || 0;
      const laundry = parseFloat(values.loads) || 0;

      const showerGal = people * showerMin * 2.5 * 7; // 2.5 GPM
      const bathGal = baths * 35; // 35 gal/bath
      const laundryGal = laundry * 25; // 25 gal/load HE washer
      const toiletGal = people * 5 * 1.6 * 7; // 5 flushes, 1.6 gpf

      const weekly = showerGal + bathGal + laundryGal + toiletGal;
      const daily = weekly / 7;

      return [
        { label: "Daily Usage", value: `${daily.toFixed(0)} Gallons` },
        { label: "Weekly Usage", value: `${weekly.toFixed(0)} Gallons` },
        { label: "Annual Usage", value: `${(weekly * 52).toLocaleString()} Gallons` },
      ];
    },
  },

  "recycling": {
    fields: [
      { id: "cans", label: "Aluminum Cans/Week", type: "number", placeholder: "10" },
      { id: "plastic", label: "Plastic Bottles/Week", type: "number", placeholder: "5" },
      { id: "paper", label: "Paper (lbs/week)", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const cans = parseFloat(values.cans) || 0;
      const plastic = parseFloat(values.plastic) || 0;
      const paper = parseFloat(values.paper) || 0;

      // Energy saved estimates (kWh)
      // Alum can ~ 0.2 kWh, Plastic bottle ~ 0.1 kWh, Paper lb ~ 1.5 kWh
      const kwh = (cans * 0.2 + plastic * 0.1 + paper * 1.5) * 52;

      return [
        { label: "Annual Energy Saved", value: `${kwh.toFixed(0)} kWh` },
        { label: "Equivalent CO2 Saved", value: `${(kwh * 0.85).toFixed(0)} lbs` },
      ];
    },
  },

  "energy-usage": {
    fields: [
      { id: "watts", label: "Appliance Wattage (W)", type: "number", placeholder: "100" },
      { id: "hours", label: "Hours Used per Day", type: "number", placeholder: "5" },
      { id: "rate", label: "Cost per kWh ($)", type: "number", placeholder: "0.15" },
    ],
    calculate: (values: Record<string, string>) => {
      const watts = parseFloat(values.watts) || 0;
      const hours = parseFloat(values.hours) || 0;
      const rate = parseFloat(values.rate) || 0.15;

      const kwhDaily = (watts * hours) / 1000;
      const costDaily = kwhDaily * rate;
      const costYearly = costDaily * 365;

      return [
        { label: "Daily Cost", value: `$${costDaily.toFixed(2)}` },
        { label: "Yearly Cost", value: `$${costYearly.toFixed(2)}` },
        { label: "Annual kWh", value: `${(kwhDaily * 365).toFixed(1)} kWh` },
      ];
    },
  },

  "tree-planting": {
    fields: [
      { id: "trees", label: "Number of Trees", type: "number", placeholder: "10" },
      { id: "age", label: "Years Grown", type: "number", placeholder: "20" },
    ],
    calculate: (values: Record<string, string>) => {
      const trees = parseFloat(values.trees) || 0;
      const age = parseFloat(values.age) || 0;
      // Approx 48 lbs CO2 per year for a mature tree
      const co2 = trees * age * 48;

      return [
        { label: "Total CO2 Sequestered", value: `${co2.toLocaleString()} lbs` },
        { label: "Equivalent Car Miles", value: `${(co2 / 0.89).toFixed(0)} miles` }, // 0.89 lbs/mile avg
      ];
    },
  },

  "compost-impact": {
    fields: [
      { id: "waste", label: "Food Waste Composted (lbs/week)", type: "number", placeholder: "5" },
    ],
    calculate: (values: Record<string, string>) => {
      const waste = parseFloat(values.waste) || 0;
      const annualLbs = waste * 52;
      // Methane avoidance estimate: 1 lb food waste in landfill = 0.9 lbs CO2e methane
      const co2e = annualLbs * 0.9;

      return [
        { label: "Waste Diverted (Annual)", value: `${annualLbs.toFixed(0)} lbs` },
        { label: "CO2 Equivalent Prevented", value: `${co2e.toFixed(0)} lbs` },
      ];
    },
  },

  "plastic-waste": {
    fields: [
      { id: "bottles", label: "Disposable Bottles/Week", type: "number", placeholder: "5" },
      { id: "bags", label: "Plastic Bags/Week", type: "number", placeholder: "10" },
    ],
    calculate: (values: Record<string, string>) => {
      const bottles = parseFloat(values.bottles) || 0;
      const bags = parseFloat(values.bags) || 0;

      const annualBottles = bottles * 52;
      const annualBags = bags * 52;
      const totalItems = annualBottles + annualBags;

      return [
        { label: "Annual Plastic Items", value: totalItems },
        { label: "Years to Decompose", value: "450+ Years" },
      ];
    },
  },

  "led-savings": {
    fields: [
      { id: "bulbs", label: "Number of Bulbs Replaced", type: "number", placeholder: "10" },
      { id: "hours", label: "Avg Daily Use (hours)", type: "number", placeholder: "4" },
      { id: "rate", label: "Elec Cost ($/kWh)", type: "number", placeholder: "0.15" },
    ],
    calculate: (values: Record<string, string>) => {
      const bulbs = parseFloat(values.bulbs) || 0;
      const hours = parseFloat(values.hours) || 0;
      const rate = parseFloat(values.rate) || 0.15;

      const incWatts = 60;
      const ledWatts = 9;
      const diffWatts = incWatts - ledWatts;

      const kwhSaved = (diffWatts * bulbs * hours * 365) / 1000;
      const moneySaved = kwhSaved * rate;

      return [
        { label: "Annual Savings", value: `$${moneySaved.toFixed(2)}` },
        { label: "Energy Saved", value: `${kwhSaved.toFixed(0)} kWh` },
      ];
    },
  },

  "eco-score": {
    fields: [
      { id: "meat", label: "Meat Meals per Week", type: "number", placeholder: "7" },
      { id: "drive", label: "Weekly Driving (miles)", type: "number", placeholder: "100" },
      { id: "recycle", label: "Recycle? (1=Yes, 0=No)", type: "number", placeholder: "1", max: 1 },
    ],
    calculate: (values: Record<string, string>) => {
      const meat = parseFloat(values.meat) || 0;
      const drive = parseFloat(values.drive) || 0;
      const recycle = parseFloat(values.recycle) || 0;

      let score = 100;
      score -= meat * 2; // Meat impact
      score -= drive * 0.2; // Driving impact
      if (recycle === 0) score -= 20;

      score = Math.max(0, Math.min(100, score));

      return [
        { label: "Eco Score", value: `${score.toFixed(0)} / 100` },
        { label: "Rating", value: score > 75 ? "Excellent 🌿" : score > 50 ? "Average 😐" : "Needs Improvement 🏭" },
      ];
    },
  },

  "ev-savings": {
    fields: [
      { id: "miles", label: "Annual Miles", type: "number", placeholder: "12000" },
      { id: "gasPrice", label: "Gas Price ($/gal)", type: "number", placeholder: "3.50" },
      { id: "mpg", label: "Gas Car MPG", type: "number", placeholder: "25" },
      { id: "kwhPrice", label: "Elec Price ($/kWh)", type: "number", placeholder: "0.15" },
      { id: "eff", label: "EV Efficiency (kWh/100mi)", type: "number", placeholder: "30" },
    ],
    calculate: (values: Record<string, string>) => {
      const miles = parseFloat(values.miles) || 0;
      const gasPrice = parseFloat(values.gasPrice) || 3.50;
      const mpg = parseFloat(values.mpg) || 25;
      const kwhPrice = parseFloat(values.kwhPrice) || 0.15;
      const eff = parseFloat(values.eff) || 30;

      const gasCost = (miles / mpg) * gasPrice;
      const evCost = (miles / 100) * eff * kwhPrice;
      const savings = gasCost - evCost;

      return [
        { label: "Annual Gas Cost", value: `$${gasCost.toFixed(2)}` },
        { label: "Annual EV Cost", value: `$${evCost.toFixed(2)}` },
        { label: "Annual Savings", value: `$${savings.toFixed(2)}` },
      ];
    },
  },

  "insulation-savings": {
    fields: [
      { id: "bill", label: "Monthly Heating/Cooling ($)", type: "number", placeholder: "150" },
      { id: "improvement", label: "Estimated Efficiency Gain (%)", type: "number", placeholder: "15" },
    ],
    calculate: (values: Record<string, string>) => {
      const bill = parseFloat(values.bill) || 0;
      const gain = parseFloat(values.improvement) || 0;

      const annualBill = bill * 12;
      const savings = annualBill * (gain / 100);

      return [
        { label: "Annual Savings", value: `$${savings.toFixed(2)}` },
        { label: "Monthly Savings", value: `$${(savings / 12).toFixed(2)}` },
      ];
    },
  },

  "weatherization": {
    fields: [
      { id: "windows", label: "Drafty Windows", type: "number", placeholder: "5" },
      { id: "doors", label: "Drafty Doors", type: "number", placeholder: "2" },
      { id: "fuelCost", label: "Annual Heating Cost ($)", type: "number", placeholder: "1000" },
    ],
    calculate: (values: Record<string, string>) => {
      const w = parseFloat(values.windows) || 0;
      const d = parseFloat(values.doors) || 0;
      const cost = parseFloat(values.fuelCost) || 0;

      // Rule of thumb: sealing drafts saves ~10-15%
      // Assume 2% per window/door roughly
      const percent = (w + d) * 1.5;
      const savings = cost * (percent / 100);

      return [
        { label: "Potential Savings", value: `$${savings.toFixed(2)}` },
        { label: "Efficiency Gain", value: `${percent.toFixed(1)}%` },
      ];
    },
  },

  "rainwater-harvest": {
    fields: [
      { id: "roof", label: "Roof Area (sq ft)", type: "number", placeholder: "1000" },
      { id: "rain", label: "Annual Rainfall (inches)", type: "number", placeholder: "30" },
      { id: "efficiency", label: "Collection Efficiency (%)", type: "number", placeholder: "85" },
    ],
    calculate: (values: Record<string, string>) => {
      const roof = parseFloat(values.roof) || 0;
      const rain = parseFloat(values.rain) || 0;
      const eff = (parseFloat(values.efficiency) || 85) / 100;

      // 1 inch rain on 1 sq ft = 0.623 gallons
      const potential = roof * rain * 0.623;
      const collected = potential * eff;

      return [
        { label: "Annual Collection", value: `${collected.toLocaleString()} Gallons` },
        { label: "Monthly Avg", value: `${(collected / 12).toFixed(0)} Gallons` },
      ];
    },
  },

  "greywater": {
    fields: [
      { id: "showers", label: "Showers per Week", type: "number", placeholder: "14" },
      { id: "laundry", label: "Laundry Loads per Week", type: "number", placeholder: "4" },
    ],
    calculate: (values: Record<string, string>) => {
      const s = parseFloat(values.showers) || 0;
      const l = parseFloat(values.laundry) || 0;

      // Avg shower 17 gal, Avg washer 25 gal (simplified)
      const showerGal = s * 17;
      const laundryGal = l * 25;
      const total = showerGal + laundryGal;
      const annual = total * 52;

      return [
        { label: "Weekly Reuse Potential", value: `${total.toFixed(0)} Gallons` },
        { label: "Annual Reuse Potential", value: `${annual.toLocaleString()} Gallons` },
      ];
    },
  },

  "wind-power": {
    fields: [
      { id: "radius", label: "Rotor Radius (m)", type: "number", placeholder: "2" },
      { id: "speed", label: "Wind Speed (m/s)", type: "number", placeholder: "10" },
      { id: "efficiency", label: "Turbine Efficiency (%)", type: "number", placeholder: "40" },
    ],
    calculate: (values: Record<string, string>) => {
      const r = parseFloat(values.radius) || 0;
      const v = parseFloat(values.speed) || 0;
      const eff = (parseFloat(values.efficiency) || 40) / 100;

      const area = Math.PI * r * r;
      const airDensity = 1.225; // kg/m3
      // Power = 0.5 * rho * A * v^3 * eff
      const power = 0.5 * airDensity * area * Math.pow(v, 3) * eff;

      return [
        { label: "Power Output", value: `${power.toFixed(0)} Watts` },
        { label: "Daily Energy", value: `${(power * 24 / 1000).toFixed(2)} kWh` },
      ];
    },
  },

  "geothermal": {
    fields: [
      { id: "heatLoad", label: "Annual Heating Load (MMBtu)", type: "number", placeholder: "60" },
      { id: "cop", label: "Geothermal COP", type: "number", placeholder: "4.0" },
      { id: "furnaceEff", label: "Current Furnace Eff (%)", type: "number", placeholder: "80" },
      { id: "costGas", label: "Gas Cost ($/MMBtu)", type: "number", placeholder: "12" },
      { id: "costElec", label: "Elec Cost ($/kWh)", type: "number", placeholder: "0.15" },
    ],
    calculate: (values: Record<string, string>) => {
      const load = parseFloat(values.heatLoad) || 60; // Million Btu
      const cop = parseFloat(values.cop) || 4.0;
      const furnaceEff = (parseFloat(values.furnaceEff) || 80) / 100;
      const gasP = parseFloat(values.costGas) || 12;
      const elecP = parseFloat(values.costElec) || 0.15;

      // Current Cost
      const inputEnergy = load / furnaceEff;
      const currentCost = inputEnergy * gasP;

      // Geothermal Cost
      // 1 MMBtu = 293 kWh
      const loadKwh = load * 293;
      const inputElec = loadKwh / cop;
      const geoCost = inputElec * elecP;

      return [
        { label: "Current Annual Cost", value: `$${currentCost.toFixed(2)}` },
        { label: "Geothermal Annual Cost", value: `$${geoCost.toFixed(2)}` },
        { label: "Annual Savings", value: `$${(currentCost - geoCost).toFixed(2)}` },
      ];
    },
  },

  "energy-audit": {
    fields: [
      { id: "sqft", label: "Home Size (sq ft)", type: "number", placeholder: "2000" },
      { id: "bill", label: "Total Annual Energy Bill ($)", type: "number", placeholder: "2000" },
    ],
    calculate: (values: Record<string, string>) => {
      const sqft = parseFloat(values.sqft) || 1;
      const bill = parseFloat(values.bill) || 0;

      const intensity = bill / sqft;

      return [
        { label: "Cost per Sq Ft", value: `$${intensity.toFixed(2)}` },
        { label: "Efficiency Rating", value: intensity < 0.8 ? "Efficient ✅" : intensity > 1.5 ? "Inefficient ⚠️" : "Average" },
      ];
    },
  },

  "sustainable-living": {
    fields: [
      { id: "local", label: "Buy Local Food? (1=Yes)", type: "number", placeholder: "1" },
      { id: "transit", label: "Use Public Transit? (1=Yes)", type: "number", placeholder: "0" },
      { id: "compost", label: "Compost? (1=Yes)", type: "number", placeholder: "1" },
      { id: "solar", label: "Use Solar? (1=Yes)", type: "number", placeholder: "0" },
    ],
    calculate: (values: Record<string, string>) => {
      let score = 0;
      score += (parseFloat(values.local) || 0) * 25;
      score += (parseFloat(values.transit) || 0) * 25;
      score += (parseFloat(values.compost) || 0) * 25;
      score += (parseFloat(values.solar) || 0) * 25;

      return [
        { label: "Sustainability Score", value: `${score}/100` },
        { label: "Level", value: score >= 75 ? "Eco Warrior 🦸" : "Eco Conscious 🌱" },
      ];
    },
  },
}

