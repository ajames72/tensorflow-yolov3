import React from 'react';
import '../../style/app/app.scss';
import TinyYoloV3 from '../tinyYoloV3';

const App = () => (
    <div>
      <h1>Tiny-YOLOv3 using TensorFlow.js</h1>
      <div>https://www.npmjs.com/package/tfjs-tiny-yolov3</div>
      <TinyYoloV3 />
    </div>
);

export default App;
