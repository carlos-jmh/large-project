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
export declare type HouseHoldCreateFormInputValues = {
    name?: string;
    owners?: string[];
};
export declare type HouseHoldCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    owners?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HouseHoldCreateFormOverridesProps = {
    HouseHoldCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HouseHoldCreateFormProps = React.PropsWithChildren<{
    overrides?: HouseHoldCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HouseHoldCreateFormInputValues) => HouseHoldCreateFormInputValues;
    onSuccess?: (fields: HouseHoldCreateFormInputValues) => void;
    onError?: (fields: HouseHoldCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HouseHoldCreateFormInputValues) => HouseHoldCreateFormInputValues;
    onValidate?: HouseHoldCreateFormValidationValues;
} & React.CSSProperties>;
export default function HouseHoldCreateForm(props: HouseHoldCreateFormProps): React.ReactElement;
