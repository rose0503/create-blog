import React from 'react'
import avt from '../../Images/my-team-huflit.png'
import './About.css'

export default function AboutMe() {
  return (
    <div className="container mt-2">
    <h3>Thông tin cá nhân</h3>
    <div className="line"></div>
    <div className="content" >
      <div className="d-flex">
        <img className='avt' src={avt} alt='avt'/>
        <ul style={{marginTop:'15px'}}>
          <li>Tên: Trịnh Quốc Việt</li>
          <li>Sinh năm: 1998</li>
          <li>Đang sinh sống: TP.Hồ Chí Minh</li>
          <li>Quê quán: Lâm Đồng</li>
          <li>Sở thích: Du Lịch</li>
        </ul>
      </div>
    </div>
    <div className="line" ></div>
  </div>
  )
}