import { BorderDecorator } from "./BorderDecorator";
import { ScrollDecorator } from "./ScrollDecorator";
import { TextView } from "./TextView";
import { Window } from "./Window";

const window = new Window();
const textView = new TextView();

window.setContents(new BorderDecorator(new ScrollDecorator(textView), 1));
