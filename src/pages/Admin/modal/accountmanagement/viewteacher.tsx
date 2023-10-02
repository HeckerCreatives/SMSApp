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
  MDBInput,
  MDBTypography,
  MDBCardText,
} from 'mdb-react-ui-kit';
// import { env } from "process";
import "./index.css"
import { useIonToast } from '@ionic/react';
interface ContainerProps { data: any, basicModal: boolean, onbasicModal: any }
const ViewTeacher: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const { basicModal, data } = props
    const [openmodal, setopenmodal] = useState(false)

    useEffect(() => {
    setopenmodal(basicModal)
    console.log(data)
    },[basicModal])

    const handleChange = () => {
    props.onbasicModal(false)
    }
    
    return(
    <>
    
    <MDBModal show={openmodal} tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog>
          
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Teacher Details</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Username:</MDBCardText>
              <MDBInput name="username" readOnly value={data?.userdetail?.username}/>
              <MDBCardText>Password:</MDBCardText>
              <MDBInput name="password" readOnly value={data?.userdetail?.password}/>

              <MDBCardText>First Name:</MDBCardText>
              <MDBInput name="firstname" readOnly value={data?.firstname}/>
              <MDBCardText>Middle Name:</MDBCardText>
              <MDBInput name="middlename" readOnly value={data?.middlename}/>
              <MDBCardText>Last Name:</MDBCardText>
              <MDBInput name="lastname" readOnly value={data?.lastname}/>
              <MDBCardText>Contact:</MDBCardText>
              <MDBInput name="contact" readOnly value={data?.contact}/>
              <MDBCardText>Adress:</MDBCardText>
              <MDBInput name="address" readOnly value={data?.address}/>
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

export default ViewTeacher;