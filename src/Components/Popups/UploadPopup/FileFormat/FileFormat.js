import styled from "styled-components";

export const FileFormatBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FileImage = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  
  background-color: #DB4C40;
  margin-right:10px;
  border-radius: 50%;

  img{
      width: 100%;
  }
`;
export const FileName = styled.h3`
  color: #141414;
  text-align: start;
  font-weight: 400;
  font-size: 0.6em;
`;
export const Formats = styled.h4`
  color: #bbb;
  text-align: start;
  font-weight: 400;
  font-size: 0.6em;
  text-overflow: ellipsis;
`;

const FileFormat = (props) => {
  return (
    <FileFormatBox>
      <FileImage>
          <img  src={props.icon} />
      </FileImage>
      <div>
        <FileName>{props.name}</FileName>
        <Formats>{props.formats}</Formats>
      </div>
    </FileFormatBox>
  );
};

export default FileFormat;
