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
    const [present] = useIonToast();
    const { basicModal, data, subject } = props
    const [openmodal, setopenmodal] = useState(false)
    const [grade, setGrade] = useState([])
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
        setGrade(data.data)
        
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
                    { grade.length !== 0 ?
                      grade.map((data: any, i) =>(
                      data.writtenworks.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                        ))
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade[0]?.writtenworksTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade[0]?.writtenworksPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade[0]?.writtenworksWS?.toFixed(2)}/>
                    </MDBCol>                  
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                  { grade.length !== 0 ?
                      grade.map((data: any, i) =>(
                      data.performancetask.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                        ))
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade[0]?.performancetaskTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade[0]?.performancetaskPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade[0]?.performancetaskWS?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlyassessment}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlyassessmentPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlyassessmentWS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.initialgrade?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlygrade?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 2</MDBCardText>
                    </MDBCol>
                </MDBRow>
                {/* <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`WRITTEN WORKS ${data?.subject?.writtenwork}%`}</MDBTypography>
                    { grade[1] ?
                      grade[1].map((data: any, i) =>(
                      data.writtenworks.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                        ))
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade[0]?.writtenworksTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade[0]?.writtenworksPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade[0]?.writtenworksWS?.toFixed(2)}/>
                    </MDBCol>                  
                </MDBRow> */}

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                    { grade.length !== 0 ?
                      grade.map((data: any, i) =>(
                      data.performancetask.map((item: any, j) => (
                      <MDBCol className="border">
                        <MDBTypography>{j+1}</MDBTypography>
                        <MDBInput  type="number" disabled value={item}/>
                      </MDBCol>
                        ))
                      ))
                    :
                    <MDBCol className="border">
                    <MDBTypography>NO DATA</MDBTypography>
                    </MDBCol>
                    }
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled value={grade[0]?.performancetaskTotal?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={grade[0]?.performancetaskPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={grade[0]?.performancetaskWS?.toFixed(2)}/>
                    </MDBCol>
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlyassessment}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlyassessmentPS?.toFixed(2)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={grade[0]?.quarterlyassessmentWS?.toFixed(2)}/>
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
                  

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>

                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" />
                    </MDBCol>
                    </MDBRow>                    
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    
                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    </MDBRow>  
                    
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled/>
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
                  

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>

                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" />
                    </MDBCol>
                    </MDBRow>                    
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    
                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    </MDBRow>  
                    
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled />
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled/>
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
                                <MDBInput disabled readOnly value={grade[0]?.quarterlygrade?.toFixed(2)}/>
                            </td>
                            <td>
                                <MDBInput disabled readOnly/>
                            </td>
                            <td>
                            <MDBInput disabled readOnly/>
                            </td>
                            <td>
                            <MDBInput disabled readOnly/>
                            </td>
                            <td>
                            <MDBInput disabled readOnly/>
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