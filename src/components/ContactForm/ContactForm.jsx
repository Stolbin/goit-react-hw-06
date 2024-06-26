// import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { minLengthDataValidation } from "../utils/constants";
import { maxLengthDataValidation } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import css from "./ContactForm.module.css";

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(minLengthDataValidation, "Too Short!")
    .max(maxLengthDataValidation, "Too Long!"),
  number: Yup.string()
    .required("Required")
    .min(minLengthDataValidation, "Too Short!")
    .max(maxLengthDataValidation, "Too Long!"),
});

const FormInitialValues = {
  name: "",
  number: "",
};

const ContactsForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const action = addContact(newContact);
    dispatch(action);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FormInitialValues}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.formLabel}>
          <span className={css.formSpan}>Name</span>
          <Field
            className={css.formFiled}
            id={nameFieldId}
            type="text"
            name="name"
            placeholder="Name..."
          />
          <ErrorMessage
            className={css.formError}
            component="span"
            name="name"
          />
        </label>
        <label htmlFor={numberFieldId} className={css.formLabel}>
          <span className={css.formSpan}>Number</span>
          <Field
            className={css.formFiled}
            id={numberFieldId}
            type="text"
            name="number"
            placeholder="Number..."
          />
          <ErrorMessage
            className={css.formError}
            component="span"
            name="number"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactsForm;
