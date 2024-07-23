'use client';

import { Badge, Button, Modal, Popconfirm, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { MaterialSymbol } from 'react-material-symbols';
import { useEffect, useState } from 'react';
import UserModalCreate from './userModal';
import UserModalEdit from './userModal';

interface DataType {
  id: string;
  email: string;
  title: string;
  description: string;
  active: boolean;
}

const Page = () => {

  const [id, setId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalEditOpen, setModalEditOpen] = useState<boolean>(false);
  const [descriptionModalOpen, setDescriptionModalOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [datta, setData] = useState(null)

  const handleDelete = (id: string) => {
    if(id) {
      fetch(`/api/user/${id}`, {
        method: "DELETE",
      }).then(() => {
        fetch(`/api/user`, {
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
      title: 'Fullname',
      dataIndex: 'name',
      key: 'name',
      width: 550
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
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
          {record.email !== process.env.EMAIL_AUTH_FROM && <><Button 
            className='flex items-center'
            onClick={() => {
              setId(record.id);
              setModalEditOpen(true);
            }}
          >
            <MaterialSymbol icon='edit' size={18} />
          </Button>
          <Popconfirm
            title="Delete"
            description="Are you sure to delete this item?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button className='flex items-center'>
              <MaterialSymbol icon='delete' size={18} />
            </Button>
          </Popconfirm></>}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if(!modalOpen && !modalEditOpen)
      fetch(`/api/user`, {
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
        <div className="text-2xl font-bold">Users</div>
        <Button type='primary' onClick={() => setModalOpen(true)}>Add</Button>
      </div>
      { datta && <div className="p-2">
        <Table columns={columns} dataSource={datta} />
      </div>}
      <UserModalCreate
        open={modalOpen} 
        close={() => setModalOpen(false)}
      />
      {id && <UserModalEdit
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
    </div>
  );
};

export default Page;
