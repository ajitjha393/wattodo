import { Command } from '@oclif/command';
import chalk from 'chalk';
import todoAPI from '../api/todoAPI';
import Table from 'cli-table';

export default class Add extends Command {
	static description = 'Lists all the todo tasks registered';

	async run() {
		const table = new Table({
			head: [
				chalk.blueBright('index'),
				chalk.blueBright('todo'),
				chalk.blueBright('status'),
			],
			// colWidths: [10, 50, 10],
		});

		const todos = todoAPI.list();
		todos.forEach((todo, i, _todos) => {
			const status = todo.done
				? chalk.green('done')
				: chalk.red('not done');

			table.push([i, todo.todo, status]);
		});

		this.log(table.toString());
	}
}
