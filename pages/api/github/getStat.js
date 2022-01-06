async function handler({ query: { repo_name } }, res) {
    res.status(200).json({
        stargazers: 0,
        watchers: 0,
        forks: 0
    });
}

export default handler;