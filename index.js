// Code Quality Checker - GitHub Action
const core = require('@actions/core');

async function run() {
  try {
    // Example action logic
    const input = core.getInput('message');
    core.info(`Received message: ${input}`);
    core.setOutput('status', 'success');
  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
  }
}

run();
