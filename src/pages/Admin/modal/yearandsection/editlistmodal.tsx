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
const EditList: React.FC<ContainerProps> = ({data , basicModal, onbasicModal}) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)

    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    onbasicModal(false)
    }

    const editlist = (e: any) => {
        e.preventDefault();
        const { year, section } = e.target;
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/update/${data._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
                year: year.value ? year.value : data?.year,
                section: section.value ? section.value : data?.section,
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
        <form autoComplete="off" onSubmit={editlist}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Year and Section List Details</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
            <MDBCardText>Year:</MDBCardText>
              <MDBInput name="year" label={data?.year}/>
              <MDBCardText>Section:</MDBCardText>
              <MDBInput name="section" label={data?.section}/>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn type="button" color='secondary' onClick={handleChange}>
                Close
              </MDBBtn>
              <MDBBtn type="submit">Save List</MDBBtn>
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

export default EditList;