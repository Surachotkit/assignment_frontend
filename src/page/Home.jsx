// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
// eslint-disable-next-line no-unused-vars
import DisableClickSelectionGrid from "../components/Table/TableData";
// eslint-disable-next-line no-unused-vars
import ButtonDelete from "../components/Button/Delete";
// eslint-disable-next-line no-unused-vars
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const Style = styled.div`
    .container_home {
      background-color: #f1f4f9;
      padding: 20px;
      border-radius: 20px;
      height: 90vh;
      
      
    }
  `;

  return (
    <>
      <Header />
      <Style>
        <div className="container_home">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <HomeIcon sx={{ width: "25px", height: "25px" }} />
            <h3>หน้าหลัก</h3>
          </div>

          <h2 style={{ display: "flex" }}>รายการผลงาน</h2>
          <DisableClickSelectionGrid />
        </div>
      </Style>
    </>
  );
}
