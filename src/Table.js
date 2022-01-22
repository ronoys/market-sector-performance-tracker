import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


function Table2(props) {
    return (
    
        <TableBody>
            <TableRow>
              <TableCell>{props.description}</TableCell>
              <TableCell>{props.identifier}</TableCell>
              <TableCell >{props.lastdate}</TableCell>
              <TableCell width='1%' 
              sx = {{
                  color: 'black',
                  fontWeight: 'bold',
                  ...(props.interval > 0 && {
                      color: 'green'
                  }),
                  ...(props.interval < 0 && {
                      color: 'red'
                  })
                  }}>
                      {props.interval}
               </TableCell>
            </TableRow>
        </TableBody>
    

        
    );
}

export default Table2;