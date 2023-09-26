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
import "./index.css"
import { useIonToast } from '@ionic/react';
interface ContainerProps { data: any, basicModal: boolean, onbasicModal: any }
const ViewStudent: React.FC<ContainerProps> = (props) => {
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
              <MDBModalTitle>Student Details</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Username:</MDBCardText>
              <MDBInput name="username" readOnly value={data?.userdetails?.username}/>
              <MDBCardText>Password:</MDBCardText>
              <MDBInput name="middlename" readOnly value={data?.userdetails?.password}/>
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
              <MDBCardText>Mother:</MDBCardText>
              <MDBInput name="mother" readOnly value={data?.mother}/>
              <MDBCardText>Father:</MDBCardText>
              <MDBInput name="father" readOnly value={data?.father}/>
              <MDBCardText>Year:</MDBCardText>
              <MDBInput name="year" readOnly value={data?.yearandsection?.year}/>
              <MDBCardText>Section:</MDBCardText>
              <MDBInput name="section" readOnly value={data?.yearandsection?.section}/>
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

export default ViewStudent;