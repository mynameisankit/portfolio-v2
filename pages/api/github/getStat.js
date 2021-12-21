import octo from '@/lib/github';

async function handler({ query: { repo_name } }, res) {
    const repo = await octo.repos(process.env.GITHUB_USERNAME, repo_name).fetch();
    res.status(200).json({
        stargazers: repo.stargazersCount,
        watchers: repo.watchersCount,
        forks: repo.forksCount
    });
}

export default handler;