import { GithubRepository, GithubUser } from "../interfaces/githubInterface";

const githubApiUrl = 'http://localhost:4000';

export async function githubTrendingRepositoriesRequest(): Promise<GithubRepository[]> {
  const data = await fetch(`${githubApiUrl}/repositories`);

  return data.json();
}

export async function githubTrendingDevelopersRequest(): Promise<GithubUser[]> {
  const data = await fetch(`${githubApiUrl}/developers`);

  return data.json();
}
