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

interface IKonsole {
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
  log: (payload: any, name?: string) => void;
  info: (payload: any, name?: string) => void;
  error: (payload: any, name?: string) => void;
  warn: (payload: any, name?: string) => void;
  group: (name?: string) => void;
  groupCollapsed: (name?: string) => void;
  success: (payload: any, name?: string) => void;
  goal: (payload: any, name?: string) => void;
  poo: (payload: any, name?: string) => void;
  puke: (payload: any, name?: string) => void;
  boom: (payload: any, name?: string) => void;
  love: (payload: any, name?: string) => void;
  fire: (payload: any, name?: string) => void;
  bug: (payload: any, name?: string) => void;
  send: (payload: any, name?: string) => void;
  fetch: (payload: any, name?: string) => void;
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

const sendGroupToConsole = (type: string, name?: string) => {
  console.group(
    `%c ${Icons[type as keyof typeof Icons]}${
      type === "FETCH" ? "FETCH: " : ""
    }${name ? `${name}` : ""}`,
    Styles.COMMON + Styles[type as keyof typeof Icons]
  );
};

const sendGroupCollapsedToConsole = (type: string, name?: string) => {
  console.groupCollapsed(
    `%c ${Icons[type as keyof typeof Icons]}${name ? `${name}` : ""}`,
    Styles.COMMON + Styles[type as keyof typeof Icons]
  );
};

const Konsole: IKonsole = {
  table: console.table,
  assert: console.assert,
  clear: console.clear,
  count: console.count,
  countReset: console.countReset,
  debug: console.debug,
  dir: console.dir,
  dirxml: console.dirxml,
  time: console.time,
  timeEnd: console.timeEnd,
  timeLog: console.timeLog,
  timeStamp: console.timeStamp,
  trace: console.trace,
  groupEnd: console.groupEnd,
  //
  //
  // Override some console methods
  log: (payload, name) => {
    sendToConsole({ payload, type: "LOG", name });
  },
  info: (payload, name) => {
    sendToConsole({ payload, type: "INFO", name });
  },
  error: (payload, name) => {
    sendToConsole({ payload, type: "ERROR", name });
  },
  warn: (payload, name) => {
    sendToConsole({ payload, type: "WARN", name });
  },
  group: (name) => {
    sendGroupToConsole("GROUP", name);
  },
  groupCollapsed: (name) => {
    sendGroupCollapsedToConsole("GROUPCOLLAPSED", name);
  },
  //
  //
  // Add new methods
  success: (payload, name) => {
    sendToConsole({ payload, type: "SUCCESS", name });
  },
  goal: (payload, name) => {
    sendToConsole({ payload, type: "GOAL", name });
  },
  poo: (payload, name) => {
    sendToConsole({ payload, type: "POO", name });
  },
  puke: (payload, name) => {
    sendToConsole({ payload, type: "PUKE", name });
  },
  boom: (payload, name) => {
    sendToConsole({ payload, type: "BOOM", name });
  },
  love: (payload, name) => {
    sendToConsole({ payload, type: "LOVE", name });
  },
  fire: (payload, name) => {
    sendToConsole({ payload, type: "FIRE", name });
  },
  bug: (payload, name) => {
    sendToConsole({ payload, type: "BUG", name });
  },
  send: (payload, name) => {
    sendToConsole({ payload, type: "SEND", name });
  },
  fetch: (payload, name) => {
    sendGroupToConsole("FETCH", name);
    sendToConsole({ payload, type: "SEND", name });
  },
};

export default Konsole;
