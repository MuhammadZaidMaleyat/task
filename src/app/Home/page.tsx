"use client";
import React from "react";
import { useState } from "react";
import AddTodoBtn from "../_Components/AddTodoBtn";
import ShowTaskBtn from "../_Components/ShowTaskBtn";
import { Button, Box, Typography } from "@mui/material";
import { TodoObject } from "../models/Todo";
import { v4 as uuid } from "uuid";

const EnterData: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodes] = useState<TodoObject[]>([]);

  const addTodo = () => {
    setTodes([{ id: uuid(), value: todo, done: false }, ...todos]);
    setTodo("");
  };
  const markTodoDone = (id: string) => {
    setTodes(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter New Todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />

      <AddTodoBtn onclick={() => addTodo()} />

      <ul>
        {todos.map((todo) => (
          <Box
            sx={{
              color: "black",
              listStyle: "none",
              cursor: "pointer",
              //   textDecoration: "line-through",
            }}
            // className={`${todo.done ? "line-through" : "no-underline"}`}
          >
            <li
              onClick={() => markTodoDone(todo.id)}
              style={{
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.value}
            </li>
          </Box>
        ))}
      </ul>
    </>
  );
};

export default EnterData;
