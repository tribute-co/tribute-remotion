import {Video} from 'remotion';

export const VideoDemo: React.FC<{demoVideo: string,volume:number}> = ({demoVideo,volume}) => {
	return <Video src={demoVideo} volume={volume}/>;
};
