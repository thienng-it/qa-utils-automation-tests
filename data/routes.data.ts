import { Tool } from '../models/Tool.ts';

/**
 * Complete canonical registry of all 64 tools in KobeanQAUtils.
 */
export const ALL_TOOLS: Tool[] = [
    // 1. Navigation & Portals
    { id: 'home', name: 'Home', route: '#/', expectedHeader: 'KobeanQAUtils', category: 'Navigation', testTier: 'Tier 1' },
    { id: 'palace', name: 'QA Palace', route: '#/palace', expectedHeader: 'QA Palace', category: 'Navigation', testTier: 'Tier 1' },
    { id: 'my-palace', name: 'My Palace', route: '#/my-palace', expectedHeader: 'My Palace', category: 'Navigation', testTier: 'Tier 1' },

    // 2. Converters & Formatters
    { id: 'base64', name: 'Base64 Encode/Decode', route: '#/base64', expectedHeader: 'Base64 Encode / Decode', category: 'Converters', testTier: 'Tier 2' },
    { id: 'json-formatter', name: 'JSON Formatter', route: '#/jsonFormatter', expectedHeader: 'JSON Formatter', category: 'Converters', testTier: 'Tier 2' },
    { id: 'jwt-debugger', name: 'JWT Debugger', route: '#/jwtDebugger', expectedHeader: 'JWT Debugger', category: 'Converters', testTier: 'Tier 2' },
    { id: 'timestamp', name: 'Unix Timestamp Converter', route: '#/timestamp', expectedHeader: 'Unix Timestamp Converter', category: 'Converters', testTier: 'Tier 2' },
    { id: 'color-converter', name: 'Color Converter', route: '#/color-converter', expectedHeader: 'Color Converter', category: 'Converters', testTier: 'Tier 2' },
    { id: 'json-visualizer', name: 'JSON Visualizer', route: '#/json-visualizer', expectedHeader: 'JSON Visualizer', category: 'Converters', testTier: 'Tier 1' },
    { id: 'sql-generator', name: 'SQL Command Generator', route: '#/sql-generator', expectedHeader: 'SQL Command Generator', category: 'Converters', testTier: 'Tier 1' },
    { id: 'html-renderer', name: 'HTML Renderer', route: '#/html-renderer', expectedHeader: 'HTML Renderer', category: 'Converters', testTier: 'Tier 1' },
    { id: 'media-converter', name: 'Media Converter', route: '#/media-converter', expectedHeader: 'Media Converter', category: 'Converters', testTier: 'Tier 1' },
    { id: 'markdown-to-confluence', name: 'Markdown to Confluence', route: '#/markdown-to-confluence', expectedHeader: 'Markdown to Confluence Wiki', category: 'Converters', testTier: 'Tier 1' },
    { id: 'image-editor', name: 'Image Editor', route: '#/image-editor', expectedHeader: 'Image Editor', category: 'Converters', testTier: 'Tier 1' },

    // 3. Generators
    { id: 'uuid', name: 'UUID Generator', route: '#/uuid', expectedHeader: 'UUID Generator', category: 'Generators', testTier: 'Tier 2' },
    { id: 'hash', name: 'Hash Generator', route: '#/hash', expectedHeader: 'Hash Generator', category: 'Generators', testTier: 'Tier 2' },
    { id: 'password', name: 'Password Generator', route: '#/password', expectedHeader: 'Password Generator', category: 'Generators', testTier: 'Tier 2' },
    { id: 'otp', name: 'OTP Generator', route: '#/otp', expectedHeader: 'OTP Generator', category: 'Generators', testTier: 'Tier 2' },
    { id: 'character-counter', name: 'Character Counter', route: '#/character-counter', expectedHeader: 'Character Counter', category: 'Generators', testTier: 'Tier 1' },
    { id: 'lorem-ipsum', name: 'Lorem Ipsum Generator', route: '#/lorem-ipsum', expectedHeader: 'Lorem Ipsum Generator', category: 'Generators', testTier: 'Tier 1' },
    { id: 'jira-comment', name: 'JIRA Comment Generator', route: '#/jiraComment', expectedHeader: 'JIRA Comment Generator', category: 'Generators', testTier: 'Tier 1' },
    { id: 'qr-code', name: 'QR Code Generator', route: '#/qr-code', expectedHeader: 'QR Code Generator', category: 'Generators', testTier: 'Tier 1' },
    { id: 'dummy-data', name: 'Dummy Data Generator', route: '#/dummy-data', expectedHeader: 'Dummy Data Generator', category: 'Generators', testTier: 'Tier 1' },
    { id: 'htpasswd', name: 'HTPasswd Generator', route: '#/htpasswd', expectedHeader: 'HTPasswd Generator', category: 'Generators', testTier: 'Tier 1' },
    { id: 'test-file-generator', name: 'Test File Generator', route: '#/test-file-generator', expectedHeader: 'Test File Generator', category: 'Generators', testTier: 'Tier 1' },
    { id: 'github-pr-generator', name: 'GitHub PR Script Generator', route: '#/github-pr-generator', expectedHeader: 'GitHub PR Script Generator', category: 'Generators', testTier: 'Tier 1' },

    // 4. API Testing Clients
    { id: 'rest-client', name: 'REST Client', route: '#/rest-client', expectedHeader: 'REST Client', category: 'API Testing', testTier: 'Tier 1' },
    { id: 'websocket-client', name: 'WebSocket Client', route: '#/websocket-client', expectedHeader: 'WebSocket Client', category: 'API Testing', testTier: 'Tier 1' },
    { id: 'grpc-client', name: 'gRPC Client', route: '#/grpc-client', expectedHeader: 'gRPC Client', category: 'API Testing', testTier: 'Tier 1' },
    { id: 'graphql-client', name: 'GraphQL Client', route: '#/graphql-client', expectedHeader: 'GraphQL Client', category: 'API Testing', testTier: 'Tier 1' },
    { id: 'collection-manager', name: 'Collection Manager', route: '#/collection-manager', expectedHeader: 'Collection Manager', category: 'API Testing', testTier: 'Tier 1' },
    { id: 'collection-visualizer', name: 'Collection Visualizer', route: '#/collection-visualizer', expectedHeader: 'Collection Visualizer', category: 'API Testing', testTier: 'Tier 1' },

    // 5. AI Tools
    { id: 'kobean', name: 'Kobean Assistant', route: '#/kobean', expectedHeader: 'Kobean Assistant', category: 'AI Tools', testTier: 'Tier 1' },
    { id: 'prompt-enhancer', name: 'Prompt Enhancer', route: '#/prompt-enhancer', expectedHeader: 'Prompt Enhancer', category: 'AI Tools', testTier: 'Tier 1' },
    { id: 'json-prompt-builder', name: 'JSON Prompt Builder', route: '#/json-prompt-builder', expectedHeader: 'JSON Prompt Builder', category: 'AI Tools', testTier: 'Tier 1' },
    { id: 'agent', name: 'Agent Mode', route: '#/agent', expectedHeader: 'Agent Mode', category: 'AI Tools', testTier: 'Tier 1' },
    { id: 'agent-manager', name: 'Agent Manager', route: '#/agent-manager', expectedHeader: 'Agent Orchestration', category: 'AI Tools', testTier: 'Tier 1' },

    // 6. Testing Tools & Diagnostics
    { id: 'website-scanner', name: 'Website Scanner', route: '#/website-scanner', expectedHeader: 'Website Scanner', category: 'Testing Tools', testTier: 'Tier 1' },
    { id: 'ai-website-tester', name: 'AI Website Tester', route: '#/ai-website-tester', expectedHeader: 'AI Website Tester', category: 'Testing Tools', testTier: 'Tier 1' },
    { id: 'file-comparator', name: 'File Comparator', route: '#/file-comparator', expectedHeader: 'File Comparator', category: 'Testing Tools', testTier: 'Tier 1' },
    { id: 'coverage-palace', name: 'Coverage Palace', route: '#/coverage-palace', expectedHeader: 'Coverage Palace', category: 'Testing Tools', testTier: 'Tier 1' },

    // 7. Utilities
    { id: 'file-processor', name: 'File Processor', route: '#/file-processor', expectedHeader: 'File Processor', category: 'Utilities', testTier: 'Tier 1' },

    // 8. Developer & DevOps
    { id: 'encryption', name: 'Encryption/Decryption', route: '#/encryption', expectedHeader: 'Encryption / Decryption Tool', category: 'Developer', testTier: 'Tier 1' },
    { id: 'playwright2codecept', name: 'Playwright to CodeceptJS', route: '#/playwright2codecept', expectedHeader: 'Test Automation Code Converter', category: 'Developer', testTier: 'Tier 1' },
    { id: 'sequence-diagram', name: 'Sequence Diagram Generator', route: '#/sequence-diagram', expectedHeader: 'Sequence Diagram Generator', category: 'Developer', testTier: 'Tier 1' },
    { id: 'workflow-generator', name: 'CI/CD Workflow Generator', route: '#/workflow-generator', expectedHeader: 'CI/CD Workflow Generator', category: 'Developer', testTier: 'Tier 1' },
    { id: 'kanban', name: 'Kanban Board', route: '#/kanban', expectedHeader: 'Kanban Board', category: 'Developer', testTier: 'Tier 1' },
    { id: 'log-collector', name: 'Log Collector', route: '#/log-collector', expectedHeader: 'Log Collector', category: 'Developer', testTier: 'Tier 1' },
    { id: 'command-book', name: 'Command Book', route: '#/command-book', expectedHeader: 'Command Book', category: 'Developer', testTier: 'Tier 1' },

    // 9. Checklists
    { id: 'web-testing-checklist', name: 'Web Testing Checklist', route: '#/web-testing-checklist', expectedHeader: 'Web Testing Checklist', category: 'Checklists', testTier: 'Tier 1' },
    { id: 'api-testing-checklist', name: 'API Testing Checklist', route: '#/api-testing-checklist', expectedHeader: 'API Testing Checklist', category: 'Checklists', testTier: 'Tier 1' },
    { id: 'mobile-testing-checklist', name: 'Mobile Testing Checklist', route: '#/mobile-testing-checklist', expectedHeader: 'Mobile Testing Checklist', category: 'Checklists', testTier: 'Tier 1' },

    // 10. Terms
    { id: 'ivr', name: 'Interactive Voice Response', route: '#/ivr', expectedHeader: 'Interactive Voice Response', category: 'Terms', testTier: 'Tier 1' },
    { id: 'blf', name: 'Busy Lamp Field', route: '#/blf', expectedHeader: 'Busy Lamp Field', category: 'Terms', testTier: 'Tier 1' },
    { id: 'sip', name: 'Session Initiation Protocol', route: '#/sip', expectedHeader: 'Session Initiation Protocol', category: 'Terms', testTier: 'Tier 1' },

    // 11. Guides
    { id: 'ai-instructions', name: 'AI Instructions Guide', route: '#/ai-instructions', expectedHeader: 'AI Instructions Guide', category: 'Guides', testTier: 'Tier 1' },
    { id: 'codeceptjs-guide', name: 'Testing Cheat Sheet', route: '#/codeceptjs', expectedHeader: 'Testing Cheat Sheet', category: 'Guides', testTier: 'Tier 1' },
    { id: 'cicd-infographic', name: 'CI/CD Infographic', route: '#/cicd-infographic', expectedHeader: 'CI/CD Pipeline Infographic', category: 'Guides', testTier: 'Tier 1' },
    { id: 'ai-agents-infographic', name: 'AI Agents Infographic', route: '#/ai-agents-infographic', expectedHeader: 'AI Agents & MCP Infographic', category: 'Guides', testTier: 'Tier 1' },
    { id: 'local-llm-mac-tips', name: 'Local LLM Mac Tips', route: '#/local-llm-mac-tips', expectedHeader: 'Local LLM on Mac', category: 'Guides', testTier: 'Tier 1' },
    { id: 'test-frameworks-comparison', name: 'Test Frameworks Comparison', route: '#/test-frameworks-comparison', expectedHeader: 'Test Automation Frameworks Comparison', category: 'Guides', testTier: 'Tier 1' },
    { id: 'api-types-guide', name: 'API Types Guide', route: '#/api-types-guide', expectedHeader: 'API Types', category: 'Guides', testTier: 'Tier 1' },

    // 12. Certification & Learning
    { id: 'ctfl', name: 'CTFL v4 Practice Exams', route: '#/ctfl', expectedHeader: 'CTFL v4', category: 'Certification', testTier: 'Tier 1' },
    { id: 'flashcards', name: 'Flashcards', route: '#/flashcards', expectedHeader: 'Flashcards', category: 'Certification', testTier: 'Tier 1' },
];
