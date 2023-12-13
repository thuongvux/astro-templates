import type { ComponentChildren, VNode } from "preact";

type Props = {
	loaded: boolean;
	skeleton?: VNode | VNode[];
	children?: ComponentChildren;
};

export default function Suspense(props: Props) {
	return (
		<div class="suspense">
			{!props.loaded && (props.skeleton ?? <FlipBox />)}
			<div className={props.loaded ? "visible" : "invisible"}>
				{props.children}
			</div>
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
