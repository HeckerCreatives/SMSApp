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
  MDBTypography,
} from 'mdb-react-ui-kit';
// import { env } from "process";
import "./index.css"
import { useIonToast } from '@ionic/react';
interface ContainerProps { subject:any, data: any, basicModal: boolean, onbasicModal: any }
const ViewStudentsDetails: React.FC<ContainerProps> = (props) => {
  const GradesData = { student: "", subject: "", quarter:"", writtenworks: [], writtenworksHighestTotal: [], writtenworksTotal: 0, writtenworksPS: 0, writtenworksWS: 0, performancetask: [], performancetaskHighestTotal: [], performancetaskTotal: 0, performancetaskPS: 0, performancetaskWS: 0, quarterlyassessment: 0, quarterlyassessmentHighestTotal: 0, quarterlyassessmentPS: 0, quarterlyassessmentWS: 0, initialgrade: 0, quarterlygrade: 0}
    const [present] = useIonToast();
    const { basicModal, data, subject } = props
    const [openmodal, setopenmodal] = useState(false)
    const [grade, setGrade] = useState(GradesData);
    const [grade2, setGrade2] = useState(GradesData);
    const [grade3, setGrade3] = useState(GradesData);
    const [grade4, setGrade4] = useState(GradesData);
    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    props.onbasicModal(false)
    }
    
    useEffect(() => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}grade/findone`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({subjectid: data?.subject?._id, studentid: data?.student?._id})
      })
      .then(result => result.json())
      .then(data => {
        setGrade(data.data[0])
        setGrade2(data.data[1])
        setGrade3(data.data[2])
        setGrade4(data.data[3])
        // console.log(data)
      })
      // console.log(grade[0].writtenworksTotal)
    },[data])

    return(
    <>
    
    <MDBModal show={openmodal} tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog size="xl">
          
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
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 1</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`WRITTEN WORKS ${data?.subject?.writtenwork}%`}</MDBTypography>
                    { grade ?
                      grade?.writtenworks?.map((item: any, j) => (
                        <MDBCol className="border">
                          <MDBTypography>{j+1}</MDBTypography>
                          <MDBInput  type="number" disabled value={item}/>
                        </MDBCol>
                          ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade?.writtenworksTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade?.writtenworksPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade?.writtenworksWS?.toFixed(2)}/>
                    </MDBCol>                  
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                  { grade ?
                      grade?.performancetask?.map((item: any, j) => (
                        <MDBCol className="border">
                          <MDBTypography>{j+1}</MDBTypography>
                          <MDBInput  type="number" disabled value={item}/>
                        </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade?.performancetaskTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade?.performancetaskPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade?.performancetaskWS?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled value={grade?.quarterlyassessment}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade?.quarterlyassessmentPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade?.quarterlyassessmentWS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade?.initialgrade?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade?.quarterlygrade?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 2</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`WRITTEN WORKS ${data?.subject?.writtenwork}%`}</MDBTypography>
                    { grade2 ? 
                      grade2?.writtenworks?.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade2?.writtenworksTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade2?.writtenworksPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade2?.writtenworksWS?.toFixed(2)}/>
                    </MDBCol>                  
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                    { grade2 ?
                       grade2?.performancetask?.map((item: any, j) => (
                        <MDBCol className="border">
                          <MDBTypography>{j+1}</MDBTypography>
                          <MDBInput  type="number" disabled value={item}/>
                        </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade2?.performancetaskTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade2?.performancetaskPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade2?.performancetaskWS?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled value={grade2?.quarterlyassessment}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade2?.quarterlyassessmentPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade2?.quarterlyassessmentWS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade2?.initialgrade?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade2?.quarterlygrade?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 3</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`WRITTEN WORKS ${data?.subject?.writtenwork}%`}</MDBTypography>
                    { grade3? 
                      grade3?.writtenworks?.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade3?.writtenworksTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade3?.writtenworksPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade3?.writtenworksWS?.toFixed(2)}/>
                    </MDBCol>                  
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                    { grade3 ?
                       grade3?.performancetask?.map((item: any, j) => (
                        <MDBCol className="border">
                          <MDBTypography>{j+1}</MDBTypography>
                          <MDBInput  type="number" disabled value={item}/>
                        </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade3?.performancetaskTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade3?.performancetaskPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade3?.performancetaskWS?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled value={grade3?.quarterlyassessment}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade3?.quarterlyassessmentPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade3?.quarterlyassessmentWS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade3?.initialgrade?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade3?.quarterlygrade?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 4</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`WRITTEN WORKS ${data?.subject?.writtenwork}%`}</MDBTypography>
                    { grade4? 
                      grade4?.writtenworks?.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade4?.writtenworksTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade4?.writtenworksPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade4?.writtenworksWS?.toFixed(2)}/>
                    </MDBCol>                  
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                    { grade4 ?
                       grade4?.performancetask?.map((item: any, j) => (
                        <MDBCol className="border">
                          <MDBTypography>{j+1}</MDBTypography>
                          <MDBInput  type="number" disabled value={item}/>
                        </MDBCol>
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade4?.performancetaskTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade4?.performancetaskPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade4?.performancetaskWS?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled value={grade4?.quarterlyassessment}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade4?.quarterlyassessmentPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade4?.quarterlyassessmentWS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade4?.initialgrade?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade4?.quarterlygrade?.toFixed(2)}/>
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
                            <td>
                                <MDBInput disabled readOnly value={grade?.quarterlygrade?.toFixed(2)}/>
                            </td>
                            <td>
                                <MDBInput disabled readOnly value={grade2?.quarterlygrade?.toFixed(2)}/>
                            </td>
                            <td>
                            <MDBInput disabled readOnly value={grade3?.quarterlygrade?.toFixed(2)}/>
                            </td>
                            <td>
                            <MDBInput disabled readOnly value={grade4?.quarterlygrade?.toFixed(2)}/>
                            </td>
                            <td>
                            <MDBInput disabled readOnly />
                            </td>
                        </tr>
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

export default ViewStudentsDetails;