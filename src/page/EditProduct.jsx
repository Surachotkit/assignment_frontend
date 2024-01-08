import { React, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import Input from "../components/Button/Input";
import Select from "../components/Select/Select";
import  Radio  from "../components/Button/Radio";
import Textarea  from "../components/Button/TextArea";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Date  from "../components/Calendar/Date";

export default function EditProduct() {
  const location = useLocation();
  const editproduct = location.state?.editproduct;
  console.log("-----------------------------dedede:", editproduct);

  return (
    <div style={{ display:'flex', flexDirection: 'column', height:'100%', paddingTop: '20px'}}>
      <Header/>
      <div style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center', height:'100%', width: '100vh' }}>
        <h2>แก้ไขการแสดงผลงาน</h2>
        <div>
        <Link to="/">
          <ArrowBackIcon />
        </Link>

        <SaveIcon />
        </div>
      </div>


      <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'start', height:'100%', width: '100vh', border:'1px solid ',borderRadius: '8px', padding: '15px', marginBottom: '10px' }}>
        <h2>{editproduct.name}</h2>
        <div >
        <span >ประเภทผลงาน </span>
        <Select />
        </div>
      
      <div style={{ display: 'flex', alignItems: 'start', height:'100%', width: '100vh' }}>
        <div >

        <span style={{ display: 'flex', alignItems: 'start'}}>เจ้าของลิขสิทธิ์</span>
        <div style={{ display: 'flex',justifyContent: 'space-between',alignItems: 'center' }}>

        <Input name={"ชื่อ"} />
        <Input name={"เบอร์โทรศัพท์"} />
        </div>
        </div>
      </div>
      <div>
        <Input name={"อีเมล"} />
      </div>
      </div>

      <div style={{ display: 'flex',flexDirection: 'column', alignItems: 'start', height:'100%', width: '100vh', border:'1px solid ',borderRadius: '8px', padding: '15px' }}>
        <h3>ข้อมูลผลงาน</h3>

        <div style={{ display: 'flex',justifyContent: 'space-between', paddingBottom: '25px' }}>
        <Radio/>
        
      
        <div style={{display: 'flex',flexDirection: 'column', width:'25%'}}>
          <label>วันที่เริ่มต้น</label>
    
        <Date/>
        </div>

        <div style={{display: 'flex',flexDirection: 'column',  width:'25%'}}>
          <label>วันที่สิ้นสุด</label>
     
          <Date/>
        </div>
        </div>

        <div>รายละเอียด</div>
        <Textarea/>
      </div>
      <Footer/>
    </div>
  );
}
