import React, {useState} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./texnikaTable.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#090761",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, amount, type) {
  return { name, amount, type };
}

const rows = [
    createData('Frozen yoghut', 24, "avtotransport"),
    createData('Ic cream sandwich', 237, "mexanizm"),
    createData('Ecair', 262, "ekskavator"),
    createData('Cucake', 305, "avtotransport"),
    createData('Gngerbread', 356, "mexanizm"),
    createData('Frozen oghurt', 24, "ekskavator"),
    createData('Ice ream sandwich', 237, "avtotransport"),
    createData('Eclir', 262, "mexanizm"),
    createData('Cupcae', 305, "ekskavator"),
    createData('Gingerread', 356, "avtotransport"),
    createData('Frozen yoghrt', 24, "mexanizm"),
    createData('Ice crea sandwich', 237, "ekskavator"),
    createData('Eclai', 262, "avtotransport"),
    createData('Cupcak', 305, "mexanizm"),
    createData('Gingerbred', 356, "ekskavator"),
  ];

export default function TexnikaTable() {
  const [state, setState] = useState({
    tableData: [],
    tableType: "avtotransport",
  });

  const changeTypeMenu = (type) => {
      setState(() => ({tableType: type}))
  }
 
  
  return (
    <div className="texnik-table" id="stat">
      <h2>Texnik statistika</h2>
      <div className="texnik-table-ramka">
        <div className="texnik-table-menu">
          <span onClick={() => changeTypeMenu("all")}
                className={`${state.tableType === "all" ? "texnik-menu-aktiv" : null}`}>Barchasi</span>

          <span onClick={() => changeTypeMenu("avtotransport")} 
                className={`${state.tableType === "avtotransport" ? "texnik-menu-aktiv" : null}`}>Avtotransport</span>

          <span onClick={() => changeTypeMenu("mexanizm")} 
                className={`${state.tableType === "mexanizm" ? "texnik-menu-aktiv" : null}`}>Mexanizm</span>

          <span onClick={() => changeTypeMenu("ekskavator")}
                className={`${state.tableType === "ekskavator" ? "texnik-menu-aktiv" : null}`}>Ekskavator</span>
        </div>
        {       
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Amount</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.tableType === "all" ?
                        rows.map((row) => {      
                          return (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {row.name}
                              </StyledTableCell>
                              <StyledTableCell align="right">{row.amount}</StyledTableCell>
                            </StyledTableRow>)
                        })
                      : rows.map((row) => {
                            if((row.type === state.tableType) && (row.type === "avtotransport")){
                              return (
                                <StyledTableRow key={row.name}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                </StyledTableRow>)
                            }else if((row.type === state.tableType) && (row.type === "mexanizm")){
                              return (
                                <StyledTableRow key={row.name}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                </StyledTableRow>)
                            }else if((row.type === state.tableType) && (row.type === "ekskavator")){
                              return (
                                <StyledTableRow key={row.name}>
                                  <StyledTableCell component="th" scope="row">
                                    {row.name}
                                  </StyledTableCell>
                                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                </StyledTableRow>)
                            }
                            return null;
                      })
                     
                  }
                </TableBody>
              </Table>
            </TableContainer>
        }    
        </div>
      </div>
    
  );
}
