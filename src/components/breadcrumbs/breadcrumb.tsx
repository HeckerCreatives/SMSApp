import React from 'react';
import { IonGrid, IonRow, IonCol} from '@ionic/react';
interface ContainerProps { text1: string, text2: string }

const Breadcrumb: React.FC<ContainerProps> = (props) => {
    const { text1, text2 } = props
  return (
    // <div className='container'>
    <IonGrid>
          <IonRow>
            <IonCol>
            <div className="p-2 rounded fw-bold" style={{background: "#D1D4D6", color: "gray"}}>
            {text1} {text2 ? `> ${text2}`: ""}
            </div>
            </IonCol>
          </IonRow>
    </IonGrid>
    // </div>
  );
};

export default Breadcrumb;