import React , {useState, useEffect} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBBtn, MDBTypography, MDBInput,MDBIcon } from 'mdb-react-ui-kit';
import { IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonRow, IonCardHeader, useIonToast} from '@ionic/react';
import Breadcrumb from "../../components/breadcrumbs/breadcrumb";
import AddList from "./modal/yearandsection/addlistmodal";
import EditList from "./modal/yearandsection/editlistmodal";
const AdminYearAndSectionList: React.FC = () => {
    const [list, setList] = useState([])
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
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/find`)
      .then(result => result.json())
      .then(data => {
        setList(data.data)
      })
    },[])
    
    const destroy = (id: any) => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/destroy/${id}`, {
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
        <Breadcrumb text1="Year and Section" text2="List"/>
        <IonGrid>
        <IonRow>
         
          <IonCol>
            <IonCard>
                <IonCardHeader>
                <IonCardTitle>Class Detail</IonCardTitle>
                </IonCardHeader>
            <div className="h4 d-flex justify-content-between">
            
            <div className="d-flex align-items-center justify-content-center ms-3">
                &nbsp; Filter: &nbsp;
                <MDBInput/>
                
            </div>
            <div className="d-flex align-items-center justify-content-center">
            <MDBBtn onClick={() => toggleShow(true)} className="m-2">ADD</MDBBtn>
            </div>
            
            </div>
            
            <IonCardContent>
                <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>Year</th>
                        <th scope='col'>Section</th>
                        <th scope='col'>Date Created</th>
                        <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      { list.length !== 0 ? 
                      list.map((lists: any,i) => (
                      <tr key={`list-${i}`}>
                        <td>{lists.year}</td>
                        <td>{lists.section}</td>
                        <td>{new Date(lists.createdAt).toLocaleString()}</td>
                        <td>
                            <MDBBtn onClick={() => toggleShow1(true,lists)} block className="mx-1">
                                Edit
                            </MDBBtn>
                            <MDBBtn onClick={() => destroy(lists._id)} block className="mx-1">
                                Delete
                            </MDBBtn>
                        </td>
                      </tr>
                      ))
                      :
                      <tr>
                      <td colSpan={4}> No Data </td>
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
      <AddList basicModal={basicModal} onbasicModal={toggleShow}/>
      <EditList data={rowdata} basicModal={editModal} onbasicModal={toggleShow1}/>
    </IonPage>
    )
}

export default AdminYearAndSectionList;