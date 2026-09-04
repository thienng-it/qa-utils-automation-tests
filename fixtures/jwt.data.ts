import { dataTable } from 'codeceptjs';

/**
 * JWT Test Vectors (Header, Payload, Signature).
 */
export const jwtTable = new dataTable(['description', 'token', 'expectedSub', 'isExpired']);

// Sample Valid Token: {"sub":"1234567890","name":"QA Engineer","iat":1516239022}
jwtTable.add([
    'Standard HS256 Token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlFBIEVuZ2luZWVyIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o',
    '1234567890',
    false,
]);

// Sample Expired Token: {"sub":"user-456","exp":1600000000} (Sept 2020)
jwtTable.add([
    'Expired Token',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyLTQ1NiIsImV4cCI6MTYwMDAwMDAwMH0.3e5g3n4wG9LhX6K7j4aN2p-4YpGqY12j4G0qK8v7Rz0',
    'user-456',
    true,
]);
