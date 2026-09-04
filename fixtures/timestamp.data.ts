import { dataTable } from 'codeceptjs';

/**
 * Unix Timestamp Epoch & Date Fixtures.
 */
export const timestampTable = new dataTable(['description', 'epochSec', 'expectedIsoUtc']);
timestampTable.add(['Unix Epoch Start', 0, '1970-01-01T00:00:00.000Z']);
timestampTable.add(['Y2K Boundary', 946684800, '2000-01-01T00:00:00.000Z']);
timestampTable.add(['Leap Day 2024', 1709164800, '2024-02-29T00:00:00.000Z']);
timestampTable.add(['Year 2038 32-bit Limit', 2147483647, '2038-01-19T03:14:07.000Z']);
