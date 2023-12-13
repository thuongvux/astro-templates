export const cookies = {
	set: (key: string, value: string | undefined, expiresIn?: number) => {
		if (!value) {
			return false;
		}
		const now = new Date().getTime();
		const expires = new Date(now + (expiresIn ?? 604800) * 1000).toUTCString();
		document.cookie = `${key}=${value}; expires=${expires}"; path=/`;
		return true;
	},
	get: (key: string) => {
		const value = `; ${document.cookie}`;
		const parts = value.split(`; ${key}=`);
		if (parts.length === 2) {
			return parts.pop()?.split(";").shift();
		}
	},
	delete: (key: string) => {
		const expired = new Date(0).toUTCString();
		document.cookie = `${key}=; expires=${expired}; path=/`;
	},
	clear: () => {
		const items = document.cookie.split(";");
		const expired = new Date(0).toUTCString();
		for (let i = 0; i < items.length; i++) {
			document.cookie = `${items[i]}=; expires=${expired}; path=/`;
		}
	},
};
