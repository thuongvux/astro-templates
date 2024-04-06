import { type ReactNode } from "react";

type Error = { code?: string; message?: string } | null;

type Props = {
	loading: boolean;
	error?: Error;
	skeleton?: ReactNode;
	children?: ReactNode;
};

export default function Suspense(props: Props) {
	return (
		<div className="suspense">
			{!props.error && props.loading && (props.skeleton ?? <LoaderFlipping />)}
			{!!props.error && <ErrorBox error={props.error} />}
			<div hidden={!!props.error || props.loading}>{props.children}</div>
		</div>
	);
}

export function ErrorBox(props: { error: Error }) {
	return (
		<div className="error-box">
			<p>{`Error: ${props.error?.code}`}</p>
			<p>{props.error?.message}</p>
		</div>
	);
}

export function FlipBox() {
	return (
		<div className="fixed-center [perspective:15rem]">
			<div className="size-[5rem] animate-[flipXY_1s_infinite] bg-indigo-500" />
		</div>
	);
}

// src/components/Loader.astro -- <style>...</style> --
export function LoaderFlipping() {
	return (
		<div className="loader">
			<div className="flipping" />
		</div>
	);
}
