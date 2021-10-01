import React, { useState } from 'react'
import { Table, Tag, Space, Modal, Button, Input, Form, message, Row, Col } from 'antd'
// import "antd/dist/antd.css";

export default function AntdTable() {

    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 10,
        },
    };
  
  const data = [
    {
      key: '1',
      nama: 'ujang',
      umur: 20,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend', 'QA'],
    },
    {
      key: '2',
      nama: 'budi',
      umur: 25,
      alamat: 'sebelah rumah kambing',
      posisi: ['backend'],
    },
    {
      key: '3',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '4',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '5',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '6',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '7',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '8',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '9',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '10',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
    {
      key: '11',
      nama: 'kambing',
      umur: 183,
      alamat: 'sebelah rumah budi',
      posisi: ['frontend'],
    },
  ];
  const columns = [
    { title: 'Nama', dataIndex: 'nama', key: 'nama', render: text => <a>{text}</a>,},
    { title: 'Umur', dataIndex: 'umur', key: 'umur',},
    { title: 'Alamat', dataIndex: 'alamat', key: 'alamat',},
    { title: 'Posisi', key: 'posisi', dataIndex: 'posisi',
      render: posisi => (
        <>
          {posisi.map(tag => {
            let color ='green';
            if (tag === 'backend') {
              color = 'volcano';
            }
            if(tag === 'frontend')
            {color = 'geekblue'}
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    { title: 'Action', key: 'action', render: (text, record) => (
        <Space size="middle">
          <Button onClick={editData} type="primary"> Edit </Button>
          <Button onClick={deleteData} type="danger" > Delete </Button>
        </Space>
        
      ),},
     
  ];
    const { confirm } = Modal;
    const { TextArea } = Input;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
   
  const showModal = () => {
    setIsModalVisible(true);
  };

  const editData = () => {
    setIsModalVisibleEdit(true);
  };

  function alertEdit(){
    message.info('message: Data Updated');
    setIsModalVisibleEdit(true);
  }

  function alertAdd(){
    message.info('message: Data Tersimpan');
    setIsModalVisible(false);
  }

  function deleteData() {
    confirm({
      title: 'Konfirmasi Penghapusan Data',
      content: 'anda ingin menghapus data ini?',
      onOk() {
        message.info('message: Data Deleted');
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const handleOkEdit = () => {
    setIsModalVisibleEdit(false);
  };

  const handleCancelEdit = () => {
    setIsModalVisibleEdit(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function alertSearch(){
    message.info('message: Data Search');
    setIsModalVisible(false);
  }
  
  return (
    <Row>
      <Col span={12} offset={6}>
        {/* col-12 col-offset-6 */}
        <div className='mt-md-3'>
    <Button type="primary" onClick={showModal}>+ Tambah data</Button>

    <Form>
    <Table columns={columns} dataSource={data} />
    </Form>
    <Modal title="Edit Data Pribadi" visible={isModalVisibleEdit} onOk={handleOkEdit} onCancel={handleCancelEdit} footer={null}>
    <p>Masukan Nama</p>
        <Input placeholder="Nama Anda" />
        <br/>
        <br/>
        <p>Masukan Alamat</p>
        <TextArea 
        rows={3} 
        placeholder="Alamat Anda" 
        showCount maxLength={300}
        />
        <br/>
            <Button type="primary" onClick={alertEdit} >Submit</Button>
    </Modal>
    <Modal title="Data Pribadi" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
    <p>Masukan Nama</p>
    <Input placeholder="Nama Anda" />
    <br/>
    <br/>
    <p>Masukan Alamat</p>
    <TextArea 
        rows={3} 
        placeholder="Alamat Anda" 
        showCount maxLength={300}
        />
        <br/>
    <Button type="primary" onClick={alertAdd} >Submit</Button>
    </Modal>
  
    </div>
      </Col>
    </Row>
    
  );
}