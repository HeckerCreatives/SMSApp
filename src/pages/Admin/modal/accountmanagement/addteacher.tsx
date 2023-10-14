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
interface ContainerProps { basicModal: boolean, onbasicModal: any }
const AddTeacher: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)
    const { basicModal } = props

    useEffect(() => {
      setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    const addteacher = (e: any) => {
      e.preventDefault();
      const { firstname, middlename, lastname, contact, address, username, password } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            firstname: firstname.value.toLowerCase(),
            middlename: middlename.value.toLowerCase(),
            lastname: lastname.value.toLowerCase(),
            contact: contact.value,
            address: address.value,
            username: username.value,
            password: password.value,
          }
        )
      })
      .then(result => result.json())
      .then(data => {
        if(data.message === "success"){
          present({
            message: data.message,
            duration: 5000,
            position: "bottom",
          }).then(() => {
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          })
        } else {
          present({
            message: data.data,
            duration: 5000,
            position: "bottom",
          });
        }
      })
    }

    return(
    <>
    
    <MDBModal show={openmodal}  tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog>
          <form autoComplete="off" onSubmit={addteacher}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Teacher</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Username:</MDBCardText>
              <MDBInput name="username"/>
              <MDBCardText>Password:</MDBCardText>
              <MDBInput name="password" type="password"/>
              <MDBCardText>First Name:</MDBCardText>
              <MDBInput name="firstname"/>
              <MDBCardText>Middle Name:</MDBCardText>
              <MDBInput name="middlename"/>
              <MDBCardText>Last Name:</MDBCardText>
              <MDBInput name="lastname"/>
              <MDBCardText>Contact:</MDBCardText>
              <MDBInput name="contact"/>
              <MDBCardText>Adress:</MDBCardText>
              <MDBInput name="address"/>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn type="button" color='secondary' onClick={handleChange}>
                Close
              </MDBBtn>
              <MDBBtn type="submit">Save teacher</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
          </form>
        </MDBModalDialog>
      </MDBModal>
      <div
        className={ openmodal ? "custom-backdrop1" : ""}
        onClick={() => handleChange}
        // style={{visibility: openmodal ? "hidden" : "visible"}}
      />
    </>
    )
}

export default AddTeacher;