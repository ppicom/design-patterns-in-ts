import { Application } from "./Application";
import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { Topic } from "./Topic";

const application = new Application(Topic.APPLICATION_TOPIC);
const dialog = new Dialog(application, Topic.PRINT_TOPIC);
const button = new Button(dialog, Topic.PAPER_ORIENTATION_TOPIC);

button.handleHelp();
