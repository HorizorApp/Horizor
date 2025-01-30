import HorizorClient from '../src';

async function main() {
  const client = new HorizorClient();

  try {
    // Analyze multiple tokens

      const tokenInfo = await client.getProject(name);
      console.log(`\nAnalyzing token: ${name}`);
      console.log(`Name: ${tokenInfo.data.ProjectName}`);
      console.log(`Score: ${tokenInfo.data.score}`);
      console.log('Risk Indicators:', tokenInfo.data.indicatorData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main(); 