import { Command, flags } from '@oclif/command';
import chalk from 'chalk';
import todoAPI from '../api/todoAPI';

export default class Add extends Command {
	static description = 'Add new todo task to the list';

	static args = [{ name: 'todo' }];
	static flags = {
		done: flags.boolean({ char: 'd' }),
	};

	async run() {
		const { args, flags } = this.parse(Add);

		const newTodo = args.todo;
		if (newTodo) {
			if (flags.done) {
				todoAPI.add(newTodo, true);
			} else {
				todoAPI.add(newTodo);
			}
			this.log(`${chalk.green('[Success]')} Added new todo: ${newTodo}`);
		} else {
			this.error(chalk.red('please specify the new todo to be added...'));
		}
	}
}

// const table = new Table({
// 	head: [
// 		chalk.blueBright('index'),
// 		chalk.blueBright('todo'),
// 		chalk.blueBright('status'),
// 	],
// });
