"use client"
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'wpx95qab', 
  dataset: 'production', 
  apiVersion: '2023-05-03',
  useCdn: false, 
});