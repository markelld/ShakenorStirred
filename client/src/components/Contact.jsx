import Form from 'react-bootstrap/Form'  
import Button from 'react-bootstrap/Button'


function Contact(props) {
  return ( 
    <Form className="contact">
      <Form.Group >
        <Form.Label >Name</Form.Label>
        <Form.Control size="lg"  type="name" placeholder="" />
      </Form.Group> 
      <Form.Group >
        <Form.Label>Email</Form.Label>
        <Form.Control size="lg"  type="email" placeholder="" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Message</Form.Label>
        <Form.Control size="lg"  as="textarea" rows={3} />
      </Form.Group>  
      <Button variant="light" size="lg">Submit</Button>
    </Form>

  )
} 
export default Contact;   



// function Contact(props) {
//   return (
//     <div>
//       <form>
//         <h1>Contact Page</h1> 
//         <label htmlFor="name">Name:</label> 
//         <input
//         // name="name"
//         // type="text"
//         // value={}
//         //onChange={(e) => (e.target.value)}
//         />
//         <label htmlFor="email">Email:</label> 
//         <input
//           // name="name"
//         // type="text"
//         // value={}
//         //onChange={(e) => (e.target.value)}
//         />
//         <label htmlFor="message">Message:</label> 
//         <input
//         // name="message"
//         // type="text"
//         // value={}
//         //onChange={(e) => (e.target.value)}
//         />
//         <button type="submit">new</button>
//       </form>
//     </div>
//   )
// } 

// export default Contact; 