import fs from "fs-extra";
import path, { dirname } from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
export default async function setupTact(targetDir, projectName) {
    console.log("Setting up Tact contracts...");
    execSync("npm install @ton/sandbox @ton/test-utils @types/jest @types/node jest  @ton/ton @ton/core @ton/crypto --save-dev", { stdio: "inherit" });
    await fs.mkdir(path.join(targetDir, "contracts"));
    await fs.writeFile(path.join(targetDir, `contracts/${projectName}.tact`), "");
    const tactTemplatePath = path.join(dirname(fileURLToPath(import.meta.url)), "../fileTemplates/TactTemplate.tact");
    const tactPath = path.join(targetDir, `contracts/${projectName}.tact`);
    await fs.copy(tactTemplatePath, tactPath);
}
