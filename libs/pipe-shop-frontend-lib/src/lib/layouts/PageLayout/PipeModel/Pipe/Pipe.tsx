import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import useMousePosition from "../../../../utils/getMousePosition"
import { useGLTF } from "@react-three/drei"
import { useTypedDispatch } from "../../../../redux"
import { setIsLoadingModel } from "../../../../redux/slices"

export const Pipe = () => {
	const ref = useRef<any>()
	const dispatch = useTypedDispatch()
	const mousePosition = useMousePosition()

	const model = useGLTF("/assets/scene.gltf")

	useEffect(() => {
		dispatch(setIsLoadingModel(!model))
	}, [dispatch, model])


	useFrame((_, delta) => {
		if (!ref.current) return

		ref.current.rotation.y += delta / 2

		if (!mousePosition.x || !mousePosition.y) return

		const x = ((mousePosition.x / 500) * Math.PI) / 2;
		const y = ((mousePosition.y / 500) * Math.PI) / 2;
		ref.current.rotation.x = (x + y) / 2
	})

	return (
		<mesh
			ref={ref}
			scale={3}
		>
			<primitive
				object={model.scene}
			/>
		</mesh>
	)
}

export default Pipe
