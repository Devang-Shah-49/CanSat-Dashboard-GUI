/* Container: TEAM_ID, MISSION_TIME, PACKET_COUNT, PACKET_TYPE, MODE,TP_RELEASED, ALTITUDE, 
              TEMP, VOLTAGE, GPS_TIME, GPS_LATITUDE,GPS_LONGITUDE, GPS_ALTITUDE, GPS_SATS, 
              SOFTWARE_STATE, CMD_ECHO 
   Payload:   TEAM_ID, MISSION_TIME, PACKET_COUNT, PACKET_TYPE, TP_ALTITUDE,
              TP_TEMP, TP_VOLTAGE, GYRO_R, GYRO_P, GYRO_Y, ACCEL_P, ACCEL_P,
              ACCEL_Y, MAG_R, MAG_P, MAG_Y, POINTING_ERROR, TP_SOFTWARE_STATE
*/

//#include <string.h>

String command = "";
int temp = 0;
int mission_time = 0;
float mission_time_tp = 0;
int packet_count = 1;
char Packet_Type[5] = "CTX"; // Container = 0 ; Tethered_payload = 1;
char Mode = 'F'; // default F
char Tp_Realeased = 'N'; // default No
float Altitude = 0;
float Temperature = 0;
float Voltage = 0;
int Gps_Time = 0; //  in Seconds will have to do in utc
int Gps_Lat = 0;
int Gps_Lon = 0;
float Gps_Alt = 0;
int Gps_Sat = 5; 
int Software_State = 0;
String Cmd_Echo = "A"; // default

int Tp_packet = 0;
int Tp_Altitude = 0;
int Tp_Temp = 0;
int Tp_Voltage = 0;
int Tp_gyro_r = 0;
int Tp_gyro_p = 0;
int Tp_gyro_y = 0;
int Tp_accel_r = 0;
int Tp_accel_p = 0;
int Tp_accel_y = 0;
int Tp_mag_r = 0;
int Tp_mag_p = 0;
int Tp_mag_y = 0;
int Tp_pt_error = 0;
int Tp_Software_State = 0;

void Container_telemetry();
void Tethered_payload_telemetry();

void setup() {
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

//String commandWrite(command) {
//    if(command == "1")
//      return "CX,ON";
//    else if(command == "2")
//      return "CX,OFF";
//    else if(command == "3")
//      return "CX,13:10:50";
//    else if(command == "4")
//      return "TPX,ON";
//    else if(command == "5")
//      return "TPX,OFF";
//    else if(command == "6")
//      return "SIM,ENABLE";
//    else if(command == "7")
//      return "SIM,ACTIVATE";
//    else if(command == "8")
//      return "SIM,DISABLE";
//    else if(command == "9")
//      return "SIMP,101325";
//}

void loop() 
{  
  // Container_telemetry();
  // Tethered_payload_telemetry();
  // Tethered_payload_telemetry();
  // Tethered_payload_telemetry();
  // Tethered_payload_telemetry();
  // Serial.println("OPOPOPOPOPOPOPOP");
  // mission_time++;
//   if(Serial.available() > 0) {
//     command = Serial.readString();
// //    Serial.println(command);
// //    Cmd_Echo = command;
// //    Cmd_Echo = commandWrite(command);
//     if(command == "1")
//       Cmd_Echo = "CX_ON";
//     else if(command == "2")
//       Cmd_Echo = "CX_OFF";
//     else if(command.charAt(0) == '3')
//       Cmd_Echo = "ST_" + command.substring(2);
//     else if(command == "4")
//       Cmd_Echo = "TPX_ON";
//     else if(command == "5")
//       Cmd_Echo = "TPX_OFF";
//     else if(command == "6")
//       Cmd_Echo = "SIM_ENABLE";
//     else if(command == "7")
//       Cmd_Echo = "SIM_ACTIVATE";
//     else if(command == "8")
//       Cmd_Echo = "SIM_DISABLE";
//     else if(command.charAt(0) == '9')
//       Cmd_Echo = "SIMP_" + command.substring(2);
//   }
  // delay(1000);
}

void Container_telemetry()
{
  Altitude = random(100, 60000)/100.00;
  Temperature = random(2500, 3800)/100.00;
  Voltage = random(50, 80)/10.0;
  Gps_Time = mission_time;
  Gps_Lat = random(60000,80000)/1000.00;
  Gps_Lon = random(10000,30000)/1000.00;
  Gps_Alt = Altitude;
  Software_State = random(1, 8);
  char buffer1 [50];
  sprintf(buffer1, "%d,%d,%d,%c,%c,%c", 1004, mission_time, packet_count, Packet_Type[0], Mode, Tp_Realeased);
  Serial.print(buffer1);
  Serial.print(",");
  Serial.print(Altitude);
  Serial.print(",");
  Serial.print(Temperature);
  Serial.print(",");
  Serial.print(Voltage);
  Serial.print(",");
  Serial.print(Gps_Time);
  Serial.print(",");
  Serial.print(Gps_Lat);
  Serial.print(",");
  Serial.print(Gps_Lon);
  Serial.print(",");
  Serial.print(Gps_Alt);
  Serial.print(",");
  Serial.print(Gps_Sat);
  Serial.print(",");
  Serial.print(Software_State);
  Serial.print(",");
  Serial.println(Cmd_Echo);
  packet_count++;  
}

void Tethered_payload_telemetry()
{
  Tp_Altitude = random(500, 60000)/100.00;
  Tp_Temp = random(2500, 3800)/100.00;
  Tp_Voltage = random(500,800)/100.00;
  Tp_gyro_r = random(100,9000)/100.00;
  Tp_gyro_p = random(100,9000)/100.00;
  Tp_gyro_y = random(100,9000)/100.00;
  Tp_accel_r = random(100,9000)/100.00;
  Tp_accel_p = random(100,9000)/100.00;
  Tp_accel_y = random(100,9000)/100.00;
  Tp_mag_r = random(100,9000)/100.00;
  Tp_mag_p = random(100,9000)/100.00;
  Tp_mag_y = random(100,9000)/100.00;
  Tp_pt_error = random(-2000,2000)/100.00;
  Tp_Software_State = random(1, 8);

  char buffer2[150];
  sprintf(buffer2, "%d,%d,%d,T", 6004, mission_time_tp, Tp_packet);
  Serial.print(buffer2);
  Serial.print(",");
  Serial.print(Tp_Altitude);
  Serial.print(",");
  Serial.print(Tp_Temp);
  Serial.print(",");
  Serial.print(Tp_Voltage);
  Serial.print(",");
  Serial.print(Tp_gyro_r);
  Serial.print(",");
  Serial.print(Tp_gyro_p);
  Serial.print(",");
  Serial.print(Tp_gyro_y);
  Serial.print(",");
  Serial.print(Tp_accel_r);
  Serial.print(",");
  Serial.print(Tp_accel_p);
  Serial.print(",");
  Serial.print(Tp_accel_y);
  Serial.print(",");
  Serial.print(Tp_mag_r);
  Serial.print(",");
  Serial.print(Tp_mag_p);
  Serial.print(",");
  Serial.print(Tp_mag_y);
  Serial.print(",");
  Serial.print(Tp_pt_error);
  Serial.print(",");
  Serial.println(Tp_Software_State);
  
  Tp_packet++;
}