import Header from "../Components/Header"
import  Footer from "../Components/Footer"
import './AboutUs.css'
const AboutUS =() => {
    return(
<div>
    <Header/>
    <div className="about-section">
  <h1>About Us</h1>
  <p>We are an NFT-based ecommerce store, specializing in unique and one-of-a-kind digital items. Our platform allows artists and creators to share their work with the world and for collectors to discover and own a piece of digital history.</p>
  <p>Our mission is to bring the world of NFTs to the mainstream and to provide a seamless buying and selling experience for everyone.</p>
  <h2>Meet Our Team</h2>
  <div className="team-section">
    <div className="team-member">
      <img src="/D_Images/User2.jpeg" alt="Team Member 1"/>
      <h3>Fahad Rafi</h3>
      <p>Software Engineer</p>
    </div>
    <div className="team-member">
      <img src="/D_Images/User1.jpg" alt="Team Member 2"/>
      <h3>Syed Akash Mazhar</h3>
      <p>Software Developer</p>
    </div>
    <div className="team-member">
      <img src="/D_Images/User3.jpg" alt="Team Member 3"/>
      <h3>Ahmad Arshad</h3>
      <p>Software Analyst</p>
    </div>
  </div>
  <h2>Our Story</h2>
  <p>Our store was founded in [year] by a group of NFT enthusiasts who saw the potential for digital collectibles to revolutionize the art world. We started out small, offering only a few unique items, but quickly grew as the demand for NFTs began to skyrocket. Today, we are proud to offer a wide variety of NFTs from some of the most talented artists and creators in the industry.</p>
  <p>In addition to our online marketplace, we also host regular NFT-themed events and workshops to educate and engage the community. We believe that NFTs have the power to democratize art ownership and make it accessible to people all over the world.</p>
</div>
<Footer/>
        </div>
    )
}
export default AboutUS