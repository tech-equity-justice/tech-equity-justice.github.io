import { useState, useEffect } from "react";

export default function Modal() {
  const [modalVisibility, setModalVisibility] = useState("none");

  //show modal or not
  const showModal = false;

  //1. variables
  //1.1 constants
  //time in between showing the modal 24hrs in milisecond
  const myTtl = 86400000;

  useEffect(
    () => {
      //only run this logic if showModal is true
      if (showModal) {
        //1.2 local vars
        //Get from localstorage value for if modal has been displayed
        let signupModalDisplayed = getWithExpiry("signupClosedModalDisplayed");

        //Only execute rest of code if modal has not been displayed before
        if (signupModalDisplayed === null && typeof window !== "undefined") {
          //set property to display modal
          setModalVisibility("block");
        }
      }
    },
    // Run only after first mount
    [showModal]
  );

  //3. methods
  //for closing display
  function closeDisplay() {
    //first hide the modal
    setModalVisibility("none");
    //then set localstorage for value of signupModalDisplayed to true with expiry time
    setWithExpiry("signupClosedModalDisplayed", true, myTtl);
  }

  //for setting time expiry
  function setWithExpiry(key, value, ttl) {
    const now = new Date();

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  //for getting time expiry
  function getWithExpiry(key) {
    let itemStr;
    if (typeof window !== "undefined") {
      itemStr = localStorage.getItem(key);
      // if the item doesn't exist, return null
    }
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  return (
    /* Modal */
    <div className="modal" style={{ display: modalVisibility }}>
      <div className="modal-background"></div>
      <div className="modalContainer">
        <span className="font_icons x-modal-close" onClick={closeDisplay}>
          &#x4d;
        </span>
        <div className="region-lg wrapper align-center">
          <h1>Congratulations to</h1>
          <h1>the 2023 TEJ Fellows</h1>
          <div className="region-top-md">
            <a
              href="#fellows-current"
              className="button-lg fire-button display-block display-inline-sm"
              id="modal-button"
              onClick={closeDisplay}
            >
              MEET THE NEW CLASS
            </a>
          </div>
        </div>
      </div>
    </div>
    /* Modal ends */
  );
}
