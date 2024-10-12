import fs from "fs-extra";
import path, { dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
export default async function setupSolidity(targetDir, projectName) {
    console.log("Setting up Solidity contracts...");
    try {
        execSync("npm install hardhat @nomicfoundation/hardhat-toolbox --save-dev", { stdio: "ignore" });
        console.log("Setup Hardhat configuration for solidity complete");
    }
    catch (error) {
        console.error("Failed to install dependencies:", error);
        process.exit(1);
    }
    await fs.mkdir(path.join(targetDir, "contracts"));
    await fs.writeFile(path.join(targetDir, `contracts/template.sol`), "");
    const solidityTemplatePath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/template.sol");
    const solidityPath = path.join(targetDir, `contracts/template.sol`);
    await fs.copy(solidityTemplatePath, solidityPath);
    const hardhatConfigPath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/hardhatConfig.cts");
    fs.writeFile(path.join(targetDir, "hardhat.config.cts"), "");
    await fs.copy(hardhatConfigPath, path.join(targetDir, "hardhat.config.cts"));
    await fs.mkdir(path.join(targetDir, "scripts"));
    await fs.writeFile(path.join(targetDir, "scripts/deploy.ts"), "");
    const deployTsPath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/deploy.ts");
    await fs.copy(deployTsPath, path.join(targetDir, "scripts/deploy.ts"));
    const packageJsonPath = path.join(targetDir, "package.json");
    try {
        const packageJson = await fs.readJson(packageJsonPath);
        packageJson.scripts = {
            ...packageJson.scripts,
            compile: "npx hardhat compile",
            build: "npx hardhat ignition deploy ./scripts/deploy.ts --network core_testnet",
        };
        await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
    }
    catch (error) { }
}
