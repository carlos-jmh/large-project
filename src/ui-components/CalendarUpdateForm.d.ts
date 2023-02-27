/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Calendar } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CalendarUpdateFormInputValues = {};
export declare type CalendarUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CalendarUpdateFormOverridesProps = {
    CalendarUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type CalendarUpdateFormProps = React.PropsWithChildren<{
    overrides?: CalendarUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    calendar?: Calendar;
    onSubmit?: (fields: CalendarUpdateFormInputValues) => CalendarUpdateFormInputValues;
    onSuccess?: (fields: CalendarUpdateFormInputValues) => void;
    onError?: (fields: CalendarUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CalendarUpdateFormInputValues) => CalendarUpdateFormInputValues;
    onValidate?: CalendarUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CalendarUpdateForm(props: CalendarUpdateFormProps): React.ReactElement;
