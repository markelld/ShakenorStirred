

function Contact(props) {
  return (
    <div>
      <form>
        <h1>Contact Page</h1> 
        <label htmlFor="name">Name:</label> 
        <input
        // name="name"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        />
        <label htmlFor="email">Email:</label> 
        <input
          // name="name"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        />
        <label htmlFor="message">Message:</label> 
        <input
        // name="message"
        // type="text"
        // value={}
        //onChange={(e) => (e.target.value)}
        />
        <button type="submit">new</button>
      </form>
    </div>
  )
} 

export default Contact;