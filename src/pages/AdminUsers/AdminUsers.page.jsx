import React,{ useState , useEffect } from 'react';
import "./AdminUsers.styles.css";
import AdminHeader from "../../componente/AdminHeader/AdminHeader.component";
import ReactToExcel from 'react-html-table-to-excel'

import Button from '../../componente/Button/Button.component';
import Users from '../../componente/AdminAllUsersComponent/Users.component'
import OneUser from '../../componente/OneUser/OneUser.component'

const AdminUsers = (props) => {

    const[users,setUsers] = useState({
      data: null,
      succes: false
      /*users:{
        adress:'',
        email:'',
        fullName:'',
        id:'',
        isActive:'',
        municipality:'',
        orders:{
          id:'',
          price:'',
          products:{
            name:'',
            total:'',
            used:''
          }
        }
      },
      phone:'',*/
    });

    useEffect(() => {
        fetch(`http://localhost:3000/users`,{  
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization':`${localStorage.getItem('acessToken')}`,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
          .then((response) => response.json())
          .then((data) => {
            setUsers({
              data: data,
              succes:true
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }, [setUsers]);


      const[searchfield,setsearchField] = useState({
        search:''
      });

      const handleChange = (e) => {
        setsearchField({
          search:e.target.value
        })
      } 

      async function AktivirajUsera(url = '', data={}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Authorization':`${localStorage.getItem('acessToken')}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      };
  

      const handleClick = (id) => {
          AktivirajUsera(`http://localhost:3000/users/${id}`,{
            isActive: true
          })
          .then(data => {
            console.log(data)
            if(data.success)
            window.location.reload(true);
          })
          .catch(error => console.log(error))
      }


      const[usernarudzba,setUserNarudzba] = useState({
        products:{
        krompir:null,
        mrkva:null,
        luk: null
        },
        price:null,
        id:null
      });

      const handleChangeKrompira = (e) => {
        setUserNarudzba({
          products:{
            krompir:e.target.value,
            mrkva:usernarudzba.products.mrkva,
            luk:usernarudzba.products.luk
          },
          price: usernarudzba.price,
          id: usernarudzba.id
        })
      }
      const handleChangeLuka = (e) => {
        setUserNarudzba({
          products:{
            luk:e.target.value,
            mrkva:usernarudzba.products.mrkva,
            krompir :usernarudzba.products.krompir
          },
          price: usernarudzba.price,
          id: usernarudzba.id
        })
      }
      const handleChangeMrkve = (e) => {
        setUserNarudzba({
          products:{
            mrkva:e.target.value,
            krompir:usernarudzba.products.krompir,
            luk:usernarudzba.products.luk
          },
          price: usernarudzba.price,
          id: usernarudzba.id
        })
      }
      const handleChangeCijena = (e) => {
        setUserNarudzba({
          products:{
            krompir: usernarudzba.products.krompir,
            mrkva:usernarudzba.products.mrkva,
            luk:usernarudzba.products.luk
          },
          price: e.target.value,
          id: usernarudzba.id
        })
      }
      const handleChangeID = (e) => {
        setUserNarudzba({
          products:{
            krompir: usernarudzba.products.krompir,
            mrkva:usernarudzba.products.mrkva,
            luk:usernarudzba.products.luk
          },
          price: usernarudzba.price,
          id: e.target.value
        })
      }

      const DodajZalihe = () => {
          AktivirajUsera(`http://localhost:3000/auth/order/${usernarudzba.id}`,{
              price: usernarudzba.price,
              products: {
                 Krompir: usernarudzba.products.krompir,
                 Mrkva: usernarudzba.products.mrkva,
                 Luk: usernarudzba.products.luk
              }
          })
          .then(data => {
            console.log(data);
            if(data.success)window.location.reload(true);
            
          })
          .catch(error => console.log(error))
      };

      console.log(usernarudzba);
        

      if(users.data)
      return(
          <div className = "AdminUsers">
            <AdminHeader />
                <div className="dopunizalihe">
                  <span>ID Usera</span><input type="number" onChange={(e) => handleChangeID(e)}></input>
                  <span>KG Krompira</span><input type="number" onChange={(e) => handleChangeKrompira(e)}></input>
                  <span>KG Mrkve</span><input type="number" onChange={(e) => handleChangeMrkve(e)}></input>
                  <span>KG Luka</span><input type="number" onChange={(e) => handleChangeLuka(e)}></input>
                  <span>CIJENA</span><input type="number" onChange={(e) => handleChangeCijena(e)}></input>
                    <Button handleClick={() => DodajZalihe()} rezervisi>Dodaj zalihe</Button>
                    <ReactToExcel
                      table="excel_users"
                      filename="excelFile"
                      sheet="sheet 1"
                      buttonText="Export to .xls"
                    />  
                </div>
                  
            <input className="searchbox" onChange={(e) => handleChange(e)} type="textbox" placeholder="Unesite ime usera"></input>

          {
          !searchfield.search
          ?
          users.data.users.map(user =>(
              <Users 
                id={user.id}
                key={user.id}
                cijenapaketa={user.orders[0].price}
                status={user.isActive}
                ime_prezime={user.fullName}
                email={user.email}
                telefon={user.phone}
                opstina={user.municipality}
                adresa={user.address}
                krompir={user.orders[0].products[0].total - user.orders[0].products[0].used}
                mrkva={user.orders[0].products[1].total - user.orders[0].products[1].used}
                luk={user.orders[0].products[2].total - user.orders[0].products[2].used}
                handleClick={() => handleClick(user.id)}
              />
          ))
          :
          users.data.users.filter(user => user.fullName.toLowerCase().includes(searchfield.search.toLowerCase())).map(user =>(
            <Users 
              id={user.id}
              key={user.id}
              cijenapaketa={user.orders[0].price}
              status={user.isActive}
              ime_prezime={user.fullName}
              email={user.email}
              telefon={user.phone}
              opstina={user.municipality}
              adresa={user.address}
              krompir={user.orders[0].products[0].total - user.orders[0].products[0].used}
              mrkva={user.orders[0].products[1].total - user.orders[0].products[1].used}
              luk={user.orders[0].products[2].total - user.orders[0].products[2].used}
            />
        ))
        }

        
        <div className = "TabelaKorisnika">
          <table border="1" id="excel_users">
            <thead>
              <tr>
                  <th>Id</th>
                  <th>Ime i prezime</th>
                  <th>Mail</th>
                  <th>Telefon</th>
                  <th>Opstina</th>
                  <th>Adresa</th>
                  <th>Krompir</th>
                  <th>Mrkva</th>
                  <th>Luk</th>
                  <th>Cijena</th>
                  <th>Status</th>
              </tr>
            </thead>
            {
            users.data.users.map(user =>(
              <OneUser 
                id={user.id}
                key={user.id}
                cijenapaketa={user.orders[0].price}
                status={user.isActive}
                ime_prezime={user.fullName}
                email={user.email}
                telefon={user.phone}
                opstina={user.municipality}
                adresa={user.address}
                krompir={user.orders[0].products[0].total - user.orders[0].products[0].used}
                mrkva={user.orders[0].products[1].total - user.orders[0].products[1].used}
                luk={user.orders[0].products[2].total - user.orders[0].products[2].used}
              />
            ))
            }
          </table>   
        </div>

          </div>

          
      );

      else return null;
}

export default AdminUsers;

