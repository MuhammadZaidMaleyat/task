import React from "react";
import EditIcon from '@material-ui/icons/Edit';

type editToBtn = { onclick: () => void };

const Editbtn = ({ onclick }: editToBtn) => {
  return (
    <>
      {/* <Button variant="outlined">Edit</Button> */}
      
      <EditIcon onClick={onclick}>Edit</EditIcon>
      
    </>
  );
};

export default Editbtn;
