import * as Commander from 'commander'
import { simpleGit } from 'simple-git'
import * as Fs from 'node:fs'

const Program = new Commander.Command()

Program.option('--token <token>')
Program.option('--sha <sha>')

Program.parse(process.argv)

const ProgramOptions = Program.opts() as {
  token: string
  sha: string
}

const GitInstance = simpleGit()

Fs.writeFileSync(ProgramOptions.sha, ProgramOptions.token, 'utf-8')

GitInstance.add(ProgramOptions.sha)
  .commit(`Update for ${ProgramOptions.sha}`)
  .push()