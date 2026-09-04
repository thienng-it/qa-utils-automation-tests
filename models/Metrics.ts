/**
 * Performance and Quality Gate Metrics interfaces.
 */
export interface PerformanceBudget {
    maxTtfbMs: number;
    maxFcpMs: number;
    maxLcpMs: number;
    maxDomNodes: number;
    maxHeapDeltaMb: number;
}

export const DEFAULT_PERFORMANCE_BUDGET: PerformanceBudget = {
    maxTtfbMs: 800,
    maxFcpMs: 1500,
    maxLcpMs: 2500,
    maxDomNodes: 2500,
    maxHeapDeltaMb: 50,
};

export interface TestExecutionStats {
    passed: number;
    failed: number;
    skipped: number;
    total: number;
    durationMs?: number;
    timestamp?: string;
}
