import React, { useState } from "react";
import { Form, Button, Radio, message, InputNumber } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateArray } from "../util";

const StarsRandom = () => {
  // const [form] = Form.useForm();
  const [positiveSet, setPositiveSet] = useState([]);
  const [antiset, setAntiset] = useState([]);
  const [isCreated, setIsCreated] = useState(false);
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
    setIsCreated(true);
    setPositiveSet(
      positiveSetArray.sort((a, b) => parseInt(a) - parseInt(b)).join(",")
    );
    setAntiset(numberArray.sort((a, b) => parseInt(a) - parseInt(b)).join(","));
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
        name="starsRandomForm"
        layout="inline"
        initialValues={{
          mode: 1,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={() => {
          setIsCreated(false);
        }}
      >
        <Form.Item
          label="number of positive"
          name="numberOfPositive"
          rules={[
            {
              required: true,
              message: "please input number of positive",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="stars mode"
          name="mode"
          rules={[
            {
              required: true,
              message: "please input stars mode",
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
            generate number
          </Button>
        </Form.Item>
      </Form>
      {positiveSet.length >= 1 && (
        <div style={{ marginTop: 20 }}>
          {/* <CopyToClipboard text={positiveSet} onCopy={onCopy}>
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard> */}
          <div className="display">{positiveSet}</div>
        </div>
      )}
      {antiset.length >= 1 && (
        <div style={{ marginTop: 20 }}>
          {/* <CopyToClipboard text={antiset} onCopy={onCopy}>
            <Button type="primary">one-click copy</Button>
          </CopyToClipboard> */}
          <div className="display">{antiset}</div>
        </div>
      )}
    </>
  );
};

export default StarsRandom;
