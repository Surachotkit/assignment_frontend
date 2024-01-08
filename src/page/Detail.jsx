/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import data from '../../src/utils/mock/data.json'
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Detail() {
  const location = useLocation();
  const details = location.state?.details;
  console.log("Details:", details);
  
  console.log("🚀 ~ file: Detail.jsx:16 ~ data:", data?.rows)


  const [showMore, setShowMore] = useState(false);
  const [dataDetail, setDataDetail] = useState([]);
  console.log("🚀 ~ file: Detail.jsx:26 ~ Detail ~ dataDetail:", dataDetail)

  const navigate = useNavigate()
  const { text } = {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  useEffect(() => {
    if (details !== '') {
      // Use find to get a single item based on ID
      const foundData = data?.rows.find((row) => details === row?.id);
      setDataDetail(foundData)
      console.log("🚀 ~ file: Detail.jsx:30 ~ useEffect ~ foundData:", foundData);
    }
  }, []);


  const handleDetailsClick = () => {
    navigate('/editproduct', { state: { editproduct: dataDetail } })
   
  };

  return (
    <div style={{ display: 'flex', background: '#F5F6FA', overflowX: 'hidden', gap: '40px',height:'80vh', width: '100%',position: 'fixed',top:60,left:0, paddingTop: '20px', paddingBottom: '20px'}}>
      <Header/>
        <div style={{ display: 'flex', flexDirection: 'column',alignItems: 'center', flex: '1' }}>
      <Carousel />
      
        </div>

      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: '1', background: 'white', padding: '20px', borderRadius:'10px', border:'1px solid gray'}}>

      <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
        <h3>{dataDetail?.name}</h3>
        <div>
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        {/* <Link to="/editproduct"> */}
          <CreateIcon sx={{":hover":{cursor: 'pointer', color: 'blue'}}} onClick={() => handleDetailsClick()}/>
        {/* </Link> */}
        </div>
      </div>

      <div style={{display: 'flex',flexDirection: 'column', alignItems:'start', paddingBottom:'15px'}}>
        <span>ประเภทผลงาน : <span style={{fontWeight:'bold'}}>{dataDetail?.typeOfWork}</span></span>
        <div>วันเริ่มต้น : <span style={{fontWeight:'bold'}}>{dataDetail?.status === 'ไม่แสดง' ? '' : dataDetail?.startDate}</span></div>
        <div>วันสิ้นสุดการแสดง : <span style={{fontWeight:'bold'}}>{dataDetail?.status === 'ไม่แสดง' ? '' : dataDetail?.endDate}</span></div>
      </div>

      <div style={{display: 'flex',flexDirection: 'column', alignItems:'start', fontWeight:'bold', paddingBottom:'5px'}}>
        <span>เจ้าของลิขสิทธิ์ </span>
      </div>

      <div style={{display: 'flex',flexDirection: 'column', alignItems:'start', border:'1px solid gray ',borderRadius: '8px',padding:'15px'}}>
      <div style={{fontWeight:'bold'}}>Amethyst-sols</div>
      <div>
        <span>เบอร์โทร :</span>
        <span style={{fontWeight:'bold'}}>099-123-4567</span>
      </div>
      <span>อีเมล : <span style={{fontWeight:'bold'}}>test@amethyst-sols.com</span></span>
     
      </div>

      <div style={{display: 'flex',flexDirection: 'column', alignItems:'start'}}>

      <span style={{fontWeight:'bold', paddingTop: '15px'}}>{dataDetail?.details}</span>
      <h6 >
        {showMore ? text : `${text.substring(0, 360)}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "ย่อ" : "อ่านเพิ่มเติม"}
        </button>
      </h6>
      </div>
      </div>

      <Footer/>
    </div>
  );
}
