import React from "react";
import SaveIcon from '@material-ui/icons/Save';

type saveToBtn = { onclick: () => void };

const Savebtn = ({ onclick }: saveToBtn) => {
  return (
    <>
      {/* <Button variant="outlined">Edit</Button> */}
      
      <SaveIcon onClick={onclick}>save</SaveIcon>
      
    </>
  );
};

export default Savebtn;