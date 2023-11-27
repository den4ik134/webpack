declare module '*.module.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.svg' {
	import * as React from 'react';

	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;

	export default ReactComponent;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare const __PLATFORM__: 'mobile' | 'desktop';
