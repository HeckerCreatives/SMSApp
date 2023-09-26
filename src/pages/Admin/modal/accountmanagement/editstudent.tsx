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
// import { env } from "process";
import { useIonToast } from '@ionic/react';
import "./index.css"
interface ContainerProps { data: any, basicModal: boolean, onbasicModal: any }
const EditStudent: React.FC<ContainerProps> = ({data , basicModal, onbasicModal}) => {
    const [present] = useIonToast();
    const [openmodal, setopenmodal] = useState(false)
    const [selectyands, setSelectyands] = useState("")
    const [yands, setYandS] = useState([])
    useEffect(() => {
    setopenmodal(basicModal)
    },[basicModal])

    const handleChange = () => {
    onbasicModal(false)
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}yearandsection/find`)
        .then(result => result.json())
        .then(data => {
          setYandS(data.data)
        })
    },[])

    const handleSelect = (e: any) => {
        const selectedValue = e.target.value
        if(selectedValue !== ""){
            setSelectyands(selectedValue)
        } else {
            setSelectyands("")
        }
        
    }

    const editteacher = (e: any) => {
        e.preventDefault();
        const { firstname, middlename, lastname, contact, address, password, mother, father } = e.target;
        fetch(`${import.meta.env.VITE_ENDPOINT_URL}student/update/${data._id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(
            {
              firstname: firstname.value ? firstname.value : data?.firstname,
              middlename: middlename.value ? middlename.value : data?.middlename,
              lastname: lastname.value ? lastname.value : data?.lastname,
              contact: contact.value ?  contact.value : data?.contact,
              address: address.value ?  address.value : data?.address,
              mother: mother.value ?  mother.value : data?.mother,
              father: father.value ?  father.value : data?.father,
              yearandsection: selectyands ? selectyands : data?.yearandsection?._id,
              // for login
              loginid: data?.userdetails?._id,
              password: password.value ?  password.value : data?.userdetails?.password
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
    
    <MDBModal show={openmodal} tabIndex='-1' backdrop={false} closeOnEsc={false} staticBackdrop>
        <MDBModalDialog>
        <form autoComplete="off" onSubmit={editteacher}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit Student Details</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCardText>Username:</MDBCardText>
              <MDBInput name="username" label={data?.userdetails?.username} readOnly/>
              <MDBCardText>Password:</MDBCardText>
              <MDBInput name="password" type="password" label={data?.userdetails?.password}/>
              <MDBCardText>First Name:</MDBCardText>
              <MDBInput name="firstname"  type="text" label={data?.firstname} />
              <MDBCardText>Middle Name:</MDBCardText>
              <MDBInput name="middlename"  type="text" label={data?.middlename} />
              <MDBCardText>Last Name:</MDBCardText>
              <MDBInput name="lastname"  type="text" label={data?.lastname} />
              <MDBCardText>Contact:</MDBCardText>
              <MDBInput name="contact"  type="text" label={data?.contact} />
              <MDBCardText>Adress:</MDBCardText>
              <MDBInput name="address"  type="text" label={data?.address} />
              <MDBCardText>Mother:</MDBCardText>
              <MDBInput name="mother" label={data?.mother}/>
              <MDBCardText>Father:</MDBCardText>
              <MDBInput name="father" label={data?.father}/>
              <MDBCardText>Year And Section:</MDBCardText>
               
              <select onChange={(e)=> handleSelect(e)}>
              <option disabled>{data?.yearandsection?.year + " - " + data?.yearandsection?.section}</option>
                {yands.map((data: any,i) =>(
                    <option key={`yands-${i}`} value={data._id}>{data.year + " - " + data.section}</option>
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

export default EditStudent;