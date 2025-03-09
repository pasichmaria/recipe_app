import * as React from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";

import { cn } from "../utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "dark" | "light";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = "light", ...props }, ref) => {
    return (
      <input
        value={props.value}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
          variant === "dark"
            ? "border-gray-300 bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-blue-400 dark:focus:border-blue-400"
            : "border-gray-200 bg-gray-100 text-gray-900 focus:ring-blue-300 focus:border-blue-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export type NumberInputProps = Omit<NumericFormatProps, "type"> &
  Omit<InputProps, "ref" | "value" | "defaultValue" | "type" | "onChange"> & {
    defaultValue?: string | number;
    value?: string | number;
    decimalSeparator?: string;
  };

const NumberInput = React.memo(
  React.forwardRef<HTMLInputElement, NumberInputProps>(
    ({ decimalScale = 9, allowNegative = false, onChange, ...rest }, ref) => {
      return (
        <NumericFormat
          getInputRef={ref}
          customInput={Input}
          allowNegative={allowNegative}
          onValueChange={({ value }) => {
            onChange?.({
              target: { value },
            } as React.ChangeEvent<HTMLInputElement>);
          }}
          {...rest}
          thousandSeparator=","
          decimalSeparator="."
          allowedDecimalSeparators={[",", "."]}
          decimalScale={decimalScale}
        />
      );
    },
  ),
);

export { Input, NumberInput };
