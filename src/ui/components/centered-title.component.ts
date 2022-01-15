export const centeredTitle = (...children: string[]): string => `
	<h1 class="flex justify-center items-center h-full text-9xl font-bold">${children.join('<br/>')}</h1>
`;
