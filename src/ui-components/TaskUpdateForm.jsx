/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Task } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TaskUpdateForm(props) {
  const {
    id: idProp,
    task,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    foreverTask: false,
    deleteSourceOnComplete: false,
    completed: false,
    pointValue: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [foreverTask, setForeverTask] = React.useState(
    initialValues.foreverTask
  );
  const [deleteSourceOnComplete, setDeleteSourceOnComplete] = React.useState(
    initialValues.deleteSourceOnComplete
  );
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [pointValue, setPointValue] = React.useState(initialValues.pointValue);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = taskRecord
      ? { ...initialValues, ...taskRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setForeverTask(cleanValues.foreverTask);
    setDeleteSourceOnComplete(cleanValues.deleteSourceOnComplete);
    setCompleted(cleanValues.completed);
    setPointValue(cleanValues.pointValue);
    setErrors({});
  };
  const [taskRecord, setTaskRecord] = React.useState(task);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Task, idProp) : task;
      setTaskRecord(record);
    };
    queryData();
  }, [idProp, task]);
  React.useEffect(resetStateValues, [taskRecord]);
  const validations = {
    title: [{ type: "Required" }],
    foreverTask: [],
    deleteSourceOnComplete: [],
    completed: [],
    pointValue: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          foreverTask,
          deleteSourceOnComplete,
          completed,
          pointValue,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Task.copyOf(taskRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TaskUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              foreverTask,
              deleteSourceOnComplete,
              completed,
              pointValue,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <SwitchField
        label="Forever task"
        defaultChecked={false}
        isDisabled={false}
        isChecked={foreverTask}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              foreverTask: value,
              deleteSourceOnComplete,
              completed,
              pointValue,
            };
            const result = onChange(modelFields);
            value = result?.foreverTask ?? value;
          }
          if (errors.foreverTask?.hasError) {
            runValidationTasks("foreverTask", value);
          }
          setForeverTask(value);
        }}
        onBlur={() => runValidationTasks("foreverTask", foreverTask)}
        errorMessage={errors.foreverTask?.errorMessage}
        hasError={errors.foreverTask?.hasError}
        {...getOverrideProps(overrides, "foreverTask")}
      ></SwitchField>
      <SwitchField
        label="Delete source on complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={deleteSourceOnComplete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              foreverTask,
              deleteSourceOnComplete: value,
              completed,
              pointValue,
            };
            const result = onChange(modelFields);
            value = result?.deleteSourceOnComplete ?? value;
          }
          if (errors.deleteSourceOnComplete?.hasError) {
            runValidationTasks("deleteSourceOnComplete", value);
          }
          setDeleteSourceOnComplete(value);
        }}
        onBlur={() =>
          runValidationTasks("deleteSourceOnComplete", deleteSourceOnComplete)
        }
        errorMessage={errors.deleteSourceOnComplete?.errorMessage}
        hasError={errors.deleteSourceOnComplete?.hasError}
        {...getOverrideProps(overrides, "deleteSourceOnComplete")}
      ></SwitchField>
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              foreverTask,
              deleteSourceOnComplete,
              completed: value,
              pointValue,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
      <TextField
        label="Point value"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pointValue}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              title,
              foreverTask,
              deleteSourceOnComplete,
              completed,
              pointValue: value,
            };
            const result = onChange(modelFields);
            value = result?.pointValue ?? value;
          }
          if (errors.pointValue?.hasError) {
            runValidationTasks("pointValue", value);
          }
          setPointValue(value);
        }}
        onBlur={() => runValidationTasks("pointValue", pointValue)}
        errorMessage={errors.pointValue?.errorMessage}
        hasError={errors.pointValue?.hasError}
        {...getOverrideProps(overrides, "pointValue")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || task)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || task) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
