import React from "react";
import styled from "styled-components";
import FileFormat from "../UploadPopup/FileFormat/FileFormat";
import Video from "../../Icons/video.svg";
import Gif from "../../Icons/gif.svg";
import Images from "../../Icons/image.svg";
import Upload from "../../Icons/upload.svg";
import X from "../../Icons/x.svg";





//Styled Components
export const UploadFileContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxContainer = styled.div`
  
  width: 700px;
  height: 500px;
  background: #fff;
  padding: 1rem 2rem;
   box-shadow : 0px 0px 20px rgba(0,0,0,0.2) ;
  h1 {
    color: #000;
    text-align: start;
    font-size: 1em;
    margin: 1rem 0;
    margin-bottom: 2rem;
  }

  p {
    font-size: 0.6em;
    text-align: start;
    margin: 1rem 0;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;
export const FlexContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
      width: 15px;
      margin: 1rem 0;
      margin-bottom: 2rem;
  }
  img:hover{
      cursor: pointer;
  }
  p{
      color: #7e7e7e;
  }
`;

export const UploadSpace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='15' ry='15' stroke='%23DB4C40FF' stroke-width='2' stroke-dasharray='20' stroke-dashoffset='10' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 15px;

  object {
    width: 30px;
    fill: #efefef;
  }

  h4 {
    font-size: 0.9em;
  }

  h5 {
    font-size: 0.8em;
    font-weight: 400;
    color: #8b1e3f;
    text-decoration: underline;
  }
  h5:hover{
      cursor: pointer;
      color: #DB4C40;
  }
`;

export const Button = styled.button`
color: white;
  font-weight: 600;
  background-color: #DB4C40;
  padding: 8px 20px;
  border-radius: 2px;
  border: transparent;
  &:hover{
      cursor: pointer;
      background-color: #b44339;
  }
`;

export const UploadFile = ({ showPopup, setShowPopup }) => {
  const items = [
    {
      id: "key1",
      icon: Images,
      name: "Images",
      formats: "PNG, JPG, GIF, in app-cropping",
    },
    {
      id: "key2",
      icon: Gif,
      name: "GIFs",
      formats: "800x600or 400x300",
    },
    {
      id: "key3",
      icon: Video,
      name: "Videos",
      formats: "MP4, 4:3, up to 24 seconds",
    },
  ];


  const closePopup = () =>{
      setShowPopup(false);
  };




  const Div = (
    <UploadFileContainer>
      <BoxContainer>
        <FlexContainer2>
        <h1>Upload File</h1>
        <img src={X}  onClick={closePopup}/>
        </FlexContainer2>
        <FlexContainer>
          {items.map((item) => (
            <FileFormat
              name={item.name}
              formats={item.formats}
              icon={item.icon}
            />
          ))}
        </FlexContainer>
        <UploadSpace>
          <div>
            <object type="image/svg+xml" data={Upload}></object>
            <h4>Drag & drop to upload</h4>
            <h5>or browse</h5>
          </div>
        </UploadSpace>
        <FlexContainer2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nunc.</p>
          <Button>Upload</Button>
        </FlexContainer2>
      </BoxContainer>
    </UploadFileContainer>
  );

  return <>{showPopup ? Div : null}</>;
};
