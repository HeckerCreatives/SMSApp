import React, {useEffect, useState} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import ViewStudentsDetails from "./modal/studentmanagement/list";
const TeacherList: React.FC = () => {
  const [students, setStudents] = useState([])
  const [rowdata, setRowdata] = useState([]);
  const [subjectdata, setSubjectData] = useState("");
  const [basicModal, setBasicModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const auth = JSON.parse(localStorage.getItem("auth"))
  const toggleShow = (open: boolean, rowIndex: number) => {
      // Use the rowIndex to access the corresponding student data
      const rowData = students[rowIndex];

      setViewModal(open);
      setRowdata(rowData);
      // setSubjectData(rowData.subjectName);
    }


  useEffect(()=>{
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}grade/findstudent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: auth._id}) // teacher id
    })
    .then(result => result.json())
    .then(data => {
        if(data.message === "success"){
            setStudents(data.data)
            // setSubjectData(data.subjects)
            // console.log(data.data)
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
        <Breadcrumb text1="Student List" text2=""/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Student Detail</IonCardTitle>
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
                        <th scope='col'>Student Name</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {students.length !== 0 && students[0] !== null ? 
                      students.map((data: any, i) => (
                        <tr key={`subjects-${i}`}>
                          <td>{data.student.firstname + " " + data.student.middlename + " " + data.student.lastname}</td>
                              <td>{data.student.yearandsection.year}</td>
                              <td>{data.student.yearandsection.section}</td>
                              <td>
                                <MDBBtn 
                                  className="mx-1"
                                  onClick={() => {
                                    toggleShow(true, i);
                                  }}
                                >
                                  View Details
                                </MDBBtn>
                              </td>
                        </tr>
                      ))
                     : (
                      <tr>
                        <td colSpan={4}>No students found</td>
                      </tr>
                    )}


                    </MDBTableBody>
                </MDBTable>
            </IonCardContent>

            </IonCard>
          </IonCol>
        </IonRow>
        </IonGrid>
      </IonContent>
    <ViewStudentsDetails subject={subjectdata} data={rowdata} basicModal={viewModal} onbasicModal={toggleShow}/>
    </IonPage>
    )
}

export default TeacherList;