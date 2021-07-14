import React, { useState, useEffect } from "react";
import Cards from "./Card";
import axios from "axios";
import Loader from "./Loader";

function Header() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  var count=0;

  function get() {

    if(count==0){
          setLoading(true)

      count++;

    }
    setTimeout(function () {
      getuser();
    }, 2000);
  }



  const getuser = async () => {
    
    setLoading(false)

    const result = await axios("https://reqres.in/api/users?page=1");

    setData(result.data.data);
  };

  return (
    <div>
      <Navbar className="nav mr-auto" expand="lg">
        <Navbar.Brand href="#home" className="brand">
          LGM USERS
        </Navbar.Brand>
        <Button className="ml-auto get-btn" onClick={get}>
          Get Users
        </Button>

      </Navbar>
      <div>
    {  loading&&<Loader/>}
        <div className="row">
          {data.map((Card) => {
            return (
              <>
                <Cards
                  email={Card.email}
                  fName={Card.first_name}
                  lName={Card.last_name}
                  avatar={Card.avatar}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
