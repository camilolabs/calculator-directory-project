"use client";

import { calculatorConfigs } from "@/lib/calculator-configs";
import { getFallbackConfig } from "@/lib/calculator-config-fallback";
import { GenericCalculator } from "./GenericCalculator";

interface CalculatorClientWrapperProps {
    calculatorId: string;
    calculatorName: string;
    categoryName: string;
}

export function CalculatorClientWrapper({
    calculatorId,
    calculatorName,
    categoryName,
}: CalculatorClientWrapperProps) {
    const config =
        calculatorConfigs[calculatorId] ??
        getFallbackConfig(calculatorId, calculatorName, categoryName);

    return <GenericCalculator config={config} />;
}
