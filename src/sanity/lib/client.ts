import { createClient } from 'next-sanity';

// Import environment variables or replace with actual values
import { apiVersion, dataset, projectId } from '../env';

// Correct client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Access the environment variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Access the dataset environment variable
  apiVersion: '2024-12-01',                            // Use a fixed date or environment variable
  useCdn: true,                                        // Use CDN for faster response in production
});
