import { dataTable } from 'codeceptjs';

/**
 * Valid Base64 Encoding/Decoding Test Matrix.
 */
export const validBase64Table = new dataTable(['description', 'plain', 'encoded']);
validBase64Table.add(['Standard ASCII Greeting', 'Hello, QA World!', 'SGVsbG8sIFFBIFdvcmxkIQ==']);
validBase64Table.add(['Framework name', 'CodeceptJS 4.1', 'Q29kZWNlcHRKUyA0LjE=']);
validBase64Table.add(['Numbers & Symbols', '12345!@#$%^&*()', 'MTIzNDUhQCMkJV4mKigp']);
validBase64Table.add(['Unicode & Emoji', 'Quality 🛸 Assurance', 'UXVhbGl0eSDwn5efIEFzc3VyYW5jZQ==']);
validBase64Table.add(['Multilingual CJK', '自动化测试工程师', '6Ieq5Yqo5YyW5rWL6K+V5bel56iL5biI']);
validBase64Table.add(['Vietnamese Accents', 'Kiểm thử chất lượng phần mềm', 'S2nhu4dtIHRo4butIGNo4bqldCBsxrDhu6NuZyBwaOG6p24gbeG7gW0=']);

/**
 * Invalid Base64 Decoding Test Matrix.
 */
export const invalidBase64Table = new dataTable(['description', 'corruptedInput', 'expectedError']);
invalidBase64Table.add(['Invalid padding length', 'SGVsbG8===', 'Failed to decode']);
invalidBase64Table.add(['Illegal characters', '!!!@@@###$$$', 'Failed to decode']);
invalidBase64Table.add(['Odd length truncated', 'SGVsb', 'Failed to decode']);
