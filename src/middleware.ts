import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
	const { cookies, params, request, url, redirect } = context;
	return next();
});
