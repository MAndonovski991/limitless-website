'use client';

import { Badge, Modal, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

interface DataType {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

interface Application {
  id: string;
  createdAt: string;
  jobOffer: JobOffer;
}

interface JobOffer {
  title: string;
  subtitle: string;
}

const Page = () => {
  const [descriptionModalOpen, setDescriptionModalOpen] =
    useState<boolean>(false);
  const [candidatesModalOpen, setCandidatesModalOpen] =
    useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [applications, setApplications] = useState<Application[]>();
  const [datta, setData] = useState(null);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Applications',
      dataIndex: 'jobs',
      key: 'jobs',
      render: v => (
        <Tag
          color="blue"
          className="p-0 py-1 cursor-pointer w-full flex justify-center"
          onClick={() => {
            if (v.length > 0) {
              setApplications(v);
              setCandidatesModalOpen(true);
            }
          }}
        >
          {v.length > 0 ? v.length : '/'}
        </Tag>
      ),
      width: 20,
    },
  ];

  useEffect(() => {
    fetch(`/api/candidate`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(datta => {
        setData(datta);
      });
  }, []);

  return (
    <div className="h-screen bg-white px-2 pt-3 flex flex-col gap-12">
      <div className="flex justify-between w-full">
        <div className="text-2xl font-bold">Candidates</div>
      </div>
      {datta && (
        <div className="p-2">
          <Table columns={columns} dataSource={datta} />
        </div>
      )}
      <Modal
        open={descriptionModalOpen}
        onCancel={() => setDescriptionModalOpen(false)}
        onOk={() => setDescriptionModalOpen(false)}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></p>
      </Modal>
      <Modal
        title="Applications"
        open={candidatesModalOpen}
        onCancel={() => setCandidatesModalOpen(false)}
        onOk={() => setCandidatesModalOpen(false)}
      >
        <div className="my-8 flex flex-col gap-2">
          {applications &&
            applications.map(c => (
              <div className="p-4 flex flex-col bg-slate-300 rounded-xl gap-1">
                <div className="text-md opacity-70 text-primary">
                  {dayjs(c.createdAt).format('DD.MM.YYYY')}
                </div>
                <div className="flex flex-col gap-0 text-xs">
                  <div className="text-xl font-bold">{c.jobOffer.title}</div>
                  <div>{c.jobOffer.subtitle}</div>
                </div>
                <div className="pt-2 text-md opacity-70">
                  Application Id: {dayjs(c.createdAt).unix()}
                </div>
              </div>
            ))}
        </div>
      </Modal>
    </div>
  );
};

export default Page;
