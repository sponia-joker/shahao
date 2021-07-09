import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateArray, isRepeat } from "../util";

const KillTwoNumber = () => {
  // const [form] = Form.useForm();
  const [killTwoNumberResult, setKillTwoNumberResult] = useState();
  const onFinish = (values) => {
    const { killNumberOne, killNumberTwo } = values;
    const numberArray = generateArray(1000);
    const killTwoNumberResult = numberArray.filter(
      (number) =>
        number.includes(killNumberOne) ||
        number.includes(killNumberTwo) ||
        isRepeat(number.toString())
    );
    setKillTwoNumberResult(killTwoNumberResult.join(","));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="killTwoNumberForm"
        layout="inline"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="kill one number"
          name="killNumberOne"
          rules={[
            {
              required: true,
              message: "please input kill one number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="kill two number"
          name="killNumberTwo"
          rules={[
            {
              required: true,
              message: "please input kill two number",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            generate number
          </Button>
        </Form.Item>
      </Form>
      {killTwoNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={killTwoNumberResult}
            onCopy={() => message.info("copy successfully")}
          >
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard>
          <div className="display">{killTwoNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillTwoNumber;
