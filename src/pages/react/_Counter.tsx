import { useEffect, useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div className="center gap-10">
			<div className="flex gap-6">
				<a href="https://docs.astro.build" target="_blank" rel="noreferrer">
					<picture>
						<source srcSet="/astro-icon-light.svg" media="(prefers-color-scheme: dark)" />
						<img
							src="/astro-icon-dark.svg"
							className="h-20 hover:drop-shadow-[0_0_2em_#646cffaa]"
							alt="Astro logo"
						/>
					</picture>
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src="/react.svg"
						className="h-20 animate-[spin_10s_linear_infinite] hover:drop-shadow-[0_0_2em_#61dafbaa]"
						alt="React logo"
					/>
				</a>
			</div>
			<h1 className="text-5xl">Astro + React</h1>
			<div className="center gap-6">
				<button
					type="button"
					onClick={() => setCount((count) => count + 1)}
					className="mx-auto rounded-md border-2 bg-[--bg-2nd] px-3 py-1 transition hover:border-indigo-400"
				>
					count is {count}
				</button>
				<p className="text-sm">
					Edit <code>_Counter.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="text-[#777]">Click on the Astro and React logos to learn more</p>
		</div>
	);
}
