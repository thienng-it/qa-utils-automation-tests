import { dataTable } from 'codeceptjs';

/**
 * Standard RFC Test Vectors for Cryptographic Hashes.
 */
export const hashVectorsTable = new dataTable(['algorithm', 'input', 'expectedHash']);

// SHA-256
hashVectorsTable.add(['SHA-256', 'hello', '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824']);
hashVectorsTable.add(['SHA-256', 'qa-utils', 'db859cd403c3c80f430cb38960ffb65220a553b16c490c7f5fc51e1c4c6202ca']);

// SHA-1
hashVectorsTable.add(['SHA-1', 'hello', 'aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d']);
