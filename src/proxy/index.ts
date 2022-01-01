import ImageProxy from "./ImageProxy";
import { TextDocument } from "./TextDocument";

const text = new TextDocument();

text.insert(new ImageProxy("an_image_file_name"));
