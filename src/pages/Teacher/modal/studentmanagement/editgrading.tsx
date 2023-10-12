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
    const [oldgradeid, setOldGradeId] = useState("")
    const [openmodal, setopenmodal] = useState(false)
    const [currentquarter, setCurrentQuarter] = useState("")

    const [writtenworks, setWrittenWorks] = useState([])
    const [writtenworkshightotal, setWrittenWorksHighTotal] = useState([])
    const [performancetask, setPerformanceTask] = useState([])
    const [performancetaskhightotal, setPerformanceTaskHighTotal] = useState([])

    const { basicModal, data } = props

    const [q1total, setQ1Total] = useState(0)
    const [q1ps, setQ1PS] = useState(0)
    const [q1ws, setQ1WS] = useState(0)

    const [q1b1, setQ1b1] = useState(0)
    const [q1b2, setQ1b2] = useState(0)
    const [q1b3, setQ1b3] = useState(0)
    const [q1b4, setQ1b4] = useState(0)
    const [q1b5, setQ1b5] = useState(0)
    const [q1b6, setQ1b6] = useState(0)
    const [q1b7, setQ1b7] = useState(0)
    const [q1b8, setQ1b8] = useState(0)
    const [q1b9, setQ1b9] = useState(0)
    const [q1b10, setQ1b10] = useState(0)

    const [q1hps1, setQ1hps1] = useState(0)
    const [q1hps2, setQ1hps2] = useState(0)
    const [q1hps3, setQ1hps3] = useState(0)
    const [q1hps4, setQ1hps4] = useState(0)
    const [q1hps5, setQ1hps5] = useState(0)
    const [q1hps6, setQ1hps6] = useState(0)
    const [q1hps7, setQ1hps7] = useState(0)
    const [q1hps8, setQ1hps8] = useState(0)
    const [q1hps9, setQ1hps9] = useState(0)
    const [q1hps10, setQ1hps10] = useState(0)

    const [q1pttotal, setQ1PtTotal] = useState(0)
    const [q1ptps, setQ1PtPS] = useState(0)
    const [q1ptws, setQ1PtWS] = useState(0)

    const [q1pt1, setQ1pt1] = useState(0)
    const [q1pt2, setQ1pt2] = useState(0)
    const [q1pt3, setQ1pt3] = useState(0)
    const [q1pt4, setQ1pt4] = useState(0)
    const [q1pt5, setQ1pt5] = useState(0)
    const [q1pt6, setQ1pt6] = useState(0)
    const [q1pt7, setQ1pt7] = useState(0)
    const [q1pt8, setQ1pt8] = useState(0)
    const [q1pt9, setQ1pt9] = useState(0)
    const [q1pt10, setQ1pt10] = useState(0)

    const [q1hpspt1, setQ1hpspt1] = useState(0)
    const [q1hpspt2, setQ1hpspt2] = useState(0)
    const [q1hpspt3, setQ1hpspt3] = useState(0)
    const [q1hpspt4, setQ1hpspt4] = useState(0)
    const [q1hpspt5, setQ1hpspt5] = useState(0)
    const [q1hpspt6, setQ1hpspt6] = useState(0)
    const [q1hpspt7, setQ1hpspt7] = useState(0)
    const [q1hpspt8, setQ1hpspt8] = useState(0)
    const [q1hpspt9, setQ1hpspt9] = useState(0)
    const [q1hpspt10, setQ1hpspt10] = useState(0)

    const [q1qaps, setQ1QAPS] = useState(0)
    const [q1qaws, setQ1QAWS] = useState(0)
    const [q1qa1, setQ1qa1] = useState(0)
    const [q1hpsqa1, setQ1hpsqa1] = useState(0)

    const [q1ig, setQ1IG] = useState(0)
    const [q1qg, setQ1QG] = useState(0)

    const [grade, setGrade] = useState<any[]>([]);
    const [grade2, setGrade2] = useState<any[]>([]);
    const [grade3, setGrade3] = useState<any[]>([]);
    const [grade4, setGrade4] = useState<any[]>([]);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}quarter/find`)
      .then(result => result.json())
      .then(item => {
        setCurrentQuarter(item.data.quarter)
      })
    },[])

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
            setGrade(item.data[0])
            setGrade2(item.data[1])
            setGrade3(item.data[2])
            setGrade4(item.data[3])
            setOldGradeId(item._id)
        })
    },[data])

    useEffect(() => {
      // Create an array with q1b1 to q1b10 values
      const q1bValues = [q1b1, q1b2, q1b3, q1b4, q1b5, q1b6, q1b7, q1b8, q1b9, q1b10];
      const q1hpsValues = [q1hps1, q1hps2, q1hps3, q1hps4, q1hps5, q1hps6, q1hps7, q1hps8, q1hps9, q1hps10];
      // Filter out values that are equal to 0
      const nonZeroValues = q1bValues.filter(value => value !== 0);
      const nonZeroValues1 = q1hpsValues.filter(value => value !== 0);
      // Update the writtenworks array with the non-zero values
      setWrittenWorks(nonZeroValues);
      setWrittenWorksHighTotal(nonZeroValues1)
    }, [q1b1, q1b2, q1b3, q1b4, q1b5, q1b6, q1b7, q1b8, q1b9, q1b10,q1hps1,q1hps2,q1hps3,q1hps4,q1hps5,q1hps6,q1hps7,q1hps8,q1hps9,
      q1hps10,]);

    useEffect(() => {
      const total = Math.floor(q1b1 )+ Math.floor(q1b2 )+ Math.floor(q1b3 )+ Math.floor(q1b4 )+ Math.floor(q1b5 )+ Math.floor(q1b6 )+ Math.floor(q1b7 )+ Math.floor(q1b8 )+ Math.floor(q1b9 )+ Math.floor(q1b10);
      setQ1Total(total)

      const totalhps = Math.floor(q1hps1 )+ Math.floor(q1hps2 )+ Math.floor(q1hps3 )+ Math.floor(q1hps4 )+ Math.floor(q1hps5 )+ Math.floor(q1hps6 )+ Math.floor(q1hps7 )+ Math.floor(q1hps8 )+ Math.floor(q1hps9 )+ Math.floor(q1hps10)
      setQ1PS(( total /totalhps) * 100)
      const wsdata = parseFloat(data?.subject?.writtenwork) / 100
      const totalws = q1ps * wsdata
      setQ1WS(totalws)
    },[q1b1, q1b2, q1b3, q1b4, q1b5, q1b6, q1b7, q1b8, q1b9, q1b10,q1hps1,q1hps2,q1hps3,q1hps4,q1hps5,q1hps6,q1hps7,q1hps8,q1hps9,
      q1hps10, data, q1ps, q1ws, q1total])
    // ====================================

    useEffect(() => {
      // Create an array with q1b1 to q1b10 values
      const q1ptValues = [q1pt1, q1pt2, q1pt3, q1pt4, q1pt5, q1pt6, q1pt7, q1pt8, q1pt9, q1pt10];
      const q1hpsptValues = [q1hpspt1, q1hpspt2, q1hpspt3, q1hpspt4, q1hpspt5, q1hpspt6, q1hpspt7, q1hpspt8, q1hpspt9, q1hpspt10];
      // Filter out values that are equal to 0
      const nonZeroValues = q1ptValues.filter(value => value !== 0);
      const nonZeroValues1 = q1hpsptValues.filter(value => value !== 0);
      // Update the writtenworks array with the non-zero values
      setPerformanceTask(nonZeroValues);
      setPerformanceTaskHighTotal(nonZeroValues1)
    }, [q1pt1, q1pt2, q1pt3, q1pt4, q1pt5, q1pt6, q1pt7, q1pt8, q1pt9, q1pt10,q1hpspt1,q1hpspt2,q1hpspt3,q1hpspt4,q1hpspt5,q1hpspt6,q1hpspt7,q1hpspt8,q1hpspt9,
      q1hpspt10,]);

      useEffect(() => {
        const total = Math.floor(q1pt1 )+ Math.floor(q1pt2 )+ Math.floor(q1pt3 )+ Math.floor(q1pt4 )+ Math.floor(q1pt5 )+ Math.floor(q1pt6 )+ Math.floor(q1pt7 )+ Math.floor(q1pt8 )+ Math.floor(q1pt9 )+ Math.floor(q1pt10);
        setQ1PtTotal(total)
  
        const totalhps = Math.floor(q1hpspt1 )+ Math.floor(q1hpspt2 )+ Math.floor(q1hpspt3 )+ Math.floor(q1hpspt4 )+ Math.floor(q1hpspt5 )+ Math.floor(q1hpspt6 )+ Math.floor(q1hpspt7 )+ Math.floor(q1hpspt8 )+ Math.floor(q1hpspt9 )+ Math.floor(q1hpspt10)

        setQ1PtPS(( total /totalhps) * 100)
        const wsdata = parseFloat(data?.subject?.performancetask) / 100
        const totalws = q1ptps * wsdata
        setQ1PtWS(totalws)
      },[q1pt1, q1pt2, q1pt3, q1pt4, q1pt5, q1pt6, q1pt7, q1pt8, q1pt9, q1pt10,q1hpspt1,q1hpspt2,q1hpspt3,q1hpspt4,q1hpspt5,q1hpspt6,q1hpspt7,q1hpspt8,q1hpspt9,
        q1hpspt10, data, q1ptps, q1ptws, q1pttotal])
      // ===============================================

      useEffect(() => {
  
        const totalhps = Math.floor(q1hpsqa1)

        setQ1QAPS(( q1qa1 / totalhps) * 100)

        const wsdata = parseFloat(data?.subject?.quarterlyassessment) / 100
        const totalws = q1qaps * wsdata
        setQ1QAWS(totalws)

      },[q1qa1,q1hpsqa1, data, q1qaps, q1qaws])

      useEffect(() => {
        const totalig = q1ws + q1ptws + q1qaws
        setQ1IG(totalig)

        if(totalig >= 60){
          const qg = ((totalig - 60) / 1.6) + 75;
          setQ1QG(qg)
        } else if (totalig < 60){
          const qg = (totalig / 4) + 60
          setQ1QG(qg)
        }
      },[q1ws,q1ptws,q1qaws]) 

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
            writtenworksHighestTotal: writtenworkshightotal,
            writtenworks: writtenworks,
            writtenworksTotal: q1total,
            writtenworksPS: q1ps,
            writtenworksWS: q1ws,
            performancetaskHighestTotal: performancetaskhightotal,
            performancetask: performancetask,
            performancetaskTotal: q1pttotal,
            performancetaskPS: q1ptps,
            performancetaskWS: q1ptws,
            quarterlyassessmentHighestTotal: q1hpsqa1,
            quarterlyassessment: q1qa1,
            quarterlyassessmentPS: q1qaps,
            quarterlyassessmentWS: q1qaws,
            initialgrade: q1ig,
            quarterlygrade: q1qg,
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
        <MDBModalDialog size="xl">
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
                    <MDBCol className="">
                    <MDBCardText>Subject: {data?.subject?.subjectname}</MDBCardText>
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
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hps10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow>
                    <MDBCol className="border">
                    
                    <MDBTypography>1</MDBTypography>
                    <MDBInput label={grade?.writtenworks[0]}  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true}  type="number" onChange={(e: any) => setQ1b2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b7(e.target.value)}/>
                    </MDBCol>

                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1b10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled  value={currentquarter === "Quarter 1" ? q1total.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={currentquarter === "Quarter 1" ? q1ps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 1" ? q1ws.toFixed(2) : 0}/>
                    </MDBCol>
                    
                    </MDBRow>                    
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpspt10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow> 

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt7(e.target.value)}/>
                    </MDBCol>
                    
                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1pt10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 1" ? q1pttotal.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 1" ? q1ptps.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 1" ? q1ptws.toFixed(2): 0}/>
                    </MDBCol>
                    </MDBRow>  
                    
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                  <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1hpsqa1(e.target.value)}/>
                    </MDBCol>
                  </MDBRow>
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 1" ? false : true} type="number" onChange={(e: any) => setQ1qa1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 1" ? q1qaps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 1" ? q1qaws.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 1" ? q1ig.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 1" ? q1qg.toFixed(2): 0}/>
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
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hps10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow>  

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true}  type="number" onChange={(e: any) => setQ1b2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b7(e.target.value)}/>
                    </MDBCol>

                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1b10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled  value={currentquarter === "Quarter 2" ? q1total.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={currentquarter === "Quarter 2" ? q1ps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 2" ? q1ws.toFixed(2) : 0}/>
                    </MDBCol>
                    
                    </MDBRow>                    
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpspt10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow> 

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt7(e.target.value)}/>
                    </MDBCol>
                    
                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1pt10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 2" ? q1pttotal.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 2" ? q1ptps.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 2" ? q1ptws.toFixed(2): 0}/>
                    </MDBCol>
                    </MDBRow>  
                    
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                  <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1hpsqa1(e.target.value)}/>
                    </MDBCol>
                  </MDBRow>
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 2" ? false : true} type="number" onChange={(e: any) => setQ1qa1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 2" ? q1qaps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 2" ? q1qaws.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 2" ? q1ig.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 2" ? q1qg.toFixed(2): 0}/>
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
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hps10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow>  

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true}  type="number" onChange={(e: any) => setQ1b2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b7(e.target.value)}/>
                    </MDBCol>

                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1b10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled  value={currentquarter === "Quarter 3" ? q1total.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={currentquarter === "Quarter 3" ? q1ps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 3" ? q1ws.toFixed(2) : 0}/>
                    </MDBCol>
                    
                    </MDBRow>                    
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpspt10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow> 

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt7(e.target.value)}/>
                    </MDBCol>
                    
                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1pt10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 3" ? q1pttotal.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 3" ? q1ptps.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 3" ? q1ptws.toFixed(2): 0}/>
                    </MDBCol>
                    </MDBRow>  
                    
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                  <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1hpsqa1(e.target.value)}/>
                    </MDBCol>
                  </MDBRow>
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 3" ? false : true} type="number" onChange={(e: any) => setQ1qa1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 3" ? q1qaps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 3" ? q1qaws.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 3" ? q1ig.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 3" ? q1qg.toFixed(2): 0}/>
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
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hps10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow>  

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true}  type="number" onChange={(e: any) => setQ1b2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b7(e.target.value)}/>
                    </MDBCol>

                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1b10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput disabled  value={currentquarter === "Quarter 4" ? q1total.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput disabled  type="number" value={currentquarter === "Quarter 4" ? q1ps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 4" ? q1ws.toFixed(2) : 0}/>
                    </MDBCol>
                    
                    </MDBRow>                    
                </MDBRow>

                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`PERFORMANCE TASKS ${data?.subject?.performancetask}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 2</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 3</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 4</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 5</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 6</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 7</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt7(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 8</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 9</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 10</MDBTypography>
                    <MDBInput  disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpspt10(e.target.value)}/>
                    </MDBCol>
                    </MDBRow> 

                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>2</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt2(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>3</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt3(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>4</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt4(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>5</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt5(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>6</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt6(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>7</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt7(e.target.value)}/>
                    </MDBCol>
                    
                    <MDBRow className="mx-0 my-2">
                    <MDBCol className="border">
                    <MDBTypography>8</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt8(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>9</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt9(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>10</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1pt10(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Total</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 4" ? q1pttotal.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 4" ? q1ptps.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 4" ? q1ptws.toFixed(2): 0}/>
                    </MDBCol>
                    </MDBRow>  
                    
                </MDBRow>
                
                <MDBRow className="my-3 text-center border">
                  <MDBTypography>{`QUARTERLY ASSESSMENT ${data?.subject?.quarterlyassessment}%`}</MDBTypography>
                  <MDBRow className="mx-0 my-2">
                  <MDBCol className="border">
                    <MDBTypography>Highest Possible Score 1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1hpsqa1(e.target.value)}/>
                    </MDBCol>
                  </MDBRow>
                    <MDBCol className="border">
                    <MDBTypography>1</MDBTypography>
                    <MDBInput disabled={currentquarter === "Quarter 4" ? false : true} type="number" onChange={(e: any) => setQ1qa1(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>PS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 4" ? q1qaps.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>WS</MDBTypography>
                    <MDBInput  type="number" disabled value={currentquarter === "Quarter 4" ? q1qaws.toFixed(2) : 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Initial Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 4" ? q1ig.toFixed(2): 0}/>
                    </MDBCol>
                    <MDBCol className="border">
                    <MDBTypography>Quarterly Grade</MDBTypography>
                    <MDBInput disabled type="number" value={currentquarter === "Quarter 4" ? q1qg.toFixed(2): 0}/>
                    </MDBCol>
                </MDBRow>

                <br/>
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