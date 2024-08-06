import { Formik, Field, Form } from "formik"

function App() {
  return (
    <main>
      <h1>Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
      <div>
        <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
      </div>
      <Formik initialValues={{ firstName: '', lastName: '', email: '', password: '' }} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}>
        <Form>
          <Field id="firstName" name="firstName" placeholder="First Name"></Field>
          <Field id="lastName" name="lastName" placeholder="Last Name"></Field>
          <Field id="email" name="email" placeholder="Email Address" type="email"></Field>
          <Field id="password" name="password" placeholder="Password" type="password" autoComplete="new-password"></Field>
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
          <p>By clicking the button, you are agreeing to our <br /> <span>Terms and Services</span></p>
        </Form>
      </Formik>
    </main>
  )
}

export default App
