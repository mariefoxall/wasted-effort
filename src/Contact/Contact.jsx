import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toggleAlert = (message) => {
    setAlertInfo({ display: true, message });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "" });
    }, 5000);
  };
  const onSubmit = async (data) => {
    const { name, email, description, type, extra, file } = data;

    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        description,
        type,
        extra,
        file,
      };

      await emailjs.send(
        import.meta.env.VITE_REACT_APP_ENTRETEMPS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_ENTRETEMPS_CONTACT_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_REACT_APP_ENTRETEMPS_PUBLIC_KEY
      );
      toggleAlert("Form submission was successful!");
    } catch (e) {
      console.error(e);
      toggleAlert("Uh oh. Something went wrong. Please try again!");
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <>
      <h2>Say bonjour/hi</h2>
      <div className="contact-section"></div>{" "}
      <h3>Do you have a burning question?</h3>
      <p className="email-address">
        Give us a shout at{" "}
        <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
          bonjour.hi@entretemps.ca
        </a>
      </p>
      <h3 className="form-header">
        Want to submit your work for consideration?
      </h3>
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="submission-form"
        aria-describedby="form-description"
      >
        <p className="form-description" id="form-description">
          Please fill out this form with as much info as you can provide.
          <br></br>
          If it&apos;s a good fit, we&apos;ll be in touch!
        </p>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          placeholder="Name"
          required
        ></input>
        <input
          type="email"
          name="email"
          {...register("email", {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          placeholder="Email address"
          required
        ></input>
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}
        <select name="type" id="type-select" {...register("type")}>
          <option value="">
            Please let us know what you&apos;re submitting!
          </option>
          <option value="solo-show">Solo show</option>
          <option value="group-show">Group show</option>
          <option value="individual">Individual work</option>
          <option value="other">Other - describe below</option>
        </select>
        <label htmlFor="description">
          Tell us about your work (500 words max):
        </label>
        <textarea
          id="description"
          rows="10"
          {...register("description", {
            required: {
              value: true,
              message: "Please enter a description of your work",
            },
          })}
        ></textarea>
        <label htmlFor="extra">
          Anything else you&apos;d like us to check out?
        </label>
        <input
          id="extra"
          type="text"
          name="website"
          placeholder="Website, instagram, tiktok etc"
          {...register("extra")}
        ></input>
        <label htmlFor="file">Attach a few images of your work:</label>
        <input
          type="file"
          id="file"
          name="file"
          multiple
          accept="image/*,.pdf"
          {...register("file")}
        />{" "}
        <div className="submit-button-and-message">
          <button disabled={disabled} className="submit-button" type="submit">
            Submit
          </button>{" "}
          {alertInfo.display && (
            <div
              className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
              role="alert"
            >
              {alertInfo.message}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
