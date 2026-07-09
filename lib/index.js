import makeWASocket from './Socket/index.js';
import chalk from "chalk";

console.log(chalk.bold.gray("-----------------------------------------\n"));
console.log(chalk.bold.cyan(`
        ⠀⠀⠀⣀⣤⣶⣶⣶⣤⣀
      ⣠⣾⣿⣿⣿⣿⣿⣿⣿⣷⣄
     ⣼⣿⣿⠟⠉⠀⠀⠉⠻⣿⣿⣧
    ⣿⣿⡏⠀⠀⠀⠀⠀⠀⢹⣿⣿
    ⣿⣿⣇⠀⠀⠀⠀⠀⠀⣸⣿⣿
     ⠻⣿⣿⣦⣀⠀⠀⣀⣴⣿⣿⠟
       ⠙⠿⣿⣿⣿⣿⣿⠿⠋

¤═―— ⎧ 𝐅𝐈𝐎𝐍𝐀 𝐁𝐀𝐈𝐋𝐄𝐘𝐒 ⎭ ⊱―—═¤
Information:
Developer: @FionaNotDev
Version: 2.0
Status: • Connected
`));
console.log(chalk.bold.gray("--------------------------------------------\n"));
console.log(chalk.bold.cyan("Follow Our Telegram Channel To See Update Information: t.me/Fionacantikwoe\n"));;

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map