import React, { useState, useEffect } from 'react';
import "./AdminPosts.styles.css";
import AdminHeader from "../../componente/AdminHeader/AdminHeader.component";
import Button from '../../componente/Button/Button.component';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AdminPosts = (props) => {

  const [clanak, setValue] = useState({
    title: "",
    image: "",
    text: ""
  });

  const handleOnChange = (e) => {
    setValue({
      title: clanak.title,
      image: clanak.image,
      text: e.target.value
    })
    console.log(clanak)
  };

  const handleChangeSubject = (e) => {
    setValue({
      title: e.target.value,
      image: clanak.image,
      text: clanak.tekst
    })
    console.log(clanak)
  }

  const handleChangeSlika = (e) => {
    setValue({
      title: clanak.title,
      image: e.target.value,
      text: clanak.tekst
    })
    console.log(clanak)
  }

  async function Article(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Authorization': `${localStorage.getItem('acessToken')}`,
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const DodajClanak = () => {
    Article(`http://localhost:3000/news`, {
      title: clanak.title,
      image: clanak.image,
      text: clanak.text
    })
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log(error))
  };


  return (
    <div className="AdminPosts">
      <AdminHeader />
      <div className="AdminPosts_Heading">
        <h1>Add a post</h1>
      </div>
      <div className="AdminPostos_Editor">
        <form>
          <span>Naslov</span><textarea onChange={(e) => handleChangeSubject(e)}></textarea>
          <span>Slika</span><textarea onChange={(e) => handleChangeSlika(e)}></textarea>
          <span>Tekst</span><textarea onChange={(e) => handleOnChange(e)}></textarea>
          <Button handleClick={() => DodajClanak()} rezervisi >Dodaj Clanak</Button>
        </form>
        <div>
          {ReactHtmlParser(clanak.text)}
        </div>
      </div>

    </div>

  );
}

export default AdminPosts;