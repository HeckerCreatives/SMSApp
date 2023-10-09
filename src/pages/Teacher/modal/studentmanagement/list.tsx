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
                <MDBRow>
                    <MDBCol>
                    <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col' colSpan={13}>{`WRITTEN WORKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`PERFORMANCE TASKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`QUARTERLY ASSESSMENT (20%)`}</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                      </tr>
                      {/* DATA DITO SA BABA */}
                      <tr>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                      </tr>
                    </MDBTableBody>
                </MDBTable>
                    </MDBCol>
                </MDBRow>

                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 2</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                    <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col' colSpan={13}>{`WRITTEN WORKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`PERFORMANCE TASKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`QUARTERLY ASSESSMENT (20%)`}</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                      </tr>
                      {/* DATA DITO SA BABA */}
                      <tr>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                      </tr>
                    </MDBTableBody>
                </MDBTable>
                    </MDBCol>
                </MDBRow>

                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 3</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                    <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col' colSpan={13}>{`WRITTEN WORKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`PERFORMANCE TASKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`QUARTERLY ASSESSMENT (20%)`}</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                      </tr>
                      {/* DATA DITO SA BABA */}
                      <tr>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                      </tr>
                    </MDBTableBody>
                </MDBTable>
                    </MDBCol>
                </MDBRow>

                <br/>
                <MDBRow>
                    <MDBCol className="">
                    <MDBCardText className="fw-bold text-center">QUARTER 4</MDBCardText>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                    <MDBTable className="table-bordered text-center" responsive>
                    <MDBTableHead>
                        <tr>
                        <th scope='col' colSpan={13}>{`WRITTEN WORKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`PERFORMANCE TASKS (20%)`}</th>
                        <th scope='col' colSpan={13}>{`QUARTERLY ASSESSMENT (20%)`}</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>2</td>
                        <td scope='col'>3</td>
                        <td scope='col'>4</td>
                        <td scope='col'>5</td>
                        <td scope='col'>6</td>
                        <td scope='col'>7</td>
                        <td scope='col'>8</td>
                        <td scope='col'>9</td>
                        <td scope='col'>10</td>
                        <td scope='col'>Total</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                        <td scope='col'>1</td>
                        <td scope='col'>PS</td>
                        <td scope='col'>WS</td>
                      </tr>
                      {/* DATA DITO SA BABA */}
                      <tr>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                        <td scope='col'>
                        <MDBInput readOnly type="number"/>
                        </td>
                      </tr>
                    </MDBTableBody>
                </MDBTable>
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