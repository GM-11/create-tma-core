# Create Core TMA

**`create-core-tma`** is an NPM command-line utility that helps you quickly generate boilerplate code for developing a Telegram Mini App on the Core blockchain.

### Prerequisites

Before getting started, ensure you have the following software and tools installed:

- **Git**: Version 2.43.0 or higher
  [Download Git](https://git-scm.com/downloads)
- **Node.js**: Version 22.9.0 or higher
  [Download Node.js](https://nodejs.org/)
- **NPM**: Version 10.8.3 or higher (bundled with Node.js)
  [Learn more about NPM](https://www.npmjs.com/)
- **Hardhat**: Version 2.22.7
  [Install Hardhat](https://hardhat.org/getting-started/#installation)
- **MetaMask**: Web wallet extension with some Core testnet tokens to interact with Core blockchain
  [Download MetaMask](https://metamask.io/)

  [Get core testnet tokens](https://scan.test.btcs.network/faucet)
- **Telegram App**: Required to test your Telegram Mini App
  [Download Telegram](https://telegram.org/)
- **Code Editor**: Any modern code editor, such as [VS Code](https://code.visualstudio.com/) or [WebStorm](https://www.jetbrains.com/webstorm/).

### Installation & Setup

To generate a new project, run the following command in your terminal:

```bash
npx create-core-tma
```

You will be prompted to:

1. Enter your project name.
2. Choose whether or not to use TailwindCSS.

Once the process completes, a new project template will be created. Open the project in your preferred code editor to start development.

### Project Structure

The generated project includes:

- A React app built with Vite.
- A `contracts` directory containing all Solidity files.
- A `hardhat.config.ts` file with configurations for deploying contracts on the Core Testnet.

To configure the project, create a `.env` file in the root directory and add your Core wallet's private key.

### Registering Your Bot on Telegram

To use your Telegram Mini App, you'll need to register a bot on Telegram:

1. **Open the Telegram app** and search for **BotFather**.
2. Start a chat with BotFather and use the command `/newbot`.
3. Follow the instructions to name your bot and create a unique username for it.
4. After registration, BotFather will provide you with an API token. Keep this token secure; you'll need it to configure your bot in the project.

### Available Commands

The following NPM scripts are available for managing and building your project:

1. **`npm run compile`**: Compiles all your smart contracts.
2. **`npm run dev`**: Launches your Telegram Mini App locally.
3. **`npm run build`**: Builds and deploys your smart contracts on the Core Testnet.
