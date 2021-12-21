import Octokat from 'octokat';

const octo = new Octokat({
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_PASSWORD
});

export default octo;