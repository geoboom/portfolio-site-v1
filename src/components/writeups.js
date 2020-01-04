import React, { Fragment } from 'react';

const AFB = () => (
  <div>
    <p>
      AFB is a shuttlebus booking and ticketing mobile application that helps
      coordinate and streamline shuttlebus services at a military camp.
      Passengers use the app to book tickets and be informed of the shuttlebus'
      location while shuttlebus drivers use the app to scan tickets (QR Code) on
      passenger boarding. Passengers and drivers receive real-time information
      of ticket confirmation.
    </p>
    <p>
      <h3 style={{ marginBottom: 5, fontWeight: 'normal' }}>Technology</h3>
      AFB is built using React Native with a nodeJS backend to handle API
      requests and runs on Heroku. It is fully real-time via socket.io on the
      frontend and backend encapsulating the websockets protocol. It uses
      MongoDB and Redis to handle the database and session cache respectively.
    </p>
  </div>
);

const TaskMe = () => (
  <div>
    <p>
      A feature-packed, real-time task assignment mobile application. Using the
      app, supervisors create jobs which contain tasks. They then assign these
      jobs to workers who collaborate to finish the job, possibly by working as
      a team to finish individual tasks. Supervisors can see the progress of
      each job in real-time as workers mark individual tasks as complete. Jobs
      and tasks are flexible enough to suit business needs: they have
      customizable preset categories/types; images and pdfs can also be attached
      to jobs for workers' reference.
    </p>
    <p>
      <h3 style={{ marginBottom: 5, fontWeight: 'normal' }}>Technology</h3>
      Similar to AFB, TaskMe is built using React Native with a nodeJS backend.
      It uses socket.io and Google Firebase push notifications. It also uses
      MongoDB (running on mlab) and Redis.
    </p>
  </div>
);

const ALPR = () => (
  <div>
    <p>Automatic License Plate Recognition System.</p>
    <p>
      <h3 style={{ marginBottom: 5, fontWeight: 'normal' }}>Technology</h3>
      AFB is built using React Native with a nodeJS backend to handle API
      requests, and runs on Heroku. It is fully real-time via socket.io on the
      frontend and backend encapsulating the websockets protocol. It uses
      MongoDB and Redis to handle the database and session cache respectively.
    </p>
  </div>
);

const WeTrack = () => (
  <div>
    <p>
      Defect Monitoring and Tracking System. Used to track defects (e.g. broken
      light bulb) and their rectification progress in company premises. Admins
      create preset defect categories and unit numbers/locations. Workers in
      charge of collecting defect reports and contacting external defect repair
      agency will record and update defects through this system. This system
      also allows them to generate defect reports based on custom filters to
      present to higher management, as well as import/export defect records for
      synchronization purposes.
    </p>
    <p>
      <h3 style={{ marginBottom: 5, fontWeight: 'normal' }}>Technology</h3>
      WeTrack is built using VBA (Visual Basic for Applications) in Microsoft
      Access. Database-related operations are handled using SQL.
    </p>
  </div>
);

const styles = {
  img: {
    width: '35%',
    maxWidth: '275px',
    height: 'auto',
  },
  img2: {
    width: '95%',
    maxWidth: '1500px',
    height: 'auto',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    width: 15,
  },
};

const writeups = [
  {
    title: 'Awesome Ferry Booking (AFB)',
    textContent: <AFB />,
    visualContent: [
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img}
            src={require('../assets/images/1-afb/0004.png')}
          />
          <div style={styles.spacer} />
          <img
            style={styles.img}
            src={require('../assets/images/1-afb/0006.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Trip booking and ticket</p>
        </div>
      </Fragment>,
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img}
            src={require('../assets/images/1-afb/0002.png')}
          />
          <div style={styles.spacer} />
          <img
            style={styles.img}
            src={require('../assets/images/1-afb/0007.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Trips to make for the day and ticket scanning</p>
        </div>
      </Fragment>,
    ],
  },
  {
    title: 'TaskMe',
    textContent: <TaskMe />,
    visualContent: [
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img}
            src={require('../assets/images/2-taskme/0002.png')}
          />
          <div style={styles.spacer} />
          <img
            style={styles.img}
            src={require('../assets/images/2-taskme/0006.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>List of jobs/projects and the tasks under each job</p>
        </div>
      </Fragment>,
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img}
            src={require('../assets/images/2-taskme/0005.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Create new task screen</p>
        </div>
      </Fragment>,
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img}
            src={require('../assets/images/2-taskme/0013.png')}
          />
          <div style={styles.spacer} />
          <img
            style={styles.img}
            src={require('../assets/images/2-taskme/0014.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>
            Worker ticking off items on checklist of task (reflected in
            real-time on supervisor's app)
          </p>
        </div>
      </Fragment>,
    ],
  },
  {
    title: 'ALPR Gantry System',
    textContent: <ALPR />,
    visualContent: [
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img2}
            src={require('../assets/images/3-alpr/1.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Main dashboard view. Connected to internal nodeJS server.</p>
        </div>
      </Fragment>,
    ],
  },
  {
    title: 'WeTrack',
    textContent: <WeTrack />,
    visualContent: [
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img2}
            src={require('../assets/images/4-wetrack/1.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Main dashboard view</p>
        </div>
      </Fragment>,
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img2}
            src={require('../assets/images/4-wetrack/2.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>
            Report Generation: filter and export records to Excel/csv format
          </p>
        </div>
      </Fragment>,
      <Fragment>
        <div style={styles.div}>
          <img
            style={styles.img2}
            src={require('../assets/images/4-wetrack/3.png')}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>Report generated and viewed in Excel</p>
        </div>
      </Fragment>,
    ],
  },
];

export default writeups;
