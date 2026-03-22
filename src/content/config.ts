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

const toolkit = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    oneLiner: z.string(),
    tags: z.array(z.string()),
    easeOfUse: z.enum(['Beginner-friendly', 'Some setup needed', 'Takes practice']),
    access: z.string(),
    toolLink: z.string().url(),
    whatItDoes: z.string(),
    whoItsFor: z.string(),
    whatYouNeed: z.string(),
    accessBreakdown: z.string(),
    tryThisFirst: z.string(),
    dateAdded: z.string(),
  }),
});

export const collections = { challenges, toolkit };
