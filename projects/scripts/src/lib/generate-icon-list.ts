import * as fs from 'fs';
import * as path from 'path';

const jsonFilePath = path.resolve(__dirname, '..', '..', '..', 'kit', 'style', 'fonts', 'icons', 'krai-icons.json');

const rawData = fs.readFileSync(jsonFilePath, 'utf-8');
const icons = JSON.parse(rawData).selection;

const iconNames: string[] = icons.map((icon: { name: string }) => icon.name);

const iconNamesContent = `
import { IconTypes } from './icons.type';

export const iconList: IconTypes[] = [
  ${iconNames.map(name => `'${name}'`).join(',\n  ')}
];
`;

const outputPath = path.resolve(__dirname, '..', '..', '..', 'kit', 'icon', 'src', 'icon-list.ts');
fs.writeFileSync(outputPath, iconNamesContent.trim());

console.log('File icon-list.ts created!');
