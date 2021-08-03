import React, {useEffect, useState} from 'react';
import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import audio1 from './demo-audio.mp3';
import {AudioDemo} from './HelloWorld/Audio';
import {ImagDemo} from './HelloWorld/Image';
import {VideoDemo} from './HelloWorld/VideoDemo';
import {videoData} from './service/apis/videodata';
export const HelloWorld = (props) => {
	debugger
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();
	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const [videoDataSet, setVideoData] = useState(videoData);
	useEffect(() => {
		getData();
	}, []);
	useEffect(() => {
		getData();
	}, [props.propOne]);
	const getData = async () => {
		if (props.propOne) {
			videoDataSet.media.push({
				id: 'fbb27363b710e81c2f50eb6b1c8797c0',
				trim: [0.0, 5.15],
				start: 7231,
				stop: 150,
				type: 'image',
				image: props.propOne,
				textFields: [],
				transition: 'fade',
				rotationIndex: 0,
				muteBackgroundMusic: false,
			});
		}
		if (props.data.length != 0) {
			videoDataSet.media = props.data;
		}
		setVideoData(videoDataSet);
	};
	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
			
				{
					props.singleData == null ?
						props.data.map((object:any, i:any) => {
							return (
								<div key={object.id}>
									{
										object.type === 'video' ? (
											<Sequence from={object.start} durationInFrames={object.stop}>
												{ 
													!object.muteBackgroundMusic ?
														<AudioDemo demoAudio={audio1} volume={0.2}/> 
													: null
												}
												<VideoDemo demoVideo={object.video} volume={object.volume}/>
											</Sequence>
										) : object.type === 'img' ? (
											<>
												<Sequence from={object.start} durationInFrames={object.stop}>
													<AudioDemo demoAudio={audio1} volume={0.8}/>
													<ImagDemo demoImage={object.img} />
												</Sequence>
											</>
										) : null
									}
								</div>
							);
						})
					: 
						<div>
							<Sequence from={0} durationInFrames={Math.floor(props.singleData.duration) * 30}>
								{
										props.singleData.type === 'video' ? (
											<Sequence from={props.singleData.start} durationInFrames={props.singleData.stop}>
												{ 
													!props.singleData.muteBackgroundMusic ?
														<AudioDemo demoAudio={audio1} volume={0.2}/> 
													: null
												}
												<VideoDemo demoVideo={props.singleData.video} volume={props.singleData.volume}/>
											</Sequence>
										) : props.singleData.type === 'img' ? (
											<>
												<Sequence from={props.singleData.start} durationInFrames={props.singleData.stop}>
													<AudioDemo demoAudio={audio1} volume={0.8}/>
													<ImagDemo demoImage={props.singleData.img} />
												</Sequence>
											</>
										) : null
								}
							</Sequence>
							;
						</div>
				}

			</div>
		</div>
	);
};
