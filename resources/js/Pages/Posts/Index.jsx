//import React
import React from 'react';

//import layout
import Layout from '../../Layouts/Default';
import Footer from '../../Layouts/footer';
import Main from '../../Layouts/main';


//import Link
import { Link } from '@inertiajs/inertia-react';

export default function PostIndex({ posts, session }) {

  return (
    <>
        <Layout></Layout>
        <div className='container mt-5'>
            <Main posts={posts} session={session} ></Main>
        </div>
        
        <Footer></Footer>
    </>
    
  )
}