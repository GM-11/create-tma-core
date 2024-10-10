import fs from "fs-extra";
import path, { dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
export default async function setupSolidity(targetDir, projectName) {
    console.log("Setting up Solidity contracts...");
    try {
        execSync("npm install hardhat @nomicfoundation/hardhat-toolbox --save-dev", { stdio: "inherit" });
        console.log("Setup Hardhat configuration for solidity complete");
    }
    catch (error) {
        console.error("Failed to install dependencies:", error);
        process.exit(1);
    }
    await fs.mkdir(path.join(targetDir, "solidityContracts"));
    await fs.writeFile(path.join(targetDir, `solidityContracts/${projectName}.sol`), "");
    const solidityTemplatePath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/SolidityTemplate.sol");
    const solidityPath = path.join(targetDir, `solidityContracts/${projectName}.sol`);
    await fs.copy(solidityTemplatePath, solidityPath);
    const hardhatConfigPath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/hardhatConfig.ts");
    fs.writeFile(path.join(targetDir, "hardhat.config.ts"), "");
    await fs.copy(hardhatConfigPath, path.join(targetDir, "hardhat.config.ts"));
}
