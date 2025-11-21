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
      { id: "compound", label: "Compound Frequency", type: "select", options: [
        { value: "1", label: "Annually" },
        { value: "2", label: "Semi-annually" },
        { value: "4", label: "Quarterly" },
        { value: "12", label: "Monthly" },
        { value: "365", label: "Daily" },
      ]},
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
      { id: "status", label: "Filing Status", type: "select", options: [
        { value: "single", label: "Single" },
        { value: "married", label: "Married Filing Jointly" },
        { value: "head", label: "Head of Household" },
      ]},
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
      { id: "from", label: "From Currency", type: "select", options: [
        { value: "USD", label: "USD - US Dollar" },
        { value: "EUR", label: "EUR - Euro" },
        { value: "GBP", label: "GBP - British Pound" },
        { value: "JPY", label: "JPY - Japanese Yen" },
        { value: "CAD", label: "CAD - Canadian Dollar" },
      ]},
      { id: "to", label: "To Currency", type: "select", options: [
        { value: "USD", label: "USD - US Dollar" },
        { value: "EUR", label: "EUR - Euro" },
        { value: "GBP", label: "GBP - British Pound" },
        { value: "JPY", label: "JPY - Japanese Yen" },
        { value: "CAD", label: "CAD - Canadian Dollar" },
      ]},
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
      { id: "freq", label: "Compounds per Year", type: "select", options: [
        { value: "12", label: "12 - Monthly" },
        { value: "4", label: "4 - Quarterly" },
        { value: "2", label: "2 - Semi-Annual" },
        { value: "1", label: "1 - Annual" },
      ]},
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
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]},
      { id: "weight", label: "Weight (lbs)", type: "number", placeholder: "150", min: 0 },
      { id: "height", label: "Height", type: "unit", placeholder: "65", min: 0 },
      { id: "activity", label: "Activity Level", type: "select", options: [
        { value: "1.2", label: "Sedentary" },
        { value: "1.375", label: "Light Activity" },
        { value: "1.55", label: "Moderate Activity" },
        { value: "1.725", label: "Very Active" },
        { value: "1.9", label: "Extremely Active" },
      ]},
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
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]},
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
      { id: "activity", label: "Activity Level", type: "select", options: [
        { value: "0.8", label: "Sedentary" },
        { value: "1.2", label: "Lightly Active" },
        { value: "1.6", label: "Moderately Active" },
        { value: "2.0", label: "Very Active (Athlete)" },
      ]},
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
      { id: "climate", label: "Climate", type: "select", options: [
        { value: "1", label: "Temperate" },
        { value: "1.1", label: "Warm" },
        { value: "1.2", label: "Hot" },
      ]},
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
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]},
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
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]},
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
      { id: "shape", label: "Shape", type: "select", options: [
        { value: "rectangle", label: "Rectangle" },
        { value: "circle", label: "Circle" },
        { value: "triangle", label: "Right Triangle" },
      ]},
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
      { id: "gender", label: "Gender", type: "select", options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]},
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
      { id: "operation", label: "Operation", type: "select", options: [
        { value: "add", label: "Add (+)" },
        { value: "subtract", label: "Subtract (-)" },
        { value: "multiply", label: "Multiply (×)" },
        { value: "divide", label: "Divide (÷)" },
      ]},
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
      const sqrt = Math.pow(number, 1/power);
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
        ? (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2 
        : sorted[Math.floor(sorted.length/2)];
      
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
      { id: "from", label: "From", type: "select", options: [
        { value: "m", label: "Meters" },
        { value: "km", label: "Kilometers" },
        { value: "cm", label: "Centimeters" },
        { value: "ft", label: "Feet" },
        { value: "in", label: "Inches" },
        { value: "mi", label: "Miles" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "kg", label: "Kilograms" },
        { value: "g", label: "Grams" },
        { value: "lb", label: "Pounds" },
        { value: "oz", label: "Ounces" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "c", label: "Celsius" },
        { value: "f", label: "Fahrenheit" },
        { value: "k", label: "Kelvin" },
      ]},
    ],
    calculate: (values: Record<string, string>) => {
      const value = parseFloat(values.value) || 0;
      const from = values.from || "c";
      let c = 0;
      if (from === "c") c = value;
      else if (from === "f") c = (value - 32) * 5/9;
      else c = value - 273.15;
      const f = c * 9/5 + 32;
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
      { id: "from", label: "From", type: "select", options: [
        { value: "l", label: "Liters" },
        { value: "ml", label: "Milliliters" },
        { value: "gal", label: "Gallons" },
        { value: "oz", label: "Fluid Ounces" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "m2", label: "Square Meters" },
        { value: "ft2", label: "Square Feet" },
        { value: "acre", label: "Acres" },
        { value: "ha", label: "Hectares" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "ms", label: "Meters/Second" },
        { value: "kmh", label: "Kilometers/Hour" },
        { value: "mph", label: "Miles/Hour" },
        { value: "knot", label: "Knots" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "s", label: "Seconds" },
        { value: "min", label: "Minutes" },
        { value: "h", label: "Hours" },
        { value: "d", label: "Days" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "b", label: "Bytes" },
        { value: "kb", label: "Kilobytes" },
        { value: "mb", label: "Megabytes" },
        { value: "gb", label: "Gigabytes" },
        { value: "tb", label: "Terabytes" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "pa", label: "Pascals" },
        { value: "bar", label: "Bar" },
        { value: "psi", label: "PSI" },
        { value: "atm", label: "Atmospheres" },
      ]},
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
      { id: "from", label: "From", type: "select", options: [
        { value: "j", label: "Joules" },
        { value: "cal", label: "Calories" },
        { value: "kwh", label: "Kilowatt-hours" },
        { value: "btu", label: "BTU" },
      ]},
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
      { id: "sheetSize", label: "Sheet Size", type: "select", options: [
        { value: "32", label: "4x8 (32 sq ft)" },
        { value: "48", label: "4x12 (48 sq ft)" },
      ]},
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
      { id: "spacing", label: "Spacing", type: "select", options: [
        { value: "single", label: "Single Spaced" },
        { value: "double", label: "Double Spaced" },
      ]},
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
      { id: "from", label: "From Timezone", type: "select", options: [
        { value: "0", label: "UTC" },
        { value: "-5", label: "EST (UTC-5)" },
        { value: "-8", label: "PST (UTC-8)" },
        { value: "1", label: "CET (UTC+1)" },
        { value: "8", label: "CST (UTC+8)" },
      ]},
      { id: "to", label: "To Timezone", type: "select", options: [
        { value: "0", label: "UTC" },
        { value: "-5", label: "EST (UTC-5)" },
        { value: "-8", label: "PST (UTC-8)" },
        { value: "1", label: "CET (UTC+1)" },
        { value: "8", label: "CST (UTC+8)" },
      ]},
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
      { id: "type", label: "Meat Type", type: "select", options: [
        { value: "20", label: "Chicken (20 min/lb)" },
        { value: "15", label: "Turkey (15 min/lb)" },
        { value: "25", label: "Beef Roast (25 min/lb)" },
        { value: "30", label: "Pork Roast (30 min/lb)" },
      ]},
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
      { id: "meat", label: "Meat Type", type: "select", options: [
        { value: "165", label: "Chicken/Poultry" },
        { value: "145", label: "Beef Medium-Rare" },
        { value: "160", label: "Beef Medium/Pork" },
        { value: "145", label: "Fish" },
      ]},
    ],
    calculate: (values: Record<string, string>) => {
      const tempF = parseFloat(values.meat) || 165;
      const tempC = (tempF - 32) * 5/9;
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
      { id: "ratio", label: "Coffee to Water Ratio", type: "select", options: [
        { value: "15", label: "1:15 (Strong)" },
        { value: "16", label: "1:16 (Medium)" },
        { value: "17", label: "1:17 (Mild)" },
      ]},
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
      { id: "frequency", label: "Pay Frequency", type: "select", options: [
        { value: "52", label: "Weekly" },
        { value: "26", label: "Bi-weekly" },
        { value: "24", label: "Semi-monthly" },
        { value: "12", label: "Monthly" },
      ]},
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
};