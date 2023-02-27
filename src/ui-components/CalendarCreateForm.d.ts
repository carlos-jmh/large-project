/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalendarCreateFormInputValues = {};
export declare type CalendarCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarCreateFormOverridesProps = {
    CalendarCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type CalendarCreateFormProps = React.PropsWithChildren<{
    overrides?: CalendarCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CalendarCreateFormInputValues) => CalendarCreateFormInputValues;
    onSuccess?: (fields: CalendarCreateFormInputValues) => void;
    onError?: (fields: CalendarCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarCreateFormInputValues) => CalendarCreateFormInputValues;
    onValidate?: CalendarCreateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarCreateForm(props: CalendarCreateFormProps): React.ReactElement;
