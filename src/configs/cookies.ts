export const cookies = {
	/**
	 * Sets a cookie with the given key, value, and optional expiration time.
	 * @param key The key of the cookie to set
	 * @param value The value of the cookie to set
	 * @param expiresIn The number of seconds until the cookie expires. Defaults to 7 days.
	 * @returns True if the cookie was set, false if no value was provided.
	 */
	set: (key: string, value: string | undefined, expiresIn?: number) => {
		if (!value) {
			return false;
		}
		// Calculate the expiration date based on the given expiration time
		const now = new Date().getTime();
		const expires = new Date(now + (expiresIn ?? 604800) * 1000).toUTCString();
		// Set the cookie with the given key, value, and expiration date
		document.cookie = `${key}=${value}; expires=${expires}; path=/`;
		return true;
	},
	/**
	 * Gets the value of the cookie with the given key.
	 * @param key The key of the cookie to get
	 * @returns The value of the cookie with the given key, or undefined if the cookie does not exist
	 */
	get: (key: string) => {
		// Get the entire cookie string and split it by the key and the equals sign
		const value = `; ${document.cookie}`.split(`; ${key}=`);

		// If there is a value after the split, return it without the trailing semi-colon and any other cookies that may be on the end of the string
		if (value.length === 2) {
			return value.pop()?.split(";").shift();
		}
	},
	/**
	 * Deletes the cookie with the given key.
	 * @param key The key of the cookie to delete
	 */
	delete: (key: string) => {
		const expired = new Date(0).toUTCString();
		// Set the cookie with the given key, no value, and an expiration date in the past
		document.cookie = `${key}=; expires=${expired}; path=/`;
	},
	/**
	 * Deletes all cookies by setting their expiration date to the Unix epoch.
	 */
	clear: () => {
		// Set the expiration date to the Unix epoch (January 1, 1970, 00:00:00 UTC)
		const expired = new Date(0).toUTCString();
		// Get all cookies as a semi-colon separated string
		const items = document.cookie.split(";");
		// Loop through each cookie and delete it by setting an expired expiration date
		for (let i = 0; i < items.length; i++) {
			// Set the cookie with the given key, no value, and an expiration date in the past
			document.cookie = `${items[i]}=; expires=${expired}; path=/`;
		}
	},
};
