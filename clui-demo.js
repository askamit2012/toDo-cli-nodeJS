import clui from "clui";
import clc from "cli-color";

function cluiDemo() {
  let Line = clui.Line,
    LineBuffer = clui.LineBuffer;

  var outputBuffer = new LineBuffer({
    x: 0,
    y: 0,
    width: "console",
    height: "console",
  });

  var message = new Line(outputBuffer)
    .column("Title Placehole", 20, [clc.green])
    .fill()
    .store();

  var blankLine = new Line(outputBuffer).fill().store();

  outputBuffer.output();
}

export default cluiDemo;
