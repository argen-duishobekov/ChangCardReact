import { useState } from "react";
import { User } from "./components/User/index";
import "./App.css";
import { data } from "./data";
export const App = () => {
  const [status, setStatus] = useState("FIRST");
  const [nexstatus,setNexstatus] = useState("true");
  const renderUsers = () => {
    switch (status) {
      // 1 - render
      case "FIRST":
        let arr = data.filter((el) => {
          return el.status == "FIRST";
        });
        return arr.map((el, id) => {
          return <User el={el} key={id} />;
        });
      // 2-render
      case "SECOND":
        let arr2 = data.filter((el) => {
          return el.status == "SECOND";
        });
        return arr2.map((el, id) => {
          return <User el={el} key={id} color="green" />;
        });
      // 3-render
      case "THREE":
        let arr3 = data.filter((el) => {
          return el.status == "THREE";
        });
        return arr3.map((el, id) => {
          return <User el={el}  key={id} color="darkred" />;
        });
        case "ALL":
        return data.map((el,id) => {
          return <User el={el} key={id} color="darkred" />
        })
        case "KYR":
          let arr4 = data.filter((el) => {
            return el.country == "Kyrgyzstan";
          });
          return arr4.map((el, id) => {
            return <User el={el}  key={id} color="darkred" />;
          });
      default:
        return "";


    }      
    // case "KYR":
      // let arr = data.filter((el) => {
        // return el.country == "Kyrgyzstan";
      // });
      // return arr.map((el, id) => {
        // return <User el={el}  key={id} color="darkred" />;
      // });
  };
    
  
    // case "KYR":
      // let arr = data.filter((el) => {
        // return el.country == "Kyrgyzstan";
      // });
      // return arr.map((el, id) => {
        // return <User el={el}  key={id} color="darkred" />;
      // });
  // 

  return (
    <div className="App">
      <div className="btns-group">
        <button
          className="btn"
          onClick={() => setStatus("FIRST")}
          style={
            status == "FIRST"
              ? { backgroundColor: "cadetblue" }
              : { backgroundColor: "grey" }
              
          }
        >
          Adolescent
        </button>
        <button
          className="btn"
          onClick={() => setStatus("SECOND")}
          style={
            status == "SECOND"
              ? { backgroundColor: "cadetblue" }
              : { backgroundColor: "grey"  }
          }
        >
          Youth
        </button>
        <button
          className="btn"
          onClick={() => setStatus("THREE")}
          style={
            status == "THREE"
              ? { backgroundColor: "cadetblue" }
              : { backgroundColor: "grey"  }
          }
        >
          Awkward
        </button>
        <button 
        className="btn"
        onClick={() => setStatus("ALL")  }
        style={
          status == "ALL"
           ? { backgroundColor: "cadetblue" }
           : { backgroundColor: "grey"  }
                 
        }
         >
         ALL
        </button>
        
        <button
         className="btn"
        onClick={() => setStatus("KYR")}
        style={
          status == "KYR"
           ? { backgroundColor: "cadetblue" }
           : { backgroundColor: "grey"  }
        }       
        >
          KYR
        </button>
      </div>
      <div className="container">{renderUsers()}</div>
    </div>
  );
};