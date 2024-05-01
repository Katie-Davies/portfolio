import linkedinImg from '../assets/LinkedIN_black.png'
import githubImg from '../assets/Github_black.png'
import mediumImg from '../assets/Medium_black.png'
function Contact() {
  return (
    <div className="contact-img flex justify-center flex-col content-center flex-wrap">
      <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-20 text-center font-bold">
        Contact
      </h1>
      <div className="flex justify-around w-1/2 flex-wrap">
        <a href="https://www.linkedin.com/in/katie-davies-36351b275/">
          <img
            src={linkedinImg}
            alt="linked in logo"
            className=" h-10 w-10 mt-3"
          ></img>
        </a>
        <a href="https://github.com/Katie-Davies">
          <img
            src={githubImg}
            alt="github logo"
            className="h-10 w-10 mt-3"
          ></img>
        </a>
        <a href="https://medium.com/@millerkatie1990">
          <img
            src={mediumImg}
            alt="Medium logo"
            className=" h-10 w-10 mt-3"
          ></img>
        </a>
      </div>
    </div>
  )
}

export default Contact
