/**
 * Domain interface representing a tool in the KobeanQAUtils catalog.
 */
export interface Tool {
    id: string;
    name: string;
    route: string;
    expectedHeader: string;
    category: ToolCategory;
    description?: string;
    testTier: 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4';
}

export type ToolCategory =
    | 'Navigation'
    | 'Converters'
    | 'Generators'
    | 'API Testing'
    | 'AI Tools'
    | 'Testing Tools'
    | 'Utilities'
    | 'Developer'
    | 'Checklists'
    | 'Terms'
    | 'Guides'
    | 'Certification';
