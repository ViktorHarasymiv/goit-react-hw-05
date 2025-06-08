import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";

import { createNote } from "../../services/noteService";

import css from "./NoteForm.module.css";

// TYPES

interface Values {
  title: string;
  content: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

interface ModalProps {
  onCloseModal: () => void;
}

// INITIAL CONST

const initialValues: Values = {
  title: "",
  content: "",
  tag: "Todo",
};

// VALIDATION SCHEMA

const OrderFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name is too long")
    .required("First name is required"),
  content: Yup.string()
    .min(4, "Invalid content format")
    .max(30, "Content is too long")
    .required("Content is required"),
  tag: Yup.string().required("Tag is required"),
});

export default function NoteForm({ onCloseModal }: ModalProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const handleSubmit = (values: Values, action: FormikHelpers<Values>) => {
    mutation.mutate(values, {
      onSuccess: () => {
        action.resetForm();
        onCloseModal();
      },
    });
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={OrderFormSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <Field id="title" type="text" name="title" className={css.input} />
          <ErrorMessage name="title" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <Field
            id="content"
            name="content"
            rows={8}
            className={css.textarea}
          />
          <ErrorMessage name="content" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <Field as="select" id="tag" name="tag" className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </Field>
          <ErrorMessage name="tag" component="span" className={css.error} />
        </div>

        <div className={css.actions}>
          <button
            onClick={onCloseModal}
            type="button"
            className={css.cancelButton}
          >
            Cancel
          </button>
          <button type="submit" className={css.submitButton} disabled={false}>
            Create note
          </button>
        </div>
      </Form>
    </Formik>
  );
}
