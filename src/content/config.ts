import { defineCollection, z } from 'astro:content';

const challenges = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    type: z.enum(['challenge', 'resource', 'nudge']),
    complexity: z.enum(['Beginner', 'Moderate', 'Advanced']),
    quickWin: z.string().optional(),
    access: z.string(),
  }),
});

export const collections = { challenges };
