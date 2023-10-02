import React , { useState, useEffect }from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import ViewStudentsSubject from "./modal/subject/viewstudents";
const TeacherSubjectList: React.FC = () => {
  const [mysubject, setMySubject] = useState([])
  const [rowdata, setRowdata] = useState([]);
  const [basicModal, setBasicModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

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
      body: JSON.stringify({id: "651a81b74795523dca9b5360"})
    })
    .then(result => result.json())
    .then(data => {
      if(data.message === "success"){
        setMySubject(data.data)
      }
    })
  },[])

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
            <select name="fruits" className="bg-transparent text-dark">
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="cherry">Cherry</option>
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
                            <td>
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