import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
async function setupTailwind(targetDir) {
    console.log("Setting up Tailwind CSS...");
    // Install Tailwind CSS and related packages
    execSync("npm install -D tailwindcss postcss autoprefixer", {
        stdio: "inherit",
    });
    execSync("npx tailwindcss init -p", { stdio: "inherit" });
    // Update Tailwind config file
    const tailwindConfigPath = path.join(targetDir, "tailwind.config.js");
    const tailwindConfig = await fs.readFile(tailwindConfigPath, "utf-8");
    const updatedTailwindConfig = tailwindConfig.replace(/content: \[\]/, `content: ['./src/**/*.{js,jsx,ts,tsx}']`);
    await fs.writeFile(tailwindConfigPath, updatedTailwindConfig);
    // Ensure that Tailwind directives are added to CSS
    const cssPath = path.join(targetDir, "src/index.css"); // Adjust if your CSS file is named differently
    const tailwindDirectives = `
@tailwind base;
@tailwind components;
@tailwind utilities;
`;
    await fs.writeFile(cssPath, tailwindDirectives.trim() + "\n"); // Append Tailwind directives to the CSS file
}
export default setupTailwind;
