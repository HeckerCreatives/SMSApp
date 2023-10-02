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
interface ContainerProps { data: any ,basicModal: boolean, onbasicModal: any }
const ReassignAdviser: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)
    const [yands, setYandS] = useState([])
    const [selectyands, setSelectyands] = useState("")
    const [teachers, setTeachers] = useState([])
    const [adviserid, setAdviserId] = useState("")
    const { basicModal, data } = props
    const [selectedYear, setSelectedYear] = useState(""); // State to store the selected year
    const [filteredSections, setFilteredSections] = useState([]); // State to store the filtered sections

    useEffect(() => {
      setopenmodal(basicModal)
    },[basicModal,selectedYear,selectyands])

    const handleChange = () => {
      props.onbasicModal(false)
    }

    // Function to handle year selection
    const handleSelectYear = (e: any) => {
      const selectedYear = e.target.value;
      setSelectedYear(selectedYear);
      setSelectyands("")
      // Filter sections based on the selected year
      const sectionsForSelectedYear = yands.filter((data: any) => data.year === selectedYear);
      setFilteredSections(sectionsForSelectedYear);
    };

    // Function to handle section selection
    const handleSelectSection = (e: any) => {
      // Handle section selection here
      const selectedSectionId = e.target.value;
      
      setSelectyands(selectedSectionId)
      // Do something with selectedSectionId
    };

    const handleSelectAdviser = (e: any) => {
        const selectedValue = e.target.value
        if(selectedValue !== ""){
            setAdviserId(selectedValue)
        } else {
            setAdviserId("")
        }
        
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/find`)
        .then(result => result.json())
        .then(data => {
          setYandS(data.data)
        })
    },[])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}teacher/find`)
        .then(result => result.json())
        .then(data => {
          setTeachers(data.data)
        })
    },[])

    const edit = (e: any) => {
      e.preventDefault();
    //   const { subject } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}classroom/update/${data._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            adviser: adviserid ? adviserid : data?.adviser,
            yearandsection: selectyands ? selectyands : data?.yearandsection,
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
          <form autoComplete="off" onSubmit={edit}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Reassign Adviser</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Adviser:</MDBCardText>
              <select onChange={(e)=> handleSelectAdviser(e)} className="bg-transparent text-dark p-1">
              <option disabled selected>{data?.adviser?.firstname + " " + data?.adviser?.middlename + " " + data?.adviser?.lastname}</option>
                {teachers.map((data: any,i) =>(
                    <option key={`teacher-${i}`} value={data._id}>{data.firstname + " " + data.middlename + " " + data.lastname}</option>
                ))}
              </select>

              <MDBCardText>Year:</MDBCardText>
                <select onChange={(e) => handleSelectYear(e)} className="bg-transparent text-dark p-1">
                  <option disabled selected>{data?.yearandsection?.year}</option>
                  {yands.map((data: any, i) => (
                    <option key={`year-${i}`} value={data.year}>
                      {data.year}
                    </option>
                  ))}
                </select>

              <MDBCardText>Section:</MDBCardText>
                <select onChange={(e) => handleSelectSection(e)} className="bg-transparent text-dark p-1">
                <option disabled selected>{data?.yearandsection?.section}</option>
                  {
                  filteredSections.map((data: any, i) => (
                    <option key={`section-${i}`} value={data._id}>
                      {data.section}
                    </option>
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

export default ReassignAdviser;