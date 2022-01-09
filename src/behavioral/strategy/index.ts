import ArrayCompositor from "./ArrayCompositor";
import Composition from "./Composition";
import SimpleCompositor from "./SimpleCompositor";
import TeXCompositor from "./TeXCompositor";

const quick = new Composition(new SimpleCompositor())
const slick = new Composition(new TeXCompositor())
const iconic = new Composition(new ArrayCompositor())