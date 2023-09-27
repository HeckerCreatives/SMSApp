import React , {useState, useEffect} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader, useIonToast} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import AddSubject from "./modal/subject/addsubject";
import EditSubject from "./modal/subject/editsubject";
const AdminSubjectList: React.FC = () => {
  const [subject, setSubject] = useState([])
  const [basicModal, setBasicModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [rowdata, setRowdata] = useState([]);
  const [present] = useIonToast();
  const toggleShow = (open: boolean) => setBasicModal(open);

  

  const toggleShow1 = (open: boolean, data: any) => {
    setEditModal(open)
    setRowdata(data)
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/find`)
    .then(result => result.json())
    .then(data => {
      setSubject(data.data)
    })
  },[])

  const destroy = (id: any) => {
    fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/destroy/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(result => result.json())
    .then(data => {
      if(data.message === "success"){
        present({
          message: "Deleted Successfully",
          duration: 5000,
          position: "bottom",
        }).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        })
      } else {
        present({
          message: data.message,
          duration: 5000,
          position: "bottom",
        });
      }
    })
  }

    return(
    <IonPage>
      <IonContent>
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Administrator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Breadcrumb text1="Subject" text2="List"/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Subject Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
                &nbsp; Search: 
                &nbsp; <MDBInput/>
                &nbsp; <MDBBtn>
                <MDBIcon fas icon="search" size="xl" />
                </MDBBtn>
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <MDBBtn onClick={() => toggleShow(true)} className="m-2">ADD</MDBBtn>
            </div>
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Subject</th>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Date Created</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      { subject.length !== 0 ?
                      subject.map((data: any,i) =>(
                      <tr>
                        <td>{data.subjectname}</td>
                        <td>{data.yearandsection.year}</td>
                        <td>{data.yearandsection.section}</td>
                        <td>{new Date(data.createdAt).toLocaleString()}</td>
                        <td>
                            <MDBBtn onClick={() => toggleShow1(true,data)} block className="mx-1">
                                Edit
                            </MDBBtn>
                            <MDBBtn onClick={() => destroy(data._id)} block className="mx-1">
                                Delete
                            </MDBBtn>
                        </td>
                      </tr>
                      ))
                      
                      :
                      <tr>
                        <td colSpan={5}>No Data</td>
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
      <AddSubject basicModal={basicModal} onbasicModal={toggleShow}/>
      <EditSubject data={rowdata} basicModal={editModal} onbasicModal={toggleShow1}/>
    </IonPage>
    )
}

export default AdminSubjectList;