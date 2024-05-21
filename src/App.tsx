/*
 * @Author: xx
 * @Date: 2024-05-21 17:03:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-21 20:35:38
 * @Description: 
 * @FilePath: \toolweb\src\App.tsx
 */
import { useState } from 'react'
import './App.css'
import { Input, Button, Row, Col } from 'antd';
import axios from 'axios';
import { useMessage } from "./hooks/useMessage";
function App() {
  const { showSuccess, showError } = useMessage();
  const [userValue, setUserValue] = useState('')
  const [sendValue, setSendValue] = useState('')
  const { TextArea } = Input;
  const changeUserValue = (event: any) => {
    console.log(event.target.value);
    setUserValue(event.target.value)
  }

  const changeSendValue = (event: any) => {
    console.log(event.target.value);
    setSendValue(event.target.value)
  }



  const submit = () => {
    let newValue = userValue.split(/[(\r\n)\r\n]+/);
    let newValue2 = newValue.filter((value) => value !== '');
    console.log(newValue2);
    // 发送的用户名
    var data = JSON.stringify({
      "socketType": 2,
      "list": [
        {
          "type": 203,
          "titleList": newValue2,
          "receivedContent": sendValue
        }
      ]
    });


    var config = {
      method: 'post',
      url: 'https://api.worktool.ymdyes.cn/wework/sendRawMessage?robotId=827ceae9f6374aa5abffb1d18973e5fd',
      headers: {
        'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        if (response.data.code == 200) {
          showSuccess('发送成功')
        } else {
          console.log(response.data.message);
          showError(response.data.message)
        }

      })
      .catch(function (error) {
        console.log(error);
        showError(JSON.stringify(error))
      });
  }
  return (
    <>
    <Row>
      <Col span={24}>
      <div className='title'>发送的值：</div>
      <TextArea rows={5} placeholder="发送的值" value={sendValue} onChange={changeSendValue} />
      <div className='title'>发送的用户名/群名：</div>
      <TextArea rows={5} placeholder="多个用户/群按回车分隔" value={userValue} onChange={changeUserValue} />
      <Button className='title' type="primary" onClick={submit}>确 定</Button>
      </Col>
    </Row>
     
    </>
  )
}

export default App

