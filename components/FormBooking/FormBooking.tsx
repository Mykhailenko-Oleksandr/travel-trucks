"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./FormBooking.module.css";
import { enGB } from "date-fns/locale/en-GB";
import * as Yup from "yup";
import { Truck } from "@/types/truck";
import Modal from "../Modal/Modal";
import { ChangeEvent, useState } from "react";
import { useBookingDraftStore } from "@/lib/store/bookingStore";

registerLocale("en-GB", enGB);

export interface FormData {
  userName: string;
  email: string;
  date: Date | null;
  comment: string;
}

export interface SubmitValue {
  userName: string;
  email: string;
  date: string;
  comment: string;
}

const BookingSchema = Yup.object().shape({
  userName: Yup.string().min(3).max(50).required(),
  email: Yup.string().email().min(2).max(50).required(),
  date: Yup.date().min(new Date().toISOString().split("T")[0]),
  comment: Yup.string().max(100),
});

interface FormBookingProps {
  truck: Truck;
}

export default function FormBooking({ truck }: FormBookingProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitValue, setSubmitValue] = useState<SubmitValue | null>(null);
  const { draft, setDraft, clearDraft } = useBookingDraftStore();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;

    const changeEl = {
      ...draft,
      [key]: value,
    };

    setDraft(changeEl);
  }

  function handleSubmit(values: FormData) {
    if (!values.date) {
      return;
    }

    const year = values.date.getFullYear();
    const month = values.date.getMonth() + 1;
    const day = values.date.getDate();

    const monthTwoDigits = String(month).padStart(2, "0");
    const dayTwoDigits = String(day).padStart(2, "0");

    const bookingInfo = {
      ...values,
      date: `${dayTwoDigits}-${monthTwoDigits}-${year}`,
    };

    setSubmitValue(bookingInfo);
    clearDraft();
    setIsModalOpen(true);
  }

  return (
    <>
      <div className={css.bookingBox}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik<FormData>
          initialValues={draft}
          validationSchema={BookingSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form className={css.form}>
              <div className={css.inputBox}>
                <Field
                  type="text"
                  name="userName"
                  placeholder="Name*"
                  className={css.input}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="userName"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.inputBox}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className={css.input}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.inputBox}>
                <DatePicker
                  className={css.input}
                  name="date"
                  placeholderText="Booking date*"
                  selected={values.date}
                  onChange={(date: Date | null) => {
                    setFieldValue("date", date);
                    setDraft({ ...draft, date: date });
                  }}
                  locale="en-GB"
                  formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
                />
                <ErrorMessage
                  name="date"
                  component="span"
                  className={css.error}
                />
              </div>
              <div className={css.inputBox}>
                <Field
                  as="textarea"
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  className={css.textarea}
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="comment"
                  component="span"
                  className={css.error}
                />
              </div>
              <button type="submit" className={css.formBtn}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {isModalOpen && submitValue && (
        <Modal
          title="Booking successful"
          onClose={() => {
            setIsModalOpen(false);
            setSubmitValue(null);
          }}
        >
          Dear <span className={css.userNameModal}>{submitValue.userName}</span>
          , you have successfully booked a {truck.name} for {submitValue.date}.
        </Modal>
      )}
    </>
  );
}
