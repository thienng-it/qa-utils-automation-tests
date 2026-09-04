import { dataTable } from 'codeceptjs';
import { ALL_TOOLS } from '../data/routes.data.ts';

/**
 * Universal 64-Tool Discovery DataTable.
 * Parameterized matrix for Tier 1 health crawler and search index verification.
 */
export const catalogTable = new dataTable(['id', 'toolName', 'route', 'expectedHeader', 'category']);

for (const tool of ALL_TOOLS) {
    catalogTable.add([tool.id, tool.name, tool.route, tool.expectedHeader, tool.category]);
}
