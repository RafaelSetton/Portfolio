export default interface GitHubRepoModel {
    name: string,
    description: string,
    html_url: string,
    pushed_at: string,
    language: string,
    stargazers_count: number,
}