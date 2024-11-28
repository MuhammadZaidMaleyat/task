import Button from "@mui/material/Button";

type addToBtn = { onclick: () => void };
// console.warn(onclick);

const AddTodoBtn = ({ onclick }: addToBtn) => {
  return (
    <>
      <Button onClick={onclick}>Add Todo</Button>
    </>
  );
};

export default AddTodoBtn;
