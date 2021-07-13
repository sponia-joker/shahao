import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { generateArray, isRepeat } from "../util";

const KillOneNumber = () => {
  const [killOneNumberResult, setKillOneNumberResult] = useState();

  const onFinish = (values) => {
    const { killNumberOne } = values;
    if (killNumberOne) {
      const numberArray = generateArray(1000);
      const killOneNumberResult = numberArray.filter(
        (number) =>
          number.includes(killNumberOne) || isRepeat(number.toString())
      );
      setKillOneNumberResult(killOneNumberResult.join(","));
      handCopy(killOneNumberResult.join(","));
    } else {
      setKillOneNumberResult("");
      handCopy("\u0020"); //空格转义
    }
  };

  const handCopy = (value) => {
    if (document.execCommand("copy")) {
      const input = document.createElement("input");
      document.body.appendChild(input);
      input.setAttribute("value", value);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    } else {
      message.error("The browser does not support automatic copying");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onValuesChange = (values) => {
    onFinish(values);
  };

  return (
    <>
      <Form
        name="killOneNumberForm"
        layout="inline"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
      >
        <Form.Item
          label="kill one number"
          name="killNumberOne"
          rules={[
            {
              required: true,
              message: "please inputkill one number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            generate number
          </Button>
        </Form.Item> */}
      </Form>
      {killOneNumberResult && (
        <div style={{ marginTop: 20 }}>
          {/* <CopyToClipboard text={killOneNumberResult} onCopy={onCopy}>
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard> */}
          <div className="display">{killOneNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillOneNumber;
