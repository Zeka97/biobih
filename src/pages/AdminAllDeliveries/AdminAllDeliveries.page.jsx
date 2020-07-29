import React,{ useState , useEffect } from 'react';
import "./AdminAllDeliveries.styles.css";
import AdminHeader from "../../componente/AdminHeader/AdminHeader.component";
import OneOrder from "../../componente/OneOrder/OneOrder.component";
import ReactToExcel from 'react-html-table-to-excel'

const AdminAllDeliveries = (props) => {

  const[spisakNarudzbi, setSpisakNarudzbi] = useState({
    data: null
    /* deliveryDate:'',
    isCompleted:'',
    order:{
      user:{
        adress:'',
        fullName:'',
        email:'',
        municipality:'',
        phone:''
      }
    },
    products:{
      consumed:'',
      name:''
    } */

  });


    useEffect(() => {
        fetch(`http://localhost:3000/deliveries`,{  
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization':`${localStorage.getItem('acessToken')}`,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
          .then((response) => response.json())
          .then((data) => {
            setSpisakNarudzbi({
              data: data
              /*deliveries:{  
                deliveryDate: spisakNarudzbi.deliveries.deliveryDate,
                isCompleted: spisakNarudzbi.deliveries.isCompleted,
                order:{
                  user:{
                    adress: spisakNarudzbi.deliveries.order.adress,
                    fullName: spisakNarudzbi.deliveries.order.fullName,
                    email: spisakNarudzbi.deliveries.order.email,
                    municipality: spisakNarudzbi.deliveries.order.municipality,
                    phone: spisakNarudzbi.deliveries.order.phone
                  }
                },
                products:{
                  consumed: spisakNarudzbi.deliveries.products.consumed,
                  name: spisakNarudzbi.deliveries.products.name
                }
              }*/
            });
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [setSpisakNarudzbi]);

      
      if(spisakNarudzbi.data){
        console.log(spisakNarudzbi.data)
      }
      if(spisakNarudzbi.data){
        return(
            <div className = "AdminAllDeliveries">
              <AdminHeader />
              <div className = "ExpExcel">
              <ReactToExcel
              table="excell"
              filename="excelFile"
              sheet="sheet 1"
              buttonText="Export to .xls"
            />  
              </div>
              <div className = "AdminAllDeliveriesTable">
              <table border="1" id="excell">
            <thead>
                    <tr>
                        <th>Status</th>
                        <th>Ime i prezime</th>
                        <th>Email adresa</th>
                        <th>Broj telefona</th>
                        <th>Opstina stanovanja</th>
                        <th>Adresa stanovanja</th>
                        <th>Dattum za posiljku</th>
                        <th>Krompira</th>
                        <th>Luka</th>
                        <th>Mrkve</th>
                    </tr>
                </thead>
              {spisakNarudzbi.data.deliveries.map(narudzba => (
                <OneOrder 
                  status={narudzba.isCompleted}
                  ime_prezime={narudzba.order.user.fullName}
                  email={narudzba.order.user.email}
                  telefon={narudzba.order.user.phone}
                  opstina={narudzba.order.user.municipality}
                  adresa={narudzba.order.user.address}
                  datum={narudzba.deliveryDate}
                  krompira={narudzba.products[0].consumed}
                  mrkve={narudzba.products[1].consumed}
                  luka={narudzba.products[2].consumed}

                />
              ))}
            </table>
              </div>
            </div>  
        );
      } else {
        return null;
      }
}

export default AdminAllDeliveries;