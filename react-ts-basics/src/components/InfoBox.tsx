import React, { PropsWithChildren, ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = PropsWithChildren<{
  mode: "warning";
  severity?: "low" | "medium" | "high";
}>;

type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  if (props.mode == "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{props.children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>{props.mode}</h2>
      <p>{props.children}</p>
    </aside>
  );
};

export default InfoBox;
