import { GithubRepository, GithubUser } from './githubInterface';

export interface State {
    repositories: GithubRepository[];
    developers: GithubUser[];
    loading: boolean;
    error: string;
}
