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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            生成数字
          </Button>
        </Form.Item>
      </Form>
      {killOneNumberResult && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={killOneNumberResult}
            onCopy={() => message.info('复制成功')}
          >
            <Button type="primary">一键复制码数字</Button>
          </CopyToClipboard>
          <div className="display">{killOneNumberResult}</div>
        </div>
      )}
    </>
  );
};

export default KillOneNumber;
