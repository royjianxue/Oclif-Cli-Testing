import {Command, Flags, CliUx} from '@oclif/core'
import {get} from 'node:http'

export default class Humans extends Command {
  static description = 'Get the number of people who are currently in space'

  static examples = [
    '$ space-cli humans\nNumber of humans currently in space: 7',
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    table: Flags.boolean({char: 't', description: 'display who is in space and where with a table'}),
    from: Flags.string({char: 'f', description: 'enter your name', required: true})
  }

  public async run(): Promise<void> {

    const {flags} = await this.parse(Humans)
   
    get('http://api.open-notify.org/astros.json', res => {

      res.on('data', d => {
        const details = JSON.parse(d);
        this.log(`Number of humans currently in space: ${details.number}!`);
        if (flags.table) {
          CliUx.ux.table(details.people, {name: {}, craft: {}})
        }
      });
    }).on('error', (e) => {
      this.error(`Got error: ${e.message}`);
    });
  }
}