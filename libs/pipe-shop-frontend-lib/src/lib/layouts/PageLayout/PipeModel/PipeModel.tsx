import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Pipe from "./Pipe/Pipe"

export const PipeModel = () => {

	return (
		<div
			style={{
				position: "absolute",
				width: "100vw",
				height: "100vh",
				top: 0,
				left: 0
			}}
		>
			<Suspense fallback={null}>
				<Canvas>
					<ambientLight />
					<Pipe />
				</Canvas>
			</Suspense>
		</div>
	)
}

export default PipeModel
