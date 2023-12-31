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
const EditTeacher: React.FC<ContainerProps> = ({data , basicModal, onbasicModal}) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)

    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    onbasicModal(false)
    }

    const editteacher = (e: any) => {
        e.preventDefault();
        const { firstname, middlename, lastname, contact, address, password } = e.target;
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/update/${data._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              firstname: firstname.value ? firstname.value : data?.firstname,
              middlename: middlename.value ? middlename.value : data?.middlename,
              lastname: lastname.value ? lastname.value : data?.lastname,
              contact: contact.value ?  contact.value : data?.contact,
              address: address.value ?  address.value : data?.address,
              // for login
              loginid: data?.userdetail?._id,
              password: password.value ?  password.value : data?.userdetail?.password
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
              <MDBCardText>Username:</MDBCardText>
              <MDBInput name="username" label={data?.userdetail?.username} readOnly/>
              <MDBCardText>Password:</MDBCardText>
              <MDBInput name="password" type="password" label={data?.userdetail?.password}/>
              <MDBCardText>First Name:</MDBCardText>
              <MDBInput name="firstname"  type="text" label={data?.firstname} />
              <MDBCardText>Middle Name:</MDBCardText>
              <MDBInput name="middlename"  type="text" label={data?.middlename} />
              <MDBCardText>Last Name:</MDBCardText>
              <MDBInput name="lastname"  type="text" label={data?.lastname} />
              <MDBCardText>Contact:</MDBCardText>
              <MDBInput name="contact"  type="text" label={data?.contact} />
              <MDBCardText>Adress:</MDBCardText>
              <MDBInput name="address"  type="text" label={data?.address} />
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