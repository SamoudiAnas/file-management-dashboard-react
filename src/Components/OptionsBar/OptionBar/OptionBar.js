import React, { useState } from "react";
import Option from "../Options/Option";
import upload from "../../Icons/upload.svg";
import edit from "../../Icons/edit.svg";
import Delete from "../../Icons/delete.svg";
import refresh from "../../Icons/refresh.svg";
import { UploadFile } from "../../Popups/UploadPopup/UploadFile";
import "./OptionBar.css";

const OptionBar = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <div className="option-bar">
      <h3 className="options">Options</h3>
      <Option
        href="#"
        onClick={openPopup}
        optionName="Upload File"
        icon={upload}
      />
      <UploadFile showPopup={showPopup} setShowPopup={setShowPopup} />
      <Option href="#" optionName="Edit Files" icon={edit} />
      <Option href="#" optionName="Delete Files" icon={Delete} />
      <Option href="#" optionName="Update Files" icon={refresh} />
    </div>
  );
};

export default OptionBar;
