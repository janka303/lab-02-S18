
int Pin5 = 5;       // Led 1
int Pin3 = 3;       // Led 5 
int Pin9 = 9;       // Led 2
int Pin10 = 10;       // Led 3
int Pin11 = 11;       // Led 4      (the 'wave' goes Led: 1-2-3-4-5)

int Value5 = 0;    //Value Led1
int Value3 = 0;    //Value Led5
int Value9 = 0;    //Value Led2
int Value10 = 0;    //Value Led3
int Value11 = 0;    //Value Led4
        
int analog0Pin = 0;      // button to start wave
int val0 = 0;             // variable to store the value read

int threshold = 512;     // threshold for button
int timer = 100;

void setup()  
{
 
 pinMode(analog0Pin, INPUT);
 pinMode(Pin5, OUTPUT);   // sets the digital pin as output
 pinMode(Pin3, OUTPUT);   // sets the digital pin as output
 pinMode(Pin9, OUTPUT);   // sets the digital pin as output
 pinMode(Pin10, OUTPUT);   // sets the digital pin as output
 pinMode(Pin11, OUTPUT);   // sets the digital pin as output      
 
 Serial.begin(9600);          //  setup serial

}


void loop()
{ 
 val0 = analogRead(analog0Pin);    // read the input pin for button
 Serial.println(val0);             // debug value

if (val0 >= threshold)                // 

{ 
 for(Value5 = 0 ; Value5 <= 255; Value5+=5) // fade in (from min to max) Led 1
 { 
   analogWrite(Pin5, Value5);           // sets the value (range from 0 to 255) 
   delay(30);                            // waits for 30 milli seconds to see the dimming effect 
 } 
 for(Value5 = 255; Value5 >=0; Value5-=5)   // fade out (from max to min) 
 { 
   analogWrite(Pin5, Value5); 
   delay(30); 
     } 
 
 
  if (Value5 = 255)                //

{ 
 for(Value9 = 0 ; Value9 <= 255; Value9+=5) // fade in (from min to max) Led 2
 { 
   analogWrite(Pin9, Value9);           // sets the value (range from 0 to 255) 
   delay(30);                            // waits for 30 milli seconds to see the dimming effect 
 } 
 for(Value9 = 255; Value9 >=0; Value9-=5)   // fade out (from max to min) 
 { 
   analogWrite(Pin9, Value9); 
   delay(30); 
     } 
 
     
     if (Value9 = 255)                // 

{ 
 for(Value10 = 0 ; Value10 <= 255; Value10+=5) // fade in (from min to max) Led 3
 { 
   analogWrite(Pin10, Value10);           // sets the value (range from 0 to 255) 
   delay(30);                            // waits for 30 milli seconds to see the dimming effect 
 } 
 for(Value10 = 255; Value10 >=0; Value10-=5)   // fade out (from max to min) 
 { 
   analogWrite(Pin10, Value10); 
   delay(30); 
     } 
 
}

     if (Value10 = 255)                // 

{ 
 for(Value11 = 0 ; Value11 <= 255; Value11+=5) // fade in (from min to max) Led 4
 { 
   analogWrite(Pin11, Value11);           // sets the value (range from 0 to 255) 
   delay(30);                            // waits for 30 milli seconds to see the dimming effect 
 } 
 for(Value11 = 255; Value11 >=0; Value11-=5)   // fade out (from max to min) 
 { 
   analogWrite(Pin11, Value11); 
   delay(30); 
     } 
 
}

      if (Value11 = 255)                // 

{ 
 for(Value3 = 0 ; Value3 <= 255; Value3+=5) // fade in (from min to max) Led 5
 { 
   analogWrite(Pin3, Value3);           // sets the value (range from 0 to 255) 
   delay(30);                            // waits for 30 milli seconds to see the dimming effect 
 } 
 for(Value3 = 255; Value3 >=0; Value3-=5)   // fade out (from max to min) 
 { 
   analogWrite(Pin3, Value3); 
   delay(30); 
       } 
 
     }

   }

 }
 
}




