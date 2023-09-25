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
import { useIonToast } from '@ionic/react';
import "./index.css"
interface ContainerProps { data: any, basicModal: boolean, onbasicModal: any }
const EditTeacher: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const { basicModal, data } = props
    const [openmodal, setopenmodal] = useState(false)

    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    props.onbasicModal(false)
    }

    const editteacher = (e: any) => {
        e.preventDefault();
        const { firstname, middlename, lastname, contact, address } = e.target;
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/update/${data?._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              firstname: firstname.value,
              middlename: middlename.value,
              lastname: lastname.value,
              contact: contact.value,
              address: address.value,
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
            });
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
    <>
    
    <MDBModal show={openmodal} tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog>
        <form autoComplete="off" onSubmit={editteacher}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Teacher Details</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
            <MDBCardText>First Name:</MDBCardText>
              <MDBInput name="firstname"  value={data?.firstname}/>
              <MDBCardText>Middle Name:</MDBCardText>
              <MDBInput name="middlename"  value={data?.middlename}/>
              <MDBCardText>Last Name:</MDBCardText>
              <MDBInput name="lastname"  value={data?.lastname}/>
              <MDBCardText>Contact:</MDBCardText>
              <MDBInput name="contact"  value={data?.contact}/>
              <MDBCardText>Adress:</MDBCardText>
              <MDBInput name="address"  value={data?.address}/>
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
      />
    </>
    )
}

export default EditTeacher;