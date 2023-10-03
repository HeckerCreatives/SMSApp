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
  MDBTable, MDBTableHead, MDBTableBody,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import "./index.css"
import { useIonToast } from '@ionic/react';
interface ContainerProps { data:any, basicModal: boolean, onbasicModal: any }
const EditGradingStudent: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [oldgrades, setOldGrades] = useState([])
    const [grade, setGrade] = useState("")
    const [oldgradeid, setOldGradeId] = useState("")
    const [openmodal, setopenmodal] = useState(false)
    const { basicModal, data } = props

    useEffect(() => {
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}grade/findone`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({subjectid: data?.subject?._id, studentid: data?.student?._id})
        })
        .then(result => result.json())
        .then(item => {
            // console.log(item.data)
            setOldGrades(item.data)
        })
    },[data])


    useEffect(() => {
      setopenmodal(basicModal)
    //   console.log(data)
    },[basicModal])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    const editgrade = (e: any) => {
      e.preventDefault();
    //   const { grade } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}grade/update/${oldgradeid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            grade: grade,
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
        <MDBModalDialog size="lg">
          <form autoComplete="off" onSubmit={editgrade}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Grade</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>

            <MDBModalBody>
                <MDBRow>
                    <MDBCol >
                    <MDBCardText>Name: {data?.student?.firstname + " " + data?.student?.middlename + " " + data?.student?.lastname}</MDBCardText>
                    </MDBCol>
                    <MDBCol >
                    <MDBCardText>Year: {data?.student?.yearandsection?.year}</MDBCardText>
                    </MDBCol>
                    <MDBCol >
                    <MDBCardText>Section: {data?.student?.yearandsection?.section}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText>Adress: {data?.student?.address}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold">Full Grades On Subject: {data?.subject?.subjectname}</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                    <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Subject</th>
                            <th scope='col'>Q1</th>
                            <th scope='col'>Q2</th>
                            <th scope='col'>Q3</th>
                            <th scope='col'>Q4</th>
                            <th scope='col'>Remarks</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>{data?.subject?.subjectname}</td>
                            { oldgrades?.map((data: any, i) => (
                            <td key={`grade-${i}`}>
                                <MDBInput  
                                label="Set Grade" 
                                onChange={(e) => {
                                    setGrade(e.target.value)
                                    setOldGradeId(data._id)
                                }} 
                                type="number"
                                defaultValue={data.grade}
                                />
                            </td>
                            ))

                            }
                            {/* <td>
                            <MDBInput label="Remarks" name="remarks" type="number"/>
                            </td> */}
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                    </MDBCol>
                </MDBRow>
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

export default EditGradingStudent;