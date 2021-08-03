import axios from "axios";

// export default function getAllData() {
//     const data = axios.get(`../../assets/mock/data.json`).then((res) => {
//         debugger
//         return res.data
//     })
//     if (data) {
//         return Promise.resolve(data)
//     }
//     return Promise.reject([])
// }


export const videoData = {
  "id":"b649b7ad4baf4b6ab6a74fde944a98e5",
  "media":{
     "026682824efe32071a550c985c3b20e6":{
        "trim":[
           0.0,
           26.68
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/026682824efe32071a550c985c3b20e6/streams/19a26e60a52f5efd2f2ebf6d03c2a478/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":26.68,
        "uploader":"Franklin",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/026682824efe32071a550c985c3b20e6/streams/49fc473761c30051ad0922e56156c91b/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":true
     },
     "0044ef575a944ea89174f2f4d913d649":{
      "img":"https://ucarecdn.com/e73a947a-fac8-4ddc-ac8a-ce5460b1c6db~48/nth/41/",
      "trim":[
      0.0,
      4.0
      ],
      "type":"img",
      "filter":"FILTER_NONE",
      "volume":1,
      "duration":4.0,
      "uploader":"",
      "textFields":[
      ],
      "transition":"DOORWAY",
      "rotationIndex":0,
      "muteBackgroundMusic":false
      },
     "0b4e853d462308c6bdc25f47fd951aad":{
        "trim":[
           0.5623058823529413,
           17.07
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/0b4e853d462308c6bdc25f47fd951aad/streams/fdeb0c13120077448d65fc84736f4978/video.mp4",
        "filter":"FILTER_NONE",
        "volume":0.5,
        "duration":17.07,
        "uploader":"Heriberto Rosas Rossy",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/0b4e853d462308c6bdc25f47fd951aad/streams/7afdb96fb459fd89f8a491b08059b564/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "0bc222f21c1bab40f0da0be710c2d093":{
        "trim":[
           0.0,
           53.2
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/0bc222f21c1bab40f0da0be710c2d093/streams/71f9e550c8b0e3a2ab97b922fc2ec526/video.mp4",
        "filter":"FILTER_NONE",
        "volume":0,
        "duration":53.2,
        "uploader":"Andrew, Jasmin, and gab",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/0bc222f21c1bab40f0da0be710c2d093/streams/988f786499f9e533ac4b673eb41e88e3/video.mp4",
        "textFields":[
           
        ],
        "transition":"SWAP",
        "rotationIndex":0,
        "muteBackgroundMusic":true
     },
     "0f0061d922b86d6f8784ee3dec1c9bf2":{
        "trim":[
           0.0,
           95.95783529411763
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/0f0061d922b86d6f8784ee3dec1c9bf2/streams/23934a08e732df5ddd94053785f2f650/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":96.64,
        "uploader":"Pam",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/0f0061d922b86d6f8784ee3dec1c9bf2/streams/934e9415cdaccb142c5caf0fa240c01b/video.mp4",
        "textFields":[
           
        ],
        "transition":"SWAP",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "1354dd56754a7a8d58ddf4ecc259e022":{
        "trim":[
           0.0,
           118.72
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/1354dd56754a7a8d58ddf4ecc259e022/streams/802d89023a9bf1f4aebd1c1de2755c15/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1.0,
        "duration":118.72,
        "uploader":"Howard & Loreen",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/1354dd56754a7a8d58ddf4ecc259e022/streams/d3f9d535fd6ea19098dcb1c05edeee9b/video.mp4",
        "textFields":[
           
        ],
        "transition":"fade",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "22a9335d7287b3e40e84742d67241c38":{
        "trim":[
           0.0,
           83.44
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/22a9335d7287b3e40e84742d67241c38/streams/2ca9584cc5f2185050d034592676bc7a/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":83.44,
        "uploader":"david",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/22a9335d7287b3e40e84742d67241c38/streams/670da8ff4696f34521fca81cd85b6b16/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "28c8024e173386d5ca08f175c2b875cb":{
        "trim":[
           0.0,
           21.76
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/28c8024e173386d5ca08f175c2b875cb/streams/57f20785208bf21ef13f7f793eabf518/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":21.76,
        "uploader":"Dale",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/28c8024e173386d5ca08f175c2b875cb/streams/403bf5604d42a3157857d97ede6d0516/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":true
     },
     "4f3803a4d830f2d5f1d48dfec517c1df":{
        "trim":[
           0.37251764705882345,
           79.16
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/4f3803a4d830f2d5f1d48dfec517c1df/streams/b94fb4eb181815db45361d93c4396f16/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":79.16,
        "uploader":"Ernie Dobson",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/4f3803a4d830f2d5f1d48dfec517c1df/streams/6abafda47a3ad10bac58b5290b8ba332/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "50db86f4c2cadd5047aba13a3f4ea5e4":{
        "trim":[
           0.0,
           136.4
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/50db86f4c2cadd5047aba13a3f4ea5e4/streams/8f5d71b0038d4d6b3427885b07e66929/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":136.4,
        "uploader":"Madeline Crosby",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/50db86f4c2cadd5047aba13a3f4ea5e4/streams/48948a5befbec839bbbd8eef96b3a722/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "620806e84bccb28f802d2aa876569b9c":{
        "trim":[
           0.0,
           77.64028235294117
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/620806e84bccb28f802d2aa876569b9c/streams/7570ed093a1848ea4440815afa652e0a/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":79.32,
        "uploader":"Victor",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/620806e84bccb28f802d2aa876569b9c/streams/95e59dee60c41506f732e47512d28394/video.mp4",
        "textFields":[
           
        ],
        "transition":"DIRECTIONAL_WIPE",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "7c6a852cf7de761947d87177b3bbd8ed":{
        "trim":[
           0.6769176470588235,
           22.13
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/7c6a852cf7de761947d87177b3bbd8ed/streams/68f03afec27604f8d9583393e3384f40/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":22.13,
        "uploader":"Martha",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/7c6a852cf7de761947d87177b3bbd8ed/streams/848cf6f14bb44da0fdd1ce52c3bc2ea9/video.mp4",
        "textFields":[
           
        ],
        "transition":"Slide",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "8160b3ccbdb660ae6fb82fa5f0fdeb8f":{
        "trim":[
           0.0,
           1.8
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/8160b3ccbdb660ae6fb82fa5f0fdeb8f/streams/919218fa848a03bfd11d7297ed027ce2/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":1.8,
        "uploader":"Kathy Hanson",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/8160b3ccbdb660ae6fb82fa5f0fdeb8f/streams/0f9d24c11b1f6f96cc37a5037e988dbd/video.mp4",
        "textFields":[
           
        ],
        "transition":"",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "8bb6dd1fdd424f94e06e7353c237244b":{
        "trim":[
           1.2663529411764705,
           23.4
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/8bb6dd1fdd424f94e06e7353c237244b/streams/0e1036f885c95229ace0aacc7df5321e/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":23.4,
        "uploader":"Steve Boman",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/8bb6dd1fdd424f94e06e7353c237244b/streams/3699c672086d9b0d3d377e04c4657188/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUBE",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "9a8ada80360e96349adc7100a0401a89":{
        "trim":[
           0.0,
           39.96
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/9a8ada80360e96349adc7100a0401a89/streams/9ac4eca2a0f52e15dc3053e99ce3987b/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":39.96,
        "uploader":"Madeline Crosby",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/9a8ada80360e96349adc7100a0401a89/streams/e2639fb90e45f2d9e3737bf66071e2b5/video.mp4",
        "textFields":[
           
        ],
        "transition":"fade",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "9fc6d110fa0cee4ba6a8557dc252feaf":{
        "trim":[
           0.0,
           45.12
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/9fc6d110fa0cee4ba6a8557dc252feaf/streams/a93364b7ead7d43a65dd3c935b48c529/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":45.12,
        "uploader":"Gordon Newman",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/9fc6d110fa0cee4ba6a8557dc252feaf/streams/7e6fd891d2ce6b5bf6fc648ea5d58b6a/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "a7a6f874a909ea4c90fa017e514a078c":{
        "trim":[
           0.0,
           35.97
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/a7a6f874a909ea4c90fa017e514a078c/streams/16d34e6df4c25839f993a8f660b12f15/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":35.97,
        "uploader":"Mary",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/a7a6f874a909ea4c90fa017e514a078c/streams/4527494cc46fc95133ad862e18d47aa4/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUBE",
        "rotationIndex":0,
        "muteBackgroundMusic":true
     },
     "b063650c2701b8cb4086676339d8d3e8":{
        "trim":[
           0.0,
           8.48
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/b063650c2701b8cb4086676339d8d3e8/streams/c7414a40c6e09b7cc4f196b1f261f624/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":8.48,
        "uploader":"Cynthia Rogers",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/b063650c2701b8cb4086676339d8d3e8/streams/c8596e2c51bd9438b2fdc2318138c355/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "bad42177043b8746b04e49009f021106":{
        "trim":[
           0.0,
           58.8
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/bad42177043b8746b04e49009f021106/streams/aad0633efeaabe389ef849ee219c8e20/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":58.8,
        "uploader":"Sean",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/bad42177043b8746b04e49009f021106/streams/c0089bc1a816f2926171765be448c00e/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":true
     },
     "bd15ad08aaab95cc10865abf0bd435d7":{
        "trim":[
           0.2567529411764706,
           109.12
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/bd15ad08aaab95cc10865abf0bd435d7/streams/a06ca3e01ed28670b12be2a9f67d7b6c/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":109.12,
        "uploader":"Wade Nelson",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/bd15ad08aaab95cc10865abf0bd435d7/streams/d0da266051fdafda7555b834cc9d46d7/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUBE",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "c4e2c2bd351df77e33248d13516ad609":{
        "trim":[
           0.0,
           39.96
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/c4e2c2bd351df77e33248d13516ad609/streams/4137343115c5330ca49a0bd2a3bee980/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":39.96,
        "uploader":"Madeline Crosby",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/c4e2c2bd351df77e33248d13516ad609/streams/695ad375fc7a0c6dfbce6265649a6b79/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "c9b34c46a925e06e0dbbcde5cd438428":{
        "trim":[
           0.0,
           14.08
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/c9b34c46a925e06e0dbbcde5cd438428/streams/fe310866010c88fe757604b70ebf7871/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":14.08,
        "uploader":"Madeline Crosby",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/c9b34c46a925e06e0dbbcde5cd438428/streams/4555079467727d37383fdb1147f0572f/video.mp4",
        "textFields":[
           
        ],
        "transition":"Slide",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "d01a9094bd0d07b38bcb54eaaad031ef":{
        "trim":[
           0.0,
           24.36
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/d01a9094bd0d07b38bcb54eaaad031ef/streams/18259fe4d217a58c6a23fc3504a6909f/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":24.36,
        "uploader":"Kathy Hanson",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/d01a9094bd0d07b38bcb54eaaad031ef/streams/490bee2505a448bb5c13d09435b75630/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "d6db1b99132d6d1dc9466984971c4580":{
        "trim":[
           0.0,
           140.52
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/d6db1b99132d6d1dc9466984971c4580/streams/e202081e4fd5e2292a8c81863133c54d/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":140.52,
        "uploader":"Terrie",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/d6db1b99132d6d1dc9466984971c4580/streams/47ed668a7c2954434ac093fa424d9d00/video.mp4",
        "textFields":[
           
        ],
        "transition":"SWAP",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "d92ab48009f26efde6d99dfd1963513b":{
        "trim":[
           0.0,
           66.28
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/d92ab48009f26efde6d99dfd1963513b/streams/6bb92ac9bf9820b38b5c062d5dd56b0e/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":66.28,
        "uploader":"Elizabeth Oh",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/d92ab48009f26efde6d99dfd1963513b/streams/165c7e7543d87188a41b80beb2a98200/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "e0e2dd3428bb813767387040620be76c":{
        "trim":[
           0.0,
           53.76
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/e0e2dd3428bb813767387040620be76c/streams/87034e8ffc49ba9a9888590c3abb3439/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":53.76,
        "uploader":"Christine",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/e0e2dd3428bb813767387040620be76c/streams/87034e8ffc49ba9a9888590c3abb3439/video.mp4",
        "textFields":[
           
        ],
        "transition":"fade",
        "rotationIndex":0,
        "muteBackgroundMusic":true
     },
     "ed6319b8144dd234a888ea43d42dc388":{
        "trim":[
           0.0,
           118.72
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/ed6319b8144dd234a888ea43d42dc388/streams/fdb09c8aa7e1f77f48f19c21ae5f5e74/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1.0,
        "duration":118.72,
        "uploader":"Madeline Crosby",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/ed6319b8144dd234a888ea43d42dc388/streams/64b40591caa4518bcee725e454306686/video.mp4",
        "textFields":[
           
        ],
        "transition":"fade",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "fc469e1d2dbde6c80c188351624d8d09":{
        "trim":[
           0.0,
           77.6
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/fc469e1d2dbde6c80c188351624d8d09/streams/133b52e6ffe04e76f6b379eca1b35682/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":77.6,
        "uploader":"Claire & Rosa",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/fc469e1d2dbde6c80c188351624d8d09/streams/826886617b3e32b53cee17a6f6c93b15/video.mp4",
        "textFields":[
           
        ],
        "transition":"CUT",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     },
     "fe395dc4a9d41e5d2eb6f02ad9665a60":{
        "trim":[
           1.759623529411765,
           62.32
        ],
        "type":"video",
        "video":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/fe395dc4a9d41e5d2eb6f02ad9665a60/streams/ae6088773f607f8f662f083ff09ed423/video.mp4",
        "filter":"FILTER_NONE",
        "volume":1,
        "duration":62.32,
        "uploader":"Clark Artaud",
        "video_hq":"https://embed-cdn.ziggeo.com/v1/applications/1ba8a37405fcde5d4c7195dd4d21e0fe/videos/fe395dc4a9d41e5d2eb6f02ad9665a60/streams/74e74738dd425588181d0fb407f67d85/video.mp4",
        "textFields":[
           
        ],
        "transition":"Slide",
        "rotationIndex":0,
        "muteBackgroundMusic":false
     }
  },
  "config":{
     "applyKenburns":false,
     "pauseMusicOnVideo":false,
     "viginetteByDefault":false,
     "backgroundMusicVolume":0.01,
     "staticBackgroundMusicVolume":0.5
  },
  "tracks":[
     {
        "id":"df22d138-4b0b-4717-b3bc-46c1f65b9bab",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/205_full_clap-tap_0102.mp3",
        "blob":"blob:https://www.tribute.co/9c52b703-17c0-4fff-987f-032cc430706a",
        "start":0,
        "title":"Clap Tap",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":101.093878,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":101.093878
     },
     {
        "id":"2728d2c8-e20d-40c5-858e-f9156b5cba38",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/184_full_good-people_0151.mp3",
        "blob":"blob:https://www.tribute.co/a4adc4eb-0093-4c4d-968d-2306d75f30de",
        "start":0,
        "title":"Good People",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":150.386939,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":150.386939
     },
     {
        "id":"82cdb488-b887-4ffd-90df-a8d4112a7c83",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/57_full_human-evolution_0178.mp3",
        "blob":"blob:https://www.tribute.co/169dc2fe-ba2a-4a20-bcfc-e42103a6b17e",
        "start":0,
        "title":"Human Evolution",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":177.81551,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":177.81551
     },
     {
        "id":"294f8971-2e9f-4a8e-98ba-d85c457794cc",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/12_full_working-solutions_0145.mp3",
        "blob":"blob:https://www.tribute.co/d270ec2a-173a-4ec5-a34d-012ccb8bddae",
        "start":0,
        "title":"Working Solutions",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":144.457143,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":144.457143
     },
     {
        "id":"60cae607-1bba-4176-9d9a-065eefd47b35",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/212_full_hello-sunshine_0191.mp3",
        "blob":"blob:https://www.tribute.co/32a0ec92-c374-42df-8340-8be3676b8fad",
        "start":0,
        "title":"Hello Sunshine",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":190.119184,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":190.119184
     },
     {
        "id":"75be1a30-b360-4e83-9c3c-f97b89efb75b",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/Spring_In_My_Step_128k.mp3",
        "blob":"blob:https://www.tribute.co/79234651-8204-4635-a227-8d9ce93df79b",
        "start":0,
        "title":"Spring In My Step",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":118.75265,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":118.75265
     },
     {
        "id":"33054e81-885c-40d4-8fa9-4f8fdc7c4a58",
        "end":0,
        "src":"https://storage.googleapis.com/tribute-music-prod/Sleepy_Jake_128k.mp3",
        "blob":"blob:https://www.tribute.co/17f8b6fd-77d2-41c6-a3d4-8f00b01ab0cb",
        "start":0,
        "title":"Sleepy Jake",
        "volume":1,
        "trackId":null,
        "audioTag":null,
        "duration":97.854675,
        "progress":0,
        "widthUnits":[
           
        ],
        "startOffset":0,
        "waveformUrl":null,
        "originalDuration":97.854675
     }
  ],
  "pending":[
     
  ],
  "restore":[
     "9a8ada80360e96349adc7100a0401a89"
  ],
  "version":99,
  "playlist":[
     "c9b34c46a925e06e0dbbcde5cd438428",
     "bd15ad08aaab95cc10865abf0bd435d7",
     "0b4e853d462308c6bdc25f47fd951aad",
     "28c8024e173386d5ca08f175c2b875cb",
     "fe395dc4a9d41e5d2eb6f02ad9665a60",
     "a7a6f874a909ea4c90fa017e514a078c",
     "4f3803a4d830f2d5f1d48dfec517c1df",
     "d92ab48009f26efde6d99dfd1963513b",
     "9fc6d110fa0cee4ba6a8557dc252feaf",
     "22a9335d7287b3e40e84742d67241c38",
     "0f0061d922b86d6f8784ee3dec1c9bf2",
     "7c6a852cf7de761947d87177b3bbd8ed",
     "d6db1b99132d6d1dc9466984971c4580",
     "620806e84bccb28f802d2aa876569b9c",
     "bad42177043b8746b04e49009f021106",
     "50db86f4c2cadd5047aba13a3f4ea5e4",
     "d01a9094bd0d07b38bcb54eaaad031ef",
     "8bb6dd1fdd424f94e06e7353c237244b",
     "c4e2c2bd351df77e33248d13516ad609",
     "fc469e1d2dbde6c80c188351624d8d09",
     "b063650c2701b8cb4086676339d8d3e8",
     "026682824efe32071a550c985c3b20e6",
     "0bc222f21c1bab40f0da0be710c2d093",
     "e0e2dd3428bb813767387040620be76c",
     "8160b3ccbdb660ae6fb82fa5f0fdeb8f",
     "1354dd56754a7a8d58ddf4ecc259e022",
     "ed6319b8144dd234a888ea43d42dc388"
  ]
}