import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateArray, isRepeat } from "../util";


const KillThreeNumber = () => {
  const [killThreeNumberResult, setKillThreeNumberResult] = useState();
  const onFinish = (values) => {
    const { killNumberOne, killNumberTwo,killNumberThree } = values;
    const numberArray = generateArray(1000);
    const killThreeNumberResult = numberArray.filter((number) => {
      return (
        number.includes(killNumberOne) ||
        number.includes(killNumberTwo) ||
        number.includes(killNumberThree) ||
        isRepeat(number.toString())
      );
    });
    setKillThreeNumberResult(killThreeNumberResult.join(","));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="killThreeNumberForm"
        layout="inline"
        initialValues={{
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
        <Form.Item
          label="kill three number"
          name="killNumberThree"
          rules={[
            {
              required: true,
              message: "please input kill three number",
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
      {killThreeNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={killThreeNumberResult}
            onCopy={() => message.info('copy successfully')}
          >
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard>
          <div className="display">{killThreeNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillThreeNumber;
