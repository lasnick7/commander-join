// @ts-check
/* eslint-disable no-console */

import { program } from 'commander';
// импортируется готовая инстанция объекта program, 
// которая уже создана и настроена библиотекой commander

const join = (first, second, connector = '') => `${first}${connector}${second}`;
// создается функция join, которая соединяет в строку два значения и параметр между ними

program
  .name('string-util')
  .description('Инструмент для работы со строками')
  .version('1.0.0');
// справка

program.command('join')
  .description('Команда соединяет две строки в одну')
  .argument('<first>', 'первая строка')
  .argument('<second>', 'вторая строка')
  .option('-c, --connector <type>', 'соединительная строка', '')
  .action((first, second, options) => {

    // Ообъект options создается автоматически библиотекой 
    // сommander при обработке командной строки. 

    const result = join(first, second, options.connector); // доступ к значению опции connector

    // когда пользователь запускает программу с командой join, 
    // сommander анализирует переданные аргументы и опции и 
    // создает объект options, содержащий все переданные опции.

    console.log(result);
  });

program.parse();