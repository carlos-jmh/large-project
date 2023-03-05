/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EventHandler } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventHandlerUpdateFormInputValues = {
    frequency?: string;
    owners?: string[];
    sourceDate?: string;
    endDate?: string;
};
export declare type EventHandlerUpdateFormValidationValues = {
    frequency?: ValidationFunction<string>;
    owners?: ValidationFunction<string>;
    sourceDate?: ValidationFunction<string>;
    endDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventHandlerUpdateFormOverridesProps = {
    EventHandlerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    frequency?: PrimitiveOverrideProps<TextFieldProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
    sourceDate?: PrimitiveOverrideProps<TextFieldProps>;
    endDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventHandlerUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventHandlerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventHandler?: EventHandler;
    onSubmit?: (fields: EventHandlerUpdateFormInputValues) => EventHandlerUpdateFormInputValues;
    onSuccess?: (fields: EventHandlerUpdateFormInputValues) => void;
    onError?: (fields: EventHandlerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventHandlerUpdateFormInputValues) => EventHandlerUpdateFormInputValues;
    onValidate?: EventHandlerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventHandlerUpdateForm(props: EventHandlerUpdateFormProps): React.ReactElement;
