declare global {
  interface Window {
    Android: {
      navigateToMain: () => void;
      navigateToMyTask: (
        projectId: string,
        taskId: string,
        managerId: string,
        managerValue: string,
        title: string,
        memo: string,
        startDate: string,
        dueDate: string,
      ) => void;
      navigateToOtherTask: (projectId: string, taskId: string) => void;
      navigateToEdit: (projectId: string, taskId: string) => void;
      navigateToFeedback: (projectId: string, taskId: string) => void;
    };
  }
}

declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}
declare module "*.png" {
  const content: string;
  export default content;
}
declare module "*.woff" {
  const content: string;
  export default content;
}
declare module "*.woff2" {
  const content: string;
  export default content;
}

declare namespace Intl {
  interface DateTimeFormatOptions {
    localeMatcher?: "best fit" | "lookup" | undefined;
    weekday?: "long" | "short" | "narrow" | undefined;
    era?: "long" | "short" | "narrow" | undefined;
    year?: "numeric" | "2-digit" | undefined;
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day?: "numeric" | "2-digit" | undefined;
    hour?: "numeric" | "2-digit" | undefined;
    minute?: "numeric" | "2-digit" | undefined;
    second?: "numeric" | "2-digit" | undefined;
    timeZoneName?: "short" | "long" | "shortOffset" | "longOffset" | "shortGeneric" | "longGeneric" | undefined;
    formatMatcher?: "best fit" | "basic" | undefined;
    hour12?: boolean | undefined;
    timeZone?: string | undefined;
  }
}

export {};
