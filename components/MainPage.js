import React from 'react';
import styles from '../stylesheets/MainPage.css';

const prescriptions = [
  {
    details: 'Hydrocodone Bitartate and Acetaminophen Tablets, USP 5 mg/300 mg',
    name: 'Vicodin',
    patientName: 'Test User',
    quantity: 30,
    status: 'pending',
    time: 30,
    warnings: 'This product is not recommended for use in children younger than \
     6 years due to an increased risk of serious side effects (such as slow/shallow breathing).',
  },
  {
    details: 'Azithromycin 250/500 mg - Oral',
    name: 'Zithromax',
    patientName: 'Test User',
    quantity: 60,
    status: 'approved',
    time: 60,
    warnings: 'This drug can cause a severe allergic reaction. Symptoms can include: trouble breathing, swelling of your throat or tongue. \
        If you develop these symptoms, call 911 or go to the nearest emergency room. \
        Don’t take this drug again if you’ve ever had an allergic reaction to it. Taking it again could be fatal (cause death).',
  },
  {
    details: 'Atorvastatin 40mg, Oral',
    name: 'Lipitor',
    patientName: 'Test User',
    quantity: 50,
    status: 'rejected',
    time: 60,
    warnings: 'Before using this medication, tell your doctor or pharmacist your medical history, especially of: liver disease, kidney disease, alcohol use.',
  },
];

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIdx: 0,
    }
  }

  _updateState(idx) {
    this.setState({
      activeItemIdx: idx,
    })
  }

  toggle1() {
    this.setState({
      shown1: !this.state.shown1
    });
  }

  toggle2() {
    this.setState({
      shown2: !this.state.shown2
    });
  }

  render() {
    const currentItem = prescriptions[this.state.activeItemIdx];
    var shown1 = {
			display: this.state.shown1 ? "block" : "none"
		};

    var shown2 = {
			display: this.state.shown2 ? "block" : "none"
		};

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <span className={styles.headerIcon}>
            <a href="/" />
          </span>
          <div className={styles.loginSignup}>
            <span className={styles.login}>
              Login
            </span>
            <span className={styles.signup}>
              Signup
            </span>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.prescriptionBar}>
            <span className={styles.prescriptionText}>My Prescriptions</span>
            {prescriptions.map((item, idx) => {
              let itemStyle;
              if (item.status.toLowerCase() == 'approved') {
                itemStyle = styles.approved;
              } else if (item.status.toLowerCase() == 'pending') {
                itemStyle = styles.pending;
              } else {
                itemStyle = styles.rejected;
              }
              return (
                <div
                  className={styles.prescription}
                  onClick={this._updateState.bind(this, idx)}
                >
                  <span>{item.name}</span>
                  <span className={itemStyle}></span>
                </div>
              )
            })}
          </div>
          <div className={styles.prescriptionContent}>
            <span className={styles.itemName}>{currentItem.name}
            <button className={styles.btn} id="information" onClick={this.toggle1.bind(this)}>
            <i class="far fa-question-circle"></i>
            </button>
            </span>
            <span className={styles.subheader} style={shown1}>
              {currentItem.details}
            </span>
            <span className={styles.itemWarning}>
              WARNINGS
              <p>{currentItem.warnings}</p>
            </span>
            <div className={styles.prescriptionSummary}>
              <div className={styles.infoBox}>
                <span className={styles.subheader}>
                  Requested quantity
                </span>
                <span className={styles.infoText}>
                  {currentItem.quantity}
                </span>
              </div>
              <div className={styles.infoBox}>
                <span className={styles.subheader}>
                  Requested for
                </span>
                <span className={styles.infoText}>
                  {currentItem.patientName}
                </span>
              </div>
              <div className={styles.infoBox}>
                <span className={styles.subheader}>
                  Duration
                </span>
                <span className={styles.infoText}>
                  {currentItem.time} days
                </span>
              </div>
            </div>
            <div className={styles.signatureFields}>
              <div className={styles.signatureField}>
                <span className={styles.signatureText}>
                  Doctor signature
                </span>
              </div>
              <div className={styles.signatureField}>
                <span className={styles.signatureText}>
                  Pharmacist signature
                </span>

              </div>
            </div>
          </div>

        <div className={styles.footer}>
        <button className={styles.btn} id="MyBtn" onClick={this.toggle2.bind(this)}>About Us</button>
        </div>

          <div id="MyModal" className={styles.modal} style={shown2}>
          <div className={styles.modalcontent}>
            <span className={styles.close} onClick={this.toggle2.bind(this)}>&times;</span>
            <h2>About Veriscribe</h2>
            <p>Veriscribe is ...</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MainPage;
