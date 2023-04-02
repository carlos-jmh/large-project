/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventHandlerCreateFormInputValues = {
    frequency?: string;
    owners?: string[];
    sourceDate?: string;
    endDate?: string;
};
export declare type EventHandlerCreateFormValidationValues = {
    frequency?: ValidationFunction<string>;
    owners?: ValidationFunction<string>;
    sourceDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventHandlerCreateFormOverridesProps = {
    EventHandlerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
    sourceDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventHandlerCreateFormProps = React.PropsWithChildren<{
    overrides?: EventHandlerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventHandlerCreateFormInputValues) => EventHandlerCreateFormInputValues;
    onSuccess?: (fields: EventHandlerCreateFormInputValues) => void;
    onError?: (fields: EventHandlerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventHandlerCreateFormInputValues) => EventHandlerCreateFormInputValues;
    onValidate?: EventHandlerCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventHandlerCreateForm(props: EventHandlerCreateFormProps): React.ReactElement;
