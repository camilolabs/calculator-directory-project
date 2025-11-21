export interface CalculatorField {
  id: string;
  label: string;
  type: "number" | "text" | "select" | "unit";
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  unitType?: "length";
}

export interface CalculatorConfig {
  fields: CalculatorField[];
  calculate: (values: Record<string, string>) => {
    label: string;
    value: string | number;
    description?: string;
  }[];
}

// Generic fallback configuration to make missing calculators usable.
export function getFallbackConfig(
  calculatorId: string,
  calculatorName: string,
  categoryName?: string
): CalculatorConfig {
  return {
    fields: [
      { id: "a", label: "Input A", type: "number", placeholder: "10", step: 0.01 },
      { id: "b", label: "Input B", type: "number", placeholder: "5", step: 0.01 },
    ],
    calculate: (values: Record<string, string>) => {
      const a = parseFloat(values.a || "0") || 0;
      const b = parseFloat(values.b || "0") || 0;
      return [
        {
          label: `${calculatorName}: Sum`,
          value: (a + b).toFixed(2),
          description: `Quick result to make ${calculatorName} usable.`,
        },
        {
          label: `${calculatorName}: Difference`,
          value: (a - b).toFixed(2),
        },
        {
          label: `${calculatorName}: Product`,
          value: (a * b).toFixed(2),
        },
      ];
    },
  };
}