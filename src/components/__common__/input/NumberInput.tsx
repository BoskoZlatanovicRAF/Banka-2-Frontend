import {forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState} from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {cn} from "@/lib/utils.ts";

export interface NumberInputProps
    extends Omit<NumericFormatProps, 'value' | 'onValueChange'> {
    stepper?: number;
    thousandSeparator?: string;
    placeholder?: string;
    defaultValue?: number;
    min?: number;
    max?: number;
    value?: number; // Controlled value
    suffix?: string;
    prefix?: string;
    onValueChange?: (value: number | undefined) => void;
    fixedDecimalScale?: boolean;
    decimalScale?: number;
    buttons?: boolean; // This flag controls if the buttons should be displayed
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
    (
        {
            stepper,
            thousandSeparator,
            placeholder,
            defaultValue,
            min = -Infinity,
            max = Infinity,
            onValueChange,
            fixedDecimalScale = false,
            decimalScale = 0,
            suffix,
            prefix,
            value: controlledValue,
            buttons = true, // Default to showing buttons
            ...props
        },
        ref
    ) => {
        const [value, setValue] = useState<number | undefined>(controlledValue ?? defaultValue);

        const handleIncrement = useCallback(() => {
            setValue((prev) => {
                const newValue = prev === undefined ? stepper ?? 1 : Math.min(prev + (stepper ?? 1), max);

                if (onValueChange) {
                    onValueChange(newValue);
                }

                return newValue;
            });
        }, [stepper, max, onValueChange]);

        const handleDecrement = useCallback(() => {
            setValue((prev) => {
                const newValue = prev === undefined ? -(stepper ?? 1) : Math.max(prev - (stepper ?? 1), min);

                if (onValueChange) {
                    onValueChange(newValue);
                }

                return newValue;
            });
        }, [stepper, min, onValueChange]);

        const innerRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(ref, () => innerRef.current!);

        useEffect(() => {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (document.activeElement === innerRef.current) {
                    if (e.key === 'ArrowUp') {
                        handleIncrement();
                    } else if (e.key === 'ArrowDown') {
                        handleDecrement();
                    }
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [handleIncrement, handleDecrement, ref]);

        useEffect(() => {
            if (controlledValue !== undefined) {
                setValue(controlledValue);
            }
        }, [controlledValue]);

        const handleChange = (values: { value: string; floatValue: number | undefined }) => {
            const newValue = values.floatValue === undefined ? undefined : values.floatValue;
            setValue(newValue);
            if (onValueChange) {
                onValueChange(newValue);
            }
        };

        const handleBlur = () => {
            if (value !== undefined) {
                if (value < min) {
                    setValue(min);
                    (ref as React.RefObject<HTMLInputElement>).current!.value = String(min);
                } else if (value > max) {
                    setValue(max);
                    (ref as React.RefObject<HTMLInputElement>).current!.value = String(max);
                }
            }
        };

        const buttonsRoundness = buttons? "rounded-r-none": "";

        return (
            <div className="flex items-center">
                <NumericFormat
                    value={value}
                    onValueChange={handleChange}
                    thousandSeparator={thousandSeparator}
                    decimalScale={decimalScale}
                    fixedDecimalScale={fixedDecimalScale}
                    allowNegative={min < 0}
                    onBlur={handleBlur}
                    max={max}
                    min={min}
                    suffix={suffix}
                    prefix={prefix}
                    customInput={Input}
                    placeholder={placeholder}
                    className={cn("[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none relative", buttonsRoundness)}
                    getInputRef={ref}
                    {...props}
                />

                {/* Render buttons only if the `buttons` prop is true */}
                {buttons && (
                    <div className="flex flex-col">
                        <Button
                            type="button"
                            aria-label="Increase value"
                            className="px-2 h-4.5 rounded-l-none rounded-br-none border-input border-l-0 border-b-[0.5px] focus-visible:relative"
                            variant="outline"
                            onClick={handleIncrement}
                            disabled={value === max}
                        >
                            <span className="icon-[ph--caret-up]" aria-setsize={15}/>
                        </Button>
                        <Button
                            type="button"
                            aria-label="Decrease value"
                            className="px-2 h-4.5 rounded-l-none rounded-tr-none border-input border-l-0 border-t-[0.5px] focus-visible:relative"
                            variant="outline"
                            onClick={handleDecrement}
                            disabled={value === min}
                        >
                            <span className="icon-[ph--caret-down]" aria-setsize={15}/>
                        </Button>
                    </div>
                )}
            </div>
        );
    }
);
