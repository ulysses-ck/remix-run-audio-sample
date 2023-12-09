import audioHref from "../../public/sound.mp3";

export const meta = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<audio src={audioHref} controls></audio>
		</div>
	);
}
