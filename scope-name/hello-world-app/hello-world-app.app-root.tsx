import ReactDOM from "react-dom/client";
import { HelloWorld } from "@bit-poc/crja-scope.ui.hello-world";

export const HelloWorldApp = () => <HelloWorld />;

const root = document!.getElementById('root');
ReactDOM.createRoot(root as HTMLElement).render(<HelloWorldApp />);

