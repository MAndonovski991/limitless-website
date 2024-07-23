'use client';

import { Button, Form, Input, message, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import { useParams } from 'next/navigation';
import React from 'react';
import { useTranslation } from '../utils/translationProvider';
import logo from '../assets/images/logo.png';

const ContactForm = () => {
  const [form] = useForm();

  const params = useParams();
  const t = useTranslation(params && (params.locale as string));

  const onSubmit = () => {
    form.validateFields().then(async values => {
      await fetch('/api/mailer/contactUs', {
        method: 'POST',
        body: JSON.stringify(values),
      });

      form.resetFields();
      message.success(`Your message was successfully sent.`);
    });
  };

  return (
    <Form form={form} layout="vertical" size="large">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Form.Item
          className="col-span-2 lg:col-span-1 mx-4"
          label="Full Name"
          name="fullname"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="col-span-2 lg:col-span-1 mx-4"
          label="Company Name"
          rules={[{ required: true }]}
          name="companyname"
        >
          <Input />
        </Form.Item>

        <Form.Item
          className="col-span-2 lg:col-span-1 mx-4"
          label="Email"
          name="email"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          className="col-span-2 lg:col-span-1 mx-4"
          name="phonenumber"
        >
          <Input />
        </Form.Item>

        <Form.Item className="col-span-2 mx-4" label="Comment" name="comment">
          <TextArea />
        </Form.Item>
        <Form.Item className="col-span-2 mt-10 mx-4">
          <Button className="w-full" onClick={() => onSubmit()} type="primary">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ContactForm;
