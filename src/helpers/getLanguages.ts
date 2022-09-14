function getLanguages(gitHubUsername: string) {
    var res: string[] = [];
    var response = fetch(`https://api.github.com/users/${gitHubUsername}/repos`);
    response.then(res => res.json())
        .then(repos => repos.forEach((repo: { language: string }) =>
            res.push(repo['language'])
        ));
    return res;
}


export default getLanguages;