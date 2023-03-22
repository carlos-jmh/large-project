/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PrivateNote } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrivateNoteUpdateFormInputValues = {
    content?: string;
};
export declare type PrivateNoteUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivateNoteUpdateFormOverridesProps = {
    PrivateNoteUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivateNoteUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrivateNoteUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    privateNote?: PrivateNote;
    onSubmit?: (fields: PrivateNoteUpdateFormInputValues) => PrivateNoteUpdateFormInputValues;
    onSuccess?: (fields: PrivateNoteUpdateFormInputValues) => void;
    onError?: (fields: PrivateNoteUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivateNoteUpdateFormInputValues) => PrivateNoteUpdateFormInputValues;
    onValidate?: PrivateNoteUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrivateNoteUpdateForm(props: PrivateNoteUpdateFormProps): React.ReactElement;
