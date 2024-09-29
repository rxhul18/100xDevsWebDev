#!/usr/bin/env node

const fs = require("fs");
const { program } = require("commander");
const chalk = require("chalk");
const Table = require("cli-table");

const TODO_FILE = "todo.json";

function readTodos() {
  try {
    const data = fs.readFileSync(TODO_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
}

function listTodos(todos) {
  if (todos.length === 0) {
    console.log(chalk.yellow("No todos found"));
  } else {
    const table = new Table({
      head: [chalk.cyan("ID"), chalk.cyan("Task"), chalk.cyan("Status")],
      colWidths: [10, 50, 20],
    });

    todos.forEach((todo) => {
      const status = todo.done ? chalk.green("Done") : chalk.red("Not Done");
      table.push([todo.id, todo.task, status]);
    });

    console.log(table.stringify());
  }
}

program
  .command("add <todo>")
  .description("Add a new todo")
  .action((todo) => {
    const todos = readTodos();

    if (todos.some((t) => t.task.toLowerCase() === todo.toLowerCase())) {
      console.log(chalk.red(`Todo ${todo} already exits`));
      return;
    }

    todos.push({ id: todos.length + 1, task: todo, done: false });
    writeTodos(todos);
    console.log(`Added todo: "${todo}"`);
    listTodos(todos);
  });

program
  .command("delete <id>")
  .description("Delete a todo by its ID")
  .action((id) => {
    let todos = readTodos();
    const intialLength = todos.length;

    todos = todos.filter((todo) => todo.id !== parseInt(id));
    if (todos.length === intialLength) {
      console.log(chalk.yellow(`Todo with ID: ${id} not found.`));
    } else {
      writeTodos(todos);
      console.log(chalk.red(`Deleted todo with ID: ${id}`));
      listTodos(todos);
    }
  });