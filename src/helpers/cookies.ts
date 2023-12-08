export const cookies = {
  set: (key: string, value: string, expiresIn?: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (expiresIn ?? 7 * 24 * 3600) * 1000);
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}"; path=/`;
  },
  get: (key: string) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + key + "=");

    if (parts.length == 2) {
      return parts.pop()?.split(";").shift();
    }
  },
  delete: (key: string) => {
    const date = new Date();
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);
    document.cookie = key + "=; expires=" + date.toUTCString() + "; path=/";
  },
};
