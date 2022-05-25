export default function Modal() {
  //1. variables
  //1.1 constants
  //time in between showing the modal 24hrs in milisecond
  const myTtl = 86400000;
  //1.2 local vars
  //Get from localstorage value for if modal has been displayed
  let signupModalDisplayed = getWithExpiry("signupClosedModalDisplayed");

  //Only execute rest of code if modal has not been displayed before
  if (signupModalDisplayed === null && typeof window !== "undefined") {
    //1.2 handles to document elements
    //handle for modal
    const modal = document.querySelector(".modal");
    //set property to display modal
    modal.style.display = "block";

    //handle for x-button
    const xModalClose = document.querySelector(".x-modal-close");
    //handle for signup button
    const buttonJoinUs = document.querySelector(".button-join-us");

    //2. add events
    //2.1 for x
    xModalClose.addEventListener("click", function () {
      closeDisplay(modal);
    });
    //2.2 for join button
    if (buttonJoinUs) {
      buttonJoinUs.addEventListener("click", function () {
        closeDisplay(modal);
      });
    }
  }

  //3. methods
  //for closing display
  function closeDisplay(el) {
    //first hide the modal
    el.style.display = "none";
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
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modalContainer">
        <span className="font_icons x-modal-close">&#x4d;</span>
        <div className="region-lg wrapper align-center">
          <h1>TEJ Fellowship Application</h1>
          <h1>for 2022 is now closed</h1>
          <div className="region-top-md">
            <div className="button-lg fire-button">
              WE WILL ANNOUNCE THE WINNERS SOON!
            </div>
          </div>
        </div>
      </div>
    </div>
    /* Modal ends */
  );
}
