import serial;

serialPort = serial.Serial(port='COM5', baudrate=9600)
size = 7

while 1: 
    data = serialPort.readline(size)

    if data:
        string = data.decode('utf-8')
        if (string.__contains__("\r\n")):
            string = string.replace("\r\n", "")
        else:
            print(string)