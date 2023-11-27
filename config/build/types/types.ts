export interface BuildPath {
	entry: string;
	html: string;
	public: string;
	output: string;
	src: string;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
	port: number;
	platform: BuildPlatform;
	paths: BuildPath;
	mode: BuildMode;
	analyzer?: boolean;
}
