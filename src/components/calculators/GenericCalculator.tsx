"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CalculatorField {
  id: string;
  label: string;
  type: "number" | "text" | "select" | "unit";
  placeholder?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  step?: number;
  unitType?: "length"; // for future expansion
}

interface CalculatorConfig {
  fields: CalculatorField[];
  calculate: (values: Record<string, string>) => {
    label: string;
    value: string | number;
    description?: string;
  }[];
}

interface GenericCalculatorProps {
  config: CalculatorConfig;
}

export function GenericCalculator({ config }: GenericCalculatorProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [results, setResults] = useState<
    { label: string; value: string | number; description?: string }[] | null
  >(null);

  const handleChange = (id: string, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleCalculate = () => {
    try {
      const calculatedResults = config.calculate(values);
      setResults(calculatedResults);
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };

  const handleReset = () => {
    setValues({});
    setResults(null);
  };

  return (
    <div className="space-y-6">
      {/* Input Fields */}
      <div className="space-y-4">
        {config.fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            {field.type === "select" && field.options ? (
              <select
                id={field.id}
                value={values[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select...</option>
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "unit" ? (
              <div className="flex gap-2">
                <Input
                  id={field.id}
                  type="number"
                  placeholder={field.placeholder}
                  value={values[field.id] || ""}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  className="flex-1"
                />
                <select
                  id={`${field.id}_unit`}
                  value={values[`${field.id}_unit`] || "in"}
                  onChange={(e) => handleChange(`${field.id}_unit`, e.target.value)}
                  className="w-24 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="in">inches</option>
                  <option value="cm">cm</option>
                  <option value="m">m</option>
                </select>
              </div>
            ) : (
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                min={field.min}
                max={field.max}
                step={field.step}
              />
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button onClick={handleCalculate} className="flex-1">
          Calculate
        </Button>
        <Button onClick={handleReset} variant="outline">
          Reset
        </Button>
      </div>

      {/* Results */}
      {results && results.length > 0 && (
        <Card className="p-6 bg-primary/5">
          <h3 className="text-lg font-semibold mb-4">Results</h3>
          <div className="space-y-3">
            {results.map((result, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="font-medium">{result.label}</p>
                  {result.description && (
                    <p className="text-sm text-muted-foreground">
                      {result.description}
                    </p>
                  )}
                </div>
                <p className="text-xl font-bold text-primary">{result.value}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}