/* @refresh reload */
import { render } from "solid-js/web";

import "./app/index.css";
import App from "./app/App";

render(() => <App />, document.getElementById("root") as HTMLElement);
