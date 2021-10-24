interface IKonsole {
  [key: string]: any;
}

enum Styles {
  LOG = "color: #FFFFFF; background-color: #8f8f8f;",
  INFO = "color: #FFFFFF; background-color: #3484e7;",
  SUCCESS = "color: #000000; background-color: #32FC38;",
  ERROR = "color: #FFFFFF; background-color: #F20505;",
  GOAL = "color: #000000; background-color: #FFFFFF; border: 2px dotted #000000;",
  POO = "color: #FCE475; background-color: #6E2717;",
  PUKE = "color: #F4FB11; background-color: #0E8516;  border: 2px dotted #F4FB11;",
  BOOM = "color: #F20505; background-color: #FFD100; border: 2px dashed #F20505;",
  LOVE = "color: #FFFBD7; background-color: #FF00D4;",
  WARN = "color: #FFFFFF; background-color: #FF9300;",
  FIRE = "color: #FFF000; background-color: #B61412;",
  BUG = "color: #FFA3FC; background-color: #8811B5; font-weight: bold; border: 1px dashed #FFA3FC",
  FETCH = "color: #FFE0FD; background-color: #6E0969; padding: 3px 5px 4px 0; font-size: 0.8rem;",
  SEND = "color: #FFFFFF; background-color: #0080FF;",
  GROUP = "color: #FFFFFF; background-color: #000000; padding: 3px 5px 4px 0; font-size: 0.8rem;",
  GROUPCOLLAPSED = "color: #FFFFFF; background-color: #000000; padding: 3px 5px 4px 0; font-size: 0.8rem;",
  ICON = "font-size: 0.9rem;",
  COMMON = `font-size: 0.65rem;
            padding: 1px 5px 2px 5px; 
            border-radius: 5px;
            margin-top: 0;`,
}

enum Icons {
  LOG = "💬",
  INFO = "🌀",
  SUCCESS = "✅",
  ERROR = "🚒",
  GOAL = "🏁",
  POO = "💩",
  PUKE = "🤮",
  BOOM = "💥",
  LOVE = "😍",
  WARN = "🚨",
  FIRE = "🔥",
  BUG = "👹",
  FETCH = "🦄",
  SEND = "🚀",
  GROUP = "📦",
  GROUPCOLLAPSED = "📦",
}

enum GenericActions {
  LOG = "💬",
  INFO = "🌀",
  SUCCESS = "✅",
  ERROR = "🚒",
  GOAL = "🏁",
  POO = "💩",
  PUKE = "🤮",
  BOOM = "💥",
  LOVE = "😍",
  WARN = "🚨",
  FIRE = "🔥",
  TIME = "⏰",
  BUG = "👹",
}

const sendToConsole = ({
  payload,
  type,
  name,
}: {
  payload: unknown;
  type: string;
  name?: string;
}): void => {
  console.log(
    `%c${Icons[type as keyof typeof Icons]}%c${type}${name ? ` ${name}` : ""}`,
    Styles.ICON,
    Styles.COMMON + Styles[type as keyof typeof Styles],
    payload
  );
};

const sendGroupToConsole = (type: string, name: string) => {
  console.group(
    `%c ${Icons[type as keyof typeof Icons]}${
      type === "FETCH" ? "FETCH: " : ""
    }${name ? `${name}` : ""}`,
    Styles.COMMON + Styles[type as keyof typeof Icons]
  );
};

const sendGroupCollapsedToConsole = (type: string, name: string) => {
  console.groupCollapsed(
    `%c ${Icons[type as keyof typeof Icons]}${name ? `${name}` : ""}`,
    Styles.COMMON + Styles[type as keyof typeof Icons]
  );
};

const Konsole: IKonsole = {};

Konsole.table = console.table;
Konsole.assert = console.assert;
Konsole.clear = console.clear;
Konsole.count = console.count;
Konsole.countReset = console.countReset;
Konsole.debug = console.debug;
Konsole.dir = console.dir;
Konsole.dirxml = console.dirxml;
Konsole.table = console.table;
Konsole.time = console.time;
Konsole.timeEnd = console.timeEnd;
Konsole.timeLog = console.timeLog;
Konsole.timeStamp = console.timeStamp;
Konsole.trace = console.trace;

// eslint-disable-next-line
Konsole.fetch = (payload: any, name: string): void => {
  sendGroupToConsole("FETCH", name);
  sendToConsole({ payload, type: "SEND" });
};

Konsole.group = (name: string): void => {
  sendGroupToConsole("GROUP", name);
};

Konsole.groupCollapsed = (name: string): void => {
  sendGroupCollapsedToConsole("GROUPCOLLAPSED", name);
};

Konsole.groupEnd = (): void => {
  console.groupEnd();
};

Object.keys(GenericActions).forEach((fn) => {
  if (Number.isNaN(Number(fn))) {
    Konsole[fn.toLowerCase()] = (payload: unknown, name?: string): void => {
      sendToConsole({ payload, type: fn, name });
    };
  }
});

export default Konsole;
