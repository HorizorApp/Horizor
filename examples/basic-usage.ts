import HorizorClient from '../src';

async function main() {
  // Initialize the client
  const client = new HorizorClient();

  try {
    // Analyze a project
    const projectId = 'your_project_id';
    const projectInfo = await client.analyzeProject(projectId);
    console.log('Project Information:', projectInfo.data);

    // Analyze Twitter activity for the project
    const twitterAnalysis = await client.analyzeTwitter(projectId);
    console.log('Twitter Analysis:', twitterAnalysis.data);

    // Analyze GitHub activity for the project
    const githubAnalysis = await client.analyzeGitHub(projectId);
    console.log('GitHub Analysis:', githubAnalysis.data);

    // Analyze Whitepaper for the project
    const whitepaperAnalysis = await client.analyzeWhitepaper(projectId);
    console.log('Whitepaper Analysis:', whitepaperAnalysis.data);

    // Analyze Tokenomics for the project
    const tokenomicsAnalysis = await client.analyzeTokenomics(projectId);
    console.log('Tokenomics Analysis:', tokenomicsAnalysis.data);
 
    // List all available AI analysts
    const analysts = await client.listAnalysts();
    console.log('Available Analysts:', analysts.data);

    // Interact with an AI analyst
    if (analysts.data.length > 0) {
      const analystId = analysts.data[0].id;
      const messages: AnalysisMessage[] = [
        {
          role: 'user',
          content: 'Analyze the risks and potential of this project',
        },
      ];
      const analysisResponse = await client.analyzeWithAI(analystId, messages);
      console.log('AI Analysis Response:', analysisResponse.data);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
