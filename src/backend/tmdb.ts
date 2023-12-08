class TMDB {
  constructor(access_token: string) {
    this.access_token = access_token;
  }
  private access_token?: string;

  protected fetch = async (
    url: string,
    method?: "GET" | "POST" | "PUT" | "DELETE",
  ) => {
    const res = await fetch(url, {
      method: method ?? "GET",
      headers: {
        Authorization: `Bearer ${this.access_token}`,
        "Content-Type": "application/json",
      },
    });
    return res.json();
  };

  protected getImageUrl = (
    filePath: string,
    options?: { quality?: "original" | "w-500" },
  ) => {
    if (options?.quality) {
      return `https://image.tmdb.org/t/p/${options?.quality}${filePath}`;
    }
    return `https://image.tmdb.org/t/p/original${filePath}`;
  };

  protected ref = (type: "movie" | "tv") => {
    return {
      popular: () => {
        return this.fetch(`https://api.themoviedb.org/3/${type}/popular`);
      },
      detail: (movie_id: string | number) => {
        return this.fetch(`https://api.themoviedb.org/3/${type}/${movie_id}`);
      },
      getPoster: async (id: string | number) => {
        const { poster_path } = await this.fetch(
          `https://api.themoviedb.org/3/${type}/${id}`,
        );
        return this.getImageUrl(poster_path);
      },
      getPosterByQuery: async (query: string) => {
        const { results: seachResults } = await this.ref(type).search(query);
        if (seachResults[0]) {
          const { poster_path } = seachResults[0];
          return poster_path ? this.getImageUrl(poster_path) : null;
        }
      },
      search: (query: string) => {
        return this.fetch(
          `https://api.themoviedb.org/3/search/${type}?query=${query}`,
        );
      },
    };
  };
  public movies = { ...this.ref("movie") };
  public series = { ...this.ref("tv") };
}

export const tmdb = new TMDB(import.meta.env.TMDB_ACCESS_TOKEN);
