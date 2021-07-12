import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateArray, isRepeat } from "../util";

const KillOneNumber = () => {
  // const [form] = Form.useForm();
  const [killOneNumberResult, setKillOneNumberResult] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const onFinish = (values) => {
    const { killNumberOne } = values;
    const numberArray = generateArray(1000);
    const killOneNumberResult = numberArray.filter(
      (number) => number.includes(killNumberOne) || isRepeat(number.toString())
    );
    setIsCreated(true)
    setKillOneNumberResult(killOneNumberResult.join(","));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onCopy = () => {
    if (isCreated) {
      message.info("copy successfully");
    } else {
      message.error("kill number is not synchronize with result ");
    }
  };

  return (
    <>
      <Form
        name="killOneNumberForm"
        layout="inline"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={()=>{
          setIsCreated(false)
        }}
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
          <Input/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            generate number
          </Button>
        </Form.Item>
      </Form>
      {killOneNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard text={killOneNumberResult} onCopy={onCopy}>
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard>
          <div className="display">{killOneNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillOneNumber;
