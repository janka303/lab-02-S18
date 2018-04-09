int switchState = 0;
int lastSwitchState=0;
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup() {
  
  Serial.begin(9600);
  
  pinMode(9,OUTPUT); // declare toggle switch
  pinMode(10,OUTPUT);
  pinMode(11,OUTPUT);
  pinMode(3,OUTPUT);
  pinMode(5,OUTPUT);
  pinMode(6,OUTPUT);
  
}

void loop() {
//  
  if(Serial.available()){
    
    char inByte = Serial.read();
    // light on
    if(inByte=='1'){
      
    
      digitalWrite(9, HIGH);
      digitalWrite(10, HIGH);
      digitalWrite(11, HIGH);
      digitalWrite(3, HIGH);
      digitalWrite(5, HIGH);
      digitalWrite(6, HIGH);
    }
    
    // light off
    else if(inByte=='0'){
      
      // send the color to the browser, then turn the LED off
  
      digitalWrite(9, LOW);
      digitalWrite(10, LOW);
      digitalWrite(11, LOW);
      digitalWrite(3, LOW);
      digitalWrite(5, LOW);
      digitalWrite(6, LOW);


    }
  }
}
