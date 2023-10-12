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
  MDBTable, MDBTableHead, MDBTableBody,MDBInput,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
// import { env } from "process";
import "./index.css"
import { useIonToast } from '@ionic/react';
interface ContainerProps { subject:any, data: any, basicModal: boolean, onbasicModal: any }
const ViewAdvisoryStudentsDetails: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const { basicModal, data, subject } = props
    const [openmodal, setopenmodal] = useState(false)
    const [grade, setGrade] = useState([])
    const [subjects, setSubjects] = useState([])
    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    props.onbasicModal(false)
    }
    
    useEffect(() => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/findstudent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ studentid: data?.student?._id })
      })
        .then(result => result.json())
        .then(data => {
          const subjectIds = subjects.map((subject:any) => subject._id);
          const filteredGrade = data.data.filter((gradeData:any) =>
            subjectIds.includes(gradeData.subject._id)
          );
          setGrade(filteredGrade);
          console.log(filteredGrade);
        });
    }, [data, subjects]);
    

    useEffect(() => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}subject/findsubject`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id: data?.student?.yearandsection?._id})
      })
      .then(result => result.json())
      .then(data => {
        console.log(data.data)
        setSubjects(data.data)
      })
    },[data])

    return(
    <>
    
    <MDBModal show={openmodal} tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog size="lg">
          
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Student Details</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
                <MDBRow>
                    <MDBCol >
                    <MDBCardText>Name: {data?.student?.firstname +" "+ data?.student?.middlename +" "+ data?.student?.lastname}</MDBCardText>
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
                    {grade.length !== 0 ? (
                    subjects.map((subjectData: any, i) => (
                      <tr key={i}>
                        <td>{subjectData.subjectname}</td>
                        {grade
                          .filter((gradeData: any) => gradeData.subject._id === subjectData._id)
                          .map((filteredGradeData: any, j) => (
                            <td key={j}>{filteredGradeData.quarterlygrade.toFixed(2) || "no data"}</td>
                            
                          ))}
                          {Array.from({ length: Math.max(0, 4 - grade.filter((gradeData: any) => gradeData.subject._id === subjectData._id).length) }).map((_, k) => (
                              <td key={k}></td>
                          ))}
                        <td>
                          <MDBInput label="Remarks" name="remarks" type="number"/>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6}>No Data</td>
                    </tr>
                  )}

                    </MDBTableBody>
                </MDBTable>
                    </MDBCol>
                </MDBRow>
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

export default ViewAdvisoryStudentsDetails;