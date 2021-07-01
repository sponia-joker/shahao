import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateArray, isRepeat } from "../util";


const KillOneNumber = () => {
  // const [form] = Form.useForm();
  const [killOneNumberResult, setKillOneNumberResult] = useState();
  const onFinish = (values) => {
    const { killNumberOne } = values;
    const numberArray = generateArray(1000);
    const killOneNumberResult = numberArray.filter((number) => {
      return (
        number.includes(killNumberOne) ||
        isRepeat(number.toString())
      );
    });
    setKillOneNumberResult(killOneNumberResult.join(","));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="killOneNumberForm"
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            generate number
          </Button>
        </Form.Item>
      </Form>
      {killOneNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={killOneNumberResult}
            onCopy={() => message.info('copy successfully')}
          >
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard>
          <div className="display">{killOneNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillOneNumber;
