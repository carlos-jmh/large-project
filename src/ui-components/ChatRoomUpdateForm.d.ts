/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChatRoom } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatRoomUpdateFormInputValues = {
    owners?: string[];
};
export declare type ChatRoomUpdateFormValidationValues = {
    owners?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatRoomUpdateFormOverridesProps = {
    ChatRoomUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owners?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChatRoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatRoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chatRoom?: ChatRoom;
    onSubmit?: (fields: ChatRoomUpdateFormInputValues) => ChatRoomUpdateFormInputValues;
    onSuccess?: (fields: ChatRoomUpdateFormInputValues) => void;
    onError?: (fields: ChatRoomUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatRoomUpdateFormInputValues) => ChatRoomUpdateFormInputValues;
    onValidate?: ChatRoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatRoomUpdateForm(props: ChatRoomUpdateFormProps): React.ReactElement;
