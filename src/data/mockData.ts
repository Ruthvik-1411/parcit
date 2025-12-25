export interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  type: 'github' | 'arxiv' | 'linkedin' | 'web' | 'other';
  source: string;
  tags: string[];
  metadata: {
    stars?: string;
    language?: string;
    readTime?: string;
    authors?: string;
    author?: string;
  };
  addedAt: string;
  status: 'unread' | 'scheduled' | 'archived' | 'read';
  scheduledFor: string | null;
}

export const MOCK_LINKS: Link[] = [
  {
    id: '1',
    url: 'https://github.com/facebook/react',
    title: 'facebook/react',
    description: 'The library for web and native user interfaces.',
    type: 'github',
    source: 'GitHub',
    tags: ['#Frontend', '#JavaScript', '#Library'],
    metadata: {
      stars: '213k stars',
      language: 'JavaScript',
    },
    addedAt: new Date().toISOString(),
    status: 'unread', // unread, scheduled, archived
    scheduledFor: null,
  },
  {
    id: '2',
    url: 'https://arxiv.org/abs/1706.03762',
    title: 'Attention Is All You Need',
    description: 'The seminal paper introducing the Transformer architecture.',
    type: 'arxiv',
    source: 'ArXiv',
    tags: ['#AI', '#LLM', '#Research'],
    metadata: {
      readTime: '15 min read',
      authors: 'Vaswani et al.',
    },
    addedAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    status: 'unread',
    scheduledFor: null,
  },
  {
    id: '3',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:123456789',
    title: 'Scaling Engineering Teams',
    description: 'Key takeaways on how to scale engineering teams effectively from a startup to a unicorn.',
    type: 'linkedin',
    source: 'LinkedIn',
    tags: ['#Management', '#Career', '#Leadership'],
    metadata: {
      author: 'Jane Doe',
      readTime: '5 min read',
    },
    addedAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    status: 'scheduled',
    scheduledFor: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
  },
];

export const FILTER_CHIPS = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: '#AI' },
  { id: 'frontend', label: '#Frontend' },
  { id: 'javascript', label: '#JavaScript' },
  { id: 'llm', label: '#LLM' },
  { id: 'research', label: '#Research' },
];
