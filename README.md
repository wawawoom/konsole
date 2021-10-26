# Konsole

🚀 Steroïdize your web browser javascript console.

## Install

```bash
# npm
npm install @wawawoom/konsole --save
# yarn
yarn add @wawawoom/konsole
```

## Usage

```js
import k from "@wawawoom/konsole";

k.log("hello konsole! ");
```

Result:
![image](https://user-images.githubusercontent.com/2874281/138954419-5e8e4d14-b3b7-4f98-8e1a-90132c0f3a8e.png)

### Existing methods (available in console object)

```js
import k from "@wawawoom/konsole";

const payload = {
  a: "a",
  b: "b",
};

k.log(payload, "payload");
k.info(payload, "payload");
k.error(payload, "payload");
k.warn(payload, "payload");
```

Result:

![image](https://user-images.githubusercontent.com/2874281/138955954-20824008-f9d3-4774-a495-8a5433a4f043.png)

### New methods

```js
import k from "@wawawoom/konsole";

const payload = {
  a: "a",
  b: "b",
};

k.success(payload, "payload");
k.goal(payload, "payload");
k.poo(payload, "payload");
k.puke(payload, "payload");
k.boom(payload, "payload");
k.love(payload, "payload");
k.fire(payload, "payload");
k.bug(payload, "payload");
k.send(payload, "payload");
```

Result:

![image](https://user-images.githubusercontent.com/2874281/138957718-a8f134cc-3f9e-43f9-af0e-829b172755fd.png)

### Fetch and ASYNC processes

```js
import k from "@wawawoom/konsole";

try {
  const url = "http://mockbin.com/request?foo=bar&foo=baz";
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };
  k.fetch({ url, headers }, "mockbin with success");
  const get = await fetch(url, { headers });
  const response = await get.json();
  k.success(response);
  k.groupEnd();
} catch (error) {
  k.error({ error });
  k.groupEnd();
}
```

Result in case of success :

![image](https://user-images.githubusercontent.com/2874281/138958361-4f130b9c-1ee3-4f59-beb4-049df5a8a30b.png)

Result in case of error :

![image](https://user-images.githubusercontent.com/2874281/138958701-b85f1709-30f2-4e74-bccf-d0c6140e9667.png)

### Group logs

```js
import k from "@wawawoom/konsole";

const payload = {
  a: "a",
  b: "b",
};

k.group("Group logs");
k.info(payload, "> 1");
k.error(payload, "> 2");
k.groupEnd();
```

Result:

![image](https://user-images.githubusercontent.com/2874281/138956507-a2455667-a204-4e5d-ae31-c0d8ec260061.png)

### Group collapsed logs

```js
import k from "@wawawoom/konsole";

const payload = {
  a: "a",
  b: "b",
};

k.groupCollapsed("Group collapsed logs");
k.info(payload, "> 1");
k.error(payload, "> 2");
k.groupEnd();
```

Result:

![image](https://user-images.githubusercontent.com/2874281/138957035-35d279b6-6d39-4a64-b34f-fc0b4d70d547.png)

#### Other available console methods herited from console object

```js
table: (tabularData?: any, properties?: string[] | undefined) => void;
assert: (condition?: boolean | undefined, ...data: any[]) => void;
clear: () => void;
count: (label?: string | undefined) => void;
countReset: (label?: string | undefined) => void;
debug: (message?: any, ...optionalParams: any[]) => void;
dir: (item?: any, options?: any) => void;
dirxml: (...data: any[]) => void;
time: (label?: string | undefined) => void;
timeEnd: (label?: string | undefined) => void;
timeLog: (label?: string | undefined, ...data: any[]) => void;
timeStamp: (label?: string | undefined) => void;
trace: (message?: any, ...optionalParams: any[]) => void;
groupEnd: () => void;
```
