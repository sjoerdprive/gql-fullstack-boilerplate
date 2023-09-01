import { URLSearchParams } from "url";
import { Commit, Repository } from "../../types/graphql";

type PackageJSON = {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  [key: string]: any;
};

export class BitbucketClient {
  private URL_PREFIX = "https://api.bitbucket.org/2.0";
  private headers = {};

  public async authorize() {
    const clientId = process.env.BITBUCKET_AUTH_KEY;
    const clientSecret = process.env.BITBUCKET_AUTH_SECRET;

    const response = await fetch(
      "https://bitbucket.org/site/oauth2/access_token",
      {
        method: "POST",
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: clientId ?? "",
          client_secret: clientSecret ?? "",
        }),
      }
    ).then((res) => res.json());

    const accessToken = response.access_token;

    this.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }

  public async getRepository(
    repository: string,
    workspace: string = "wazzup-ondemand"
  ) {
    const endpoint = `${this.URL_PREFIX}/repositories/${workspace}/${repository}`;
    const headers = this.headers;

    return (await fetch(endpoint, {
      method: "GET",
      headers,
    }).then((res) => res.json())) as Repository;
  }

  public async getDependencies(
    repository: string,
    branch: string = "master",
    workspace: string = "wazzup-ondemand"
  ) {
    const endpoint = `${this.URL_PREFIX}/repositories/${workspace}/${repository}/src/${branch}/package.json`;
    const headers = this.headers;

    const packageJson = (await fetch(endpoint, {
      method: "GET",
      headers,
    }).then((res) => res.json())) as PackageJSON;

    const dependencies = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };

    return dependencies;
  }

  public async getCommits(
    repository: string,
    workspace: string = "wazzup-ondemand"
  ) {
    const endpoint = `${this.URL_PREFIX}/repositories/${workspace}/${repository}/commits`;
    const headers = this.headers;

    console.log({ headers });

    const res = await fetch(endpoint, {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error }));

    console.log({ res });

    return res as Promise<{ values: Commit[] }>;
  }
}
