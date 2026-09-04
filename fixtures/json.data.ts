import { dataTable } from 'codeceptjs';

/**
 * Valid JSON Formatter Payloads.
 */
export const validJsonTable = new dataTable(['description', 'rawJson', 'expectedKey']);
validJsonTable.add([
    'Single line object',
    '{"name":"QAUtils","type":"Automation","version":4.1,"active":true}',
    '"name": "QAUtils"',
]);
validJsonTable.add([
    'Nested object with array',
    '{"project":{"id":101,"tags":["ai","data-driven","e2e"]},"author":"SDET"}',
    '"tags": [',
]);

/**
 * Malformed JSON Syntax Payloads.
 */
export const invalidJsonTable = new dataTable(['description', 'malformedPayload']);
invalidJsonTable.add(['Trailing comma in object', '{"name":"QA", "broken": true,}']);
invalidJsonTable.add(['Unquoted keys', '{name: "QA", broken: true}']);
invalidJsonTable.add(['Unclosed bracket', '{"items": [1, 2, 3}']);
