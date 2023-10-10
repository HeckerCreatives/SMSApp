import React, { useEffect, useState } from "react";
import { 
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTable, MDBTableHead, MDBTableBody,
} from 'mdb-react-ui-kit';
// import { env } from "process";
import "./index.css"
import { useIonToast } from '@ionic/react';
interface ContainerProps { data: any, basicModal: boolean, onbasicModal: any }
const ViewStudentsSubject: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const { basicModal, data } = props
    const [openmodal, setopenmodal] = useState(false)
    const [students, setStudents] = useState([])
    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    props.onbasicModal(false)
    }
    
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}student/findstudent`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id: data?data:""})
        })
        .then(result => result.json())
        .then(data => {
            console.log(data)
            if(data.message === "success"){
                setStudents(data.data)
            }
        })
        console.log(data)
    },[data])

    return(
    <>
    
    <MDBModal show={openmodal} tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog>
          
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Students</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
            <MDBTable className="table-bordered text-center" responsive>
                <MDBTableHead>
                    <tr>
                    <th scope='col'>Name</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    { students.length !== 0 ?
                    students.map((data: any,i) => (
                    <tr key={`${i}`}>
                        <td>{data.firstname + " " + data.middlename + " " + data.lastname}</td>
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
            
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={handleChange}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div
        className={ openmodal ? "custom-backdrop1" : ""}
        onClick={() => handleChange}
      />
    </>
    )
}

export default ViewStudentsSubject;