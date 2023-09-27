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
const AddSubject: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)
    const [yands, setYandS] = useState([])
    const [selectyands, setSelectyands] = useState("")
    const { basicModal } = props

    useEffect(() => {
      setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    const handleSelect = (e: any) => {
        const selectedValue = e.target.value
        if(selectedValue !== ""){
            setSelectyands(selectedValue)
        } else {
            setSelectyands("")
        }
        
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/find`)
        .then(result => result.json())
        .then(data => {
          setYandS(data.data)
        })
    },[])

    const addlist = (e: any) => {
      e.preventDefault();
      const { subject } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            subjectname: subject.value,
            yearandsection: selectyands,
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
              <MDBModalTitle>Add Subject List</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Subject Name:</MDBCardText>
              <MDBInput name="subject"/>
              <MDBCardText>Year and Section:</MDBCardText>
              
              <select onChange={(e)=> handleSelect(e)} className="bg-transparent text-dark p-1">
                <option disabled selected>Please Select</option>
                {yands.map((data: any,i) =>(
                    <option key={`yands-${i}`} value={data._id}>{data.year + " - " + data.section}</option>
                ))}
                
              </select>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn type="button" color='secondary' onClick={handleChange}>
                Close
              </MDBBtn>
              <MDBBtn type="submit">Save</MDBBtn>
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

export default AddSubject;