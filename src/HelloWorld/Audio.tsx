import {Audio} from 'remotion';

export const AudioDemo: React.FC<{demoAudio: string,volume:number}> = ({demoAudio,volume}) => {
	return <Audio src={demoAudio}  volume={volume} />;
};
