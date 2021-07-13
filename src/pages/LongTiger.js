import React from "react";
import { Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LongTiger = () => {
  const long = [];
  const tiger = [];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (j > i) {
        tiger.push(`${i}${j}`);
      } else if (j < i) {
        long.push(`${i}${j}`);
      } else {
        tiger.push(`${i}${j}`);
        long.push(`${i}${j}`);
      }
    }
  }

  const longText = long.join(",");
  const tigerText = tiger.join(",");

  return (
    <>
      <div style={{ marginTop: 20 }}>
        <CopyToClipboard
          text={longText}
          onCopy={() => message.info("copy successfully")}
        >
          <Button type="primary">one-click copy long dataset</Button>
        </CopyToClipboard>
        <div className="display">{longText}</div>
      </div>
      <div style={{ marginTop: 20 }}>
        <CopyToClipboard
          text={tigerText}
          onCopy={() => message.info("copy successfully")}
        >
          <Button type="primary">one-click copy tiger dataset</Button>
        </CopyToClipboard>
        <div className="display">{tigerText}</div>
      </div>
    </>
  );
};

export default LongTiger;
