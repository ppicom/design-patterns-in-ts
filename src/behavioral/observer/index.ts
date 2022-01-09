import AnalogClock from "./AnalogClock";
import ClockTimer from "./ClockTimer";
import DigitalClock from "./DigitalClock";

// whenerver timer ticks, both clocks will be updated
const timer = new ClockTimer()
const digital = new DigitalClock(timer)
const analog = new AnalogClock(timer)