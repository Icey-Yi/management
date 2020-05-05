import React, { Component } from 'react'
import { Card, Form, Input, Button, Select, DatePicker } from 'antd'
import E from 'wangeditor'
import moment from 'moment'
import { connect } from 'umi'
import "./index.less"


@connect(({ articalCreate, loading }) => ({ articalCreate, loading: loading.effects['articalCreate/getData'] }))
class CreateId extends Component {

  componentDidMount() {
    const { dispatch, location } = this.props;
    const arr = location.pathname.split("/");
    const id = arr[arr.length - 1];
    dispatch({
      type: 'articalCreate/getData',
      payload: { id }
    })

    setTimeout(() => {
      const elem = this.refs.editorElem;
      const editor = new E(elem);
      editor.customConfig.onchange = html => {
        dispatch({
          type: 'articalCreate/contentChange',
          payload: { content: html }
        })
      };
      editor.create();
      dispatch({
        type: 'articalCreate/setEditor',
        payload: { editor }
      })
    }, 500)
  }

  render() {
    const { loading, articalCreate } = this.props;
    const { type, title, time, content, editor } = articalCreate;
    if(editor) editor.txt.html(content);
    const { Option } = Select;
    return (
      <div className="home-wrap">
        <Card className="create-card-wrap"
          loading={loading}
          style={{ height: 700 }} title={type !== "" ? "修改文章" : "创建文章"}>
          <Form>
            <Form.Item
              name="type"
              label="栏目"
              labelAlign="left"
              labelCol={{ xs: 24, sm: 2 }}
              wrapperCol={{ xs: 24, sm: 5 }}
            >
              <Select defaultValue={type}>
                <Option value="栏目一">栏目一</Option>
                <Option value="栏目二">栏目二</Option>
                <Option value="栏目三">栏目三</Option>
                <Option value="栏目四">栏目四</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="title"
              label="标题"
              labelAlign="left"
              labelCol={{ xs: 24, sm: 2 }}
              wrapperCol={{ xs: 24, sm: 20 }}
            >
              <Input defaultValue={title} />
            </Form.Item>
            <Form.Item
              name="content"
              label="内容"
              labelAlign="left"
              labelCol={{ xs: 24, sm: 2 }}
              wrapperCol={{ xs: 24, sm: 20 }}
            >
              <div ref="editorElem" style={{ textAlign: 'left', width: 900, margin: '10px auto' }}></div>
            </Form.Item>
            <Form.Item
              name="time"
              label="发表时间"
              labelAlign="left"
              labelCol={{ xs: 24, sm: 2 }}
              wrapperCol={{ xs: 24, sm: 4 }}
            >
              <DatePicker format="YYYY-MM-DD HH:mm:ss"
                defaultValue={moment(`${time}`, "YYYY-MM-DD HH:mm:ss")}
                showTime />
            </Form.Item>
            <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Button type="primary">保存</Button>
              <Button htmlType="button" className="btn">取消</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    )
  }
}
export default CreateId