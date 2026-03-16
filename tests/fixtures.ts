import { test as base } from '@playwright/test';
import { API_URL } from './config';

export { expect } from '@playwright/test';
export { API_URL };

export const test = base.extend<{ baseURL: string }>({
    baseURL: async ({}, use) => {
        await use(process.env.BASE_URL ?? 'http://localhost:5173');
    },
});
