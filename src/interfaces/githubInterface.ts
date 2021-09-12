export interface GithubUser {
  avatar: string;
  username: string;
  name: string;
  rank: string;
  since: string;
  url: string;
  popularRepository: {
    description: string;
    repositoryName: string;
    url: string;
  };
}

export interface GithubRepository {
  username: string;
  url: string;
  totalStars: string;
  starsSince: string;
  since: string;
  repositoryName: string;
  rank: string;
  languageColor: string;
  language: string;
  forks: string;
  description: string;
  builtBy: {
    avatar: string;
    url: string;
    username: string;
  };
}


