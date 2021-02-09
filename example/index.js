import { HashTable } from "../hash-table.js";

const ht = new HashTable({ size: 13 });

console.log(ht.dump);
ht.setElement("LOW_COLLISION", "IS_VERY_COOL");
console.log(ht.getElement("LOW_COLLISION"));
console.table(ht.dump);

/* 
┌─────────┬─────────────────────────────────────┐
│ (index) │                  0                  │
├─────────┼─────────────────────────────────────┤
│   10    │ [ 'LOW_COLLISION', 'IS_VERY_COOL' ] │
└─────────┴─────────────────────────────────────┘
*/
