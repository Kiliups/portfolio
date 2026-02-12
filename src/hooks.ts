import type { RequestEvent } from '@sveltejs/kit';
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute = (request: RequestEvent) => {
	const { pathname } = deLocalizeUrl(request.url);
	if (pathname === '/' || pathname === '/index.html') {
		return '/';
	}
	return pathname;
};
