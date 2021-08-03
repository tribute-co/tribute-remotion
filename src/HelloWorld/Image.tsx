import {Img, useVideoConfig} from 'remotion';

export const ImagDemo: React.FC<{demoImage: string}> = ({demoImage}) => {
	const videoConfig = useVideoConfig();

	return <Img src={demoImage} />
};
