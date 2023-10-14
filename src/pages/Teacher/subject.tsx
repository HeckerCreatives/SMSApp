import React , { useState, useEffect }from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import ViewStudentsSubject from "./modal/subject/viewstudents";
const TeacherSubjectList: React.FC = () => {
  const [mysubject, setMySubject] = useState([])
  const [backup, setBackup] = useState([])
  const [rowdata, setRowdata] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  // const [selectedYear, setSelectedYear] = useState("");
  const auth = JSON.parse(localStorage.getItem("auth") || '{}')
  const currentYear = 2023;
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);

  const toggleShow = (open: boolean, data: any) => {
    setViewModal(open)
    setRowdata(data)
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/teachersubject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: auth._id})
    })
    .then(result => result.json())
    .then(data => {
      
      if(data.message === "success"){
        setMySubject(data.data)
        setBackup(data.data)
      }
    })
  },[])

  const handleSelectYear = (e: any) => {
    const selectedYear = e.target.value;
    if(selectedYear && selectedYear !== ""){
      setMySubject(
        backup.filter((e:any) => e.yearandsection.year.toString() === selectedYear)
      )
    } else {
      setMySubject(backup)
    }
  };

    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Teacher</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Subject" text2=""/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Subject Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">

            <select className="bg-transparent text-dark" onChange={handleSelectYear}>
                <option selected value="">All</option>
                  {years.map((year, index) => (
                    <option key={`year${index}`} value={year}>
                      {year}
                    </option>
                  ))}
            </select>

            </div>
            {/* <div className="d-flex align-items-center justify-content-center">
            <MDBBtn className="m-2">ADD</MDBBtn>
            </div> */}
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Assigned At</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      { mysubject.length !== 0 ?
                        mysubject.map((data: any,i) => (
                        <tr key={`subjects-${i}`}>
                          <td>{data.yearandsection.year}</td>
                          <td>{data.yearandsection.section}</td>
                          <td>{data.subjectname}</td>
                          <td>{new Date(data.createdAt).toLocaleString()}</td>
                          <td>
                              <MDBBtn 
                              className="mx-1"
                              onClick={() => {
                                toggleShow(true, data.yearandsection._id)
                              }}
                              >
                                  View Students
                              </MDBBtn>
                          </td>
                        </tr>
                        ))
                      :
                          <tr>
                            <td colSpan={5}>
                              No data
                            </td>
                          </tr>
                      }
                        
                        
                    </MDBTableBody>
                </MDBTable>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
      <ViewStudentsSubject data={rowdata} basicModal={viewModal} onbasicModal={toggleShow}/>  
    </IonPage>
    )
}

export default TeacherSubjectList;