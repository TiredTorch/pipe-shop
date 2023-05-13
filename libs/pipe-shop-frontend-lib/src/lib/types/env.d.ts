/// <reference types="vite/client" />

declare module "*.mp3"
declare module "*.gltf"


interface ImportMetaEnv {
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
