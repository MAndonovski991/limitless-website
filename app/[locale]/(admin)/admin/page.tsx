'use client';
import { Typography } from 'antd';
const { Title } = Typography;

const Page = async () => {
  return (
  <div className="w-full bg-white px-4 pt-4 flex flex-col items-start justify-start">
    <Title level={2}>Welcome</Title>
    <Title level={4}>
      Please choose the codelist you want to administer on the left.
    </Title>
  </div>
)};

export default Page;
