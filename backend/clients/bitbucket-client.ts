import { URLSearchParams } from "url";
import { Commit, Repository, Tag } from "../../types/graphql";
import fetch from "node-fetch";

type PackageJSON = {
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  [key: string]: any;
};

export class BitbucketClient {
  private URL_PREFIX = "https://api.bitbucket.org/2.0";
  private headers = {};

  constructor({
    clientId,
    clientSecret,
  }: {
    clientId: string;
    clientSecret: string;
  }) {
    this.authorize({ clientId, clientSecret });
  }

  public async authorize({
    clientId,
    clientSecret,
  }: {
    clientId: string;
    clientSecret: string;
  }) {
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
    ).then((res) => res.json() as any);

    const accessToken = response.access_token;

    this.headers = {
      // "Access-Control-Allow-Origin": "https://sandbox.embed.apollographql.com",
      // "Access-Control-Allow-Credentials": true,
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

  public async getPackageJSON(
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

    return packageJson;
  }

  public async getCommits(repository: string) {
    const endpoint = `${this.URL_PREFIX}/repositories/wazzup-ondemand/${repository}/commits`;
    const headers = this.headers;

    const res = (await fetch(endpoint, {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error }))) as { values: Commit[] };

    return res.values;
  }

  public async getTags(repository: string) {
    const headers = this.headers;

    const response = (await fetch(
      `${this.URL_PREFIX}/repositories/wazzup-ondemand/${repository}/refs/tags`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...headers,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.error(err))) as { values: Tag[] };

    return response.values;
  }
}
