import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

type deleteToBtn = { onclick: () => void };

const Deletebtn = ({ onclick }: deleteToBtn) => {
  return (
    <>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete todo
      </Button> */}
      {/* <Button onClick={onclick}>Delete</Button> */}
      <DeleteIcon onClick={onclick}>Edit</DeleteIcon>
    </>
  );
};

export default Deletebtn;
