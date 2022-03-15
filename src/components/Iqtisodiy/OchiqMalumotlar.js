import React from 'react';
import { Table } from 'react-bootstrap';
import './OchiqMalumotlar.css'

function OchiqMalumotlar() {
  return ( 
    <div className='ochiq_malumotlar' id='ochiq-malumotlar'>
        <h3>Ochiq malumotlar</h3>
        <div className='malumotlar_table'>
            <Table striped hover>
                <tbody>
                    <tr>
                        <td>Moliyaviy natijalar to'g'risida hisobot 2019-yil 1-chorak</td>
                        <td><i className="fas fa-download"></i></td>
                    </tr>
                    <tr>
                        <td>Moliyaviy natijalar to'g'risida hisobot 2019-yil 2-chorak</td>
                        <td><i className="fas fa-download"></i></td>
                    </tr>
                    <tr>
                        <td>Moliyaviy natijalar to'g'risida hisobot 2019-yil 3-chorak</td>
                        <td><i className="fas fa-download"></i></td>
                    </tr>
                    <tr>
                        <td>Moliyaviy natijalar to'g'risida hisobot 2019-yil 4-chorak</td>
                        <td><i className="fas fa-download"></i></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default OchiqMalumotlar;