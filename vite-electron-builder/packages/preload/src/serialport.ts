import serialport from "serialport";
export async function list() {
  return await serialport.list();
}
