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
const GradingStudent: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [yands, setYandS] = useState([])
    const [grade, setGrade] = useState("")
    const [openmodal, setopenmodal] = useState(false)
    const [Q1, setQ1] = useState(false)
    const [Q2, setQ2] = useState(false)
    const [Q3, setQ3] = useState(false)
    const [Q4, setQ4] = useState(false)
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
            // console.log(quar)

            const quar = item.data.length
            console.log(quar)
            if(quar === 0){
                setQ1(false)
                setQ2(true)
                setQ3(true)
                setQ4(true)
            } else if (quar === 1){
                setQ1(true)
                setQ2(false)
                setQ3(true)
                setQ4(true)
            } else if (quar === 2){
                setQ1(true)
                setQ2(true)
                setQ3(false)
                setQ4(true)
            } else if (quar === 3){
                setQ1(true)
                setQ2(true)
                setQ3(true)
                setQ4(false)
            } 
            
        })
    },[data])

    useEffect(() => {
      setopenmodal(basicModal)
    //   console.log(data)
    },[basicModal])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    const addgrade = (e: any) => {
      e.preventDefault();
    //   const { grade } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}grade/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            grade: grade,
            student: data?.student._id,
            subject: data?.subject._id,
            quarter: data?.quarter._id
            // quarter: "651289c66c76aadd0086ddc9"
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
          <form autoComplete="off" onSubmit={addgrade}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Set Grade</MDBModalTitle>
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
                {/* <br/>
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
                                <MDBInput disabled={Q1} label="Set Grade" onChange={(e) => setGrade(e.target.value)} type="number"/>
                            </td>
                            <td>
                                <MDBInput disabled={Q2} label="Set Grade" onChange={(e) => setGrade(e.target.value)} type="number"/>
                            </td>
                            <td>
                            <MDBInput disabled={Q3} label="Set Grade" onChange={(e) => setGrade(e.target.value)} type="number"/>
                            </td>
                            <td>
                            <MDBInput disabled={Q4} label="Set Grade" onChange={(e) => setGrade(e.target.value)} type="number"/>
                            </td>
                            <td>
                            <MDBInput label="Remarks" name="remarks" type="number"/>
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                    </MDBCol>
                </MDBRow> */}
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

export default GradingStudent;