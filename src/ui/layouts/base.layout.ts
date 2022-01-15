import { readFileSync } from 'fs';

const randomValue = (min: number, max: number) => min + Math.round(Math.random() * (max - min));
const randomColor = (s: number, l: number) =>
  `hsl(${randomValue(0, 360)}, ${randomValue(0, s)}%, ${randomValue(0, l)}%)`;

export const baseLayout = (...children: string[]): string => `
<!doctype html>
<html class="w-full h-full" lang="en">
	<head>
			<meta charset="UTF-8">
			<meta name="viewport"
						content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<base href="/">
			<style>${readFileSync('dist/css/index.css').toString()}</style>
			<title>func-ts</title>
	</head>
	<body class="h-full w-full" style="background-color: ${randomColor(100, 100)}; color: ${randomColor(100, 20)}">
		${children.join('\n')}
	</body>
</html>
`;
