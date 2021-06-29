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
    const killTwoNumberResult = numberArray.filter((number) => {
      return (
        number.includes(killNumberOne) ||
        number.includes(killNumberTwo) ||
        isRepeat(number.toString())
      );
    });
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="杀1码数字"
          name="killNumberOne"
          rules={[
            {
              required: true,
              message: "请输入杀1码数字",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="杀2码数字"
          name="killNumberTwo"
          rules={[
            {
              required: true,
              message: "请输入杀2码数字",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            生成数字
          </Button>
        </Form.Item>
      </Form>
      {killTwoNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={killTwoNumberResult}
            onCopy={() => message.info('复制成功')}
          >
            <Button type="primary">一键复制码数字</Button>
          </CopyToClipboard>
          <div className="display">{killTwoNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillTwoNumber;
