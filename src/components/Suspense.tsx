import type { ComponentChildren, VNode } from "preact";

type Props = {
	loading: boolean;
	error?: boolean;
	skeleton?: VNode | VNode[];
	children?: ComponentChildren;
};

export default function Suspense(props: Props) {
	return (
		<div className="suspense">
			{props.loading && (props.skeleton ?? <FlipBox />)}
			<div hidden={props.loading || props.error}>{props.children}</div>
		</div>
	);
}

export function FlipBox() {
	return (
		<div className="flip-box">
			<div className="box" />
		</div>
	);
}
