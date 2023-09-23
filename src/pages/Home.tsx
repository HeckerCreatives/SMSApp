import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,  } from '@ionic/react';
import './Home.css';
import React, {useEffect, useState} from "react";
import SideNavigation from '../components/sidenavigation/sidenav';
import { IonRouterOutlet } from '@ionic/react';
import { MDBContainer } from "mdb-react-ui-kit"
import { Redirect, Route } from "react-router-dom"
// admin
import AdminDashboard from "./Admin/dashboard";
import AdminYearAndSectionList from './Admin/yandslist';
import AdminYearAndSectionAssignedTeacher from './Admin/yandsteacher';
import AdminSubjectList from './Admin/subjectlist';
import AdminSubjectTeacher from './Admin/subjectteacher';
import AdminAccountManagementTeacher from './Admin/amteacher';
import AdminAccountManagementStudent from './Admin/amstudent';
import AdminSettingsQuarter from './Admin/settingsquarter';
import AdminSettingsProfile from './Admin/settingsprofile';
import TeacherDashboard from './Teacher/dashboard';
import TeacherSubjectList from './Teacher/subject';
import TeacherList from './Teacher/list';
import TeacherGrading from './Teacher/grading';
import TeacherSms from './Teacher/sms';
import TeacherProfile from './Teacher/profile';
import StudentDashboard from './Student/dashboard';
import StudentGrades from './Student/grades';
import StudentProfile from './Student/profile';
const Dashboard: React.FC = () => {
  const [didToggle, setDidToggle] = useState(
    window.innerWidth > 768 ? false : true
  );

  const role = "Administrator"
  // const role = "Teacher"
  // const role = "Student"
  let link;
  switch(role){
    case 'Administrator':
    link = [
      {
        name: "Dashboard",
        path: "/dashboard/admin",
        icon: "home",
        children: [],
      },
      {
        name: "Year and Section",
        path: "",
        icon: "university",
        children: [
          {
            name: "List",
            path: "/dashboard/admin/yandslist",
          },
          {
            name: "Assigned Teacher",
            path: "/dashboard/admin/yandsteacher",
          },
        ],
      },
      {
        name: "Subject",
        path: "",
        icon: "book",
        children: [
          {
            name: "List",
            path: "/dashboard/admin/subjectlist",
          },
          {
            name: "Assigned Teacher",
            path: "/dashboard/admin/subjectteacher",
          },
        ],
      },
      {
        name: "Account Management",
        path: "",
        icon: "users",
        children: [
          {
            name: "Teacher",
            path: "/dashboard/admin/accountmanageteacher",
          },
          {
            name: "Student",
            path: "/dashboard/admin/accountmanagestudent",
          },
        ],
      },
      {
        name: "Settings",
        path: "",
        icon: "cog",
        children: [
          {
            name: "Quarter",
            path: "/dashboard/admin/settingsquarter",
          },
          {
            name: "Profile",
            path: "/dashboard/admin/settingsprofile",
          },
        ],
      },
    ];
    break;
    case 'Teacher':
    link = [
      {
        name: "Dashboard",
        path: "/dashboard/teacher",
        icon: "home",
        children: [],
      },
      {
        name: "Subject",
        path: "/dashboard/teacher/subject",
        icon: "book",
        children: [],
      },
      {
        name: "Student Management",
        path: "",
        icon: "users",
        children: [
          {
            name: "List",
            path: "/dashboard/teacher/list",
          },
          {
            name: "Grading",
            path: "/dashboard/teacher/grading",
          },
          {
            name: "Manual SMS",
            path: "/dashboard/teacher/sms",
          },
        ],
      },
      {
        name: "Profile",
        path: "/dashboard/teacher/profile",
        icon: "user-alt",
        children: [],
      },
    ];
    break;
    case 'Student':
    link = [
      {
        name: "Dashboard",
        path: "/dashboard/student",
        icon: "home",
        children: [],
      },
      {
        name: "Grades",
        path: "/dashboard/student/grades",
        icon: "medal",
        children: [],
      },
      {
        name: "Profile",
        path: "/dashboard/student/profile",
        icon: "user-alt",
        children: [],
      },
    ];
    break;
    default:
  }
  return (
  <>
  
    <IonPage 
    className="maincontainer"
    style={{
      paddingLeft:
        window.innerWidth > 768
          ? didToggle 
            ? window.innerWidth <= 768
              ? "0rem"
              : "4.5rem"
            : "20rem"
          : "0rem",
    }}
        >
      <IonContent
      >
      <MDBContainer fluid>
      
      <SideNavigation 
        links={link}
        didToggle={didToggle}
        setDidToggle={setDidToggle}
      />
      
        <main
        // className="container"
        // style={{
        //   paddingLeft:
        //     window.innerWidth > 768
        //       ? didToggle 
        //         ? window.innerWidth <= 768
        //           ? "0rem"
        //           : "4.5rem"
        //         : "17.5rem"
        //       : "0rem",
        // }}
        >

        <IonRouterOutlet>
          {/* ADMIN */}
        <Route exact path="/dashboard/admin" component={AdminDashboard}/>
        <Route exact path="/dashboard/admin/yandslist" component={AdminYearAndSectionList}/>
        <Route exact path="/dashboard/admin/yandsteacher" component={AdminYearAndSectionAssignedTeacher}/>
        <Route exact path="/dashboard/admin/subjectlist" component={AdminSubjectList}/>
        <Route exact path="/dashboard/admin/subjectteacher" component={AdminSubjectTeacher}/>
        <Route exact path="/dashboard/admin/accountmanageteacher" component={AdminAccountManagementTeacher}/>
        <Route exact path="/dashboard/admin/accountmanagestudent" component={AdminAccountManagementStudent}/>
        <Route exact path="/dashboard/admin/settingsquarter" component={AdminSettingsQuarter}/>
        <Route exact path="/dashboard/admin/settingsprofile" component={AdminSettingsProfile}/>

        {/* Teacher */}
        <Route exact path="/dashboard/teacher" component={TeacherDashboard}/>
        <Route exact path="/dashboard/teacher/subject" component={TeacherSubjectList}/>
        <Route exact path="/dashboard/teacher/list" component={TeacherList}/>
        <Route exact path="/dashboard/teacher/grading" component={TeacherGrading}/>
        <Route exact path="/dashboard/teacher/sms" component={TeacherSms}/>
        <Route exact path="/dashboard/teacher/profile" component={TeacherProfile}/>

        {/* Student */}
        <Route exact path="/dashboard/student" component={StudentDashboard}/>
        <Route exact path="/dashboard/student/grades" component={StudentGrades}/>
        <Route exact path="/dashboard/student/profile" component={StudentProfile}/>
        </IonRouterOutlet>

        </main>
        </MDBContainer>
      </IonContent>
    </IonPage>
  </>
  );
};

export default Dashboard;
