testDir: 'tests',
timeout: 30000,
use: {
  browserName: 'chromium',
  headless: true,
},
reporter: [['list'], ['json', { outputFile: 'test-results.json' }]]