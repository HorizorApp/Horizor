import HorizorClient from '../src';

async function main() {
  const client = new HorizorClient();

  try {
    // Try to get an invalid project
    const invalidProjectAddress = 'invalid_address';
    const projectInfo = await client.getProject(invalidProjectName);
    console.log('Project Information:', projectInfo);
  } catch (error) {
    console.error('Failed to get project:', error.message);
  }
}

main(); 