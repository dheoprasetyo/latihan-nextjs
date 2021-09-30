import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layouts/Layouts'
import { host } from '../configs'
import UserLists from '../components/user-lists'
import {Form, Row, Col, Button} from 'react-bootstrap'
import Pagination from '../components/pagination';
import React, { useState } from 'react'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

export default function Home({ usersApi }) {
  // console.log(users)
  const [users, setUsers] = React.useState(usersApi.data)
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const funcFilter = (e) => {
    const value = e.target.value
    console.log(value)

    const filterData = users.filter((user) => {
      return (
        user.first_name.search(value) != -1 || user.last_name.search(value) != -1
      );
    })

      if (value.length == 0 || value.trim() == '') {
        (async function () {
          const res = await host.get('users?page=2')
          const {data} = res.data
          setUsers(data)
        })()
      }
      setUsers(filterData)
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentUsers = users.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // const data = users.data
  return (
    <Layout>
      <Row className="justify-content-md-end my-3">
        <Col md={5}>
          <Form.Control type="text" placeholder="Search" onChange={funcFilter}/>
        </Col>
      </Row>
      <Row md={3} className="text-left">
        <Col>
          <Link href="/add">
            <Button variant="primary">Add Data</Button>
          </Link>
        </Col>
      </Row>
      <UserLists users={currentUsers}/>
      <Pagination
      postsPerPage={postsPerPage}
      totalPosts={users.length}
      paginate={paginate}
      />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await host.get('users?page=2')
  const data = res.data

  return {
    props: { usersApi: data }, // will be passed to the page component as props
  }
}
