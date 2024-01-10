import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import data from "../../utils/mock/data.json";
import ButtonDelete from "../Button/Delete";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import styled from "@emotion/styled";



export default function ControlledSelectionGrid() {
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 10;
  const [rows, setRows] = React.useState([]);
  console.log("🚀 ~ ControlledSelectionGrid ~ rows:", rows)

  const navigate = useNavigate();

  React.useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const slicedRows = data?.rows?.slice(startIndex, startIndex + pageSize);

    setRows(slicedRows);
  }, [currentPage]);

  const columns = [
    {
      field: "id",
      hide: true,
      editable: false,
    },
    {
      field: "name",
      headerName: "ชื่อผลงาน",
      width: 200,
      editable: false,
    },
    {
      field: "typeOfWork",
      headerName: "ประเภทผลงาน",
      width: 200,
      editable: false,
    },
    {
      field: "startDate",
      headerName: "วันที่เริ่มแสดงผลงาน",
      width: 200,
      editable: false,
    },
    {
      field: "endDate",
      headerName: "วันที่สิ้นสุดแสดงผลงาน",
      width: 200,
      editable: false,
    },
    {
      field: "status",
      headerName: "สถานะ",
      width: 200,
      editable: false,
    },
    {
      field: "details",
      headerName: "",
      width: 200,
      renderCell: (rowSelectionModel) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleDetailsClick(rowSelectionModel)}
        >
          รายละเอียด
        </Button>
      ),
    },
  ];

  

  const handleDetailsClick = (details) => {
    const id = details?.id;
    navigate("/detail", { state: { details: id } });
  };

  const handleDeleteClick = (buttonName) => {
    if (buttonName === "Delete") {
      deleteSelectedRows();
    } else if (buttonName === "Delete All") {
      deleteAllRows();
    }
  };

  const deleteSelectedRows = () => {
    const updatedRows = data?.rows?.filter(
      (row) => !rowSelectionModel.includes(row.id)
    );
    console.log("Deleting selected rows:", rowSelectionModel);
    console.log("Updated rows:", updatedRows);
    const updatedPage = updatedRows?.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setRows(updatedPage);
  };

  const deleteAllRows = () => {
    setRows([]);
  };

  const Style = styled.div`
    .search {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `;

  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
      <Style>
        <div className="search">
          <Search name={"ชื่อผลงาน"} />
          <ButtonDelete
            onDeleteClick={handleDeleteClick}
            name1={"Delete"}
            name2={"Delete All"}
          />
        </div>
      </Style>
      <DataGrid
        checkboxSelection
        pagination
        // pageSizeOptions={[5, 10, 25, 50]}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}

        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        columns={columns}
        rows={rows}
      />
     
    </div>
  );
}
