export const toggleClass = (theme: any) => {
	const htmlTag = document.getElementsByTagName("html")[0];

	htmlTag.removeAttribute("class");
	htmlTag.classList.add(theme);
};
