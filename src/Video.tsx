import {Player, PlayerRef} from '@remotion/player';
import React, {useEffect, useRef, useState} from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {Img} from 'remotion';
import {AssetsConstant} from './assets';
import {HelloWorld} from './HelloWorld';
// import HelloWorld from './HelloWorld';
import {tributevideoData} from './service/apis/tributedata';
import { videoData } from './service/apis/videodata';
import {tributevideoData3} from './service/apis/birthday';
import './video.css';

interface ItemType {
	id: number;
	name: string;
}

export const RemotionVideo: React.FC = (props) => {
	const playerRef = useRef<PlayerRef>(null);

	useEffect(() => {
		if (playerRef.current) {
			console.log(playerRef.current.getCurrentFrame());
		}
	}, []);

	const [state, setState] = useState<ItemType[]>([]);
	const [imageUrl, setImageUrl] = useState('');
	const [totalFrames, setTotalFrames] = useState(1);
	const [isTrue, setBoolean] = useState(false);
	const [singleData,setSingleData] = useState(null);

	const captureImage = (evt: any) => {
		const file = evt.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (event) => {
				const base64: any = reader.result;
				const URL = window.webkitURL || window.URL;
				const url = URL.createObjectURL(file);
				setImageUrl(url);
			};
		}
	};

	useEffect(() => {
		(async () => {
			await initialData();
		})();
	}, []);

	const initialData = async (mediaData?: any) => {
		let data: any;
		let tributeMedia: any;
		const finalData: any = [];
		if (
			mediaData != undefined &&
			mediaData != '' &&
			mediaData != [] &&
			mediaData != null
		) {
			data = mediaData;
		} else {
			tributeMedia = tributevideoData3;
			Object.keys(tributeMedia.media).forEach((element, index) => {
				finalData.push(tributeMedia.media[element]);
				finalData[index]['id'] = element;
				(finalData[index]['start'] = 0), (finalData[index]['stop'] = 0);
				if (finalData[index].type == 'video') {
					finalData[index]['dragimage'] =
						finalData[index].video.split('/video.mp4')[0] + '/image';
				} else if (finalData[index].type == 'img') {
					finalData[index]['dragimage'] = finalData[index]['img'];
				}
			});
			tributeMedia.media = finalData;
			// tributevideoData.media.map((media:any, index:any) => (
			// 	debugger
			// ));
			data = finalData;
		}
		if (data.length > 0) {
			let totalSeconds = 0;
			let durationofFrames = 0;
			for (let i = 0; i < data.length; i++) {
				data[i].start = 0;
				data[i].stop = 0;
				if (i > 0) {
					data[i].start = data[i - 1].start + data[i - 1].stop;
				}
				data[i].stop = Math.floor((data[i].trim[1] - data[i].trim[0]) * 30);
				totalSeconds = totalSeconds + (data[i].trim[1] - data[i].trim[0]);
			}
			durationofFrames = totalSeconds * 30;
			await setTotalFrames(durationofFrames);
			await setBoolean(true);
			await setState(data);
		}
	};

	const setData = async (event: any) => {
		setState(event);
		await initialData(event);
	};


	// a little function to help us with reordering the result
	const reorder = (list: any, startIndex: any, endIndex: any) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	};

	const grid = 8;

	const getItemStyle = (isDragging: any, draggableStyle: any) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: 'none',
		padding: `1px`,
		margin: `0 0 0 0`,
		display: `flex`,
		alignItems: `center`,
		background: 'white',
		// change background colour if dragging
		// background: isDragging ? 'lightgreen' : 'grey',

		// styles we need to apply on draggables
		...draggableStyle,
	});

	const getListStyle = (isDraggingOver: any) => ({
		// background: isDraggingOver ? 'lightblue' : 'lightgrey',
		display: 'flex',
		// padding: grid,
		overflow: 'auto',
	});

	const onDragEnd = (result: any) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const items: any = reorder(
			state,
			result.source.index,
			result.destination.index
		);

		setState(items);
		initialData(items);
		console.log('items ', items);
	};

	const onDragClicked = (event) => {
		state.forEach((data,index) => {
			if(event.target.src == data?.dragimage){
				debugger
				setSingleData(data);
			}
		});
	}

	const onPriviewClicked = () =>{
		setSingleData(null);
	}

	return (
		<>
			<section className="editor_section topsection">
				<div className="container-fluid">
					<div className="editor_wrapper">
						<div className="editor_head">
							<div className="editor_head_menu">
								<ul>
									<li onClick={onPriviewClicked}>
										<a href="#">
											<span>
												<Img src={AssetsConstant.playicon} alt="images" />
											</span>{' '}
											Preview
										</a>
									</li>
									<li className="custom_input">
										<label htmlFor="file-upload" className="custom-file-upload">
											<span>
												<Img src={AssetsConstant.plusicon} alt="images" />
											</span>{' '}
											Image
										</label>
										<input
											id="file-upload"
											type="file"
											onChange={captureImage}
										/>
									</li>
									<li className="custom_input">
										<label
											htmlFor="music-upload"
											className="custom-file-upload"
										>
											<span>
												<Img src={AssetsConstant.plusicon} alt="images" />
											</span>{' '}
											Music
										</label>
										<input
											id="music-upload"
											type="file"
											onChange={captureImage}
										/>
									</li>
									<li className="custom_input">
										<label
											htmlFor="video-upload"
											className="custom-file-upload"
										>
											<span>
												<Img src={AssetsConstant.plusicon} alt="images" />
											</span>{' '}
											Video
										</label>
										<input
											id="video-upload"
											type="file"
											onChange={captureImage}
										/>
									</li>
									<li>
										<a href="#">
											<span>
												<Img src={AssetsConstant.plusicon} alt="images" />
											</span>{' '}
											Music
										</a>
									</li>
									{/* <input type="file" /> */}
									<li>
										<a href="#">
											<span>
												<Img src={AssetsConstant.plusicon} alt="images" />
											</span>{' '}
											Video
										</a>
									</li>
									{/* <input type="file" /> */}
									<li>
										<a href="#" className="optn_btn">
											<Img src={AssetsConstant.trimIcon} alt="images" /> Trim
										</a>
									</li>
								</ul>
							</div>
							<button className="btn cmn_btn btn_blue">Publish</button>
						</div>

						{/* <Composition
							id="HelloWorld"
							component={HelloWorld}
							durationInFrames={Math.floor(totalFrames)}
							fps={30}
							width={1400}
							height={1080}
							defaultProps={{
								propOne: imageUrl,
								propTwo: 10,
								data: state,
							}}
						/> */}

						{
							singleData == null ?
								<div className="player_container">
									<div className="player_container_remotion_player">
										<Player
											ref={playerRef}
											controls
											component={HelloWorld}
											durationInFrames={Math.floor(totalFrames)}
											compositionWidth={1280}
											compositionHeight={720}
											fps={30}
											inputProps={{
												propOne: imageUrl,
												propTwo: 10,
												data: state,
												singleData: singleData
											}}
											style={{
												width: '100%',
											}}
										/>
									</div>
								</div>
							:
								<div className="player_container">
									<div className="player_container_remotion_player">
										<Player
											ref={playerRef}
											controls
											component={HelloWorld}
											durationInFrames={Math.floor(singleData.duration) * 30}
											compositionWidth={1280}
											compositionHeight={720}
											fps={30}
											inputProps={{
												propOne: imageUrl,
												propTwo: 10,
												data: state,
												singleData: singleData
											}}
											style={{
												width: '100%',
											}}
										/>
									</div>
								</div>
						}

						<div className="video_thumbnails_area">
							{/* <ReactSortable
								className="video_thumbnails_area_in"
								list={state}
								setList={setData}
							>
								{state.map((item) => (
									<div key={item.id} className="column video_thmbnl_bx_clmn">
										<a href="#">
											<div className="video_thmbnl_bx">
												<Img src={item?.dragimage} alt="images" />
												<div className="video_thmbnl_bx_title">
													<h4>Video Name Here</h4>
													<span>
														{new Date(item?.duration * 1000)
															.toISOString()
															.substr(11, 8)}
													</span>
												</div>
											</div>
										</a>
									</div>
								))}
							</ReactSortable> */}

							<DragDropContext onDragEnd={onDragEnd}>
								<Droppable droppableId="droppable" direction="horizontal">
									{(provided, snapshot) => (
										<div
											ref={provided.innerRef}
											style={getListStyle(snapshot.isDraggingOver)}
											{...provided.droppableProps}
										>
											{state.map((item, index) => (
												<Draggable
													key={item.id}
													draggableId={String(item.id)}
													index={index}
												>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															style={getItemStyle(
																snapshot.isDragging,
																provided.draggableProps.style
															)}
															onClick={onDragClicked}
														>
															{/* {item.content} */}
															<div
																key={item.id}
																className="column video_thmbnl_bx_clmn"
															>
																<a href="#">
																	<div className="video_thmbnl_bx">
																		<Img src={item?.dragimage} alt="images" />
																		<div className="video_thmbnl_bx_title">
																			<h4>Video Name Here</h4>
																			<span>
																				{new Date(item?.duration * 1000)
																					.toISOString()
																					.substr(11, 8)}
																			</span>
																		</div>
																	</div>
																</a>
															</div>
														</div>
													)}
												</Draggable>
											))}
											{/* {provided.placeholder} */}
										</div>
									)}
								</Droppable>
							</DragDropContext>

							{/* <div onDragOver={dragOver} onDrop={dropOver}>  bdfghbndfgnhdfgnhjfg
							</div> */}
						</div>

						{/* <Draggable
							axis="x"
							handle=".handle"
							defaultPosition={{x: 0, y: 0}}

							grid={[25, 25]}
							scale={1}
							>
							<div>
								<div className="handle">Drag from here</div>
								<div>This readme is really dragging on...</div>
							</div>
						</Draggable> */}
					</div>
				</div>
			</section>
		</>
	);
};
