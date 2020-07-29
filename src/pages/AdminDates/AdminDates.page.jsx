import React,{ useState , useEffect } from 'react';
import "./AdminDates.styles.css";
import AdminHeader from "../../componente/AdminHeader/AdminHeader.component";

const AdminDates = (props) => {

  const[datesfordelivery, setDatesfordelivery] = useState({
    data:null,
    succes:false
  })

  const [apiresponse,setApiresponse] = useState({
    message:null,
    succes:null
  });

  const[dodajdatum,setDodajdatum] = useState({
    date: ''
  });

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization':`${localStorage.getItem('acessToken')}`,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
};

  const DodavanjeDatuma = () => {
    postData('http://localhost:3000/deliveries/date', {
      deliveryDate: dodajdatum.date
    })
    .then(data => {
      console.log(data);
      setApiresponse({
        message:data.message,
        succes:data.success
      });
      
    })
    .catch(error => console.log(error))
  };
  if(apiresponse.succes == true) window.location.reload(true);

  const handleChangeDatuma = (event) =>{
    setDodajdatum({
        date: event.target.value,
    })
  }

console.log(dodajdatum.date);

  useEffect(() => {
    fetch(`http://localhost:3000/deliveries/dates`,{  
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Authorization':`${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    })
      .then((response) => response.json())
      .then((data) => {
        setDatesfordelivery({
          data: data,
          succes:true
        });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setDatesfordelivery]);

  async function obrisiDatum(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Authorization':`${localStorage.getItem('acessToken')}`,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const ObrisiDatumDostave = (key) => {
    obrisiDatum('http://localhost:3000/deliveries/date/'+key, {
        "isCompleted": true
      })
    .then(data => {
      console.log(data);
      setApiresponse({
        message:data.message,
        succes:data.success
      });
      
    })
    .catch(error => console.log(error))
  };

  if(apiresponse.succes == true) window.location.reload(true);

      if(datesfordelivery.data){
      return(
          <div className = "AdminDates">
            <AdminHeader />
            <div className="AdminDatesNaslov">
              <h2>Datumi za isporuku</h2>
            </div>
            <div className="AdminDatesDatum">
              
                <label>Datum:</label>
                <input onChange={(event) => handleChangeDatuma(event)}  type="date" className="AdminDatesDatumInput" name="AdminDatesIsporuke"></input>
                <button onClick={() => DodavanjeDatuma()} type="submit" value="Submit" className="DugmeDatum" name="DodajDatum">Dodaj datum</button>
              
            </div>

            <div className = "DatumiZaIsporuke">
            {datesfordelivery.data.dates.map(datum => {
                return(
                  <div key={datum.id}className = "Naruceno">
                    <p>{datum.date.match(/\d+-\d+-\d+/g)}</p>
                    <p className="obrisidatumdostave" onClick={() => ObrisiDatumDostave(datum.id)}>Obrisi</p>
                    </div>
                )
              })}
            </div>
          </div>
      );}
      else return null;
}

export default AdminDates;