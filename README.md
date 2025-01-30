![Horizor App](./assets/header.jpg)

<h1 align="center">Horizor App</h1>

<p align="center">
Advanced AI-powered platform for pre-launch blockchain project analysis. Built on Solana's high-performance blockchain, Horizor combines machine learning, NLP, and comprehensive data analytics to evaluate projects based on Twitter activity, website quality, GitHub contributions, whitepaper analysis, tokenomics, and market uniqueness.
</p>

<div align="center">

[![Solana](https://img.shields.io/badge/Solana-black?style=for-the-badge&logo=solana&logoColor=14F195)](https://solana.com/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org/)
[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/)
[![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)](https://keras.io/)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000&style=flat-square)](https://github.com/horizorapp/horizor-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)]([https://github.com/horizorapp/horizor-app/graphs/commit-activity](https://github.com/horizorapp/horizor/graphs/commit-activity))

</div>

<p align="center">
  <a href="https://horizor.app">Website</a> •
  <a href="https://docs.horizor.app">Documentation</a> •
  <a href="https://docs.horizor.app">Roadmap</a>
</p>


## 🔧 Core Features

- **Token Analytics**: Deep analysis of Solana tokens
- **Risk Assessment**: Advanced risk scoring and indicators
- **AI Agents**: Interactive AI-powered analysis
- **Batch Processing**: Efficient multi-token analysis
- **Real-time Data**: Live on-chain analytics

## 📊 Token Analysis Example

```typescript
import HorizorClient from 'horizorapp';

async function analyzeProject(projectId: string) {
  const client = new HorizorClient();
  const analysis = await client.getProjectAnalysis(projectId);

  console.log(`
Project Analysis Results:
-------------------------
Name: ${analysis.data.projectName}
AI Score: ${analysis.data.score}/100
Twitter Activity: ${analysis.data.twitterEngagement}%
Website Trust Score: ${analysis.data.websiteTrustScore}%
GitHub Activity: ${analysis.data.githubCommits} commits
Tokenomics Risk: ${analysis.data.tokenomicsRisk ? 'High' : 'Low'}
Market Uniqueness: ${analysis.data.marketUniqueness}%
  
Project Links:
Website: ${analysis.data.links.website}
Twitter: ${analysis.data.links.twitter}
GitHub: ${analysis.data.links.github}
Whitepaper: ${analysis.data.links.whitepaper}
  `);
}

```

## 🔍Advanced Usage

### Batch Processing

```typescript
import { HorizorClient, ProjectData } from 'horizor-app';

async function batchAnalysis(projectIds: string[]) {
  const client = new HorizorClient();
  const batchSize = 5;
  
  for (let i = 0; i < projectIds.length; i += batchSize) {
    const batch = projectIds.slice(i, i + batchSize);
    const analyses = await Promise.all(
      batch.map(id => client.analyzeProject(id))
    );
    
    // Process batch results
    analyses.forEach(analysis => {
      if (analysis.data.score < 5) {
        console.log(`High Risk Project: ${analysis.data.projectName}`);
        console.log(`Risk Factors: ${JSON.stringify(analysis.data.tokenomics)}`);
      }
    });
  }
}
```


## API Integration

```typescript
import { HorizorClient, ChatMessage } from 'horizor-app';

async function chatWithAI() {
  const client = new HorizorClient();
  const messages: ChatMessage[] = [{
    role: 'user',
    content: 'Analyze the risks and potential of project XYZ'
  }];
  
  const response = await client.chat('ai-agent-id', messages);
  console.log('AI Analysis:', response.data.response);
}
```


## Roadmap

- [ ] API integration for displaying AI analysis results in the Dashboard
- [ ] Ability to sort projects by rating, activity, and date added
- [ ] Development of a Telegram bot for instant notifications about new project launches and their summaries
- [ ] Creation of a Pro subscription with payment in $Horizor  to allow users to run their own project analysis based on Twitter data
- [ ] Providing a more detailed summary in the Pro vision, covering all aspects analyzed by our AI
Adding charts for visualizing activity on Twitter and GitHub


## Documentation

For detailed documentation, visit [docs.horizor.app](https://horizorapp.gitbook.io/docs)


## License

MIT © [Horizor Team](LICENSE)
