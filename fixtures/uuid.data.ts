import { dataTable } from 'codeceptjs';

export const UUID_V4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const UUID_V1_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * UUID Quantity & Version Matrix.
 */
export const uuidQuantityTable = new dataTable(['version', 'quantity']);
uuidQuantityTable.add(['v4', 1]);
uuidQuantityTable.add(['v4', 5]);
uuidQuantityTable.add(['v4', 20]);
uuidQuantityTable.add(['v1', 1]);
uuidQuantityTable.add(['v1', 10]);
