int mode = 0;       // For Storing the command
int tempMode = 0;
String s="";
char tele[25];
void setup() {
  // put your setup code here, to run once:
  /*
   1 - Telemetry ON
   2 - Telemetry OFF
   3 - Sets Mission Time
   4 - Triggers Container to Polled tethered Payload telemetry data
   5 - Turns OFF Polling
   6 - Enable Simulation mode
   7 - Disable Simulation Mode
   9 - Provide Simulation Mode data
   */
   pinMode(LED_BUILTIN, OUTPUT);
   Serial.begin(9600);
}
void loop() {
  // put your main code here, to run repeatedly:
//s="Devang";

  if(Serial.available()>0)
  {
       s=Serial.readString();
      Serial.println(s);
//    Serial.print(Serial.readString());
//      s=Serial.readString();
//      s="Devang";
//      Serial.println(s);
      // if( mode == 0)
      // {
      //   digitalWrite(LED_BUILTIN, HIGH);
      //   mode = 1;
      // } else {
      //   digitalWrite(LED_BUILTIN, LOW);
      //   mode = 0;
      // }
  }
}