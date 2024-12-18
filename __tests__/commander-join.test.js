// @ts-check

// import {
//     test, expect,
//   } from '@jest/globals';
  import cp from 'child_process';
  
  test.each(['and', '+'])('Connector: %s', (connector) => {
    const first = 'first';
    const second = 'second';
    const data = cp.execSync(`node commander-join.js join --connector ${connector} ${first} ${second}`, { encoding: 'utf-8' });
    expect(data.trim()).toBe(`${first}${connector}${second}`);
  });
  
