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
const AddList: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)
    const [yearselected, setyearselected] = useState("")
    const { basicModal } = props
    const currentYear = 2023;
    const years = Array.from({ length: 50 }, (_, index) => currentYear + index);
    useEffect(() => {
      setopenmodal(basicModal)
      console.log(new Date().getFullYear())
    },[basicModal])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    const addlist = (e: any) => {
      e.preventDefault();
      const { section } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            year: yearselected,
            section: section.value,
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
    
    <MDBModal show={openmodal}  tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog>
          <form autoComplete="off" onSubmit={addlist}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Year And Section List</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Year:</MDBCardText>
              <select className="bg-transparent text-dark p-1" onChange={(e:any) => setyearselected(e.target.value)}>
              <option disabled selected>Please Select</option>
              {years.map((year, index) => (
                <option key={`year${index}`} value={year}>
                  {year}
                </option>
              ))}
            </select>
              <MDBCardText>Section:</MDBCardText>
              <MDBInput name="section"/>
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

export default AddList;