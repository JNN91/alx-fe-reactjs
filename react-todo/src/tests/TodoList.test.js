import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const form = screen.getByTestId("add-form");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.submit(form);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("can toggle a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // Click to toggle
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteBtn = screen.getByTestId("delete-1");

    fireEvent.click(deleteBtn);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
