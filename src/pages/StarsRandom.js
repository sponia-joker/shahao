import React, { useState } from "react";
import { Form, Button, Radio, message, InputNumber } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateArray } from "../util";

const StarsRandom = () => {
  // const [form] = Form.useForm();
  const [positiveSet, setPositiveSet] = useState([]);
  const [antiset, setAntiset] = useState([]);
  const onFinish = (values) => {
    const { numberOfPositive, mode } = values;
    const maxNumber = mode === 1 ? 10 : mode === 2 ? 100 : 1000;
    const length = mode === 1 ? 1 : mode === 2 ? 2 : 3;
    const numberArray = generateArray(maxNumber, length);
    const positiveSetArray = [];
    for (let i = 0; i < numberOfPositive; i++) {
      var idx = parseInt(Math.random() * numberArray.length);
      positiveSetArray.push(numberArray[idx]);
      numberArray.splice(idx, 1);
    }
    setPositiveSet(
      positiveSetArray.sort((a, b) => parseInt(a) - parseInt(b)).join(",")
    );
    setAntiset(numberArray.sort((a, b) => parseInt(a) - parseInt(b)).join(","));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Form
        name="starsRandomForm"
        layout="inline"
        initialValues={{
          mode: 1,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="正集数量"
          name="numberOfPositive"
          rules={[
            {
              required: true,
              message: "请输入正集数量",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="几星模式"
          name="mode"
          rules={[
            {
              required: true,
              message: "请输入几星模式",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={1}>0-9</Radio>
            <Radio value={2}>00-99</Radio>
            <Radio value={3}>000-999</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            生成数字
          </Button>
        </Form.Item>
      </Form>
      {positiveSet.length >= 1 && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={positiveSet}
            onCopy={() => message.info("复制成功")}
          >
            <Button type="primary">一键复制正集数字</Button>
          </CopyToClipboard>
          <div className="display">{positiveSet}</div>
        </div>
      )}
      {antiset.length >= 1 && (
        <div style={{ marginTop: 20 }}>
          <CopyToClipboard
            text={antiset}
            onCopy={() => message.info("复制成功")}
          >
            <Button type="primary">一键复制反集数字</Button>
          </CopyToClipboard>
          <div className="display">{antiset}</div>
        </div>
      )}
    </>
  );
};

export default StarsRandom;
