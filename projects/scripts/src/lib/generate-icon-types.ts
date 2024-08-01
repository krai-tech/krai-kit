import * as fs from 'fs';
import * as path from "path";

const jsonFilePath = path.resolve(__dirname, '..', '..', '..', 'kit', 'style', 'fonts', 'icons', 'krai-icons.json');

const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
const icons = JSON.parse(rawData).selection;

const iconNames: string[] = icons.map((icon: { name: string }) => icon.name);

const iconTypesContent = `
export type IconTypes =
  ${iconNames.map(name => `'${name}'`).join(' |\n  ')}
`;

const outputPath = path.resolve(__dirname, '..', '..', '..', 'kit', 'icon', 'src', 'icons.type.ts');
fs.writeFileSync(outputPath, iconTypesContent.trim());

console.log('File icons.type.ts created!');
