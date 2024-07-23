'use client';

import { Badge, Button, Modal, Popconfirm, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MaterialSymbol } from 'react-material-symbols';
import { useEffect, useState } from 'react';
import JobOfferModalCreate from './jobOfferModal';
import JobOfferModalEdit from './jobOfferModal';
import dayjs from 'dayjs';

interface DataType {
  id: string;
  title: string;
  description: string;
  active: boolean;
}

interface Application {
  id: string;
  candidate: Candidate;
  createdAt: string;
}

interface Candidate {
  fullname: string;
  email: string;
  phone: string;
}

const Page = () => {

  const [id, setId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalEditOpen, setModalEditOpen] = useState<boolean>(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState<boolean>(false);
  const [candidatesModalOpen, setCandidatesModalOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [applications, setApplications] = useState<Application[]>();
  const [datta, setData] = useState(null)

  const handleDelete = (id: string) => {
    if(id) {
      fetch(`/api/joboffer/${id}`, {
        method: "DELETE",
      }).then(() => {
        fetch(`/api/joboffer`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((datta) => {
            setData(datta)
          })
      })
    }
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Position',
      dataIndex: 'title',
      key: 'title',
      width: 550
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (v) => 
        <div className='flex justify-center'>
          <Button   
            className='flex items-center justify-center border-none shadow-none' 
            icon={<MaterialSymbol icon="display_external_input" size={20} />}
            onClick={()=> {
              setDescription(v);
              setDescriptionModalOpen(true);
            }}
          />
        </div>,
      width: 20
    },
    {
      title: 'Candidates',
      dataIndex: 'jobApplications',
      key: 'jobApplications',
      render: (v) => <Tag color='blue' className='p-0 py-1 cursor-pointer w-full flex justify-center' onClick={() => {
        if(v.length > 0) {
          setApplications(v);
          setCandidatesModalOpen(true);
        }
      }}>{v.length > 0 ? v.length : '/'}</Tag>,
      width: 20
    },
    {
      title: 'Status',
      dataIndex: 'active',
      key: 'active',
      render: (v) => <div><Badge status={v ? 'success' : 'error'} text={v?'Active':'Inactive'} /></div>,
      width: 250
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            onClick={() => {
              setId(record.id);
              setModalEditOpen(true);
            }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete this item?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if(!modalOpen && !modalEditOpen)
      fetch(`/api/joboffer`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((datta) => {
          setData(datta)
        })
  }, [modalOpen, modalEditOpen])

  return (
    <div className="h-screen bg-white px-2 pt-3 flex flex-col gap-12">
      <div className="flex justify-between w-full">
        <div className="text-2xl font-bold">Job Positions</div>
        <Button type='primary' onClick={() => setModalOpen(true)}>Add</Button>
      </div>
      { datta && <div className="p-2">
        <Table columns={columns} dataSource={datta} />
      </div>}
      <JobOfferModalCreate
        open={modalOpen} 
        close={() => setModalOpen(false)}
      />
      {id && <JobOfferModalEdit
        open={modalEditOpen} 
        close={() => {
          setModalEditOpen(false);
          setId(null);
        }}
        id={id}
      />}
      <Modal open={descriptionModalOpen} onCancel={() => setDescriptionModalOpen(false)} onOk={() => setDescriptionModalOpen(false)}>
        <p dangerouslySetInnerHTML={{
							__html: description,
						}}></p>
      </Modal>
      <Modal title='Candidates' open={candidatesModalOpen} onCancel={() => setCandidatesModalOpen(false)} onOk={() => setCandidatesModalOpen(false)}>
        <div className='my-8 flex flex-col gap-2'>
        {applications && applications.map(c => 
          <div className='p-4 flex flex-col bg-slate-300 rounded-xl gap-1'>
            <div className='text-md opacity-70'>{dayjs(c.createdAt).unix()}</div>
            <div className='text-xl font-bold'>{c.candidate.fullname}</div>
            <div className='flex gap-4 text-xs'>
              <div><b>email:</b> {c.candidate.email}</div>
              <div><b>phone:</b> {c.candidate.phone}</div>
            </div>
          </div>
          )}
          </div>
      </Modal>
    </div>
  );
};

export default Page;
