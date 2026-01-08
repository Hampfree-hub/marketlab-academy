const { execSync } = require('child_process');

const message = process.argv[2];

if (!message) {
  console.error('Please provide a commit message: node git-commit.cjs "your message"');
  process.exit(1);
}

try {
  console.log('--- Adding changes ---');
  execSync('git add .', { stdio: 'inherit' });

  console.log('\n--- Committing ---');
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' });

  console.log('\n--- Pushing to main ---');
  execSync('git push origin main', { stdio: 'inherit' });

  console.log('\n✅ Success!');
} catch (error) {
  console.error('\n❌ Error during git operations:', error.message);
  process.exit(1);
}




