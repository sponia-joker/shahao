// import React, { useState } from "react";
// import { Form, Input, message } from "antd";
// import { generateArray, isRepeat } from "../util";

// const KillOneNumber = () => {
//   const [killOneNumberResult, setKillOneNumberResult] = useState();

//   const onFinish = (values) => {
//     const { killNumberOne } = values;
//     if (killNumberOne) {
//       const numberArray = generateArray(1000);
//       const killOneNumberResult = numberArray.filter(
//         (number) =>
//           number.includes(killNumberOne) || isRepeat(number.toString())
//       );
//       setKillOneNumberResult(killOneNumberResult.join(","));
//       handCopy(killOneNumberResult.join(","));
//     } else {
//       setKillOneNumberResult("");
//       handCopy("\u0020"); //空格转义
//     }
//   };

//   const handCopy = (value) => {
//     if (document.execCommand("copy")) {
//       const input = document.createElement("input");
//       document.body.appendChild(input);
//       input.setAttribute("value", value);
//       input.select();
//       document.execCommand("copy");
//       document.body.removeChild(input);
//     } else {
//       message.error("The browser does not support automatic copying");
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };

//   const onValuesChange = (values) => {
//     onFinish(values);
//   };

//   return (
//     <>
//       <Form
//         name="killOneNumberForm"
//         layout="inline"
//         initialValues={{}}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         onValuesChange={onValuesChange}
//       >
//         <Form.Item
//           label="kill one number"
//           name="killNumberOne"
//           rules={[
//             {
//               required: true,
//               message: "please inputkill one number",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         {/* <Form.Item>
//           <Button type="primary" htmlType="submit">
//             generate number
//           </Button>
//         </Form.Item> */}
//       </Form>
//       {killOneNumberResult && (
//         <div style={{ marginTop: 20 }}>
//           {/* <CopyToClipboard text={killOneNumberResult} onCopy={onCopy}>
//             <Button type="primary">one-click copy</Button>
//           </CopyToClipboard> */}
//           <div className="display">{killOneNumberResult}</div>
//         </div>
//       )}
//     </>
//   );
// };

// export default KillOneNumber;

import React, { useState } from "react";
import { Form, Input, message, Button } from "antd";
import { generateArray, isRepeat } from "../util";
import { CopyToClipboard } from "react-copy-to-clipboard";

class KillOneNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      killOneNumberResult: "",
    };
  }

  onFinish = (values) => {
    const { killNumberOne } = values;
    if (killNumberOne) {
      const numberArray = generateArray(1000);
      const killOneNumberResult = numberArray.filter(
        (number) =>
          number.includes(killNumberOne) || isRepeat(number.toString())
      );
      this.setState({
        killOneNumberResult: killOneNumberResult.join(","),
      });
      this.handCopy(killOneNumberResult.join(","));
      this.input.focus();
    } else {
      this.setState({
        killOneNumberResult: "",
      });
      this.handCopy("\u0020");
      this.input.focus();
    }
  };

  handCopy = (value) => {
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

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onValuesChange = (values) => {
    this.onFinish(values);
  };

  render() {
    const { killOneNumberResult } = this.state;
    return (
      <>
        <Form
          name="killOneNumberForm"
          layout="inline"
          initialValues={{}}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onValuesChange={this.onValuesChange}
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
            <Input ref={(input) => (this.input = input)} />
          </Form.Item>
        </Form>
        {killOneNumberResult && (
          <div style={{ marginTop: 20 }}>
            <div className="display">{killOneNumberResult}</div>
          </div>
        )}
      </>
    );
  }
}

export default KillOneNumber;
