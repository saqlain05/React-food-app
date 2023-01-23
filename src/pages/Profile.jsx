import React from 'react'
import ProfileComponent from '../components/UI/profile/ProfileComponent'
import Helmet from "../components/Helmet/Helmet";

import CommonSection from "../components/UI/common-section/CommonSection";
const Profile = () => {
  return (
    <>
    <Helmet title="All-Foods">
      <CommonSection title="Profile" />
      <section>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
            <h5>Md Saqlain Nasim</h5>
            <h6>Contact : +91 7980000693</h6>
            <span>------------------------------------------</span>
            <h6>Email : Test@gmail.com</h6>
            <br></br>
        </div>
        <ProfileComponent />
        </section>
    </Helmet>
    </>
  )
}

export default Profile