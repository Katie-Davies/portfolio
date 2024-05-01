import dirtriderImg from '../assets/dirtriderview.png'

function DirtRider() {
  return (
    <>
      <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
        <div className="flex content-center flex-wrap">
          <a
            href="https://github.com/Katie-Davies/DirtRider"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={dirtriderImg}
              alt="view of dirtrider website"
              className="max-w-sm scale-90 hover:scale-100"
            ></img>
          </a>
        </div>

        <div className="dirtrider-bg flex content-start justify-center flex-wrap ml-5">
          <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
            <ul>
              <li className="font-bold mb-2 text-2xl">DirtRider</li>
              <li>
                <strong>Status:</strong> Development V1
              </li>
              <li>
                <strong>Tech: </strong>React | React-Router | Node | Express |
                Typescript | sqlite | Azure AD B2C
              </li>

              <li className="mt-2">
                This is a personal project based on a need I noticed when
                shopping for my own dirtbike. Being able to try out different
                bikes to see which ones suits you best. Allowing people to rent
                out their bikes when they are not using them.
              </li>
              <li className="mt-3">
                <strong>Next steps:</strong> Using PostgreSQL, implementing
                Azure AD B2C, deploying with Azure and implementing a payment
                API.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DirtRider
