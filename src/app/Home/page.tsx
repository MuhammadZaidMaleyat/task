"use client";
import React, { useState } from "react";
import AddTodoBtn from "../_Components/AddTodoBtn";
import {
  Button,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TodoObject } from "../models/Todo";
import { v4 as uuid } from "uuid";
import Deletebtn from "../_Components/Deletebtn";
import Editbtn from "../_Components/Editbtn";
import Savebtn from "../_Components/Savebtn";

const EnterData: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoObject[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([{ id: uuid(), value: todo, done: false }, ...todos]);
      setTodo("");
    } else {
      alert("Please Enter Data");
    }
  };

  const handleEditing = (id: string) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setEditingId(id);
      setEditedValue(todoToEdit.value);
    }
  };

  const saveEditedTodo = () => {
    if (editedValue !== "") {
      setTodos(
        todos.map((todo) =>
          todo.id === editingId ? { ...todo, value: editedValue } : todo
        )
      );
      setEditingId(null);
      setEditedValue("");
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    alert("show");
  };

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <input
          type="text"
          placeholder="Enter New Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <AddTodoBtn onclick={() => addTodo()} />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {todos.length === 0 ? (
          <Typography sx={{ fontSize: "50px" }}>Page Not Found</Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todos.map((todo) => (
                  <TableRow key={todo.id}>
                    <TableCell>
                      {editingId === todo.id ? (
                        <input
                          type="text"
                          value={editedValue}
                          onChange={(e) => setEditedValue(e.target.value)}
                        />
                      ) : (
                        todo.value
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {editingId === todo.id ? (
                        <Savebtn onclick={saveEditedTodo} />
                      ) : (
                        <Editbtn onclick={() => handleEditing(todo.id)} />
                      )}
                      <Deletebtn onclick={() => deleteTodo(todo.id)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
};

export default EnterData;
