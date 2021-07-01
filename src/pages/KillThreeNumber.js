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
        <Form.Item
          label="杀3码数字"
          name="killNumberThree"
          rules={[
            {
              required: true,
              message: "请输入杀3码数字",
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
      {killThreeNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={killThreeNumberResult}
            onCopy={() => message.info('复制成功')}
          >
            <Button type="primary">一键复制码数字</Button>
          </CopyToClipboard>
          <div className="display">{killThreeNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillThreeNumber;
