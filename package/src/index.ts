#!/usr/bin/env node

import { Command } from "commander";
import path, { dirname } from "path";
const program = new Command();
import prompts from "prompts";
import * as fs from "fs-extra";
import { exec, execSync } from "child_process";

import { fileURLToPath } from "url";

import setupTailwind from "../utils/setupTailwind.js";
import setupTact from "../utils/setupTact.js";
import setupSolidity from "../utils/setupSolidity.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

program
  .name("create-toncore-app")
  .description("Create a new toncore app")
  .argument("[project-name]", "Name of the new project")
  .action(async (projectName) => {
    if (!projectName) {
      const response = await prompts({
        type: "text",
        name: "name",
        message: "Project Name: ",
        validate: (name) => (name ? true : "Project name is required"),
      });
      projectName = response.name;
    }
    const targetDir = path.join(process.cwd(), projectName);

    if (await fs.exists(targetDir)) {
      console.log(`Error: Directory ${projectName} already exists.`);
      process.exit(1);
    }

    const templateDir = path.join(__dirname, "../../template");

    const { useTailwind } = await prompts({
      type: "confirm",
      name: "useTailwind",
      message: "Do you want to use Tailwind CSS?",
      initial: true,
    });

    const { generateSolidity } = await prompts({
      type: "confirm",
      name: "generateSolidity",
      message: "Do you want to generate Solidity smart contract files?",
      initial: true,
    });

    try {
      console.log("Generating project");
      await fs.copy(templateDir, targetDir);
      console.log("Project generated successfully");

      process.chdir(targetDir);
      if (useTailwind) {
        await setupTailwind(targetDir);
      }

      if (generateSolidity) {
        await setupSolidity(targetDir, projectName);
      }

      console.log("\nSetup complete\n");
      console.log("Start your project with:");
      console.log(`cd ${projectName}`);
      console.log("npm run dev");
    } catch (error) {
      console.log(`Error: ${error}`);
      process.exit(1);
    }
  });

program.parse();
