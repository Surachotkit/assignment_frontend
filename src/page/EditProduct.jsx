import { React, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useLocation } from "react-router-dom";
import SaveIcon from "@mui/icons-material/Save";
import Input from "../components/Button/Input";
import Select from "../components/Select/Select";
import Radio from "../components/Button/Radio";
import Textarea from "../components/Button/TextArea";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Date from "../components/Calendar/Date";

export default function EditProduct() {
  const location = useLocation();
  const editproduct = location.state?.editproduct;
  
  //
  const [formData, setFormData] = useState({
    id: editproduct.id,
    typeOfWork: '',
    fname: '',
    phoneNumber: '',
    email: '',
    startDate:'',
    endDate:'',
    status:'',
    details:''
  });
  // console.log("🚀 ~ EditProduct ~ formData:", formData)
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormData(formData)
    console.log(formData); // Here you can send the data to your backend or perform other actions
  };

  const handleDateChange = (newStartDate, newEndDate) => {
    setFormData({
      ...formData,
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingTop: "20px",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          width: "100vh",
        }}
      >
        <h2>แก้ไขการแสดงผลงาน</h2>
        <div>
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <button >
          <SaveIcon />

          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          height: "100%",
          width: "100vh",
          border: "1px solid ",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "10px",
        }}
      >
        <h2>{editproduct.name}</h2>
        <div>
          <span>ประเภทผลงาน </span>
          <Select value={formData.typeOfWork} onChange={(e) => setFormData({ ...formData, typeOfWork: e.target.value })}/>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "start",
            height: "100%",
            width: "100vh",
          }}
        >
          <div>
            <span style={{ display: "flex", alignItems: "start" }}>
              เจ้าของลิขสิทธิ์
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Input name={"ชื่อ"} value={formData.fname} onChange={(e) => setFormData({ ...formData, fname: e.target.value })}/>
              <Input name={"เบอร์โทรศัพท์"} value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}/>
            </div>
          </div>
        </div>
        <div>
          <Input name={"อีเมล"} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          height: "100%",
          width: "100vh",
          border: "1px solid ",
          borderRadius: "8px",
          padding: "15px",
        }}
      >
        <h3>ข้อมูลผลงาน</h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: "25px",
          }}
        >
          <Radio 
            status={formData.status} 
            valueStart={formData.startDate} 
            valueEnd={formData.endDate} 
            onChange={handleDateChange}
          />

          <div
            style={{ display: "flex", flexDirection: "column", width: "25%" }}
          >
            {/* <label>วันที่เริ่มต้น</label>
            <Date /> */}
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", width: "25%" }}
          >
             {/* <label>วันที่สิ้นสุด</label>

            <Date /> */}
          </div>
        </div>

        <div>รายละเอียด</div>
        <Textarea value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })}/>
      </div>
      <Footer />
    </form>
  );
}
