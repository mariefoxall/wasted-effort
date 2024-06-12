import "./Shop.css";
import Item from "./Item";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { allAuctionitems } from "./AuctionItems";
import ciggyChip from "../assets/ciggy-chip.jpg";

function Shop() {
  const [disabled, setDisabled] = useState(false);
  const [bids, setBids] = useState({});
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
    const { name, email, phone } = data;

    try {
      setDisabled(true);
      const templateParams = {
        name,
        email,
        phone,
        bids: bids,
      };

      await emailjs.send(
        import.meta.env.VITE_REACT_APP_ENTRETEMPS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_ENTRETEMPS_BID_TEMPLATE_ID,
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    const currentItem = allAuctionitems.find((item) => item.itemId === name);
    const previousBids = { ...bids };
    console.warn("value", value);
    if (
      value > currentItem.currentBid + currentItem.incrementValue &&
      value > 0
    ) {
      previousBids[name] = value;
      setBids(previousBids);
    } else if (!value || value === "0") {
      delete previousBids[name];
      console.warn("previousBids", previousBids);
      setBids(previousBids);
    }
  };

  function isEmpty(obj) {
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }

    return true;
  }

  return (
    <>
      <h2>Silent Auction</h2>
      <p className="form-description" id="form-description">
        To place bids on silent auction items, please fill out your contact
        information and update the bid on any item you would like to win!
        Pressing submit will send us all of your bids and your info :) If
        you&apos;d like to retract a bid, please email us at{" "}
        <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
          bonjour.hi@entretemps.ca
        </a>
      </p>
      <div className="prize-section">
        <p className="prize-info">
          Every bid you place is an entry to win this beaded ciggy & porcelain
          chip duo!
        </p>
        <img
          className="prize-image"
          src={ciggyChip}
          alt="beaded cigarette and porcelain potato chip"
        />
      </div>
      <h2>Items for auction:</h2>
      <form
        id="bid-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="submission-form"
        aria-describedby="form-description"
      >
        {allAuctionitems.map((item) => {
          return (
            <Item key={item.itemId} item={item} handleChange={handleChange} />
          );
        })}

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
        <input
          type="tel"
          name="phone"
          {...register("phone", {
            required: true,
          })}
          placeholder="Phone number"
          required
        ></input>
        {!isEmpty(bids) && (
          <div className="bid-summary">
            <h3>Your bids: </h3>
            {Object.entries(bids).map((bidArray) => {
              const matchingItem = allAuctionitems.find(
                (item) => item.itemId === bidArray[0]
              );
              return (
                <p key={bidArray[0]}>
                  {matchingItem?.itemName}: ${bidArray[1]}
                </p>
              );
            })}
          </div>
        )}
        <div className="submit-button-and-message">
          <button
            disabled={disabled}
            className="bid-submit-button"
            type="submit"
          >
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

export default Shop;
