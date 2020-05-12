import { Command } from '@oclif/command';
import inquirer from 'inquirer';
import todoAPI from '../api/todoAPI';

export default class Interact extends Command {
	static description = 'Enter the interactive mode';

	async run() {
		const todoList = todoAPI.list();
		const choices = todoList;

		const prompt = await inquirer.prompt([
			{
				type: 'checkbox',
				message: 'Update todo',
				name: 'todos',
				choices: choices.map(todo => {
					return { name: todo.todo, checked: todo.done };
				}),
			},
		]);

		const finishedTodo = prompt.todos;
		todoList.forEach((todo, i, _) => {
			if (finishedTodo.indexOf(todo.todo) !== -1) {
				// the todo is in the select list
				todoAPI.done(i);
			} else {
				// the todo is not in the select list
				todoAPI.undone(i);
			}
		});
	}
}
