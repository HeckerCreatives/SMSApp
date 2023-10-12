import React, {useEffect, useState} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
const StudentGrades: React.FC = () => {
  const [mygrades, setMyGrades] = useState([])
  const [mysubjects, setMySubjects] = useState([])
  const auth = JSON.parse(localStorage.getItem("auth"))
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}grade/find`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: "651a83d04795523dca9b5394"})
    })
    .then(result => result.json())
    .then(data => {
      setMyGrades(data.data)
    })
  },[])

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/findsubject`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: auth._id})
    })
    .then(result => result.json())
    .then(data => {
      setMySubjects(data.data)
    })
  },[])

    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Student</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Grades" text2=""/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Grades Detail</IonCardTitle>
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
                        <th scope='col'>Subject</th>
                        <th scope='col'>Q1</th>
                        <th scope='col'>Q2</th>
                        <th scope='col'>Q3</th>
                        <th scope='col'>Q4</th>
                        <th scope='col'>GWA</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {/* <tr>
                          <td colSpan={6}>
                            No Data Yet
                          </td>
                        </tr> */}
                      { mygrades.length !== 0 ?
                        mysubjects.map((data:any, i) =>(
                        <tr>
                          <td>{data.subjectname}</td>
                          {mygrades
                          .filter((gradeData: any) => gradeData.subject._id === data._id)
                          .map((filteredGradeData: any, j) => (
                            <td key={j}>{filteredGradeData.grade || "no data"}</td>
                          ))}
                        </tr>
                        ))
                      :
                        <tr>
                          <td>
                            No Data Yet
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
    </IonPage>
    )
}

export default StudentGrades;