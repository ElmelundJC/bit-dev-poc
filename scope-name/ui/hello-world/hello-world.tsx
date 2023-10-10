import { getHelloWorld } from "@bit-poc/crja-scope.get-hello-world";

/**
 * renders a "hello world" message
 */

export function HelloWorld() {
    return <div>{getHelloWorld()}</div>;
}

