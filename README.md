# Panda Parken Landing Page
The main user entry point for [pandaparken.at](pandaparken.at). Built with React & Next.js.
## Editor Setup
The recommended editor to use for the project is [Visual Studio Code](https://code.visualstudio.com/).  
You should use these extensions to make your life easier:
- [ESLint](vscode:extension/dbaeumer.vscode-eslint)
- [Better Comments](vscode:extension/aaron-bond.better-comments)
- [GitLens](vscode:extension/eamodio.gitlens)

You should make ESLint your default formatter for this project - it's already set up in the `settings.json`, just take care not to override any settings.

## Running the Project
Open a terminal window and run `npm install`.  
When the command finishes simply run `npm run dev`, and the project will be started at `http://localhost:3000` by default.

## Collab Conventions
Open new branches for each feature, and follow these conventions for naming your commits: 
- [CommitLint](https://commitlint.js.org/#/concepts-commit-conventions)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## Coding Conventions
Follow the usual React programming conventions. Most are enforced by ESLint in this project, so just follow any rules that the ESLint extension highlights (or run the lint separately with `npm run lint` if you don't like using Visual Studio Code).  
Merge requests that fail the ESLint or CommitLint checks won't be accepted.