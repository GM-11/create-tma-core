
# Create Core TMA

**`create-core-tma`** is an NPM command-line utility that helps you quickly generate boilerplate code for developing a Telegram Mini App on the Core blockchain.

### Installation & Setup

To generate a new project, simply run the following command in your terminal:

```bash
npx create-core-tma
```

You'll be prompted to:

1. Enter your project name.
2. Choose whether or not to use TailwindCSS.

Once completed, a new project template will be created. You can open this project in your preferred code editor to begin development.

### Project Structure

The generated project includes the following components:

- A React app built with Vite.
- A `contracts` directory that holds all your Solidity files.
- A `hardhat.config.ts` file, which contains configurations for deploying your contracts on the Core Testnet.

To configure the project, create a `.env` file in the root directory and add your Core wallet's private key.

### Available Commands

You can use the following NPM scripts to manage and build your project:

1. **`npm run compile`**: Compiles all your smart contracts.
2. **`npm run dev`**: Launches your Telegram Mini App locally.
3. **`npm run build`**: Builds and deploys your smart contracts on the Core Testnet.
