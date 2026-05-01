// ROUTES - hash-based routing of the QA Utils
export const ROUTES = {
    home: "#/",
    uuid: "#/uuid",
    base64: "#/base64",
    explore: "#/explore",
} as const;

// Navigation group names
export const NAV_GROUPS = [
    "Converters",
    "Generators",
    "API",
    "Tools",
    "Learn",
    "Palace",
] as const;

// Expected text
export const EXPECTED = {
    brandText: 'QA Utils',
    searchPlaceholder: 'Search tools',
} as const;

// Fixtures
export const BASE64_FIXTURES = {
    plainText: 'Hello, QA World!',
    encoded: 'SGVsbG8sIFFBIEdsb3ZlIQ==',
} as const;