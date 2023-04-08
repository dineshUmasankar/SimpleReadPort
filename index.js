import { ReadlineParser, SerialPort } from "serialport";

const Readline = new ReadlineParser({ delimiter: "\r\n" });
const port = new SerialPort({ path: "COM5", baudRate: 9600, parser: Readline });

port.on("open", () => {
    console.log("Port is open!");
});

port.on("close", () => {
    console.log("Port is closed!");
});

const inputStream = port.pipe(Readline);

inputStream.on("data", (data) => {
    console.log(data);
});