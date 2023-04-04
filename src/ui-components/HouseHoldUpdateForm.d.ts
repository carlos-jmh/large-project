/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HouseHold } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HouseHoldUpdateFormInputValues = {
    name?: string;
    owners?: string[];
};
export declare type HouseHoldUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    owners?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HouseHoldUpdateFormOverridesProps = {
    HouseHoldUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HouseHoldUpdateFormProps = React.PropsWithChildren<{
    overrides?: HouseHoldUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    houseHold?: HouseHold;
    onSubmit?: (fields: HouseHoldUpdateFormInputValues) => HouseHoldUpdateFormInputValues;
    onSuccess?: (fields: HouseHoldUpdateFormInputValues) => void;
    onError?: (fields: HouseHoldUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HouseHoldUpdateFormInputValues) => HouseHoldUpdateFormInputValues;
    onValidate?: HouseHoldUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HouseHoldUpdateForm(props: HouseHoldUpdateFormProps): React.ReactElement;
