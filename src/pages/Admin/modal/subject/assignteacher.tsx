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
const AssignSubjectTeacher: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)
    const [teachers, setTeachers] = useState([])
    const [teacherid, setTeacherId] = useState("")
    const { basicModal , data} = props

    useEffect(() => {
      setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    const handleSelectAdviser = (e: any) => {
      const selectedValue = e.target.value
      if(selectedValue !== ""){
          setTeacherId(selectedValue)
      } else {
          setTeacherId("")
      }
      
    }

    useEffect(() => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/find`)
      .then(result => result.json())
      .then(data => {
        setTeachers(data.data)
      })
    },[])


    const addlist = (e: any) => {
      e.preventDefault();
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/update/${data._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            teacher: teacherid ? teacherid : data?.teacher
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
              <MDBModalTitle>Assign Teacher</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Teacher:</MDBCardText>
              <select onChange={(e)=> handleSelectAdviser(e)} className="bg-transparent text-dark p-1">
                <option disabled selected>Please Select</option>
                {teachers.map((data: any,i) =>(
                    <option key={`teacher-${i}`} value={data._id}>{data.firstname + " " + data.middlename + " " + data.lastname}</option>
                ))}
              </select>
              <MDBCardText>Subject Name:</MDBCardText>
              <MDBInput name="subjectname" readOnly value={data?.subjectname}/>
              <MDBCardText>Year:</MDBCardText>
              <MDBInput name="year" readOnly value={data?.yearandsection?.year}/>
              <MDBCardText>Section:</MDBCardText>
              <MDBInput name="section" readOnly value={data?.yearandsection?.section}/>
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

export default AssignSubjectTeacher;