# t-react

a react hook to effortlessly implement `t`

<a href="#installation">Installation</a>

<a href="#initialization">Initialization</a>

<a href="#usage">Usage</a>

## Installation

To install, use npm or yarn.

```bash
npm install t-react
```

## Initialization

To initialize, you must pass in `useTProps`,

```ts
import { useT } from "t-react";

const [t, lang] = useT({
  appName: string
  lang: string,
  formatter: Formatter,
  fetchTranslations: (FetchTranslationFunctionProps) =>
    Promise<TranslationObject>
});
```

Alternately, in the case of an SDK or an external init function, you can pass it as the init prop and the options will be passed into the init function. In the following function we use an SDKInit in order to make the fetch and formatter consistant across apps, while still allowing the individual apps to retrieve their correct translations.

```ts
import { useT } from "t-react";

/** supplied by SDK for consistency */
const formatter: Formatter = (value: string, format: string) => {
  if (format === "uppercase") {
    return value.toUpperCase();
  }

  return value;
};

/** supplied by SDK for consistency and use of secrets */
const fetchTranslations = ({ appName, lang }: FetchTranslationFunctionProps) : Promise<TranslationObject> =>
  fetch(`http://assets.knoblau.ch/${appName}.${lang}.json`).then(res =>
    res.json()
  );

const SDKInit = (props: Partial<TranslationContructorProps>) => {
  const t = new T({
    ...props,
    fetchTranslations,
    formatter
  });

  return t;
};

const [t, lang] = useT({
  appName: "example-app",
  lang: "en",
  init: SDKInit
});
```


## Usage

Once you have `useT` initialized, you can just use the `t` function asd you would normally ([see the usage here](https://github.bus.zalan.do/ephemerals/t#usage)).
