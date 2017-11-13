#define X_POT A0
#define Y_POT A1
#define CLR_BTN 7

void setup() {
  pinMode( X_POT, INPUT );
  pinMode( Y_POT, INPUT );
  pinMode( CLR_BTN, INPUT );
  
  Serial.begin( 9600 );
}

void loop() {
  Serial.print( analogRead( X_POT ) );
  Serial.print( "," );
  Serial.print( analogRead( Y_POT ) );
  Serial.print( "," );
  Serial.print( digitalRead( CLR_BTN ) );
  Serial.println();
 int potentiometerA = analogRead(A0);  // read the input pin
 int potentiometerB = analogRead(A1); 
 int mappedPot = map(potentiometerA, 0, 1023, 0, 255); // remap the pot value to fit in 1 byte
 int mappedPot2 = map(potentiometerB, 0, 1023, 0, 255);

 Serial.print(mappedPot);
 Serial.print(",");
 Serial.println(mappedPot2);
 delay(500);                                            // slight delay to stabilize the ADC
}
