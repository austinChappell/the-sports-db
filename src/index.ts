import axios from "axios";

type Version = 1;
interface ConstructorArgs {
  apiKey: string;
  version: Version;
}

export class SportsDbApi {
  constructor({
                apiKey,
                version,
              }: ConstructorArgs) {
    if (version !== 1) {
      throw new Error('Unsupported version number. The supported version number is: 1');
    }

    if (!apiKey) {
      throw new Error('API key required.')
    }

    this.apiKey = apiKey;
    this.version = version;
  }

  private readonly apiKey: string;
  private readonly version: number;

  private fetchDataFromService = async <T>(url: string) => {
    const baseUrl = `https://www.thecocktaildb.com/api/json/v${this.version}/${this.apiKey}`;

    const response = await axios.get<T>(`${baseUrl}/${url}`);

    return response.data;
  }

  // Lookup
  foo = async () => {
    console.log(this.fetchDataFromService);

    return true;
  }
}
