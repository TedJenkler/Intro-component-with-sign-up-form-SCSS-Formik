import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import alert from './assets/images/alert.png';

function App() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required')
  });

  return (
    <main className="main-container">
      <div className="header-section">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className="form-and-promo">
        <div className="promo-section">
          <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
        </div>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ errors, touched }) => (
            <Form className="form-container">
              <div className="field-container">
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className={errors.firstName && touched.firstName ? 'input-error' : ''}
                />
                {errors.firstName && touched.firstName ? (
                  <div className="error-container">
                    <img src={alert} alt="alert" className="alert-icon" />
                    <div className="error-message">{errors.firstName}</div>
                  </div>
                ) : null}
              </div>

              <div className="field-container">
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className={errors.lastName && touched.lastName ? 'input-error' : ''}
                />
                {errors.lastName && touched.lastName ? (
                  <div className="error-container">
                    <img src={alert} alt="alert" className="alert-icon" />
                    <div className="error-message">{errors.lastName}</div>
                  </div>
                ) : null}
              </div>

              <div className="field-container">
                <Field
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  className={errors.email && touched.email ? 'input-error' : ''}
                />
                {errors.email && touched.email ? (
                  <div className="error-container">
                    <img src={alert} alt="alert" className="alert-icon" />
                    <div className="error-message">{errors.email}</div>
                  </div>
                ) : null}
              </div>

              <div className="field-container">
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  autoComplete="new-password"
                  className={errors.password && touched.password ? 'input-error' : ''}
                />
                {errors.password && touched.password ? (
                  <div className="error-container">
                    <img src={alert} alt="alert" className="alert-icon" />
                    <div className="error-message">{errors.password}</div>
                  </div>
                ) : null}
              </div>

              <button type="submit">CLAIM YOUR FREE TRIAL</button>
              <p>By clicking the button, you are agreeing to our <br /> <span>Terms and Services</span></p>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default App;