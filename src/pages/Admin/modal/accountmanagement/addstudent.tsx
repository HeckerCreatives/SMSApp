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
const AddStudent: React.FC<ContainerProps> = (props) => {
    const [present] = useIonToast();
    const [yands, setYandS] = useState([])
    const [selectyands, setSelectyands] = useState("")
    const [openmodal, setopenmodal] = useState(false)
    const { basicModal } = props
    const [selectedYear, setSelectedYear] = useState(""); // State to store the selected year
    const [filteredSections, setFilteredSections] = useState([]); // State to store the filtered sections
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
    useEffect(() => {
      setopenmodal(basicModal)
    },[basicModal])

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

    useEffect(() => {
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/find`)
        .then(result => result.json())
        .then(data => {
          setYandS(data.data)
        })
    },[])

    const addstudent = (e: any) => {
      e.preventDefault();
      const { firstname, middlename, lastname, contact, address, username, password, mother, father } = e.target;
      fetch(`${import.meta.env.VITE_ENDPOINT_URL}student/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            firstname: firstname.value,
            middlename: middlename.value,
            lastname: lastname.value,
            contact: contact.value,
            address: address.value,
            mother: mother.value,
            father: father.value,
            yearandsection: selectyands,
            username: username.value,
            password: password.value,
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
        <MDBModalDialog>
          <form autoComplete="off" onSubmit={addstudent}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Student</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Username:</MDBCardText>
              <MDBInput name="username"/>
              <MDBCardText>Password:</MDBCardText>
              <MDBInput name="password" type="password"/>
              <MDBCardText>First Name:</MDBCardText>
              <MDBInput name="firstname"/>
              <MDBCardText>Middle Name:</MDBCardText>
              <MDBInput name="middlename"/>
              <MDBCardText>Last Name:</MDBCardText>
              <MDBInput name="lastname"/>
              <MDBCardText>Contact:</MDBCardText>
              <MDBInput name="contact"/>
              <MDBCardText>Adress:</MDBCardText>
              <MDBInput name="address"/>
              <MDBCardText>Mother:</MDBCardText>
              <MDBInput name="mother"/>
              <MDBCardText>Father:</MDBCardText>
              <MDBInput name="father"/>
              <MDBCardText>Year:</MDBCardText>
                {/* <select onChange={(e) => handleSelectYear(e)} className="bg-transparent text-dark p-1">
                  <option disabled selected>Please Select</option>
                  {yands.map((data: any, i) => (
                    <option key={`year-${i}`} value={data.year}>
                      {data.year}
                    </option>
                  ))}
                </select> */}
                
                <select className="bg-transparent text-dark p-1">
                  {years.map((year, index) => (
                    <option key={`year${index}`} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              <MDBCardText>Section:</MDBCardText>
                <select onChange={(e) => handleSelectSection(e)} className="bg-transparent text-dark p-1">
                <option selected={selectyands === "" ? true : false}>Please Select</option>
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
              <MDBBtn type="submit">Save Student</MDBBtn>
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

export default AddStudent;