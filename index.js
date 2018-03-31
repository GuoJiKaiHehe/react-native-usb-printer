import React, { NativeModules } from 'react-native';



var RNPrinter = NativeModules.RNPrinter;

var getUSBDeviceList = () => RNPrinter.getUSBDeviceList();

var connectPrinter = (vendorId, productId) => RNPrinter.connectPrinter(vendorId, productId);

var print = (buffer) => {

  RNPrinter.printRawData(buffer.toString("base64"))
}

var closeConn = () => RNPrinter.closeConn();


export const RNUSBPrinter = {
  getUSBDeviceList,
  connectPrinter,
  print,
  closeConn
}